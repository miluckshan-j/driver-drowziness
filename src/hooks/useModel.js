import React, { useCallback, useEffect, useMemo, useState } from "react";
import { load } from "@teachablemachine/image";

export function useModel(descriptor) {
  const [model, setModel] = useState();
  const loaded = useMemo(() => !!model, [model]);

  const predictAll = useCallback(
    async (image) => {
      if (!model) {
        throw new Error("Model not loaded");
      }
      return await model.predict(image);
    },
    [model]
  );

  const predictClass = useCallback(
    async (image, threshold) => {
      if (!model) {
        throw new Error("Model not loaded");
      }
      const predictions = await predictAll(image);
      return predictions.find((p) => p.probability >= threshold);
    },
    [model, predictAll]
  );

  async function loadModel() {
    await load(descriptor.modelJson, descriptor.metadataJson)
      .then((m) => setModel(m))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    loadModel();
  }, [descriptor.metadataJson, descriptor.modelJson]);

  return { isModelLoaded: loaded, predictAll, predictClass };
}
