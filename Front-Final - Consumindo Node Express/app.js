async function carregarListar() {
    await fetch("http://localhost:3000/usuarios")
    .then(response => response.json())
    .then(usuarios => {
    
      const lista =   document.getElementById('lista-usuario')

      usuarios.forEach(ev => {

        const li = document.createElement('li')
        
        li.innerHTML = `Nome: ${ev.nome} - Data de Nascimento:${ev.dataNascimento} - CPF: ${ev.cpf}`
        lista.appendChild(li)
      });

    })
}

carregarListar()


async function cadastrarUsuario() {
    const nomeDigitado = document.getElementById('nome-usuario').value
    const dataDigitado = document.getElementById('dataNascimento-usuario').value
    const cpfDigitado = document.getElementById('cpf-usuario').value

    await fetch('http://localhost:3000/usuarios', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            nome: nomeDigitado,
            dataNascimento: dataDigitado,
            cpf: cpfDigitado
        })
        
            
            
            
        
    })

    .then(response => response.json())
    .then(dados => {
        alert("Usuário cadastrado com sucesso")
        console.log(dados);
        
    })
}
