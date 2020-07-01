let myLibrary = [];
let bookNo = 0;

const container = document.querySelector('#container');
const bookCard = [];
const paragraph = [];
const deleteButton = [];
const readButton = [];

function addBookToLibrary(title, author, pages, read, misc) {
  this.title = title
  this.author = author
  this.pages = pages
  if (form.elements.read.checked == true) {
    this.read = 'yes';
  } else {
      this.read = 'no';
  }
  this.misc = misc
  this.info = function() {
      return title, author, pages, read, misc
  }
};

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    document.getElementById("dialogBox").showModal();
});

const submit = document.querySelector('#form');
submit.addEventListener('submit', () => {
    event.preventDefault();
    let form = document.querySelector("form");
    myLibrary[bookNo] = new addBookToLibrary(
        form.elements.title.value, 
        form.elements.author.value, 
        form.elements.pages.value, 
        form.elements.read.checked, 
        form.elements.notes.value);
    if (myLibrary[bookNo].title !== '') {
        render();
    }
    bookNo = bookNo + 1;
    document.getElementById('form').reset();
});

function render() {
    bookCard[bookNo] = document.createElement('div');
    bookCard[bookNo].classList.add('bookCard');
    bookCard[bookNo].style.border = 'thin solid #000000';
    bookCard[bookNo].style.backgroundColor = '#fff5cc';
    bookCard[bookNo].style.marginLeft = '20px';
    for (j = 1; j < 6; j++) {
        paragraph[j] = document.createElement('p');
        paragraph[j].classList.add('paragraph');
        paragraph[j].id = 'paragraph' + bookNo + j;
        console.log(paragraph[j].id);
        paragraph[j].style.marginLeft = '18px';
    }
    paragraph[1].textContent = 'Title: ' + myLibrary[bookNo].title;
    bookCard[bookNo].appendChild(paragraph[1]);
    paragraph[2].textContent = 'Author: ' + myLibrary[bookNo].author;
    bookCard[bookNo].appendChild(paragraph[2]);
    paragraph[3].textContent = 'Pages: ' + myLibrary[bookNo].pages;
    bookCard[bookNo].appendChild(paragraph[3]);
    paragraph[4].textContent = 'Read? ' + myLibrary[bookNo].read;
    bookCard[bookNo].appendChild(paragraph[4]);
    paragraph[5].textContent = 'Notes: ' + myLibrary[bookNo].misc;
    bookCard[bookNo].appendChild(paragraph[5]);

    deleteButton[bookNo] = document.createElement('button');
    deleteButton[bookNo].textContent = 'Delete';
    bookCard[bookNo].appendChild(deleteButton[bookNo])
    
    deleteButton[bookNo].addEventListener('click', () => {
        container.removeChild(event.target.parentNode);
    });

    readButton[bookNo] = document.createElement('button');
    readButton[bookNo].textContent = 'Toggle Read';
    readButton[bookNo].id = bookNo; //sets id to be referencable for myLibrary[event.target.id]
    bookCard[bookNo].appendChild(readButton[bookNo])

    readButton[bookNo].addEventListener('click', () => {
        let toggleHolder = 'paragraph' + event.target.id + 4; //finds paragraph 4 of button's parent bookCard

        if (myLibrary[event.target.id].read == 'no') {
            myLibrary[event.target.id].read = 'yes';
            document.getElementById(toggleHolder).textContent = 'Read? ' + myLibrary[event.target.id].read;
        } else {
            myLibrary[event.target.id].read = 'no';
            document.getElementById(toggleHolder).textContent = 'Read? ' + myLibrary[event.target.id].read; 
        }
    });
    
    container.appendChild(bookCard[bookNo]);
}