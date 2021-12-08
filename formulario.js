function verificar(){
    var botoes = document.querySelectorAll('input[name="citizenship"]:checked').length;
    var nascimento = document.getElementById("data_nascimento").value
    
    if (nascimento == "" || botoes == 0){
      window.alert('[ERRO] Verifique os dados e tente novamente')
    }
  }
