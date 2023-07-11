import axios from "axios";
import { baseUrl } from "../src/constants/index";
export const rootApi = axios.create({
    baseURL : baseUrl,
});