// ----------------------------------
// Pig Latin || freecodecamp
// -------------------------------------
function translatePigLatin(str) {
    let output = "";
    let vowel = "aeiou";
    for (let i = 0; i < str.length; i++){
      if (vowel.includes(str[0]) === true){
        output = str + "way";
      } else if (vowel.includes(str[i]) === true){
        output = str.slice(i) + str.slice(0, i) + "ay";
        break;        
      } else {
        output = str + "ay";
      }
    }
    return output;
  }
  
  let result = translatePigLatin("rythm");
  console.log(result);

//   ---------------------------------------------
//   Plus Minus || Hacker Rank 
//   ---------------------------------------------
// Given an array of integers, calculate the fraction of its elements that are positive, negative and are zeros. print the decimal values of wach fracation in anew line.
// 1st one for positive value, 2nd one for negative value & 3rd one is for zero 
let posCount = 0;
let negCount = 0;
let zeroCount = 0;

function plusMinus(arr){
for(let i = 0; i < arr.length; i++){
    if (arr[i] > 0 ){
        posCount++;
    } else if( arr[i] < 0 ) {
        negCount++;
    } else {
        zeroCount++;
    }

}
let posFraction = (posCount/arr.length).toFixed(6);
let negFraction = (negCount/arr.length).toFixed(6);
let zeroFraction = (zeroCount/arr.length).toFixed(6);

return {posFraction, negFraction, zeroFraction}
}
let fraction = plusMinus([1, 1, 0, -1, -1, 1]);
// console.log(fraction);
console.log(fraction.posFraction);
console.log(fraction.negFraction);
console.log(fraction.zeroFraction);

// // -------------------------------------------------------------------------------------
// Convert HTML Entities || freecodecamp
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities. 
//-------------------------------------------------------------------------------------
function convertHTML(str) {  
    // when I chenged the function name from their default name, the code does not pass in freecodecamp
let output = 2;
for (let i = 0; i < str.length; i++) {
 if (str[i] === "<"){
    output += "&lt;";
 } else if (str[i] === ">"){
    output += "&gt;";
 } else if (str[i] === "&"){
    output += "&amp;";
 } else if (str[i] === '"'){
    output += "&quot;";
 } else if (str[i] === "'"){
    output += "&apos;";
 } else {
    output += str[i];
 }
}
return output;  
}
let result209 = convertHTML("Dolce & Gabbana");
console.log(result209);
// -------------------------------
// Sum ALl Primes || freecodecamp
// -------------------------------
function sumPrimes(num) {
    let output = 0;
    let allNum = [];
    let primes = [];
    // geting all numbers between 2 and argument number
    for (let i = 2; i <= num; i++) {
        // console.log(i);
      allNum.push(i);    
    }
    console.log(allNum);

    //  geting prime numbers from allNum
    // 1st iterate through allNum array , 2nd find primes from them
    for (let i= 0; i < allNum[i]; i++){
        let isPrime = true;
        for(let j= 2; j < allNum[i]; j++){ 
            //j=2, beacuse something devided by 1 will found the same value, so j starts from 2
            if (allNum[i]%j ===0){
                isPrime = false;
            }
      
            }
            if (isPrime){
                primes.push(allNum[i]);
        }
        }
       console.log(primes);
    //    sum of values of primes array
       for (let k = 0;  k < primes.length; k++ ) {
         output += primes[k];
       }
       

    return output;
  }
  let result43 = sumPrimes(10);
  console.log(result43);


  

