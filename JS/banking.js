                        // function for withdraw and deposit
function getInputValue (inputId){
    const depositInput =document.getElementById(inputId);
    const depositAmountText =depositInput.value;
    const depositAmount = parseFloat(depositAmountText); 
    // clear input field
    depositInput.value="";
    return depositAmount;
}              
                    // function for update of deposit and withdraw
// depositAmountNumber কে parameter হিসেবেই দিতে হবে কারণ এই ফাংশনটা জানবেনা যে আগে কত deposit করা হয়েছিল
function updateTotalField(totalFieldId,depositAmountNumber){
    const TotalElement = document.getElementById(totalFieldId);
    const TotalText = TotalElement.innerText;
    const TotalNumber = parseInt(TotalText);
    TotalElement.innerText= depositAmountNumber + TotalNumber;
}
                    // function for balance update
function updateBalance(depositAmountNumber,isAdd){
    const  balanceTotal = document.getElementById("balance-total");
    const  balanceTotalText = balanceTotal.innerText;
    const balanceTotalNumber = parseInt(balanceTotalText);
     if(isAdd == true){
        balanceTotal.innerText = balanceTotalNumber + depositAmountNumber; 
     }
     else{
        balanceTotal.innerText = balanceTotalNumber - depositAmountNumber; 
     }
}
                                //deposit button function call
document.getElementById("deposit-button").addEventListener("click",function(){
    const depositAmountNumber = getInputValue("deposit-input");
    if(depositAmountNumber >0){
        updateTotalField("deposit-total",depositAmountNumber);
        updateBalance(depositAmountNumber,true)
    }

                                 
    
});

                        // Withdraw Button function call
document.getElementById("withdraw-button").addEventListener("click", function(){ 
const withdrawAmountNumber =getInputValue("withdraw-input")
                        // get withdraw total and update
                        if(withdrawAmountNumber> 0){
                            updateTotalField("withdraw-total",withdrawAmountNumber);
                        updateBalance(withdrawAmountNumber,false)
                        }
                            // update balance after withdraw
                        
});
