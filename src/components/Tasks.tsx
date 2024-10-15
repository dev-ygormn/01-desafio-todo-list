import styles from "./Tasks.module.css"
import clipboard from "../assets/clipboard.svg"

export function Tasks() {
  return (
    <section>
      <header className={styles.headerTasks}>
        <div className={styles.infoCreateTasks}>
          Tarefas criadas <span>0</span>
        </div>
        <div className={styles.infoConcluedTasks}>
          Concluídas <span>0</span>
        </div>
      </header>
      <div className={styles.contentTasks}>
        <img src={clipboard} />
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </section>
  )
}