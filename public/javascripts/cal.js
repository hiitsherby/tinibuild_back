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



// jQuery
$(document).ready(function() {
  $(document).on('click', '#signout-btn', logout); //登出

  var d = new Date('2017-06-05');

  //Calendar Event
  $(document).on('click', '#addEvent', () => {
    $('#myModal').modal('toggle')
  }); //修改前把修改inner input叫出來

  //calendar
  $('#calendar').fullCalendar({
			defaultDate: d,
      header: {
        left: 'prev, next today',
        center: 'title',
        right: 'month,agendaWeek, agendaDay'
      },
			editable: true,
			eventLimit: true, // allow "more" link when too many events,
      selectable: true,
      selectHelper: true,
			// events: [
			// 	{
			// 		title: 'All Day Event',
			// 		start: '2017-05-01'
			// 	},
			// 	{
			// 		title: 'Long Event',
			// 		start: '2017-05-07',
			// 		end: '2017-05-10'
			// 	},
			// 	{
			// 		id: 999,
			// 		title: 'Repeating Event',
			// 		start: '2017-05-09T16:00:00'
			// 	},
			// 	{
			// 		id: 999,
			// 		title: 'Repeating Event',
			// 		start: '2017-05-16T16:00:00'
			// 	},
			// 	{
			// 		title: 'Conference',
			// 		start: '2017-05-11',
			// 		end: '2017-05-13'
			// 	},
			// 	{
			// 		title: 'Meeting',
			// 		start: '2017-05-12T10:30:00',
			// 		end: '2017-05-12T12:30:00'
			// 	},
			// 	{
			// 		title: 'Lunch',
			// 		start: '2017-05-12T12:00:00'
			// 	},
			// 	{
			// 		title: 'Meeting',
			// 		start: '2017-05-12T14:30:00'
			// 	},
			// 	{
			// 		title: 'Happy Hour',
			// 		start: '2017-05-12T17:30:00'
			// 	},
			// 	{
			// 		title: 'Dinner',
			// 		start: '2017-05-12T20:00:00'
			// 	},
			// 	{
			// 		title: 'Birthday Party',
			// 		start: '2017-05-13T07:00:00'
			// 	},
			// 	{
			// 		title: 'Click for Google',
			// 		url: 'http://google.com/',
			// 		start: '2017-05-28'
			// 	}
			// ],



		});




});

// functions
function logout(){
  auth.signOut()
  .then(response => {
    window.location.assign("/login");
  })
}
