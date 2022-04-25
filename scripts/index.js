// Store the wallet amount to your local storage with key "amount"
let local=JSON.parse(localStorage.getItem("amount"))||0;
document.getElementById("wallet").innerText=local;
let sum;
function addToWallet(){
  let amt=document.getElementById("amount").value;
  sum=parseInt(local)+Number(amt);
  localStorage.setItem("amount",JSON.stringify(sum));
  window.location.reload();
}
