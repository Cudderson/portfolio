import { useState } from "react";
import styles from './ImageSlider.module.css';

const ImageSlider = (props) => {

  // this state could perhaps be lifted to <Project />
  const [display_index, setDisplayIndex] = useState(0);

  const calcDisplayIndex = (button_pressed) => {
    if (button_pressed === 'prev') {
      setDisplayIndex(display_index === 0 ? props.images.length - 1 : display_index - 1);
    }
    else if (button_pressed === 'next') {
      setDisplayIndex(display_index === props.images.length - 1 ? 0 : display_index + 1);
    }
  }

  return (
    <div className={styles['image-slider']}>
      {/* could extract this into 'ImageSliderContent' or similar (after working) */}
      <img src={props.images[display_index]} />
      {/* buttons should remaian in-place regardless of photo size */}

      {/* testing font-awesome arrows */}
      

      <button className={styles.prev} onClick={() => calcDisplayIndex('prev')}><i class="fas fa-caret-left"></i></button>
      <button className={styles.next} onClick={() => calcDisplayIndex('next')}><i class="fas fa-caret-right"></i></button>
    </div>
  )
}

export default ImageSlider;