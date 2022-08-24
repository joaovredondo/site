<?php

session_start();
include_once("conexao.php");

$nome = filter_input(INPUT_POST, 'nome');
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$password = filter_input(INPUT_POST, 'password');

$hashPass = password_hash($password, PASSWORD_DEFAULT);

$result_usuario = "SELECT * FROM z_usuarios WHERE email='$email'";
$resultado_usuario = mysqli_query($conexao, $result_usuario);

if(($resultado_usuario) AND ($resultado_usuario->num_rows != 0)){
    $_SESSION['errorConfirm'] = '<p style="padding: 6px; font-size: 16pt"><strong>Email já registrado. Recupere sua senha.</strong>';
} else {
    $insert_users = "INSERT INTO z_usuarios (nome, email, senha, created) VALUES ('$nome','$email','$hashPass', NOW())";
    $resultado_insert = mysqli_query($conexao, $insert_users);
}

if(mysqli_insert_id($conexao)){
    $_SESSION['msgConfirm'] = '<p style="padding: 6px; font-size: 16pt"><strong>Usuário cadastro com sucesso.</strong>';
    sleep(3);
    header("Location: cadastro.php");
} else {
    $_SESSION['errorConfirm'] = '<p style="padding: 6px; font-size: 16pt"><strong>Email já registrado. Recupere sua senha.</strong>';
    sleep(3);
    header("Location: cadastro.php");
}
?>