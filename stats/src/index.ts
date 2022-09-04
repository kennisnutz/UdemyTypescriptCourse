// console.log(data);

import { CsvFileReader } from './CsvFileReader';
import { MatchResults } from './MatchResult';
import { MatchReader } from './MatchReader';

//create an object that satisfies the "DataReader" interface

const csvFileReader = new CsvFileReader('football.csv');

// create instance of the MaatchReader
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let arsenalWins = 0;
for (let match of matchReader.matches) {
  if (match[1] === 'Arsenal' && match[5] === MatchResults.HomeWin) {
    arsenalWins++;
  } else if (match[2] === 'Arsenal' && match[5] === MatchResults.AwayWin) {
    arsenalWins++;
  }
}
// console.log(reader.data);
console.log(`Aresenal won ${arsenalWins} Games`);

//class User{
//allTimeScore(scores:number[]): number=>{}
//  constructor(public userName: string,
//  public currentWeekScore: number,
//
//
//}
// const csvFileReader= new CsvFileReader('polls.csv');
// const pollReader= new PollReader(csvFileReader);

//let winningOption= 6
//let finalResult: User[]=[];
//for (let poll of pollReader.polls){
// if(poll["option_selected"]=== winningOption){
// let newUser= new User(poll["username"], poll["weeks score"])
//    finalResult.push(
// newUser
//);
//}
//}
