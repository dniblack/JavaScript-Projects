function displayType(character) {
    var characterType = character.getAttribute("data-console-type");
    alert(characterType + " is a gaming console created by " + character.innerHTML + ".")
}