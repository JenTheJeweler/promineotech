console.log ("test")

/* 1 Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

    Programmatically subtract the value of the first element in the array from the value in the last element of the array.
        Do not use numbers to reference the last element, find it programmatically.
        ages[7] - ages[0] is not allowed!
    Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
    Use a loop to iterate through the array and calculate the average age.

    //Create array called ages*/
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//subtract the value of the first element in the array from the value in the last element of the array. 
//--not by numerically naming the numbers, but through programming it to always 
//subtract the value of the first from the value of the last
//I had to look this up and this is what chatgpt said to use, which feels weird because we havent
//gone over this, but... .length-1

var lastNumber = ages.length - 1 
var lastAgeMinusFirst = ages[lastNumber] - ages[0];
console.log("The last age minus the first age:", lastAgeMinusFirst);

//ADD a new age to the end of the list
let newAge = 36
ages.push(newAge);

//Repeat first step with new number added
//NOte, had to go back and change let to var so the variables could be revalued
var lastNumber = ages.length - 1 
var lastAgeMinusFirst = ages[lastNumber] - ages[0];
console.log("The new last age minus the new first age:", lastAgeMinusFirst);


//Find average age using a loop
var sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum +=ages[i];
}
//Printing the average age to the consle:
let averageAge = sum / ages.length;
console.log("Average age:", averageAge);




/* 2 Create an array called names that contains the following values: 'Sam', 'Tommy', 
//'Tim', 'Sally', 'Buck', 'Bob'.

    Use a loop to iterate through the array and calculate the average number of letters 
    per name.
    Use a loop to iterate through the array again and concatenate all the names together,
     separated by spaces*/

//Make the array:
//note:after i got them concatenated at the end, i went back an added spaces
// before each first letter so they would be spaced out when printed
let namesArray = [' Sam', ' Tommy', ' Tim', ' Sally', ' Buck', ' Bob']

//average number of letters in each name
//need a for loop here to iterate thru all the letters, find the number of letters 
//and add them up...
let letters = 0;
for (let i = 0; i < namesArray.length; i++) {
    letters += namesArray[i].length;
}
//divide the letters by how many names are in the array to get the average...
let avrgLetters = letters / namesArray.length;
console.log("Average number of letters per name:", avrgLetters);


// Concatenate all names together
let allNames = '';
for (let i = 0; i < namesArray.length; i++) {
    allNames += namesArray[i];
}

//printing all the names to the console:
console.log("Concatenated names:", allNames);


//3 How do you access the last element of any array?
console.log ("You use the phrase or command 'array.length -1' which just means you're taking the whole array length and subtracting one")

//4 How do you access the first element of any array?
console.log ("Arrays start at zero, so you would assign the first element as zero, but it will represent the *value* ( but not the place number) of whatever the first number is")

//5Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array. 
let names = ["Gus", "Jennifer", "Dodi", "Rocco"]
let nameLengths = [ /*create loop here to iterate the previous names array and add the lengths of each name here*/]

for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length)
}
//Print nameLengths to the console:
console.log("Name lengths:", nameLengths)

//6 Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

// come up with a variable for the sum I had to add this after i wrote the loop because it wasn't working--
//and i had to change it to var in line 36, because I used it there.
var sum = 0
//write a for loop that iterates the numbers in the nameLengths array and adds them up:
for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i]
}
//Printing the answer:
console.log("Sum of name lengths:", sum)

//7 Write a function that takes two parameters, word and n, as arguments and returns the word concatenated
// to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 
//'HelloHelloHello').
//all commented out because I am stuck.
//write function with two parameters/arguments word, n

function repeatingWord(word, n) {
   // result should be an empty string that will represent whatever is input, I think(?)
   let result = ''
   //and then concatenated with a for loop
   for (let i =0; i< n; i++) {
         result +=word
   } return result;
}
// to run the code you need to add the inputs
//added spaces so it wouldn't be smushed together.
let repeatedWord = repeatingWord (' hello ', 3);
console.log (repeatedWord)



