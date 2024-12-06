const readline = require('readline');

// Configura a interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Variável para armazenar o nome do jogador
let playerName = '';


// Função para iniciar o jogo
function startGame() {

    console.log("Bem-vindo(a) a 'The Call of Shadows'!\n\
        Você está prestes a embarcar em uma jornada sombria e cheia de mistérios em um acampamento isolado, onde lendas sombrias ganham vida. \n\
        Você terá a chance de se tornar um(a) dos(as) investigadores(as) corajosos(as) que se aventuram a desvendar os segredos ocultos que assombram esse local.\n\
        Prepare-se para explorar os cantos mais sombrios deste acampamento macabro, mergulhando em locais sinistros e cenários ricamente detalhados. \n\
        Cada escolha que você fizer moldará o curso da história, levando a múltiplos desfechos possíveis.\n\
        Desvende os segredos ocultos do passado e enfrente os terrores que espreitam nas sombras. \n\
        Sua coragem será testada enquanto você desvenda os mistérios de 'O Chamado das Sombras'.");
        
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");
    rl.question("Digite '1' para iniciar sua jornada   ou   '2' para deixar a escuridão para trás.: ", (choice) => {
        if (choice === '1') {
            console.log("Ótimo! Vamos começar.");
            // Chamar a função para começar o jogo
            rl.question("Antes de começar, por favor, diga-nos o seu nome: ", (name) => {
                if (name.trim() === '') {
                    console.log("Por favor, insira um nome válido.");
                    startGame(); // Reiniciar o processo se nenhum nome for fornecido
                    return; // Adicionar um return para evitar a execução adicional do código
                }

                playerName = name.trim();
                console.log(`Ótimo, você será conhecido como ${playerName} nesta aventura.`);
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");
                // Iniciar a primeira pergunta aqui
                explorarCamp();
            });
        } else if (choice === '2') {
            console.log("Até logo! Esperamos vê-lo(a) novamente em breve.!");
            rl.close();
        } else {
            console.log("Opção inválida. Por favor, escolha novamente.");
            // Se a escolha não for válida, reiniciar a função startGame()
            startGame();
        }
    });
}

console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");

// Função principal para explorar o acampamento
function explorarCamp() {
    console.log("Você decide explorar o acampamento abandonado."); // Mensagem inicial de escolha
    console.log("Enquanto explora, você encontra uma cabana misteriosa escondida entre as árvores.");
    console.log("Você decide:");
    console.log("1. Investigar a cabana.");
    console.log("2. Explorar os arredores do acampamento.");
    rl.question("Escolha uma opção (digite o número correspondente): ", (choice) => {
        // Estrutura switch para tratar a escolha do usuário
        switch (choice) {
            case '1':
                investigarCabana(); // Chama a função para investigar a cabana
                break;
            case '2':
                explorarArredores(); // Chama a função para explorar os arredores
                break;
            default:
                console.log("Opção inválida. Por favor, escolha novamente."); // Mensagem de erro para escolha inválida
                explorarCamp(); // Reinicia a função para nova escolha
        }
    });
}

console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");

// Função para investigar a cabana
function investigarCabana() {
    console.log("Você decide investigar a cabana."); // Mensagem inicial de escolha
    console.log("Ao entrar na cabana, você encontra alguns itens em cima de uma mesa empoeirada.");
    console.log("Você decide:");
    console.log("1. Pegar o diário.");
    console.log("2. Pegar uma faca que está no chão.");
    console.log("3. Sair da cabana.");
    rl.question("Escolha uma opção (digite o número correspondente): ", (choice) => {
        // Estrutura switch para tratar a escolha do usuário
        switch (choice) {
            case '1':
                Diario(); // Chama a função para pegar o diário
                break;
            case '2':
                Faca(); // Chama a função para pegar a faca
                break;
            case '3':
                CorrerCabana(); // Chama a função para sair da cabana
                break;
            default:
                console.log("Opção inválida. Por favor, escolha novamente."); // Mensagem de erro para escolha inválida
                investigarCabana(); // Reinicia a função para nova escolha
        }
    });
}

console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");

