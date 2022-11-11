import { set, ref } from "firebase/database";
import { db } from "./firebaseConfig";

const writeToDB = (data) => {
  const reference = ref(db);
  set(reference, data);
};

export { writeToDB };
