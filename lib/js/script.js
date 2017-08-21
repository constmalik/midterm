//create variables for user input on contact form
//require input in specific fields
$('#contactform').submit(function(e) {
  e.preventDefault();
  // $('#contactform').validate();
  checkForm();

});

function checkForm() {
  var $fname = $('#fname').val();
  var $lname = $('#lname').val();
  var $email = $('#email').val();
  
  if($fname == "" || $lname == "" || $email == "") {
    alert("Please fill out all required fields!");
  } else {
    alert("Thank you!");
  }
};
