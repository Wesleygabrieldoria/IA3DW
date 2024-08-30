const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: "A IA te ajuda no seu dia a dia?",
        alternativas:["Sim","Não"]
    },
    {
        enunciado: "Você tem medo da IA?",
        alternativas:["Sim","Não"]
    },
    {
        enunciado: "Você acredita que a IA seja uma ferramenta de trabalho?",
        alternativas:["Sim","Não"]
    }
]

let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){
for(const alternativa of perguntaAtual.alternativa){
    const botaoAlternativas = document.createElement("buttonn");
    botaoAlternativas.textContent = alternativa;
}
}

