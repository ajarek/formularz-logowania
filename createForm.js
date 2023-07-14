import {createLogo} from './logo'
export function createForm() {
  
  const Form = document.createElement('form')
  
  Form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target[0].value, e.target[1].value,e.target[2].checked)
    e.target[0].value = ''
    e.target[1].value = ''
  })
  Form.method = 'POST'
  Form.classList.add('form')
  Form.appendChild(createLogo())
  const Input1 = document.createElement('input')
  Input1.type = 'text'
  Input1.name = 'user'
  Input1.placeholder = '👤Username'
  Input1.required=true
  const Error=document.createElement('p')
  Error.innerText='name is required'
  Form.append(Input1)

  const Input2 = document.createElement('input')
  Input2.type = 'password'
  Input2.name = 'pass'
  Input2.placeholder = '🔒Password'
  Input2.required=true
  Form.appendChild(Input2)
  
  const Wrapper=document.createElement('div')
  Wrapper.classList.add('wrapper')
  const WrapperCheck=document.createElement('div')
  WrapperCheck.classList.add('wrapper-check')
  const Label=document.createElement('label')
  Label.innerText='Remember me'
  Label.setAttribute('for','check')
  const InputCheck=document.createElement('input')
  InputCheck.type=('checkbox')
  InputCheck.id='check'
  WrapperCheck.append(InputCheck,Label)
  const WrapperForgot=document.createElement('div')
  const Forgot=document.createElement('a')
  Forgot.setAttribute('href','#')
  Forgot.innerText='Forgot password ?'
  WrapperForgot.appendChild(Forgot)
  Wrapper.append(WrapperCheck,WrapperForgot)
  Form.appendChild(Wrapper)

  const Input3 = document.createElement('input')
  Input3.type = 'submit'
  Input3.name = 'submit'
  Input3.value = 'Login'
  Form.appendChild(Input3)
  
  const WrapperAccount=document.createElement('div')
  WrapperAccount.classList.add('wrapper-account')
  WrapperAccount.innerHTML=`
  <p>Don't have an account?</p>
  <a href='#'>Register now</a>
  `
  Form.appendChild(WrapperAccount)
  return Form
}
