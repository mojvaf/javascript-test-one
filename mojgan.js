// 1) Write a program to display the city name if the string begins with "Los" or "New" otherwise
// return "The city name does not begin with Los or New".
function myCity(city) {
    if (city.length >= 3 && ((city.substring(0, 3) == 'Los')
                            || (city.substring(0, 3) == 'New')))
     
        {
            return city;
      }
  
    return '';
  }
  
  console.log(myCity("Los Vegas"));
  console.log(myCity("Tehran"));
  //2 Write a program to compute the sum of three elements of a given array of integers.
  // The length of the array must be 3.
 //Example
 //[5, 10, 15]
 
 var numbers = [1, 5, 11];
total = numbers.reduce(myFunc);

function myFunc(total, numbers) {
    
  return total + numbers;
}
//3 Given two strings, firstName and lastName, return a single string in the format
// "last, first".
let myFirst = "Mojgan";
let myLast ="sada "
let final = myLast + myFirst;
console.log(final)

//4 Write a program that takes an integer and returns true if it's divisible by 100, 
//otherwise return false.
var x = 100;
if (x % 100 == 0)
{
  console.log('true');
}
else
{
  console.log('false')
}
//5 Write a program that adds a string ending to each item in an array.
var myAdd = ["new","old","young"]
console.log(myAdd[0]+"er " + myAdd[1]+"er " +myAdd[2]+"er")

//6 Write a program that checks whether a number is even or odd and returns "even" 
//for even numbers and "odd" for odd numbers.
var x = 19;
if (x % 2 == 0)
{
  console.log('even');
}
else
{
  console.log('odd')
}
//7 You are given 2 out of 3 angles of a triangle, in degrees e.g. 29° and 59°. 
//Write a program that classifies the missing angle (the third angle of a triangle) as either 
//"acute", "right", or "obtuse" based on its degrees.
function triangle (a , b){
    var sum = a + b;
    if(sum >90){
        console.log("acute")
    }if(sum ===90){
        console.log("right angle")
    }if(sum<90 || sum<180){
    console.log("obtuse")
    
}else{ 
console.log("")
}
 }
triangle(190, 9)

//8 Make a variable with the string value of "maria jane jones". Convert each first letter to
// uppercase. Make sure your code works for any three names e.g. "john james smith".



//9 Write a program that takes a string and returns the word count. 
//The string will be a sentence.
function word(str) {
return str.split(" ").length;
}
console.log(word("today we have an exam"))
//10 Write a program to multiply each value in an array by the number of items in that array.
var theNum = [30, 9, 11];
for(var i=0; i<theNum.length; i++) {	
	theNum[i] = theNum[i] * theNum.length;
}
console.log(theNum);

