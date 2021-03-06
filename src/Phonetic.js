import React from "react";
import Audio from "./Audio";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <span className="playSound">
          <Audio audio={props.phonetic.audio} />
        </span>
        <span className="text">{props.phonetic.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
