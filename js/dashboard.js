let usernamedisplay = document.getElementById('usernamedisplay');

auth.onAuthStateChanged(function(user){
      if(user){
         var email = user.email;
        //alert("Active user" + email);
        // console.log(email);
         usernamedisplay.innerHTML = email + " ";
          let indexedemail = email.replace(".", "@");
         getAllUserData(indexedemail);
         
      }else{
        //alert("No Active user");
        window.location.href='auth.html';
      }
    })


//get all user data
function getAllUserData(email){
  //body code
   firebase.database().ref('bungomausers/' + email).on('value',function(snapshot){
    try{
      let fullname, phone, subcounty;
 
      fullname = snapshot.val().FullName;
      phone = snapshot.val().PhoneNumber;
      subcounty = snapshot.val().Region;

     
      localStorage.setItem('Fullname',fullname );
      localStorage.setItem('PhoneNumber',phone );
      localStorage.setItem('Subcounty',subcounty );
    
  }catch(err){
    //alert(typeof err);
    console.log(err.message);
 
  } 
})
}


let signOutnow = document.getElementById('btnlogout');
//// / sign out user

signOutnow.addEventListener('click' , () =>{
   localStorage.clear();
        auth.signOut();
      alert("signed out");
})