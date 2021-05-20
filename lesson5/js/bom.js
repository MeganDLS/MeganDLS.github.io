let d = new Date();
document.querySelector('#copyrightyear').textContent = d.getFullYear();
document.querySelector('#modified').textContent = document.lastModified;

const addedItem = document.querySelector('#newChapter');
const button = document.querySelector('button');
const output = document.querySelector('.list');

button.addEventListener('click', function() {
    let myChapter = input.value;
    input.value = '';

    const listChapters = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listChapters.appendChild(listText);
    listText.textContent = myChapter;
    listChapter.appendChild(listBtn);
    listBtn.textContent = 'Delete';
    list.appendChild(listItem);

    listBtn.onclick = function(e) {
    list.removeChild(listItem);
    }

    input.focus();
      })