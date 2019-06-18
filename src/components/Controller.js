import React, { useState } from "react";

const Controller = ({ power, setPower, status, setStatus }) => {
  const [volume, setVolume] = useState(1);

  const onVolumeChange = e => {
    setVolume(e.target.value);
    const audioPlayer = document.querySelectorAll(".audio-player");
    audioPlayer.forEach(audio => (audio.volume = volume));
    const soundDisplay = Math.floor(volume * 100);
    setStatus(soundDisplay);
    setTimeout(() => setStatus(""), 1500);
  };
  return (
    <div className="controller">
      <div className="power-section">
        <p>Power</p>
        <div className="power-btn">
          <div
            onClick={() => {
              setPower(!power);
              setStatus(`Power ${power ? "off" : "on"}`);
              setTimeout(() => setStatus(""), 1000);
              console.log(power);
            }}
            className={`power-slider ${power ? "turn-on" : ""}`}
          />
        </div>
      </div>

      <div className="label">{status}</div>

      <div className="volume-slider">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={onVolumeChange}
          // disabled={props.power ? false : true}
        />
      </div>
    </div>
  );
};

export default Controller;
