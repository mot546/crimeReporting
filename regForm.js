// 0: firstname
// 1: LasstName
// 2: email
// 3: pass
// 4: confirmPass

const submit = document.querySelector("#submitButton");
const userInputs = document.querySelectorAll("input"); 
let passText = document.querySelector("#pass");
const userInfo = Array.from(userInputs).map(item => item.value);
const passInput = document.querySelector("#passInput")

passText.style.transition = "color 0.5s ease, font-size 0.5s ease";

passInput.addEventListener("input",function(event){

    if(passInput.value.length < 7){
        passText.textContent = "Please provide 8 character password";
        passText.setAttribute("style", "transition: color 1s;")
        passText.setAttribute("style", "color: red; fontSize: 10px;");   
    }
    else{
        passText.textContent = "Password";
        passText.style.color = "black";
    }
});

const confirmPass = document.querySelector("#cPass");
const cPassText = document.querySelector("#cPassText");

confirmPass.addEventListener("input", function(){
    if (confirmPass.value.length < 7 || confirmPass.value !== passInput.value){
        cPassText.textContent = "Pass don't match";
        cPassText.style.color = "red";
    }
    else{
        cPassText.textContent = "Confirm Password";
        cPassText.style.color = "green";
        passText.style.color = "green";
    }
});

