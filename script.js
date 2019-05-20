Calculadora = {
	valor: 0,
	op: "",
	setOp: function(button){
		this.op = button.value;

		if (this.valor == 0){
			this.valor = parseInt(document.querySelector("#numero").value);
		} else if(this.valor > 0) {
			this.igualA()
		}
	},
 	igualA: function(){
 	if (["add","min","div","mul"].indexOf(this.op) < 0){
 		document.querySelector('#numero').innerHTML = parseInt(document.querySelector("#numero").value);
 		} else {
	var a = this.valor;
	var b = parseInt(document.querySelector("#numero").value);
	
		if (this.op == "add") {	 
		this.valor = a + b;
	} else if(this.op == "min") {
		this.valor = a - b;
	} else if(this.op == "div") {
		this.valor = a / b;
	} else if(this.op == "mul") {
		this.valor = a * b;
	}
	document.querySelector('#numero').value = this.valor;
	}
	
	}
}

