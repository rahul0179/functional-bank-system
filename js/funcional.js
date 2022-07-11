function getInput(id) {

    const inputId = document.getElementById(id);
    const inputIdText = inputId.value;
    const input = parseFloat(inputIdText);

    inputId.value = '';

    return input;



}

function update(id, input) {
    const inputId = document.getElementById(id);
    const inputText = inputId.innerText;
    const previousInput = parseFloat(inputText) + input;
    inputId.innerText = previousInput;
    return inputId;

}
function getCurrentBlance() {
    const blance = document.getElementById('blance-total');
    const blanceText = blance.innerText;
    const previousBlance = parseFloat(blanceText);
    return previousBlance;

}

function blance(amount, isAdd) {
    const blance = document.getElementById('blance-total');
    /* const blanceText = blance.innerText;
    const previousBlance = parseFloat(blanceText); */
    const previousBlance = getCurrentBlance();
    if (isAdd == true) {
        const update = previousBlance + amount;
        blance.innerText = update;

    }
    else {
        const update = previousBlance - amount;
        blance.innerText = update;
        return blance;

    }
    return blance;

}



// deposit button 

document.getElementById('deposit-submit').addEventListener('click', function () {
    //   set input 
    const depositInput = getInput("deposit-id");
    if (depositInput > 0) {
        const updateDeposit = update("deposit-total", depositInput);

        const blanceUpdate = blance(depositInput, true);
    }





})

// withdraw button 

document.getElementById('withdraw-submit').addEventListener('click', function () {
    //   set input 
    const withdrawInput = getInput('withdraw-id');
    const currentBlance = getCurrentBlance();

    if (withdrawInput > 0 && withdrawInput < currentBlance) {
        const updateWithdraw = update('withdrawCash', withdrawInput);

        const blanceUpdate = blance(withdrawInput, false);
    }
    if (withdrawInput > currentBlance) {
        console.log("tou can not withdraw !!!!!!!!!!")
    }



})


