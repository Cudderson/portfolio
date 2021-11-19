import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={styles['footer-inner']}>
        <p>
          <span>c 2021</span>
          <br/>
          <span>Cody Weller</span>
        </p>
        <p>
          <span>Social</span>
          <br/>
          <span>(Github / LinkedIn)</span>
        </p>
        {/*  display this one on far right */}
        <div className={styles['footer-item-right']}>
          <span>right  top</span>
          <br/>
          <span>right bottom</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;