
import fetchData from './data.js';
import {analyzeData} from './strategy.js';
import { executeTrade } from './trade.js';
import generateReport from './report.js';

const INTERVAL = 1 * 1000; 

async function main() {
  console.log('Starting Trading Bot...');
  while (true) {
    try {
      const data = await fetchData();
      console.log(`Data collected: ${data.prices.length} prices`);
      if (data.prices.length >= 5) {
        const decision = analyzeData(data);
        if (decision.action !== 'HOLD') {
          executeTrade(decision);
        }
        generateReport();
      } else {
        console.log('Collecting data... Please wait.');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
    await new Promise((resolve) => setTimeout(resolve, INTERVAL));
  }
}

main();


