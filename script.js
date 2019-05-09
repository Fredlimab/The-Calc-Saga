Calculadora = {
	op: "",
	setOp: function(button){
		this.op = button.value;
	},
 	igualA: function(){
	var a = parseInt(document.querySelector("#v1").value);
	var b = parseInt(document.querySelector("#v2").value);
	var calculate
		if (this.op == "add") {
		calculate = a + b;
	} else if(this.op == "min") {
		calculate = a - b;
	} else if(this.op == "div") {
		calculate = a / b;
	} else if(this.op == "mul") {
		calculate = a * b;
	}
	document.querySelector('#results').innerHTML = parseInt(calculate);
	}
}

