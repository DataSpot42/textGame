import randomItems from "planet-names";
import uniqueRandomArray from 'unique-random-array';

const randomP = uniqueRandomArray(randomItems.all);

console.log(randomP());
