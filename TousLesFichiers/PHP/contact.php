<?php
$nom = $_POST['nom'];
$prenom = $_POST['prenom'];
$entreprise = $_POST['entreprise'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$message = $_POST['message'];

/* Si les variables sont bonne */
$to="maud.lherbier@gmail.com";

/*Le sujet du message qui apparaitra*/
$sujet="Message depuis le site";
$msg = '';
/*Le message en lui même*/
/*$msg = 'Mail envoye depuis le site' "rnrn";*/
$msg .= 'Nom : '.$nom;
$msg .= 'Prénom : '.$prenom;
$msg .= 'Nom Entreprise : ' .$entreprise;
$msg .= 'Email: '.$email;
$msg .= 'Téléphone: '.$tel;
$msg .= 'Message: '.$message;
/*Les en-têtes du mail*/
$headers = 'From: MESSAGE DU SITE';
/*L'envoi du mail - Et page de redirection*/
mail($to, $sujet, $msg, $headers);
?>