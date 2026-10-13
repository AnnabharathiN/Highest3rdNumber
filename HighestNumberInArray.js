/*Having an array of numbers, write an algorithm that will return the 3rd highest number in the array. Your algorithm should do only one iteration of the array (just one for/while loop).

Example:

//Using the array 
const arr = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31]
//The correct answer is : 11

Algorithm:
Step 1: Define a function with input as parameter
Step 2: Within function, define 3 variables and initialize their value to 0.
Step 3: Create a for loop by intializing variable i to 0 , checks if i is less than the length of the array, and increments i by 1 in each iteration.
Step 4: Inside for loop, use if statement to check if input[i] is greater than first variable
Step 5: if true then set the value third to second, second to first , first to input[i].
Step 6; else if input[i] is greater than second then set third to second and second to input[i].
Step 7; else if input[i] is greater than third then set third to input[i].           
Step 8: After the loop ends, return num3.
Step 9: Call the function with the array [8, 9, 11, 45, 7, 88] and print the result with console.log().



*/
function thirdHighest(input)
{
    var num1 =0;
    var num2 =0;
    var num3 =0;
    
    for(var i =0; i<input.length; i++){
        if (input[i] > num1){
            num3 = num2;
            num2 = num1;
            num1 = input[i];
        }
        else if (input[i] > num2) {
            num3 = num2;
            num2 = input[i];  
        }
        else if (input[i] > num3) {
            num3 = input[i];
        }
    }
    return num3;
}
console.log(thirdHighest([8,9,11,45,7,88]));
