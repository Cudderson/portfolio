import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";
import styles from "./ImageSlider.module.css";

const ImageSlider = (props) => {
  const [isHidden, setIsHidden] = useState(false);
  const [display_index, setDisplayIndex] = useState(0);
  const sliderElement = useRef(null);

  useEffect(() => {
    // since setIsHidden(true) will trigger a state change, we need to wait to call setIsHidden(false) until
    // the setDisplayIndex() state update occurs (new image displayed)
    setTimeout(() => {
      setIsHidden(false);
    }, 500);
  }, [display_index]); // we only want the slider to be shown when a new image is added

  const handleSliderClick = (button_pressed) => {
    // hide slider
    setIsHidden(true);

    // update displayed image when slider hidden (transition complete)
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
    }, 400);
  };

  return (
    <div
      className={
        isHidden ? styles["hidden-image-slider"] : styles["image-slider"]
      }
      ref={sliderElement}
    >
      <img src={props.images[display_index]} alt="" />
      <button
        className={styles.prev}
        name="left-btn"
        onClick={() => handleSliderClick("prev")}
      >
        <FontAwesomeIcon icon={["fas", "long-arrow-alt-left"]} />
      </button>
      <button
        className={styles.next}
        name="right-btn"
        onClick={() => handleSliderClick("next")}
      >
        <FontAwesomeIcon icon={["fas", "long-arrow-alt-right"]} />
      </button>
    </div>
  );
};

export default ImageSlider;
