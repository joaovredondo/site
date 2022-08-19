<?php

$nome = filter_input(INPUT_POST, 'nome');
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$password = filter_input(INPUT_POST, 'password');
$confirmPassword = filter_input(INPUT_POST, 'cpassword');

echo "Nome: $nome <br>";
echo "Email: $email <br>";
echo "Senha: $password <br>";
echo "Confirmar Senha: $confirmPassword <br>";

?>