//adding deposit amount 
const btnDeposit = document.getElementById("btn-deposit").addEventListener('click', function()
{
    //deposit btn amount store
    const getDeposit = document.getElementById('deposit-field');
    const depositAmountString = getDeposit.value;
    const depositAmount = parseFloat(depositAmountString);

   //reset the deposit input value
   getDeposit.value = "";

    if(isNaN(depositAmount))
    {
      alert("MOne hoi prothom bar aisos Taka likh ar kisu likhis na")
      return;
    }

    //deposit box amount store
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositString = depositTotal.innerText;
    const previousDeposit = parseFloat(previousDepositString);

    //adding deposit amount to the deposit box
    depositTotal.innerText = depositAmount + previousDeposit;

    //balance box amount store
     const balanceTotal = document.getElementById('balance-total');
     const balanceAmountString = balanceTotal.innerText;
     const balanceAmount = parseFloat(balanceAmountString);

    //adding deposit amount to the balance box
     const updatedBalance = balanceAmount + depositAmount;
     balanceTotal.innerText = updatedBalance;
});
 

//adding withdraw amount
 const btnWithdraw = document.getElementById('btn-withdraw').addEventListener('click',function()
 {
    //withdraw btn amount store
    const getWithdraw = document.getElementById('withdraw-field');
    const withdrawAmountString = getWithdraw.value;
    const withdrawAmount = parseFloat(withdrawAmountString);

    //reset the withdraw input value
    getWithdraw.value = "";
    
    if(isNaN(withdrawAmount))
    {
      alert("MOne hoi prothom bar aisos Taka likh ar kisu likhis na")
      return;
    }

    //withdraw box amount store
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawString = withdrawTotal.innerText;
    const previousWithdraw = parseFloat(previousWithdrawString);

   //balance box amount store
   const balanceTotal = document.getElementById('balance-total');
   const balanceAmountString = balanceTotal.innerText;
   const balanceAmount = parseFloat(balanceAmountString);

    if(withdrawAmount>balanceAmount)
    {
      alert("tor ato taka nai ar toi fakinnir moto taka tolte aisos JA BHagg");
      return;  
    }

    //adding withdraw amount to the deposit box
    withdrawTotal.innerText = withdrawAmount + previousWithdraw;

   //adding deposit amount to the balance box
    const updatedBalance = balanceAmount - withdrawAmount;
    balanceTotal.innerText = updatedBalance;
 })