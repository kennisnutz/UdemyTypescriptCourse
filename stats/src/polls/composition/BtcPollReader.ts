interface DataReader {
  read(): void;
  data: string[][];
}

export class PollReader {
  constructor(public reader: DataReader) {}
}
