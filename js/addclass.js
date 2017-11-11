
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById("js-submit");
    // onClick's logic below:
    if(link!=null)
    {
        link.addEventListener('click', function() {
            submitted();
            // submitClick();
        });
    }
});

function submitted(){
    document.getElementById('mailform').style.display = "none";
    document.getElementById('submitted_id').style.display = "block";
}

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCdZgHrpVzs424o7cHGMzSG6m05GmhvD0E",
    authDomain: "pomona-37273.firebaseapp.com",
    databaseURL: "https://pomona-37273.firebaseio.com",
    projectId: "pomona-37273",
    storageBucket: "pomona-37273.appspot.com",
    messagingSenderId: "421305350666"
  };
  firebase.initializeApp(config);


function submitClick(){

  var name = document.getElementById("name_id").value.toLowerCase();
  var email = document.getElementById("email_id").value.toLowerCase();

  var database = firebase.database();
  var firebaseRef = database.ref();
  
  

  
}



