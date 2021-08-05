function get_Data() {
    if (new Date().getHours() > 12) {
        document.getElementById("Greetings").innerHTML = "Good afternoon!";
    }
    else {
        document.getElementById("Greetings").innerHTML = "Good morning!";
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}