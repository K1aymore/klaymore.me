<?php
  header("Location: ".$_POST['url']);

  $str = "\n".htmlentities($_POST['username']).":\n&emsp;&emsp;". htmlentities($_POST['comment'])." {.comments}\n";
  
  $file = "/synced/Websites/klaymore.me/src/Gary/".$_POST['chapter']."/".$_POST['page']."/index.md";

  if (isset($_POST['username']) && $_POST['username'] !== '' && isset($_POST['comment']) && $_POST['comment'] !== '') {
    $myfile = fopen($file, "a") or die("Unable to open file!");
    fwrite($myfile, $str);
    fclose($myfile);
  }

  exit;
?>
