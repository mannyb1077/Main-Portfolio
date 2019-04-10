// Initialize Firebase
var config = {
  apiKey: "AIzaSyA8lKEedB0bWMFT2mPbT7WAoGvoPr_FCWU",
  authDomain: "portfolio-3e65e.firebaseapp.com",
  databaseURL: "https://portfolio-3e65e.firebaseio.com",
  projectId: "portfolio-3e65e",
  storageBucket: "portfolio-3e65e.appspot.com",
  messagingSenderId: "263811232263"
};
firebase.initializeApp(config);

var database = firebase.database();

$("#add-contact").on("click", function(event) 
  {
    
    event.preventDefault();
    
    var newContactName = $("#name-input").val().trim();
    var newContactEmail = $("#email-input").val().trim();//.trim();
    var newContactPhone = $("#phone-input").val().trim(); //.trim(),
    var newContactNotes = $("#notes-input").val().trim();//.trim();
    var newContact = 
    {
      name:  newContactName,
      email: newContactEmail,
      phone: newContactPhone,
      notes: newContactNotes
    };

    if (name == "" || email == "" || phone == "" || notes == "")
    {
      //alert("Please do not leave any empty fields");
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

      alert(newContact + "Your Information has been successfully sent");
      
    }
  });



  
  database.ref().on("child_added", function(childSnapshot) 
  {
    var newContactName = childSnapshot.val().name;
    var newContactEmail = childSnapshot.val().email;
    var newContactPhone = childSnapshot.val().phone;
    var newContactNotes = childSnapshot.val().notes;
    
    //email or text new information to manny
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
