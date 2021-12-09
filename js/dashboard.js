auth.onAuthStateChanged(function(user){
	if(user){
		var email = user.email;
		window.location.href = 'dashboard.html'
	}else{
		window.location.href = 'auth.html';

	}
})