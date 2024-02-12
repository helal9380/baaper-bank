const lowBalance = document.getElementById('low-balance');
    lowBalance.style.display = 'none';

document.getElementById('deposit').addEventListener('click', function() {
    const amountFeild = document.getElementById('get-amount');
    const amountValue = amountFeild.value;
    const number = parseFloat(amountValue);
    
    amountFeild.value ='';
    
    const totalBalanceElement = document.getElementById('total');
    const totalBalanceValue = totalBalanceElement.innerText;
    const totalBalanceConvertToNumber = parseFloat(totalBalanceValue);

    if(number !== number){
        alert('please input valid number');
        return;
    }
    
    const depositTotal = document.getElementById('deposit-total')
    const depositTotalInnerText = depositTotal.innerText;
    const depositTotalConvertToNumber = parseFloat(depositTotalInnerText);
    
    const totalDeposit = number + depositTotalConvertToNumber;
    depositTotal.innerText = totalDeposit;
    const totalBalance = totalBalanceConvertToNumber + number;
    totalBalanceElement.innerText = totalBalance;
});

document.getElementById('whitdrow-btn').addEventListener('click', function() {
    const whitdrowInput = document.getElementById('whitdrow-input');
    const whitdrowInputValue = whitdrowInput.value;
    const whitdrowConvertToNumber = parseFloat(whitdrowInputValue)
    
    if(isNaN(whitdrowConvertToNumber)) {
        alert('please valid input')
        return;
    }
    whitdrowInput.value = '';
    
    const totalwhitdrowInput = document.getElementById('whitdrow');
    const totalwhitdrowInnerText = totalwhitdrowInput.innerText;
    const totalwhitdrowInnerTextConvertToNumber = parseFloat(totalwhitdrowInnerText);
   
    const totalBalanceElement = document.getElementById('total');
    const totalBalanceValue = totalBalanceElement.innerText;
    const totalBalanceConvertToNumber = parseFloat(totalBalanceValue);
    if(whitdrowConvertToNumber > totalBalanceConvertToNumber) {
        lowBalance.style.display = 'block';
        lowBalance.innerText = 'Insufficient balance';
        return;
    }
    else {
        lowBalance.style.display = 'none'
    }
    const totalwhitdrow = whitdrowConvertToNumber + totalwhitdrowInnerTextConvertToNumber;

    totalwhitdrowInput.innerText = totalwhitdrow;
    const totalBalance = totalBalanceConvertToNumber - whitdrowConvertToNumber;
    
    totalBalanceElement.innerText = totalBalance;
    
})
