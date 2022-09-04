import styles from "./NavBar.module.scss";

function NavBar(props) {
    const { children } = props;

    return (
        <nav className={styles.main}>
            <ul>
                {children.map((child, i) => (
                    <li key={i}>{child}</li>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar;
