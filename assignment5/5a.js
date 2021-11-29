const myCar = {
  mark: 'Ford',
  model: 'Mustang',
  year: 1970
};

function printallfields(car){
	console.log(car.mark + " " + typeof car.mark);
	console.log(car.model + " " + typeof car.model);
	console.log(car.year + " " + typeof car.year);
}

function setyear(car,newyear){
	car.year = newyear;
}
printallfields(myCar);
setyear(myCar, 1999);
printallfields(myCar)
