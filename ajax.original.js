var xhr = new XMLHttpRequest();
xhr.open('GET', 'employees.json');
xhr.onreadystatechange = () => {
	if(xhr.readyState === 4 && xhr.status === 200){
		var employees = JSON.parse(xhr.responseText);
		console.log(employees);
		var statusHTML = "<ul class='bulleted'>";
		for(var i=0; i<employees.length; i += 1) {
			if(employees[i].inoffice === true){
				statusHTML += "<li class='in'>";
			}
			else{
				statusHTML += "<li class='out'>";
			}
			statusHTML += employees[i].name;
			statusHTML += "</li>";
		}
		statusHTML += '</ul>';
		document.getElementById('employeeList').innerHTML = statusHTML;
	}
}

xhr.send();