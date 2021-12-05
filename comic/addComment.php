<?php
  header('Location: ./');

  $str = "\n".$_POST['username'].":\n   ".$_POST['comment']."\n";
  echo file_put_contents("comments.txt", $str, FILE_APPEND | LOCK_EX);

  exit;
?>
