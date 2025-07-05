/*----typed js-----*/ 
const typed=new Typed('.multiple-text',{
    strings : ['AI Enthusiast','C++ Programmer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

/*----Scroll Reveal js-----*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content,heading ',{origin:'top'});
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box',{origin:'bottom'});
ScrollReveal().reveal('.home-contact h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-contact p,.about-content',{origin:'right'});


// Get the button and the section
const exploreMoreBtn = document.getElementById("exploreMoreBtn");
const moreAboutMe = document.getElementById("moreAboutMe");

// Add click event listener
exploreMoreBtn.addEventListener("click", () => {
  if (moreAboutMe.style.display === "block") {
    moreAboutMe.style.display = "none";
    exploreMoreBtn.textContent = "Explore More About Me";
  } else {
    moreAboutMe.style.display = "block";
    exploreMoreBtn.textContent = "Show Less";
  }
});


(function () {
    emailjs.init("TX2wHIiC08-HgyJ9S");  // Initialize with your actual Public Key
})();

function sendEmail(event) {
    event.preventDefault();  // Prevent form submission from reloading the page

    // Getting values from the form
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        mobnum: document.getElementById("mobnum").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    // Send form data with EmailJS
    emailjs.send("service_rouc52q", "template_6dy4oqe", parms)
        .then((response) => {
            alert("Message sent successfully!");
            console.log("SUCCESS!", response.status, response.text);
        })
        .catch((error) => {
            alert("Failed to send the message. Please try again later.");
            console.error("FAILED...", error);
            // Log the error for debugging
            console.error("Error details:", error);
        });

    // Reset form
    document.getElementById("contact-form").reset();
}


