function sendMail(contactForm) {    emailjs.send("gmail_gb", "ben", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value
    })
    
    return false;  // To block from loading a new page
}

//This code below will close the modal after submit has been pressed, and all fields have been filled in correctly.
$('#contactModal').submit(function(e) {
    e.preventDefault();
    $('#contactModal').modal('hide'); 
});