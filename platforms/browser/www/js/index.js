Backendless.initApp("5635B4D5-C5C6-89F0-FF31-CCF45BCE9900","7100DD0F-81D1-52F7-FF6A-0B85A153D400");

// When page opens
$(document).on("pageshow","#pageone", onPageShow);

function onPageShow() {
    
    Backendless.Data.of("Tasks").find().then(processResults).catch(error);
    
    function processResults(tasks) {
        //display the first task in an array of tasks.
            
        for(var i=0; i<tasks.length; i++){
            var number = i + 1;
            $('#tasklist').append("<li>" + number +") " + "<nbsp>" + tasks[i].Task + "</li>");
            console.log(number + ") " + tasks[i].Task);
        }
        $('#tasklist').listview('refresh');
    
    }
    function error(err) {
        console.log(err);
    }
}

// When add is clicked
$(document).on("click","#addTaskButton", onAddTask);
    
    function onAddTask(){
        var tasktext = $('#addTaskText').val();
        if(tasktext != ""){
            console.log('Add Button Pressed, here is what you\'ve written: ');
            console.log('\"' + tasktext + '\"');

            var newTask = {};
            newTask.Task = tasktext;
            Backendless.Data.of("Tasks").save(newTask).then(saved).catch(error);

            function saved(savedTask) {
                console.log( "new Contact instance has been saved" + savedTask);
            }
            
        }else{
            alert('Write a task');
        }
    }

$(document).on("click","#addTaskButton", onAddTask);
