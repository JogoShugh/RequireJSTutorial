(function() {
	function subtract(args) {
		return args[0] - args[1];
	}
	if (this.CalculatorModular) {
		this.CalculatorModular.registerOperation('subtract', '-', subtract);
	} else {
		this.subtract = subtract;
	}
})();