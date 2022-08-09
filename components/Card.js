import classes from "./Card.module.scss";

function CardTitle(props) {
    const { id, title } = props;
    return (
        <h1
            id={id ? id : title.toLowerCase().replace(" ", "-")}
            className={classes.cardTitle}
        >
            {title}
            <label>{title}</label>
        </h1>
    );
}

function Card(props) {
    const { id, title = "", children } = props;
    return (
        <div
            id={id ? id : title.toLowerCase().replace(" ", "-")}
            title={title}
            className={classes.main}
        >
            <div className={classes.inner}>{children}</div>
        </div>
    );
}

export { Card, CardTitle };
export default Card;
