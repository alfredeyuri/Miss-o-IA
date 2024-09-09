const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "Qual o seu nível de conhecimento sobre a Segunda Guerra Mundial?",
    alternativas: [
        {
            texto: "Baixo",
            afirmacao: [
                "Você sabe apenas o básico sobre a Segunda Guerra Mundial. ",
                "É necessário estudar mais sobre o assunto.",
                "Realizar pesquisas e fazer exercícios pode ajudar."
            ]
        },
        {
            texto: "Médio",
            afirmacao: [
                "Você tem um bom entendimento sobre a Segunda Guerra Mundial. ",
                "Seu nível de conhecimento é bom.",
                "Realização de exercícios pode te dar ainda mais conhecimento sobre o assunto."
            ]
        },
        {
            texto: "Alto",
            afirmacao: [
                "Você tem um conhecimento aprofundado sobre a Segunda Guerra Mundial. ",
                "Parabéns pelo seu conhecimento, continue assim.",
                "Sempre deixe pelo menos 1h do seu dia para os estudos."
            ]
        }
    ]
},
{
    enunciado: "1) Qual foi o estopim que desencadeou a Segunda Guerra Mundial?",
    alternativas: [
        {
            texto: "a) O ataque a Pearl Harbor pelos japoneses.",
            afirmacao: [
                "Esta alternativa está incorreta. ",
                "Não foi dessa vez, mas continue se esforçando que irá conseguir!"
            ]
        },
        {
            texto: "b) A invasão da Polônia pela Alemanha.",
            afirmacao: [
                "1-B) Esta alternativa está correta, pois a invasão da Polônia, em setembro de 1939, foi o evento que levou ao início do conflito. ",
                "Parabéns, você acertou!"
            ]
        },
        {
            texto: "c) A assinatura do Tratado de Versalhes.",
            afirmacao: [
                "Esta alternativa está incorreta. ",
                "Não foi dessa vez, mas continue se esforçando que irá conseguir!"
            ]
        },
        {
            texto: "d) A criação da ONU.",
            afirmacao: [
                "Esta alternativa está incorreta. ",
                "Não foi dessa vez, mas continue se esforçando que irá conseguir!"
            ]
        }
    ]
},
{
    enunciado: "2) Qual foi o nome do projeto responsável pelo desenvolvimento da primeira bomba atômica?",
    alternativas: [
        {
            texto: "a) Projeto Manhattan.",
            afirmacao: [
                "2-A) Esta alternativa está correta, o Projeto Manhattan foi responsável pelo desenvolvimento da primeira bomba atômica durante a Segunda Guerra Mundial. ",
                "Parabéns, você acertou!"
            ]
        },
        {
            texto: "b) Operação Barbarossa.",
            afirmacao: [
                "Esta alternativa está incorreta. ",
                "Não foi dessa vez, mas continue se esforçando que irá conseguir!"
            ]
        },
        {
            texto: "c) Operação Overlord.",
            afirmacao: [
                "Esta alternativa está incorreta. ",
                "Não foi dessa vez, mas continue se esforçando que irá conseguir!"
            ]
        },
        {
            texto: "d) Projeto Apollo.",
            afirmacao: [
                "Esta alternativa está incorreta. ",
                "Não foi dessa vez, mas continue se esforçando que irá conseguir!"
            ]
        }
    ]
},
{
    enunciado: "3) Qual dos seguintes eventos marcou o fim da Segunda Guerra Mundial?",
    alternativas: [
        {
            texto: "a) O desembarque na Normandia.",
            afirmacao: [
                "Esta alternativa está incorreta. ",
                "Não foi dessa vez, mas continue se esforçando que irá conseguir!"
            ]
        },
        {
            texto: "b) A assinatura do Tratado de Versalhes.",
            afirmacao: [
                "Esta alternativa está incorreta. ",
                "Não foi dessa vez, mas continue se esforçando que irá conseguir!"
            ]
        },
        {
            texto: "c) A rendição da Alemanha Nazista e do Japão.",
            afirmacao: [
                "3-C) Esta alternativa está correta, a rendição da Alemanha em maio de 1945 e do Japão em setembro de 1945 marcou o fim da Segunda Guerra Mundial. ",
                "Parabéns, você acertou!"
            ]
        },
        {
            texto: "d) A Conferência de Yalta.",
            afirmacao: [
                "Esta alternativa está incorreta. ",
                "Não foi dessa vez, mas continue se esforçando que irá conseguir!"
            ]
        }
    ]
}
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () =>
            respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Obrigado por completar o quiz! ";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();