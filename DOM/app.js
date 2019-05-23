// let links = document.links;
// let linksArr = Array.from(links);

// linksArr.forEach((item) => console.log(item));


// let forms = document.forms[0];
// console.log(forms);

// let list = document.querySelector('.collection');

// let listItems = Array.from(list.children)
// for (let i = 0; i <= listItems.length; i++) {
//   if (i % 2 === 0)
//     listItems[i].innerHTML = 'odd'
//   else
//     listItems[i].innerHTML = 'even'
// }
// // listItems.forEach((item) => {
//   console.log(item.innerText);
// });

// const input = document.querySelector('#task');

// input.addEventListener('paste', runEvent);

// function runEvent(e) {
//   e.preventDefault();
//   console.log('You Can not paste here');
// }

document.querySelector('#task-form').addEventListener('submit', addTasks);
document.querySelector('.clearBtn .btn').addEventListener('click', clearLocalStorage);

function addTasks(e) {
  e.preventDefault();

  const value = document.querySelector('#task').value;
  if (!value) return;

  let tasks;
  if (localStorage.getItem('tasks') === null)
    tasks = [];
  else
    tasks = JSON.parse(localStorage.getItem('tasks'));

  tasks.push(value);

  tasks.forEach(element => {
    console.log(element);
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));


}

function clearLocalStorage(e) {
  localStorage.clear();
}