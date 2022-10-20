import React from "react";
import EmblaCarousel from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import styles from "./Carousel.module.scss";

function Carousel(props) {
    let { children } = props;
    const {
        style,
        itemStyle,
        groupBy = false,
        options = { loop: true },
        autoPlay = false,
    } = props;

    if (groupBy) {
        let temp = [];
        for (let i = 0; i < children.length; i += groupBy) {
            temp.push(children.slice(i, i + groupBy));
        }
        children = temp;
    }

    let plugins = [];

    if (autoPlay) {
        const autoplayOptions = { delay: autoPlay * 1000 };
        plugins.push(Autoplay(autoplayOptions));
    }

    const [emblaRef] = useEmblaCarousel(options, plugins);

    return (
        <div className={styles.main} ref={emblaRef} style={style}>
            <div className={styles.container}>
                {children.map((group, i) => (
                    <div key={i} className={styles.slide} style={itemStyle}>
                        {group}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
