
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById("js-submit");
    // onClick's logic below:
    if(link!=null)
    {
        link.addEventListener('click', function() {
            submitted();
            submitClick();
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

var name;
var email;
var collegeName;

function submitClick(){

  name = document.getElementById("name_id").value.toLowerCase();
  email = document.getElementById("email_id").value.toLowerCase();

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
              collegeName = name;
              alert("I'm sorry, but the class you are looking for doesnt exist");
              document.getElementById('noSuchClass').style.display = "block";
              document.getElementById('submitted_id').style.display = "none";

            }
            else{
              showPost();

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

//addClass
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById("addClassButton");
    // onClick's logic below:
    if(link!=null)
    {
        link.addEventListener('click', function() {
            writeUserData(name, email);
            // submitClick();
        });
    }

});

function writeUserData(name, email) {
  firebase.database().ref(name + '/' + email).set({
    classSearchAmount: 0,
    className: email
  });

  firebase.database().ref(name + '/' + email + '/' + 'posts').set({
    postNumber: 0
  });

  document.getElementById('submitted_id').style.display = "block";

}

//not yet
function store() {
    var storedName = name;
    var storedEmail = email;
    document.cookie = "text=" + name +  "; path=/";
  }

//post
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById("postButton");
    // onClick's logic below:
    if(link!=null)
    {
        link.addEventListener('click', function() {
            post(name,email);
        });
    }
});

function post(name,email){
  var postTitle = document.getElementById("newPostTitleId");
  var postContent = document.getElementById("newPostContentId");
  var postID;
  
  // var postRef = firebase.database.ref(name + '/' + email + '/' + 'posts' +'/'+'postNumber');
  // var postID = postRef.key + 1;
  
  // firebase.database().ref(name + '/' + email + '/' + 'posts').set({
  //   postNumber: postID;
  // });

  firebase.database().ref(name + '/' + email + '/' + 'posts' +'/'+ postTitle.value).set({
    title: postTitle.value ,
    content: postContent.value
  });



  postTitle.reset();
  postContent.reset();
}

function showPost(){
  document.getElementById('submitted_id').style.display = "none";
  document.getElementById('postPage').style.display = "block";

  document.getElementById('postCollegeName').innerHTML = name;
  document.getElementById('postClassName').innerHTML = email;
}


