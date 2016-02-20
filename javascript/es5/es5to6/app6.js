const Person = function(living, age, gender) {
	this.living = living;
	this.age = age;
	this.genfer = gender;
	this.getGender = function() {
		return this.gender;
	};
};

const cody = new Person(true, 23, 'male');
console.log(cody.getGender());

	