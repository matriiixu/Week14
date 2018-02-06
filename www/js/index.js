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
        var text = document.getElementById('text');
        text.innerHTML='Hi, this is update!';
    }
};
