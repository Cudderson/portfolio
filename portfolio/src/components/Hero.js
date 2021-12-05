import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles['hero-container']}>
      <h2>I'm a web developer from Wisconsin.</h2>
      <h2>I create efficient tech solutions using</h2>
      <h2>passion, persistence, and a positive attitude.</h2>
      {/* <div className={styles['floating-image']}></div> */}
    </div>
  )
}

export default Hero;