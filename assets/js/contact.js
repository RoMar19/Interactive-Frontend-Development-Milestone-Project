function sendMail(contactForm) {
    emailjs.send("gmail", "inmadrid_contact_form", 
    {"from_name": contactForm.name.value,
    "from_email": contactForm.emailaddress.value,
    "rentout_apartment": contactForm.summary.value,
    "typeof_house": contactForm.type.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false; // To block from loading a new page
