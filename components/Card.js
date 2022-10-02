import styles from "./Card.module.scss";

function CardTitle(props) {
  const { title } = props;
  return (
    <h1 className={styles.cardTitle}>
      {title}
      <label>{title}</label>
    </h1>
  );
}

function Card(props) {
  const { id, style, children } = props;
  return (
    <div id={id} style={style} className={styles.main}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
}

export { Card, CardTitle };
export default Card;
