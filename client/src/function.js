// export const primeSieve = (maxNum) => {
//
//   // initialize the boolean array
//   const arrayLength = maxNum + 1;
//   const sieveArray = new Array(arrayLength);
//   sieveArray.fill(true);
//   return console.log(sieveArray);
//
//   // compute the list of prime numbers
//   sieveArray[0] = false;
//   sieveArray[1] = false;
//
//   for (let divisor = 2; divisor < sieveArray.length; divisor++) {
//     if (sieveArray[divisor] === true) {
//       for (let i = 2; i * divisor < sieveArray.length; i++) {
//         sieveArray[divisor * i] = false;
//       };
//     };
//   };
//
//   // print the list
//   for (let i = 1; i < sieveArray.length; i++) {
//     if (sieveArray[i] === true) {
//       return console.log(`${i} `);
//     };
//   };
// }

export const multiply = (num1, num2) => {
  return num1 * num2;
};
