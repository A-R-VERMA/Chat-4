var firebaseConfig = {
    apiKey: "AIzaSyBYNNuEGPVk0Aad-OluCy4faHx-xTo7nR8",
    authDomain: "let-s-chat-web-app-18311.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-18311-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-18311",
    storageBucket: "let-s-chat-web-app-18311.appspot.com",
    messagingSenderId: "498614590981",
    appId: "1:498614590981:web:9be170294cff60c3e6066c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
}