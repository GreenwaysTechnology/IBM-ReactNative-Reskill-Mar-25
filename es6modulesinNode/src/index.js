import { firstName, lastName } from "./lib/mylib.js";
import pkg from './lib/todo.service.js';
const { findAll } = pkg;

console.log(firstName, lastName)
console.log(findAll())