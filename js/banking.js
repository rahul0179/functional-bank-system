function getInputValue(inputId) {
    const depositInput = document.getElementById(inputId);
    const depositAmounText = depositInput.value;
    const depositAmount = parseFloat(depositAmounText);
    // clear input 
    depositInput.value = '';
    return depositAmount;
}
function amountUpgrade(id, depositAmount) {
    const depositTotal = document.getElementById(id);
    const depositTotalText = depositTotal.innerText;
    const deposit = parseFloat(depositTotalText);
    const previousAmount = deposit;
    const newDeposit = previousAmount + depositAmount;
    depositTotal.innerText = newDeposit;
    return depositTotal

}

function blanceCheck(id, depositAmount) {
    const blance = document.getElementById(id);
    const blanceText = blance.innerText;
    const blanceTotal = parseFloat(blanceText);
    const previousBlance = blanceTotal;
    const newblance = previousBlance + depositAmount;
    blance.innerText = newblance;




}
function withdrawblanceCheck(id, depositAmount) {
    const blance = document.getElementById(id);
    const blanceText = blance.innerText;
    const blanceTotal = parseFloat(blanceText);
    const previousBlance = blanceTotal;
    const newblance = previousBlance - depositAmount;
    blance.innerText = newblance;




}





// deposit 

document.getElementById('deposit-submit').addEventListener('click',
    function () {
        // set deposit Amount
        // const depositInput = document.getElementById('deposit-id');
        // const depositAmounText = depositInput.value;
        // const depositAmount = parseFloat(depositAmounText);
        const depositAmount = getInputValue("deposit-id");

        // set total deposit 
        // const depositTotal = document.getElementById("deposit-total");
        // const depositTotalText = depositTotal.innerText;
        // const deposit = parseFloat(depositTotalText);
        // const previousAmount = deposit;
        // const newDeposit = previousAmount + depositAmount;
        // depositTotal.innerText = newDeposit;

        const depositTotal = amountUpgrade("deposit-total", depositAmount);

        // // update total 
        // const blance = document.getElementById('blance-total');
        // const blanceText = blance.innerText;
        // const blanceTotal = parseFloat(blanceText);
        // const previousBlance = blanceTotal;
        // const newblance = previousBlance + depositAmount;
        // blance.innerText = newblance;

        const blance = blanceCheck('blance-total', depositAmount);






    })

// withdraw 
document.getElementById('withdraw-submit').addEventListener('click', function () {

    // const withdraw = document.getElementById('withdraw-id');
    // const withdrawText = withdraw.value;
    // const withdrawInput = parseFloat(withdrawText);
    //const withdrawInput = getInputValue('withdraw-id');
    const withdrawInput = getInputValue('withdraw-id');

    // const withdrawAmount = document.getElementById('withdrawCash');
    // const withdrawAmountText = withdrawAmount.innerText;
    // const withdrawPrevious = parseFloat(withdrawAmountText);
    // const newWithdrawAmount = withdrawPrevious + withdrawInput;
    // withdrawAmount.innerText = newWithdrawAmount;

    const withdrawAmount = amountUpgrade('withdrawCash', withdrawInput);

    // const blanceWithdraw = document.getElementById('blance-total');
    // const blancewithdrawText = blanceWithdraw.innerText;
    // const previousTotalBlance = parseFloat(blancewithdrawText);
    // blanceWithdraw.innerText = previousTotalBlance - withdrawInput;


    const blanceWithdraw = withdrawblanceCheck('blance-total', withdrawInput);


})