import { createLogo } from './logo'

export function createForm() {
  const Form = document.createElement('form')

  Form.addEventListener('submit', (e) => {
    e.preventDefault()

    const errorMessage = document.getElementById('errorMessage')
    const errorMessage1 = document.getElementById('errorMessage1')
    const modal =document.querySelector('.modal')

    if (e.target[0].value.length < 5) {
      e.preventDefault()
      errorMessage1.textContent = 'Name should be at least 5 characters long.'
    }
    if (e.target[0].value.length >= 5) {
      errorMessage1.textContent = ''
    }
    if (e.target[1].value.length < 6) {
      e.preventDefault()
      errorMessage.textContent =
        'Password should be at least 6 characters long.'
    }
    if (e.target[1].value.length >= 6) {
      errorMessage.textContent = ''
    }
    if (e.target[1].value.length >= 6 && e.target[0].value.length >= 5) {
      e.preventDefault()
      modal.style.display='flex'
      modal.innerHTML=`Logged😀 <br/> Name: ${e.target[0].value}<br/> Password: ${e.target[1].value}<br/> Remember: ${e.target[2].checked} <br/> ❌`
      modal.addEventListener('click',()=>modal.style.display='none')
      e.target[0].value = ''
      e.target[1].value = ''
    }
  })
  
  Form.method = 'POST'
  Form.classList.add('form')
  const Modal=document.createElement('div')
  Modal.classList.add('modal')
  Form.append(Modal, createLogo())
  const Input1 = document.createElement('input')
  Input1.type = 'text'
  Input1.name = 'user'
  Input1.placeholder = '👤Username'
  const error1 = document.createElement('div')
  error1.id = 'errorMessage1'
  error1.classList.add('error')

  Form.append(Input1, error1)

  const Input2 = document.createElement('input')
  Input2.type = 'password'
  Input2.name = 'pass'
  Input2.placeholder = '🔒Password'
  const error = document.createElement('div')
  error.id = 'errorMessage'
  error.classList.add('error')
  Form.append(Input2, error)

  const Wrapper = document.createElement('div')
  Wrapper.classList.add('wrapper')
  const WrapperCheck = document.createElement('div')
  WrapperCheck.classList.add('wrapper-check')
  const Label = document.createElement('label')
  Label.innerText = 'Remember me'
  Label.setAttribute('for', 'check')
  const InputCheck = document.createElement('input')
  InputCheck.type = 'checkbox'
  InputCheck.id = 'check'
  WrapperCheck.append(InputCheck, Label)
  const WrapperForgot = document.createElement('div')
  const Forgot = document.createElement('a')
  Forgot.setAttribute('href', '#')
  Forgot.innerText = 'Forgot password ?'
  WrapperForgot.appendChild(Forgot)
  Wrapper.append(WrapperCheck, WrapperForgot)
  Form.appendChild(Wrapper)

  const Input3 = document.createElement('input')
  Input3.type = 'submit'
  Input3.name = 'submit'
  Input3.value = 'Login'
  Form.appendChild(Input3)

  const WrapperAccount = document.createElement('div')
  WrapperAccount.classList.add('wrapper-account')
  WrapperAccount.innerHTML = `
  <p>Don't have an account?</p>
  <a href='#'>Register now</a>
  `
  Form.appendChild(WrapperAccount)
  return Form
}
