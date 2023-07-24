function isPrime(number) {
    if (number <= 1) {
      return "not prime";
    } 
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i == 0) {
        return "not prime";
      }
    }
    return "prime";
  }
  //========================================================================================
function fibonacciSum(n) {
    if (n <= 0) {
      return 0;
    }
    let fibSeries = [0, 1];
    let sum = 1;
    for (let i = 2; i <= n; i++) {
      fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
      sum += fibSeries[i];
    }
    return sum;
  }

  //========================================================================================

function countEvenOddZero(arr) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        zeroCount++;
      } else if (arr[i] % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
    return {
      even: evenCount,
      odd: oddCount,
      zero: zeroCount
    };
  }

  //========================================================================================
  function functionGenerator(operate){
    switch(operate){
        case "isPrime":return["prime number is ",isPrime]
        case "fibonacciSum":return["fibo is ",fibonacciSum]
        case "countEvenOddZero":return["odd and even ",countEvenOddZero]
        default:return["invalid",null]
    }
}

let[messsage, checkPrime]=functionGenerator('isPrime') 
let x= checkPrime (39) 
console.log(x)

let[mess, checkFibo]=functionGenerator('fibonacciSum') 
let y= checkFibo (10) 
console.log(y)

let[mes, checkcount]=functionGenerator('countEvenOddZero') 
let z= checkcount ([10,0,0,13,9,4,5,0])
console.log(z)