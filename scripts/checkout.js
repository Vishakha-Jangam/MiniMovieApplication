// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let local=JSON.parse(localStorage.getItem("amount"))||0;
document.getElementById("wallet").innerText=local;

let m=JSON.parse(localStorage.getItem("movie"));

let div=document.createElement("div");
div.setAttribute("id","box");
let poster=document.createElement("img");
poster.src=m.Poster;

let h1=document.createElement("h1");
h1.innerText=m.Title;

div.append(h1,poster);
document.getElementById("movie").append(div);

function booking(){
let seats=document.getElementById("number_of_seats").value;

let check=seats*100;
console.log(check);

if(check>local){
  alert("Insufficient Balance!")
}else{
  local=local-check;
  localStorage.setItem("amount",JSON.stringify(local));
  window.location.reload();
  alert("Booking successful!");
}
}

