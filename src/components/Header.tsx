import styles from './Header.module.css'
import rocketLogo from '../assets/rocket.svg'

export function Header() {
  return (
    <div className={styles.header}>
      <img src={rocketLogo} />
      to<span>do</span>
    </div>
  )

}