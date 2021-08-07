let person = prompt("Please state your name.", "Lucious Fox");
let text;
if(person == null || person == "") {
    text = "Intruder. This device will self destruct in 10 seconds. Goodbye."
} else {
    text = "Hello, " + person + ". Welcome back to the Banner Estate."
}