function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
 }
 const firebaseConfig = {
      apiKey: "AIzaSyA74mGT6pEyuodGtxKzeNLQZl3NQffmgwM",
      authDomain: "kwitter-56bc0.firebaseapp.com",
      databaseURL: "https://kwitter-56bc0-default-rtdb.firebaseio.com",
      projectId: "kwitter-56bc0",
      storageBucket: "kwitter-56bc0.appspot.com",
      messagingSenderId: "826615778985",
      appId: "1:826615778985:web:ea7c9dc25b5b2623f663b8",
      measurementId: "G-KR5HW2H2LY"
    };
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + " !" ;
  
    function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
 }
  
 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)'>#"+ Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });
 });
 }
 getData();
 function redirectToRoomName(name){
      console.log(name)
      localStorage.setItem("room_name", name)
      window.location = "kwitter_page.html";
 }
 
 