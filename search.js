// document.addEventListener('DOMContentLoaded', function() {
//     var link = document.getElementById("js-submit");
//     // onClick's logic below:
//     if(link!=null)
//     {
//         link.addEventListener('click', function() {
//             submitted();
//         });
//     }
// });

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


function searchClick(){
	window.alert("working");

	var name = document.getElementById("name_id").value;
	var email = document.getElementById("email_id").value;

  var database = firebase.database();
	var firebaseRef = database.ref();

  // writeUserData(name,email);

	//var newPost = firebaseRef.push();

	//newPost.child(name).set(email);
}

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById("js-submit");
    // onClick's logic below:
    if(link!=null)
    {
        link.addEventListener('click', function() {
            submitted();
        });
    }
});

function submitted(){
    document.getElementById('mailform').style.display = "none";
    document.getElementById('submitted_id').style.display = "block";
    const email = document.getElementById('js-email').value;
    console.log(email);
}


