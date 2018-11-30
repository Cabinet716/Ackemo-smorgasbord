// Function to locally save the items in the todo list.
function get_todos() {
    // Creates a list in the div
    var todos = new Array;
    // localStorage.getItem(''); is used during the addTask function
    var todos_str = localStorage.getItem('todo');
    // If the local storage isn't empty, it will add the content in the 
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
 
function addTask() {
    // Getting the input from the html
    var task = document.getElementById('task').value;
    // Pushing the input to local storage in a JSON
    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}

// function show()
// function removeTask()