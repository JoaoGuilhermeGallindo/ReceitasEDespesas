
function adicionarTarefa(){
    let li = document.createElement("li")
    let input1 = document.getElementById('descricao').value;
    let input2 = document.getElementById('valor').value;
    let input_texto = document.createTextNode(`${input1}    -   R$ ${input2}`)
    li.appendChild(input_texto)
    document.querySelector("ul").appendChild(li)
    document.getElementById('descricao').value = ""
    document.getElementById('valor').value = ""
}