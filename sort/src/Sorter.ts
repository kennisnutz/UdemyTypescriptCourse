import { NumbersCollection } from './NumbersCollection';

//The interface provide instructions about how a value type can be elligible for sorting
//the interface is to be used when their different ubjects to work with in a specified class.
//abstract classes are to be used when developing a new class that dependeds on a number of other classes
export abstract class Sorter {
  //will take a collection of data and sort it
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
