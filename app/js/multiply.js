define(['add'], function(add) {	
	function multiply(args) {
		console.log('multiply called with:');
		console.dir(args);
		var valToMultiply = args[0];
		var numberOfTimesToRepeatAdd = args[1];		
		var total = 0;
		for(var i = 0; i < numberOfTimesToRepeatAdd; i++) {
			total = add([total, valToMultiply]);
		}
		return total;
	}
	multiply.symbol = '*';
	return multiply;
});