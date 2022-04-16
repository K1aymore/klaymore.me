
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



window.location.replace("../" + back);
