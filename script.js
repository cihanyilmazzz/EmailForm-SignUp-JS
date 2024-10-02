// Sign Up Form - Email address validation 
const emailInput = document.getElementById("email");
const emailInput2 = document.getElementById("email2");
const confirmMessage = document.getElementById("confirm-message");
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

});

submitBtn.addEventListener("click", (e) => {
    // Prevent form from Submitting
    e.preventDefault();
    const add1 = emailInput.value;
    const add2 = emailInput2.value;
    
    if(add1 === add2) {
        confirmMessage.textContent= "Emails match!";
        confirmMessage.style.color = "green";
    } 
    else {
        confirmMessage.textContent = "Emails don't match!";
        confirmMessage.style.color = "red";
    }
})

