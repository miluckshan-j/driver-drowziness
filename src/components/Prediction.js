import React, { useEffect, useState, useCallback } from "react";
import { useModel } from "../hooks/useModel";
import { ASL_MODEL } from "../model/Model";
import Webcam from "./Webcam";
import { Text } from "@chakra-ui/react";

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

  return (
    <>
      <Webcam
        canvas={{ width: 200, height: 200 }}
        updateInterval={100}
        isRecording={isRecording}
        onUpdate={onUpdate}
      />
      <Text fontSize="sm" color={"gray.500"}>
        {isRecording
          ? `Predicted: ${predictedClass}`
          : "Press the Record button to start prediction"}
      </Text>
    </>
  );
};

export default Prediction;
