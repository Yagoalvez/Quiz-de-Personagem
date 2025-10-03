const personagens = [
    { nome: "Pontas Esquerda", imagem: "ponta_esquerda.jpg", descricao: "Atuam pelas laterais, usando a velocidade e o drible para criar oportunidades de gol.", pontos: 0 },
    { nome: "Pontas Direita", imagem: "ponta_direita.jpg", descricao: "Atuam pelas laterais, usando a velocidade e o drible para criar oportunidades de gol.", pontos: 0 },
    { nome: "Centroavantes", imagem: "centroavantes.jpg", descricao: "Ficam mais próximos do gol, finalizando as jogadas com força e posicionamento.", pontos: 0 },
    { nome: "Volantes", imagem: "volante.jpg", descricao: "Atuam mais recuados, protegendo a defesa e desarmando os adversários.", pontos: 0 },
    { nome: "Meias Centrais/Armadores", imagem: "meio_campo.jpg", descricao: "Constroem o jogo ofensivo, distribuindo a bola com boa visão de jogo e passe", pontos: 0 },
    { nome: "Zagueiros", imagem: "zagueiro.jpg", descricao: "Marcam os atacantes e bloqueiam chutes, jogando na parte central da defesa.", pontos: 0 },
    { nome: "Lateral Esquerdo", imagem: "lateral_esquerdo.jpg", descricao: "Atuam nas laterais do campo, apoiando o ataque pela linha de fundo e voltando para marcar", pontos: 0 },
    { nome: "Lateral Direito", imagem: "lateral_direito.jpg", descricao: "Atuam nas laterais do campo, apoiando o ataque pela linha de fundo e voltando para marcar", pontos: 0 },
    { nome: "Goleiro", imagem: "goleiro.jpg", descricao: "Defender o gol e impedir que o time adversário marque, Além de defender, também precisa organizar a defesa e iniciar a saída de bola com os pés.", pontos: 0 },
];

const perguntas = [
    {
        pergunta: "Quando a bola vem na sua direção, você prefere:",
        opcoes: [
            { texto: "Dominar com a perna direita.", pontos: [0,3,3,3,3,3,0,3,3]},
            { texto: "Dominar com a perna esquerda.", pontos: [3,0,3,3,3,3,3,0,3] },
            { texto: "Dominar com qualquer uma.", pontos: [3,3,3,3,3,3,3,3,3] }
        ]
    },
    {
        pergunta: "O time está sofrendo pressão e precisa sair jogando. Qual sua primeira reação?",
        opcoes: [
            { texto: "Peço a bola no pé, mesmo marcado, para organizar a saída.", pontos: [1, 1, 0, 3, 3, 2, 1, 1, 2] },
            { texto: "Me apresento como opção de passe longo na lateral do campo.", pontos: [3, 3, 1, 0, 1, 0, 3, 3, 0] },
            { texto: "Grito para organizar a defesa e oriento os passes dos meus companheiros.", pontos: [0, 0, 0, 2, 1, 3, 0, 0, 3] }
        ]
    },
    {
        pergunta: "Você recebe a bola no meio-campo, com espaço. O que você faz?",
        opcoes: [
            { texto: "Acelero para cima do adversário, buscando o drible.", pontos: [3, 3, 1, 1, 2, 0, 3, 3, 0] },
            { texto: "Procuro um passe preciso que deixe o atacante na cara do gol.", pontos: [2, 2, 2, 2, 3, 0, 1, 1, 0] },
            { texto: "Protejo a bola e toco para o lado, mantendo a posse de bola com segurança.", pontos: [0, 0, 0, 3, 2, 2, 1, 1, 1] }
        ]
    },
    {
        pergunta: "Qual é a sua principal virtude em campo?",
        opcoes: [
            { texto: "Minha explosão e velocidade.", pontos: [3, 3, 1, 0, 1, 0, 3, 3, 0] },
            { texto: "Minha visão de jogo e qualidade no passe.", pontos: [1, 1, 2, 2, 3, 1, 1, 1, 2] },
            { texto: "Minha força na marcação e posicionamento.", pontos: [0, 0, 1, 3, 1, 3, 1, 1, 3] }
        ]
    },
    {
        pergunta: "O jogo está empatado no último minuto e há uma chance de contra-ataque. Onde você estaria?",
        opcoes: [
            { texto: "Infiltrando na área adversária para receber o cruzamento e finalizar.", pontos: [2, 2, 3, 0, 2, 0, 1, 1, 0] },
            { texto: "Carregando a bola em alta velocidade pelo lado do campo.", pontos: [3, 3, 1, 1, 2, 0, 3, 3, 0] },
            { texto: "Atento na defesa, pois se perdermos a bola, o perigo será enorme.", pontos: [0, 0, 0, 3, 1, 3, 1, 1, 3] }
        ]
    },
    {
        pergunta: "Seu time acabou de perder a bola no ataque. O que você faz?",
        opcoes: [
            { texto: "Pressiono imediatamente quem está com a bola para tentar recuperar.", pontos: [2, 2, 2, 3, 2, 1, 2, 2, 0] },
            { texto: "Corro para recompor minha posição defensiva o mais rápido possível.", pontos: [1, 1, 0, 3, 2, 3, 3, 2, 1] },
            { texto: "Confio nos meus defensores e me guardo para o próximo ataque.", pontos: [3, 3, 3, 0, 1, 0, 0, 0, 0] }
        ]
    },
    {
        pergunta: "Você prefere...",
        opcoes: [
            { texto: "Dar o passe para o gol (assistência).", pontos: [2, 2, 1, 2, 3, 0, 2, 2, 0] },
            { texto: "Marcar o gol.", pontos: [3, 3, 3, 0, 2, 0, 1, 1, 0] },
            { texto: "Evitar um gol com um desarme crucial.", pontos: [0, 0, 0, 3, 1, 3, 2, 0, 3] }
        ]
    },
    {
        pergunta: "Qual tipo de treino você mais gosta?",
        opcoes: [
            { texto: "Treino de finalização, chutes de curta e longa distância.", pontos: [2, 2, 3, 1, 2, 0, 1, 1, 0] },
            { texto: "Treino de agilidade e corridas de velocidade.", pontos: [3, 3, 1, 0, 1, 0, 3, 3, 0] },
            { texto: "Treino tático, de posicionamento e leitura de jogo.", pontos: [1, 1, 1, 3, 3, 3, 2, 2, 3] }
        ]
    },
    {
        pergunta: "Um atacante adversário vem driblando na sua direção. Sua reação é:",
        opcoes: [
            { texto: "Dar o bote para tentar roubar a bola de uma vez.", pontos: [1, 1, 0, 3, 1, 2, 2, 2, 1] },
            { texto: "Cercar, mantendo a distância para não ser driblado e esperar o momento certo.", pontos: [0, 0, 0, 2, 1, 3, 2, 2, 3] },
            { texto: "Pedir ajuda de um companheiro para fazer uma marcação dupla.", pontos: [1, 1, 0, 2, 2, 2, 2, 2, 2] }
        ]
    },
    {
        pergunta: "O que é mais importante para você em uma equipe?",
        opcoes: [
            { texto: "Criatividade e talento para quebrar as defesas.", pontos: [3, 3, 2, 1, 3, 0, 2, 2, 0] },
            { texto: "Organização tática e disciplina para não cometer erros.", pontos: [1, 1, 1, 3, 2, 3, 2, 2, 3] },
            { texto: "Intensidade e preparo físico para superar os adversários.", pontos: [2, 2, 2, 2, 1, 1, 3, 3, 1] }
        ]
    },
    {
        pergunta: "Com a bola nos pés, o que te dá mais satisfação?",
        opcoes: [
            { texto: "Um drible desconcertante que deixa o marcador para trás.", pontos: [3, 3, 1, 0, 2, 0, 3, 3, 0] },
            { texto: "Um lançamento de 40 metros que encontra o companheiro livre.", pontos: [1, 1, 0, 2, 3, 2, 1, 1, 2] },
            { texto: "Um chute forte e preciso que estufa as redes.", pontos: [2, 2, 3, 0, 1, 0, 1, 1, 0] }
        ]
    }
];

