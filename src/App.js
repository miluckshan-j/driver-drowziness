import React, { useEffect, useState } from "react";
import "./App.css";
import Prediction from "./components/Prediction";
import Header from "./components/Header";
import { Button, VStack } from "@chakra-ui/react";
import { writeToDB } from "./utils/firebaseFunctions";
import { createDataObject } from "./utils/fields";

function App() {
  const [isRecording, setIsRecording] = useState(false);
  const [predictedFeature, setPredictedFeature] = useState("");
  const [predictions, setPredictions] = useState([""]);

  useEffect(() => {
    if (isRecording) {
      setPredictions(predictedFeature);
    } else {
      setPredictions("");
    }
  }, [isRecording, predictedFeature]);

  useEffect(() => {
    if (predictions !== "") {
      const data = createDataObject(predictions);
      writeToDB(data);
    }
  }, [predictions]);

  return (
    <div className="App">
      <Header />
      <VStack>
        <Prediction
          isRecording={isRecording}
          predictedFeature={predictedFeature}
          setPredictedFeature={setPredictedFeature}
        />
        <Button
          colorScheme="red"
          variant={"outline"}
          loadingText="Recording"
          onClick={() => setIsRecording(!isRecording)}
        >
          Record
        </Button>
      </VStack>
    </div>
  );
}

export default App;
