// import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { StringsCollection } from './StringsCollection';

// const stringsCollection = new StringsCollection('Facebook');
// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(stringsCollection);
// sorter.sort();

// stringsCollection.sort();
// console.log(stringsCollection.data);

const numbersCollection = new NumbersCollection([101, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
