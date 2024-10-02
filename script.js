// Sign Up Form - Email address validation 
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error");
const submitBtn = document.querySelector(".submit-btn"); 

submitBtn.addEventListener("click", (e)=> {
    // Prevent form from Submitting
    e.preventDefault();
    const email = emailInput.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if(emailPattern.test(email)) {
        errorMessage.textContent = "Valid email";
        errorMessage.style.color = "green";
    } 
    else {
        errorMessage.textContent = "Please enter a valid email address.";
        errorMessage.style.color = "red";
    }

})

