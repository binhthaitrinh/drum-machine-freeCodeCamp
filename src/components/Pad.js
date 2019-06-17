import React, { useEffect } from "react";

const Pad = ({ keyCode, keyTrigger, id, url }) => {
  const playSound = () => {
    const sound = document.querySelector(`#${keyTrigger}`);
    sound.currentTime = 0;
    sound.play();
  };
  const handleClick = () => {
    playSound();
  };
  return (
    <div onClick={handleClick} className="pad-btn">
      <audio src={url} id={keyTrigger} />
      {keyTrigger}
    </div>
  );
};

export default Pad;
