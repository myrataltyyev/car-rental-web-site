function formValidation() {
    var fname = document.contactForm.fname.value;
    var lname = document.contactForm.lname.value;
    var email = document.contactForm.email.value;
    var message = document.contactForm.message.value;
    
    var radiobtn = document.contactForm.gender;
    var radiobtnChecked = false;
    
    for (var i = 0; i < radiobtn.length; i++) {
        if (radiobtn[i].checked)
            radiobtnChecked = true;
    }
    
    var day = document.contactForm.day;
    var month = document.contactForm.month;
    var year = document.contactForm.year;
    
    var checkbox = document.contactForm.terms.checked;
    
    // Check and alert
    var alertString = "";
    
    if (fname == "")
        alertString += "*First name must be filled\n";
    
    if (lname == "")
        alertString += "*Last name must be filled\n";
    
    if (email == "")
        alertString += "*E-mail must be filled\n";
    
    if (radiobtnChecked == false)
        alertString += "*Select your gender\n";
    
    if (day.options[day.selectedIndex].text == "day")
        alertString += "*Select day of birth\n";
    
    if (month.options[month.selectedIndex].text == "month")
        alertString += "*Select month of birth\n";
    
    if (year.options[year.selectedIndex].text == "year")
        alertString += "*Select year of birth\n";
    
    if (message == "")
        alertString += "*Please, write us a message\n";
    
    if (checkbox == false)
        alertString += "*Please, accept terms and conditions\n";

    
    if (alertString != "") {
        window.alert(alertString);
        return false;
    }
    else
        window.alert("Thank you for submission!");
}