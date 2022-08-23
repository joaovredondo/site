<?php

session_start();
include_once("conexao.php");

$nome = filter_input(INPUT_POST, 'nome');
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$password = filter_input(INPUT_POST, 'password');

$insert_users = "INSERT INTO z_usuarios (nome, email, senha, created) VALUES ('$nome','$email','$password', NOW())";

$resultado_insert = mysqli_query($conexao, $insert_users);

if(mysqli_insert_id($conexao)){
    $_SESSION['msgConfirm'] = '<p style="padding: 6px; font-size: 16pt"><strong>Usuário cadastro com sucesso.</strong>';
    sleep(3);
    header("Location: cadastro.php");
} else {
    $_SESSION['errorConfirm'] = '[ERROR] - Usuário não cadastrado.';
    header("Location: cadastro.php");
}
?>