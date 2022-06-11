console.log('Hello World!');

let form = document.querySelector('.form')
let pas1 = document.querySelector('.pas')
let pas2 = document.querySelector('.pass')
let mess = document.querySelector('.error')
let message = document.querySelector('.htree')
let isvalid = false
let passmatch = false;


let validateForm = () => {
  isvalid = form.checkValidity();
  if(!isvalid){
  message.textContent = 'Please fill the form correctly'
  message.style.color = 'red'
  mess.style.borderColor = 'red'
  return
  }
  
  if (pas1.value === pas2.value) {
    passmatch = true
    pas1.style.borderColor = 'lightgreen'
    pas2.style.borderColor = 'lightgreen'
  } else {
    passmatch = false
    message.textContent = 'Please confirm the password correctly'
    message.style.color = 'red'
    mess.style.borderColor = 'red'
    pas1.style.borderColor = 'orangered'
    pas2.style.borderColor = 'orangered'
    return
  }
  
  if (passmatch && isvalid ==true) {
    message.textContent = 'Sucess'
    message.style.color = 'green'
    mess.style.borderColor = 'green'
  }
}

let prevdef = (e) => {
  e.preventDefault()
  validateForm();
  if (isvalid && passmatch) {
    storedata()
  }
}

let storedata = () =>{
  let user = {
    name : form.name.value,
    phone : form.phone.value,
    mail : form.mail.value,
    website : form.website.value,
    password: form.password.value,
  };
  
}



form.addEventListener('submit',prevdef)
