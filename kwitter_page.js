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

  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  room_name = localStorage.getItem("room_name");

  function send()
{
     msg = document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
     });

     document.getElementById("msg").value = "";
}