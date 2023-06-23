const theList = document.querySelector("#list");
const favoriteChapter = document.querySelector("#favchap");
const mainButton = document.querySelector("#mainButton");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
   displayList(chapter);
});

mainButton.addEventListener('click', () => { 
    if(favoriteChapter.value != "") {
        displayList(favoriteChapter.value);
        chaptersArray.push(favoriteChapter.value);
        setChapterList();
        favoriteChapter.value = "";
        favoriteChapter.focus();
    }
 });

 function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 18);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList(chaptersArray);
 }

 function displayList(item) {
    if(item == "") {
        favoriteChapter.focus();
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = item;

        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = "❌";
        deleteButton.addEventListener('click', () => {
            deleteChapter(li.innerHTML);
            li.remove();
        });
        li.append(deleteButton);
        theList.append(li);
        favoriteChapter.focus();
    }
 }

 function getChapterList() {
    console.log(localStorage.getItem('favoriteBOMChapters'),'ccc');
    return JSON.parse(localStorage.getItem('favoriteBOMChapters'));
 }

 function setChapterList() {
    console.log('aaa');
    localStorage.setItem('favoriteBOMChapters', JSON.stringify(chaptersArray));
 }