import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBgmoB35948pimUIZAzh76uz11QyFnoUoQ",
    authDomain: "login-using-firebase-hci.firebaseapp.com",
    projectId: "login-using-firebase-hci",
    storageBucket: "login-using-firebase-hci.appspot.com",
    messagingSenderId: "631470022752",
    appId: "1:631470022752:web:149029749720045fc2a305"
  };

 // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
const auth = getAuth()

const email = document.getElementById("email")
const password = document.getElementById("password")

window.login = function(e){
    e.preventDefault()
    var obj = {
        email: email.value,
        password: password.value,
    }
    signInWithEmailAndPassword(auth,obj.email,obj.password)
    .then(function(success){
        alert("logged successfuly");
    })
    .catch(function(error){
        alert("error")
    })
    console.log(obj)
    window.location.href("home.html")
}