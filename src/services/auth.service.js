import {API_URL} from "../common/config";
import * as axios from "axios";

const authService = {
  login: (credentials) => {
    return axios.post(`${API_URL}/login`, credentials);
  }
};

export default authService;
