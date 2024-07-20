// easy
// 1
// function findDivision(num1 = 0, num2 = 0){
//     console.log(num1 / num2)
// }

// findDivision(10, 5)

// 2
// function findSquare(number){
//     return number ** 2
// }
// console.log(findSquare(4));

// 3
// let array = [1, 2, 3, 4];
// function sumElementArray(){
//     let summ = 0
//     for (let i = 0; i < array.length; i++){
//         summ += array[i]
//     }
//     return summ;
// }
// console.log(sumElementArray(array))

// 4
// let stroka = prompt("Напишите что-то...");
// function lengthString(stroka){
//     let count = 0;
//     for (i = 0; i < stroka.length; i++){
//         count += 1;
//     }
//     return count;
// }
// console.log(lengthString(stroka))

// 5
// function numberAbsolute(number){
//     if (number < 0){
//         console.log((-number))
//     } else{
//         console.log(number)
//     }
// }
// numberAbsolute(-1000)

// 6
// let arr1 = ["apple", "pineapple", "banana"];
// let arr2 = [];
// function conversationArray(){
//     for (i = 0; i < arr1.length; i++){
//         arr2.push(arr1[i].length)
//     }
//     return arr2
// }
// console.log(conversationArray(arr1))

// 7
// function comparingTwoNumber(a, b){
//     if(a > b){
//         console.log("Первое число больше")
//     } else if(a < b){
//         console.log("Первое число меньше")
//     } else{
//         console.log("Они равны")
//     }
// }
// comparingTwoNumber(18, 10)

// 8
// let stroka = "apple";
// function repeatString(number){
//     let result = "";
//     while(number > 0){
//         result += stroka
//         number--;
//     }
//     return result;
// }
// console.log(repeatString(5))

// 9
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [];
// function convertSquare(){
//     for (i = 0; i < arr1.length; i++){
//         arr2.push(arr1[i] ** 2)
//     }
//     return arr2;
// }
// console.log(convertSquare(arr1))

// 10
// function checkEven(number){
//     if (number % 2 == 0){
//         console.log("Число является четным")
//     } else{
//         console.log("Число является нечетным")
//     }
// }
// checkEven(100);


// Medium
// 1
// let arr1 = [1, -2, 3, -4, 5];
// let arr2 = [];
// function removeNegative(){
//     for (i = 0; i < arr1.length; i++){
//         if (arr1[i] > 0){
//             arr2.push(arr1[i])
//         }
//     }
//     return arr2;
// }
// console.log(removeNegative(arr1));


// 2
// let stroka = "Hello, World!";
// let arr = [];
// let stroka2 = ""
// function reverseString(){
//     for (i = stroka.length; i > -1; i--){
//         arr.push(stroka[i])
//     }
//     stroka2 = arr.join('')
//     return stroka2;
// }
// console.log(reverseString(stroka))

// 3
// let arr = [1, 2, 3, 5, 4];
// let summ = 0;
// function averageArray(){
//     let summ = 0
//     for (i = 0; i < arr.length; i++){
//         summ += arr[i];
//     }
//     return summ / arr.length
// }
// console.log(averageArray(arr))


// 4
// function sortDescending(array) {
//     return array.slice().sort((a, b) => b - a);
// }
// let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// console.log(sortDescending(numbers))

// 5
// function determineFactorial(number){
//     let factorial = 1;
//     while(number > 0){
//         factorial *= number;
//         number--
//     }
//     return factorial;
// }
// console.log(determineFactorial(5));

// 6
// function getTopStudents(students) {
//     let topStudents = students.filter(student => student.averageGrade > 70);
//     let topStudentNames = topStudents.map(student => student.name);

//     return topStudentNames;
// }
// let students = [
//     { name: "Daniyar", age: 20, averageGrade: 85 },
//     { name: "Alina", age: 22, averageGrade: 65 },
//     { name: "Zhannat", age: 23, averageGrade: 75 }
// ];
// console.log(getTopStudents(students))
