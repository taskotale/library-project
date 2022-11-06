let myLibrary = [];

const bookTitle = document.getElementById('book-title')
const bookAuthor = document.getElementById('book-author')
const bookPages = document.getElementById('book-pages')
const bookRead = document.getElementById('book-read')

const submitBtn = document.getElementById('submit-btn')

let inputTitle
let inputAuthor
let inputPages
let inputRead

const getBookDetails = () => {
    inputTitle = bookTitle.value
    inputAuthor = bookAuthor.value
    inputPages = bookPages.value
    inputRead = bookRead.value
    addBookToLibrary (inputTitle, inputAuthor, inputPages, inputRead)
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
    const addBook = new Book (addTitle, addAuthor, addPages, addRead)
    myLibrary.push(addBook)
}

