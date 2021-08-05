function get_Data() { // created and labeled a function
    if (new Date().getHours() < 12) { // created an if statement using the date method .getHours to say
                        // if the time for the user is currently before 12 PM, say "Good afternoon!"
        document.getElementById("Greetings").innerHTML = "Good afternoon!";
    }
    else { // created an if statement using the date method .getHours to say
        document.getElementById("Greetings").innerHTML = "Good morning!";
    } // if the current time for the user is before 12, say "Good morning!"
}

function Age_Function() { // created and labeled a function
    Age = document.getElementById("Age").value; // created and labeled a varible;
    // the value assigned ensures that the input in the HTML registers the specific value mark given to it for the if else statement
    if (Age >= 18) { // created an if statement that says if you are if your age is greater than or equal to
        Vote = "You are old enough to vote!"; // 18, you will get a message that says you can vote
    } 
    else { // created an else statement that says if your age is not greater than or equal to 18, 
        Vote = "You are not old enough to vote!"; // you will get a message stating you're not old enough to vote 
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
} // used document.getElementById to pull the id tag from the button tag in the HTML and serve as the return for the input
// so when someone inputs an age, depending on if they are old enough or not, a message will display