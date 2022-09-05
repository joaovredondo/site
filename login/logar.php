<?php

    include_once("../cadastro/conexao.php");
    session_start();
    
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM Z_USUARIOS WHERE EMAIL='$email' LIMIT 1";
    $resultado = mysqli_query($conexao, $sql);
    $result = mysqli_fetch_assoc($resultado);

    if(password_verify($password, $result['senha'])){
        $_SESSION['email'] = $result['email'];
        header("Location: menu.php");
    } else {
        header("Location: login.php");
        $_SESSION['errorPage'] = '<p style="padding: 6px">Email ou senha incorretos.';
    }
?>