import styles from "./NavBar.module.scss";

import { TiThMenu } from "react-icons/ti";

function NavBar(props) {
  const { children } = props;

  return (
    <nav className={styles.main}>
      <h1>Yasiru Dharmathilaka</h1>
      <ul className={styles.desktopNavigation}>
        {children.map((child, i) => (
          <li key={i}>{child}</li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
