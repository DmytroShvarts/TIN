class Student{
	constructor(name,surname,id,grades){
		this.name = name;
		this.surname = surname;
		this.id = id;
		this.grades = grades;
	}

	get avggrade(){
		var total = 0;
		for(var i = 0; i < this.grades.length; i++) {
			total += this.grades[i];
		}
		return total / this.grades.length;
	}
	
	print(){
		
		console.log("Student: " + this.id + 
		"\nName: "+ this.name +
		"\nSurname: " + this.surname +
		"\nAvg grade: " + this.avggrade);
	}

	get fullName() {
		return `${this.name} ${this.surname}`;
	}

	set fullName(value) {
		[this.name, this.surname] = value.split(" ");
	}
}

var x = new Student("John","Doe",1234,[2,3,4,5,2,3,4,2,3]);
x.print();
x.fullName = "Person Man";
console.log(x.fullName);