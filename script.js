// Sign Up Form - Email address validation 
// Email input
const emailInput = document.getElementById("email");
const emailInput2 = document.getElementById("email2");
// Confirmation and Error message
const confirmMessage = document.getElementById("confirm-message");
const errorMessage = document.getElementById("email-validation");
const charMessage = document.getElementById("char-message");
const charLimit = 50;

const submitBtn = document.querySelector(".submit-btn"); 


submitBtn.addEventListener("click", (e)=> {
    // Prevent form from Submitting
    e.preventDefault();
    const email = emailInput.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const emailLength = emailInput.value.length;

    // Email validation
    if (emailPattern.test(email)) {
        errorMessage.textContent = "Valid email";
        errorMessage.style.color = "green";
    } 
    else {
        errorMessage.textContent = "Please enter a valid email address.";
        errorMessage.style.color = "red";
    }

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
})

