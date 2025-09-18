# Painel do Bem-Estar  

O **Painel do Bem-Estar** é uma aplicação web criada com **HTML, CSS e JavaScript** que permite ao usuário registrar o humor do dia, receber mensagens motivacionais e visualizar imagens relacionadas ao estado emocional informado.  

Mais do que um simples exercício de programação, este projeto está conectado à campanha **Setembro Amarelo**, reforçando a importância do cuidado com a saúde mental. Ao registrar suas emoções, o usuário pratica a **auto-observação** e encontra frases de incentivo que podem aliviar momentos de dificuldade.  

---

## Índice

* [Funcionalidades](#funcionalidades)
* [Tecnologias](#tecnologias)
* [Estrutura](#estrutura)
* [Relacao_com_setembro_amarelo](#relação-com-o-setembro-amarelo)
* [Autor(a)](#autora)

---

## Funcionalidades  
- Registrar o **humor do dia**.  
- Visualizar o **humor registrado** diretamente na tela.  
- Exibir uma **imagem correspondente** ao humor informado.  
- Receber **mensagens motivacionais aleatórias** relacionadas ao humor atual.  
- Armazenamento do humor no **Local Storage**, garantindo que os dados permaneçam mesmo após atualizar a página.  

---

##  Tecnologias 
- **HTML5**  
- **CSS3**  
- **JavaScript**
- **Git**
- **Github**

---

## Estrutura  

A aplicação é formada por três camadas principais:  

### 1. **HTML (Estrutura da Página)**  
Define os elementos visuais, como o formulário para inserir o humor, o botão para receber mensagens e a área onde elas aparecem.  

```html
<form id="humor-form">
  <label for="humor">Como você está se sentindo hoje?</label><br>
  <input type="text" id="humor" placeholder="Ex: Feliz, Ansioso, Tranquilo">
  <button type="submit">Registrar Humor</button>
</form>

<p id="humor-registrado"></p>
<button id="mensagem-btn">Receber mensagem motivacional</button>
<p id="mensagem-motivacional"></p>
<img src="" alt="" id="imagem-humor">
```

➡️ Aqui temos:

Um input para o usuário digitar como está se sentindo.

Um botão que registra o humor.

Um segundo botão para gerar mensagens motivacionais.

Um espaço para exibir texto e imagem referentes ao humor informado.

### 2. **CSS (Estilização e Layout)**

Responsável por dar cores, fontes e organização à página, transmitindo acolhimento e leveza.

```css:
body {
  font-family: Arial, sans-serif;
  background-color: #702c8b;
  text-align: center;
  padding: 20px;
}

button {
  background-color: #c903f5;
  color: #000;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
}

button:hover {
  background-color: #007777;
}
```

➡️ O CSS cria um ambiente visual aconchegante, com cores vibrantes, botões arredondados e efeitos de destaque ao passar o mouse.

### 3. **JavaScript (Lógica da Aplicação)**

Gera dinamismo, manipula o DOM e exibe mensagens motivacionais de acordo com o humor registrado.

Registro e salvamento do humor:
```form.addEventListener("submit", function(event) {
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
});
```

➡️ Este trecho:

Captura o humor digitado pelo usuário.

Exibe o resultado na tela.

Define a imagem correspondente.

Armazena o humor no Local Storage para manter o dado mesmo após atualizar a página.

Exibição de mensagens motivacionais:
```mensagemBtn.addEventListener("click", function() {
  const frases = frasesPorHumor[humorAtual];
  const indice = Math.floor(Math.random() * frases.length);
  mensagemMotivacional.textContent = frases[indice];
});
```

➡️ Este trecho:

Seleciona aleatoriamente uma frase motivacional associada ao humor atual.

Exibe a mensagem na tela.

Associação de imagens com o humor:
```function definirImagemHumor(humor) {
  switch (humor) {
    case "feliz":
      imagemHumor.src = "img/psg1.jpg";
      break;
    case "triste":
      imagemHumor.src = "img/psg2.png";
      break;
    case "ansioso":
      imagemHumor.src = "img/psg3.png";
      break;
    case "raivoso":
      imagemHumor.src = "img/psg4.jpg";
      break;
    case "neutro":
      imagemHumor.src = "img/psg5.jpg";
      break;
  }
}
```

➡️ Aqui, cada emoção registrada pelo usuário é associada a uma imagem diferente, tornando a experiência mais visual e acolhedora.

## Relação com o Setembro Amarelo

O Setembro Amarelo é a campanha de prevenção ao suicídio e promoção da vida. O Painel do Bem-Estar dialoga com essa causa ao oferecer:

Um espaço para reflexão diária sobre como o usuário está se sentindo.

Mensagens de apoio que lembram que momentos difíceis são temporários.

Uma forma leve de exercitar o autocuidado emocional.

⚠️ Este projeto não substitui acompanhamento psicológico ou médico, mas pode ser um recurso de apoio para reforçar a importância de olhar para si mesmo e buscar ajuda quando necessário.

## Autor(a)

O projeto foi desenvolvido por:
* Vivian Oliveira Almeida

Sob tutelagem e auxílio do professor:
* Symon Pereira de Morais