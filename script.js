function register() {
  const buttonregister = document.getElementById('register');
  buttonregister.addEventListener('click', function () {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    if (name != "" && email != "") {
      console.log("name.innerHTML", name);
      console.log("name.innerHTML", email);
      dataForEmailObject = {
        name: name,
        email: email,
      };
      localStorage.setItem("dataForEmail", JSON.stringify(dataForEmailObject));
      presentsData();
    } else {
      alert("Você precisa preencher seus dados!!")
    }
  });
}

function presentsData() {
  const buttonregister = document.getElementById('register');
  const inputName = document.getElementById('name');
  const inputEmail = document.getElementById('email');
  const textoCadastro = document.getElementById('textoCadastro');
  const sucesso = "sucesso!!!".fontcolor('green');

  buttonregister.innerHTML = "Cadastrando..."
  setTimeout(function(){
    buttonregister.style.display = "none";
    inputName.style.display = "none";
    inputEmail.style.display = "none";
    const dataForEmailObject = JSON.parse(localStorage.getItem("dataForEmail"));
    const name = dataForEmailObject.name.fontcolor('#F71964');
    const email = dataForEmailObject.email.fontcolor('#F71964');
    textoCadastro.innerHTML = `Oii ${name}, parabéns seu cadastro foi efetuado com ${sucesso} \<br> A partir de agora enviaremos os nossos melhores descontos para o E-mail: ${email}`;
  },2000);
}

window.onload = function () {
  register();
};