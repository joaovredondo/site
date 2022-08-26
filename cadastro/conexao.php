<?php

session_start();

$servidor = "localhost";
$usuario = "root";
$senha = "";
$database = "cadastros";

// CRIAR CONEXÃO

    $conexao = new mysqli($servidor, $usuario, $senha, $database);

    if($conexao->connect_error){
        die("Connection failed: " . $conexao->connect_error);

    }

?>