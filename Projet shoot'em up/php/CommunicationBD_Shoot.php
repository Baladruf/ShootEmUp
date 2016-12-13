
<html>
<head><title>test</title></head>
<body>
<?php
	try{
		$textFinale = "";
		$conn = new PDO("mysql:host=localhost;dbname=highscoreshoot", "root", ""); // info à changer
		$result = $conn->query("SELECT name, score FROM highscore ORDER BY score DESC LIMIT 10");
		while($info = $result->fetch(PDO::FETCH_NUM, PDO::FETCH_ORI_NEXT)){
			$textFinale .= $info[0]." : ".$info[1]."</br>";
		}
		echo $textFinale;
	}catch(PDOException $e){
		die($e->getMessage());
	}
?>
</body>
</html>