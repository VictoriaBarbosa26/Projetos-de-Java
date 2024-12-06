-- EXCLUI O BANCO DE DADOS CADASTRO
drop database Cadastro;


-- CRIA O BANCO DE DADOS CADASTRO
create database Cadastro;


-- SELECIONA O BANCO DE DADOS CADASTRO
use Cadastro;


-- CRIA A TABELA CADASTROS
create table Cadastros (
    id int(4) not null primary key auto_increment,
    nome char(100) not null,
    idade int(3) not null,
    endereco char(150) not null,
    genero char(200) not null,
    telefone int(11) not null,
    email char(40) not null,
    senha char(80) not null
) Engine = InnoDB;


-- INSERE UM REGISTRO NA TABELA CADASTROS
insert into Cadastros (nome, idade, endereco, genero, telefone, email, senha)
values ("Victória", "17", "São José dos Campos - SP", "Romance, Terror, Suspense", "991252245", "vicbr@gmail", "123TESTE");


-- SELECIONA TODOS OS REGISTROS DA TABELA CADASTros
select * from Cadastros;
