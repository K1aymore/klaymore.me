
let dirname = window.location.pathname;

let chapter = dirname.substring(7, 9);
let page = dirname.substring(dirname.lastIndexOf('/') - 2);
page = page.substring(0, 2); // removes trailing slash

chapter = parseInt(chapter, 10) 
page = parseInt(page, 10)

let zChapter = String(chapter).padStart(2, '0')
let zPage = String(page).padStart(2, '0')

let back = String(page - 1).padStart(2, '0')
let next = String(page + 1).padStart(2, '0')


console.log(window.location.pathname);
console.log("chapter: " + chapter)
console.log("page: " + page);
console.log("back: " + back);
console.log("next: " + next);



let backArrows = document.getElementsByClassName('backArrow');
for (let i = 0; i < backArrows.length; i++) {
  backArrows[i].setAttribute("href", "../" + back);
}

let nextArrows = document.getElementsByClassName('nextArrow');
for (let i = 0; i < nextArrows.length; i++) {
  nextArrows[i].setAttribute("href", "../" + next);
}




let form = document.getElementById('commentForm');
form.setAttribute("action", "https://klaymore.me" + dirname + "addComment.php");

document.getElementById('formURL').setAttribute("value", window.location.href);
document.getElementById('formChapter').setAttribute("value", zChapter);
document.getElementById('formPage').setAttribute("value", zPage);
