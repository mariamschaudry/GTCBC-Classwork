// Initialize Firebase
var config = {
    apiKey: "AIzaSyDbUAR5sox8bXApwC_pq1ZAgenApnLQmXU",
    authDomain: "elizabethtfox-gtcbc.firebaseapp.com",
    databaseURL: "https://elizabethtfox-gtcbc.firebaseio.com/",
    projectId: "elizabethtfox-gtcbc",
    storageBucket: "elizabethtfox-gtcbc.appspot.com",
    messagingSenderId: "254882547516"
};

firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// Create initial variables
var name = '';
var role = '';
var date = '';
var monthlyRate = 0;

// Capture Button Click
$("#add-new").on("click", function() {
    // Don't refresh the page!
    event.preventDefault();

    // Code in the logic for storing and retrieving the most recent user.
    name = $('#employee-name-input').val().trim();
    role = $('#role-input').val().trim();
    date = $('#date-input').val().trim();
    monthlyRate = $('#monthlyRate-input').val().trim();
    console.log(this);

    database.ref().set({
        name: name,
        role: role,
        date: date,
        monthlyRate: monthlyRate
    });


});

// Firebase watcher + initial loader HINT: .on("value")
database.ref().on("value", function(snapshot) {
    console.log(snapshot.val());
});