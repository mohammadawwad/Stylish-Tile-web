<?php>
if(isset($_POST['submit']){
	$name = $_POST['name'];
	$subject = $_POST['subject'];
	$mailFrom = $_POST['mail'];
	$message = $_POST['message'];
	$phone = $_POST['phone'];


	$mailTO = "n.maalla@stylishtile.com";
	$headers = "From: ".$mailFrom;
	$txt = "Yoy have recived an e-mail from ".$name.".\n" .$phone "\n\n".$message;

	mail($mailTo, $subject, $ttxt, $headers);
	header("Location: index.php?mailsend");
}