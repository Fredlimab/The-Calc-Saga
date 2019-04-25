function ladora() {
	var a = parseInt(document.querySelector("#v1").value);
	var b = parseInt(document.querySelector("#v2").value);
	var op = document.querySelector("#Operator").value;
	var calculate;

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