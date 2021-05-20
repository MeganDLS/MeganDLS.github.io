let d = new Date();
document.querySelector('#copyrightyear').textContent = d.getFullYear();
document.querySelector('#modified').textContent = document.lastModified;


// Creating a list 
//const list = document.querySelector('#newChapter');
const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  
  let myItem = input.value;
  input.value = '';

  let li = document.createElement('li');
  const listText = document.createElement('span');
  const deleteBtn = document.createElement('button');

  li.appendChild(listText);
  listText.textContent = myItem;
  li.appendChild(deleteBtn);
  deleteBtn.textContent = '❌';
  list.appendChild(li);

deleteBtn.addEventListener('click', () => {
  list.removeChild(li);
  input.focus();

});

});