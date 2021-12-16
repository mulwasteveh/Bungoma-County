let allpostholder = document.getElementById('allpostholder');
let Postdate, Category, Bedrooms, Bathrooms, Price, Description;
 function postcard(date) {
 	// body...
allpostholder.innerHTML += `
<div id="postform">
 <div class="profile-holder" >
  <div class="avator-holder">
    <center>
    <img src="assests/imageholder.jpg" width="225px"><br><br>
    
    </center>
  </div>
  <div class="details-holder">
    <center>
      <h3 class="colorgreen"> ${Category}</h3><br>
      <label><p>Date you are posting &nbsp; ${Postdate}</p></label><br>
    
    <label><p>Category of the Room &nbsp; ${Category}</p></label><br>
   <label><p>Number of Bedrooms &nbsp; ${Bedrooms}</p></label><br>
   <label><p>Number of Bathrooms &nbsp; ${Bathrooms}</p></label><br>
    <label><p>Price of the Room &nbsp; ${Price}</p></label><br>
   <label><p>Description of the Room &nbsp; ${Description}</p></label><br>
   
    
   
  </div>

</div>
</div>
		 	
			`;

 }



FetchAlldata();

function FetchAlldata(){ 
	firebase.database().ref('RoomPosts').orderByChild('Category').limitToFirst(3).once('value', function(snapshot) {
		snapshot.forEach( 
			function(Childsnapshot) {
   Postdate = Childsnapshot.val().Postdate;
   Category = Childsnapshot.val().Category;
   Bedrooms = Childsnapshot.val().Bedrooms;
   Bathrooms = Childsnapshot.val().Bathrooms;
   Price = Childsnapshot.val().Price;
   Description = Childsnapshot.val().Description;

   // addPostToList(name, roll, sec, gen);
   postcard(Postdate)
   console.log(Postdate);
})
	})
}
