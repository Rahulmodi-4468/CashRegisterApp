const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-give");
const checkbutton = document.querySelector("#check-button");
const message= document.querySelector("#error-message")
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes =[2000,500,200,100,50,20,10,5,2,1]
const nextButton = document.querySelector("#Next");

document.getElementById('cash-give').style.visibility = 'hidden';
document.getElementById('check-button').style.visibility = 'hidden';
document.getElementById('cashg').style.visibility = 'hidden';
document.getElementById('change-table').style.visibility = 'hidden';


nextButton.addEventListener("click",function displayFurther(){
    if(isNumeric(billAmount.value)){
        document.getElementById('cashg').style.visibility = 'visible';
        document.getElementById('cash-give').style.visibility = 'visible';
        document.getElementById('check-button').style.visibility = 'visible';
    }
    else{
        showMessage("Don't fun ..plzz enter numeric value");
    }
    
    
});

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


checkbutton.addEventListener("click" ,function validateBillAndCashAmount(){
    hideMessage();
   
        if(billAmount.value > 0)
        {
            if(cashGiven.value >= billAmount.value)
            {   
                const amountToBeReturned = cashGiven.value - billAmount.value;
                calculateChange(amountToBeReturned);
                document.getElementById('change-table').style.visibility = 'visible';
            }
            else{
                showMessage("Do you wanna wash plates?");
            }
        }
      
   
});



function hideMessage(){
    message.style.display ="none";
}
function calculateChange(amountToBeReturned)
{
    for(let i=0;i<availableNotes.length;i++){
        const numberOfNotes = Math.trunc(amountToBeReturned /  availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}
function showMessage(msg){
    message.style.display ="block";
    message.innerText = msg;
}