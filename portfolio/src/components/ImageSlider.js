import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styles from "./ImageSlider.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImageSlider = (props) => {
  // this state could perhaps be lifted to <Project />
  const [display_index, setDisplayIndex] = useState(0);

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
    <div className={styles["image-slider"]}>
      {/* could extract this into 'ImageSliderContent' or similar (after working) */}
      <img src={props.images[display_index]} alt="" />
      <button className={styles.prev} onClick={() => calcDisplayIndex("prev")}>
        <FontAwesomeIcon icon={["fas", "long-arrow-alt-left"]} />
      </button>
      <button className={styles.next} onClick={() => calcDisplayIndex("next")}>
       <FontAwesomeIcon icon={["fas", "long-arrow-alt-right"]} />
      </button>
    </div>
  );
};

export default ImageSlider;
