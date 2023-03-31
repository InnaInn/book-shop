const  fragment = document.createDocumentFragment();
const bodyElement = document.querySelector('body');

/*Окно описания*/
const popUpElement = document.createElement('div');
popUpElement.classList.add('pop-up');
popUpElement.classList.add('hidden');
bodyElement.prepend(popUpElement);

const popUpContentElement = document.createElement('div');
popUpContentElement.classList.add('pop-up-content');
popUpElement.append(popUpContentElement);

const popUpClose = document.createElement('button');
popUpClose.classList.add('popUpClose');
popUpClose.setAttribute('type', 'button');
popUpContentElement.prepend(popUpClose);

const popUpCloseIcon = document.createElement('span');
popUpCloseIcon.classList.add('materialIcons');
popUpCloseIcon.innerText = "close";
popUpClose.prepend(popUpCloseIcon);

const  bookListImg = document.createElement('img');
bookListImg.classList.add('bookListImg');
bookListImg.setAttribute('alt', '');
popUpClose.after(bookListImg);

const pupUpBlockInfo = document.createElement('div');
pupUpBlockInfo.classList.add('bookInfoBlock');
bookListImg.after(pupUpBlockInfo);

const bookListTitle = document.createElement('h3');
bookListTitle.classList.add('bookListTitle');
pupUpBlockInfo.append(bookListTitle);

const bookListSubtitle = document.createElement('h4');
bookListSubtitle.classList.add('bookListSubtitle');
pupUpBlockInfo.append(bookListSubtitle);


const bookDescription = document.createElement('p');
bookDescription.classList.add('bookDescription');
pupUpBlockInfo.append(bookDescription);

const popUpCloseBtn = document.querySelector('.popUpClose');

popUpCloseBtn.addEventListener('click', () => {
    popUpElement.classList.add('hidden');
});
 /*header*/
const headerElement  = document.createElement('header');
headerElement.classList.add('header');
popUpElement.after(headerElement);
/*первый div  в header*/
const headerContainer = document.createElement('div');
headerContainer.classList.add('container');
headerContainer.classList.add('wrapper');
headerElement.prepend(headerContainer);
/*h1*/
const headerTitle = document.createElement('h1');
headerTitle.classList.add('headerTitle');
headerContainer.prepend(headerTitle);
/*a   в лого*/
const  headerTitleLink = document.createElement('a');
headerTitleLink.classList.add('headerTitleLink');
headerTitle.prepend(headerTitleLink);
headerTitleLink.setAttribute('href', '#');
headerTitleLink.innerHTML="BookShop";
/*картинка в лого*/
const headerImgLogo = document.createElement('img');
headerImgLogo.classList.add('headerImgLogo');
headerTitleLink.prepend(headerImgLogo);
headerImgLogo.setAttribute('src', '../assets/images/logo.png');
headerImgLogo.setAttribute('alt', 'logo')
/* блок main*/

const  mainElement = document.createElement('main');
mainElement.classList.add('main')
headerElement.after(mainElement);

/* первый div в блоке*/

const mainContainer = document.createElement('div');
mainContainer.classList.add('container');
mainContainer.classList.add('wrapperMain');
mainElement.append(mainContainer);

/*код секции*/

const bookSection =document.createElement('section');
bookSection.classList.add('bookSection');
mainContainer.prepend(bookSection);

/*  h2 заголовок с main*/

const  headerMain = document.createElement('h2');
headerMain.classList.add('headerMain');
headerMain.innerText = "Book catalog";
bookSection.prepend(headerMain);

/* список книг*/

const listBook = document.createElement('ul');
listBook.classList.add('listBook');
bookSection.append(listBook);

/*корзина*/

const  cartBook = document.createElement('aside');
cartBook.classList.add('cartBook');
bookSection.after(cartBook);

/*заголовок карзины*/

const cartBookHeader =document.createElement('h2');
cartBookHeader.classList.add('cartBookHeader');
cartBookHeader.innerHTML = "Your cart";
cartBook.prepend(cartBookHeader);