// Função para pegar o diário
function Diario() {
    console.log("Você decide pegar o diário."); // Mensagem inicial de escolha
    console.log("Ao abrir o diário, você encontra um diário antigo em cima de uma mesa empoeirada.");
    console.log("Você decide:");
    console.log("1. Ler agora.");
    console.log("2. Ler no final.");
    rl.question("Escolha uma opção (digite o número correspondente): ", (choice) => {
        // Estrutura switch para tratar a escolha do usuário
        switch (choice) {
            case '1':
                LerAgora(); // Chama a função para ler o diário agora
                break;
            case '2':
                LerFinal(); // Chama a função para ler o diário no final
                break;
            default:
                console.log("Opção inválida. Por favor, escolha novamente."); // Mensagem de erro para escolha inválida
                Diario(); // Reinicia a função para nova escolha
        }
    });
}

console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");

// Função para ler o diário agora
function LerAgora() {
    console.log("Ao abrir o diário, você encontra os segredos da criatura..."); // Mensagem inicial de escolha
    console.log("Você ouve rastejos...");
    console.log("Cada vez mais próximos...");
    console.log("1. Esconder-se");
    console.log("2. Fugir");
    rl.question("Escolha uma opção (digite o número correspondente): ", (userInput) => {
        // Estrutura switch para tratar a escolha do usuário
        switch (userInput) {
            case '1':
                Esconder(); // Chama a função para se esconder
                break;
            case '2':
                Fugir(); // Chama a função para fugir
                break;
            default:
                console.log("Opção inválida. Por favor, escolha novamente."); // Mensagem de erro para escolha inválida
                LerAgora(); // Reinicia a função para nova escolha
        }
    });
}

console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");

// Função para fugir
function Fugir() {
    console.log("O monstro te encontra..."); // Mensagem inicial de escolha
    console.log("Você tenta golpeá-lo!!!");
    console.log(`Você foi certeira(o) ${playerName}! FUJA, FUJA!`);
    console.log("1. Fugir pela floresta.");
    console.log("2. Fugir pela estrada.");
    rl.question("Escolha uma opção (digite o número correspondente): ", (userInput) => {
        // Estrutura switch para tratar a escolha do usuário
        switch (userInput) {
            case '1':
                Floresta(); // Chama a função para fugir pela floresta
                break;
            case '2':
                Estrada(); // Chama a função para fugir pela estrada
                break;
            default:
                console.log("Opção inválida. Por favor, escolha novamente."); // Mensagem de erro para escolha inválida
                Fugir(); // Reinicia a função para nova escolha
        }
    });
}


console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");

// Função para a rota de fuga pela estrada
function Estrada() {
    console.log("...");
    console.log("CORRA O MAIS RÁPIDO QUE PUDER!");
    console.log("Você está sem fôlego. De repente, ouve um grito desesperador!");
    console.log("Criatura: -'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!!!!!!!!!!!!!!!!!!!!'");
    console.log("A criatura está atrás de você NOVAMENTE!");
    console.log("Você corre, corre, corre mais do que pode, com todas as suas forças!");
    console.log("De repente, ouve outro grito!");
    console.log("...");
    console.log("Seu coração acelera!!!");
    console.log("A criatura está cada vez mais próxima!");
    console.log("...");
    console.log("1. Gritar e pedir ajuda");
    console.log("2. Continuar correndo");
    
    rl.question("Escolha uma opção (digite o número correspondente): ", (userInput) => {
        // Estrutura switch para tratar a escolha do usuário
        switch (userInput) {
            case '1':
                ajuda(); // Continua o jogo com a função ajuda
                break;
            case '2':
                continuar(); // Continua o jogo com a função continuar
                break;
            default:
                console.log("Opção inválida. Por favor, escolha novamente."); // Mensagem de erro para escolha inválida
                Estrada(); // Reinicia a função para nova escolha
                break;
        }
    });
}

console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");

