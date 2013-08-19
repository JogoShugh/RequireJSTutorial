(function() {
	function add(args) {
		return args[0] + args[1];
	}
	if (this.CalculatorModular) {
		this.CalculatorModular.registerOperation('add', '+', add);
	} else {
		this.add = add;
	}
})();