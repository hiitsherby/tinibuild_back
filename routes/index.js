var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SHIELD' });
});

/* GET calendar page. */
router.get('/calendar', function(req, res, next) {
  res.render('calendar', { title: 'SHIELD calendar' });
});

/* GET todolist page. */
// router.get('/todolist', function(req, res, next) {
//   res.render('todolist', { title: 'SHIELD to do list' });
// });


router.get('/chat', function(req, res, next) {
  res.render('chat', { title: 'SHIELD chat' });
});

//authentication
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Register' });
});

router.get('/ticket', function(req, res, next) {
  res.render('ticket', { title: 'SHIELD support' });
});

router.get('/tform', function(req, res, next) {
  res.render('ticketForm', { title: 'SHIELD Form' });
});

// router.get('/vform', function(req, res, next) {
//   res.render('viewForm', { title: 'Edit' });
// });


module.exports = router;
