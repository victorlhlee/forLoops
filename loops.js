/*# Exercises*/

/*## `Presidents - Accessing values in an Array`
Declare a variable named `presidents` which contains the first 5 presidents' last names: `Washington`, `Adams`, `Jefferson`, `Madison`, `Monroe`.

Now write a _FOR_ loop which iterates through this Array.

Within the _FOR_ loop, use `console.log` to:

- Log the value of `i`. Use a message like `Value of i is: ` and append the value of `i` to this String
- Log what is at index `i` in the array. Use a message like `Value at Index is: ` and append the value stored within the Array at that index.

`console.log` is a great tool to give you feed back about your loops and the data that you're working with. When all else fails use `console.log` to inspect and debug your code.*/

/***bonus:** could you take the code inside of this FOR loop and encapsulate it inside of a function called `printContent` and still achieve the same result? This new function should accept two parameters.*/

var presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe"];

for(var i = 0; i<presidents.length; i++){
  console.log("The value of i is: " + [i]);
  console.log("The value at Index is: " + presidents[i]);
}


/*var presidents;
presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe"];

for(var i=0; i<presidents.length; i++){
  //console.log('Value of ' + [i] + ' is: ' + presidents[i]);
   console.log('The value of i is: ' + [i]);
   console.log('The value at Index is: ' + presidents[i]);
}*/


/*function printContent(index, name){
  for(var i = 0; i<name.length; i++){
    console.log('Mr. President at index ' + i + ' is: ' + name[i]);
  }
}

printContent(i, presidents);*/

/*var presidents = ['Washington', 'Adams', 'Jefferson', 'Madison', 'Monroe'];

 for (var i = 0; i<presidents.length; i++){
  console.log('The value of i is ' + i);
  //console.log('The value of i is:', i);
  console.log('The value at Index is: ' + presidents[i]);
 }*/

/* function printContent(num, name){
  for (var i = 0; i<name.length; i++){
    console.log('The value at Index ' + i + ' is: ' + name[i]);
  }
 }

 printContent(5, presidents);*/

/*## `The String of Numbers`
Declare a variable named `stringOfNumbers` and set it's value to `''` (an empty String).

Then write a _FOR_ loop that appends a Number value to that string starting from `10` all the way up to and including `20`.

After the _FOR_ loop, use `console.log` to inspect your variable. In the end your String should look like this `1011121314151617181920`

**bonus:** could you take the code inside of this _FOR_ loop and encapsulate it inside of a function called `appendToString` and still achieve the same result?*/

/*var stringOfNumbers = "";
var numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (var i = 0; i<numbers.length; i++){*/
  //*/console.log(numbers[i]);
/*}*/
/*stringOfNumbers = numbers.join("");*/ //array join() method: join the elements of an array into a string

/*console.log('version 1: ' + stringOfNumbers);*/



var stringOfNumbers = '';

for(var i = 10; i<=20; i++){
  stringOfNumbers += i;
}
console.log('stringOfNumbers: ' + stringOfNumbers);

/*function createStringNum(){
  var stringOfNumbers = '';
  for(var i = 10; i<=20; ++i){
    stringOfNumbers += i;
  }
  return stringOfNumbers;
}

var myString = createStringNum();
console.log(myString);*/

/*## `Add only even numbrs to an array`
Declare a variable named `evenNumberArray`.*/

var evenNumberArray;
var sum = 0;

for(var i = 0; i<=99; i++){
  if(i%2===0){
    sum +=i;
  }
}
console.log('evenNumberArray: ' + sum);


/*Use a _FOR_ loop to add only even numbers to an Array. Add `50` even numbers to the `evenNumberArray` starting with the value `0`.*/

/*## `Accessing only the odd indexes of an Array - 'Not Even Brah'`
Someone forgot to fill out this array! Oh noes...

Declare a new variable named `oopsArray` set it's value to be: `[ 'turn' , , 'down' , , 'for' , , 'what' ]`


using a _FOR_ loop, add the string `'nope'` to every odd index.*/

/*Example result should look like:

```javascript
`[ 'turn' , 'nope' , 'down' , 'nope' , 'for' , 'nope' , 'what' ]`
```*/

var oopsArray = ['turn', , 'down', , 'for' , , 'what' ];

for (var i = 0; i<oopsArray.length; i++){
  if(i%2===1){
    oopsArray[i] = 'nope';
  }
}
console.log('oopsArray: ' +  oopsArray);

/*var oopsArray = [ 'turn' , , 'down' , , 'for' , , 'what' ];
for (var i = 0; i<oopsArray.length; i++){
  console.log(i, oopsArray[i]); //undefined values falsey values
  if(i%2===1){
    oopsArray[i] = 'nope';
  }
}
console.log('oopsArray', oopsArray.length, oopsArray);*/

/*## `Going backwards?!`
Using a _FOR_ loop, iterate through the Array stored at `oopsArray` **backwards**. `console.log` each value in the Array.

example output:
```
what
nope
for
nope
down
nope
turn
``*/
var oopsArray = [ 'turn' , , 'down' , , 'for' , , 'what' ];
var backwardsArray = [];

