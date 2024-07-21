function envioform() { //Executa a função
    const nome = document.getElementById('nome').value
    const sal = Number(document.getElementById('valor').value)
    const real = sal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    const confirm = window.confirm(`${nome}, Sua pretensão salarial é: ${real}.`)
}

