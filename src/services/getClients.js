import axios from "axios";
import moment from "moment";
import { apiURL } from "../api";

export default async function getClients() {
  try {
    const clients = await axios.get(`${apiURL}/clients`);
    const res = clients.data;
    const data = res.map((client, idx) => {
      let obj = {
        key: idx,
        name: client?.firstName,
        lastName: client?.lastName,
        dateOfBirth: moment(client?.dateOfBirth).format("L"),
      };
      return obj;
    });
    return data;
  } catch (error) {
    return [];
  }
}
