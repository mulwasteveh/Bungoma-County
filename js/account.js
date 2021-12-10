 //global var
let fullName,email,password,confirmpassword;

// signup new users
let btnRegister = document.getElementById('btnRegister');
btnRegister.addEventListener('click', () =>{
	btnRegister.value ="Please wait...";
	fullName = document.getElementById('txtfullname').value.toUpperCase();
	email = document.getElementById('txtuseremail').value;
    password = document.getElementById('txtpassword').value;
    confirmpassword = document.getElementById('txtconfirmpassword').value;

     if(fullName  == "" || email == "" || password == "" || confirmpassword == ""){
      alert('Fill all your details');
      btnRegister.value ="Register now";
     }else{
      if (password == confirmpassword) {
          let indexedemail = email.replace(".", "@");


// insert user details to realtime database

firebase.database().ref('bungomausers/' + indexedemail).set({

      FullName: fullName,
      Email: email,
      PhoneNumber: "",
      Region: ""

    },  (error) => {
  if (error) {
    // The write failed...
     alert('Registration Faled');
     btnRegister.value ="Register now";
  }else{
// end of realtime database
         // start of creating user with email and password
       firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => {

firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    if (user) {
      window.location.href='dashboard.html';
    }else{
     //window.location.href='auth.html';
    }
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

    })


  .catch((error) => {
    console.log(error);
    alert(error.message);
    btnRegister.innerHTML = 'Register Now';
    // ..
  });
// end of creating user with email and password
  }

  } );

      }else{
        alert('password mismatch');
        btnRegister.value ="Register now";
      }
     }
})


// login users
let username, userpassword;
let btnLogin = document.getElementById('btnLogin');
btnLogin.addEventListener('click', ()=>{
	btnLogin.value ="Please wait....";
	username = document.getElementById('txtUserName').value;
	userpassword = document.getElementById('txtUserPassword').value;

	if(username  == "" || userpassword == ""){
      alert('Fill all your details');
      btnLogin.value ="Login now";
     }else{
     	firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => {

firebase.auth().signInWithEmailAndPassword(username, userpassword)
  .then((userCredential) => {
    // Login in 
    const user = userCredential.user;
    if (user) {
      window.location.href='dashboard.html';
    }else{
     //window.location.href='auth.html';
    }
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..

    let Wrongpassworderror = 'The password is invalid or the user does not have a password.';
    let nousererror = 'There is no user record corresponding to this identifier. The user may have been deleted.';
    if (error.message == nousererror) {
      seconds = 2;
      //alert('No such user please register');
      alert("Error The user does not exist");
       btnLogin.value ="Login now";
    }else if(error.message == Wrongpassworderror){
      //alert('Wrong password');
      seconds = 2;
      alert("Error You entered wrong password");
       btnLogin.value ="Login now";
     // console.log(seconds);
    }else{
      seconds = 2;
      // alert('An error occured');
       alert("An error occoured Conduct admin for help");
        btnLogin.value ="Login now";
    }
     btnLogin.value ="Login now";
  });

    })


  .catch((error) => {
    console.log(error);
    alert(error.message);
    btnLogin.innerHTML = 'Login Now';
    // ..

    
  });
     }
})
