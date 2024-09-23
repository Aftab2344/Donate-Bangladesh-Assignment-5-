// show the section by id with clicking button
// show donation section
document.getElementById('donation-btn').addEventListener('click',function(){
    showSectionById('donation-section')
})
// showing history section
document.getElementById('history-btn').addEventListener('click',function(){
    showSectionById('history-section')
})

// adding donation amount and subs from account balance
// campaign-1:

document.getElementById('donate-btn-one').addEventListener('click',function(){
    const inputAmount=getAmount('input-btn-one');
    // validation
    if(inputAmount<0){
        alert('Enter positive number to donate')
        return;
    }
    // validation
    if(isNaN(inputAmount)){
        alert('write only number to donate');
        return;
    }
    // adding donation amount
    const currentAmount=totalDonate('campaign-one-amount');
    const newAmount=inputAmount+currentAmount;
    // subs from account balance
    document.getElementById('campaign-one-amount').innerText=newAmount;
    const accountBalance=totalDonate('account-balance');
    const remainBalance=accountBalance-inputAmount;
    document.getElementById('account-balance').innerText=remainBalance;
})

// -----------------------------------------------------------------------
// campaign-2:

document.getElementById('donate-btn-two').addEventListener('click',function(){
    const inputAmount=getAmount('input-btn-two');
    // validation
    if(inputAmount<0){
        alert('Enter positive number to donate')
        return;
    }
    // validation
    if(isNaN(inputAmount)){
        alert('write only number to donate');
        return;
    }
    // adding donation amount
    const currentAmount=totalDonate('campaign-two-amount');
    const newAmount=inputAmount+currentAmount;
    // subs from account balance
    document.getElementById('campaign-two-amount').innerText=newAmount;
    const accountBalance=totalDonate('account-balance');
    const remainBalance=accountBalance-inputAmount;
    document.getElementById('account-balance').innerText=remainBalance;
})

// -----------------------------------------------------------------------
// campaign-3:

document.getElementById('donate-btn-three').addEventListener('click',function(){
    const inputAmount=getAmount('input-btn-three');
    // validation
    if(inputAmount<0){
        alert('Enter positive number to donate')
        return;
    }
    // validation
    if(isNaN(inputAmount)){
        alert('write only number to donate');
        return;
    }
    // adding donation amount
    const currentAmount=totalDonate('campaign-three-amount');
    const newAmount=inputAmount+currentAmount;
    // subs from account balance
    document.getElementById('campaign-three-amount').innerText=newAmount;
    const accountBalance=totalDonate('account-balance');
    const remainBalance=accountBalance-inputAmount;
    document.getElementById('account-balance').innerText=remainBalance;
})