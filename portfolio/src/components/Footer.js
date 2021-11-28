import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={styles['footer-inner']}>
        <p>
          <strong>&copy; 2021</strong>
          <span>Cody Weller</span>
        </p>
        <p className={styles['footer-social']}>
          <strong>Social</strong>
          <a href='https://github.com/Cudderson'>Github</a>
          <span>-</span>
          <a href='https://www.linkedin.com/in/cody-weller-a5ba80222'>LinkedIn</a>
          <span>-</span>
          <a href='mailto:codered1227@gmail.com'>Email</a>
        </p>
        <div className={styles['footer-item-right']}>
          <strong>right  top</strong>
          <span>right bottom</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;