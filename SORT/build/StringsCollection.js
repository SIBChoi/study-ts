"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringsCollection = void 0;
const Sorter_1 = require("./Sorter");
class StringsCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIdx, rightIdx) {
        return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase();
    }
    swap(leftIdx, rightIdx) {
        const characters = this.data.split('');
        [characters[leftIdx], characters[rightIdx]] = [
            characters[rightIdx],
            characters[leftIdx],
        ];
        this.data = characters.join('');
    }
}
exports.StringsCollection = StringsCollection;
