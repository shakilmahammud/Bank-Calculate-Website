//login button event handler
const loginBtn=document.getElementById("login");
loginBtn.addEventListener("click",function(){
    const submit=document.getElementById("submit-area");
    submit.style.display="none";
    const transition=document.getElementById("transition-area");
    transition.style.display="block";
});
//deposit button event handler
const depositBtn=document.getElementById("addDeposit");
depositBtn.addEventListener("click",function(){
const depositNumber=getInputNumber("depositAmount");
updateSpanText("currentDeposit",depositNumber);
updateSpanText("currentBalance",depositNumber);
document.getElementById("depositAmount").value=""
});
//deposit calculate funcrion
function updateSpanText(id,depositNumber){
    const current=document.getElementById(id).innerText;
    const currentNumber=parseFloat(current);
    const totalAmount=depositNumber+currentNumber;
    document.getElementById(id).innerText=totalAmount;
}
//widthraw button event handeler
const widthrawBtn=document.getElementById("addwidthraw");
widthrawBtn.addEventListener("click",function(){
const widthrawNumeber=getInputNumber("widthrawAmount");
updateSpanText("currentWidthraw",widthrawNumeber);
updateSpanText("currentBalance",-1*widthrawNumeber);
document.getElementById("widthrawAmount").value=""

});
//widthraw calculate funcrion
function getInputNumber(id){
    const amount=document.getElementById(id).value;
    const amountNumber=parseFloat(amount);
    return amountNumber;

}