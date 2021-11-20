import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    // image images on either side of this container
    <div className={styles['contact-form-container']}>
      <div className={styles['contact-image-container']}>
        <img src="https://avatars.githubusercontent.com/u/74884805?v=4"></img>
      </div>
      <div className={styles['contact-form']}>
        <p>Let's get in touch!</p>
        <button><a href="mailto:codered1227@gmail.com" className={styles['email-link']}>Contact By Email</a></button>
      </div>
    </div>
  )
}

export default ContactForm;