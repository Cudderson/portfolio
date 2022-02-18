import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";
import styles from "./ImageSlider.module.css";

const ImageSlider = (props) => {
  const [display_index, setDisplayIndex] = useState(0);
  const sliderElement = useRef(null);

  useEffect(() => {
    // when the display index changes, re-run the animation
    if (display_index !== 0) {
      sliderElement.current.classList.add(styles['flash-animation']);


      // TODO: remove class when animation ends, so that it will replay on next transition
      // currently, it works, but breaks if you click a photo before the animation is over
      sliderElement.current.addEventListener('animationstart', () => {
        sliderElement.current.classList.add(styles['freeze']);
      })

      sliderElement.current.addEventListener('animationend', () => {
        sliderElement.current.classList.remove(styles['flash-animation']);
        sliderElement.current.classList.remove(styles['freeze']);
      })
    }
  }, [display_index]);

  const calcDisplayIndex = (button_pressed) => {

    if (button_pressed === "prev") {
      setDisplayIndex(
        display_index === 0 ? props.images.length - 1 : display_index - 1
      );
    } else if (button_pressed === "next") {
      setDisplayIndex(
        display_index === props.images.length - 1 ? 0 : display_index + 1
      );
    }
  };

  return (
    <div className={styles["image-slider"]} ref={sliderElement}>
      <img src={props.images[display_index]} alt="" />
      <button className={styles.prev} onClick={() => calcDisplayIndex("prev")} >
        <FontAwesomeIcon icon={["fas", "long-arrow-alt-left"]} />
      </button>
      <button className={styles.next} onClick={() => calcDisplayIndex("next")}>
        <FontAwesomeIcon icon={["fas", "long-arrow-alt-right"]} />
      </button>
    </div>
  );
};

export default ImageSlider;
