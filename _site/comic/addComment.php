<?php
  header("Location: ".$_POST['url']);

  $str = "\n".htmlentities($_POST['username']).":\n&emsp;&emsp;". htmlentities($_POST['comment'])." {.comments}\n";
  
  $file = "/synced/Websites/klaymore.me/src/comic/".$_POST['chapter']."/".$_POST['page']."/index.md";
  
  $myfile = fopen($file, "a") or die("Unable to open file!");
  fwrite($myfile, $str);
  fclose($myfile);
  
  exit;
?>
