import React, { useState, useEffect } from "react";

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

const Pad = ({ keyCode, keyTrigger, id, url, setStatus }) => {
  const [padStyle, setPadStyle] = useState(inactiveStyle);

  const playSound = () => {
    const sound = document.querySelector(`#${keyTrigger}`);
    sound.currentTime = 0;
    sound.play();
    setPadStyle(activeStyle);
    setTimeout(() => setPadStyle(inactiveStyle), 200);
    setStatus(id);
    setTimeout(() => setStatus(""), 1500);
  };

  const handleKeyPress = e => {
    if (e.keyCode === keyCode) {
      playSound();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  const handleClick = () => {
    playSound();
  };
  return (
    <div style={padStyle} onClick={handleClick} className="pad-btn">
      <audio className="audio-player" src={url} id={keyTrigger} />
      {keyTrigger}
    </div>
  );
};

export default Pad;
