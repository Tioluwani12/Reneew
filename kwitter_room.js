// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAkMDTZ0HrXl-s4nUMyhum7AC1Kho-CopE",
      authDomain: "kwitter-ac6bf.firebaseapp.com",
      databaseURL: "https://kwitter-ac6bf-default-rtdb.firebaseio.com",
      projectId: "kwitter-ac6bf",
      storageBucket: "kwitter-ac6bf.appspot.com",
      messagingSenderId: "117230222046",
      appId: "1:117230222046:web:aa07979821af023265604f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding user_name"
      });
      localStorage.setItem("room_name",room_name);
      localStorage.getItem("room_name",room_name);
      window.location="kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("room_name -" + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();


function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";

}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}

function move(){
window.location="Take";
}


var firebaseConfig = {
      apiKey: "AIzaSyB_lZNsgWPlfbdk6ph2y0xaJj2nwnFs6Kw",
      authDomain: "communicator-voice.firebaseapp.com",
      databaseURL: "https://communicator-voice-default-rtdb.firebaseio.com",
      projectId: "communicator-voice",
      storageBucket: "communicator-voice.appspot.com",
      messagingSenderId: "533474078078",
      appId: "1:533474078078:web:5b89cc58c0263c4d3c172f",
      measurementId: "G-NK60DYP4XK"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDqTqyS9Tjw-9f3Y7hRbnGBGN1P7MbiMFw",
      authDomain: "kwitter-room-b7ea3.firebaseapp.com",
      databaseURL: "https://kwitter-room-b7ea3-default-rtdb.firebaseio.com",
      projectId: "kwitter-room-b7ea3",
      storageBucket: "kwitter-room-b7ea3.appspot.com",
      messagingSenderId: "562849800753",
      appId: "1:562849800753:web:d69b1006740e5a7dc9ab10"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

//YOUR FIREBASE LINKS

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg,
            like : 0 
      });
      document.getElementById("msg").value=" ";

}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

//Start code

console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message=message_data['message'];
like = message_data['like'];
name_with_tag="<h4>" + name + "<img class='user_tick' src='tick.png'> </h4>";
message_with_tag="<h4 class='message_h4'>" + message + "</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbsup'>like : "+ like + "</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;

//End code
       } });  }); }
getData();


function updateLike(message_id){
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}

function addPublic(){
      localStorage.getItem("comment_name",comment_name);   
}

function go(){
      window.location="Selfie_Take"
}

function addlike(){
      <h2 class="color_white">0</h2>
}