const form = document.getElementById("humor-form");
const humorInput = document.getElementById("humor");
const humorRegistrado = document.getElementById("humor-registrado");
const mensagemBtn = document.getElementById("mensagem-btn");
const mensagemMotivacional = document.getElementById("mensagem-motivacional");


const frasesPorHumor = {
    feliz: [
        "Continue espalhando essa energia positiva!",
        "Aproveite cada momento de alegria!",
        "Sua felicidade pode inspirar outras pessoas."
    ],
    triste: [
        "Tudo bem não estar bem o tempo todo.",
        "Você não está sozinho, tudo vai melhorar.",
        "Seja gentil consigo mesmo hoje."
    ],
    ansioso: [
        "Respire fundo, um passo de cada vez.",
        "Acalme sua mente, você está fazendo o seu melhor.",
        "Foque no agora, o futuro se constrói aos poucos."
    ],
    motivado: [
        "Aproveite essa motivação para realizar algo importante!",
        "Você tem tudo o que precisa para vencer.",
        "Continue firme, seus esforços terão resultado."
    ],
    neutro: [
        "Cada dia é uma nova oportunidade.",
        "O equilíbrio também é essencial.",
        "Cuide de si mesmo, mesmo nos dias comuns."
    ]
};