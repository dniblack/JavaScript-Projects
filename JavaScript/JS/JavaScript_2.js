function formValidation() {
    if(document.Basic_Form.First_Name.value == "") {
        alert( "Please provide your first name!");
        document.Basic_Form.First_Name.focus();
        return false
    }
    if(document.Basic_Form.Last_Name.value == "") {
        alert( "Please provide your last name!");
        document.Basic_Form.Last_Name.focus();
        return false
    }
    if(document.Basic_Form.Email.value == "") {
        alert( "Please provide your email!");
        document.Basic_Form.Email.focus();
        return false
    }
}