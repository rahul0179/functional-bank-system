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

function blance(amount, isAdd) {
    const blance = document.getElementById('blance-total');
    const blanceText = blance.innerText;
    if (isAdd == true) {
        const update = parseFloat(blanceText) + amount;
        blance.innerText = update;

    }
    else {
        const update = parseFloat(blanceText) - amount;
        blance.innerText = update;
        return blance;

    }
    return blance;

}



// deposit button 

document.getElementById('deposit-submit').addEventListener('click', function () {
    //   set input 
    const depositInput = getInput("deposit-id");

    const updateDeposit = update("deposit-total", depositInput);

    const blanceUpdate = blance(depositInput, true);



})

// withdraw button 

document.getElementById('withdraw-submit').addEventListener('click', function () {
    //   set input 
    const withdrawInput = getInput('withdraw-id');

    const updateWithdraw = update('withdrawCash', withdrawInput);

    const blanceUpdate = blance(withdrawInput, false);



})