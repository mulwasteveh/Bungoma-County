let pasteform = document.getElementById('pasteform');
let disease = document.getElementById('diseaseform');
let postforms = document.getElementById('postform');
let callpaste = document.getElementById('callpaste');
let calldisease = document.getElementById('calldisease');
let callposts = document.getElementById('callpost');
let uploadpaste = document.getElementById('uploadpaste');
let uploaddisease = document.getElementById('uploaddisease');

callpaste.addEventListener('click', () =>{
	pasteform.style.display = "block";
	disease.style.display = "none";
	postforms.style.display = "none";
	callpaste.classList.add("sub-nav-active");
	callposts.classList.remove("sub-nav-active");
	localStorage.setItem("formCode", "2");
})
callposts.addEventListener('click', () =>{
	postforms.style.display = "block";
	disease.style.display = "none";
	pasteform.style.display = "none";
	callposts.classList.add("sub-nav-active");
	calldisease.classList.remove("sub-nav-active");
	callpaste.classList.remove("sub-nav-active");
	localStorage.setItem("formCode", "1");
})
uploadpaste.addEventListener('click', () =>{
	alert('upload paste coming soon');
	
})
uploaddisease.addEventListener('click', () =>{
	alert('upload disease coming soon');
	
})

retainPageState();
function retainPageState() {
	// body...
let formNumber = localStorage.getItem("formCode");
if (formNumber == 2) {
    pasteform.style.display = "block";
	disease.style.display = "none";
	postforms.style.display = "none";
	callpaste.classList.add("sub-nav-active");
	calldisease.classList.remove("sub-nav-active");
	callposts.classList.remove("sub-nav-active");
}else if(formNumber == 3){
    pasteform.style.display = "none";
	disease.style.display = "block";
	postforms.style.display = "none";
	calldisease.classList.add("sub-nav-active");
	callpaste.classList.remove("sub-nav-active");
	callposts.classList.remove("sub-nav-active");
}else{
	disease.style.display = "none";
	pasteform.style.display = "none";
	callposts.classList.add("sub-nav-active");
	calldisease.classList.remove("sub-nav-active");
	callpaste.classList.remove("sub-nav-active");
}

}