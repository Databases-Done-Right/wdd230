const theList = document.querySelector("#list");
const favoriteChapter = document.querySelector("#favchap");
const mainButton = document.querySelector("#mainButton");

mainButton.addEventListener('click', () => { 
    if(favoriteChapter.value == "") {
        favoriteChapter.focus();
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = favoriteChapter.value;

        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = "❌";
        deleteButton.addEventListener('click', () => {
            li.remove();
            favoriteChapter.focus();
        });

        li.append(deleteButton);
        theList.append(li);
        favoriteChapter.value = "";
        favoriteChapter.focus();
    }
 })