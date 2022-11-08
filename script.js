let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.timeOfInput = function () {
        const date = new Date()
        let day = date.getDate()
        let month = date.getMonth()
        let year = date.getFullYear()
        return (`Date of input: ${month}-${day}-${year}`)
    }
    this.info = function () {
        let readStatus;
        this.read ? readStatus = 'You already read this book' : readStatus = 'You did not read this book yet'
        return (`Title : ${this.title} \rAuthor: ${this.author} \r Length: ${this.pages} pages\r\r ${this.timeOfInput()}\r\r ${readStatus}\r`)
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

const bookshelf = document.getElementById('bookshelf')

const createBookCard = (bookToDisplay) => {
    let bookCard = document.createElement('div')
    const readToggleBtn = document.createElement('button')
    readToggleBtn.id = 'read-toggle-btn'
    readToggleBtn.textContent= 'no'
    bookCard.innerText = (bookToDisplay.info())
    bookCard.appendChild(readToggleBtn)
    bookshelf.appendChild(bookCard)
}
//make create button function separate so it has the read status
//grab value of book.read 

const changeReadStatus = () => {
    const readStatusToggle = document.querySelectorAll('#read-toggle-btn')
    readStatusToggle.forEach(element => {
        element.addEventListener('click', e => console.log(e) )
    })
}

const showBooks = (where) => {
    where.forEach(book => {
        createBookCard(book)
    });
    changeReadStatus()
}

const addOnBookshelf = (addedBook) => {
    createBookCard(addedBook)
    changeReadStatus()
}



showBooks(myLibrary)

const addBookBtn = document.getElementById('add-new-book-btn')
const addNewBook = document.getElementById('add-new-book')
addBookBtn.addEventListener('click', e => addNewBook.classList.add('active'))

// make this neat
const bookTitle = document.getElementById('book-title')
const bookAuthor = document.getElementById('book-author')
const bookPages = document.getElementById('book-pages')
const bookRead = document.getElementById('book-read')

const submitBtn = document.getElementById('submit-btn')

const getBookDetails = (event) => {
    inputTitle = bookTitle.value
    inputAuthor = bookAuthor.value
    inputPages = bookPages.value
    inputRead = bookRead.checked
    addBookToLibrary(inputTitle, inputAuthor, inputPages, inputRead)
    event.preventDefault(); //just for know to stop browser from refreshing
    addOnBookshelf(myLibrary[myLibrary.length - 1])
    addNewBook.classList.remove('active')
}

submitBtn.addEventListener('click', getBookDetails)

function addBookToLibrary(addTitle, addAuthor, addPages, addRead) {
    addTitle = new Book(addTitle, addAuthor, addPages, addRead)
    myLibrary.push(addTitle)
}
