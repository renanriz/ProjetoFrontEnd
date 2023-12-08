// querySelector = seletor de elementos
const botaoTema = document.querySelector("#botaoTema")

// addEventListemer = adicionar um evento
botaoTema.addEventListener('click', mudaTema)

function mudaTema(){
   const body = document.querySelector("body")
   let temaAtual = document.querySelector("#temaAtual")

   if(botaoTema.checked){
      body.setAttribute('data-bs-theme','dark')
      temaAtual.innerHTML = "Escuro"
   }else{
      body.setAttribute('data-bs-theme','light')
      temaAtual.innerHTML = "Claro "
   }
}