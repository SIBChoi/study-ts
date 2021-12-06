"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberCollection = void 0;
class NumberCollection {
    constructor(data) {
        this.data = data;
        this.length = this.data.length;
    }
    compare(i, j) {
        return this.data[i] > this.data[j];
    }
    swap(i, j) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
        return this.data;
    }
}
exports.NumberCollection = NumberCollection;
