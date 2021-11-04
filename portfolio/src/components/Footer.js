import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={styles['footer-inner']}>
        <p>
          <div>top 1</div>
          <br />
          <div>bottom 1</div>
        </p>
        <p>
          <div>top 2</div>
          <br />
          <div>bottom 2</div>
        </p>
        <p>
          <div>top 3</div>
          <br />
          <div>bottom 3</div>
        </p>
        <p>
          <div>top 4</div>
          <br />
          <div>bottom 4</div>
        </p>
      </div>
    </footer>
  )
}

export default Footer;