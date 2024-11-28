import { Button } from "primereact/button";
import React from "react";

import { AudioRecorder } from "react-audio-voice-recorder";

function RecordVoice() {
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };

  return (
    <AudioRecorder
      onRecordingComplete={addAudioElement}
      audioTrackConstraints={{
        noiseSuppression: true,
        echoCancellation: true,
      }}
      downloadOnSavePress={false}
      downloadFileExtension="webm"
      showVisualizer={true}
      classes={{
        AudioRecorderClass: "custom-recorder",
      }}
    />
  );
}

export default RecordVoice;
