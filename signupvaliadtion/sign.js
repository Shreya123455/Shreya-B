function fnValidateSignup() {
    
    document.querySelectorAll('.error').forEach(error => error.remove());

    
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    let isValid = true;

    
    if (username.length < 5) {
        showError("username", "Username should be at least 5 characters long.");
        isValid = false;
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError("email", "Please enter a valid email address.");
        isValid = false;
    }

    
    if (password.length < 8) {
        showError("password", "Password must be at least 8 characters long.");
        isValid = false;
    } else if (password !== confirmPassword) {
        showError("confirm-password", "Passwords do not match.");
        isValid = false;
    }

    
    if (isValid) {
        displaySuccessMessage("Account created successfully!");
    }
}


function showError(inputId, message) {
    const inputField = document.getElementById(inputId);
    const errorDiv = document.createElement("div");
    errorDiv.className = "error";
    errorDiv.style.color = "red";
    errorDiv.style.fontSize = "12px";
    errorDiv.textContent = message;
    inputField.parentNode.appendChild(errorDiv);
}



function displaySuccessMessage(message) {
    const signupCard = document.querySelector(".signup-card");
    const successDiv = document.createElement("div");
    successDiv.className = "success";
    successDiv.style.color = "green";
    successDiv.style.fontSize = "14px";
    successDiv.style.marginTop = "10px";
    successDiv.textContent = message;
    signupCard.appendChild(successDiv);
}
