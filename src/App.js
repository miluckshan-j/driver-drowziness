import React, { useEffect, useState } from "react";
import "./App.css";
import Prediction from "./components/Prediction";
import Header from "./components/Header";
import { Button, VStack } from "@chakra-ui/react";

function App() {
  const [isRecording, setIsRecording] = useState(false);
  const [predictedFeature, setPredictedFeature] = useState("");
  const [predictions, setPredictions] = useState([""]);

  useEffect(() => {
    if (isRecording) {
      setPredictions((oldArray) => [...oldArray, predictedFeature]);
    } else {
      setPredictions([""]);
    }
  }, [isRecording, predictedFeature]);

  console.log("predictions", predictions);

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
          isLoading={isRecording}
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
