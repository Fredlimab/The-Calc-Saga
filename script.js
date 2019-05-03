var op;
function setOp(button){
	op = button.value;

	console.log(op);
}

function igualA(){
	var a = parseInt(document.querySelector("#v1").value);
	var b = parseInt(document.querySelector("#v2").value);
	var calculate

	if (op == "add") {
		calculate = a + b;
	} else if(op == "min") {
		calculate = a - b;
	} else if(op == "div") {
		calculate = a / b;
	} else if(op == "mul") {
		calculate = a * b;
	}
	document.querySelector('#results').innerHTML = parseInt(calculate);
	}