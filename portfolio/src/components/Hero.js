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
        Focused mostly on the web, I mix my love for technology with my artistic nature to build creative tech solutions.
        {/* <div className={styles['floating-image']}>this will be some kind of floating image</div> */}
      </h2>
      
    </div>
  )
}

export default Hero;