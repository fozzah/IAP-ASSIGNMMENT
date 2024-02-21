// Query for the submit button and input task field
const submit = document.querySelector("#submit");
const newTask = document.querySelector("#newTask");

// Disable the submit button by default
submit.disabled = true;

// Listen for input to be typed into the input field
newTask.addEventListener("input", function() {
    // Enable/disable the submit button based on whether the input field is empty
    submit.disabled = newTask.value.trim() === "";
});

// Listen for submission of form
document.querySelector("form").addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Find the task the user just submitted
    const task = newTask.value.trim();

    // Create a list item for the new task and add the task to it
    const li = document.createElement("li");
    li.textContent = task;

    // Add the new element to our unordered list
    document.querySelector("ul").appendChild(li);

    // Clear the input field
    newTask.value = "";

    // Disable the submit button again
    submit.disabled = true;
});

// Prevent the default submission of the form
return false;
