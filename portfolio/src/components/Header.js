import styles from "./Header.module.css";
import HeaderBrand from "./HeaderBrand";
import HeaderNav from "./HeaderNav";

const Header = ({ theme, setTheme, avatar }) => {
  return (
    <header className={styles.header}>
      <div>
        <HeaderBrand avatar={avatar} />
        <HeaderNav theme={theme} setTheme={setTheme} />
      </div>
    </header>
  );
};

export default Header;
