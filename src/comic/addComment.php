<?php
  header('Location: ./');

  $str = "\n".$_GET['username'].":\n&emsp;&emsp;".$_GET['comment']."\n";
  echo file_put_contents("comments.txt", $str, FILE_APPEND | LOCK_EX);

  sleep(1);
  exit;
?>