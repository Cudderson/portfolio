import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";
import styles from "./ImageSlider.module.css";

const ImageSlider = (props) => {
  const [display_index, setDisplayIndex] = useState(0);
  const sliderElement = useRef(null);

  // on image (state) change, fade component back in by removing the fade-out class
  useEffect(() => {
    sliderElement.current.classList.remove(styles["hide"]);
  }, [display_index]);

  const handleSliderClick = async (button_pressed) => {
    sliderElement.current.classList.add(styles["hide"]);

    // update state when animation finishes (component hidden)
    setTimeout(() => {
      if (button_pressed === "prev") {
        setDisplayIndex(
          display_index === 0 ? props.images.length - 1 : display_index - 1
        );
      } else if (button_pressed === "next") {
        setDisplayIndex(
          display_index === props.images.length - 1 ? 0 : display_index + 1
        );
      }
    }, 500);
  };

  return (
    <div className={styles["image-slider"]} ref={sliderElement}>
      <img src={props.images[display_index]} alt="" />
      <button className={styles.prev} onClick={() => handleSliderClick("prev")}>
        <FontAwesomeIcon icon={["fas", "long-arrow-alt-left"]} />
      </button>
      <button className={styles.next} onClick={() => handleSliderClick("next")}>
        <FontAwesomeIcon icon={["fas", "long-arrow-alt-right"]} />
      </button>
    </div>
  );
};

export default ImageSlider;
