import styles from './Header.module.css';
import HeaderBrand from './HeaderBrand';

const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderBrand />
    </header>
  )
}

export default Header;