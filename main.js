window.addEventListener('scroll',reveal);

function reveal(){
      var reveals=document.querySelectorAll('.reveal');
      for(var i=0;i<reveals.length;i++){
        var windowheight =window.innerHeight;
        var revealtop =reveals[i].getBoundingClientRect().top;
        var revealpoint =150;
        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
           reveals[i].classList.remove('active');
        }
    }
}   

function validateForm() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const agree = document.getElementById("agree").checked;
    const nameError = document.getElementById("name-error");
  
    const addressError = document.getElementById("address-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const agreeError = document.getElementById("agree-error");
  
    nameError.textContent = "";
    addressError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    agreeError.textContent = "";
  
    let isValid = true;
  
    if (name === "" || /\d/.test(name)) {
      nameError.textContent = "Please enter your name properly.";
      isValid = false;
    }
  
    if (address === "") {
      addressError.textContent = "Please enter your address.";
      isValid = false;
    }
  
    if (email === "" || !email.includes("@")) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }
  
    if (password === "" || password.length < 6) {
      passwordError.textContent =
        "Please enter a password with at least 6 characters.";
      isValid = false;
    }
    return isValid;
  }
  
  if (!agree) {
    agreeError.textContent = "Please agree to the above information.";
    isValid = false;
  }