// Função para quando o jogador decide pedir ajuda
function ajuda() {
    console.log("...");
    console.log("VOCÊ GRITA PEDINDO AJUDA");
    console.log("O MONSTRO TE OUVE E ESTÁ CADA VEZ MAIS PRÓXIMO!!");
    console.log("Criatura: -'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!!!!!!!!!!!!!!!!!!!!'");
    console.log("...");
    console.log("Estando distante o suficiente, você liga para a polícia.");
    console.log("Eles estão a caminho!!!");
    console.log("...");
    console.log("Seu coração acelera!!!");
    console.log("1. Esconder-se");
    console.log("2. Continuar correndo");
    
    rl.question("Escolha uma opção (digite o número correspondente): ", (userInput) => {
        // Estrutura switch para tratar a escolha do usuário
        switch (userInput) {
            case '1':
                Esconder(); // Chama a função para se esconder
                break;
            case '2':
                Correr(); // Chama a função para continuar correndo
                break;
            default:
                console.log("Opção inválida. Por favor, escolha novamente."); // Mensagem de erro para escolha inválida
                ajuda(); // Reinicia a função para nova escolha
                break;
        }
    });
}

console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");

// Função para continuar correndo
function Correr() {
    console.log("...");
    console.log("Você está sem fôlego. De repente, ouve um grito desesperador!");
    console.log("Criatura: -'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!!!!!!!!!!!!!!!!!!!!'");
    console.log("...");
    console.log("Seu coração acelera!!!");
    console.log("...");
    console.log("...");
    console.log("Você escapou.");
    console.log("Longe o suficiente da criatura, você decide:");
    console.log("1. Esperar parado por ajuda");
    console.log("2. Ir para a mansão Maple Hills");
    
    rl.question("Escolha uma opção (digite o número correspondente): ", (userInput) => {
        // Estrutura switch para tratar a escolha do usuário
        switch (userInput) {
            case '1':
                Esconder(); // Chama a função para se esconder
                break;
            case '2':
                mansao(); // Chama a função para ir à mansão
                break;
            default:
                console.log("Opção inválida. Por favor, escolha novamente."); // Mensagem de erro para escolha inválida
                Correr(); // Reinicia a função para nova escolha
                break;
        }
    });
}

console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");

// Função para ir à mansão
function mansao() {
    console.log("...");
    console.log(`Algum tempo depois, ${playerName} chega na mansão Maple Hills!`);
    console.log("...");
    console.log("...");
    console.log("Ao entrar, a sala se encontra devastada. Para entender o motivo, você decide explorar!");
    console.log("...");
    console.log("Subindo para os quartos, você vê algo diferente na parede...");
    console.log("...");
    console.log("...");
    console.log("É um rifle!");
    console.log("1. Deixá-lo ali.");
    console.log("2. Ficar com o rifle.");
    
    rl.question("Escolha uma opção (digite o número correspondente): ", (userInput) => {
        // Estrutura switch para tratar a escolha do usuário
        switch (userInput) {
            case '1':
                deixar(); // Chama a função para deixar o rifle
                break;
            case '2':
                ficar(); // Chama a função para ficar com o rifle
                break;
            default:
                console.log("Opção inválida. Por favor, escolha novamente."); // Mensagem de erro para escolha inválida
                mansao(); // Reinicia a função para nova escolha
                break;
        }
    });
}

console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");

// Função para ler o diário no final
function LerFinal() {
    console.log("Você decidiu ler no final.");
    console.log("A porta está sendo levemente arranhada!");
    console.log("1. Ir explorar fora da cabana.");
    console.log("2. Se esconder.");
    
    rl.question("Escolha uma opção (digite o número correspondente): ", (userInput) => {
        // Estrutura switch para tratar a escolha do usuário
        switch (userInput) {
            case '1':
                explorarArredores(); // Chama a função para explorar os arredores
                break;
            case '2':
                Esconder(); // Chama a função para se esconder
                break;
            default:
                console.log("Opção inválida. Por favor, escolha novamente."); // Mensagem de erro para escolha inválida
                LerFinal(); // Reinicia a função para nova escolha
                break;
        }
    });
}

console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");

// Função para explorar os arredores
function explorarArredores() {
    console.log("Você decidiu explorar!!");
    console.log("E lá vamos nós!!!");
    console.log("1. Explorar a floresta.");
    console.log("2. Explorar o riacho.");
    
    rl.question("Escolha uma opção (digite o número correspondente): ", (userInput) => {
        // Estrutura switch para tratar a escolha do usuário
        switch (userInput) {
            case '1':
                Floresta(); // Chama a função para explorar a floresta
                break;
            case '2':
                Riacho(); // Chama a função para explorar o riacho
                break;
            default:
                console.log("Opção inválida. Por favor, escolha novamente."); // Mensagem de erro para escolha inválida
                explorarArredores(); // Reinicia a função para nova escolha
                break;
        }
    });
}

