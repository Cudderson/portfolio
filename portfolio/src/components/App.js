import ColorChangingButton from "./ColorChangingButton";
import { useState } from "react";

const App = () => {
  const [visible, toggleVisibility] = useState(true);

  const handleToggle = () => toggleVisibility(!visible);

  return (
    <div>
      {visible ? <ColorChangingButton message={"I am visible!"} /> : null}
      <button onClick={handleToggle}>show/hide</button>
    </div>
  )
}

export default App