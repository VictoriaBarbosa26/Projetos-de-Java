<!DOCTYPE html>
<html>
<head>
  <!-- CONFIGURAÇÃO DA VIEWPORT PARA DISPOSITIVOS MÓVEIS -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  
  <!-- VINCULA O ARQUIVO CSS EXTERNO "STYLEUPDATE.CSS" AO DOCUMENTO HTML -->
  <link rel="stylesheet" href="styleUPDATE.css">
  
  
</head>
<body>


  <!-- CONTAINER PRINCIPAL -->
  <div class="container">
    <?php
    // VERIFICA SE TODOS OS CAMPOS ESTÃO PREENCHIDOS
    if(empty($_POST["nome"]) || empty($_POST["idade"]) || empty($_POST["endereco"]) || empty($_POST["genero"]) || empty($_POST["telefone"]) || empty($_POST["email"]) || empty($_POST["senha"]) || empty($_POST["acao"])) {
        // EXIBE UMA MENSAGEM DE AVISO NA TELA
        echo "Por favor, preencha todos os campos do formulário.";
    } else {
        // TODOS OS CAMPOS ESTÃO PREENCHIDOS, ENTÃO PROCEDA COM AS OPERAÇÕES DO FORMULÁRIO
        
        // CAPTURA DOS DADOS ENVIADOS PELO FORMULÁRIO VIA MÉTODO POST
        $nome = $_POST["nome"];
        $idade = $_POST["idade"];
        $endereco = $_POST["endereco"];
        $genero = $_POST["genero"];
        $telefone = $_POST["telefone"];
        $email = $_POST["email"];
        $senha = $_POST["senha"];
        $acao = $_POST["acao"];
        
        // CONEXÃO COM O BANCO DE DADOS
        $con = new mysqli("127.0.0.1:3306", "root", "", "Cadastro");
        
        // INÍCIO DA SESSÃO PHP
        session_start(); 
        
        // VERIFICAÇÃO DA AÇÃO DO FORMULÁRIO
        if($acao == "c"){ 
            // CRIAÇÃO DO REGISTRO NO BANCO DE DADOS
            $sql = "insert into Cadastros (nome, idade, endereco, genero, telefone, email, senha) values ('$nome', '$idade', '$endereco', '$genero','$telefone', '$email', '$senha')"; 
            $res = $con->query($sql); 
            $_SESSION["aviso"] = "O cadastro foi efetuado com sucesso"; 
            // REDIRECIONAMENTO DE VOLTA À PÁGINA ANTERIOR
            header("location: ".$_SERVER['HTTP_REFERER']); 
        }
        if($acao == "r"){ 
            // CONSULTA DOS REGISTROS NO BANCO DE DADOS
            $sql = "select * from Cadastros where nome='$nome'"; 
            $res = $con->query($sql); 
            if(mysqli_num_rows($res) > 0){ 
                // EXIBIÇÃO DOS REGISTROS EM FORMA DE TABELA
                echo("<table>");
                echo("<tr><th>id</th><th>nome</th><th>idade</th><th>email</th></tr>"); 
                while($campo = $res->fetch_assoc()){ 
                    echo("<tr>");
                    echo("<td>".$campo["id"]."</td>"); 
                    echo("<td>".$campo["nome"]."</td>");
                    echo("<td>".$campo["idade"]."</td>"); 
                    echo("<td>".$campo["email"]."</td>"); 
                    echo("</tr>");
                }
                echo("</table>"); 
            }
            else{
                echo "nenhum resultado encontrado buscando por: $nome";
            }
            
            // LINK PARA VOLTAR À PÁGINA INICIAL
            echo("<br><br><a href='".$_SERVER['HTTP_REFERER']."'>Voltar a pagina inicial</a>"); 
        }
        if($acao == "u"){ 
            // ATUALIZAÇÃO DOS REGISTROS NO BANCO DE DADOS
            $sql = "update Cadastros set nome='$nome', idade='$idade', endereco='$endereco', genero='$genero', telefone='$telefone', email='$email' where senha='$senha'"; 
            $res = $con->query($sql); 
            $_SESSION["aviso"] = "O item foi alterado com sucesso"; 
            // REDIRECIONAMENTO DE VOLTA À PÁGINA ANTERIOR
            header("location: ".$_SERVER['HTTP_REFERER']); 
        }
        
        if($acao == "d"){ 
            // EXCLUSÃO DE REGISTROS NO BANCO DE DADOS
            $sql = "delete from Cadastros where email='$email'"; 
            $res = $con->query($sql); 
            $_SESSION["aviso"] = "Foi deletado um total de ".$con->affected_rows." itens"; 
            // REDIRECIONAMENTO DE VOLTA À PÁGINA ANTERIOR
            header("location: ".$_SERVER['HTTP_REFERER']); 
        }

        // FECHAMENTO DA CONEXÃO COM O BANCO DE DADOS
        $con->close(); 
    }
    ?>


  </div>
</body>
</html>
