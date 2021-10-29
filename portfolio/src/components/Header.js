import styles from './Header.module.css';
import HeaderBrand from './HeaderBrand';
import HeaderNav from './HeaderNav';

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <HeaderBrand />
        <HeaderNav />
      </div>
    </header>
  )
}

export default Header;