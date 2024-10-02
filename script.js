// Sign Up Form - Email address validation 
// Email form elements
const emailInput = document.getElementById("email");
const emailInput2 = document.getElementById("email2");
const submitBtn = document.querySelector(".submit-btn"); 
const suggestionBox = document.getElementById("suggestion-box");
const pwd = document.getElementById("pwd");
const feedback = document.getElementById("email-feedback");
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

// Confirmation & Error message
const confirmMessage = document.getElementById("confirm-message");
const errorMessage = document.getElementById("email-validation");
const charMessage = document.getElementById("char-message");

// Email character limit
const charLimit = 50;

// Real time Email address validation
emailInput.addEventListener("input", function() {
    if(emailPattern.test(emailInput.value)) {
        feedback.textContent = "Valid email";
        feedback.style.color = "green";
    }
    else {
        feedback.textContent = "Invalid email";
        feedback.style.color = "red";
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
submitBtn.addEventListener("click", (e) => {
    // Prevent form from Submitting
    e.preventDefault();
    const add1 = emailInput.value;
    const add2 = emailInput2.value;
    
    // Email matching validation
    if (add1 === add2) {
        confirmMessage.textContent= "Emails match!";
        confirmMessage.style.color = "green";
    } 
    else {
        confirmMessage.textContent = "Emails don't match!";
        confirmMessage.style.color = "red";
    }

    // Removing validation message
    setTimeout(() => {
        confirmMessage.style.display = "none";
      }, "2000");

    if(confirmMessage.style.display = "none") {
        confirmMessage.style.display = "block";
    }
});


