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

var today = new Date();
var datetoday = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let fixedpostdate = document.getElementById('datePosting').value = datetoday;

let room = document.getElementById('Roomform');
let postforms = document.getElementById('postform');
let callpaste = document.getElementById('callpaste');
let callroom = document.getElementById('callroom');
let callposts = document.getElementById('callpost');
let uploadpaste = document.getElementById('uploadpaste');
let uploadroom = document.getElementById('uploadroom');

callpaste.addEventListener('click', () =>{
	pasteform.style.display = "block";
	room.style.display = "none";
	postforms.style.display = "none";
	callpaste.classList.add("sub-nav-active");
	callposts.classList.remove("sub-nav-active");
	localStorage.setItem("formCode", "2");
})
callposts.addEventListener('click', () =>{
	postforms.style.display = "block";
	room.style.display = "none";
	pasteform.style.display = "none";
	callposts.classList.add("sub-nav-active");
	//callroom.classList.remove("sub-nav-active");
	callpaste.classList.remove("sub-nav-active");
	localStorage.setItem("formCode", "1");
})
uploadpaste.addEventListener('click', () =>{
	alert('upload paste coming soon');
	
})
uploadroom.addEventListener('click', () =>{
	alert('upload room coming soon');
	
})

retainPageState();
function retainPageState() {
	// body...
let formNumber = localStorage.getItem("formCode");
if (formNumber == 2) {
    pasteform.style.display = "block";
	room.style.display = "none";
	postforms.style.display = "none";
	callpaste.classList.add("sub-nav-active");
	//callroom.classList.remove("sub-nav-active");
	callposts.classList.remove("sub-nav-active");
}else if(formNumber == 3){
    pasteform.style.display = "none";
	room.style.display = "block";
	postforms.style.display = "none";
	callroom.classList.add("sub-nav-active");
	callpaste.classList.remove("sub-nav-active");
	callposts.classList.remove("sub-nav-active");
}else{
	room.style.display = "none";
	pasteform.style.display = "none";
	callposts.classList.add("sub-nav-active");
	//callroom.classList.remove("sub-nav-active");
	callpaste.classList.remove("sub-nav-active");
}
}


//adding a post
function addPost() {
	// body...
	//validating an input
	let postdate = document.getElementById('datePosting').value;
	let category = document.getElementById('cmbcategoryRoom');
	let newcategory = category.options[category.selectedIndex].value;
	let bedrooms = document.getElementById('cmbbedrooms');
	let newbedrooms = bedrooms.options[bedrooms.selectedIndex].value;
	let bathrooms = document.getElementById('cmbbathrooms');
	let newbathrooms = bathrooms.options[bathrooms.selectedIndex].value;
	let roomPrice = document.getElementById('pricePerRoom').value;
	let roomDescription = document.getElementById('RoomDescription').value;

	//alert 
	console.log(postdate + "/" + newcategory + "/" + newbedrooms + "/" + newbathrooms
	 + "/" + roomPrice + "/" + roomDescription);

    //-------------------getting timestamp
    let Ttimestamp = Date.now();
    console.log(Ttimestamp);

    //checking null posts
console.log(datetoday);
if (roomDescription == "" || roomPrice == "") {
	alert('All details required');
}else{

  if (category.selectedIndex >= 3) {
  	if (bedrooms.selectedIndex >= 1 && bathrooms.selectedIndex >= 1) {
  		insertPostToFirebase(postdate, newcategory, newbedrooms, newbathrooms, roomPrice, roomDescription, Ttimestamp);
  	}else{
  		alert('fill all room details');
  		butttonPost.innerHTML ="Post Rooms";
  	}
  }else{
  	insertPostToFirebase(postdate, newcategory, newbedrooms, newbathrooms, roomPrice, roomDescription, Ttimestamp);
  }
}

}

//inserting posts to firebase db
function insertPostToFirebase(postdate, newcategory, newbedrooms, newbathrooms, roomPrice, roomDescription, Ttimestamp) {
	// body...
	firebase.database().ref('RoomPosts/' + Ttimestamp).set({

Postdate: postdate,
Category: newcategory,
Bedrooms: newbedrooms,
Bathrooms: newbathrooms,
Price: roomPrice,
Description: roomDescription,
Postkey: Ttimestamp

    },  (error) => {
  if (error) {
    // The write failed...
     alert('Failed to post');

     //reserting form
     resetForm();


     butttonPost.innerHTML ="Post Rooms";
  }else{
  	butttonPost.innerHTML ="Post made Successfully";
  	resetForm();
  }
})
}

let butttonPost = document.getElementById('postButton');
butttonPost.addEventListener('click', ()=>{
	butttonPost.innerHTML ="Posting Room.....";
	addPost();
})

//// / sign out user
let signOutnow = document.getElementById('postbtnlogout');

signOutnow.addEventListener('click' , () =>{
   localStorage.clear();
        auth.signOut();
      alert("signed out");
})


     //reserting form function
     function resetForm() {
     	// body...
	let category = document.getElementById('cmbcategoryRoom');
	let bedrooms = document.getElementById('cmbbedrooms');
	let bathrooms = document.getElementById('cmbbathrooms');
	let roomPrice = document.getElementById('pricePerRoom').value;
	let roomDescription = document.getElementById('RoomDescription').value;
category.selectedIndex = 0;
bedrooms.selectedIndex = 0;
bathrooms.selectedIndex = 0;
roomPrice = "";
roomDescription = "";
     }


let btnroomPrice = document.getElementById('pricePerRoom');
btnroomPrice.addEventListener("keyup", ()=>{
	var btnroomPrice = document.getElementById("pricePerRoom").value;
		var chk = /^[-+]?[0-9]+$/;
		if(chk.test(btnroomPrice)){

			return true;
		}else{
				alert('Wrong format!!!!');
			return false;
		}

});