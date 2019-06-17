import React from "react";
import Pad from "./Pad";

const Pads = ({ bank, power }) => {
  if (power) {
    return (
      <div className="pads-section">
        {bank.map(sound => (
          <Pad
            key={sound.keyTrigger}
            keyCode={sound.keyCode}
            keyTrigger={sound.keyTrigger}
            id={sound.id}
            url={sound.url}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className="pads-section">
        {bank.map(sound => (
          <Pad
            key={sound.keyTrigger}
            keyCode={sound.keyCode}
            keyTrigger={sound.keyTrigger}
            id={sound.id}
            url="#"
          />
        ))}
      </div>
    );
  }
};

export default Pads;
