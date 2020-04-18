var message = "in Global";
console.log("global: message = " + message);

var a = function () {
var message = "inside a";
console.log ("a message =" + message);
b();
}

function b () {
console.log("b: message =" + message)
}

a();

/*Variables/functions are either defined globally or in functions. 

scope chain defines that invoking a function will 
always look for a variable first inside its own function and 
then in outter reference (global) 

functions therefore create their own context 

*/

/*String Concetanation*/
var string = "Hello";
string += " World";
console.log( string + "!");

/*MAth operators*/
console.log((5+4)/3);


function test1(a){
a = 5
console.log(a/5)
}
test1();

/*Equality*/
var x = 4, y= 4;
if (x == y) {
console.log("x=4 is equal to y=4");
}

/*JS converts types to compare values in below example*/
var x= "4"
if(x==y){
console.log("x=4 is equal to y=4");
}

/*Strict Equality*/
if(x===y){
console.log("x=4 is equal to y=4");
}
else {
	console.log("strict: x='4' is NOT equal to y=4")
}

/*IF statement || OR operator && AND operator*/
if ( false || null || undefined || "" || 0 || NaN) {
	console.log("This line wont ever execute");
}
else{
	console.log("All false");
}

if ( true && "hello" && 1 && -1 && "false") {
	console.log("all true");
}

/*Curly Braces always starting on same line*/
function Givename() {
	return{
		name: "Dirk"
	};
}
console.log(Givename());


/*For loop consists of 2 parts: initialisation, loop condition, action*/
var sum = 0
for (var i= 0; i <10; i++) {
	console.log(i);
	sum = sum + i;
}
console.log("sum of 0 trough 9 is:" + sum);


function orderChickenWith(SideDish){

/*either if condition  

if (SideDish === undefined) {
	SideDish = "Whatever"
}
OR short version (if SideDish == false, "whatever will be filled": 
*/
SideDish = SideDish || "Whatever";

console.log("Chicken with " +SideDish);
}

orderChickenWith("Noodles");
orderChickenWith();

/*Create new object with "new Object"*/
var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.LastName = "Zuckerberg";

console.log("Name of " + company.name + " is " + company.ceo.firstName + " " + company.ceo.LastName);
/*this notation is to be used with some functions as the one above does not work always*/
console.log(company["name"]);

/*Create new object EASIER - object literal*/

var facebook = {
name: "Facebook",
ceo: {
	firstName: "Mark",
	LastName: "Zuckerberg"
},
$stock: 110
};
console.log(facebook);

var google = {
name: "Google",
ceo: {
	name: "Gandalf",
	Mothercompany: "Alphabet"
	},	
};
console.log(google);


/*Functions - functions are basically objects, that means you can set attributes on them as you would for objects and pass them on to functions*/
function multiply(x,y) {
	return x*y;
}
multiply.version ="v.1.0.0";
console.log(multiply.version);

//Function factory
function makeMultiplier(multiplier) {
	var myFunc =function (x) {
		return multiplier * x;
	};
	return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var multiplyBy2 = makeMultiplier(2);
console.log(multiplyBy2(100));

//Passing functions as arguments
function doOperationOn(x, Operation) {
	return Operation(x);
}
var result = doOperationOn(5, multiplyBy3);
console.log(result);
result = doOperationOn(5, multiplyBy2);
console.log(result);

//Copy by Value, meaning both variables pointing towards different memory location 
var a = 7;
var b = a;
console.log("a:" +a);
console.log("b:" +b);
b= 5;
console.log("b after update");
console.log("a:" +a);
console.log("b:" +b);

//Copy by reference, meaning both objects point to the same memory location. 
//primitives are copied by value, whereas objects are copied/ passed by reference

function ChangeObject(objvalue){
	console.log("in ChangeObject function");
	console.log("before");
	console.log(objvalue);
	objvalue.x=5;
	console.log("after");
	console.log(objvalue);
};
value = {x: 7};
ChangeObject(value); //objvalue=value
console.log("after value gets modified");
console.log(value);

//this function constructor

function Circle(radius) {
this.radius = radius; 
};
//funcion constructor. without return function

Circle.prototype.getArea = function () {
	return Math.PI * Math.pow(this.radius, 2);
};
//prototype function for  every Circle object is defined outside the constructor

var myCircle= new Circle (10); //new object with name of function
console.log(myCircle);

//Object literals and "this" instead of function constructors
var literalCircle = { // equal to new object
	radius: 15, 
 	
	getCircleArea: function() {
	var self = this; // 
	console.log("initial radius: " + this.radius);
		var increaseRadius = function (){
		self.radius = self.radius*2;	//functions within functions lose context of "this", so self variable is declared in function above and assigned to "this" to refer to it in the nested function
		};
		increaseRadius();

	console.log("increased radius: " + this.radius);
	return Math.PI * Math.pow(this.radius, 2);
	}
};
console.log(literalCircle.getCircleArea());


//Arrays, in JS you can store different types in arrays
var array = new Array();
array[0] = "Dirk";
array[1] = 2;
array[2] = function(name){
	console.log("hello:" + name);
};
array[3] = {course: "HTML, cSS and JS"};
console.log(array);
console.log(array[1]);
array[2]([0]);
console.log(array[3].course);

// For loop with arrays
var names = ["dirk", "liane", "Mill", "Günni"];
console.log(names);

for (var i =0; i <names.length; i++) {
	console.log("Hello " +names[i]);
}


//For loop on object
var names2 = {
	name: "Dirk Schöwe",
	course: "HTML",
	platform: "coursera"
};

for (var properties in names2) {
	console.log(properties + ": " + names2[properties]);
}

// Closures
function makeMultiplier (multiplier){
	return(
		function (x){
			return multiplier * x;
		})
};
var doubleAll = makeMultiplier(2);
console.log(doubleAll(20));


//encapsule attributes and functionality that belongs together (faking namespaces)
//var DirkGreeter = {};
//DirkGreeter.name = "Lolli",
//DirkGreeter.SayHello = function (){
//console.log("Hello: " + DirkGreeter.name)
//};
//DirkGreeter.SayHello();

//same code as an immediately invoked function
// exposed to outside world of the function

(function (){
var DirkGreeter = {};
DirkGreeter.name = "Lolli",
DirkGreeter.greeting = "Hi ";
DirkGreeter.SayHello = function (){
console.log(DirkGreeter.greeting + DirkGreeter.name)
};
window.DirkGreeter = DirkGreeter; // make variable available to window object 
})(); 

DirkGreeter.SayHello();
//immediately invoked function

(function (name) {
console.log("Hello this is an immediate invoked function "+ name);
})("Dirk");

