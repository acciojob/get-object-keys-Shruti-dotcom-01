//your JS code here. If required.
let student = {
	name: "Shruti"
};
Object.prototype.getKeys = function() {
  return Object.keys(this.name);
	
console.log(student.getKeys());