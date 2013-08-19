function CalculatorAsyncLoad(operations, callback) {
 	require.config({
    	baseUrl: 'js'
  	});	
  	var deps = ['calculator-async'];
  	for (var i = 0; i < operations.length; i++) {
  		deps.push(operations[i]);
  	}
  	require(deps, function(CalculatorAsync) {
  		var calc = new CalculatorAsync();
  		for(var i = 1; i < arguments.length; i++) {
  			var operation = arguments[i];
  			calc.registerOperation(deps[i], operation.symbol, operation);
  		}
  		callback(calc);
  	});
}