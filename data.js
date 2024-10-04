import axios from 'axios';

const API_URL = 'https://api.binance.com/api/v3/ticker/price?symbol=SOLUSDT';
let prices = [];
async function fetchData() {
  const response = await axios.get(API_URL);
  const price = parseFloat(response.data.price);
  if (isNaN(price)) {
    throw new Error('Invalid price data received from API');
  }
  if (prices.length >= 60) {
    prices.shift();
  }
  prices.push(price);
  console.log(`Fetched price: $${price.toFixed(6)}`);
  return {
    price,
    prices: [...prices],
  };
}

export default fetchData;