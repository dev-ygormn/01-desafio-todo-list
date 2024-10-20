import { Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'
import { TodoTask } from './ContentTasks'
import { ChangeEvent } from 'react'
// import { ChangeEvent, useState } from 'react';

// interface TodoDescribe {
//   todo: string
//   onDeleteTask: (task : string) => void
//   // onConclued: (event: Event) => Event
// }

interface Task {
  data: TodoTask
  onDeleteTask: (id : number) => void
  checkedTask: (id : number, check : boolean) => void
}

export function Task({ data, onDeleteTask, checkedTask}:Task) {


  // const [countConclued, setCountConclued] = useState(0);
  

  // function taskChecked(event: ChangeEvent<HTMLInputElement>) {

  //     if(event.target.checked) {
  //       setCountConclued((state) => {
  //         return state + 1;
  //       })
  //     } else if (!event.target.checked) {
  //       setCountConclued((state) => {
  //         return state - 1;
  //       })
  //     }

  //     return console.log(countConclued);
  // }

  function handleDeleteTask() {
    onDeleteTask(data.id)
  }

  function concluedTask(event: ChangeEvent<HTMLInputElement>) {
    const check = event.target.checked;
    checkedTask(data.id, check)
  }

  return (
    <div className={styles.labelTask}>
      <label>
          <div className={styles.checkWrapper}>
            <input type='checkbox' onChange={concluedTask}/>
            <span className={styles.checkmark}></span>
            <p className={styles.labelTaskCheck}>
              {data.content}
            </p>
          </div>
      </label>
      <button onClick={handleDeleteTask} title='Deletar Task'>
        <Trash size={24}/>
      </button>
    </div>
  )
}