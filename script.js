const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});



const form = document.getElementById("reservationForm");
const message = document.getElementById("message");


form.addEventListener("submit",(e)=>{

e.preventDefault();


const name = document.getElementById("name").value;


if(name === ""){

message.textContent="Please enter your name.";

}else{

message.textContent=
`Thank you ${name}! Your reservation request has been received.`;

form.reset();

}

});



// smooth scrolling

document.querySelectorAll("a").forEach(link=>{

link.addEventListener("click",function(e){

if(this.hash){

e.preventDefault();

document.querySelector(this.hash)
.scrollIntoView({
behavior:"smooth"
});

}

});

});