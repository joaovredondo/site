<?php
    include_once("../cadastro/conexao.php");
    if(!isset($_SESSION)) 
    { 
        session_start(); 
    } 
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../icons/css/all.min.css">
    <link rel="stylesheet" href="style.css">
    <title>Login</title>
</head>

<body>
    <form action="logar.php" method="post">
        <div class="container">
            <div class="card_login">
                <h1>Acesse sua conta</h1>

                <div class="msgError">
                    <?php
                        if(isset($_SESSION['errorPage'])){
                            echo $_SESSION['errorPage'];
                            unset($_SESSION['errorPage']);
                        }
                    ?>
                </div>


                <div class="label_email">
                    <label for="email">E-mail</label>
                    <input type="email" name="email" id="email" placeholder="Digite seu e-mail" required autofocus>
                    <i class="fa-solid fa-envelope" for="email"></i>
                </div>

                <div class="label_password">
                    <i class="fa-solid fa-eye-slash" id="view_passOcult"></i>
                    <i class="fa-solid fa-eye" id="view_pass"></i>
                    <label for="password">Senha</label>
                    <input type="password" name="password" id="password" placeholder="Digite sua senha" required>
                    <i class="fa-solid fa-lock"></i>
                </div>

                <div class="input_btn">
                    <input type="submit" value="Entrar" name="SendLogin">
                </div>

                <hr>

                <div class="label_cadastro">
                    Não possui uma conta? <a href="../cadastro/cadastro.php">Cadastrar-se</a>
                </div>

            </div>
        </div>
    </form>
    <script src="script.js"></script>
</body>

</html>