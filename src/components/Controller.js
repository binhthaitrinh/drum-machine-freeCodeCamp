import React from "react";

const Controller = ({ power, setPower }) => {
  return (
    <div className="controller">
      <div className="power-section">
        <p>Power</p>
        <div className="power-btn">
          <div
            onClick={() => {
              setPower(!power);
              console.log(power);
            }}
            className={`power-slider ${power ? "turn-on" : ""}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Controller;
