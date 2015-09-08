<?php
header("content-type:text/html; charset=utf-8");
//$q=$_GET["q"];

$con = mysql_connect('localhost', 'eno', '987654321');
if (!$con) {
	die('Could not connect: ' . mysql_error());
}
$shili_name = "1";
$password = "gyf";
$_POST["user"] = 1;
$_POST["title"] = 2;
$_POST["content"] = 3;
$userId = $_POST["u"];
$userName = $_POST["p"];
//$userAge = $_POST["userAge"];
mysql_select_db("test", $con);
//选择数据库
//$sql = "SELECT * FROM user WHERE name = '$shili_name' and password = '$password'";
//$sql = "SELECT * FROM test WHERE id = {$shili_name} and user = '{$password}'";
$sql = "insert into test(id,user) values('$userId','$userName')";
$result = mysql_query($sql);
//$meta = mysql_fetch_row($result);
//$numrows = mysql_num_rows($result);
//$numrows = mysql_numrows($result);
//$numrows = mysql_fetch_array($result, MYSQL_ASSOC);
//读取一行数据
/*if ($numrows > 0) {
	//	echo 123;
	//	echo mysql_num_rows($result);
	echo "$shili_name";
	echo "<br>";
	echo "$password";
	echo "<br>";
	echo "$sql";
	echo "<br>";
	var_dump($result);
	echo "<br>";
	var_dump($numrows);
	echo '<br>';
	foreach ($numrows as $value) {
		echo $value;
		echo '<br>';
	};*/
	/*session_start();
	 $_SESSION['shili'] = shili;
	 $shili = $shili_name;
	 //$shili=123
	 echo "
	 <font color=red>登录成功!</font>

	 ";
	 header("Location:index.php");*/
/*} else {
	echo 456;
	echo mysql_num_rows($result);
	echo "$shili_name";
	echo "$password";

	var_dump($result);
}*/
/*printf($meta);
 if($meta['comment_post_ID']===1){
 echo <h1>123</h2>;
 }*/
/*
 echo "<table border='1'>
 <tr>
 <th>Firstname</th>
 <th>Lastname</th>
 <th>Age</th>
 <th>Hometown</th>
 <th>Job</th>
 </tr>";

 while($row = mysql_fetch_array($result))
 {
 echo "<tr>";
 echo "<td>" . $row['FirstName'] . "</td>";
 echo "<td>" . $row['LastName'] . "</td>";
 echo "<td>" . $row['Age'] . "</td>";
 echo "<td>" . $row['Hometown'] . "</td>";
 echo "<td>" . $row['Job'] . "</td>";
 echo "</tr>";
 }
 echo "</table>";*/
// print_r($meta) ;
// mysql_fetch_row($result));

mysql_close($con);
?>