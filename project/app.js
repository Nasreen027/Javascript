const taskInput = document.querySelector("#task");
const taskForm = document.querySelector("#task-form");
const collection = document.querySelector('.collection');
const clearTaskBtn = document.querySelector('.clear-tasks');
const filterInput = document.querySelector('#filter');

// taskForm.addEventListener("submit", onTaskSubmit);
taskForm.addEventListener("submit", function (event) {
  event.preventDefault()
  const taskInputValue = taskInput.value;
  // console.log(taskInputValue, 'taskInputValue');

  if (!taskInputValue) {
    alert('please fill out this field');
    return;
  }

  const listElement = document.createElement("li");
  // console.log(listElement, 'listElement');
  listElement.className = 'collection-item';
  listElement.innerHTML = `
    ${taskInputValue}
    <a href="" class="secondary-content">
    <i class="delete-item fa fa-remove"></i>
    </a>
    `;
  collection.append(listElement);
  taskInput.value = '';
  bindDeleteTaskIcon();
});

// console.log(taskForm,'taskform');

function bindDeleteTaskIcon() {
  const selectAllDeleteIcons = document.querySelectorAll(".delete-item");
  // console.log(selectAllDeleteIcons,'selectAllDeleteIcons');
  selectAllDeleteIcons.forEach(function (singleBtn) {
    singleBtn.addEventListener('click', removeTaskHandler);
  });
  // console.log(selectAllDeleteIcons,'selectAllDeleteIcons');
};
function removeTaskHandler(event) {
  event.preventDefault();
  const currentElement = event.target;
  // console.log(currentElement,'currentElement');
  if (confirm('Are you sure?')) {
    currentElement.parentElement.parentElement.remove();
  }
};

clearTaskBtn.addEventListener('click', clearTaskHandler);

function clearTaskHandler(event) {
  event.preventDefault();
  if (confirm("Are you sure?")) {
    collection.innerHTML = "";
  }
};

filterInput.addEventListener('input', filterTaskHandler);

function filterTaskHandler(event){
event.preventDefault();
const currentElement = event.target;
// console.log(currentElement,'currentElement');
const searchValue = currentElement.value.toLowerCase();
console.log(searchValue,'searchValue');
// const selectAllItems = document.querySelector('.collection-item');
// selectAllItems.forEach(function(singleItem){
//   const itemText = singleItem.value.toLowerCase();
//   if(itemText.indexOf(searchValue)== -1){
//     singleItem.style.display = 'none';
//   }
//   else{
//     singleItem.style.display = 'block';
//   };
// });
};


