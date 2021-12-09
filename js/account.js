//Declaring global variable
let fullname, email, password, confirmpassword;


//validating user inputs
//signUp New users
let btnRegister = document.getElementById('btnRegister');
btnRegister.addEventListener('click', () =>{
	btnRegister.value = "Please wait...";
	fullname = document.getElementById('txtfullname').value.toUpperCase();
email = document.getElementById('txtuseremail').value;
password = document.getElementById('txtpassword').value;
confirmpassword = document.getElementById('txtconfirmpassword').value;

	if (fullname == "" || email == "" || password == "" || confirmpassword == "") {
		alert('fill all the required details');
	}else{
		if (password == confirmpassword) {
			let indexedEmail = email.replace(".", "@");

			//inserting user datails to realtime database
			firebase.database().ref('bungomausers/' + indexedEmail).set({
				FullName: fullname,
				Email: email
			}, (error)=>{
				if (error) {
					alert('failed');
				}else{

			//start of getting user with email and password

			firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(()=>{

				firebase.auth().createUserWithEmailAndPassword(email, password);
				return window.location.href = 'dashboard.html';
				btnRegister.value = "Register Now";
			})

			//catch auth error
			.catch((error)=> {
				alert(error.message);
			});

		 //End of getting user with email and password

				}
			});



			//End of realtime database



		}else{
			alert('password mismatch');
		}
	}
})