
// checklist

const check_ul = document.getElementById("completed_list")
const addCheck = document.getElementById("check_button");
const searchBut = document.getElementById("Search_button");
const searchContent = document.getElementById('searchInput');



// Get the ul element
const ul = document.getElementById("task_list");

// Add a new l1 element when the "Add" button is clicked
const addButton = document.getElementById("add");
addButton.onclick = function () {
  addTask();
};

document.getElementById('newInput').addEventListener('keypress', (e) => {

  if (e.keyCode == 13) {

    addTask();

  }

})

searchBut.onclick = function () {
  SearchTask();
}


document.getElementById('searchInput').addEventListener('keypress', (e) => {
  if (e.keyCode == 13) {

    SearchTask();
  }
});

//Adding the task

function addTask() {


  const newL1 = document.createElement("li");
  const newdiv1 = document.createElement("div");
  newdiv1.className = "close_button";
  const but1 = document.createElement("button");
  but1.className = "remove";
  const but2 = document.createElement("button");
  but2.className = "remove";
  const but3 = document.createElement("button");
  but3.className = "remove";
  const but4 = document.createElement("button");
  but4.className = "remove";






  const newdiv2 = document.createElement("li");
  newdiv2.className = "close_button";


  const newItem = document.getElementById('newInput').value;

  if (newItem) {
    newL1.className = "list-group-item list-group-item-action list-group-item-primary";
    newL1.textContent = newItem;
    but1.innerHTML = "❌";
    but2.innerHTML = "✔️";
    but3.innerHTML = "❌";
    but4.innerHTML = "✎";
    newdiv1.appendChild(but4);
    newdiv1.appendChild(but1);
    newdiv1.appendChild(but2);
    newdiv2.appendChild(but3);
    newL1.appendChild(newdiv1);
    const taskData = {
      item: newItem,
      completed: false,
    };

    // Save taskData to local storage
    saveTaskToLocalStorage(taskData);





    const task1 = document.createElement("li");
    task1.className = "list-group-item list-group-item-action list-group-item-success";
    task1.textContent = newItem;
    let editMessage = newItem;
    task1.appendChild(newL1);
    task1.appendChild(newdiv2);


    but1.addEventListener('click', () => {
      ul.removeChild(newL1);
    })

    but2.addEventListener('click', () => {
      check_ul.appendChild(task1);


      ul.removeChild(newL1);
    })
    but3.addEventListener('click', () => {
      check_ul.removeChild(task1);
    })

    but4.addEventListener('click', () => {
      document.getElementById('newInput').value = editMessage;
      ul.removeChild(newL1);



    })

    var firstL1 = ul.firstChild; // get the reference node
    if (firstL1 != null) { // check if the reference node is not null
      ul.insertBefore(newL1, firstL1); // insert newL1 before firstL1
    } else {
      ul.appendChild(newL1); // insert newL1 at the end of the list

    }
    document.getElementById('newInput').value = ''



  }
};


// SearchTask

function SearchTask() {
  const searchText = document.getElementById('searchInput').value.toLowerCase();
  const ul1 = document.getElementById("task_list");
  const SearchList = ul1.querySelectorAll(".list-group-item");
  const originalList = Array.from(SearchList);

  originalList.forEach((element) => {
    const text = element.textContent.toLowerCase();
    if (text.includes(searchText)) {
      element.classList.remove("hidden"); // Remove 'hidden' class
    } else {
      element.classList.add("hidden");  // Add 'hidden' class
    }
  });


  const check_ul1 = document.getElementById("completed_list");
  const SearchList1 = check_ul1.querySelectorAll(".list-group-item");
  const originalList1 = Array.from(SearchList1);

  originalList1.forEach((element) => {
    const text = element.textContent.toLowerCase();
    if (text.includes(searchText)) {
      element.classList.remove("hidden"); // Remove 'hidden' class
    } else {
      element.classList.add("hidden");  // Add 'hidden' class
    }
  });
}

function saveTaskToLocalStorage(taskData) {
  // Retrieve existing tasks from local storage
  const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // Add the new taskData to the array
  existingTasks.push(taskData);

  // Save the updated array back to local storage
  localStorage.setItem('tasks', JSON.stringify(existingTasks));
}


function printData() {
  const getTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  getTasks.forEach(taskData => {

    
  const newL1 = document.createElement("li");
  const newdiv1 = document.createElement("div");
  newdiv1.className = "close_button";
  const but1 = document.createElement("button");
  but1.className = "remove";
  const but2 = document.createElement("button");
  but2.className = "remove";
  const but3 = document.createElement("button");
  but3.className = "remove";
  const but4 = document.createElement("button");
  but4.className = "remove";






  const newdiv2 = document.createElement("li");
  newdiv2.className = "close_button";


  const newItem = taskData.item;

  
    newL1.className = "list-group-item list-group-item-action list-group-item-primary";
    newL1.textContent = newItem;
    but1.innerHTML = "❌";
    but2.innerHTML = "✔️";
    but3.innerHTML = "❌";
    but4.innerHTML = "✎";
    newdiv1.appendChild(but4);
    newdiv1.appendChild(but1);
    newdiv1.appendChild(but2);
    newdiv2.appendChild(but3);
    newL1.appendChild(newdiv1);
  




    const task1 = document.createElement("li");
    task1.className = "list-group-item list-group-item-action list-group-item-success";
    task1.textContent = newItem;
    let editMessage = newItem;
    task1.appendChild(newL1);
    task1.appendChild(newdiv2)


    but1.addEventListener('click', () => {
      ul.removeChild(newL1);
      removeTaskFromLocalStorage(newItem);
      
    })

    but2.addEventListener('click', () => {
      check_ul.appendChild(task1);
      removeTaskFromLocalStorage(newItem);

      ul.removeChild(newL1);
    })
    but3.addEventListener('click', () => {
      check_ul.removeChild(task1);
    })

    but4.addEventListener('click', () => {
      document.getElementById('newInput').value = editMessage;
      ul.removeChild(newL1);



    })

    var firstL1 = ul.firstChild; // get the reference node
    if (firstL1 != null) { // check if the reference node is not null
      ul.insertBefore(newL1, firstL1); // insert newL1 before firstL1
    } else {
      ul.appendChild(newL1); // insert newL1 at the end of the list

    }


    
  });
}

function removeTaskFromLocalStorage(itemToRemove) {
  console.log('Removing item from local storage:', itemToRemove);
  const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const updatedTasks = existingTasks.filter(task => task.item !== itemToRemove);
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

printData();
