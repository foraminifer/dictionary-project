import React from "react";
import "./Audio.css";

export default function Audio(props) {
  return (
    <div className="Audio">
      <audio className="audioFile" src={props.audio}></audio>
      <span
        className="btn"
        onClick={function () {
          const audio = document.getElementsByClassName("audioFile")[0];
          audio.play();
        }}
      >
        <i className="fas fa-volume-up"></i>{" "}
      </span>
    </div>
  );
}
