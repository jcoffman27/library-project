let myLibrary = [];
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = parseInt(pages);
    this.read = read;
}
let modalBtn = document.getElementById("modal-btn");
let modalBg = document.getElementById("modal-bg");
let modalClose = document.getElementById("modal-close");
modalBtn.addEventListener('click', function(){
    modalBg.style.visibility = "visible";
    modalBg.style.opacity = "1";
});
modalClose.addEventListener('click', function(){
    modalBg.style.visibility = "hidden";
    modalBg.style.opacity = "0";
});
let submitNewBook = document.getElementById("addNew");
submitNewBook.addEventListener('click',addBookToLibrary);
let changeButtonToFinished = document.getElementsByClassName("book-read");
for (i = 0; i < changeButtonToFinished.length; i++) {
    changeButtonsToFinished[i].addEventListener("click", toggleButton);
};
function addBookToLibrary(){
    let newTitle = document.getElementById("titleInput");
    let newAuthor = document.getElementById("authorInput");
    let newPages = document.getElementById("pagesInput");
    let newRead = document.getElementById("readInput");
    if(newTitle.value ===""){
       return alert("Please Enter a Title");
    } else if (newAuthor.value ===""){
        return alert("Please Enter an Author");
    } else if (newPages.value ===""){
        return alert("Please Enter the Number of Pages");
    }
    let title = newTitle.value;
    let author = newAuthor.value;
    let pages = newPages.value;
    let read = "";



    function toggleButtonClass(){
        bookRead.classList.toggle("book-notread");   
    }


    
    let theNewBook = new Book(title, author, pages, read); 
    myLibrary.push(theNewBook); 
    let newBook = document.createElement('div');
    newBook.className = "book-card";
    let bookTitle = document.createElement('h3');
    bookTitle.className = "book-title";
    let bookAuthor = document.createElement('h6');
    bookAuthor.className = "book-author";
    let bookPages = document.createElement('p');
    bookPages.className = "book-pages";
    let bookRead = document.createElement('button');
    bookRead.className = "book-read";
    let bookClose = document.createElement('span');
    bookClose.className = "modal-close";

    
    
    newBook.appendChild(bookTitle);
    newBook.appendChild(bookAuthor);
    newBook.appendChild(bookPages);
    newBook.appendChild(bookRead);
    newBook.appendChild(bookClose);
    document.body.appendChild(newBook);

    function displayBookOnPage(){
        for (i = 0; i < myLibrary.length; i++){
                for (value of myLibrary){
                    bookTitle.innerHTML = myLibrary[i].title;
                    bookAuthor.innerHTML = myLibrary[i].author;
                    bookPages.innerHTML = myLibrary[i].pages;
                    bookRead.innerHTML = myLibrary[i].read;
                }
        }
        if(newRead.checked === true ){
            return read = "completed";
        } else if(newRead.checked === false){
            
            bookRead.classList.toggle("book-notread");
            return read = "completed";
        }
    }

    function removeBook(){
        newBook.style.visibility = "hidden";
        newBook.style.opacity = "0";
        newBook.remove();
            myLibrary.pop(theNewBook);
    };

    function resetTheNewBook(){
        theNewBook.title = "";
        theNewBook.author ="";
        theNewBook.pages = "";
        theNewBook.read = "";
        newTitle.value = "";
        newPages.value = "";
        newAuthor.value = "";
        newRead.checked = false;
        submitNewBook.disable = false;;
    }
        displayBookOnPage();
        resetTheNewBook();
        modalBg.style.visibility = "hidden";
        modalBg.style.opacity = "0";
        bookRead.addEventListener('click', toggleButtonClass);
        bookClose.innerHTML = "X";
        bookClose.addEventListener('click', removeBook);
}



        
            


        //if(bookRead.value !== "completed"){
        //bookRead.style.backgroundColor = "red";
       // }else if (bookRead.value === "completed"){
       // bookRead.style.backgroundColor = "green";
       // };
    



    //change the color and the name




/**  if(bookReadButton.value === "completed" ){
            bookReadButton.value === "completed";
            bookReadButton.style.backgroundColor = "#409D69";
        } else {
            bookReadButton.value === "in-progress";
            bookReadButton.style.backgroundColor = "red";
        };
        
        */

//Add a button each books display to remove the book from the library
//Add a button on each books display to change its read status by creating a function that toggles a books read status on your books prototype instance


//Use localstorage


//Play around with firebase


//Create reading list
//adds up total pages
//allows you to calculate how long the reading list will take if your goal is to read X amount of pages a day
//or tells you how quickly you will finish reading based on your reading speed



