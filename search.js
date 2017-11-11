
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
  

  firebaseRef.once('value', function(snapshot) {
        if (!snapshot.hasChild(name)) {
            alert("I'm sorry, but that college doesnt exists");
            window.location.href = "create_college.html";
        }
        else{
          var collegeRef = firebaseRef.child(name);
          collegeRef.once('value', function(snapshot){
            if(!snapshot.hasChild(email)){
              alert("I'm sorry, but the class you are looking for doesnt exist");
              window.location.href = "add_class.html";
            }
          });
        }
    });
  // else if(database.ref(name+'/'+email).key ===null)
  // {
  //   window.location.href = 'add_class.html';
  // }
  //var newPost = firebaseRef.push();

  //newPost.child(name).set(email);
}

//add class
function addClass(collegeName){
  var email = document.getElementById("email_id").value.toLowerCase();


  document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById("addClassButton");
    // onClick's logic below:
    if(link!=null)
    {
        link.addEventListener('click', function() {
            submitted();
            // submitClick();
        });
    }
});

}

