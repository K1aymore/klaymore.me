
<?php

  $android = strpos($_SERVER['HTTP_USER_AGENT'],"Android");
  $bberry = strpos($_SERVER['HTTP_USER_AGENT'],"BlackBerry");
  $iphone = strpos($_SERVER['HTTP_USER_AGENT'],"iPhone");
  $ipod = strpos($_SERVER['HTTP_USER_AGENT'],"iPod");
  $webos = strpos($_SERVER['HTTP_USER_AGENT'],"webOS");
  
  if ($android || $bberry || $iphone || $ipod || $webos== true) {
    include $_SERVER['DOCUMENT_ROOT'].'/mobile.css';
  }
  else {
    include $_SERVER['DOCUMENT_ROOT'].'/style.css';
  }
  
?>
