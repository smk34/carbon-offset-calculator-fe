import { API_URL } from "../config/API_URL";
import axios from "axios";


const sendFormData = async (payload) => {
  try {
    const result = await axios.post(API_URL + "/simulateTheStats", payload);
    if (result.data.status === 0) {
      console.log("API error: " + result);
    } else {

      return result.data.simulatedStats;
    }
  } catch (error) {
    console.log("API down " + error);
  }
};

export default sendFormData;
