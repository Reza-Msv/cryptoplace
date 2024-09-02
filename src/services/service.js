const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-KdGeWk2LeoPWwhbz1G4hCddh";

const getAllCoin = (page, currency) => {
  return `${BASE_URL}/coins/markets?vs_currency=${currency.name}&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=${API_KEY}`;
};

const getCoin = (coin) => {
  return `${BASE_URL}/search?query=${coin}&x_cg_demo_api_key=${API_KEY}`;
};

const getChart = (coin) => {
  return `${BASE_URL}/coins/${coin}/market_chart?vs_currency=usd&days=7&x_cg_demo_api_key=${API_KEY}`;
};

const getdetail = (coin) => {
  return `${BASE_URL}/coins/${coin}`;
};

export { getAllCoin, getCoin, getChart, getdetail };
