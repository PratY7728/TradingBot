# Trading Bot Application

## Overview

This is a simple trading bot that fetches real-time cryptocurrency prices for the SOL/USDT pair from the Binance API and performs automatic trades based on a predefined strategy. The bot analyzes price data and makes buy or sell decisions depending on recent price trends.


## Application Flow

1. **Fetching Data**  
   The bot fetches the latest SOL/USDT price from the Binance API every 1 minute. It stores the last 60 prices in memory for analysis.

2. **Analyzing Data and Strategy**  
   The bot uses an average-based strategy:
   - It calculates the average of the most recent 10 prices.
   - **Buy condition**: The bot will buy SOL if the current price is below 99.999% of the 10-period average and there was no prior buy.
   - **Sell condition**: The bot will sell SOL if the current price is greater than or equal to 100.0001% of the last bought price.
   - If neither condition is met, the bot holds its current position.

3. **Executing Trades**  
   - If the bot decides to buy, it calculates how much SOL can be bought with the available balance and executes the trade.
   - If the bot decides to sell, it sells the entire SOL position.

4. **Generating Reports**  
   After every decision, the bot generates a trade report showing:
   - Current balance
   - Current position in SOL
   - Trade history
   - Profit or loss from trades



## Running the Application

To start the trading bot, run the following command:

```bash
node index.js
