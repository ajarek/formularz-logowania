export function createForm() {
  const Form = document.createElement('form')

  Form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target[0].value, e.target[1].value)
    e.target[0].value = ''
    e.target[1].value = ''
  })
  Form.method = 'POST'
  Form.classList.add('form')

  const Input1 = document.createElement('input')
  Input1.type = 'text'
  Input1.name = 'user'
  Input1.placeholder = '👤Username'
  Form.appendChild(Input1)

  const Input2 = document.createElement('input')
  Input2.type = 'password'
  Input2.name = 'pass'
  Input2.placeholder = '🔒Password'
  Form.appendChild(Input2)

  const Input3 = document.createElement('input')
  Input3.type = 'submit'
  Input3.name = 'submit'
  Input3.value = 'Submit'
  Form.appendChild(Input3)

  return Form
}
