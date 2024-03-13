/* 1. Grab the input value */
var input="";
var url = "https://api.giphy.com/v1/gifs/search?q=default&api_key=d69bvmzfGEA8DI94Jr2I5egDchm9BJdm";

document.querySelector(".js-go").addEventListener('click', function () {

	var input = document.querySelector("input").value;
	request();
});

document.querySelector(".js-userinput").addEventListener('keyup', function (e) {

	input = document.querySelector("input").value.replace(" ","+");
	url = "https://api.giphy.com/v1/gifs/search?q="+input+"&api_key=d69bvmzfGEA8DI94Jr2I5egDchm9BJdm";
	

	// if the key ENTER is pressed...

	if (e.which === 13) {
		request();
	}
});

/* 2. do the data stuff with the API */


// AJAX Request
function request(){
	document.querySelector(".showimg").innerHTML="";
	var GiphyAJAXCall = new XMLHttpRequest();
	GiphyAJAXCall.open('GET', url);
	GiphyAJAXCall.send();
	
	GiphyAJAXCall.addEventListener("load", function (e) {
		var data = e.target.response;
		pushToDOM(data);
	});
}





/* 3. Show me the GIFs */

function pushToDOM(input) {

	var response = JSON.parse(input);
	var container = document.querySelector(".showimg");
	var imageUrl = response.data;

	imageUrl.forEach(function (images) {
		var src = images.images.fixed_height.url;
		container.innerHTML += "<img src=\"" + src + "\" class=\".container-image\">";
	});

}