"use strict";
// console.log(data);
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchResult_1 = require("./MatchResult");
const MatchReader_1 = require("./MatchReader");
//create an object that satisfies the "DataReader" interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// create instance of the MaatchReader
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
let arsenalWins = 0;
for (let match of matchReader.matches) {
    if (match[1] === 'Arsenal' && match[5] === MatchResult_1.MatchResults.HomeWin) {
        arsenalWins++;
    }
    else if (match[2] === 'Arsenal' && match[5] === MatchResult_1.MatchResults.AwayWin) {
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
