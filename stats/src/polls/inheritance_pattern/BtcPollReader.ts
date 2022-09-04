import { CsvFileReader } from './CsvFileReader';
import { MatchResults } from '../MatchResult';
import { dateStringToDate } from '../utils';

/**this script should*/
//1.  take the resulting data from the read function of the csvfileReader abstract class
//     and extract a list of all the usernames and their selected options.

//2. check the selected option of each user against the specified winnig option
//   and award a score to the voter if their option matches.

//3. generate  and store an orderned list of all voters according to their scores
//   from highest scoring to lowest scoring.
//4.

//Guide implementations

// type PoolData = [Date, string, string, number, number, MatchResults, string]; //the type of data in each row

// export class MatchReader extends CsvFileReader<PoolData> {
//   mapRow(row: string[]): PoolData {
//     return [
//       //return a table all the final result
//       dateStringToDate(row[0]),
//       row[1],
//       row[2],
//       parseInt(row[3]),
//       parseInt(row[4]),
//       row[5] as MatchResults,
//       row[6],
//     ];
//   }
// }
