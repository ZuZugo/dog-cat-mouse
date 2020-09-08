var chalk = require('chalk')

function Cat(name) {
    this.stomach = [];
    this.name = name
}

Cat.prototype.eat = function(mouse) {
    this.stomach.push(mouse);
}

Cat.prototype.sayHi = function() {
    console.log('Hello Cat, My name is ', chalk.red(this.name));
}    

module.exports = Cat;