/* текст суммы в корзине*/

let  sum = 0;

const sumCartText = document.createElement('p');
sumCartText.classList.add('sumCardText');
sumCartText.innerText = `Total: ${sum}$`;
cartBookHeader.after(sumCartText);

const cart = document.querySelector('.cartBook');
/*body cart*/
const cartContainer =  document.createElement('div');
cartContainer.classList.add('cartContainer');
cartBook.append(cartContainer);

const  confirmContainer = document.createElement('div');
confirmContainer.classList.add('confirmContainer');
cartBook.append(confirmContainer);

const confirmButton = document.createElement('a');
confirmButton.href = 'from.html';
confirmButton.classList.add('confirmButton', 'hidden');
confirmButton.innerText = 'Confirm';
confirmContainer.append(confirmButton);


const footerElement  = document.createElement('footer');
footerElement.classList.add('footer');
mainElement.after(footerElement);


const footerContainer = document.createElement('div');
footerContainer.classList.add('container');
footerContainer.classList.add('wrapper');
footerElement.prepend(footerContainer);

const footerTitle = document.createElement('p');
footerTitle .classList.add('footerTitle');
footerTitle.innerHTML = "©Inna Ivanova, 2023";
footerContainer.prepend(footerTitle);




/*Books rendering*/

let bookListArray = [];
let cartContent = {};

fetch('../assets/goods.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        bookListArray = data.map((book, index) => {
            book.id = index;
            return book
        });
        renderBooks(bookListArray);
    });


function renderBooks(books) {
    books.forEach(book => {

        const bookListItem = document.createElement('li');
        bookListItem.classList.add('bookListItem');
        bookListItem.setAttribute('draggable', 'true');
        bookListItem.setAttribute('data-id', book.id);
        bookListItem.setAttribute('data-price', book.price);
        listBook.append(bookListItem);

        const blockHidden = document.createElement('div');
        blockHidden.classList.add('blockHidden');
        blockHidden.classList.add('hidden');
        bookListItem.append(blockHidden);


        const  bookListImg = document.createElement('img');
        bookListImg.classList.add('bookListImg');
        bookListImg.setAttribute('src', book.imageLink);
        bookListImg.setAttribute('draggable', 'true');
        bookListImg.setAttribute('alt', '');
        bookListItem.append(bookListImg);

        const infoAboutBook = document.createElement('div');
        infoAboutBook.classList.add('infoAboutBook');
        bookListItem.append(infoAboutBook);

        let titleShort = book.title;
        const maxLength = 30;
        if (titleShort.length > maxLength) {
            titleShort = titleShort.substring(0, maxLength) + '...';
        }
        const bookListTitle = document.createElement('h3');
        bookListTitle.classList.add('bookListTitle');
        bookListTitle.innerText = titleShort;
        infoAboutBook.append(bookListTitle);

        const bookListSubtitle = document.createElement('h4');
        bookListSubtitle.classList.add('bookListSubtitle');
        bookListSubtitle.innerText = book.author;
        infoAboutBook.append(bookListSubtitle);

        const bookListPrice = document.createElement('p');
        bookListPrice.classList.add('bookListPrice');
        bookListPrice.innerText = `Price: ${book.price}$`;
        infoAboutBook.append(bookListPrice);

        const blockButton = document.createElement('div');
        blockButton.classList.add('blockButton');
        bookListItem.append(blockButton);

        const bookInfo = document.createElement('button');
        bookInfo.innerText = "More";
        bookInfo.classList.add('bookInfo');
        blockButton.append(bookInfo);

        const addToCart = document.createElement('button');
        addToCart.innerText = "Add to cart";
        addToCart.classList.add('addToCart');
        blockButton.append(addToCart);



    })

}

/* Popup */


window.addEventListener('click', function(event){
    if(event.target.classList.contains('bookInfo')) {
        popUpRender(event);
        popUpElement.classList.remove('hidden');
    }
});

