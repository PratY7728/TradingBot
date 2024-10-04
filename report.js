import { getBalance, getPosition, getTradeHistory } from './trade.js';
import { getCurrentPrice } from './strategy.js';

function generateReport() {
  const balance = getBalance();
  const position = getPosition();
  const tradeHistory = getTradeHistory();
  const currentPrice = getCurrentPrice(); // Get the current price of SOL
  let totalBuyCost = 0;
  let totalSellProceeds = 0;
  let totalQuantityBought = 0;
  let totalQuantitySold = 0;
  console.log('----- Trade Summary -----');
  console.log(`Current Balance: $${balance.toFixed(2)}`);
  console.log(`Current Position: ${position.toFixed(4)} SOL`);
  console.log('Trade History:');
  tradeHistory.forEach((trade) => {
    console.log(
      `${trade.timestamp.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} - ${trade.type} ${trade.quantity.toFixed(4)} SOL at $${trade.price.toFixed(2)}`
    );
    if (trade.type.toLowerCase() === 'buy') {
      totalBuyCost += trade.quantity * trade.price;
      totalQuantityBought += trade.quantity;
    } else if (trade.type.toLowerCase() === 'sell') {
      totalSellProceeds += trade.quantity * trade.price;
      totalQuantitySold += trade.quantity;
    }
  });
  // Calculate the current value of your position
  const currentPositionValue = position * currentPrice;
  // Calculate total profit or loss
  const totalProfitLoss =totalSellProceeds + currentPositionValue - totalBuyCost;
  const totalProfitLossSign =totalProfitLoss >= 0 ? 'Profit' : 'Loss';
  console.log(`Current ${totalProfitLossSign}: $${totalProfitLoss.toFixed(2)}`);
  console.log('-------------------------\n');
}

export default generateReport;
