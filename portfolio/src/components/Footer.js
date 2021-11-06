import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={styles['footer-inner']}>
        <div>
          <div>top 1</div>
          <br />
          <div>bottom 1</div>
        </div>
        <div>
          <div>top 2</div>
          <br />
          <div>bottom 2</div>
        </div>
        <div>
          <div>top 3</div>
          <br />
          <div>bottom 3</div>
        </div>
        <div>
          <div>top 4</div>
          <br />
          <div>bottom 4</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;