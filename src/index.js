window.addEventListener('load', event => {
  let div = document.querySelector('div');
  let button = document.createElement('button');
  button.addEventListener('click', buttonHandler);

  button.textContent = 'Add';
  let input = document.createElement('input');
  input.addEventListener('keyup', event => {
    if (event.keyCode === 13) {
      event.preventDefault();
      button.click();
    }
  });
  div.insertBefore(input, div.childNodes[0]);
  div.insertBefore(button, div.childNodes[1]);
  let ul = document.createElement('ul');
  div.insertBefore(ul, div.childNodes[0]);

  if (localStorage.getItem('tasks') != undefined) {
    let todoList = JSON.parse(localStorage.getItem('tasks'));

    for (let i = 0; i < todoList.length; i++) {
      let ul = document.querySelector('ul'); //
      let div = document.querySelector('div');

      div.insertBefore(ul, div.childNodes[0]); //
      let li = document.createElement('li');
      let text = document.createTextNode(todoList[i]);
      li.appendChild(text);
      document.querySelector('ul').appendChild(li);
    }
  }
});

function buttonHandler() {
  let inputValue = document.querySelector('input').value;

  if (inputValue != '') {
    let ul = document.querySelector('ul');
    let div = document.querySelector('div');

    div.insertBefore(ul, div.childNodes[0]);
    let li = document.createElement('li');
    let text = document.createTextNode(inputValue);
    li.appendChild(text);
    document.querySelector('ul').appendChild(li);
    document.querySelector('input').value = '';

    sortList();

    let todoList = document.querySelectorAll('li');
    let textArr = [];
    for (let i = 0; i < todoList.length; i++) {
      textArr.push(todoList[i].textContent);
    }
    localStorage.setItem('tasks', JSON.stringify(textArr));
  }
}

function sortList() {
  var list, i, switching, b, shouldSwitch;
  list = document.querySelector('ul');
  switching = true;

  while (switching) {
    switching = false;
    b = list.querySelectorAll('li');
    for (i = 0; i < b.length - 1; i++) {
      shouldSwitch = false;
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}

window.addEventListener('storage', event => {
  let todoList = JSON.parse(localStorage.getItem('tasks'));
  let ul = document.querySelector('ul');

  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }

  for (let i = 0; i < todoList.length; i++) {
    let div = document.querySelector('div');

    div.insertBefore(ul, div.childNodes[0]);
    let li = document.createElement('li');
    let text = document.createTextNode(todoList[i]);
    li.appendChild(text);
    document.querySelector('ul').appendChild(li);
  }
});
