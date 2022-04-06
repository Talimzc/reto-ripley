import axios from "axios";
import { apiURL } from "../api";

export default async function createClient(input) {
  try {
    const client = await axios.post(`${apiURL}/clients/`, input);
    const res = client.data;
    return res;
  } catch (error) {
    return 0;
  }
}
