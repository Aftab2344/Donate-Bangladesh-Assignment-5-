// shared function

// show the section by clicking button 
function showSectionById(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    // remove hidden class by clicking button
    document.getElementById(id).classList.remove('hidden');
    return;
}

// get the donate amount function
function getAmount(id){
    const inputAmount=document.getElementById(id).value;
    const amountNumber=parseFloat(inputAmount);
    return amountNumber;
}

// get the amount of donation by innerText function
function totalDonate(id){
    const currentAmount=document.getElementById(id).innerText;
    const currentAmountNumber=parseFloat(currentAmount);
    return currentAmountNumber;
}