import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = new MatchReader(new CsvFileReader('football.csv'));
matchReader.load();
const { matches } = matchReader;

const summary = Summary.winsAnalysisAndConsoleReport(matches[23][1]);
summary.buildAndPrint(matches);
