import styles from './HeaderNav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeaderNav = () => {

  return (
    <div className={styles['header-nav']}>
        <a href="https://github.com/Cudderson" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className={styles.icon} icon={['fab', 'github']} />
        </a>
        <a href="https://www.linkedin.com/in/cody-weller-a5ba80222/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className={styles.icon} icon={['fab', 'linkedin']} />
        </a>
    </div>
  )
}

export default HeaderNav;