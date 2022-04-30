import { coinFlip, coinFlips, countFlips, flipACoin } from './modules/coin.mjs';

import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const minimist = require('minimist')

const args = minimist(process.argv.slice(2));

const guess = args.call
const real = coinFlip()
let res = ''
if (guess == null) {
    console.error('Error: no input')
    console.log('Usage: node guess-flip --call=[heads|tails]')
} else if (guess != 'tails' && guess != 'heads') {
    console.log('Usage: node guess-flip --call=[heads|tails]')
} else {
    if (guess == real) {
        res = 'win'
    } else {
        res = 'lose'
    }
    const ret = {call: guess, flip: real, result: res};
    console.log(ret)
}