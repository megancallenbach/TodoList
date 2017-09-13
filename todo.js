function updateCounters() {
  // Updating total number of todos
  var totalCount = document.getElementById("total-count");
  var totalTodos = document.getElementsByClassName("todo").length;
  totalCount.innerHTML = totalTodos;

  // Updating total number of completed todos
  var completedCount = document.getElementById("completed-count");
  var completedTodos = document.getElementsByClassName("completed").length;
  completedCount.innerHTML = completedTodos;

  // Updating total number of uncomplete todos
  var todoCount = document.getElementById("todo-count");
  var uncompletedTodos = totalTodos - completedTodos;
  todoCount.innerHTML = uncompletedTodos;
}

updateCounters();
