let newTask = $('#new-task');
let addTaskToList = $('#button');
let incompleteList = $('#incomplete-tasks');
let completedList = $('#completed-tasks');

// If inputfield is empty
function checkErrors(newTask) {
    console.log(newTask.val());
    if (newTask.val() === '') {
        alert('This cant be empty', {
            type: 'danger',
        });
        return true;
    }
        return false;
}

addTaskToList.on('click', addToDoList);

function addToDoList() {
    if (checkErrors(newTask)) {
        return;
    }

    //Creating new elements
    let inputContent = $('<input type="text"/>');
    let newItem = $('<li></li>');
    let allButtons = $('<div></div>');
    let changeBtn = $('<button></button>');
    let removeBtn = $('<button></button>');
    let completedBtn = $('<button></button>');

    //Icons
    changeBtn.html('<img src="icons8-edit-24.png" />');
    removeBtn.html('<img src="icons8-trash-24.png" />');
    completedBtn.html('<img src="icons8-task-completed-24.png" />');

    inputContent.addClass('inputContent form-control rounded-pill');
    allButtons.addClass('d-flex justify-content-center buttons');
    changeBtn.addClass('changeBtn btn btn-light rounded-circle m-1');
    completedBtn.addClass('completedBtn btn btn-light rounded-circle m-1');
    removeBtn.addClass('removeBtn btn btn-light rounded-circle m-1');

    incompleteList.append(newItem);
    inputContent.attr('value', newTask.val());
    inputContent.prop('disabled', true);
    newItem.append(inputContent);
    newItem.append(allButtons);
    allButtons.append(changeBtn);
    allButtons.append(completedBtn);
    allButtons.append(removeBtn);

    newTask.val("");

    //Change a task
    changeBtn.on('click', function(changeTask) {
        if (inputContent.val() === '') {
            alert('This cant be empty');
            return false;
        } else {
            inputContent.prop('disabled', !inputContent.prop('disabled'));
            completedBtn.show('slow');
        }
    }) 

    //Complete a task - change btn
    completedBtn.on('click', function(completeTask) {
        if (inputContent.val() === '') {
            alert('This cant be empty');
            return false;
        } else {
            completedList.append(newItem);
            completedBtn.fadeOut('slow');
        }
    
        changeBtn.on('click', function(moveBackToIncomplete) {
            inputContent.prop('disabled');
            incompleteList.append(newItem);
            newItem.append(completedBtn);
            completedBtn.fadeIn('slow');
        })
    })

    //Remove a task
    removeBtn.on('click', function(removeTask) {
        newItem.closest('li').fadeOut('slow');
    });
};




