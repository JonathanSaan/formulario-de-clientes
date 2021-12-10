function verificar(){
    let botoes = document.querySelectorAll('input[name="citizenship"]:checked').length;
    let nascimento = document.getElementById("data_nascimento").value;
    let name = document.querySelector('input[name="name"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let number = document.querySelector('input[name="number"]').value;
    let city = document.querySelector('input[name="city"]').value;
    let state = document.querySelector('input[name="state"]').value;
    let address = document.querySelector('input[name="address"]').value;
    
    if (nascimento == "" || botoes == 0 || name == "" || email == "" || number == "" || city == "" || state == "" || address == ""){
      window.alert('[ERRO] Verifique os dados e tente novamente')
    }
    
   console.log(name)
  }
