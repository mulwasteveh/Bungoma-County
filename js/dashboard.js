let usernamedisplay = document.getElementById('usernamedisplay');

auth.onAuthStateChanged(function(user){
      if(user){
         var email = user.email;
        //alert("Active user" + email);
        // console.log(email);
         usernamedisplay.innerHTML = email + " ";
         
      }else{
        //alert("No Active user");
        window.location.href='auth.html';
      }
    })


let signOutnow = document.getElementById('btnlogout');
//// / sign out user

signOutnow.addEventListener('click' , () =>{
   localStorage.clear();
        auth.signOut();
      alert("signed out");
})