console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");


// Função para explorar o riacho
function Riacho() {
    console.log("Você ouve passos...");
    console.log("Cada vez mais próximos....");
    console.log("1. Fugir");
    console.log("2. Esperar e ver o que é.");
    
    rl.question("Escolha uma opção (digite o número correspondente): ", (userInput) => {
        // Estrutura switch para tratar a escolha do usuário
        switch (userInput) {
            case '1':
                Fugir(); // Caso fuja, tem 2 opções que geram desfechos diferentes
                break;
            case '2': // Gera outro desfecho
                ver();
                break;
            default:
                console.log("Opção inválida. Por favor, escolha novamente.");
                Riacho(); // Reinicia a função para nova escolha
                break;
        }
    });
}

console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");

// Função para ver o que está se aproximando
function ver() {
    console.log("Os passos estão cada vez mais próximos...");
    console.log("...");
    console.log("...");
    console.log("...");
    console.log("Era só um coelho assustado!");
    console.log("1. Pegar o bote e continuar explorando");
    console.log("2. Brincar com o coelho");
    
    rl.question("Escolha uma opção (digite o número correspondente): ", (userInput) => {
        // Estrutura switch para tratar a escolha do usuário
        switch (userInput) {
            case '1':
                SalvaBote(); // Chama a função para pegar o bote
                break;
            case '2':
                brincar(); // Chama a função para brincar com o coelho
                break;
            default:
                console.log("Opção inválida. Por favor, escolha novamente.");
                ver(); // Reinicia a função para nova escolha
                break;
        }
    });
}

console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");

// Função para explorar com o bote, levando à mansão Maple Hills
function SalvaBote() {
    console.log("Você entrou no bote.");
    console.log("Não esqueça do colete salva-vidas!");
    console.log("Ao entrar no bote, uma criatura de outro mundo tenta te agarrar.");
    console.log("...");
    console.log("Você desvia!!!");
    console.log("1. Pular no riacho");
    console.log("2. Correr");
    
    rl.question("Escolha uma opção (digite o número correspondente): ", (userInput) => {
        // Estrutura switch para tratar a escolha do usuário
        switch (userInput) {
            case '1':
                pulo(); // Chama a função para pular no riacho
                break;
            case '2':
                Correr(); // Chama a função para correr
                break;
            default:
                console.log("Opção inválida. Por favor, escolha novamente.");
                SalvaBote(); // Reinicia a função para nova escolha
                break;
        }
    });
}

console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");

// Função para quando o jogador decide pular no riacho
function pulo() {
    console.log("Você está nadando, o mais rápido que pode!");
    console.log("A criatura avista você.");
    console.log("Sem fôlego, você persiste...");
    console.log("Você deixa a criatura para trás.");
    console.log("....");
    console.log("Após algum tempo, você avista uma cas-- MANSÃO!");
    console.log("Vá explorá-la.");
    console.log("1. Explorar a floresta");
    console.log("2. Explorar a mansão");
    
    rl.question("Escolha uma opção (digite o número correspondente): ", (userInput) => {
        // Estrutura switch para tratar a escolha do usuário
        switch (userInput) {
            case '1':
                Floresta(); // Chama a função para explorar a floresta
                break;
            case '2':
                mansao(); // Chama a função para explorar a mansão
                break;
            default:
                console.log("Opção inválida. Por favor, escolha novamente.");
                pulo(); // Reinicia a função para nova escolha
                break;
        }
    });
}

console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");

// Função para quando o jogador decide brincar com o coelho
function brincar() {
    console.log("Você agora ouve pisadas!");
    console.log("Mas não são leves!");
    console.log("São agonizantes.");
    console.log("A criatura corre para cima de você!!!");
    console.log("1. Esquivar");
    console.log("2. Pular na água");
    
    rl.question("Escolha uma opção (digite o número correspondente): ", (userInput) => {
        // Estrutura switch para tratar a escolha do usuário
        switch (userInput) {
            case '1':
                Esquivar(); // Chama a função para esquivar
                break;
            case '2':
                pulo(); // Chama a função para pular na água
                break;
            default:
                console.log("Opção inválida. Por favor, escolha novamente.");
                brincar(); // Reinicia a função para nova escolha
                break;
        }
    });
}

