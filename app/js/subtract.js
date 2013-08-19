define(function() {
	function subtract(args) {
		return args[0] - args[1];
	}
	subtract.symbol = '-';
	return subtract;
});