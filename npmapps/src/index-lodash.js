const _ = require('lodash')

console.log(_.VERSION)
console.log(_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }))