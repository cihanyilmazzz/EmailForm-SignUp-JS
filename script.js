// Sign Up Form - Email address validation 
// Email form elements
const emailInput = document.getElementById("email");
const emailInput2 = document.getElementById("email2");
const submitBtn = document.querySelector(".submit-btn"); 
const suggestionBox = document.getElementById("suggestion-box");
const pwd = document.getElementById("pwd");
const pwd2 = document.getElementById("pwd2");
const pwdMessage = document.getElementById("pwd-message");
const feedback = document.getElementById("email-feedback");
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

// Confirmation & Error message
const confirmMessage = document.getElementById("confirm-message");
const errorMessage = document.getElementById("email-validation");
const charMessage = document.getElementById("char-message");

// Email character limit
const charLimit = 50;
const pwdLimit = 8;



// Real time Email address validation
emailInput.addEventListener("input", function() {
    if(emailPattern.test(emailInput.value)) {
        feedback.textContent = "This email address is valid";
        feedback.style.color = "white";
    }
    else {
        feedback.textContent = "This email address is invalid";
        feedback.style.color = "#f29201";
    }

    // Removing validation message
    setTimeout(() => {
        feedback.style.display = "none";
      }, "6000");
    if(feedback.style.display == "none") {
        feedback.style.display = "block";
    }
});

submitBtn.addEventListener("click", (e)=> {
    // Prevent form from Submitting
    e.preventDefault();
    const email = emailInput.value;
    const emailLength = emailInput.value.length;

    // Email character limit
    if (emailLength > charLimit) {
        charMessage.textContent = "Email cannot exceed 50 characters";
        charMessage.style.color = "#f29201";
        emailInput.value = emailLength.value.substring(0, charLimit);
    }

    // Removing validation message
    setTimeout(() => {
        errorMessage.style.display = "none";
        charMessage.style.display = "none";
      }, "2000");
    if(errorMessage.style.display == "none" || charMessage.style.display == "none") {
        errorMessage.style.display = "block";
        charMessage.style.display = "block";
    }
});

// Email confirmation check
emailInput2.addEventListener("input", (e) => {
    // Prevent form from Submitting
    e.preventDefault();
    const add1 = emailInput.value;
    const add2 = emailInput2.value;
    
    // Email matching validation
    if (add1 === add2) {
        confirmMessage.textContent= "Email address match";
        confirmMessage.style.color = "white";
    } 
    else {
        confirmMessage.textContent = "Email address does not match!";
        confirmMessage.style.color = "#f29201";
    }

    // Removing validation message
    setTimeout(() => {
        confirmMessage.style.display = "none";
      }, "2000");

    if(confirmMessage.style.display = "none") {
        confirmMessage.style.display = "block";
    }
});


pwd.addEventListener("input", (e)=> {
    // Prevent form from Submitting
    e.preventDefault();

    const password = pwd.value;
    const password2 = pwd2.value;

     // Email character limit
     if (password.length < 2) {
        pwdMessage.textContent = "Password cannot exceed 8 characters";
        charMessage.style.color = "#f29201";
        pwd.value = pwd.value.substring(0, charLimit);
    }
    else {
        pwdMessage.textContent = "Confirmed";
    }

})