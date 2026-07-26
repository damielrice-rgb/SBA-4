const task = document.getElementById('task');
const category = document.getElementById('category');
const deadline = document.getElementById('dline');
const status = document.getElementById('status');
const add = document.getElementById('add');
console.log(add)
const display = document.getElementById('display');

const taskArr = [];

function checkOverdue(task) {
  const today = new Date();

  const taskDeadline = new Date(task.deadline);

  if (today > taskDeadline){
    task.status = "Overdue";
  }
}

function displayTasks() {
  display.innerHTML = "";
  for (let i = 0; i < taskArr.length; i++){

    const currentTask = taskArr[i];

    checkOverdue(currentTask);
  
    const li = document.createElement('li');
  
    li.innerHTML = `
    <p>Name: ${currentTask.taskName}</p>
    <p>Category: ${currentTask.category}</p>
    <p>Deadline: ${currentTask.deadline}</p>
    <p>Status: ${currentTask.status}</p>
    ` 
        const select = document.createElement("select");

      const option1 = document.createElement("option");

      option1.textContent = "Completed";
      option1.value = "Completed";

      const option2 = document.createElement("option");

      option2.textContent = "In Progress";
      option2.value = "In Progress";

      const option3 = document.createElement("option");

      option3.textContent = "Overdue";
      option3.value = "Overdue";

      select.appendChild(option1);
      select.appendChild(option2);
      select.appendChild(option3);

      select.value = currentTask.status;

         select.addEventListener("change", () => {
      currentTask.status = select.value;
      displayTasks();
  });

    li.appendChild(select);
      
    display.appendChild(li);
  }
}

function addTask (e) {
  console.log("button clicked!");
  e.preventDefault();

  const tobj =  {
  taskName: task.value,
  category: category.value, 
  deadline: deadline.value,
  status: "In Progress"
};

  taskArr.push(tobj);
  displayTasks();

  console.log("about to clear");

  task.value = "";
  category.value = "";
  deadline.value = "";
  status.value = "";

  console.log(taskArr);
}



add.addEventListener("click", addTask);





// const stringifiedTask = JSON(tobj);
// localStorage.setItem("correctObj", stringiedTask)
  

