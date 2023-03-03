
// Q. 1
// The differences between mutating array methods and non-mutation array methods in JavaScript is that,
// mutating array methods are those methods that change the object after the method has been used. It examples are: array.pop(), array.push(), array.reverse(), array.shift(), array.sort(), array.splice(), array.unshift() etc

// while
// non-mutating methods do not change the object after the method has been used.
// They are array.concat(), array.includes(), array.indexOf, array.join(), array.lastIndexOf, array.slice() etc


//Q. 2
const languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']

//2(i)
languages.push('Kotlin');
// console.log(languages);

// //2(ii)
languages.splice(3, 0, 'Java');
// console.log(languages);

// //2(iii)
languages.shift();
// console.log(languages);

//2(iv)
languages.splice(0, 0, 'Scala', 'Swift');
// console.log(languages);

//2(v)
languages.splice(3, 1, 'Go', 'Rust');
// console.log(languages);

//Q.3
//After calling the function below, the value of changeFruit is ['apple', 'mango', 'orange']

let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
       //console.log(changeFruit(fruit));



//Q.4
const num = [4, 5, 10, -2];

function max(){
    return num[2];
}
// console.log('Maximum value is ' + " " + max(num));


//Q.5
const numbers = [1, 2, 3];
const newVal = [];

for (let i = 0; i < numbers.length; i++) {
  newVal.splice(0, 3, 0, 2, 6);
}
// console.log(newVal)
