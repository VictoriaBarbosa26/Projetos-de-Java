<!DOCTYPE html>
<html>
<head>
  <!-- INCLUSÃO DA BIBLIOTECA JQUERY -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  
  
  <!-- CONFIGURAÇÃO DA VIEWPORT PARA DISPOSITIVOS MÓVEIS -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  
  <!-- IMPORTAÇÃO DO ÍCONE FONTAWESOME -->
  <link rel="stylesheet" href="css/font-awesome.min.css">


  <!-- VINCULA O ARQUIVO CSS EXTERNO "STYLE.CSS" AO DOCUMENTO HTML -->
  <link rel="stylesheet" href="style.css">
  
  
  <!-- SCRIPT JAVASCRIPT PARA MANIPULAÇÃO DO FORMULÁRIO -->
  <script>
    // FUNÇÃO PARA SUBMETER O FORMULÁRIO COM A AÇÃO ESPECIFICADA
    function submeterForm(acao){
      document.getElementById('acao').value = acao;
      document.getElementById('f').submit();
    }

    // FUNÇÃO PARA ALTERNAR A VISIBILIDADE DA SENHA
    function toggleSenhaVisibility() {
      var senhaInput = document.getElementById('senha');
      var iconeSenha = document.getElementById('iconeSenha');
      if (senhaInput.type === "password") {
        senhaInput.type = "text";
        iconeSenha.className = "fa fa-eye-slash";
      } else {
        senhaInput.type = "password";
        iconeSenha.className = "fa fa-eye";
      }
    }
  </script>
  
  
  
  <!-- INÍCIO DA SESSÃO PHP -->
  <?php session_start(); //INICIA A SESSAO ?>
  
  
  
</head>
<body>
  
  
  <!-- VINCULA O ARQUIVO JAVASCRIPT EXTERNO "SCRIPT.JS" AO DOCUMENTO HTML -->
	<script src="script.js"></script>
	
	
	
	
  <!-- NAVEGAÇÃO -->
  <nav class="navbar">
    <div class="dropdown">
        <button class="dropbtn">☰</button>
        <div class="dropdown-content">
            <a href="../inicio.html">Início</a>
            <a href="/AtividadeVICTORIA/Lancamentos/lancamentos.html">Em Breve nos Cinemas</a>
            <a href="/AtividadeVICTORIA/Oscar/Oscar.html">Oscar 2023</a>
        </div>
    </div>
    <!-- TÍTULO NA BARRA DE NAVEGAÇÃO -->
    <marquee behavior="scroll" direction="left">Cadastro</marquee> <!-- BEHAVIOR="SCROLL": DEFINE A ROLAGEM CONTÍNUA DO TEXTO DENTRO DO ELEMENTO <MARQUEE>. -->
</nav>




<!-- CONTAINER PRINCIPAL -->
<div class="container">
    <!-- CONTAINER DO FORMULÁRIO -->
    <div class="form-container">
      <!-- Formulário -->
      <form name="f" id="f" method="post" action="CADASTROS.php">
        <table>
		
		
          <!-- CAMPOS DO FORMULÁRIO -->
          <tr>
            <th>Nome</th>
            <td><input type="text" name="nome" value="" style="width: 300px;"></td>
            <th>Endereço</th>
            <td><input type="text" name="endereco" value=""></td>
          </tr>
          
		  
		  
          <tr>
            <th>Idade</th>
            <td><input type="text" name="idade" style="width: 150px;"></td>
            <th>Gênero de filme favorito</th>
            <td><input type="text" name="genero" value="" style="width: 300px;"></td>
          </tr>
          
		  
		  
          <tr>
            <th>Telefone</th>
            <td><input type="text" name="telefone" value=""></td>
            <th>Email</th>
            <td><input type="text" name="email" value="" style="width: 300px;"></td>
          </tr>
          
		  
		  
          <tr>
            <th>Senha</th>
            <td>
              <input type="password" name="senha" id="senha" style="width: 150px;"></td>
              <i id="iconeSenha" class="fa fa-eye" onclick="toggleSenhaVisibility()"></i>
            </td>
            <th>Aceitar receber notificações</th>
            <td>
              <input type="checkbox" id="aceitarNotificacoes">
              <label for="aceitarNotificacoes">Sim</label>
            </td>
          </tr>
        </table>
        
		
		
		
        <!-- CAMPO OCULTO PARA ARMAZENAR A AÇÃO DO FORMULÁRIO -->
        <input type="text" name="acao" id="acao" style="display:none"><br>
		
        <!-- BOTÕES DE AÇÃO DO FORMULÁRIO -->
        <div class="button-container">
          <input type="button" value="Create (Criar)" onclick="submeterForm('c')">
          <input type="button" value="Restore (Consultar)" onclick="submeterForm('r')">
          <input type="button" value="Update (Atualizar)" onclick="submeterForm('u')">
          <input type="button" value="Delete (Deletar)" onclick="submeterForm('d')">
        </div>
      </form>
    </div>
  </div>
  

<br><br>


  <?php
    // VERIFICA SE A VARIÁVEL DE SESSÃO "AVISO" EXISTE
    if(isset($_SESSION["aviso"])){ //SE A VARIAVEL AVISO FOI CRIADA NA PAGINA ANTERIOR...
        // EXIBE O AVISO DENTRO DE UMA DIV COM A CLASSE "AVISO"
        echo '<div class="aviso">' . $_SESSION["aviso"] . '</div>';
        // EXCLUI O AVISO DA MEMÓRIA
        unset($_SESSION["aviso"]);
    } 
  ?>
  
  
<br>


  <?php
    // CONEXÃO COM O BANCO DE DADOS
    $con = new mysqli("127.0.0.1:3306", "root", "", "Cadastro");
    // CONSULTA SQL PARA SELECIONAR TODOS OS DADOS DA TABELA CADASTROS
    $sql = "select * from Cadastros";
    // EXECUTA A CONSULTA SQL
    $res = $con->query($sql);
  ?>
  
  
  
  
  
<!-- RODAPÉ -->
<footer>
    Desenvolvido por <strong>@victória</strong>
</footer>


</body>
</html>