console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");

// Função para quando o jogador decide esquivar
function Esquivar() {
    console.log("Você escapou!");
    console.log("CORRA, CORRA!!!");
    console.log("...");
    console.log("1. Correr pela floresta");
    console.log("2. Correr pela estrada");
    
    rl.question("Escolha uma opção (digite o número correspondente): ", (userInput) => {
        // Estrutura switch para tratar a escolha do usuário
        switch (userInput) {
            case '1':
                Floresta(); // Chama a função para correr pela floresta
                break;
            case '2':
                Estrada(); // Chama a função para correr pela estrada
                break;
            default:
                console.log("Opção inválida. Por favor, escolha novamente.");
                Esquivar(); // Reinicia a função para nova escolha
                break;
        }
    });
}


console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");


// Opção 2 de dentro da cabana.
function Faca() {
    console.log("Você pega a faca. Ela parece afiada. O que você fará em seguida?");
    console.log("1. Procurar por mais itens na cabana.");
    console.log("2. Guardar a Faca");
    
    rl.question("Escolha uma opção (digite o número correspondente): ", (userInput) => {
        switch (userInput) {
            case '1':
                Procurar();
                break;
            case '2':
                Guardar(); // explorar lá fora
                break;
            default:
                console.log("Opção inválida. Por favor, escolha novamente.");
                Faca();
                break;
        }
    });
}

console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");

// Função que lida com a ação de procurar por mais itens na cabana
function Procurar() {
    console.log("Você está na busca de novos itens.");
    console.log(".....");
    console.log("Você encontra um diário empoeirado.");
    console.log("1. Ler o diário AGORA");
    console.log("2. Ler Depois");
    
    rl.question("Escolha uma opção (digite o número correspondente): ", (userInput) => {
        switch (userInput) {
            case '1':
                LerAgora(); // Chama a função LerAgora se a opção 1 for escolhida
                break;
            case '2':
                LerFinal(); // Chama a função LerFinal se a opção 2 for escolhida
                break;
            default:
                console.log("Opção inválida. Por favor, escolha novamente.");
                Procurar(); // Chama a função Procurar novamente se a entrada for inválida
                break;
        }
    });
}

console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");

// Função que lida com a ação de guardar a faca
function Guardar() {
    console.log("ITEM DESBLOQUEADO!");
    console.log("FAQUINHA.");
    console.log(`${playerName} guardou a faca!`);
    console.log("Você continuou procurando por mais itens.");
    console.log("...");
    console.log("De repente.....");
    console.log("A porta começa a ser levemente arranhada!");
    console.log("1. Ir Explorar fora da cabana!");
    console.log("2. Se esconder!");
    
    rl.question("Escolha uma opção (digite o número correspondente): ", (userInput) => {
        switch (userInput) {
            case '1':
                exploreSurroundings(); // Chama a função exploreSurroundings se a opção 1 for escolhida
                break;
            case '2':
                Esconder(); // Chama a função Esconder se a opção 2 for escolhida
                break;
            default:
                console.log("Opção inválida. Por favor, escolha novamente.");
                Guardar(); // Chama a função Guardar novamente se a entrada for inválida
                break;
        }
    });
}

console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");

// Função que lida com a ação de sair correndo da cabana
function CorrerCabana() {
    console.log("1. Ir pela floresta.");
    console.log("2. Ir pela estrada.");
    
    rl.question("Escolha uma opção (digite o número correspondente): ", (userInput) => {
        switch (userInput) {
            case '1':
                Floresta(); // Chama a função Floresta se a opção 1 for escolhida
                break;
            case '2':
                Estrada(); // Chama a função Estrada se a opção 2 for escolhida
                break;
            default:
                console.log("Opção inválida. Por favor, escolha novamente.");
                CorrerCabana(); // Chama a função CorrerCabana novamente se a entrada for inválida
                break;
        }
    });
}

console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");

