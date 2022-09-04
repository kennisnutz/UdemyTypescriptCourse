"use strict";
//Nothing to do with generics
const addOne = (a) => {
    return a + 1;
};
const add = (a, b) => {
    return a + b;
};
class HoldAnything {
}
const holdNumber = new HoldAnything();
holdNumber.data = 22;
const holdString = new HoldAnything();
holdString.data = 'akudo';
