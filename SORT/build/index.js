"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Sorter } from './Sorter';
const NumbersCollection_1 = require("./NumbersCollection");
// const stringsCollection = new StringsCollection('Facebook');
// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(stringsCollection);
// sorter.sort();
// stringsCollection.sort();
// console.log(stringsCollection.data);
const numbersCollection = new NumbersCollection_1.NumbersCollection([101, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);