//removing the form loading
document.getElementById('form').addEventListener('submit', (e)=>{
    e.preventDefault()
})

const button_Submit = document.getElementById('buttonSubmit').addEventListener('click', ValidateForm)
const first_Name = document.getElementById('firstName')
const last_Name = document.getElementById('lastName')
const email = document.getElementById('email')
const password = document.getElementById('password')

const msgAlert_FirstName = document.getElementById('msgAlertFirstName')
const msgAlert_LastName = document.getElementById('msgAlertLastName')
const msgAlert_Email = document.getElementById('msgAlertEmail')
const msgAlert_Password = document.getElementById('msgAlertPassword')


function ValidateForm(){
    if(first_Name.value === '' && last_Name.value === '' && email.value === '' && password.value === ''){
        alert('Preencha os campo!')

        first_Name.classList.add('errorSubmit')
        last_Name.classList.add('errorSubmit')
        email.classList.add('errorSubmit')
        password.classList.add('errorSubmit')

    }if(first_Name.value === ''){
        msgAlert_FirstName.style.color = 'red'
        msgAlert_FirstName.innerHTML = 'Preencha o campo First Name!'
        first_Name.classList.add('errorSubmit')

    }if(last_Name.value === ''){
        msgAlert_LastName.style.color = 'red'
        msgAlert_LastName.innerHTML = 'Preencha o campo Last Name!'
        last_Name.classList.add('errorSubmit')

    }if(email.value === ''){
        msgAlert_Email.style.color = 'red'
        msgAlert_Email.innerHTML = 'Preencha o campo Email!'
        email.classList.add('errorSubmit')

    }if(password.value === ''){
        msgAlert_Password.style.color = 'red'
        msgAlert_Password.innerHTML = 'Preencha o campo Password!'
        password.classList.add('errorSubmit')

    }
}



