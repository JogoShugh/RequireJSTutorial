(function() {
	function multiply(args) {
		return args[0] * args[1];
	}
	if (this.CalculatorModular) {
		this.CalculatorModular.registerOperation('multiply', '*', multiply);
	} else {
		this.multiply = multiply;
	}
})();