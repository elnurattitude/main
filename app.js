// THEME TOGGLE
function toggleTheme(){
document.body.classList.toggle("light");
}

// FAKE AUTH SYSTEM
function register(){
const email=document.getElementById("email").value;
const pass=document.getElementById("password").value;
localStorage.setItem("user",JSON.stringify({email,pass}));
alert("Account created!");
window.location="dashboard.html";
}

function login(){
const email=document.getElementById("email").value;
const pass=document.getElementById("password").value;
const user=JSON.parse(localStorage.getItem("user"));

if(user && user.email===email && user.pass===pass){
window.location="dashboard.html";
}else{
alert("Invalid credentials");
}
}

function protect(){
if(!localStorage.getItem("user")){
window.location="index.html";
}
}

function logout(){
localStorage.removeItem("user");
window.location="index.html";
}
