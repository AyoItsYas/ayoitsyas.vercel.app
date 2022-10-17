import styles from "./LeadCapture.module.scss";

const encapsulateInCodeblock = (data) => "```" + data + "```";

function postLeadData(event) {
  event.preventDefault();
  const url =
    "https://discord.com/api/webhooks/1031543950600839188/YKEJ1z56D4_WNLzVlHTvT47Nq3PYOQ_9GtG_PXM0QKo71MRnzX3Cx35mkaRSSePTO2AG";

  const data = {
    name: $("#lc-form-name").val(),
    email: $("#lc-form-email").val(),
    message: $("#lc-form-message").val(),
  };

  const valid = Object.values(data).every((value) => Boolean(value));
  console.log(valid);

  if (valid) {
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
    return true;
  } else {
    return false;
  }
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
            <input
              required='true'
              id='lc-form-name'
              type='name'
              placeholder='---'
            />
          </fieldset>

          <fieldset>
            <label>Email</label>
            <input
              required='true'
              d
              id='lc-form-email'
              type='email'
              placeholder='---'
            />
          </fieldset>

          <fieldset>
            <label style={{ bottom: "-15px" }}>Message</label>
            <textarea
              required='true'
              d
              id='lc-form-message'
              type='text'
              placeholder='---'
            />
          </fieldset>

          <button type='submit' onClick={submitLeadData}>
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

function submitLeadData(event) {
  if (postLeadData(event)) {
    closeLeadCapture();
  }
}

export { LeadCapture, openLeadCapture, closeLeadCapture, submitLeadData };
