const fields = ["eyes_closed", "yawn", "head_fall", "eye_rub"];

export const createDataObject = (field) => {
  let data = {};
  fields.map((key, index) => {
    data = { ...data, [key]: field === key ? true : false };
  });
  return data;
};
