const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-give");
const checkbutton = document.querySelector("#check-button");
const message1= document.querySelector("#error-message1")
const message2= document.querySelector("#error-message2")
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes =[2000,500,200,100,50,20,10,5,2,1]
const nextButton = document.querySelector("#Next");

document.getElementById('cash-give').style.display = 'none';
document.getElementById('check-button').style.display = 'none';
document.getElementById('cashg').style.display = 'none';
document.getElementById('change-table').style.display = 'none';
document.getElementById('img-Bill1').style.display = 'none';
document.getElementById('img-Bill2').style.display = 'none';
document.getElementById('error-message1').style.display = 'none';
document.getElementById('error-message2').style.display = 'none';

nextButton.addEventListener("click",function displayFurther()
{
    if(isNumeric(billAmount.value))
    {
        if(billAmount.value > 0)
        {
            document.getElementById('img-Bill1').style.display = 'none';
            document.getElementById('error-message1').style.display = 'none';
            document.getElementById('cashg').style.display = 'block';
            document.getElementById('cash-give').style.display = 'block';
            document.getElementById('check-button').style.display = 'block';
        }
        else{
            document.getElementById('error-message1').style.display ="block";
            message1.innerText = "😡Why are you do that?";
            document.getElementById('img-Bill1').style.display='block';
        }
     
    }
    else{
        document.getElementById('error-message1').style.display ="block";
        message1.innerText = "😡You test my code?";
        document.getElementById('img-Bill1').style.display = 'block';
    }
    
});

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


checkbutton.addEventListener("click" ,function validateBillAndCashAmount(){
        hideMessage();
        if(isNumeric(cashGiven.value))
        {
            if(cashGiven.value >= billAmount.value)
            {   
                const amountToBeReturned = cashGiven.value - billAmount.value;
                calculateChange(amountToBeReturned);
                document.getElementById('change-table').style.display = 'block';
            }
            else{
                showMessage("Do you wanna wash plates?");
            }
         
        }
        else{
            document.getElementById('change-table').style.display="none";
            document.getElementById('error-message2').style.display ="block";
            message2.innerText = "😡why you do again?";
            document.getElementById('img-Bill2').style.display = 'block';
        }
    
   
});


function hideMessage(){
    message2.style.display ="none";
    document.getElementById('img-Bill2').style.display = 'none';
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
    message2.style.display ="block";
    message2.innerText = msg;
}