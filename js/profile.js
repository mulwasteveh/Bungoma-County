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
  btnUpdateProfile.innerHTML = "Updating....";
	txtUserPhone = document.getElementById('txtUserPhone').value;
	cmbUserRegion = document.getElementById('cmbUserRegion');

  let subcounty = cmbUserRegion.options[cmbUserRegion.selectedIndex].value;

	let indexedEmail = email.replace('.', '@');
	firebase.database().ref('bungomausers/' + indexedEmail).update({
	PhoneNumber: txtUserPhone,
  Region: subcounty
	}).then(() =>{
    btnUpdateProfile.innerHTML = "Update successfull";
    location.reload();
  }).catch((error) =>{
    btnUpdateProfile.innerHTML = "Update failed";
  })

})


//signout user

let signOutnow = document.getElementById('btnlogout');
signOutnow.addEventListener('click' , () =>{
   localStorage.clear();
        auth.signOut();
      alert("signed out");
      })

//fetching user details to the profile page
displayUserDetails();
function displayUserDetails(){
  //body
  let fullname = localStorage.getItem('Fullname');
  let phone =    localStorage.getItem('PhoneNumber');
  let location = localStorage.getItem('Subcounty'); 
  let locationholder = document.getElementById('Location');
  let txtUserPhone = document.getElementById('txtUserPhone');
  let txtUserFullname = document.getElementById('txtUserFullname');

locationholder.innerHTML = location;
txtUserPhone.value = phone;
txtUserFullname.value = fullname;

}

