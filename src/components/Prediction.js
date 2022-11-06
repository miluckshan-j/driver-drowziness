import React, { useEffect, useState, useCallback } from "react";
import { useModel } from "../hooks/useModel";
import { ASL_MODEL } from "../model/Model";

const Prediction = ({ isRecording, predictedFeature, setPredictedFeature }) => {
  const { isModelLoaded, predictClass } = useModel(ASL_MODEL);
  const [predictedClass, setPredictedClass] = useState("");

  useEffect(() => {
    if (isRecording) {
      setPredictedFeature(predictedClass);
    }
  }, [isRecording, predictedClass]);

  const onUpdate = useCallback(
    async (image) => {
      if (!isModelLoaded) {
        return;
      }
      const detectedClasses = await predictClass(image, 0.75);
      if (detectedClasses) {
        setPredictedClass(detectedClasses.className);
      }
    },
    [isModelLoaded, predictClass]
  );

  return <div>Prediction</div>;
};

export default Prediction;
