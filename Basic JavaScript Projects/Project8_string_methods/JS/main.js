function concatenate_Method() { // named and labeled a function; this name will be used so the button in the linked HTML will pull this function and use it to generate the concatenate sentence
    var part_1 = "It began with the forging of the Great Rings.<br>" // named and labeled 6 variables; gave string values to the 6variables. Each of the values are all broken apart at random points from one  paragraph
    var part_2 = "Three were given to the Elves, immortal, wisest and fairest of all beings. Seven to the Dwarf-Lords, great miners "
    var part_3 = "and craftsmen of the mountain halls.<br> And nine, nine rings were gifted to the race of Men, who "
    var part_4 = " above all else desire power.<br> For within these rings was bound the strength and the will to govern each race. But they were all of them deceived, "
    var part_5 = " for another ring was made.<br> Deep in the land of Mordor, in the Fires of Mount Doom, the Dark Lord Sauron forged "
    var part_6 = "a master ring, and into this ring he poured his cruelty, his malice and his will to dominate all life."
    var whole_sentence = part_1.concat(part_2, part_3, part_4, part_5, part_6); // created avariable and labeled it; gave it a concatenate value, connecting each previous variable and the strings attached to them into one value
    document.getElementById('Concatenate').innerHTML = whole_sentence // used docuement.getElementById to access the id point within the paragraph tag for Concatenate from the linked HTML so that
                                                // once the button that the function is linked to is clicked, the value of "whole_sentence" will be generated and presented to the user clicking the button
}

function smaller_concatenate_Method() { // this function follows the previous concatenate function, it's just a lot shorter and only contians the pieces of one sentence rather than a paragraph.
    var part_1 = "One by one, "
    var part_2 = "the free lands of Middle-Earth fell "
    var part_3 = "to the power of the Ring, "
    var part_4 = "but there were some who resisted."
    var whole_sentence = part_1.concat(part_2, part_3, part_4)
    document.getElementById('Concatenate_2').innerHTML = whole_sentence
}

function slice_Method() { // created and defined a function
    var Sentence = "All work and noplay makes Johnny a dull boy."; // created and labeled a variable; thevariable being labeled as a sentence has a string value of a full sentence. This will be sliced.
    var Section = Sentence.slice(0, 19); // created and labeled a variable; used the .slice method to cut out the string from the first "character" to the 19th or from "All" to "noplay"
    document.getElementById("Slice").innerHTML = Section; // used docuement.getElementById to access the id point within the paragraph tag  from the linked HTML so that
    // once the button that the function is linked to is clicked, the value of "Section" (which will only be the sliced section of "Sentence") will be generated and presented to the user clicking the button
}

function uppercase_Method() { // created and labeled a funtion
    let str = "I am currently working on a bamboo 60% build."; // used let and declared a string value to "str"
    var upperCased = str.toUpperCase(); // created and labeled a variable 
    document.getElementById("Upper").innerHTML = upperCased; // used docuement.getElementById to access the id point within the paragraph tag  from the linked HTML so that
    // once the button that the function is linked to is clicked, the value of "upperCased" (which is the upper cased version of the original string) will be generated and presented to the user clicking the button
}

function search_Method() { // created and labeled a function
    let str = "I am currently waiting for the Space80 keyboard."; // used let and declared a string value to "str"
    str.search("Space"); // used the string search method to search for the value of the word "Space" which is 31
    document.getElementById("Search").innerHTML = str.search("Space"); // used docuement.getElementById to access the id point within the paragraph tag from the linked HTML so that
    // once the button that the function is linked to is clicked, the value of "str.search("Space")" (which should be 31) will be generated and presented to the user clicking the button
}

function string_Method() { // created and labeled a function
    var num = 45; // created avariable, labeled it, and gave it an interger value of 45
    var x = num.toString(); // created and labeled avariable then used the .toString to change the value of the variable "num" to a string which became the value of "x"
    document.getElementById("Numbers_to_string").innerHTML = x.toString(); // used docuement.getElementById to access the id point within the paragraph tag from the linked HTML so that
    // once the button that the function is linked to is clicked, the value of "x.toString()" (which should be 45 as a string rather than an interger") will be generated and presented to the user clicking the button
}

function precision_Method() { // created and labeled a function
    var x = 3235.8293742893; // created and labeled a variable; gave the variable an interger value
    document.getElementById("Precision").innerHTML = x.toPrecision(5); // used docuement.getElementById to access the id point within the paragraph tag from the linked HTML so that
    // once the button that the function is linked to is clicked, the value of "x.toPrecision(5)" (which should return an interger with the 5th placement rounded since it's a decimal) will be generated and presented to the user clicking the button
}

function rounding_Method() { // created and labeled a function
    var num = 3401.45287; // created and labeled a variable; gave the variable an interger value
    var x = num.toFixed(3) // created and labeled a variable; used the .toFixed method to round thr 3rd decimal placememnt bringing the 2 to a 3
    document.getElementById("Fixed").innerHTML = x; // used docuement.getElementById to access the id point within the paragraph tag from the linked HTML so that
    // once the button that the function is linked to is clicked, the value of "x" (which will be 3401.453) will be generated and presented to the user clicking the button
}

function valueof_Method() { // created and labeled a function
    const JL = ["Supermam", " Batman", " Wonder Woman", " Cyborg", " Flash", " Aquaman", " Martian Manhunter", " Green Lantern"] // creted and labeled a constant varaible ana gave it an array value
    JL.valueOf();
    var Justice = JL.valueOf(); // created and labeled a varaible; gave the variable a value of the constant
    document.getElementById("Value").innerHTML = Justice; // used docuement.getElementById to access the id point within the paragraph tag from the linked HTML so that
    // once the button that the function is linked to is clicked, the value of "Justice" (which will be the entirety of the original array) will be generated and presented to the user clicking the button
}