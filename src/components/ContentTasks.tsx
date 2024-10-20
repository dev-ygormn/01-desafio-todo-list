import styles from "./ContentTasks.module.css"
import clipboard from "../assets/clipboard.svg"
import { PlusCircle } from "@phosphor-icons/react"
import { Task } from "./Task"
import { FormEvent, InvalidEvent, useState } from "react"

// trocar array para useState
// export const describeTasks = [ 
//   {
//     describeTask: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
//   },
//   {
//     describeTask: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, repudiandae ab quae natus aliquid repellat ut, molestiae blanditiis cum aperiam fugit facilis delectus. Veritatis officia perferendis similique, fugiat quam eveniet"
//   }
// ]

export interface TodoTask {
  id: number,
  content: string,
  isConclued?: boolean
}


export function ContentTasks() {

  const [todoList, setTodoList] = useState<TodoTask[]>([])

  // const [countConclued, setCountConclued] = useState(0);
  

  // function taskChecked(event: ChangeEvent<HTMLInputElement>) {

  //     if(!event.target.checked) {
  //       setCountConclued((state) => {
  //         return state + 1;
  //       })
  //     }

  //     return console.log(event);
  // }
  
  // const [newTodoList, setNewTodoList] = useState<todoTask[]>([])
  const [inputValue, setInputValue] = useState('')
  
  function handleNewTask(event: FormEvent) {
    event.preventDefault();

    const newTodoTask:TodoTask = {
      id: new Date().getTime(),
      content: inputValue
    }
  
    setTodoList((state) => [...state, newTodoTask]);
    setInputValue('');
  
  }

  function deleteTask(id: number) {
    const tasksWithoutDeleteOne = todoList.filter(task => {
      return task.id != id
    })

    setTodoList(tasksWithoutDeleteOne);
  }

  function checkedTask (id: number, check: boolean) {
    const tasksUpdateChecked = todoList.map(task => {
      if(task.id === id) {
        // task.isConclued = check
        return { ...task, isConclued: check }
      }

      return {...task}
    })

    setTodoList(tasksUpdateChecked);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Este Campo é obrigatório!")
  }



  function emptyTodo() {
    if (todoList.length === 0) {
      return (
        <div className={styles.contentTasks}>
          <img src={clipboard} />
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )
    }
  }

  const checkedTasksCounter = todoList.reduce((prevValue, currentTask) => {
    if (currentTask.isConclued) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  return (
  
    <div className={styles.newTaskInput}>
      <form onSubmit={handleNewTask} className={styles.formTask}>

        <textarea
          name="newTask"
          placeholder='Adicione uma nova tarefa'
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          onInvalid={handleNewTaskInvalid}
          required
        />

        <button
          type="submit"
        >
          Criar
          <PlusCircle size={16} weight='bold' />
        </button>
      </form>

      <section>
        <div className={styles.headerTasks}>
          <div className={styles.infoCreateTasks}>
            Tarefas criadas <span>{todoList.length}</span>
          </div>
          <div className={styles.infoConcluedTasks}>
            Concluídas <span>{checkedTasksCounter} de {todoList.length}</span>
          </div>
        </div>
        {/* <div className={styles.contentTasks}>
          <img src={clipboard} />
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div> */}

        {emptyTodo()}

        <div className={styles.todoList}>
          {todoList.map(todo => 
            {
              return (
                <Task 
                  key={todo.id}
                  data={todo}
                  onDeleteTask={deleteTask}
                  checkedTask={checkedTask}
                  // onToggleTaskStatus={handleToggleTask}
                />
              ) 
              
            })
          }
        </div>
      </section>

    </div>


    // <section>
    //   <header className={styles.headerTasks}>
    //     <div className={styles.infoCreateTasks}>
    //       Tarefas criadas <span>0</span>
    //     </div>
    //     <div className={styles.infoConcluedTasks}>
    //       Concluídas <span>0</span>
    //     </div>
    //   </header>
    //   <div className={styles.contentTasks}>
    //     <img src={clipboard} />
    //     <p>Você ainda não tem tarefas cadastradas</p>
    //     <p>Crie tarefas e organize seus itens a fazer</p>
    //   </div>
    // </section>

  )
}