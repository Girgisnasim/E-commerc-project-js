var Mname = document.getElementById("name");
var email = document.getElementById("email");
var SpanName = document.getElementById("checkName");
var SpanEmail = document.getElementById("checkEmail");
var btnSubmit = document.getElementById("btnSubmit");
var letters = /^[A-Za-z\s]+$/;
var emailFormat = /\S+@\S+\.\S+/;
SpanName.style.color = 'red';
SpanEmail.style.color = 'red';


Mname.addEventListener("input", function () {
    if (Mname.value.length<=3||!/^[a-zA-Z]+$/.test(Mname.value)) {
        SpanName.textContent="name is required ";
    } else {
        SpanName.textContent = '';
    }
});
email.addEventListener("input", function () {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value) || email.value=='') {
        SpanEmail.textContent="email is required ";
    } else {
        SpanEmail.textContent = '';
    }
});
btnSubmit.addEventListener("click", function () {
    if ((Mname.value.length<=3||!/^[a-zA-Z]+$/.test(Mname.value)) && (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value) || email.value=='')) {
        SpanName.textContent = "name is required ";
        SpanEmail.textContent="email is required ";

    } else {
        SpanName.textContent = '';
        SpanEmail.textContent = '';
        window.alert("you data are submit successfully")
    }
})





