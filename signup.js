function fnValidate() 
{
 
    let input_uname = document.getElementById("username").value;
    let input_email = document.getElementById("email").value;
    let input_pass = document.getElementById("password").value;
    let input_confir = document.getElementById("confirm-password").value;

    if (input_uname.length < 5) {
        alert("Invalid username. Username should be at least 5 characters long.");
        return false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(input_email)) {
        alert("Invalid email format.");
        return false;
    }
    if (input_pass !== input_confir) {
        alert("Passwords do not match.");
        return false;
    }
    

    alert("Signup successful!");
    return true;
}