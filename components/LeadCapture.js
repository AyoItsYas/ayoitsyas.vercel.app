import styles from "./LeadCapture.module.scss";

const encapsulateInCodeblock = (data) => "```" + data + "```";

function postLeadData(event) {
  event.preventDefault();
  const url =
    "https://discord.com/api/webhooks/1031543950600839188/YKEJ1z56D4_WNLzVlHTvT47Nq3PYOQ_9GtG_PXM0QKo71MRnzX3Cx35mkaRSSePTO2AG";

  const data = {
    name: $("#lc-form-name").val(),
  };

  const content =
    "@everyone" +
    encapsulateInCodeblock(`
Name   : ${data.name}
Email  : ${data.email}
Message: ${data.message}`);

  $.ajax(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({ content: content }),
    success: closeLeadCapture,
  });
}

function LeadCapture() {
  return (
    <div id='lc-overlay' className={styles.main}>
      <div className={styles.inner}>
        <button
          className={styles.closeOverlayButton}
          onClick={closeLeadCapture}
        >
          ✕
        </button>
        <h2>Let&apos;s connect</h2>
        <form id='lc-form'>
          <fieldset>
            <label htmlFor='lc-form-name'>Name</label>
            <input required='true' id='lc-form-name' type='name' />
          </fieldset>

          <fieldset>
            <label>Email</label>
            <input required='true' d id='lc-form-email' type='email' />
          </fieldset>

          <fieldset>
            <label>Message</label>
            <textarea required='true' d id='lc-form-message' type='text' />
          </fieldset>

          <button type='submit' onClick={postLeadData}>
            Submit
          </button>
        </form>

        <p>
          Prefer{" "}
          <a href='#contact-menu' onClick={closeLeadCapture}>
            social media?
          </a>
        </p>
      </div>
    </div>
  );
}

function openLeadCapture(event) {
  $("#lc-overlay").removeClass("dragFromTopRev");
  $("#lc-overlay").addClass("dragFromTop");
}

function closeLeadCapture(event) {
  $("#lc-form")[0].reset();

  $("#lc-overlay").addClass("dragFromTopRev");
  $("#lc-overlay").removeClass("dragFromTop");
}

export { LeadCapture, openLeadCapture, closeLeadCapture };
