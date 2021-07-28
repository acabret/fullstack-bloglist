import { useState } from "react";
import axios from "axios";

export const useField = (type = "text") => {
  const [value, setValue] = useState("");

  const onChange = (e) => setValue(e.target.value);
  const reset = (e) => setValue("");

  return { values: { type, value, onChange }, reset };
};

// export const useResource = (baseUrl) => {
//   const getAll = async () => {
//     const response = await axios.get(baseUrl);
//     return response.data;
//   };

//   const create = async (newObject) => {
//     const config = {
//       headers: { Authorization: token },
//     };

//     const response = await axios.post(baseUrl, newObject, config);
//     return response.data;
//   };

//   const update = async (id, newObject) => {
//     const response = await axios.put(`${baseUrl} /${id}`, newObject);
//     return response.data;
//   };
// };
