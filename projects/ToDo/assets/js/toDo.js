function get_todos() {
    var todos = new Array; // Creates a new array
    var todos_str = localStorage.getItem('todo'); // Checks local story JSON todo
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); // If JSON isn't empty, adds each string to the array
    }
    return todos;
}
 
function add() {
    var task = document.getElementById('task').value; // Gets value from html input with Id task
    
    var todos = get_todos(); // Calls the list
    todos.push(task); // Push the task to todos
    localStorage.setItem('todo', JSON.stringify(todos)); // Saves list to JSON
 
    show();
 
    return false;
}
 
function remove() {
    var id = this.getAttribute('id'); // Creates a variable searching for elements with the attribute id
    var todos = get_todos(); // Calls the list
    todos.splice(id, 1); // Removes an element from the array
    localStorage.setItem('todo', JSON.stringify(todos)); // Saves list to JSON
 
    show();
 
    return false;
}
 
function show() {
    var todos = get_todos(); // Calls the list
 
    var html = '<ul>';
    for(var i=0; i<todos.length; i++) 
    {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">X</button></li>';
        // Shows each item in list within the array from [0] -> [x] and adds a button with the content X inside
    };
    html += '</ul>';
 
    document.getElementById('todos').innerHTML = html;
 
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) 
    {
        buttons[i].addEventListener('click', remove); // Adds the event of removing an element in the button
    };
}
 
document.getElementById('add').addEventListener('click', add); // Adds the event of adding an element in the add button
show();