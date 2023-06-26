let signUpBox = document.getElementsByClassName("sign-up-container");
let successMsg = document.getElementsByClassName("success-container");
let inputEmail = document.getElementById('inputemail');
let setError = document.getElementById('seterror');

function validateform(event) {
  event.preventDefault()
  let userEmail = document.forms["sign-up-form"]["UserEmail"].value;

  // Regular expression pattern for email validation
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(userEmail)) {
    signUpBox[0].style.display = "none";
    successMsg[0].style.display = "block";
    let heading = document.getElementsByTagName('h1');
    heading[0].style.display = 'none'


    return true;
  }else if(userEmail.length == ""){
    setError.innerHTML = "Email cannot be blank"
    inputEmail.style.backgroundColor =  'hsl(4, 100%, 67%,0.3)'
    inputEmail.style.borderColor = 'hsl(4, 100%, 67%)';

    return false
  }
   else {
   

    setError.innerHTML = 'Valid Email Required'

    inputEmail.style.backgroundColor =  'hsl(4, 100%, 67%,0.3)'
    inputEmail.style.borderColor = 'hsl(4, 100%, 67%)'
    
    console.log("invalid email");
    return false;
  }
}

let dismissAlert = document.getElementsByClassName("dismiss-success-popup");

dismissAlert[0].addEventListener("click", () => {
  successMsg[0].style.display = "none";
});
