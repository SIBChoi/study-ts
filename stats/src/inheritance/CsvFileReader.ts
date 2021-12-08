import fs from 'fs';

export abstract class CsvFileReader<T> {
  data: T[] = [];
  constructor(public filename: string) {}
  abstract maprow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row) => row.split(','))
      .map(this.maprow);
  }
}
