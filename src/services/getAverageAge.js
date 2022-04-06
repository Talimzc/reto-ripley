import axios from "axios";
import { apiURL } from "../api";

export default async function getAverageAge() {
  try {
    const avgAge = await axios.get(`${apiURL}/clients/average-age`);
    const res = avgAge.data;
    return res?.avgAge;
  } catch (error) {
    return 0;
  }
}
