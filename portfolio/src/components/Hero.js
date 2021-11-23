import styles from './Hero.module.css';

const Hero = () => {
  return (
    // <div className={styles.hero}>
    //   <h2>HELLO, MY NAME IS CODY</h2>
    //   {/* special effect on 'code' ? */}
    //   <h1>I create with code.</h1>
    //   <p>
    //     I'm an aspiring software developer from the U.S.
    //     <br/>
    //     Algorithmically-minded, I deeply enjoy finding clean and efficient solutions to problems.
    //   </p>
    // </div>

    // design new Hero (more minimal), but still looks nice
    <div className={styles['hero-container']}>
      <h2>
        {/* too long! 3 lines = perfect */}
        I'm a software developer based in Wisconsin.
        <br/>
        Focused on the web, I build creative and performant tech solutions.
        <div className={styles['floating-image']}></div>
      </h2>
      
    </div>
  )
}

export default Hero;