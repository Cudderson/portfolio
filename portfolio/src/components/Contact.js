import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles['contact-form-container']}>
      <h3>
        Contact Me
      </h3>
      <div className={styles['contact-form']}>
        <a href="https://github.com/Cudderson">
          <FontAwesomeIcon icon={['fab', 'github']} />
          Github
        </a>
        <a href="mailto:codered1227@gmail.com">
          <FontAwesomeIcon icon={['fas', 'envelope']} />
          Email
        </a>
        <a href="https://www.linkedin.com/in/cody-weller-a5ba80222">
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Contact;