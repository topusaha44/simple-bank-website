document.getElementById('btn-login').addEventListener('click',function(){
    const userEmail = document.getElementById('user-email')
    const userEmailValue = userEmail.value
    const  userPassword = document.getElementById('user-password')
    const userPasswordValue = userPassword.value
    if (userEmailValue === 'admin@gmail.com' && userPasswordValue === 'admin ') {
        window.location.href = 'bank.html'
    }else{
        alert('Invalid')
    }
})

