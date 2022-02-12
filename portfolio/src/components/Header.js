import styles from "./Header.module.css";
import HeaderBrand from "./HeaderBrand";
import HeaderNav from "./HeaderNav";

const Header = ({ theme, setTheme }) => {
  return (
    <header className={styles.header}>
      <div>
        <HeaderBrand />
        <HeaderNav theme={theme} setTheme={setTheme} />
      </div>
    </header>
  );
};

export default Header;
