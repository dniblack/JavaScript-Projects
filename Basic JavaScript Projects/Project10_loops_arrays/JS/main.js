// This is just an example
function counting_to_Twenty_Five() { // created and labeled a function
    var num = ""; // created and labeled a varaible
    var x = 1;
    while (x < 26) {
        num += "<br>" + x;
        x++;
    }
    document.getElementById("Count_to_Twenty_Five").innerHTML = num
}

//
function Call_Loop() { // created and labeled a function
    var age = ""; // created & labeled a varaible and gave the variable a value
    var x = 20; // created & labeled a varaible and gave it a value;
    while (x < 31) { // created a while loop that states while x is less than 31
        age += "<br>" + x; // a number will be written one after another below each other
        x++; // in increments of 1 until the number reaches 30. Then it will stop
    }
    document.getElementById('Loop').innerHTML = age 
}

//
function str_lng_function() {
    var issues = 'Living the dream life.';
    console.log(issues.length)
}

// This is just an example
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}


    var Nintendo = ["Gameboy Color", "Gameboy SP", "Gameboy Advance", // created and labeled a variable; gave a value of a loop 
    "Gamecube", "Wii", "Wii U", "Switch"]
    var Consoles = ""; // created and labeled a variable; assigned a value to the variable
    var n; // created and labeled a variable
    function nin_Loop() { // created and labeled a function
        for (n = 0; n < Nintendo.length; n++) { // created a for loop that starts from the first
            Content += Nintendo[n] + "<br>" // object in the array and follows a set of commands
        }                               // to ensure that each of them are written out and printed in order as they are in the array
        document.getElementById("List_of_Consoles").innerHTML = Consoles
    }

// This is an example
function cat_pictures() {
    var Cat_Pic = [];
    Cat_Pic[0] = "sleeping";
    Cat_Pic[1] = "playing";
    Cat_Pic[2] = "eating";
    Cat_Pic[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + 
    Cat_Pic[2] + ".";
}

//
function JL_array_Function() { // created and labeld a function
    var League_Member = [] // created and labeled a varaible
    League_Member[0] = "Superman"; // created values and assigned an index of 0-6
    League_Member[1] = "Batman"; // for 7 individual strings
    League_Member[2] = "Wonder Woman";
    League_Member[3] = "The Flash";
    League_Member[4] = "Aquaman";
    League_Member[5] = "Green Lantern";
    League_Member[6] = "Martian Manhunter";
    document.getElementById("JL_Array").innerHTML = League_Member[0] + ", " + League_Member[1] + ", and " + League_Member[2] + 
    " are all members of the Justice League." // Used document.getElementByID to link the string
    // in the script to the button and print out the value once the button has been clicked
}

// This is an exmaple
function constant_function_example() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "red";
    Musical_Instrument.price = "$4500"
    document.getElementById("Constant_example").innerHTML = "The cost of the " + Musical_Instrument.type +
     " was " + Musical_Instrument.price;
}

//
function constant_function() { 
    const Mechanical_Keyboard = {type: "65% WKL", name:"Odyssey65", color: "silver/black"}
    Mechanical_Keyboard.type = "80% WK";
    Mechanical_Keyboard.name = "Odysseus80";
    document.getElementById("Constant").innerHTML = "The name of this board is the " + Mechanical_Keyboard.name + 
    " and it will be a " + Mechanical_Keyboard.type + " board.";
}

//
var x = "Nintendo Switch";
document.write(x);
{
    let x = "PS5"
    document.write("<br>" +x)
}
document.write("<br>" + x)

//
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

//
let keyboard = { // created a let variable and labeled it
    make: "mechanical ", // created a 4 individual properties and gave each of them a string value
    percentage: "65 percent ",
    model_name: "Aozora ",
    color: "sakura ",
    description : function() { // created and labeld a function while putting the method inside the description function
        return "This year I will be purchasing and building the " + this.color + this.percentage 
        + this.model_name + "mechcanical keyboard from Salmon Cat Studios."
    } // the description function uses the keyword "this" to grab properties from the object and utilize them
    //  in the returned string
};
document.getElementById("Keyboard_Obj").innerHTML = keyboard.description() // prints out the returned string once
// the button in the HTML with the corresponding id tag is pressed

//
for (let i = 0; i < 10; i++) {
    if (i === 3) {break;}
    text += "The number is " + i + "<br>";
}

//
for (let i = 0; i < 10; i++) {
    if (i === 3) {continue;}
    text += "The number is " + i + "<br>";
}

//
for (let x = 15; x < 60; x += 15) {
    if (x === 45) {break}
    text =+ "The number is " + i + "<br>";
}