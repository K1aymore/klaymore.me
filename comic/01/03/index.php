
<?php
  $num = intval(basename(getcwd()));
  $back = "/comic/01/".sprintf('%02d', $num - 1);
  $next = "/comic/01/".sprintf('%02d', $num + 1);

  header('Location: /comic/01/'.sprintf('%02d', $num - 1));

  exit;
?>
