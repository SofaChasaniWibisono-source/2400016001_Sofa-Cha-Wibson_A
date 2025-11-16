const bgColor = document.getElementById('bgColor');
const increaseFont = document.getElementById('increaseFont');
const decreaseFont = document.getElementById('decreaseFont');
const toggleDark = document.getElementById('toggleDark');
const fontStyle = document.getElementById('fontStyle');
const body = document.body;
const taskInput = document.getElementById('taskInput');
const addTask = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

let fontSize = 16;

//ganti warna latar
bgColor.addEventListener('change', () => {
body.style.backgroundColor = bgColor.value;
});

// ukuran kecil font
increaseFont.addEventListener('click', () => {
fontSize += 2;
body.style.fontSize = fontSize + 'px';
});

// ukuran bersar font
decreaseFont.addEventListener('click', () => {
fontSize = Math.max(10, fontSize - 2);
body.style.fontSize = fontSize + 'px';
});

// Toggle dark mode
toggleDark.addEventListener('click', () => {
body.classList.toggle('dark-mode');
});

// ngubah gaya font
fontStyle.addEventListener('change', () => {
body.style.fontFamily = fontStyle.value;
});

// kolom to-do list
addTask.addEventListener('click', () => {
const taskText = taskInput.value.trim();
if (taskText === '') return;

const li = document.createElement('li');
li.textContent = taskText;

const deleteBtn = document.createElement('button');
deleteBtn.textContent = '❌';
deleteBtn.style.background = 'transparent';
deleteBtn.style.color = 'red';
deleteBtn.style.border = 'none';
deleteBtn.style.cursor = 'pointer';
deleteBtn.style.fontSize = '16px';

deleteBtn.addEventListener('click', () => {
    li.remove();
});

li.appendChild(deleteBtn);
taskList.appendChild(li);
taskInput.value = '';
});
