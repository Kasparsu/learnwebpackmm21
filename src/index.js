
import './style.scss';


let name = 'kaspar';
console.log(name);
const pi = 3.14;

let obj = {
    name: 'asd',
    age: 21,
    pets: [
        {
            name: 'asd',
        }
    ],
    hello1(){
        //do something
    },
    hello2: function(){
        //do something
    },
    hello3: () => {

    }
};

let nums = [0,3,2,1,4,5,6,7,8,9];

nums.forEach(function(value){
    console.log(value);
});
nums.forEach(value => console.log(value));

let powers = nums.map(value => value*value);
console.log(powers);
let sum = nums.reduce((prev, cur) => prev+cur);
console.log(sum);
let even = nums.filter(value => value%2==0);
console.log(even);
let sort = nums.sort();
console.log(sort);
let find = nums.findIndex(value => {
    return value == 4;
});
console.log(find);