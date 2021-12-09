import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles['hero-container']}>
      <h2>I'm a frontend developer</h2>
      <h2>with a passion for the modern web.</h2>
      {/* <h2>I'm a web developer from Wisconsin.</h2>
      <h2>I create efficient tech solutions using</h2>
      <h2>passion, persistence, and a positive attitude.</h2> */}
    </div>
  )
}

export default Hero;