const EmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PasswordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

handleSubmit = () => {
    if(
        document.getElementById('error1').innerHTML === '' &&
        document.getElementById('error2').innerHTML === '' &&
        document.getElementById('error3').innerHTML === ''
    ) {
        if(
            document.getElementById('email-id').value === '' &&
            document.getElementById('password').value === '' &&
            document.getElementById('confirm-password').value === ''
        ) alert('Form cannot be empty')
        else alert('Your form has been submitted') 
    }
    else alert('Correct errors before submitting')
}

const emailHandler = document.getElementById('email-id');

emailHandler.addEventListener('change', event => {
    const email = event.target.value;
    console.log(event.target.value)
    if(!email.match(EmailRegex)) document.getElementById('error1').innerHTML = 'Invalid Email Address'
    else document.getElementById('error1').innerHTML = ''
})

const passwordHandler = document.getElementById('password');

passwordHandler.addEventListener('change', event => {
    const password = event.target.value;
    if(!password.match(PasswordRegex)) document.getElementById('error2').innerHTML = 'Password must contain atleast one UPPERCASE, Lowercase, Number and special character'
    else document.getElementById('error2').innerHTML = ''
})

confirmPassword = document.getElementById('confirm-password');

confirmPassword.addEventListener('change', event => {
    const password = event.target.value;
    if(password != passwordHandler.value) document.getElementById('error3').innerHTML = 'Password does not match'
    else document.getElementById('error3').innerHTML = ''
})