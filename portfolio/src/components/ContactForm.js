import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <div className={styles['contact-form-container']}>
      Contact Form
      <p>
        just include a form where users can contact you via email.
        <br></br>
        also, maybe more github/linkedin links?
      </p>
    </div>
  )
}

export default ContactForm;