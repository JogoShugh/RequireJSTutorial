(function() {
	function divide(args) {
		return args[0] / args[1];
	}
	if (this.CalculatorModular) {
		this.CalculatorModular.registerOperation('divide', '/', divide);
	} else {
		this.divide = divide;
	}
})();