function reverse(array){
  for(var i = oopsArray.length - 1; i>0; i--){
    if(i%2===1){
      backwardsArray.push('nope');
    }else{
      backwardsArray.push(oopsArray[i]);
    }
  }
  return backwardsArray;
}
console.log('reverse array:  ' + reverse(oopsArray));

/*function reverse(array){
  for (var i = oopsArray.length - 1; i>=0; i--){
    if(i%2 ===1){
      backwardsArray.push('nope');
 }else{
    backwardsArray.push(oopsArray[i]);
 }
}
  return backwardsArray;
}
console.log('backward: ' + reverse(oopsArray));
*/

/*## `isNapTime`
Declare a variable named `isNapTime`. Set it to `false`

Declare a variable named `napSchedule`. Set it's value to be an `Array` with the values `[false, false, true, false, true, true]`

Declare a function named `nap`. This function takes in a single parameter called `schedule`

- If `schedule` is `true` then use `console.log` to display the message `ZzZzZzZz`
- otherwise if `schedule` is `false` use `console.log` to display the message `Gotta get to work!` and then change the value of `isNapTime` to `true`

Now, Write a FOR loop that iterates through the `napSchedule` array and runs the function `nap` while passing in the value at the current position of `napSchedule` into the `nap` function.*/
var isNapTime = false;
var napSchedule = [false, false, true, false, true, true];

function nap (schedule){  
    if(schedule === true){
      console.log('ZzZzZzZz');
    }else{
      console.log("Gotta get to work!");
      isNapTime = true;
    }
  }
for(var i = 0; i<napSchedule.length; i++){
  //console.log(i); 
  nap(napSchedule[i]);
}

/*console.log(nap(napSchedule));*/

/*## `CopyArray - clone array values`
Declare a variable named `copyOfValuesArray` and set it's value to be an empty array, `[]`.

Declare a variable named `valuesArray` and set it's value to be an array, `[99, 66, 829, 1941, 8, 76]`.

Declare a function named `copyArray` which takes two arguments: `originArray` and `destinationArray`. Inside of this function you will loop through the contents of `originArray` and push each value into `destinationArray`.*/

/*To get started, below your function declaration, call your function and pass in the two variables, `valuesArray` and `copyOfValuesArray`. After that, use `console.log` to to inspect the values of `valuesArray` and `copyOfValuesArray` to make sure they have the same values (which means your function worked!).*/


var copyOfValuesArray = [];
var valuesArray = [99, 66, 829, 1941, 8, 76];

function copyArray (originArray, destinationArray){
  for (var i = 0; i<originArray.length; i++){
    destinationArray.push(originArray[i]);
  }
  return destinationArray;
}

copyArray(valuesArray, copyOfValuesArray);
console.log(valuesArray);
console.log(copyOfValuesArray);

/*# Final Boss*/
/*## Stage 1 - Only String Values
Declare a variable named `miscStorage` set it's value to be: `[ [], 'Carrots', 9, 'Beets', {}, {name: "Todd B."}, 'Mush' ]`

Declare a function named `generateArrayOfStrings` which takes a single argument `storage`. This function returns a new Array with only `String` values inside of it.

## Final Form - Change values of objects stored within an Array
It's that time again, we need to graduate the current class of students and start enrollment for the next class.

Declare a variable named `currentClass` and set it's value to be this [array found here](https://gist.github.com/sgnl/e40879b2249e06ca7811).

Declare a function named `graduateAndSetNewClass`, it takes a single argument called `class`.

Your function will iterate through the `class` argument and check each student's `enrolled` property. 

If the `enrolled` property is set to `true` then change that student's `graduated` property to `true`. Otherwise, if `enrolled` is set to `false` then change `enrolled` to `true` leaving `graduated` alone and unchanged.*/

var miscStorage = [ [], 'Carrots', 9, 'Beets', {}, {name: "Todd B."}, 'Mush' ];

console.log(miscStorage);

function generateArrayOfStrings(storage){
  var str = typeof ''; //typeof operator allows you to probe the data type of its operand, such as whether a variable is a string, number or even undefined.
  var stringArr = [];
  for (var i = 0; i<storage.length; i++){
    if(typeof storage[i] === typeof str ){
      stringArr.push(storage[i]);
    }
  }
  return stringArr;
}
console.log('stage 1: ' + generateArrayOfStrings(miscStorage));

var currentClass = [
  {
    name: 'Doug',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Pat',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Marsha',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Moira',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Ben',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Nigel the Giraffe',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Brandon the Shark',
    graduated: false,
    enrolled: true
  }
];

function graduateAndSetNewClass(cohort){
 for(var i = 0; i<cohort.length; i++){
   var currentStudent = cohort[i];
   if(currentStudent.enrolled){ //value pairs in js objects are called properties
    currentStudent.graduated = true;
   }else{
    currentStudent.enrolled = true;
   }
 }
}
graduateAndSetNewClass(currentClass);
console.log(currentClass);