var userName: string;
userName = "Umesh U";

console.log("Hello " + userName);

var age: number;
age= 33;
var isEligibleToVote: boolean;

isEligibleToVote = age >= 18;

console.log(
  `Hi ${userName} you are ${age} years old and hence you ${
    isEligibleToVote ? "can vote" : "cannot vote"
  }`
);

const sum = function (a: number, b: number) {
  return a - b;
};

console.log(sum(100, 25));

var x: any;

x = "Umesh";
console.log(`${x} is a ${typeof x}`);

x = 33;
console.log(`${x} is a ${typeof x}`);

x = false;
console.log(`${x} is a ${typeof x}`);
