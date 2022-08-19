<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" type="text/css" href="../icons/css/all.min.css">
    <title>Cadastro</title>
</head>

<body>
    <form action="cadastrar.php" method="post">
        <div class="container">
            <div class="card_cadastro">
                <h1>Crie sua conta</h1>

                <div id="msgError"></div>
                <div id="msgSucess"></div>

                <div class="label_geral">
                    <label for="nome" id="label_nome">Nome</label>
                    <input type="text" name="nome" id="nome" placeholder="Digite seu nome completo" autofocus>
                </div>

                <div class="label_geral">
                    <label for="email" id="label_email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Digite seu e-mail">
                </div>

                <div class="label_geral">
                    <i class="fa-solid fa-eye" id="view_pass"></i>
                    <label for="password" id="label_password">Senha</label>
                    <input type="password" name="password" id="password" placeholder="Digite sua senha">
                </div>

                <div class="label_geral">
                    <i class="fa-solid fa-eye" id="view_cpass"></i>
                    <label for="cpassword" id="label_cpassword">Confirmar senha</label>
                    <input type="password" name="cpassword" id="cpassword" placeholder="Confirme sua senha">
                </div>

                <div class="input_btn">
                    <input type="button" id="btn_enviar" value="CADASTRAR" onclick="verificar()">
                </div>

            </div>
            <script src="script.js"></script>
        </div>
    </form>
</body>

</html>