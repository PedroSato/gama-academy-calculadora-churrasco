/*
Abaixo está a lógica da nossa calculadora mas perceba que tem muita coisa faltando,
e é com você mudar isso para nós termos uma calculadora funcional.
Ao final disso, mude também o css, o html, adicione imagens se desejar, essa calculadora é sua
deixe ela com a sua cara
*/

const calcularChurrasco = () => {
    const quantidadePessoas = pessoas.value;
    let quantidadeCarne = 0
    /*
    Aqui você irá inserir a lógica para calcular
    a quantidade de carne, acompanhamentos e cerveja para o churrasco.
    Perceba que faltam os campos de cerveja e acompanhamentos, isso fica por sua conta :)
    */
    resultadoCarne.innerHTML = 100;
}
const botao = document.querySelector("#botaoCalcular").addEventListener("click", calcularChurrasco)

const pessoas = document.querySelector('#pessoas-qnt')
//insira aqui a lógica para pegar também a quantidade de pessoas vegetarianas


const resultadoCarne = document.querySelector('#carne-qnt')
//insira aqui a lógica para pegar os campos de resultado dos acompanhamentos e das cervejas


botaoCalcular.addEventListener("click", calcularChurrasco)
