import axios from "axios";
import { apiURL } from "../api";
import { calculateAge } from "../utils";

export default async function getAgeClients() {
  try {
    const clients = await axios.get(`${apiURL}/clients`);
    const res = clients.data;
    const ages = res.map((client) => calculateAge(client.dateOfBirth));
    const minMaxAges = ages.reduce(
      (acc, age) => {
        let aux = age >= 18 ? acc.max++ : acc.min++;
        return acc;
      },
      { min: 0, max: 0 }
    );
    return minMaxAges;
  } catch (error) {
    return [];
  }
}
