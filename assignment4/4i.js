function converttocoins(sum,coins){
	var result = [];
	var currentcoin = 0;
	while(sum>0){
		if(coins[currentcoin] > sum){
			currentcoin++;
		}else{
			sum-=coins[currentcoin];
			result.push(coins[currentcoin]);
		}
	}
	return result;
}

console.log(converttocoins(46, [25, 10, 5, 2, 1]))