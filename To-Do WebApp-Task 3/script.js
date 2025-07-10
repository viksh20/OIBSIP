// script.js
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const timestamp = new Date().toLocaleString();
  const li = createTaskElement(taskText, timestamp, false);

  document.getElementById('pendingList').appendChild(li);
  taskInput.value = '';
}

function createTaskElement(text, timestamp, isCompleted) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerHTML = `${text}<span class="timestamp">Added: ${timestamp}</span>`;

  const actions = document.createElement('div');
  actions.className = 'actions';

  if (!isCompleted) {
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.className = 'action complete';
    completeBtn.onclick = () => completeTask(li, text);
    actions.appendChild(completeBtn);
  }

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.className = 'action edit';
  editBtn.onclick = () => editTask(span, li, isCompleted);
  actions.appendChild(editBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'action delete';
  deleteBtn.onclick = () => li.remove();
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);
  return li;
}

function completeTask(taskElement, taskText) {
  taskElement.remove();
  const completedTime = new Date().toLocaleString();
  const completedTask = createTaskElement(taskText, completedTime, true);
  const timeStamp = completedTask.querySelector('.timestamp');
  timeStamp.textContent = `Completed: ${completedTime}`;
  document.getElementById('completedList').appendChild(completedTask);
}

function editTask(span, li, isCompleted) {
  const newText = prompt('Edit your task:', span.childNodes[0].nodeValue.trim());
  if (newText && newText.trim() !== '') {
    const time = new Date().toLocaleString();
    span.innerHTML = `${newText}<span class="timestamp">${isCompleted ? "Completed" : "Updated"}: ${time}</span>`;
  }
}
