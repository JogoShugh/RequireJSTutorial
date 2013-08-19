(function() {
	function factorial(args) {
		if (args[1] == 0) {
			return 1;
		}
		else {
			return factorial([0, args[1]-1]) * args[1];
		}
	}
	if (this.CalculatorModular) {
		this.CalculatorModular.registerOperation('factorial', '!', factorial);
	} else {
		this.factorial = factorial;
	}
})();