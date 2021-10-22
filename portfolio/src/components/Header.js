import styles from './Header.module.css';
import HeaderBrand from './HeaderBrand';
import HeaderNav from './HeaderNav';

const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderBrand />
      <HeaderNav />
    </header>
  )
}

export default Header;