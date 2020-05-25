import Axios from "axios";
import { mockProducts } from "./config/mock";

import { API_BASE_URL } from "./config/api";

const axios = Axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

//for mocking api
const sleep = time => new Promise(resolve => setTimeout(resolve, time));

export async function fetchProducts() {
  if (API_BASE_URL) {
    const { data } = await axios.get(`/products`);
    return data;
  } else {
    await sleep(1);
    return mockProducts;
  }
}
