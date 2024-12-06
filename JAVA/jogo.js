let playerLocation = "cabana";
let mrTigerMood = "calmo";
let playerAlive = true;

function sairFora() {
  if (mrTigerMood === "calmo") {
    console.log("Você sai para fora e vê a bela floresta.");
    playerLocation = "floresta";
    mrTigerMood = "bravo";
    console.log("O Sr. Tigre não gostou que você saísse! Ele te ataca!");
    playerAlive = false;
  } else {
    console.log("O Sr. Tigre está bravo! Você não pode sair.");
  }
}

function fazerFogo() {
  if (playerLocation === "cabana" && mrTigerMood === "calmo") {
    console.log("Você faz um fogo e está quentinho e acolhedor.");
  } else {
    console.log("O Sr. Tigre não gosta de fogo! Ele fica bravo.");
    mrTigerMood = "bravo";
  }
}

function falarComMrTiger() {
  if (mrTigerMood === "calmo") {
    console.log("O Sr. Tigre diz 'Olá, amigo!'");
  } else {
    console.log("O Sr. Tigre rugiu com raiva!");
  }
}

function mrTigerSaiPegarJanta() {
  console.log("O Sr. Tigre diz 'Vou sair para pegar a janta!'");
  mrTigerMood = "bravo";
  console.log("O que você faz?");
  console.log("1. Tentar fugir");
  console.log("2. Tentar conversar com o Sr. Tigre");
  let action = console.log("Digite o número da sua ação:");
  switch (action) {
    case "1":
      console.log("Você tenta fugir, mas o Sr. Tigre é muito rápido!");
      playerAlive = false;
      break;
    case "2":
      console.log("Você tenta conversar com o Sr. Tigre, mas ele não está interessado.");
      break;
    default:
      console.log("Ação inválida.");
  }
}

// Game loop
while (playerAlive) {
  console.log(`Você está na ${playerLocation}`);
  console.log("O que você quer fazer?");
  console.log("1. Sair para fora");
  console.log("2. Fazer fogo");
  console.log("3. Falar com o Sr. Tigre");
  let action = prompt("Digite o número da sua ação:");
  switch (action) {
    case "1":
      sairFora();
      break;
    case "2":
      fazerFogo();
      break;
    case "3":
      falarComMrTiger();
      break;
    default:
      console.log("Ação inválida.");
  }
  if (Math.random() < 0.2) {
    mrTigerSaiPegarJanta();
  }
  if (!playerAlive) {
    console.log("Você foi morto pelo Sr. Tigre! Game over.");
    break;
  }
}