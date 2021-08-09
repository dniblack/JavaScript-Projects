function FF_Function() {
    var FF_Ouput;
    var Final_Fantasy = document.getElementById("FF_Input").value;
    var FF_String = " is an great game in the series!";
    switch (Final_Fantasy) {
        case "Final Fantasy I":
            FF_Ouput = "Final Fantasy I" + FF_String;
        break;
        case "Final Fantasy II":
            FF_Ouput = "Final Fantasy I" + FF_String;
        break;
        case "Final Fantasy III":
            FF_Ouput = "Final Fantasy II" + FF_String;
        break;
        case "Final Fantasy IV":
            FF_Ouput = "Final Fantasy III" + FF_String;
        break;
        case "Final Fantasy V":
            FF_Ouput = "Final Fantasy V" + FF_String;
        break;
        case "Final Fantasy VI":
            FF_Ouput = "Final Fantasy VI" + FF_String;
        break;
        case "Final Fantasy VII":
            FF_Ouput = "Final Fantasy VII" + FF_String;
        break;
        case "Final Fantasy VIII":
            FF_Ouput = "Final Fantasy VIII" + FF_String;
        break;
        case "Final Fantasy IX":
            FF_Ouput = "Final Fantasy IX" + FF_String;
        break;
        case "Final Fantasy X":
            FF_Ouput = "Final Fantasy X" + FF_String;
        break;
        case "Final Fantasy XI":
            FF_Ouput = "Final Fantasy XI" + FF_String;
        break;
        case "Final Fantasy XII":
            FF_Ouput = "Final Fantasy XII" + FF_String;
        break;
        case "Final Fantasy XIII":
            FF_Ouput = "Final Fantasy XIII" + FF_String;
        break;
        case "Final Fantasy XIV":
            FF_Ouput = "Final Fantasy XIV" + FF_String;
        break;
        case "Final Fantasy XV":
            FF_Ouput = "Final Fantasy XV" + FF_String;
        break;
        default:
        FF_Ouput = "Enter the name exactly as it is written in the list above, please! Thank you."
    }
    document.getElementById("Output").innerHTML = FF_Ouput;
}

function ID_CLASS_FUNCTION() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!"
}

var c = document.getElementById("grad_canv");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 250, 0);
grd.addColorStop(0, "gold")
grd.addColorStop(1, "azure")
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 500, 500)


