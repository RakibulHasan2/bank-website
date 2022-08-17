   //get input result function
   function getInputById(inputID)
   {
     const getInputValue = document.getElementById(inputID);
     const getInputValueString = getInputValue.value;
     getInputValue.value = "";  
     const getInput = parseFloat(getInputValueString);
     return getInput;
   }
   //get output result function
   function getOutputById(outputID)
   {
     const getOutputValue = document.getElementById(outputID);
     const getOutputValueString = getOutputValue.innerText; 
     const getOutput = parseFloat(getOutputValueString);
     return getOutput;
   }
// set new text to the output field
   function setTextValue(elementID, newValue){
     const textElement = document.getElementById(elementID);
     textElement.innerText = newValue;
   }
//if any input field wrong input
function alertMessege(amount)
{
  if(isNaN(amount))
  {
    alert("MOne hoi prothom bar aisos Taka likh ar kisu likhis na")
    return;
  }
}
//adding deposit amount 
const btnDeposit = document.getElementById("btn-deposit").addEventListener('click', function()
{

   //deposit input amount
    const depositAmount = getInputById('deposit-field');  

    //wrong input alert message
    alertMessege(depositAmount);

    //deposit box amount store
    const previousDeposit = getOutputById('deposit-total');
    
    //adding deposit amount to the deposit box
    const depositTotal = depositAmount + previousDeposit;

    //set new value to the deposit text
    setTextValue('deposit-total', depositTotal);

    //balance box amount store
    const balanceAmount = getOutputById('balance-total');
    
    //adding deposit amount to the balance box
     const updatedBalance = balanceAmount + depositAmount;

     //set new value to the balance box
     setTextValue('balance-total', updatedBalance);
});

//adding withdraw amount
const btnWithdraw = document.getElementById('btn-withdraw').addEventListener('click',function()
{
   //withdraw btn amount store
   const withdrawAmount = getInputById('withdraw-field');

    //wrong input alert message
    alertMessege(withdrawAmount);

   //withdraw box amount store
   const previousWithdraw = getOutputById('withdraw-total');

   //balance box amount store
  const balanceAmount = getOutputById('balance-total'); 

   if(withdrawAmount>balanceAmount)
   {
     alert("tor ato taka nai ar toi fakinnir moto taka tolte aisos JA BHagg");
     return;  
   }
  
   //adding withdraw amount to the deposit box
    const withdrawTotal = withdrawAmount + previousWithdraw;

    //set new value to the Withdraw box
    setTextValue('withdraw-total', withdrawTotal);

   //adding deposit amount to the balance box
   const updatedBalance = balanceAmount - withdrawAmount;

   //set new value to the balance box
   setTextValue('balance-total', updatedBalance);
})