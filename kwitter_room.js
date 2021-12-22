// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCFeIrO-iKXkaSiGEGjN1BSrlB3PHUpaWc",
      authDomain: "kwitter-47a12.firebaseapp.com",
      databaseURL: "https://kwitter-47a12-default-rtdb.firebaseio.com",
      projectId: "kwitter-47a12",
      storageBucket: "kwitter-47a12.appspot.com",
      messagingSenderId: "153757252885",
      appId: "1:153757252885:web:986c8c7a39bc95a8bc3d1c"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
      // Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCFeIrO-iKXkaSiGEGjN1BSrlB3PHUpaWc",
      authDomain: "kwitter-47a12.firebaseapp.com",
      databaseURL: "https://kwitter-47a12-default-rtdb.firebaseio.com",
      projectId: "kwitter-47a12",
      storageBucket: "kwitter-47a12.appspot.com",
      messagingSenderId: "153757252885",
      appId: "1:153757252885:web:986c8c7a39bc95a8bc3d1c"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
}