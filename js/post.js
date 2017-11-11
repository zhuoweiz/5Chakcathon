

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

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById("post");
    // onClick's logic below:
    if(link!=null)
    {
        link.addEventListener('click', function() {
            submitted();
            submitClick();
        });
    }
});

//css modification
function submitted(){
}

//post click
function submitClick(){
	window.alert("working");

	var name = document.getElementById("name_id").value.toLowerCase();
	var email = document.getElementById("email_id").value.toLowerCase();

  var database = firebase.database();
	var firebaseRef = database.ref();

  writeUserData(name,email);

	//var newPost = firebaseRef.push();

	//newPost.child(name).set(email);
}




function post(name, email) {

  firebase.database().ref(name + '/' + email + '/' + 'post').set({
    title:"wer" ,
    content: "meeting at 10"
  });

}