// login page 
console.log("This page is linked");
function showpass() {
    let x = document.getElementsByClassName("pass")[0];
    if (x.type === "password") {
        x.type = "text";
    }
    else {
        x.type = "password";
    }
}
function loginback() {
    window.history.back();
}

// signup page js
function signupnext() {
    let pass1 = document.getElementsByClassName("pass1")[0].value;
    let pass2 = document.getElementsByClassName("pass2")[0].value;
    let warn = document.getElementById("warning");
    if (pass1 === pass2) {
        warn.style.display = "none";
        window.location.href = "./index.html";
        alert("Now You Are Signed In!!");
    }
    else {
        warn.style.display = "inline-block";
    }
}

//subscribe js
function subscribe(){
    let value = document.getElementsByClassName("subscribeSearchbar")[0];
    value.style.display="block";
}
function unsubscribe(){
    let value = document.getElementsByClassName("subscribeSearchbar")[0];
    value.style.display="none"; 
}