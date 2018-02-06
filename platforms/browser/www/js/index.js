Backendless.initApp("5635B4D5-C5C6-89F0-FF31-CCF45BCE9900","7E1F94C4-523F-48B0-FFB6-4BAEBE6A2B00");
var app = {
    // CONSTRUCTOR
    initialize: function() {
        this.bindEvents();
    },
    
    // EVENT BINDER
    bindEvents: function() {
        
        
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
    // DEVICEREADY
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    
    // UPDATE
    receivedEvent: function(id) {
        
        
        
        Backendless.Data.of("TASKS").find().then(processResults).catch(error);
        function processResults(tasks) {
        //display the first task in an array of tasks.
            var text = document.getElementById('text');
            text.innerHTML=tasks[0].Task;
            //alert();
        }
        function error(err) {
        alert(err);
        }
        
        
    }
};
