let myLibrary = [];

const addBookBtn = document.getElementById('add-new-book-btn')
const addNewBook = document.getElementById('add-new-book')
addBookBtn.addEventListener('click', e=>addNewBook.classList.add('active'))

const bookTitle = document.getElementById('book-title')
const bookAuthor = document.getElementById('book-author')
const bookPages = document.getElementById('book-pages')
const bookRead = document.getElementById('book-read')

const submitBtn = document.getElementById('submit-btn')

let inputTitle
let inputAuthor
let inputPages
let inputRead

const getBookDetails = (event) => {
    inputTitle = bookTitle.value
    inputAuthor = bookAuthor.value
    inputPages = bookPages.value
    inputRead = bookRead.value
    addBookToLibrary(inputTitle, inputAuthor, inputPages, inputRead)
    event.preventDefault();
    addNewBook.classList.remove('active')
}

submitBtn.addEventListener('click', getBookDetails)

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`)
    }
}

function addBookToLibrary(addTitle, addAuthor, addPages, addRead) {
    addTitle = new Book(addTitle, addAuthor, addPages, addRead)
    myLibrary.push(addTitle)
}


