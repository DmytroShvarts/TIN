class Person{
	constructor(name,surname){
		this.name = name;
		this.surname = surname;
	}

	get fullName() {
		return `${this.name} ${this.surname}`;
	}
	
	set fullName(value) {
		[this.name, this.surname] = value.split(" ");
	}
}



class Student extends Person{
	constructor(name, surname,id,grades){
		super(name,surname);
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

}
var per = new Person("John","Doe")
var x = new Student(per.name, per.surname,1234,[2,3,4,5,2,3,4,2,3]);
x.print();