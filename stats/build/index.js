"use strict";
// console.log(data);
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchResult_1 = require("./MatchResult");
const reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
let arsenalWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Arsenal' && match[5] === MatchResult_1.MatchResults.HomeWin) {
        arsenalWins++;
    }
    else if (match[2] === 'Arsenal' && match[5] === MatchResult_1.MatchResults.AwayWin) {
        arsenalWins++;
    }
}
console.log(reader.data);
console.log(`Aresenal won ${arsenalWins} Games`);
