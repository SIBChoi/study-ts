"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var URL = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(URL).then(function (response) {
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    logTodo(id, title, completed);
});
var logTodo = function (id, title, completed) {
    console.log("\n    The Todo with id: ".concat(id, "\n    Has a title of: ").concat(title, "\n    Is it finished?: ").concat(completed, "\n  "));
};
var Car = /** @class */ (function () {
    function Car(color) {
        this.color = color;
    }
    return Car;
}());
var car = new Car('red');
car.color;
var printNum = function (i) {
    console.log(i);
};
printNum(2);
var json = '{"x": 10, "y": 20}';
var cordinates = JSON.parse(json);
console.log('json', cordinates);
