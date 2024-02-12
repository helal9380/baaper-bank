document.getElementById('btnSubmit').addEventListener('click', function() {
    const emailInputField = document.getElementById('email-input')
    const emailInputValue = emailInputField.value;
    const passwordInput = document.getElementById('password-input');
    const passwordValue = passwordInput.value;
    if(emailInputValue === 'mama@mami.com' && passwordValue === '12345') {
        window.location.href = "http://127.0.0.1:5500/bank.html"
    }
    else {
        alert('Incorrect your information')
    }
    
})