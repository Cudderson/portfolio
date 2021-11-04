import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h2>HELLO, MY NAME IS CODY</h2>
      {/* special effect on 'code' ? */}
      <h1>I make websites.</h1>
      <p>
        I'm an aspiring web developer from the US. I use code to build creative and performant tech solutions on the web.
      </p>
    </div>
  )
}

export default Hero;