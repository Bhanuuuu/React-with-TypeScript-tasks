import arrayDemo from "./arrayDemo";
import emuDemoFunctions from "./enums-demo";
import checkPrime from "./numOperations";
import greet from "./Welcome";
import { RegularEmployee, Manager } from "./oopsDemo";

console.log(greet('Umesh', 'Mr.'));

console.log(checkPrime(2));

emuDemoFunctions();

arrayDemo();


const emp1 = new RegularEmployee(
  "Umesh",
  "U",
  "Kochi, Kerala",
  50000
);

console.log("Regular Employee Net Pay:", emp1.netPay());

const emp2 = new Manager(
  "John",
  "Don",
  {
    doorNumber: "12B",
    city: "Hyderabad",
    state: "Telangana"
  },
  50000,
  10000
);

console.log("Manager Net Pay:", emp2.netPay());