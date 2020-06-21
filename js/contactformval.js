//validates the contact form 
function validation() {

    //grab form element inputs and store them in variables
    var contactname = document.getElementById("contactname").value;
    var contactemail = document.getElementById("contactemail").value;
    var contactmessage = document.getElementById("contactmessage").value;

    var errormessagecon = document.getElementById("errormessage");

    var errormessage;


    //if all form fields are empty display....
    if (contactname == '' || contactemail == '' || contactmessage == '') {

        errormessage = "All fields need to be filled out.";
        errormessagecon.innerHTML = errormessage;
        return false; 
    
    }
    
    //if the contact name field has less then 3 characters validate and display....
    if (contactname.length <3) {

        errormessage = "Your full name needs be atleast 3 characters. ";
        errormessagecon.innerHTML = errormessage;
        return false

    }   
    
    //if the contact is numbers validate and display....
    if (!isNaN(contactname)) {

        errormessage = "Your full name should only have letters.";
        errormessagecon.innerHTML = errormessage;
        return false

    }

    //if contact email isnt valid validate and display....
    if (contactemail.indexOf("@") == -1 || contactemail.length < 6) {

        errormessage = "Please enter a valid email.";
        errormessagecon.innerHTML = errormessage;
        return false

    }

    //if the contact message length is more than 200 characters validate and display....
    if (contactmessage.length >200) {

        errormessage = "Your message can only be a max of 200 characters. Please shorten it. ";
        errormessagecon.innerHTML = errormessage;
        return false

    }

    
    else {

        return true;

    }

    

}