// Função que lida com o desfecho de game over na floresta
function Floresta() {
    console.log("...");
    console.log("CORRA O MAIS RÁPIDO QUE PODE!");
    console.log("Você está sem fôlego. De repente ouve um Grito DESESPERADOR!");
    console.log("Criatura: -'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!!!!!!!!!!!!!!!!!!!!'");
    console.log("A criatura está atrás de você NOVAMENTE!");
    console.log("Você corre, corre, corre mais do que pode, com todas suas forças!");
    console.log("De repente ouve outro Grito!");
    console.log("...");
    console.log("Seu coração acelera!!!");
    console.log("Você decide correr para a estrada, mas tropeça em uma raiz e cai.");
    console.log("Enquanto você tenta se levantar, a criatura se aproxima e você percebe que não pode escapar.");
    console.log("Com um último suspiro, você fecha os olhos e aguarda o inevitável.");
    console.log("O grito da criatura ecoa em sua mente enquanto tudo fica escuro...");
    console.log("GAME OVER!");
    console.log("Jogar novamente ou sair?");
    
    rl.question("Digite '1' para sair ou '2' para jogar novamente: ", (choice) => {
        if (choice === '1') {
            console.log("Até logo!");
            rl.close(); // Fecha a interface de readline se a opção 1 for escolhida
        } else if (choice === '2') {
            startGame(); // Chama a função startGame se a opção 2 for escolhida
        } else {
            console.log("Opção inválida. Por favor, escolha novamente.");
            Floresta(); // Chama a função Floresta novamente se a entrada for inválida
        }
    });
}

console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");

// Função que lida com a opção de continuar na estrada
function Estrada() {
    console.log("...");
    console.log("CORRA O MAIS RÁPIDO QUE PODE!");
    console.log("Você está sem fôlego. De repente ouve um Grito DESESPERADOR!");
    console.log("Criatura: -'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!!!!!!!!!!!!!!!!!!!!'");
    console.log("A criatura está atrás de você NOVAMENTE!");
    console.log("Você corre, corre, corre mais do que pode, com todas suas forças!");
    console.log("De repente ouve outro Grito!");
    console.log("...");
    console.log("Seu coração acelera!!!");
    console.log("a criatura está cada vez mais próxima!");
    console.log("...");

    console.log("1. Gritar e pedir Ajuda");
    console.log("2. Continuar Correndo");

    // Pergunta ao usuário qual opção ele deseja escolher
    rl.question("Escolha uma opção (digite o número correspondente): ", (userInput) => {
        switch (userInput) {
            case '1':
                ajuda(); // Chama a função ajuda se a opção 1 for escolhida
                break;
            case '2':
                continuar(); // Chama a função continuar se a opção 2 for escolhida
                break;
            default:
                console.log("Opção inválida. Por favor, escolha novamente.");
                Estrada(); // Chama a função Estrada novamente se a entrada for inválida
                break;
        }
    });
}

console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");

// Função que lida com a opção de se esconder
function Esconder() {
    console.log("...");
    console.log("PERMANEÇA EM SILÊNCIO!");
    console.log("Você está sem fôlego. De repente ouve um Grito DESESPERADOR!");
    console.log("Criatura: -'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!!!!!!!!!!!!!!!!!!!!'");
    console.log("DE REPENTE VOCÊ É PUXADO!");
    console.log(`${playerName} TENTA SE SOLTAR MAS SUAS FORÇAS JÁ NÃO EXISTEM MAIS.`);
    console.log("...");
    console.log("Seu coração acelera!!!");
    console.log("!!!!!!!!!!!!!!!!!!!!!");
    console.log("Com um último suspiro, você fecha os olhos e aguarda o inevitável.");
    console.log("O grito da criatura ecoa em sua mente enquanto tudo fica escuro...");
    console.log("GAME OVER!");
    console.log("Jogar novamente ou sair?");
    // Pergunta ao usuário se ele quer jogar novamente ou sair
    rl.question("Digite '1' para sair ou '2' para jogar novamente: ", (choice) => {
        if (choice === '1') {
            console.log("Até logo!");
            rl.close(); // Fecha a interface de readline se a opção 1 for escolhida
        } else if (choice === '2') {
            startGame(); // Chama a função startGame se a opção 2 for escolhida
        } else {
            console.log("Opção inválida. Por favor, escolha novamente.");
            Esconder(); // Chama a função Esconder novamente se a entrada for inválida
        }
    });
}

