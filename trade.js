let balance = 10000; // Starting with $10,000
let position = 0;
const tradeHistory = [];

function executeTrade({ action, price }) {
  const quantity = balance / price;
  if (action === 'BUY' && balance > 0) {
    position += quantity;
    balance -= quantity * price;
    tradeHistory.push({
      type: 'BUY',
      price,
      quantity,
      timestamp: new Date(),
    });
    console.log(`Bought ${quantity.toFixed(4)} SOL at $${price.toFixed(2)}`);
  } else if (action === 'SELL' && position > 0) {
    balance += position * price;
    tradeHistory.push({
      type: 'SELL',
      price,
      quantity: position,
      timestamp: new Date(),
    });
    console.log(`Sold ${position.toFixed(4)} SOL at $${price.toFixed(2)}`);
    position = 0;
  }
}

function getBalance() {
  return balance;
}

function getPosition() {
  return position;
}

function getTradeHistory() {
  return tradeHistory;
}

export { executeTrade, getBalance, getPosition, getTradeHistory };