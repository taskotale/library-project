let myLibrary = [];
const bookshelf = document.getElementById('bookshelf')

class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
        this.readBtn = document.createElement('button')
        this.readBtn.id = 'read-toggle-btn'
        this.readBtn.className = myLibrary.length
        this.readBtn.textContent = this.readStatus()
    }
    readStatus() {
        return this.read ? 'You already read this book' : 'You did not read this book yet'
    }
    timeOfInput() {
        const date = new Date()
        let day = date.getDate()
        let month = date.getMonth()
        let year = date.getFullYear()
        return (`Date of input: ${month}-${day}-${year}`)
    }
    info() {
        return (`Title : ${this.title} \rAuthor: ${this.author} \r Length: ${this.pages} pages\r\r ${this.timeOfInput()}\r\r`)
    }
}

//for testing purposes - will delete later
const book1 = new Book('addTitle', 'addAuthor', 'addPages', true)
myLibrary.push(book1)
const book2 = new Book('bookrandom', 'someone', '23423', false)
myLibrary.push(book2)
const book3 = new Book('dsada', 'zdc', '213', true)
myLibrary.push(book3)
const book4 = new Book('fsdf', 'addAudfdsfthor', '333', true)
myLibrary.push(book4)


const createBookCard = (bookToDisplay) => {
    let bookCard = document.createElement('div')
    bookCard.innerText = (bookToDisplay.info())
    bookCard.appendChild(bookToDisplay.readBtn)
    bookshelf.appendChild(bookCard)
}

const showBooks = (fromWhere) => {
    fromWhere.forEach(book => {
        createBookCard(book)
    });
}

const addOnBookshelf = (addedBook) => {
    createBookCard(addedBook)
}

showBooks(myLibrary)

const getBookDetails = (event) => {
    inputTitle = document.getElementById('book-title').value
    inputAuthor = document.getElementById('book-author').value
    inputPages = document.getElementById('book-pages').value
    inputRead = document.getElementById('book-read').checked
    addBookToLibrary(inputTitle, inputAuthor, inputPages, inputRead)
    event.preventDefault(); //just for know to stop browser from refreshing
    addOnBookshelf(myLibrary[myLibrary.length - 1])
    addNewBook.classList.remove('active')
}

const addBookBtn = document.getElementById('add-new-book-btn')
const addNewBook = document.getElementById('add-new-book')
addBookBtn.addEventListener('click', e => addNewBook.classList.add('active'))

const submitNewBookBtn = document.getElementById('submit-btn')
submitNewBookBtn.addEventListener('click', getBookDetails)

function addBookToLibrary(addTitle, addAuthor, addPages, addRead) {
    addTitle = new Book(addTitle, addAuthor, addPages, addRead)
    myLibrary.push(addTitle)
}

const readStatusToggle = document.querySelector('#bookshelf')
readStatusToggle.addEventListener('click', e => {
    if (e.target.id === 'read-toggle-btn') {
        myLibrary[e.target.className].read ? myLibrary[e.target.className].read = false : myLibrary[e.target.className].read = true
        myLibrary[e.target.className].readBtn.textContent = myLibrary[e.target.className].readStatus()
    }
})

