var xhr = new XMLHttpRequest();
xhr.open('GET', 'employees.json');
xhr.onreadystatechange = handleResponse;
xhr.send();

function handleResponse(){
	if(xhr.readyState === 4 && xhr.status === 200){
		var employees = JSON.parse(xhr.responseText);
		addEmployeesToPage(employees);
	}
}

function generateListItems(employees){
	var statusHTML = '';
	console.log(employees);
	for(var i=0; i<employees.length; i++){
		if(employees[i].inoffice === true){
			statusHTML += "<li class='in'>";
		} else {
			statusHTML += "<li class='out'>";
		}
		statusHTML += employees[i].name;
		statusHTML += "</li>";
	}
	return statusHTML;
}

function generateUnorderedList(listItems){
	return "<ul class='bulleted'>" + listItems + '</ul>';
}

function addEmployeesToPage(employees){
	document.getElementById('employeeList').innerHTML =
	generateUnorderedList(generateListItems(employees));
}
