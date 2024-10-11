const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [     //serve para abrir lista de perguntas
    {   //abre o objeto das perguntas
        enunciado: "Você acha que IA vai ser um problema no futuro?",
        alternativas: [
            {texto: "Sim",
            afirmação:"A IA vai ser um problema no futuro"}, 

            {texto: "Não",
            afirmação:"A IA não vai ser um problema no futuro"}]
    },
    { 
        enunciado: "Você acredita que a IA vai ter vida própria?",
        alternativas: [
            {texto: "Sim",
            afirmação:"A IA terá vida própria"}, 
                
            {texto: "Não",
            afirmação:"A IA não terá vida própria"}]
    },
    { 
        enunciado: "Qualquer um pode usar a IA?",
        alternativas: [
            {texto: "Sim",
            afirmação:"Sim, qualquer um pode usar a IA"}, 
                
            {texto: "Não",
            afirmação:"Não, qualquer um não pode usar a IA"}]
    },
]

let posicao = 0;
let perguntaAtual;
let respostas = "";

function mostraPergunta() {
    if (posicao >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Em 25 anos...";
    textoResultado.textContent = respostas;
    caixaAlternativa.textContent = "";
}
mostraPergunta();