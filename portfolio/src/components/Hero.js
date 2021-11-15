import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h2>HELLO, MY NAME IS CODY</h2>
      {/* special effect on 'code' ? */}
      <h1>I create with code.</h1>
      <p>
        I'm an aspiring software developer from the U.S.
        <br/>
        Algorithmically-minded, I deeply enjoy finding clean and efficient solutions to problems.
      </p>
    </div>
  )
}

export default Hero;