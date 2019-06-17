import React, { useState } from "react";

const activeStyle = {
  boxShadow: "none",
  backgroundColor: "red",
  color: "#fff"
};
const inactiveStyle = {
  boxShadow: "0.3rem 0.3rem 0.5rem rgba(0, 0, 0, 0.4)",
  backgroundColor: "#fff",
  color: "black"
};

const Pad = ({ keyCode, keyTrigger, id, url }) => {
  const [padStyle, setPadStyle] = useState(inactiveStyle);

  const playSound = () => {
    const sound = document.querySelector(`#${keyTrigger}`);
    sound.currentTime = 0;
    sound.play();
    setPadStyle(activeStyle);
    setTimeout(() => setPadStyle(inactiveStyle), 200);
  };
  const handleClick = () => {
    playSound();
  };
  return (
    <div style={padStyle} onClick={handleClick} className="pad-btn">
      <audio src={url} id={keyTrigger} />
      {keyTrigger}
    </div>
  );
};

export default Pad;
