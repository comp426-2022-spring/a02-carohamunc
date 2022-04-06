import { coinFlip, coinFlips, countFlips, flipACoin } from './modules/coin.mjs';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const minimist = require('minimist')

//const number = process.argv.slice(2);
const args = minimist(process.argv.slice(2));
const number = args.number || 1
const arr = coinFlips(number)

console.log(arr);
console.log(countFlips(arr))