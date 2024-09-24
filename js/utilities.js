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

// modal function

function modalPrompt(id){
    const modal = document.getElementById('donationModal');
    
    modal.style.display = 'block';
    document.getElementById('donationModal').addEventListener('click',function(){
        modal.style.display="none";
    })
    
    window.addEventListener('click',function(event){
        if (event.target == modal) {
            modal.style.display = 'none';
          }
    })
}













