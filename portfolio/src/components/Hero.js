import styles from './Hero.module.css';

// recreate hero section
const Hero = () => {
  return (
    <div className={styles['hero-container']}>
      {/* this should contain my avatar, as well as "about" text */}
      <div className={styles['avatar-container']}>
        <img src="https://avatars.githubusercontent.com/u/74884805?v=4" alt=''></img>
      </div>
      <div className={styles['hero-content']}>
        <p>Hello, my name is Cody</p>
        <p>
           I'm a full-stack developer with a passion for the modern web. 
        </p>
        <p>
          Deeply committed to life-long learning,
          I dedicate much of my free time to improving my competency as a developer.
        </p>
      </div>
    </div>
  )
}

// const Hero = () => {
//   return (
//     <div className={styles['hero-container']}>
//       <h2>I'm a frontend developer</h2>
//       <h2>with a passion for the modern web.</h2>
//       {/* <h2>I'm a web developer from Wisconsin.</h2>
//       <h2>I create efficient tech solutions using</h2>
//       <h2>passion, persistence, and a positive attitude.</h2> */}
//     </div>
//   )
// }

export default Hero;