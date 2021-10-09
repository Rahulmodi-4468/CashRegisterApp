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
document.getElementById('cashlabel').style.display = 'none';
document.getElementById('change-table').style.display = 'none';
document.getElementById('img-err1').style.display = 'none';
document.getElementById('img-err2').style.display = 'none';
document.getElementById('img-err3').style.display = 'none';
document.getElementById('error-message1').style.display = 'none';
document.getElementById('error-message2').style.display = 'none';

nextButton.addEventListener("click",function displayFurther()
{
    if(isNumeric(billAmount.value))
    {
        if(billAmount.value > 0)
        {
            document.getElementById('img-err1').style.display = 'none';
            document.getElementById('error-message1').style.display = 'none';
            document.getElementById('cashlabel').style.display = 'block';
            document.getElementById('cash-give').style.display = 'block';
            document.getElementById('check-button').style.display = 'block';
        }
        else{
            showMessage1("😡Why are you do that?");
        }
     
    }
    else{
        showMessage1("😡You test my code?");
    }
    
});

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


checkbutton.addEventListener("click" ,function validateBillAndCashAmount(){
        hideMessage();
        if(isNumeric(cashGiven.value))
        {
            if(cashGiven.value  >= billAmount.value)
            {   
                const amountToBeReturned = cashGiven.value - billAmount.value;
                calculateChange(amountToBeReturned); 
                document.getElementById('change-table').style.display = 'block';

            }
            else{
                showMessage2("Do you wanna wash plates?");
                document.getElementById('img-err3').style.display='block';
            }
         
        }
        else{
            document.getElementById('change-table').style.display="none";
            showMessage2("Happy??"); 
            document.getElementById('img-err2').style.display = 'block';
        }
    
   
});


function hideMessage(){
    message2.style.display ="none";
    document.getElementById('img-err2').style.display = 'none';
}
function calculateChange(amountToBeReturned)
{
    for(let i=0;i<availableNotes.length;i++){
        const numberOfNotes = Math.trunc(amountToBeReturned /  availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}
function showMessage1(msg){
    document.getElementById('error-message1').style.display ="block";
    message1.innerText = msg;
    document.getElementById('img-err1').style.display = 'block';
}
function showMessage2(msg){
    message2.style.display ="block";
    message2.innerText = msg;
}