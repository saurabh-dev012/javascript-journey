let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");
form.addEventListener("submit", function(dets) {
    dets.preventDefault();
    document.querySelector("#email-error").textContent = "";
    document.querySelector("#password-error").textContent = "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);
    let isValid = true;
    if(!emailans){
        document.querySelector("#email-error").textContent = "Please enter a valid email address.";
        document.querySelector("#email-error").style.display = "initial";
        isValid = false;
        
    }
        if(!passwordans){
            document.querySelector("#password-error").textContent = "Password is invalid.";
            document.querySelector("#password-error").style.display = "initial";
            isValid = false;
    }
    if(isValid){
        document.querySelector("#resultMessage").textContent = "Form submitted successfully!";
    }
    
});