//8 Write a function that takes two parameters, firstName and lastName, and returns a full name. 
//The full name should be the first and the last name separated by a space.

//function with the 2 parameters
function fullName(firstName, lastName) {
    //what the function does, adding the two values together (concatenating)
    let result = firstName + lastName
    return result
}
//returning any names that would be entered (has to be entered as a string, I'm not sure why), also 
//have to add a specific space as a string, too, weird...  I tried to add the space as a seperate 
//string but it made the last name dissappear on the console... idk.
var printFullName = fullName('Jennifer ',' Hermann')
//printing to the console:
console.log(printFullName);



//9 Write a function that takes an array of numbers and returns true if the sum of all the 
//numbers in the array is greater than 100. 

//writing the function:
function greaterThanOneHundred() {
    let array = [20, 40, 60]
    //a for loop to determine if the sum of all the numbers
    let sum=0 //start sum at zero to start
    //for loop to find the sum
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    //determine if the sum if greater than 100 with boolean
    if (sum > 100) {

        console.log("true");
    } else {
        console.log("false");
    }
}

greaterThanOneHundred();


//10 Write a function that takes an array of numbers and returns the average of all the elements in the array.
//created function with a randaom array:

function calculateAverage() {
    let numbersArray = [10, 20, 30, 40, 50];  
//create avariable for the sum and start it at zero
    let sum = 0;
    // add a counter variable- shows how many numbers there are
    let count = 0;  
//loop that goes through each number in the array and add them up while also counting how many numbers there are
    for (let i = 0; i < numbersArray.length; i++) {
        sum += numbersArray[i];
        // counter counts by 1s
        count += 1;  
    }
// the average is found by adding the numbers and dividing that by how many numbers there are: 
    let average = sum / numbersArray.length;  
//prining the average to the console:
    console.log("The average is: " + average); 
}

// Calling the function, 
calculateAverage();



//11 Write a function that takes two arrays of numbers and returns true if the average of the elements in 
//the first array is greater than the average of the elements in the second array.
// Example arrays with different random numbers
let firstArray = [8, 15, 23, 42, 10];
let secondArray = [5, 17, 30, 8, 12];

// Define a function to calculate the average of an array

/*function calculateAverage(someNumbers) {
    let sum = 0;
    for (let i = 0; i < someNumbers.length; i++) {
        sum += someNumbers[i];
    }
    return sum / someNumbers.length;
}

// Define a function that takes two arrays and compares their averages
function compareAverage(arrayA, arrayB) {
    let avgArrayA = calculateAverage(arrayA);
    let avgArrayB = calculateAverage(arrayB);
    
    return avgArrayA > avgArrayB;
}

// Call the function and print the result
let isAverageOfFirstArrayGreater = compareAverage(firstArray, secondArray);
console.log("Is the average of the first array greater than the second array? " + isAverageOfFirstArrayGreater);*/

console.log("I can;t figure out why this is not working! it says someNumbers is undefined...i don't understand how it its undefined.")


//12 Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and 
//returns true if it is hot outside and if moneyInPocket is greater than 10.50.

let willBuyDrink = (isHotOutside, moneyInPocket) =>
    isHotOutside && moneyInPocket > 10.50

    //print using values to test the function
console.log(willBuyDrink(true, 12));   
console.log(willBuyDrink(true, 10));  






//13 Create a function of your own that solves a problem. In comments, write what the function does and why 
//you created it.
/*
    figure out how many loads of dishes can be done with a gallon of dishsoap if each load uses one tablespoon*/

function calculateDishLoads(dishSoapGallons) {
    
// 1 gallon = 256 tablespoons
let tablespoonsPerGallon = 256
let loads = dishSoapGallons * tablespoonsPerGallon;

    //used a template literal to write this longer string with the defined variables--tell you how many loads can
    //be done with the given amount of dishsoap
console.log(`You can do about ${loads} loads of dishes with ${dishSoapGallons} gallon of dish soap.`);
}

let availableDishSoapGallons = 1;  // 1 gallon of dish soap

//calling the function:  
calculateDishLoads(availableDishSoapGallons)
