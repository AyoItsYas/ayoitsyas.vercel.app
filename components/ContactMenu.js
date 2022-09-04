import Image from "next/image";
import styles from "./ContactMenu.module.scss";

function ContactMenu(props) {
    const { id, title, style, children, profilePicture } = props;

    return (
        <div id={id} title={title} style={style} className={styles.main}>
            <div className={styles.profilePicture}>
                <Image
                    layout='fill'
                    alt='Profile Profile'
                    src={profilePicture}
                />
            </div>
            {children}
        </div>
    );
}

function ContactAction(props) {
    let { title } = props;
    const { icon, href, data, style } = props;

    function onMouseEnter(event) {
        const target = event.target.getElementsByTagName("label")[0];
        if (target) {
            const data = target.getAttribute("data");
            const label = target.getAttribute("label");
            if (data && label) {
                target.style.opacity = 0;
                setTimeout(function () {
                    target.innerHTML = data;
                    target.style.opacity = 1;
                }, 200);
            }
        }
    }

    function onMouseLeave(event) {
        const target = event.target.getElementsByTagName("label")[0];

        if (target) {
            const data = target.getAttribute("data");
            const label = target.getAttribute("label");
            if (data && label) {
                target.style.opacity = 0;
                setTimeout(function () {
                    target.innerHTML = label;
                    target.style.opacity = 1;
                }, 200);
            }
        }
    }

    return (
        <a
            title={title}
            href={href}
            target='_'
            style={style}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <i className={icon} />
            <label style={{ wordWrap: "break-word" }} label={title} data={data}>
                {title}
            </label>
        </a>
    );
}

export { ContactMenu, ContactAction };
export default ContactMenu;
