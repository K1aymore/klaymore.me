<!DOCTYPE html>
<html>

  <?php include $_SERVER['DOCUMENT_ROOT'].'/style.php'; ?>

  <body>
    <?php include $_SERVER['DOCUMENT_ROOT'].'/header.html'; ?>
    <br />
    
    
    <p class="comicArrows">
      <?php
        $num = intval(basename(getcwd()));
        $back = "/comic/01/".sprintf('%02d', $num - 1);
        $next = "/comic/01/".sprintf('%02d', $num + 1);
      ?>

      <a href="/comic/01/01/"><<</a>
      <a href=<?php echo $back;?>><</a>
      <a href="/comic/01/01/">[=]</a>
      <a href=<?php echo $next;?>>></a>
      <a href="/comic/latest.php">>></a>
    </p>

    
    
    <p class="image">
      <a href="comic.png">
      <img src="comic.png" alt=<?php include 'altText.txt';?> title=<?php include 'altText.txt';?> style="height:1334px;width:750px;"/>
      </a>
    </p>
    
    
    <p class="comicArrows">
      <a href="/comic/01/01/"><<</a>
      <a href=<?php echo $back;?>><</a>
      <a href="/comic/01/01/">[=]</a>
      <a href=<?php echo $next;?>>></a>
      <a href="/comic/latest.php">>></a>
    </p>
    
    
    
    <br />
    <p class="commenting">
      Add a comment, don't be shy. <br />
      Contact me for edits or deletions. <br />
    </p>
    
    <p class="commentForm">
      <form align="left" action="addComment.php" method="post" id="commentForm">
        <label for="username">Name</label><br>
        <input type="text" id="username" name="username" required><br><br>
        <label for="comment">Comment</label><br>
        <textarea name="comment" form="commentForm" required></textarea><br><br>
        <input type="submit" value="Submit">
      </form>
    </p>
    
    <p class="commentHeader">
      <br />
      <br />
      Comments:
    </p>
    

    <p class="comments">
      <?php
        $f = fopen("comments.txt", "r");

        // Read line by line until end of file
        while(!feof($f)) {
            echo fgets($f) . "<br />";
        }
        fclose($f);
       ?>
       <br />
    </p>

  </body>


</html>
