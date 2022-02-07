import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    // image images on either side of this container
    <div className={styles['contact-form-container']}>
      <div className={styles['contact-image-container']}>
        {/* need to change */}
        <img src="https://avatars.githubusercontent.com/u/74884805?v=4" alt="my_avatar"></img>
      </div>
      <p>
        Let's get in touch!
      </p>
      <div className={styles['contact-form']}>
        <a href="https://github.com/Cudderson">
          Github Profile
        </a>
        <a href="mailto:codered1227@gmail.com">
          Contact By Email
        </a>
        <a href="https://www.linkedin.com/in/cody-weller-a5ba80222">
          LinkedIn Profile
        </a>
      </div>
    </div>
  )
}

export default ContactForm;