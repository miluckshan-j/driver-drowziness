import React, { useRef } from "react";
import { useWebcam } from "../../hooks/useWebcam";

const Webcam = ({ canvas, updateInterval, isRecording, onUpdate }) => {
  const webcamDivRef = useRef(null);

  const { isWebcamReady } = useWebcam({
    canvas: {
      width: canvas.width,
      height: canvas.height,
      containerRef: webcamDivRef,
    },
    updateInterval: updateInterval,
    onUpdate: onUpdate,
  });

  return (
    <div
      className="webcam"
      style={{
        width: canvas.width,
        height: canvas.height,
        border: isRecording ? "1px solid #E53E3E" : "1px solid #718096",
      }}
      ref={webcamDivRef}
    >
      {!isWebcamReady && (
        <span className="blink-slow">{"Waiting for camera permission..."}</span>
      )}
    </div>
  );
};

export default Webcam;
