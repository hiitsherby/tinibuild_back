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

// jQuery
$(document).ready(function() {

  $(document).on('click', '#register-btn', register); //註冊
  $(document).on('click', '#google-log', googleLog); //Google登入

});

function register(){
  var email = document.getElementById('register-email').value;
  var password = document.getElementById('register-password').value;
  var con_email = document.getElementById('confirm-email').value;
  console.log(email, password);
  if (email == con_email){
    $('#error_msg').hide();
  auth.createUserWithEmailAndPassword(email, password)
  .then(() => {
    window.location.assign("/");
  })
  .catch(error => {
    console.log(error);
  });}else{
    $('#error_msg').show();
  }
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
