var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/pets-data.json');
ourRequest.onload = function(){
	if (ourRequest.status >= 200 && ourRequest.status < 400){
		var data = JSON.parse(ourRequest.responseText);
		creatHTML(data);
	}else{
		console.log("Connected, but return an error.");
	}
};

ourRequest.onerror = function(){
	console.log("connection errror");
};

ourRequest.send();

Handlebars.registerHelper("calculateAge", function(birthYear){
	var age = new Date().getFullYear() - birthYear;

	if (age > 0){
		return age + " years old";
	}else{
		return "Less than a year old.";
	}

})

function creatHTML(petsData) {
	var rawTemplateofHandlebars = document.getElementById("petsTemplate").innerHTML;
	var compiledTemplate = Handlebars.compile(rawTemplateofHandlebars);
	var ourGeneratedHTML = compiledTemplate(petsData);

	var petsContainer = document.getElementById("pets-container");
	petsContainer.innerHTML = ourGeneratedHTML;
}