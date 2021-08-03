function increment_math() { // Naming and defining the function
    var x = 4 * 7;          // Defining the variable and giving it an interger value
    x++;                    // icnreased the varaible with the incremement operator
    document.getElementById("Increment").innerHTML = x; // giving the the value a tag "Incremement"
                                                    // that can be pulled from here from the HTML
}

function decrement_math() { // Naming and defining the function
    var dec = 4 + 5 * 5; // Defining the variable and giving it an interger value
                        // following PEMDAS, the multiplication will be done first followed by the addition
    dec--;              //decreased the varaible using the decremement operator
    document.getElementById("Decrement").innerHTML = dec; // giving the the value a tag "Decrement"
                                            // that can be pulled from here from the HTML
}
    
function more_Operator() { // Naming and defining the function
    var simple_Math = (1 + 4) * 4 - 6 / 2; // Defining the variable and giving it an interger value; used the multiplication, addition, subtraction, and addition operator
                                        // as well as parentheses
    document.getElementById("Operator").innerHTML = simple_Math; // giving the the value a tag "Operator"
    // that can be pulled from here from the HTML
    }

function modulus_Operator() { // Naming and defining the function
    var modulus_Math = 45 % 4; // Defining the variable and giving it an interger value; used the mudulous operator
    document.getElementById("Simple_Math").innerHTML = modulus_Math; // giving the the value a tag "Simple_Math"
    // that can be pulled from here from the HTML
}