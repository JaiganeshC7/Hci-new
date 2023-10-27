import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

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
const auth = getAuth()

const fname = document.getElementById("fname")
const email = document.getElementById("email")
const password = document.getElementById("password")

window.signup = function(e){
    e.preventDefault()
    var obj = {
        fname: fname.value,
        email: email.value,
        password: password.value,
    }

    createUserWithEmailAndPassword(auth,obj.email,obj.password)
    .then(function(success){
        alert("signup successful")
    })
    .catch(function(error){
        alert("error "+error)
    })
    console.log(obj)
}


  /*function register(){
    fname = document.getElementById("name")
    email = document.getElementById("email")
    password = document.getElementById("password")

    if(validate_email(email)==false || validate_password(password)==false){
        alert(`Incorrect format`)
        return
    } 

    auth.createUserWithEmailAndPassword(email,password)
    .then(function() {
        var user = auth.currentUser
        var database_ref = database.ref()
        var user_data = {
            fname: fname,
            email: email,
            last_login: Date.now()
        }
        database_ref.child('/users'+user.uid).set(user_data)

        alert(`User Created`)
    })
    .catch(function(error) {
        var error_code = error.code;
        var error_message = error.message;
        alert(error_message)
    })
  }

  function validate_email(email){
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if(expression.test(email) == true){
        return true
    }else{
        return false
    }
  }

  function validate_password(password){
    if(password<6){
        return false
    }else{
        return true
    }
  }*/