function popUpRender(event) {
    let bookNum = event.target.parentElement.parentElement.dataset.id;
    let book = bookListArray[bookNum];

    bookListImg.setAttribute('src', book.imageLink);
    bookListTitle.innerText = book.title;
    bookListSubtitle.innerText = book.author;
    bookDescription.innerText = book.description;
}


/*Add to card*/

window.addEventListener('click', function(event) {
 if(event.target.classList.contains('addToCart')) {
     let bookId = event.target.parentElement.parentElement.dataset.id;
     addToCart(bookId);
 }
});

function addToCart(bookId) {
    if (cartContent[bookId] == null) {
        cartContent[bookId] = 1;
    } else {
        cartContent[bookId]++;
    }
    renderCart();
}

/* Drag and drop */

let draggingBookId = null;

function getBookCard(event) {
    if (event.target.classList.contains('bookListItem')) {
        return event.target;
    } else if (event.target.classList.contains('bookListImg')) {
        return event.target.parentElement;
    }
}

window.addEventListener('dragstart', function(event) {
    let card = getBookCard(event);
    if (card != null) {
        card.classList.add('bookDragging');
        draggingBookId = card.dataset.id;
    }
});

window.addEventListener('dragend', function(event) {
    let card = getBookCard(event);
    if (card != null) {
        card.classList.remove('bookDragging');
    }
});

window.addEventListener('dragover', function(event) {
    event.preventDefault();
});

window.addEventListener('drop', function(event) {
    if (draggingBookId != null) {
        if (event.target.classList.contains('cartBook') || event.target.parentElement.classList.contains('bookCardCart')) {
            addToCart(draggingBookId);
            draggingBookId = null;
        }
    }
});

/* Cart render */

function renderCart() {
    cartContainer.replaceChildren();
    let result = 0;
    for (let bookId in cartContent) {
        let book = bookListArray[bookId];

        result += book.price * cartContent[bookId];

        const addBook = document.createElement('div');
        addBook.classList.add('bookCardCart');
        addBook.setAttribute('data-id', book.id);
        addBook.setAttribute('data-counter', 1);
        cartContainer.prepend(addBook);


        const bookListTitle = document.createElement('h3');
        bookListTitle.classList.add('bookListTitle');
        bookListTitle.innerText = book.title;
        addBook.append(bookListTitle);

        const bookListSubtitle = document.createElement('h4');
        bookListSubtitle.classList.add('bookListSubtitle');
        bookListSubtitle.innerText = book.author;
        addBook.append(bookListSubtitle);

        const bookListPrice = document.createElement('p');
        bookListPrice.classList.add('bookListPrice');
        bookListPrice.innerText = `Price: ${book.price}$`;
        addBook.append(bookListPrice);

        const bookQuantity = document.createElement('div');
        bookQuantity.classList.add('bookQuantity');
        bookQuantity.innerText = `Quantity: ${cartContent[bookId]}`;
        addBook.append(bookQuantity);

        const cardClose = document.createElement('button');
        cardClose.classList.add('popUpClose');
        addBook.append(cardClose);

        const cardCloseSpan = document.createElement('span');
        cardCloseSpan.classList.add('materialIcons');
        cardCloseSpan.innerText = "close";
        cardClose.prepend(cardCloseSpan);

             cardClose.addEventListener('click', (event) => {
                let bookId = event.target.parentElement.parentElement.dataset.id;
                delete cartContent[bookId];
                renderCart();
             });

    }
    updateSum(result)
}

function updateSum(result){
    const cartSum = document.querySelector('.sumCardText');
    cartSum.innerHTML= `Total: ${result}$`;
    if(result > 0) {
        confirmBtnUpdate(true);
    } else {
        confirmBtnUpdate(false);
    }
}

function confirmBtnUpdate(arg) {
    if (arg) {
        confirmButton.classList.remove('hidden');
    } else {
        confirmButton.classList.add('hidden');
    }

}