class AplicacaoQuiz {
    constructor() {
        this.telas = {
            inicial: document.getElementById("tela-inicial"),
            quiz: document.getElementById("tela-quiz"),
            resultado: document.getElementById("tela-resultado")
        };
        this.elementosQuiz = {
            contadorEl: document.getElementById("contador-pergunta"),
            perguntaEl: document.getElementById("texto-pergunta"),
            opcoesEl: document.getElementById("opcoes-container")
        };
        this.elementosResultado = {
            nomeEl: document.getElementById("nome-personagem"),
            imagemEl: document.getElementById("imagem-personagem"),
            descricaoEl: document.getElementById("descricao-personagem"),
            pontosEl: document.getElementById("pontos-personagem")
        };

        this.perguntaAtual = 0;
        this.personagens = JSON.parse(JSON.stringify(personagens)); 
        
        this.vincularEventos();
        this.mostrarTela('inicial');
    }
 
    mostrarTela(nomeTela) {
        Object.values(this.telas).forEach(tela => tela.style.display = 'none');
        this.telas[nomeTela].style.display = 'block';
    }
 
    vincularEventos() {
        document.getElementById('btn-iniciar').addEventListener('click', () => this.iniciarQuiz());
        document.getElementById('btn-recomecar').addEventListener('click', () => this.iniciarQuiz());
    }

    iniciarQuiz() {
        this.perguntaAtual = 0;
        this.personagens.forEach(p => p.pontos = 0);
        this.mostrarTela('quiz');
        this.mostrarPergunta();
    }

    mostrarPergunta() {
        const pergunta = perguntas[this.perguntaAtual];
        this.elementosQuiz.contadorEl.textContent = `Pergunta ${this.perguntaAtual + 1} de ${perguntas.length}`;
        this.elementosQuiz.perguntaEl.textContent = pergunta.pergunta;
        this.elementosQuiz.opcoesEl.innerHTML = "";

        pergunta.opcoes.forEach(opcao => {
            const botao = document.createElement("button");
            botao.textContent = opcao.texto;
            botao.onclick = () => this.responder(opcao.pontos);
            this.elementosQuiz.opcoesEl.appendChild(botao);
        });
    }

    responder(pontos) {
        this.personagens.forEach((personagem, index) => {
            personagem.pontos += pontos[index];
        });

        this.perguntaAtual++;

        if (this.perguntaAtual < perguntas.length) {
            this.mostrarPergunta();
        } 
        else {
            this.finalizar();
        }
    }

    finalizar() {
        const personagemFinal = this.personagens.reduce((melhor, atual) => 
            (atual.pontos > melhor.pontos) ? atual : melhor
        );
        this.mostrarResultado(personagemFinal);
    }
    
    mostrarResultado(personagem) {
        this.elementosResultado.nomeEl.textContent = personagem.nome;
        this.elementosResultado.imagemEl.src = personagem.imagem;
        this.elementosResultado.descricaoEl.textContent = personagem.descricao;
        this.elementosResultado.pontosEl.textContent = `Pontuação final: ${personagem.pontos}`;
        this.mostrarTela('resultado');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new AplicacaoQuiz();
});