var Cat = require('./Cat');
var Dog = require('./Dog');

var cat = new Cat('Tom');
var dog = new Dog();

dog.eat(cat);

console.log(dog.stomach);