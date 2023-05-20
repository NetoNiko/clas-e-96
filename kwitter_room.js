// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyD6OE5byCpJoIprvHTEiX-cTXEM-hEmdzE",
authDomain: "sidhjiowkahiowujiowajskaalk-1.firebaseapp.com",
databaseURL: "https://sidhjiowkahiowujiowajskaalk-1-default-rtdb.firebaseio.com",
projectId: "sidhjiowkahiowujiowajskaalk-1",
storageBucket: "sidhjiowkahiowujiowajskaalk-1.appspot.com",
messagingSenderId: "38766845931",
appId: "1:38766845931:web:871c5bf32917ed8de203ae"
};

// Initialize Firebase
firebase.initializeApp = initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";



function addRoom(){

room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({ purpose: "agregar nombre de sala" });

localStorage.setItem("room_name", room_name); 
window.location.replace("kwitter_page.html");


} 