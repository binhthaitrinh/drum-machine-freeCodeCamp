import React from "react";
import Pad from "./Pad";

const Pads = ({ bank }) => {
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
};

export default Pads;
