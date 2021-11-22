function secondbigandsmall(arr){
	arr = arr.sort(function (a, b) {  return a - b;  });
	return arr[1] + " " + arr[arr.length-2];
}
test=[133,2,435,756,345,432,456,43];
console.log(secondbigandsmall(test));