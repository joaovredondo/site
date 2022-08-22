<?php

session_start();
include_once("conexao.php");

$nome = filter_input(INPUT_POST, 'nome');
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$password = filter_input(INPUT_POST, 'password');

$insert_users = "INSERT INTO z_usuarios (nome, email, senha, created) VALUES ('$nome','$email','$password', NOW())";

$resultado_insert = mysqli_query($conexao, $insert_users);

if(mysqli_insert_id($conexao)){
    $_SESSION['msgConfirm'] = 'Usuário cadastro com sucesso.';
    header("Location: cadastro.php");
} else {
    $_SESSION['errorConfirm'];
    header("Location: cadastro.php");
}
?>