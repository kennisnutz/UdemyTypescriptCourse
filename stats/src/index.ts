// console.log(data);

import { CsvFileReader } from './CsvFileReader';
import { MatchResults } from './MatchResult';

const reader = new CsvFileReader('football.csv');
reader.read();

let arsenalWins = 0;
for (let match of reader.data) {
  if (match[1] === 'Arsenal' && match[5] === MatchResults.HomeWin) {
    arsenalWins++;
  } else if (match[2] === 'Arsenal' && match[5] === MatchResults.AwayWin) {
    arsenalWins++;
  }
}
console.log(reader.data);
console.log(`Aresenal won ${arsenalWins} Games`);
