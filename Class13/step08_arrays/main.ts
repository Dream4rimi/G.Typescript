// Array
// array ko ham isliye define karte hain taky usme same data type ki multiple values rakh saken...


let array: number[] = [1,2,3,4,5,6]; // correct syntax
console.log(array[2]) // Output: 3 correct syntax for acces value


let array2: Array<number> = [1,2,3,4,5]; //  correct alternative syntax
console.log(array2); // Output:  [ 1, 2, 3, 4, 5 ] 


let array3: number[] = []; // Correct syntax to define an empty array


let array4: number[] = new number[2] // Wrong syntax


let array5: number[] = [];
array5.push(12345); // dynamically adding values

console.log(array5); // Output: [ 12345 ]