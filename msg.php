<!DOCTYPE html>
<html>
<body>
<?PHP
$myfile = fopen("storefile.txt", "a");
$name = $_POST["name"];
$email = $_POST["emailaddress"];
$sentmessage = $_POST["sentmessage"];
$to = "libra.anne.99@gmail.com";
$subject = "New Message from Website";
$headers = "From: $name\n";
$headers.= 'MIME-Version: 1.0' . "\r\n";
$headers.= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$message = "Name: $name\n
$sentmessage";

fwrite($myfile, $message);
fclose($myfile);
//mail($to,$subject,$message,$headers);

//header('Location: contact.html');

// mail($user,$usersubject,$usermessage,$userheaders);
?>
</body>
</html>