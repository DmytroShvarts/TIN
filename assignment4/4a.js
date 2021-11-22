function rFactorial(x) {
    if (x === 0) {
        return 1;
    }else {
        return x * rFactorial(x - 1);
    }
}

function iFactorial(x){
    var res = 1;
    while(x>1){
      res=res*x;
      x--;
    }
    return res;
}

var t1 = rFactorial(2);
var t2 = iFactorial(2);
console.log(t1 + " and " + t2);

t1 = rFactorial(5);
t2 = iFactorial(5);
console.log(t1 + " and " + t2);