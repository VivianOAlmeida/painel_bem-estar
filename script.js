const ajudaBtn = document.getElementById("ajuda-btn");
const form = document.getElementById("humor-form");
const humorInput = document.getElementById("humor");
const humorRegistrado = document.getElementById("humor-registrado");
const mensagemBtn = document.getElementById("mensagem-btn");
const mensagemMotivacional = document.getElementById("mensagem-motivacional");
const imagemHumor = document.getElementById("imagem-humor"); // Elemento de imagem


const frasesPorHumor = {
    feliz: [
        "A felicidade é o combustível que nos impulsiona a alcançar nossos sonhos.",
        "A vida é curta demais para não aproveitar os momentos felizes. Viva-os ao máximo!",
        "Quando você está feliz, o mundo se torna um lugar mais brilhante.",
        "A felicidade não é um destino, é uma jornada cheia de momentos valiosos.",
        "Sorria, porque você está exatamente onde precisa estar.",
        "A felicidade é contagiante. Espalhe-a por onde você for.",
        "Que a alegria de hoje seja a inspiração para um amanhã ainda melhor.",
        "Felicidade é encontrar beleza até nos momentos mais simples da vida.",
        "Viva com alegria, pois é ela que transforma o ordinário em extraordinário.",
        "Ser feliz não é ter tudo, mas saber aproveitar o que a vida oferece."
    ],
    triste: [
        "Dias difíceis também passam. Você é mais forte do que imagina.",
        "Permita-se sentir, mas nunca se esqueça de que você vai superar isso.",
        "A tristeza faz parte da caminhada, mas não define quem você é.",
        "Cada amanhecer traz uma nova chance de recomeçar.",
        "Respire fundo. Um passo de cada vez já é progresso.",
        "Você não está sozinho. Tudo bem não estar bem o tempo todo.",
        "Mesmo nas noites mais escuras, as estrelas continuam brilhando.",
        "O tempo cura, e a sua força te leva adiante.",
        "A dor que você sente hoje é a força que você terá amanhã.",
        "Seja gentil consigo mesmo. Você está fazendo o melhor que pode."
    ],
    deprimido: [
            "Dias difíceis também passam. Você é mais forte do que imagina.",
            "Permita-se sentir, mas nunca se esqueça de que você vai superar isso.",
            "A tristeza faz parte da caminhada, mas não define quem você é.",
            "Cada amanhecer traz uma nova chance de recomeçar.",
            "Respire fundo. Um passo de cada vez já é progresso.",
            "Você não está sozinho. Tudo bem não estar bem o tempo todo.",
            "Mesmo nas noites mais escuras, as estrelas continuam brilhando.",
            "O tempo cura, e a sua força te leva adiante.",
            "A dor que você sente hoje é a força que você terá amanhã.",
            "Seja gentil consigo mesmo. Você está fazendo o melhor que pode."
    ],
    ansioso: [
        "Respire fundo. Você está no controle, mesmo que não pareça agora.",
        "A ansiedade mente. Nem tudo que você sente é realidade.",
        "Você já superou dias difíceis antes — este não será diferente.",
        "Um passo de cada vez. Você não precisa resolver tudo de uma vez.",
        "Pensamentos vêm e vão. Você não é o que pensa, você é quem observa.",
        "Está tudo bem desacelerar. Seu bem-estar vem em primeiro lugar.",
        "Lembre-se: você está seguro, aqui e agora.",
        "Permita-se pausar. O mundo pode esperar enquanto você se cuida.",
        "Você não precisa ter todas as respostas agora. Confie no processo.",
        "Sua respiração é sua âncora. Volte para ela sempre que precisar."
    ],
    raivoso: [
        "A raiva é apenas uma chama. Respire fundo e ela se apagará.",
        "Você tem o poder de controlar suas reações. Escolha a paz em vez da raiva.",
        "Antes de reagir com raiva, dê a si mesmo um momento para refletir.",
        "A raiva pode ser uma força destrutiva. Use-a para crescer e não para se machucar.",
        "Desacelere. Sua paz interior vale mais do que a vitória de uma discussão.",
        "Cada respiração calma é um passo em direção à tranquilidade.",
        "Não permita que a raiva controle você. Lembre-se: você é mais forte que ela.",
        "Quando a raiva surgir, pause e lembre-se do que realmente importa.",
        "A raiva é temporária, mas a paz interior é duradoura.",
        "Transforme sua raiva em ação construtiva, não destrutiva."
    ],
    neutro: [
        "A tranquilidade é a base de grandes decisões. Aproveite este momento de paz.",
        "Às vezes, a calma é onde a clareza e a sabedoria surgem.",
        "Você está no controle. Hoje é um novo dia para começar do zero.",
        "Não há pressa. O momento certo para agir virá naturalmente.",
        "A neutralidade pode ser a chave para enxergar as coisas com clareza.",
        "Mesmo quando não há grandes emoções, cada dia tem seu valor.",
        "O equilíbrio é uma força silenciosa que te guia para onde você precisa ir.",
        "Às vezes, não sentir muito é a oportunidade de simplesmente ser.",
        "Em momentos de calma, as melhores ideias e decisões podem surgir.",
        "Cada momento é uma chance de encontrar propósito, mesmo no silêncio."
    ]
};

// Função para alterar a imagem com base no humor
function definirImagemHumor(humor) {
    switch (humor) {
        case "feliz":
            imagemHumor.src = "img/psg1.jpg"; // Caminho da imagem de "feliz"
            break;
        case "triste":
            imagemHumor.src = "img/psg2.png"; // Caminho da imagem de "triste"
            break;
        case "ansioso":
            imagemHumor.src = "img/psg3.png"; // Caminho da imagem de "ansioso"
            break;
        case "raivoso":
            imagemHumor.src = "img/psg4.jpg"; // Caminho da imagem de "raivoso"
            break;
        case "neutro":
            imagemHumor.src = "img/psg5.jpg"; // Caminho da imagem de "neutro"
            break;
    }
}


// Variável global para armazenar o humor atual
let humorAtual = "neutro";

// ---- Registrar humor ----
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const humor = humorInput.value.trim().toLowerCase();
    humorRegistrado.textContent = "Hoje você se sente: " + humor;

    if (frasesPorHumor[humor]) {
        humorAtual = humor;
    } else {
        humorAtual = "neutro";
    }

    definirImagemHumor(humorAtual);
    localStorage.setItem("humor", humorAtual);
    humorInput.value = "";

    const negativos = ["triste", "ansioso", "deprimido", "pensativo"];
    const ehNegativo = negativos.some(palavra => humor.includes(palavra));
    ajudaBtn.style.display = ehNegativo ? "inline-block" : "none";
});


// ---- Mostrar humor salvo ao abrir a página ----
window.addEventListener("load", function() {
    const humorSalvo = localStorage.getItem("humor");
    if (humorSalvo) {
        humorAtual = humorSalvo;
        humorRegistrado.textContent = "Hoje você se sente: " + humorSalvo;

        // Atualiza a imagem com base no humor salvo
        definirImagemHumor(humorSalvo);
    }
});

// ---- Sortear mensagem motivacional relacionada ao humor ----
mensagemBtn.addEventListener("click", function() {
    const frases = frasesPorHumor[humorAtual];
    const indice = Math.floor(Math.random() * frases.length);
    mensagemMotivacional.textContent = frases[indice];
});