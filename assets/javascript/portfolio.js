// Initialize Firebase
var config = 
{
  apiKey: "AIzaSyA8lKEedB0bWMFT2mPbT7WAoGvoPr_FCWU",
  authDomain: "portfolio-3e65e.firebaseapp.com",
  databaseURL: "https://portfolio-3e65e.firebaseio.com",
  projectId: "portfolio-3e65e",
  storageBucket: "portfolio-3e65e.appspot.com",
  messagingSenderId: "263811232263"
};

firebase.initializeApp(config);

var database = firebase.database();

$("#open-form").on("click", function() 
{
  modal.style.display='block';
  //$("#id01").modal.style.display='block';
});

$("#add-contact").on("click", function(event) 
{
    event.preventDefault();
    
    var contactName = $("#name-input").val().trim();
    var contactEmail = $("#email-input").val().trim();//.trim();
    var contactPhone = $("#phone-input").val().trim(); //.trim(),
    var contactNotes = $("#notes-input").val().trim();//.trim();
    var newContact = 
    {
      name:  contactName,
      email: contactEmail,
      phone: contactPhone,
      notes: contactNotes
    };

    if (contactName == "" || contactEmail == "" || contactPhone == "" || contactNotes == "")
    {
      alert("Please do not leave any empty fields");
    }
    else
    {
     database.ref().push(newContact);

      //Info to firebase
      console.log("This is Pushing name to Firebase: " + newContact.name);
      console.log("This is Pushing email to Firebase: " + newContact.email);
      console.log("This is Pushing phone to Firebase: " + newContact.phone);
      console.log("This is Pushing Notes to Firebase: " + newContact.notes);

      closeForm()

      alert("Your Information has been successfully sent");
    }
});

database.ref().on("child_added", function(childSnapshot) 
  {
    var newName = childSnapshot.val().name;
    var newEmail = childSnapshot.val().email;
    var newPhone = childSnapshot.val().phone;
    var newNotes = childSnapshot.val().notes;
   
    // Info from firebase
      console.log("This is Receiving Name from Firebase " + newName);
      console.log("This is Receiving email from Firebase " + newEmail);
      console.log("This is Receiving phone number from Firebase " + newPhone);
      console.log("This is Receiving notes from Firebase " + newNotes); 
  });


  database.ref().on("child_added", function(childSnapshot) 
  {
    var newContactName = childSnapshot.val().name;
    var newContactEmail = childSnapshot.val().email;
    var newContactPhone = childSnapshot.val().phone;
    var newContactNotes = childSnapshot.val().notes;
    
    //email or text new information to manny
    //This is a paid version of formspree
    // $.ajax({
    //   url: "https://formspree.io/mannyb1077@gmail.com",
    //   method: "POST",
    //   data: {message: "You have a new request"},
    //   dataType: "json"
    // })
  });

function clearFormInputs()
  {
    $("#name-input").val("");
    $("#phone-input").val("");
    $("#email-input").val("");
    $("#notes-input").val("");
  }

  function closeForm() 
  {
    clearFormInputs()
    modal.style.display = "none";
  }


  $(".cancelbtn, .close").on("click", function() 
  {
    clearFormInputs()
  });


  //Email 

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'portfoliomailer123@gmail.com',
    pass: 'portfolio123'
  }
});

var mailOptions = {
  from: 'portfoliomailer@gmail.com',
  to: 'mbarboza@ati-america.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
  
});