console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");

// Função que lida com o desfecho de vitória na estrada
function continuar() {
    console.log("Você finalmente encontra a estrada!");
    console.log("Um homem vê seu desespero e oferece ajuda.");
    console.log("Você entra no carro!");
    console.log("E é levado para longe dali! Assim ficando seguro.");
    console.log("YOUR WIN!!! Você venceu a aventura");
    console.log("Jogar novamente ou sair?");
    // Pergunta ao usuário se ele quer jogar novamente ou sair
    rl.question("Digite '1' para sair ou '2' para jogar novamente: ", (choice) => {
        if (choice === '1') {
            console.log("Até logo!");
            rl.close(); // Fecha a interface de readline se a opção 1 for escolhida
        } else if (choice === '2') {
            startGame(); // Chama a função startGame se a opção 2 for escolhida
        } else {
            console.log("Opção inválida. Por favor, escolha novamente.");
            continuar(); // Chama a função continuar novamente se a entrada for inválida
        }
    });
}

console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");

// Função que lida com o desfecho de ser puxado e deixar o rifle
function deixar() {
    console.log("...");
    console.log("VOCÊ OUVE UM RANGER DE PORTAS!");
    console.log("O MONSTRO SENTE SEU CHEIRO!");
    console.log("Criatura: -'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!!!!!!!!!!!!!!!!!!!!'");
    console.log("DE REPENTE VOCÊ É PUXADO!");
    console.log(`${playerName} TENTA SE SOLTAR MAS SUAS FORÇAS JÁ NÃO EXISTEM MAIS.`);
    console.log("...");
    console.log("Seu coração acelera!!!");
    console.log("!!!!!!!!!!!!!!!!!!!!!!");
    console.log("Com um último suspiro, você fecha os olhos e aguarda o inevitável.");
    console.log("O grito da criatura ecoa em sua mente enquanto tudo fica escuro...");
    console.log("Jogar novamente ou sair?");
    // Pergunta ao usuário se ele quer jogar novamente ou sair
    rl.question("Digite '1' para sair ou '2' para jogar novamente: ", (choice) => {
        if (choice === '1') {
            console.log("Até logo!");
            rl.close(); // Fecha a interface de readline se a opção 1 for escolhida
        } else if (choice === '2') {
            startGame(); // Chama a função startGame se a opção 2 for escolhida
        } else {
            console.log("Opção inválida. Por favor, escolha novamente.");
            deixar(); // Chama a função deixar novamente se a entrada for inválida
        }
    });
}

console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");

// Função que lida com o desfecho de ficar com o rifle
function ficar() { 
    console.log("...");
    console.log("VOCÊ OUVE UM RANGER DE PORTAS!");
    console.log("O MONSTRO SENTE SEU CHEIRO!");
    console.log("Criatura: -'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!!!!!!!!!!!!!!!!!!!!'");
    console.log("DE REPENTE VOCÊ É PUXADO!");
    console.log(`${playerName} TENTA SE SOLTAR MAS SUAS FORÇAS JÁ NÃO EXISTEM MAIS.`);
    console.log("...");
    console.log("Seu coração acelera!!!");
    console.log("DALE BALA!");
    console.log("ATINGINDO O MONSTRO DE FORMA CERTIRA!");
    console.log("ASSIM TIRANDO A VIDA DELE!");
    console.log(`Venceu! Parabéns ${playerName}, você foi considerado um herói(a)!!!`);
    console.log("Jogar novamente ou sair?");
    // Pergunta ao usuário se ele quer jogar novamente ou sair
    rl.question("Digite '1' para sair ou '2' para jogar novamente: ", (choice) => {
        if (choice === '1') {
            console.log("Até logo!");
            rl.close(); // Fecha a interface de readline se a opção 1 for escolhida
        } else if (choice === '2') {
            startGame(); // Chama a função startGame se a opção 2 for escolhida
        } else {
            console.log("Opção inválida. Por favor, escolha novamente.");
            ficar(); // Chama a função ficar novamente se a entrada for inválida
        }
    });
}

startGame(); // Chama a função startGame para iniciar o jogo