import { CsvFileReader } from './CsvFileReader';
import { datestringToDate } from '../utils';
import { MatchResult } from '../MatchResult';

type DataType = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<DataType> {
  maprow(row: string[]): DataType {
    return [
      datestringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}
