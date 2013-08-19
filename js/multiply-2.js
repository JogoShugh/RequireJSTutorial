define(function() {	
	function multiply(args) {
		console.log('multiply v2 called with:');
		console.dir(args);
		return args[0] * args[1];
	}
	multiply.symbol = '*';
	return multiply;
});