const initPage = () => {  const checkUsername = () => {    usernameInput.classList.add('thinking');     let request = new XMLHttpRequest();    request.addEventListener('readystatechange', function() {      if (request.readyState === 4 && request.status === 200) {        if (request.responseText === 'okay') {          console.log('okay');          document.getElementById("username").className = "approved";          document.getElementById("register").disabled = false;        } else {          console.log('denied');          document.getElementById("username").className = "denied";          document.getElementById("username").focus();          document.getElementById("username").select();          document.getElementById("register").disabled = true;        }      }    })    request.open('GET', 'checkName.php?username=' + usernameInput.value, true);    request.send();  }  const checkPassword = () => {    let password1Input = document.querySelector('#password1');    let password2Input = document.querySelector('#password2');    if (password1.value === password2.value && password1.value != '') {      let request = new XMLHttpRequest();      request.addEventListener('readystatechange', function() {                password1Input.className = 'thinking';        registerInput.disabled = true;        if (request.readyState === 4 && request.status === 200) {          if (request.responseText === 'okay') {            password1Input.className = 'approved';            registerInput.disabled = false;          } else {            password1Input.className = 'denied';              password1Input.focus();            password1Input.select();          }        }      })      request.open('GET', `checkPass.php?password=${password2.value}`);      request.send();    } else {      password1Input.className = 'denied';        password1Input.focus();      password1Input.select();    }  }  const usernameInput = document.querySelector('#username');  const password2Input = document.querySelector('#password2');  const registerInput = document.querySelector('#register');  usernameInput.addEventListener('blur', checkUsername);  password2Input.addEventListener('blur', checkPassword);  registerInput.disabled = true;}window.addEventListener('load', initPage);