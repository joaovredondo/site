<?php
    require_once("../cadastro/conexao.php");

    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $password = filter_input(INPUT_POST, 'password');

    $sql = "SELECT * FROM Z_USUARIOS WHERE email='$email' LIMIT 1";
    $result = $conexao->query($sql);

    if($result->num_rows > 0){

    } else {
        
    }

    if(isset($_POST['email']) && isset($_POST['password'])){
        $email = mysqli_real_escape_string($conexao, $_POST['email']);
        $password = mysqli_real_escape_string($conexao, $_POST['password']);
    } else {
        $_SESSION['errorPage'] = 'Acesso negado. Faça o login!';
        header("Location: login.php");
    }
?>