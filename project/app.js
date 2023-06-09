const taskInput = document.querySelector("#task");
const taskForm = document.querySelector("#task-form");
const collection = document.querySelector('.collection');

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
function removeTaskHandler(event){
event.preventDefault();
const currentElement = event.target;
// console.log(currentElement,'currentElement');
if(confirm('Are you sure?')){
  currentElement.parentElement.parentElement.remove();
}
};