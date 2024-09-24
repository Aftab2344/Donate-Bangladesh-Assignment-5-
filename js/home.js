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

    // add to history of donation
    // generate time function
    const donationTime = new Date();
    const div=document.createElement('div');
    div.innerHTML=`
    <p class="font-bold text-[20px] mb-4 "> ${inputAmount} Taka is donated for  Flood at Noakhali, Bangladesh. </p>
    Date:${donationTime} `
    div.classList.add('border-2','border-gray-100', 'px-12','py-6' ,'text-start','rounded-xl' )
    document.getElementById('history-container').appendChild(div);
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
    // add to history of donation
    // generate time function
    const donationTime = new Date();
    const div=document.createElement('div');
    div.innerHTML=`
    <p class="font-bold text-[20px] mb-4 "> ${inputAmount} Taka is donated for Flood Relief in Feni,Bangladesh. </p>
    Date:${donationTime} `
    div.classList.add('border-2','border-gray-100', 'px-12','py-6' ,'text-start','rounded-xl' )
    document.getElementById('history-container').appendChild(div);
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
    // add to history of donation
    // generate time function
    const donationTime = new Date();
    const div=document.createElement('div');
    div.innerHTML=`
    <p class="font-bold text-[20px] mb-4 "> ${inputAmount} Taka is donated for Aid for Injured in the Quota Movement. </p>
    Date:${donationTime} `
    div.classList.add('border-2','border-gray-100', 'px-12','py-6' ,'text-start','rounded-xl' )
    document.getElementById('history-container').appendChild(div);
})


// donation button bg change
document.getElementById('donation-btn').addEventListener('click',function(){
    document.getElementById('donation-btn').classList.add('bg-[#B4F461]' );
    document.getElementById('donation-btn').classList.remove('text-gray-500');
    document.getElementById('history-btn').classList.remove('bg-[#B4F461]', );
    document.getElementById('history-btn').classList.add('text-gray-500' );
})
// history button bg change
document.getElementById('history-btn').addEventListener('click',function(){
    document.getElementById('history-btn').classList.add('bg-[#B4F461]');
    document.getElementById('history-btn').classList.remove('text-gray-500');
    document.getElementById('donation-btn').classList.remove('bg-[#B4F461]' );
    document.getElementById('donation-btn').classList.add('text-gray-500' );
})


// modal js

// modal set for campaign one button 
document.getElementById('donate-btn-one').addEventListener('click',function(){
    modalPrompt('donate-btn-one')
})
// modal set for campaign two button 
document.getElementById('donate-btn-two').addEventListener('click',function(){
    modalPrompt('donate-btn-two')
})
// modal set for campaign three button 
document.getElementById('donate-btn-three').addEventListener('click',function(){
    modalPrompt('donate-btn-three')
})