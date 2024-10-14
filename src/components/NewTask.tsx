import styles from './NewTask.module.css'
import { PlusCircle } from "@phosphor-icons/react"

export function NewTask() {
  return (
    <div className={styles.newTaskInput}>
      <form className={styles.formTask}>

        <textarea
          name="newTask"
          placeholder='Adicione uma nova tarefa'
        />

        <button>
          Criar
          <PlusCircle size={16} weight='bold' />
        </button>
      </form>
    </div>
  )
}