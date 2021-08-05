window.alert("Welcome to Midgar!")

var Main_character = "Cloud", Love_Interest = "Tifa", Right_Hand_Man = "Barret", Mystery_Man = "Vincent"
var Main_character =  Main_character.fontcolor("gold"), Love_Interest = Love_Interest.fontcolor("black"), Right_Hand_Man = Right_Hand_Man.fontcolor("brown"), Mystery_Man = Mystery_Man.fontcolor("red")
document.write(Main_character + " and " + Love_Interest + " go on an adventure with " + Right_Hand_Man + " as well as " + Mystery_Man + " across the many stages of FFVII.")

function My_First_Function () {             //Defining a function and naming it
    var str = "This text is green!"         //Defining avariable and giving it a
                                            //string value
    var result = str.fontcolor("green")     //Using the fontcolor method on strvariable
    document.getElementById("Green_Text").innerHTML = result; //Putting the value of result
                                            // into HTML element wwith "Green_Text" id
}