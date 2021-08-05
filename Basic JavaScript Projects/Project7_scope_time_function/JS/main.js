{
var x = 45 // created a global variable and gave it a value
function Multi_Numebers_1() { // created and labeled a function
    document.write(145 * x + "<br>"); // used document.write to return the total of the global 
            // varaible times the interger inside the parantheses; added a line break for organization
}
function Multi_Numebers_2() { // created and labeled a function
    document.write(x * 145E2 + "<br>"); // used document.write to return the total of the global 
    // varaible times the interger (which has an exponent of 2) inside the parantheses; added a line break for organization
}
Multi_Numebers_1();
Multi_Numebers_2();
}

function Multi_Numebers_3() { // created and labeled a function
    var x = 45 // created a local variable and gave it a value of 45
    document.write(145 * x + "<br>"); // used document.write to return the total of the global 
    // varaible times the interger inside the parantheses; added a line break for organization
}
function Multi_Numebers_4() { // created and labeled a function
    console.log(x * 25 + "<br>"); // used console.write to show the reason for the error
    // which was purposefully created to show that the varaible x needs to be defined; added a line break for organization
}
Multi_Numebers_3();
Multi_Numebers_4();

function Time_function() { // created and labeled the function
    var Time = new Date().getHours(); // created a varaible with the value of a date method (.getHours)
    var Reply; // created and labeled a varaible
    if (Time < 12 == Time > 0) { // created an if statement that says if the user's current time is less than 12 PM
        Reply = "It is morning time!"; // but greater than 12 PM, the displayed message would be "It is morning time!"
    }
    else if (Time >= 12 == Time < 18) { // created an else if statement that says if the user's current time is
        Reply = "It is afternoon."; // greater than or equal to 12 PM and less than or equal to 6 PM, the message displayed with indidcate it's the afternoon
    }
    else { // created an else statement that says if the user's time is anything other than the time of the other two statements
        Reply = "It is evening time."; // tell the user it is evening time
    }
    document.getElementById("Time_of_day").innerHTML = Reply; // used the HTML id from the button tag to link the value "Reply" to it and display it when clicked
}