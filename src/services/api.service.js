import {API_URL} from "../common/config";
import axios from "axios";
import jwtService from "./jwt.service";

const ApiService = {
  store: async (resource, data) => {
    const response = await fetch(`${API_URL}/${resource}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/ld+json'
      }
    });

    return await response.json();
  },
  setHeader: () => {
    axios.defaults.headers.common[
      "Authorization"
      ] = `Token ${jwtService.getToken()}`;
  },
};

export default ApiService;
