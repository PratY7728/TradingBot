let lastBuyPrice = null;
let CurrentPrice = null;
function analyzeData({ price, prices }) {
  const recentPrices = prices.slice(-10);
  const averagePrice =
    recentPrices.reduce((acc, val) => acc + val, 0) / recentPrices.length;
//   console.log('Recent Prices:', recentPrices);
  console.log('Average Price:', averagePrice.toFixed(6));
  CurrentPrice = price.toFixed(6);
  console.log('Current Price:', CurrentPrice);
  let action = 'HOLD';
  if (lastBuyPrice === null && price <= averagePrice * 0.99999) {
    action = 'BUY';
    lastBuyPrice = price;
  } else if (lastBuyPrice !== null && price >= lastBuyPrice * 1.000001) {
    action = 'SELL';
    lastBuyPrice = null;
  }
  console.log(`Decision: ${action}`);
  return { action, price };
}

function getCurrentPrice(){
    return CurrentPrice;
}

export  { analyzeData , getCurrentPrice };
