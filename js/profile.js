let usernamedisplay = document.getElementById('usernamedisplay');
 var email;

auth.onAuthStateChanged(function(user){
      if(user){
        email = user.email;
        //alert("Active user" + email);
        // console.log(email);
        usernamedisplay.value = email + " ";
         
      }else{
        //alert("No Active user");
        window.location.href='auth.html';
      }
    })


btnUpdateProfile = document.getElementById('btnUpdateProfile');
btnUpdateProfile.addEventListener('click', () =>{
	txtUserPhone = document.getElementById('txtUserPhone').value;
	cmbUserRegion = document.getElementById('cmbUserRegion');

  let subcounty = cmbUserRegion.options[cmbUserRegion.selectedIndex].value;

	let indexedEmail = email.replace('.', '@');
	firebase.database().ref('bungomausers/' + indexedEmail).update({
	PhoneNumber: txtUserPhone,
  Region: subcounty
	})

})


//signout user

let signOutnow = document.getElementById('btnlogout');
signOutnow.addEventListener('click' , () =>{
   localStorage.clear();
        auth.signOut();
      alert("signed out");
      })