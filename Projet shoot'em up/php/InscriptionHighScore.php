
<?php
	
	$name = $_POST["name"];
	$score = $_POST["score"];
	
	try{
		$conn = new PDO("mysql:host=localhost;dbname=???", "root", ""); // info à changer
		$test = $conn->prepare("SELECT name FROM highscore WHERE name = :name");
		$test->execute(array(':name'=>$name));
		if(!$test->rowCount()){
			$results = $conn->prepare("INSERT INTO highscore(name, score) VALUES(:name, :score)");
			$results->execute(array(':name'=>$name, ':score'=>$score));
		}else{
			$test = $conn->prepare("SELECT score FROM highscore WHERE name = :name");
			$test->execute(array(':name'=>$name));
			if($score > $test->fetch()['score']){
				$results = $conn->prepare("UPDATE highscore SET score = :score WHERE name = :name");
				$results->execute(array(':score'=>$score,':name'=>$name));
			}
		}
	}catch(PDOException $e){
		die($e->getMessage());
	}
?>