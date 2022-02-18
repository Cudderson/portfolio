import styles from "./HeaderNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderNav = ({ theme, setTheme }) => {
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
      <a
        href="https://github.com/Cudderson"
        target="_blank"
        rel="noreferrer"
        aria-label="github"
      >
        <FontAwesomeIcon className={styles.icon} icon={["fab", "github"]} />
      </a>
      <a
        aria-label="linkedin"
        href="https://www.linkedin.com/in/cody-weller-a5ba80222/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className={styles.icon} icon={["fab", "linkedin"]} />
      </a>
      <button name="sun-moon">
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
