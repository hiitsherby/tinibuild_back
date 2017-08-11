// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDlQowLs-i2RO_qz7V0V1TZpEvSLW4yOZM",
    authDomain: "tinibuild-7c657.firebaseapp.com",
    databaseURL: "https://tinibuild-7c657.firebaseio.com",
    projectId: "tinibuild-7c657",
    storageBucket: "tinibuild-7c657.appspot.com",
    messagingSenderId: "910257525749"
  };

firebase.initializeApp(config);

//initialize firebase components
const auth = firebase.auth();

$(document).ready(function() {

  $(document).on('click', '#login-btn', login); //登入
  $(document).on('click', '#google-log', googleLog); //Google登入

});

function login(){
  var email = document.getElementById('login-email').value;
  var password = document.getElementById('login-password').value;
  auth.signInWithEmailAndPassword(email, password)
  .then(response => {
    window.location.assign("/");
  })
  .catch(error => {
    console.log(error);
  });
};

function googleLog() {
  auth.signInWithPopup(google_provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;

    database.ref('users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  });
}