function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

console.log(isPrime(3));
console.log(isPrime(10));
console.log(isPrime(11));