import React from "react";
import Pad from "./Pad";

const Pads = ({ bank, power, setStatus }) => {
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
            setStatus={setStatus}
            power={power}
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
            power={power}
          />
        ))}
      </div>
    );
  }
};

export default Pads;
