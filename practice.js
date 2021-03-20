
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBYOE7HOcjTHOe6QyGR5pw7Ix75fy55UvQ",
    authDomain: "classtest-45c09.firebaseapp.com",
    databaseURL: "https://classtest-45c09-default-rtdb.firebaseio.com",
    projectId: "classtest-45c09",
    storageBucket: "classtest-45c09.appspot.com",
    messagingSenderId: "515203725687",
    appId: "1:515203725687:web:0e45663076ff83b7164972"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}