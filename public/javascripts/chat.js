// Initialize Firebase
var config = {
  apiKey: "AIzaSyAqzIra9YkeE0HZZBSwXrjh4GemO7yVdmI",
  authDomain: "shield-88fd0.firebaseapp.com",
  databaseURL: "https://shield-88fd0.firebaseio.com",
  projectId: "shield-88fd0",
  storageBucket: "shield-88fd0.appspot.com",
  messagingSenderId: "376341346069"
};

firebase.initializeApp(config);

//initialize firebase components
const auth = firebase.auth();


auth.onAuthStateChanged(user => {
  if(user){
    console.log('user has signed in');
  } else {
    console.log('need to sign in');
    window.location = '/login';
  }
});

$(document).ready(function() {
  var socket = io.connect();
  var users = $('#users');
  var nicknameForm = $('#setNick');
  var nicknameError = $('#nickError');
  var nicknameInput = $('#nickname');
  var messageForm = $('#send-message');
  var messageInput = $('#message');
  var messageContent = $('#chat');

  $(document).on('click', '#signout-btn', logout); //登出

  nicknameForm.submit((e) => {
    e.preventDefault();
    socket.emit('new user', nicknameInput.val(), (data) => {
      if(data){
        $('#nickWrap').hide();
        $('#contentWrap').show();
      } else {
        nicknameError.html('username is already taken');
      }
    });
    nicknameInput.val('');
  });

  messageForm.submit((e) => {
    e.preventDefault();
    socket.emit('send message', messageInput.val(), (data) => {
      messageContent.append('<span class="error">' + data + "</span><br/>");
    });
    messageInput.val('');
  });

  socket.on('usernames', (data) => {
    var html = '';
    for(i=0; i < data.length; i++){
      html += data[i] + '<br />';
    }
    users.html(html);
  });

  socket.on('new message', (data) => {
    displayMessage(data)
    // messageContent.append('<b>' + data.name + ': </b>' + data.msg + "<br/>");
  });

  socket.on('whisper', (data) => {
    messageContent.append('<span class="whisper"><b>' + data.name + ': </b>' + data.msg + "</span><br/>");
  });

  socket.on('load old messages', docs => {
    for(i=0; i < data.length; i++){
      displayMessage(docs[i]);
    }
  });

  function displayMessage(data){
    messageContent.append('<b>' + data.name + ': </b>' + data.msg + "<br/>");
  }
});

function logout(){
  auth.signOut()
  .then(response => {
    window.location.assign("/login");
  })
}
