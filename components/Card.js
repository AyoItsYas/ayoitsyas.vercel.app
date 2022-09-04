import styles from "./Card.module.scss";

function CardTitle(props) {
    const { id, title } = props;
    return (
        <h1
            id={id ? id : title.toLowerCase().replace(" ", "-")}
            className={styles.cardTitle}
        >
            {title}
            <label>{title}</label>
        </h1>
    );
}

function Card(props) {
    const { id, title = "", style, children } = props;
    return (
        <div
            id={id ? id : title.toLowerCase().replace(" ", "-")}
            title={title}
            style={style}
            className={styles.main}
        >
            <div className={styles.inner}>{children}</div>
        </div>
    );
}

export { Card, CardTitle };
export default Card;
