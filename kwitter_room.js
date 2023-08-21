
const config = {
      apiKey: "AIzaSyBPfcY0idSLGUAPdh6a0Bm-BCqmen1rU4M",
      authDomain: "kwitter-42469.firebaseapp.com",
      databaseURL: "https://kwitter-42469-default-rtdb.firebaseio.com",
      projectId: "kwitter-42469",
      storageBucket: "kwitter-42469.appspot.com",
      messagingSenderId: "839459640002",
      appId: "1:839459640002:web:3c2964906f47e98b52615b"
    };
    
    // Initialize Firebase
   firebase = initializeApp(config);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicia el código

      //Finaliza el código
      });});}
getData();
