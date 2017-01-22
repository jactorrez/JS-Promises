var calculationPromise = new Promise(function(resolve, reject){
	setTimeout(function(){
		resolve(1 + 1);
	}, 1000) ;
});

var calculationPromise2 = new Promise(function(resolve, reject){
	setTimeout(function(){
		resolve(1 + 3);
	}, 500);
});

function addTwo(value){
	return value + 2;
}

function printFinalValue(nextValue){
	console.log("The final value is", nextValue);
}

calculationPromise
	.then(addTwo)
	.then(printFinalValue)
	.catch((error) => console.warn(error));

calculationPromise2
	.then(addTwo)
	.then(printFinalValue)
	.catch((error) => console.warn(error));

