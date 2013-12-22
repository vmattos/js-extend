var extend = require('./index').extend;

var obj1 = { name: "Vitor" };
var obj2 = { lastName: "Mattos" };

extend(obj1, obj2);

console.log(obj1);

var obj3 = { age: 20 };
var obj4 = { gender: 'male' };

extend(obj1, obj3, obj4);

console.log(obj1);