import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    // image images on either side of this container
    <div className={styles['contact-form-container']}>
      <div className={styles['contact-image-container']}>
        {/* need to change */}
        <img src="https://avatars.githubusercontent.com/u/74884805?v=4"></img>
      </div>
      <p>
        Let's get in touch!
      </p>
      <div className={styles['contact-form']}>
        <button>
          <a href="https://github.com/Cudderson">
            Github Profile
          </a>
        </button>
        <button>
          <a href="mailto:codered1227@gmail.com">
            Contact By Email
          </a>
        </button>
        <button>
          <a href="https://www.linkedin.com/in/cody-weller-a5ba80222">
            LinkedIn Profile
          </a>
        </button>
      </div>
    </div>
  )
}

export default ContactForm;