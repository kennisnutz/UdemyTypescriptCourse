"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
//The interface provide instructions about how a value type can be elligible for sorting
//the interface is to be used when their different ubjects to work with in a specified class.
//abstract classes are to be used when developing a new class that dependeds on a number of other classes
class Sorter {
    sort() {
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
exports.Sorter = Sorter;
