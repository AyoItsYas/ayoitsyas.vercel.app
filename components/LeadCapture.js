import styles from "./LeadCapture.module.scss";

function LeadCapture() {
  return (
    <div className={styles.main}>
      <div className={styles.inner}>
        <form>
          XFRT
          <input />
        </form>
      </div>
    </div>
  );
}

function openLeadCapture(event) {
  window.alert("Haven't implemented this yet :(");
}

function closeLeadCapture(event) {
  window.alert("Haven't implemented this yet :(");
}

export { LeadCapture, openLeadCapture, closeLeadCapture };
