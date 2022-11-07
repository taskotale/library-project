let myLibrary = [];
const bookshelf = document.getElementById('bookshelf')

const showLibrary = () => {
    myLibrary.forEach(book => {
        let bookCard = document.createElement('div')
        bookCard.innerText = (book.info())
        bookshelf.appendChild(bookCard)
    });
}


const book1 = new Book('addTitle', 'addAuthor', 'addPages', true)
myLibrary.push(book1)
const book2 = new Book('bookrandom', 'someone', '23423', false)
myLibrary.push(book2)
const book3 = new Book('dsada', 'zdc', '213', true)
myLibrary.push(book3)
const book4 = new Book('fsdf', 'addAudfdsfthor', '333', true)
myLibrary.push(book4)

showLibrary()

const addBookBtn = document.getElementById('add-new-book-btn')
const addNewBook = document.getElementById('add-new-book')
addBookBtn.addEventListener('click', e => addNewBook.classList.add('active'))

// make this neat, without too many get element
const bookTitle = document.getElementById('book-title')
const bookAuthor = document.getElementById('book-author')
const bookPages = document.getElementById('book-pages')
const bookRead = document.getElementById('book-read')

const submitBtn = document.getElementById('submit-btn')

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        //change the info message
        return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`)
    }
}

const addOnBookshelf = (addedBook) => {
    let bookCard = document.createElement('div')
        bookCard.innerText = (addedBook.info())
        bookshelf.appendChild(bookCard)
}

const getBookDetails = (event) => {
    inputTitle = bookTitle.value
    inputAuthor = bookAuthor.value
    inputPages = bookPages.value
    inputRead = bookRead.checked
    addBookToLibrary(inputTitle, inputAuthor, inputPages, inputRead)
    event.preventDefault(); //just for know to stop browser from refreshing
    addNewBook.classList.remove('active')
    addOnBookshelf(myLibrary[myLibrary.length-1])
}

submitBtn.addEventListener('click', getBookDetails)

function addBookToLibrary(addTitle, addAuthor, addPages, addRead) {
    addTitle = new Book(addTitle, addAuthor, addPages, addRead)
    myLibrary.push(addTitle)
}
