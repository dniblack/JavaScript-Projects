function My_Function_Assault() {                //Defining a function and naming it as this will be used in the 
                                                // HTML alongside the "getElementById" to retrieve the string//
var str = "Welcome to the Apex Legends games." //Created the value for the string. This will be duplicated.//
var result = str.fontcolor("red")              //Using fontcolor to change the color of the string. This will be duplicated and used for two other colors (green and orange)
document.getElementById("Apex_Legends").innerHTML = result; //Putting the value of result into HTML element with "Apex_Legends" id so that it can be called in the HTML
}

function My_Function_Support() {
    var str = "Welcome to the Apex Legends games."
    var result = str.fontcolor("green")
    document.getElementById("Apex_Legends").innerHTML = result;
}

function My_Function_Defense() {
    var str = "Welcome to the Apex Legends games."
    var result = str.fontcolor("orange")
    document.getElementById("Apex_Legends").innerHTML = result;
    }

function My_Function() {                    //Defined a function and named it "My_Function" //
    var sentence = "I am learning";         //Gave a sentence value to the varaible //
    sentence += " a lot from this book!";   //Added a concatenate that will be added to the previous line and sentence //
    document.getElementById("Concatenate").innerHTML = sentence; //Putting the value of result into HTML element with "Concatenate" id //
}