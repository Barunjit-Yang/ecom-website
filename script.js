const header=document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});

const productButton = document.querySelectorAll(".productButton");
const numProductButton =productButton.length;
const payment = document.querySelector(".paymentLayout");
const closeButton = document.querySelector(".closeButton");

for(i=0;i<numProductButton;i++){
productButton[i].addEventListener("click",()=>{
    payment.style.display="flex";
})
}

closeButton.addEventListener("click",()=>{
    payment.style.display="none";
})


let validateEmail = document.getElementById("validateEmail")

function formValidation(){
    if(!validateEmail.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        return errorEmail();
    }
    else{
        window.alert("You have placed your order")
        document.getElementById("validateEmail").style.color = "green"
        return true;
    }
}
function errorEmail(){
    document.getElementById("validateEmail").style.color = "red"
    return false;
}

let validateNumber = document.getElementById("validateNumber")
function functionNumber(){
    if(!validateNumber.value.match(/^[6-9]{1}\d{2}\d{3}\d{4}$/)){
        document.getElementById("validateNumber").style.color = "red"
        return false;
    }
    else{
        document.getElementById("validateNumber").style.color = "green"
        return true;
    }
}
