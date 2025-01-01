
let str ="Hello World";
let UpperStr = str.toUpperCase();
console.log(UpperStr);

function toTitleCase(str) {
  return str3.toLowerCase().split(' ').map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
}


let str3 = "my name is chintan";
// ['my', 'name', 'is', 'chintan'].map()
let titleStr = toTitleCase(str);
console.log(titleStr); 

let str1 ="Java Script";
let lowerStr = str1.toLowerCase();
console.log(lowerStr);






let s = "Good Morning";
const ans = s.split('').reverse().join('');
console.log(ans);

var num1 = '123';
document.getElementById("demo1").innerHTML =
Number("123")
// 2
document.getElementById("demo1").innerHTML = Number(num1)
document.getElementById("demo1").innerHTML = parseInt(num1);
document.getElementById("demo1").innerHTML = +num1;

var num2 = 9951;
document.getElementById("demo2").innerHTML =
String(9951);
document.getElementById("demo2").innerHTML = num2.toString();
 
document.getElementById("demo4").innerHTML = 
"'Java' is " + typeof "John" + "<br><br>" +
"33 is " + typeof 33 + "<br><br>" +
"x is " + typeof x;

var arr101 = [1,2,3];
console.log('A1=>', typeof arr101);



function checkOddEven(number) {
    if (number % 2 === 0) {
        console.log(`${number} is Even`);
    } else {
        console.log(`${number} is Odd`);
    }
    // to ternary?
}
checkOddEven(5);

function checkOddEven(number) {
  console.log(`${number} is ${number % 2 === 0 ? "Even" : "Odd"}`);
}

checkOddEven(8); 



let a = 15, b=20;
let temp = a;
a=b;
b=temp;
console.log(a,b);
// without 3rd variable?

Variable(5, 10); 
function Variable(x, y) {
 

  x = x + y; 
  y = x - y;  
  x = x - y;  
  
  console.log(` x = ${x}, y = ${y}`);
}




let array=[1,2,3,4,5,6,7,8,9,10]
console.log(array.length);

const num = [1, 2, 3, 5, 6, 7];
document.getElementById("demo7").innerHTML = num.reduce(Sum, 0);
function Sum(total,num){
  return total + Math.round(num);
} 


const arr1 = [1, 2, 1, 5, 6, 7];
const Arr = [new Set(arr1)];
console.log(Arr);


const str2 = "Hello, Good Morning, How are you?,";
const words = str2.split(',')

console.log(words);

let arr2 = [1,2,3,4,5];
arr2.push(6);
arr2.unshift(0);
console.log(arr2);

let arr3 = [10,20,30,40];
arr3.pop(40);
arr3.shift(10);
console.log(arr3);

let arr4 = [11,22,33,44,55];
arr4.splice(1,1,77); 
arr4.splice(3)
console.log(arr4);

let arr6 = [1, 2, 3, 4, 5, 6, 7];
let sliced = arr6.slice(2, 6).filter(num => num !== 5);
console.log(sliced);


const person1 = ["id:1", "name:Chintan"];
person1.push("email:chintan@gmail.com");
console.log(person1);

const person2 = ["id:3", "name:Chintan","age:23","salary:5000","mobile:1234567890"];
console.log(person2);


const employees = [
  { id: 1, name: 'Chintan', age: 23, salary: 10000, mobile: 1234567890 },
  { id: 2, name: 'Isha', age: 24, salary: 15000, mobile: 9876543210 },
  { id: 3, name: 'Pearl', age: 22, salary: 20000, mobile: 1233445566 },
  { id: 4, name: 'Aditi', age: 25, salary: 25000, mobile: 9900880077 },
  { id: 5, name: 'Raj', age: 26, salary: 15000, mobile: 7755332211 },
  
];
const totalSalary = employees.reduce((sum, employees) => sum + employees.salary, 0);
console.log("Total Salary:", totalSalary);


const employee = [
  { id: 1, name: 'Chintan', age: 23, salary: 10000, mobile: 1234567890 },
  { id: 2, name: 'Isha', age: 24, salary: 15000, mobile: 9876543210 },
  { id: 3, name: 'Pearl', age: 26, salary: 20000, mobile: 1233445566 },
  { id: 4, name: 'Aditi', age: 25, salary: 25000, mobile: 9900880077 },
  { id: 5, name: 'Raj', age: 26, salary: 15000, mobile: 7755332211 },
  
];

const Employee = employee.filter(employee => employee.age > 25);
console.log("Employees with age greater than 25:", Employee);

const employee1 = [
  { id: 1, name: 'Chintan', age: 23, salary: 10000, mobile: 1234567890 },
  { id: 2, name: 'Isha', age: 24, salary: 15000, mobile: 9876543210 },
  { id: 3, name: 'Pearl', age: 26, salary: 20000, mobile: 1233445566 },
  { id: 4, name: 'Aditi', age: 25, salary: 25000, mobile: 9900880077 },
  { id: 5, name: 'Raj', age: 26, salary: 15000, mobile: 7755332211 },
  
];
employee1.forEach(employee1 => {
  console.log("Name:", employee1.name);
});


let obj1 = { name: "Chintan" };
obj1.age = 23;
obj1['address'] = 'asd';
console.log(obj1);

let obj2 = { carname: "XUV", color: "white", no: 1234 };
delete obj2.color;
console.log(obj2);

let obj3 = { name: "Alice" };
console.log('age' in obj3);



const button = document.getElementById("toggleButton1");

button.addEventListener("click", () => {
  if (button.style.backgroundColor === "red") {
    button.style.backgroundColor = "green";
  } else {
    button.style.backgroundColor = "red";
  }
});


function showPopup() {
  confirm("First Comform ?")  
    alert("Success");
}

  // show confirmation ?

// try?


function showRandom() {
  let c = Math.random()*100;
  document.getElementById("demo9").innerHTML = c;

}

  
function toggleColor() {
  let button = document.getElementById('toggleButton');
  button.style.backgroundColor = button.style.backgroundColor === 'red' ? 'green' : 'red';
}


const employee2=[
  { id: 1, name: 'Chintan', age: 23, salary: 10000, mobile: 1234567890 },
  { id: 2, name: 'Isha', age: 24, salary: 15000, mobile: 9876543210 },
  { id: 3, name: 'Pearl', age: 26, salary: 20000, mobile: 1233445566 },
  { id: 4, name: 'Aditi', age: 25, salary: 25000, mobile: 9900880077 },
  { id: 5, name: 'Raj', age: 26, salary: 15000, mobile: 7755332211 },
  
];


employee2.forEach(employee2=> {
  employee2.salary += 5000;
});
// use map() instead
console.log(employee2);



const employee3 = [
  { id: 1, name: 'Chintan', age: 23, salary: 10000, mobile: 1234567890 },
  { id: 2, name: 'Isha', age: 24, salary: 15000, mobile: 9876543210 },
  { id: 3, name: 'Pearl', age: 26, salary: 20000, mobile: 1233445566 },
  { id: 4, name: 'Aditi', age: 25, salary: 25000, mobile: 9900880077 },
  { id: 5, name: 'Raj', age: 26, salary: 15000, mobile: 7755332211 },
];

const Employees = employee3.map(employee => {
  return {employee, salary: employee.salary + 7000 };
});

console.log(Employees);




    
  
  
    
      
    