import DummyImage from "./DummyImage";

import { useState } from "react";

const ImageSlider = (props) => {

  const [display_index, setDisplayIndex] = useState(0);

  // this will be passed as props to each <Project />'s <ImageSlider />
  const bg_colors = [
    'red',
    'green',
    'blue'
  ];

  const calcDisplayIndex = (button_pressed) => {
    console.log(display_index)
    if (button_pressed === 'prev') {
      setDisplayIndex(display_index === 0 ? bg_colors.length - 1 : display_index - 1);
    }
    else if (button_pressed === 'next') {
      setDisplayIndex(display_index === bg_colors.length - 1 ? 0 : display_index + 1);
    }
  }

  return (
    <div style={{width: '100%', margin: '0 auto', textAlign: 'center'}}>
      {/* could extract this into 'ImageSliderContent' or similar */}
      {/* <DummyImage bg_color={bg_colors[display_index]} /> */}
      <img src={props.testImage} style={{maxWidth: '100%', display: 'block'}} />
      <button onClick={() => calcDisplayIndex('prev')}>Previous</button>
      <button onClick={() => calcDisplayIndex('next')}>Next</button>
    </div>
  )
}

export default ImageSlider;