const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function perguntar(pergunta) {
    return new Promise((resolve) => rl.question(pergunta, resolve));
}

async function iniciarJogo() {
    console.log("Bem-vindo ao Met Gala, a noite mais glamorosa da moda! Você é um convidado especial neste evento exclusivo, onde celebridades, fashionistas e ícones culturais se reúnem para uma celebração única da moda contemporânea. Prepare-se para uma jornada cheia de estilo, glamour e escolhas que moldarão sua experiência nesta festa deslumbrante. O destino está em suas mãos enquanto você navega pelos corredores ornamentados do Metropolitan Museum of Art, encontrando uma constelação de estrelas da moda e participando de eventos especiais. Suas escolhas não só refletirão seu estilo pessoal, mas também influenciarão seus relacionamentos e oportunidades nesta noite mágica. Então, vista-se com seu melhor traje e embarque nesta jornada inesquecível através do mundo fascinante do Met Gala.");
    console.log("|_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_|")
    const perguntarComValidacao = async (pergunta) => {
        let resposta;
        while (true) {
            resposta = await perguntar(pergunta);
            if (resposta === '-') {
                rl.close();
            } else if (resposta === 'a' || resposta === 'b' || resposta === 'c') {
                break;
            }else {
                console.log("Resposta inválida. Tente novamente!");
            }
        }
        return resposta;
    };

    while (true) {
        let resposta = await perguntarComValidacao('PERGUNTA 1: \n Chegou a hora de escolher a marca de luxo que representará seu estilo no Met Gala. Qual será sua escolha?: \n     a)Versace\n     b)Gucci\n     c)Chanel\n  Sua resposta:');
        if (resposta === "a") {
            resposta = await perguntarComValidacao('\nPERGUNTA 2: \nVocê chegou ao Met Gala vestindo um deslumbrante vestido da Versace. Sua presença causa um impacto imediato e agora você tem algumas opções sobre como proceder. O que você fará? \n     a)Esnobe seu look\n     b)Seja gentil com todos\n     c)Seje feixação, chamando atenção de todos\n  Sua resposta: ');
            if (resposta === "a") {
                resposta = await perguntarComValidacao('\nPERGUNTA 3: \nQuando você estava subindo as escadas do museu de NY, atiradores invadem o evento! O que você faz?! \n     a)Tentar corre para fora do evento\n     b)Procura outras pessoas pra te ajudar\n     c)Corre pra dentro do evento\n  Sua resposta: ');
                if (resposta === "a") {
                    resposta = await perguntarComValidacao('\nPERGUNTA 4: \nVocê consegue achar um caminho em direção a rua, porém, todos estão apavorados com a sutuação. O que você faz?!\n     a)Apenas correr pr fora do evento\n     b)Criar uma distração pra conseguir sair dali\n     c)Tentar sair devagar abaixado(a) no meio da multidão\n  Sua resposta: ');
                    if (resposta === "a") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \nInfelizmente, ao tentar sair você dá de cara com um dos atiradores. Escolha a opção mais parecida com você:\n     a)Entrar em desespero\n     b)Gritar pros seguranças\n     c)Tentar lutar contra o terrorista\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Quando você repara na sua situação atua, um filme de sua vida inteira passa diante de seus olhos, até que \n   *BUUMM*\n  vc ouve um disparo e infelizmente ele acertou seu abdômem.\n     Você falece ali mesmo, uma trajédia :(")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Um dos seguranças atira no terrorista\n   *BUUMM*\n mas vc estava atrás dele, fora do campo de visão do segurança, e morre junto ao terrorista tendo a bala atravesada pelos dois corpos.\n   uma trajédia :(")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Ao tentar lutar com ele, seu drescode rígido te prende ao vestido, assim, perdendo e você acaba sendo sequestrado(a) e nunca mais é visto(a)\n Uma trajédia :(")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "b") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \nVocê avista um garçom passando com uma bandeja de champanhe. Com um movimento rápido e discreto, você faz com que a bandeja caia, espalhando taças e chamando a atenção de todos. Aproveitando o momento de confusão, você se move rapidamente em direção à saída, sorrateiramente. Você consegue abrigo em uma loja ali perto, o que fazer agora?\n     a)Pegue seu celular, rápido!\n     b)Ficr observando toda a situação da janela\n     c)Tentar se esconder dentro da loja\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Você consegue ligar para a polícia e ao mesmo tempo já escuta sirenes palas ruas de Nova Iorque em direção ao museu de moda.\n\n Você consegue escapar praticamente ileso(a)")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Infelizmente um dos atiradores te ve e acha o local e elimina todos ali presente, uma trajédia :(")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Você se encontra com Ariana Grande e conseguem fugir juntos(a), um arraso!")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "c") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \nVocê consegue sair do evento e agora?\n     a)Entrar em um veículo aleatório\n     b)Sair gritando por ajuda\n     c)Corre, SÓ CORRE!\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Você entra na van de Doja Cat e junto com ela, vocês conseguem sair da trajédia que com certeza marcará a história do MetGala")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Você é resgatado(a) por cidadãos comuns de NY e escuta vários desparos de longe, uma trajédia")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Você acaba indo longe e houve barulho de tiros e sirenes, se perdendo em meioa á foresta de concreto de NY")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    }
                } else if (resposta === "b") {
                    resposta = await perguntarComValidacao('\nPERGUNTA 4: \nAssim que você esntende o que está acontecendo ali, imediatamente começa a procurar pessoas pra te ajudar\n     a)Algu famoso\n     b)Seguranças\n     c)Paparasis\n  Sua resposta: ');
                    if (resposta === "a") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \nPor algum motivo você escolhe procurar um de seus colegas de trabalho e o primeiro que avista é:\n     a)Taylor Swift\n     b)Ariana Grande\n     c)Olivia Ridrigo\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Ela é surda e sai correndo, um dos atiradores te acha e vc morre baleado(a) ali mesmo, uma trajédia :(")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Ela olha chorando pra você, te abraça e os dois são sequestrados e nunca mais são vistos, uma trajédia :(")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Ela começa a surtar e começa a correr junto com você em direção a policia lá fora que conseguem neutralizar os terroristas e todos ficam bem.")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "b") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \nVocê foi sensato(a), agora tem que escolher um dos seguranças:\n     a)Se joga na fente de qualquer um\n     b)Corre até um que já está protejendo alguém\n     c)Corre até o segurança mais próximo\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Ele acha que você é um dos terroristas e te elimina ali mesmo, um erro profissional imperdoável :(")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("vixi, ele não era um segurança, já era :(")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Ele te proteje até a saida e vc sai ilesa e corre procurando por ajuda")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "c") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \nPor algum motivo, você prefere procurar ajuda com os paparasis que fotografam cada cena terrível... você decide\n     a)Se jogar na frente deles\n     b)Pedir uma câmera, por gentileza\n     c)Falar pra todo mundo sair correndo\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Eles conseguem te protejer mas só você e alguns deles conseguem sair de lá...")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Você começa a tirar fotos de todos, os flahes deixam os terroristas cegos, pra quem não está acostumado e vocês saem de lá correndo...")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Você sai junto com eles e procuram ajuda, o mais rápido possível")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    }
                } else if (resposta === "c") {
                    resposta = await perguntarComValidacao('\nPERGUNTA 4: \nVocê decide desesperadamente correr para dentro do evento...\n     a)Agarra no braço de alguém e corra para dentro!\n     b)Vá direto pro fundo da área reservada\n     c)Espere algumas pessos entrar para fechar as portas\n  Sua resposta: ');
                    if (resposta === "a") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)Segurança\n     b)Segurança(???)\n     c)Adele\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Você leva um segurança consigo pra dentro do museu, que proteje todos que estão ali dentro")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Infelizmente você não viu quem era, então se enganou e trousse consigo um atirador que foi neutralizado lá dentro, mas antes, te deu um tiro na perna, oq te impossibilitou de andar para sempre")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Ela se assusta, te joga pra longe e vc é pisoteado(a) por todos ali, uma trajédia :(")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "b") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \nAo adenrar no local, você corre diretamente para o fundo do evento...\n     a)Começa a cantar de nervosismo\n     b)Se esconde muito bem\n     c)Sobe em uma mesa(???)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Todos vêm o seu talento, mesmo com tudo acontecendo consegue você consegue cantar desse jeito chamando a atenção de todos ali dentro que escolhem te proteger de tudo...")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Você acha uma saída pro museu e fica lá até tudo acabar, demora muito, mas você sai ileso(a)")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Todos te observam e todos te escutam quando você monta um plano para sair dali, o plano funciona vacês saem por trás do museu e procuram ajuda... Depois disso você fica conhecido(a) por salvar muinta gente desta noite terrível...")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "c") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)Fechou a porta no tempo certo\n     b)Esperou mais para fechar a porta\n     c)Fechar a porta imediatamente\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Na tentativa de dar tempo para mais pessoas entrarem, você hesitou alguns segundos a mais do que o necessário. Esses poucos instantes foram suficientes para que os atiradores alcançassem a entrada do museu. Eles invadiram o salão principal, e em questão de minutos, o terror tomou conta do lugar. A tragédia se desenrolou diante de seus olhos, e poucos conseguiram escapar ilesos.")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Você manteve a calma e esperou até o último momento possível para garantir que o maior número de pessoas entrasse em segurança. Quando os primeiros atiradores começaram a se aproximar da entrada, você e alguns outros convidados conseguiram fechar e trancar as portas com força. Lá dentro, apenas os convidados famosos e alguns seguranças conseguiram entrar. Embora a situação fosse tensa, vocês estavam relativamente seguros, e a polícia foi chamada rapidamente.")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("O pânico e o instinto de sobrevivência tomaram conta de você, e assim que cruzou a entrada, você imediatamente fechou a porta atrás de si. Muitos ficaram para trás, gritando e batendo na porta enquanto os atiradores se aproximavam. A culpa e o arrependimento pesaram em seu coração enquanto os gritos do lado de fora se tornavam mais intensos e depois silenciosos. Você estava a salvo, mas a um custo muito alto.")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    }
                }
            } else if (resposta === "b") {
                resposta = await perguntarComValidacao('\nPERGUNTA 3: \nPoucas pessoas são assim hoje em dia, como você escolheu ser simpático(a) toda a atenção é voltada para ti... agora você sente que alguém está te observando de longe...\n     a)Ariana Grande\n     b)Cardi B\n     c)Meghan Thee Stalion\n  Sua resposta: ');
                if (resposta === "a") {
                    resposta = await perguntarComValidacao('\nPERGUNTA 4: \nVocê consegue achar um caminho em direção à rua, porém, todos estão apavorados com a situação. O que você faz?\n     a) Apenas correr para fora do evento\n     b) Criar uma distração pra conseguir sair dali\n     c) Tentar sair devagar abaixado(a) no meio da multidão\n  Sua resposta: ');
                    if (resposta === "a") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \nInfelizmente, ao tentar sair você dá de cara com um dos atiradores. Escolha a opção mais parecida com você:\n     a) Entrar em desespero\n     b) Gritar pros seguranças\n     c) Tentar lutar contra o terrorista\n  Sua resposta: ');
                        if (resposta === "a") {
                            console.log("Quando você repara na sua situação atual, um filme de sua vida inteira passa diante de seus olhos, até que *BUUMM* você ouve um disparo e infelizmente ele acertou seu abdômen.\n     Você falece ali mesmo, uma tragédia :(");                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b") {
                            console.log("Um dos seguranças atira no terrorista *BUUMM*, mas você estava atrás dele, fora do campo de visão do segurança, e morre junto ao terrorista tendo a bala atravessada pelos dois corpos.\n   uma tragédia :(");                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c") {
                            console.log("Ao tentar lutar com ele, seu dress code rígido te prende ao vestido, assim, perdendo e você acaba sendo sequestrado(a) e nunca mais é visto(a)\n Uma tragédia :(");                           
                            await reiniciarJogo();
                            break;
                        }
                        else {
                            break;
                        }                    
                    } else if (resposta === "b") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \nVocê avista um garçom passando com uma bandeja de champanhe. Com um movimento rápido e discreto, você faz com que a bandeja caia, espalhando taças e chamando a atenção de todos.\n     a) Aproveitar a distração e fugir\n     b) Ajudar a acalmar as pessoas\n     c) Tentar encontrar um lugar seguro\n  Sua resposta: ');
                        if (resposta === "a") {
                            console.log("Você corre em direção à saída enquanto todos estão distraídos com a confusão. Com o coração acelerado, você atravessa as portas e consegue escapar do evento, encontrando a segurança nas ruas.\n Parabéns, você sobreviveu ao ataque!");                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b") {
                            console.log("Você rapidamente começa a acalmar as pessoas ao seu redor, dizendo para todos se abaixarem e ficarem quietos. Sua voz firme e calma ajuda a reduzir o pânico, e logo a polícia entra no local e neutraliza os atiradores.\n Você é elogiado(a) por sua coragem e presença de espírito.");                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c") {
                            console.log("Você olha ao redor e avista uma pequena sala de armazenamento aberta. Com cuidado, você se esgueira para dentro e fecha a porta, segurando a respiração. Você se mantém escondido(a) até que a polícia finalmente chega e controla a situação, resgatando você e os demais sobreviventes.");                           
                            await reiniciarJogo();
                            break;
                        }
                        else {
                            break;
                        }                    
                    } else if (resposta === "c") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \nTentar sair devagar abaixado(a) no meio da multidão.\n     a) Continuar devagar até encontrar uma saída\n     b) Procurar um esconderijo\n     c) Seguir um grupo de pessoas que parece saber o que está fazendo\n  Sua resposta: ');
                        if (resposta === "a") {
                            console.log("Você continua se movendo devagar, mantendo-se abaixado(a) e usando a multidão como cobertura. Depois de alguns minutos tensos, você finalmente avista uma saída de emergência. Com um último empurrão, você atravessa a porta e sente o ar fresco da noite.\n Parabéns, você sobreviveu!");                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b") {
                            console.log("Procurando um lugar seguro, você avista um grande vaso decorativo. Você se esconde atrás dele, tentando não fazer nenhum som. Você pode ouvir os passos dos atiradores se aproximando, mas eles passam direto. Você permanece ali até que a polícia chega e assegura o local.\n Você está a salvo.");                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c") {
                            console.log("Notando um grupo de pessoas que parece saber o que está fazendo, você decide segui-los. Eles se movem com determinação, e você os segue até uma sala de segurança onde todos se trancam. A polícia logo chega e resgata todos com segurança.\n Você tomou uma decisão acertada!");                           
                            await reiniciarJogo();
                            break;
                        }
                        else {
                            break;
                        }                    
                    }
                } else if (resposta === "b") {
                    resposta = await perguntarComValidacao('\nPERGUNTA 4: \nAssim que você esntende o que está acontecendo ali, imediatamente começa a procurar pessoas pra te ajudar\n     a)Algu famoso\n     b)Seguranças\n     c)Paparasis\n  Sua resposta: ');
                    if (resposta === "a") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \nPor algum motivo você escolhe procurar um de seus colegas de trabalho e o primeiro que avista é:\n     a)Taylor Swift\n     b)Ariana Grande\n     c)Olivia Ridrigo\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Ela é surda e sai correndo, um dos atiradores te acha e vc morre baleado(a) ali mesmo, uma trajédia :(")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Ela olha chorando pra você, te abraça e os dois são sequestrados e nunca mais são vistos, uma trajédia :(")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Ela começa a surtar e começa a correr junto com você em direção a policia lá fora que conseguem neutralizar os terroristas e todos ficam bem.")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "b") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \nVocê logo encontra 3 seguranças e o chefe do time te orienta ir com um deles\n     a)Procurar sua mãe, ela estava por ali\n     b)Sair com um dos seguranças\n     c)Ficar com o chefe do time\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Infelizmente ela já tinha saido com outro segurança e não é mais vista, vc fica ali perdido(a) no meio da confusão")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Você escapa por pouco mas seu segurança leva um tiro, uma trajédia :(")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Você está são e salvo com o segurança chefe")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "c") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \nAo tentar buscar ajuda com os paparasis que estão logo na entrada, eles te ignoram e apenas se preocupam com o evento. O que você faz?\n     a)Vai por conta própria procurar ajuda\n     b)Se revolta com a situação e tenta fazer algo\n     c)Volta pra dentro do evento\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Infelizmente vc encontra um dos terroristas e te assassinam, uma trajédia :(")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Você se revolta e tenta lutar mas não é o suficiente e acaba morto(a), uma trajédia :(")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Você volta pro evento e encontra seguranças que estavam ajudando no evento e conseguem te resgatar.")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    }
                } else if (resposta === "c") {
                    resposta = await perguntarComValidacao('\nPERGUNTA 4: \nVocê decide correr pra dentro do evento e avista alguns locais para tentar se esconder\n     a)Banheiro\n     b)Dentro do palco do evento\n     c)Sala de armazenamento\n  Sua resposta: ');
                    if (resposta === "a") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \nO banheiro é uma boa opção e você se depara com:\n     a)Justin Bieber\n     b)Will Smith\n     c)Gustavo Lima\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Vc se depara com seu ídolo e decidem bolar um plano pra neutralizar os terroristas, no fim, dá tudo certo e vcs saem sãos e salvos")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Will Smith decide te ajudar mas acaba sendo baleado tentando se defender.")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Ele decide apenas esperar até que os policiais consigam salvar a todos.")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "b") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \nEntrar dentro do palco de um evento não é fácil, mas você consegue se espremer pra debaixo do palco e dá de cara com:\n     a)Rihanna\n     b)Kanye West\n     c)Jef Bezos\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Vocês se olham e decidem sair em conjunto para tentar lutar contra os terroristas e conseguem por muito pouco vencer todos!")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Vocês tentam sair mas um dos terroristas acha vocês e acaba disparando contra Kanye e você.")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Vocês ficam ali até que os policiais chegam e vocês conseguem sair.")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "c") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \nA sala de armazenamento é um ótimo lugar e você dá de cara com mais 2 pessoas\n     a)Selena Gomes\n     b)Nick Minaj\n     c)Obama\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Vocês se protegem na sala até que conseguem sair com a ajuda de policiais.")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Vocês ficam ali até que os terroristas acham vocês e acabam matando a todos, uma trajédia :(")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Vocês se protegem na sala até que conseguem sair com a ajuda de policiais.")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    }
                }
            } else if (resposta === "c") {
                resposta = await perguntarComValidacao('\nPERGUNTA 3: \nVocê decide ser a sensação da festa, chamando atenção de todos. A situação dos terroristas invadindo o evento continua, o que você faz?\n     a)Tentar correr para fora do evento\n     b)Procurar outras pessoas pra te ajudar\n     c)Corre pra dentro do evento\n  Sua resposta: ');
                if (resposta === "a") {
                    resposta = await perguntarComValidacao('\nPERGUNTA 4: \nVocê consegue achar um caminho em direção a rua, porém, todos estão apavorados com a sutuação. O que você faz?\n     a)Apenas correr pr fora do evento\n     b)Criar uma distração pra conseguir sair dali\n     c)Tentar sair devagar abaixado(a) no meio da multidão\n  Sua resposta: ');
                    if (resposta === "a") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \nInfelizmente, ao tentar sair você dá de cara com um dos atiradores. Escolha a opção mais parecida com você:\n     a)Entrar em desespero\n     b)Gritar pros seguranças\n     c)Tentar lutar contra o terrorista\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Quando você repara na sua situação atua, um filme de sua vida inteira passa diante de seus olhos, até que \n   *BUUMM*\n  vc ouve um disparo e infelizmente ele acertou seu abdômem.\n     Você falece ali mesmo, uma trajédia :(")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Um dos seguranças atira no terrorista\n   *BUUMM*\n mas vc estava atrás dele, fora do campo de visão do segurança, e morre junto ao terrorista tendo a bala atravessada pelos dois corpos.\n   uma trajédia :(")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Ao tentar lutar com ele, seu drescode rígido te prende ao vestido, assim, perdendo e você acaba sendo sequestrado(a) e nunca mais é visto(a)\n Uma trajédia :(")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "b") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \nVocê avista um garçom passando com uma bandeja de champanhe. Com um movimento rápido e discreto, você faz com que a bandeja caia, espalhando taças e chamando a atenção de todos. Aproveitando o momento de confusão, você se move rapidamente em direção à saída, sorrateiramente. Você consegue abrigo em uma loja ali perto, o que fazer agora?\n     a)Pegue seu celular, rápido!\n     b)Ficr observando toda a situação da janela\n     c)Tentar se esconder dentro da loja\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Você consegue ligar para a polícia e ao mesmo tempo já escuta sirenes palas ruas de Nova Iorque em direção ao museu de moda.\n\n Você consegue escapar praticamente ileso(a)")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Infelizmente um dos atiradores te ve e acha o local e elimina todos ali presente, uma trajédia :(")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Você se encontra com Ariana Grande e conseguem fugir juntos(a), um arraso!")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "c") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \nVocê consegue sair do evento e agora?\n     a)Entrar em um veículo aleatório\n     b)Sair gritando por ajuda\n     c)Corre, SÓ CORRE!\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Você entra na van de Doja Cat e junto com ela, vocês conseguem sair da trajédia que com certeza marcará a história do MetGala")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Você é resgatado(a) por cidadãos comuns de NY e escuta vários desparos de longe, uma trajédia")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Você acaba indo longe e houve barulho de tiros e sirenes, se perdendo em meioa á foresta de concreto de NY")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    }
                } else if (resposta === "b") {
                    resposta = await perguntarComValidacao('\nPERGUNTA 4: \nAssim que você esntende o que está acontecendo ali, imediatamente começa a procurar pessoas pra te ajudar\n     a)Algu famoso\n     b)Seguranças\n     c)Paparasis\n  Sua resposta: ');
                    if (resposta === "a") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \nPor algum motivo você escolhe procurar um de seus colegas de trabalho e o primeiro que avista é:\n     a)Taylor Swift\n     b)Ariana Grande\n     c)Olivia Ridrigo\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Ela é surda e sai correndo, um dos atiradores te acha e vc morre baleado(a) ali mesmo, uma trajédia :(")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Ela olha chorando pra você, te abraça e os dois são sequestrados e nunca mais são vistos, uma trajédia :(")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Ela começa a surtar e começa a correr junto com você em direção a policia lá fora que conseguem neutralizar os terroristas e todos ficam bem.")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "b") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \nVocê logo encontra 3 seguranças e o chefe do time te orienta ir com um deles\n     a)Procurar sua mãe, ela estava por ali\n     b)Sair com um dos seguranças\n     c)Ficar com o chefe do time\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Infelizmente ela já tinha saido com outro segurança e não é mais vista, vc fica ali perdido(a) no meio da confusão")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Você escapa por pouco mas seu segurança leva um tiro, uma trajédia :(")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Você está são e salvo com o segurança chefe")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "c") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \nAo tentar buscar ajuda com os paparasis que estão logo na entrada, eles te ignoram e apenas se preocupam com o evento. O que você faz?\n     a)Vai por conta própria procurar ajuda\n     b)Se revolta com a situação e tenta fazer algo\n     c)Volta pra dentro do evento\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Infelizmente vc encontra um dos terroristas e te assassinam, uma trajédia :(")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Você se revolta e tenta lutar mas não é o suficiente e acaba morto(a), uma trajédia :(")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Você volta pro evento e encontra seguranças que estavam ajudando no evento e conseguem te resgatar.")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    }
                } else if (resposta === "c") {
                    resposta = await perguntarComValidacao('\nPERGUNTA 4: \nVocê decide correr pra dentro do evento e avista alguns locais para tentar se esconder\n     a)Banheiro\n     b)Dentro do palco do evento\n     c)Sala de armazenamento\n  Sua resposta: ');
                    if (resposta === "a") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \nO banheiro é uma boa opção e você se depara com:\n     a)Justin Bieber\n     b)Will Smith\n     c)Gustavo Lima\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Vc se depara com seu ídolo e decidem bolar um plano pra neutralizar os terroristas, no fim, dá tudo certo e vcs saem sãos e salvos")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Will Smith decide te ajudar mas acaba sendo baleado tentando se defender.")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Ele decide apenas esperar até que os policiais consigam salvar a todos.")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "b") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \nEntrar dentro do palco de um evento não é fácil, mas você consegue se espremer pra debaixo do palco e dá de cara com:\n     a)Rihanna\n     b)Kanye West\n     c)Jef Bezos\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Vocês se olham e decidem sair em conjunto para tentar lutar contra os terroristas e conseguem por muito pouco vencer todos!")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Vocês tentam sair mas um dos terroristas acha vocês e acaba disparando contra Kanye e você.")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Vocês ficam ali até que os policiais chegam e vocês conseguem sair.")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "c") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \nA sala de armazenamento é um ótimo lugar e você dá de cara com mais 2 pessoas\n     a)Selena Gomes\n     b)Nick Minaj\n     c)Obama\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Vocês se protegem na sala até que conseguem sair com a ajuda de policiais.")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Vocês ficam ali até que os terroristas acham vocês e acabam matando a todos, uma trajédia :(")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Vocês se protegem na sala até que conseguem sair com a ajuda de policiais.")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    }
                }
            }
        } else if (resposta === "b") {
            resposta = await perguntarComValidacao('\nPERGUNTA 2: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
            if (resposta === "a") {
                resposta = await perguntarComValidacao('\nPERGUNTA 3: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                if (resposta === "a") {
                    resposta = await perguntarComValidacao('\nPERGUNTA 4: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                    if (resposta === "a") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "b") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "c") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    }
                } else if (resposta === "b") {
                    resposta = await perguntarComValidacao('\nPERGUNTA 4: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                    if (resposta === "a") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "b") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "c") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    }
                } else if (resposta === "c") {
                    resposta = await perguntarComValidacao('\nPERGUNTA 4: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                    if (resposta === "a") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "b") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "c") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    }
                }
            } else if (resposta === "b") {
                resposta = await perguntarComValidacao('\nPERGUNTA 3: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                if (resposta === "a") {
                    resposta = await perguntarComValidacao('\nPERGUNTA 4: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                    if (resposta === "a") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "b") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "c") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    }
                } else if (resposta === "b") {
                    resposta = await perguntarComValidacao('\nPERGUNTA 4: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                    if (resposta === "a") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "b") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "c") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    }
                } else if (resposta === "c") {
                    resposta = await perguntarComValidacao('\nPERGUNTA 4: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                    if (resposta === "a") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "b") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "c") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    }
                }
            } else if (resposta === "c") {
                resposta = await perguntarComValidacao('\nPERGUNTA 3: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                if (resposta === "a") {
                    resposta = await perguntarComValidacao('\nPERGUNTA 4: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                    if (resposta === "a") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "b") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "c") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    }
                } else if (resposta === "b") {
                    resposta = await perguntarComValidacao('\nPERGUNTA 4: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                    if (resposta === "a") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "b") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "c") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    }
                } else if (resposta === "c") {
                    resposta = await perguntarComValidacao('\nPERGUNTA 4: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                    if (resposta === "a") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "b") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "c") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    }
                }
            }
        } else if (resposta === "c") {
            resposta = await perguntarComValidacao('\nPERGUNTA 2: \nVocê se depara com uma escadaria escura que parece levar ao porão do prédio. O que você faz?\n     a) Decide descer as escadas para explorar.\n     b) Opta por encontrar outra rota, evitando o porão.\n     c) Fica onde está, procurando por outras opções de fuga.\n  Sua resposta: ');
            if (resposta === "a") {
                resposta = await perguntarComValidacao('\nPERGUNTA 3: \nEnquanto desce as escadas, você ouve vozes vindas do porão. Como você reage?\n     a) Decide investigar as vozes para ver se alguém precisa de ajuda.\n     b) Fica alerta e continua descendo, mantendo-se discreto(a).\n     c) Volta imediatamente para o andar superior, evitando confrontos.\n  Sua resposta: ');
                if (resposta === "a") {
                    resposta = await perguntarComValidacao('\nPERGUNTA 4: \nVocê encontra um grupo de pessoas presas no porão. Como você decide ajudá-las?\n     a) Procura por uma saída de emergência para todos.\n     b) Tenta acalmar o grupo e formular um plano de fuga.\n     c) Busca por recursos úteis no porão para ajudar na fuga.\n  Sua resposta: ');
                    if (resposta === "a") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \nVocês encontram uma saída nos fundos do porão, mas é bloqueada por escombros. O que você faz?\n     a) Tentar mover os escombros com a ajuda do grupo.\n     b) Buscar por outra saída dentro do porão.\n     c) Tentar chamar a atenção de alguém do lado de fora para obter ajuda.\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Você e o grupo conseguem mover os escombros e escapam para a segurança. Parabéns pela coragem e solidariedade!");                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Infelizmente, não há outra saída disponível no porão. O grupo fica preso e a situação se torna desesperadora.");                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Vocês tentam chamar a atenção, mas ninguém responde. A situação parece sem saída.");                           
                            await reiniciarJogo();
                            break;
                        }
                                           
                    } else if (resposta === "b") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \nVocê se depara com uma porta trancada no corredor. O que você faz?\n     a) Tenta arrombar a porta.\n     b) Procura por uma chave ou outra maneira de destrancá-la.\n     c) Decide voltar pelo caminho que veio.\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                                        
                    } else if (resposta === "c") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \nVocê encontra uma porta trancada. O que você faz?\n a) Tenta encontrar uma chave para destrancá-la.\n     b) Desiste de tentar abrir a porta e procura outro caminho.\n     c) Bate na porta, esperando por uma resposta.\n  Sua resposta: ');
                        if (resposta === "a") {
                            console.log("Final: Você consegue encontrar uma chave e abrir a porta, revelando um novo espaço para explorar.");                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b") {
                            console.log("Final: Sem encontrar uma maneira de abrir a porta, você continua sua busca por outra rota.");                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c") {
                            console.log("Final: Ninguém responde à sua batida na porta, deixando você se perguntando o que está do outro lado.");                           
                            await reiniciarJogo();
                            break;
                        }
                        else {
                            break;
                        }                    
                    }
                    
                } else if (resposta === "b") {
                    resposta = await perguntarComValidacao('\nPERGUNTA 4: \nVocê se depara com uma porta trancada. O que você faz?\n     a) Tenta arrombar a porta.\n     b) Procura por uma chave nas proximidades.\n     c) Decide encontrar outra rota, evitando a porta trancada.\n  Sua resposta: ');
                    if (resposta === "a") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \nAo arrombar a porta, você encontra uma sala escura e empoeirada. O que você faz?\n     a) Decide explorar a sala, procurando por pistas ou itens úteis.\n     b) Usa o celular como lanterna e avança com cautela pela sala.\n     c) Opta por sair da sala imediatamente, evitando possíveis perigos.\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final: Ao explorar a sala, você encontra uma saída alternativa e consegue escapar com sucesso.");                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final: Ao avançar pela sala com cautela, você encontra uma passagem secreta que leva à liberdade.");                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final: Ao sair imediatamente da sala, você encontra outra rota e consegue escapar do prédio.");                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                      
                    } else if (resposta === "b") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \nVocê se depara com uma bifurcação no corredor. Qual caminho você escolhe?\n     a) Vira à esquerda e segue pelo corredor iluminado.\n     b) Opta por seguir em frente, explorando o corredor escuro.\n     c) Decide voltar pelo caminho que veio, procurando por outra rota.\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final: Ao seguir pelo corredor iluminado, você encontra uma saída e escapa do prédio.");                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final: Ao explorar o corredor escuro, você encontra uma saída secreta e foge com sucesso.");                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final: Ao voltar pelo caminho que veio, você encontra outra rota e consegue escapar do prédio.");                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                                                         
                        } else if (resposta === "c") {
                            resposta = await perguntarComValidacao('\nPERGUNTA 5: \nVocê se encontra diante de duas portas idênticas. Qual delas você escolhe?\n     a) Abre a porta da esquerda.\n     b) Abre a porta da direita.\n     c) Decide não abrir nenhuma das portas e procurar por outra saída.\n  Sua resposta: ');
                            if (resposta === "a"){
                                console.log("Final: Ao abrir a porta da esquerda, você encontra uma escada de emergência que o leva para fora do prédio.");                           
                                await reiniciarJogo();
                                break;
                            }
                            else if (resposta === "b"){
                                console.log("Final: Ao abrir a porta da direita, você descobre uma passagem secreta que o leva para fora do prédio.");                           
                                await reiniciarJogo();
                                break;
                            }
                            else if (resposta === "c"){
                                console.log("Final: Ao decidir não abrir nenhuma das portas, você encontra uma janela aberta que o leva para fora do prédio.");                           
                                await reiniciarJogo();
                                break;
                            }
                            else{
                                break;
                            }                    
                        }                        
                }else if (resposta === "b") {
                    resposta = await perguntarComValidacao('\nPERGUNTA 5: \nVocê encontra um mapa desenhado à mão em uma mesa empoeirada. Há três caminhos marcados: um leva a uma floresta sombria, outro a uma ponte quebrada e o último a uma caverna escura. Qual caminho você escolhe?\n     a) Segue o caminho para a floresta sombria.\n     b) Opta pelo caminho da ponte quebrada.\n     c) Decide explorar a caverna escura.\n  Sua resposta: ');
                    if (resposta === "a"){
                        console.log("Final: Você segue o caminho para a floresta sombria e encontra uma saída segura após uma jornada desafiadora.");                           
                        await reiniciarJogo();
                        break;
                    }
                    else if (resposta === "b"){
                        console.log("Final: Ao optar pelo caminho da ponte quebrada, você encontra uma passagem secreta que o leva a um local seguro.");                           
                        await reiniciarJogo();
                        break;
                    }
                    else if (resposta === "c"){
                        console.log("Final: Decidindo explorar a caverna escura, você encontra uma criatura hostil que o impede de avançar.");                           
                        await reiniciarJogo();
                        break;
                    }
                    else{
                        break;
                    }                                   
                                        
                    }else if (resposta === "b") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \nVocê encontra um mapa desenhado à mão em uma mesa empoeirada. Há três caminhos marcados: um leva a uma floresta sombria, outro a uma ponte quebrada e o último a uma caverna escura. Qual caminho você escolhe?\n     a) Segue o caminho para a floresta sombria.\n     b) Opta pelo caminho da ponte quebrada.\n     c) Decide explorar a caverna escura.\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final: Você segue o caminho para a floresta sombria e encontra uma saída segura após uma jornada desafiadora.");                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final: Ao optar pelo caminho da ponte quebrada, você encontra uma passagem secreta que o leva a um local seguro.");                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final: Decidindo explorar a caverna escura, você encontra uma criatura hostil que o impede de avançar.");                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    }  
                }
            } else if (resposta === "b") {
                resposta = await perguntarComValidacao('\nPERGUNTA 3: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                if (resposta === "a") {
                    resposta = await perguntarComValidacao('\nPERGUNTA 4: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                    if (resposta === "a") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "b") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "c") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    }
                } else if (resposta === "b") {
                    resposta = await perguntarComValidacao('\nPERGUNTA 4: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                    if (resposta === "a") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "b") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "c") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    }
                } else if (resposta === "c") {
                    resposta = await perguntarComValidacao('\nPERGUNTA 4: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                    if (resposta === "a") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "b") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "c") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    }
                }
            } else if (resposta === "c") {
                resposta = await perguntarComValidacao('\nPERGUNTA 3: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                if (resposta === "a") {
                    resposta = await perguntarComValidacao('\nPERGUNTA 4: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                    if (resposta === "a") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "b") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "c") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    }
                } else if (resposta === "b") {
                    resposta = await perguntarComValidacao('\nPERGUNTA 4: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                    if (resposta === "a") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "b") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "c") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    }
                } else if (resposta === "c") {
                    resposta = await perguntarComValidacao('\nPERGUNTA 4: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                    if (resposta === "a") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "b") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }                    
                    } else if (resposta === "c") {
                        resposta = await perguntarComValidacao('\nPERGUNTA 5: \n: \n     a)\n     b)\n     c)\n  Sua resposta: ');
                        if (resposta === "a"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "b"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else if (resposta === "c"){
                            console.log("Final")                           
                            await reiniciarJogo();
                            break;
                        }
                        else{
                            break;
                        }
                    }
                }
            }
        }
    }

async function reiniciarJogo() {
    let resposta = await perguntar('Deseja jogar novamente? (s/n): ');
    if (resposta.toLowerCase() === 's') {
        iniciarJogo();
    } else {
        rl.close();
    }
}

iniciarJogo();