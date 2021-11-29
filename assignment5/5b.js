class Student{
	constructor(name,surname,id,grades){
		this.name = name;
		this.surname = surname;
		this.id = id;
		this.grades = grades;
	}

	print(){
		var total = 0;
		for(var i = 0; i < this.grades.length; i++) {
			total += this.grades[i];
		}
		var avg = total / this.grades.length;
		console.log("Student: " + this.id + 
		"\nName: "+ this.name +
		"\nSurname: " + this.surname +
		"\nAvg grade: " + avg);
	}
}

var x = new Student("John","Doe",1234,[2,3,4,5,2,3,4,2,3]);
x.print();