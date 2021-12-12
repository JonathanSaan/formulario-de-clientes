function verificar(){
    let name = document.querySelector('input[name="name"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let botoes = document.querySelectorAll('input[name="citizenship"]:checked').length;
    let nascimento = document.getElementById("data_nascimento").value;
    let number = document.querySelector('input[name="number"]').value;
    let city = document.querySelector('input[name="city"]').value;
    let state = document.querySelector('input[name="state"]').value;
    let address = document.querySelector('input[name="address"]').value;
    
    if (name == "" || email == "" || number == "" || botoes == 0 || nascimento == "" || city == "" || state == "" || address == ""){
      window.alert('Preencha todos os dados!')
    }
    
   console.log(name)
  }
