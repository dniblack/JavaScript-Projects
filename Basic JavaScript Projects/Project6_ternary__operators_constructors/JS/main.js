// THIS IS AN EXAMPLE FROM CLASS
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// TERNARY_OPERATORS_CONSTRUCTORS PRACTICE
function Voting_Function() { // created and labeled a function
    var Age, Can_Vote; // created and labled twovariable
    Age = document.getElementById("Age").value; // gave a value to the firstvariable; value grabs the button id from the linked HTML 
    Can_Vote = (Age < 18) ? "You are too young":"You are old enough"; // gave a value to the second var; created a condition with the first variable and a value then added a tenary operator
                                                            // asssigned two values to the tenary operator
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote."; // grabbed the paragraph id from the linked HTML to be used to 
                                                                         // add a string to the ending value of the second var
}

// THIS IS AN EXAMPLE FROM CLASS
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructs").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

// OBJECT-ORIENTED PRACTICE
function Limit(Name, Level, Damage) { // created a function with an object constructor along with labels to be used with an owner
    this.Limit_Name = Name; // used "this" to create a value which will be the value "Name"; this represents the name of the skill or "Limit"
    this.Limit_Level = Level; // used "this" to create a value which will be the value "Level" ;This represents the level that is needed in order to access and use the skill or "Limit"
    this.Limit_Damage = Damage; // used "this" to create a value which will be the value "Damage";This represents the amount of damage the skill or "Limit" does by default
}
var Cloud = new Limit("Braver", "Level 1", 745); // generated a variable, Cloud, and created new objects for the variable
var Tifa = new Limit("Meteor Strike", "Level 3", 4500);  // generated a variable, Tifa, and created new objects for the variable
var Barret = new Limit("Hammer Blow", "Level 2", 1455); // generated a variable, Barret, and created new objects for the variable
function myLimitFunction() { // created a function which will access the previous function to create a document using strings,variables, objects, keywords, and constructs
    document.getElementById("New_and_This").innerHTML =
    "Cloud Strife uses the Limit " + Cloud.Limit_Name + " at " + Cloud.Limit_Level +
    " and does " + Cloud.Limit_Damage + " damage when he uses it on the opposing enemy.";
}

// NESTED FUNCTION PRACTICE
function eye_function() { //  created and labeled a function 
    document.getElementById("Nested_Function").innerHTML = Cont(); // retrieved the paragraph id from the HTML to be used with the function
    function Cont() { // created and labeled a fucntion
       var Starting_point = "An eye for an eye "; // created and labeled a variable and gave it a string value
       function Blind() {Starting_point += "makes the whole world go blind."}
       Blind(); // created and labeled a nested function which will call upon the previous variable & add another string to it
       return Starting_point; // returns the newvariable wit the added string
    }
}