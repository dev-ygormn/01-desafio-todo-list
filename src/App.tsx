import { Header } from './components/Header'
// import { NewTask } from './components/NewTask'
import styles from './App.module.css'
import './global.css'
import { ContentTasks } from './components/ContentTasks.tsx'
// import { Task } from './components/Task.tsx'


// criar array de conteudo das task

//iterar pela array com o map para criar o componente <Task>

//enviar pelas propriedades os dados do array para o componente
//task recuperar e exibir em tela




export function App() {

  return (

    <div>
      <Header />
      <div className={styles.wrapper}>
        <ContentTasks />
        
      </div>
    </div>
  )
}
