import styles from "./HeaderNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderNav = ({ theme, setTheme }) => {
  console.log(theme);
  const handleSetTheme = function () {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      setTheme("light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <div className={styles["header-nav"]}>
      <a href="https://github.com/Cudderson" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className={styles.icon} icon={["fab", "github"]} />
      </a>
      <a
        href="https://www.linkedin.com/in/cody-weller-a5ba80222/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className={styles.icon} icon={["fab", "linkedin"]} />
      </a>
      <button>
        <FontAwesomeIcon
          className={styles.icon}
          icon={theme === "dark" ? ["fa", "moon"] : ["fa", "sun"]}
          onClick={handleSetTheme}
        />
      </button>
    </div>
  );
};

export default HeaderNav;
