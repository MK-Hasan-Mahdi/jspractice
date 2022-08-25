/* 
1. DOM Selection
2. Event Listener
3. Basic Validation
4. Creating Elements
5. Appending Elements
*/

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const bookList = document.querySelector('#book-list');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function (e) {
    e.preventDefault();
    if (title.value === '' || author.value === '' || year.value === '') {
        alert('Please fill in all fields');
    }
    else {
        const newRow = document.createElement('tr');

        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild = newTitle;

        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild = newAuthor;

        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild = newYear;

    }
})
