<!DOCTYPE html>
<html>
<body>

<?php
$str = "\n".$_GET['username'].":\n   ".$_GET['comment']."\n";
echo file_put_contents("comments.txt", $str, FILE_APPEND | LOCK_EX);

?>

</body>
</html> 
