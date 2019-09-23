<?php

if(isset($_POST['email']) && !empty($_POST['email']){

$nome = addslashes($_POST['name']);
$email = addslashes($_POST['email']);
$mensagem = addslashes($_POST['message']);

$to = "contato@grupopataamada.com";
$subject = "Contato - Grupo Pata Amada";
$body = "Nome: ".$nome."\n".
        "Email: ".$email."\n".
        "Mensagem: ".$mensagem;
$header = "From:contato@grupopataamada.com"."\r\n".
          "Reply-to:".$email."\r\n".
          "X=Mailer:PHP/".phpversion();


if (mail($to,$subject,$body,$header)){

    echo("Email enviado com sucesso!");
}else {
    echo("O email não pôde ser enviado.");
}

}

?>