function CalculatorAsyncLoad(operations, callback, defer_operation_loading) {
  if (defer_operation_loading !== true) defer_operation_loading = false;
 	require.config({
    	baseUrl: 'js'
  	});	
  	var deps = ['calculator-async'];
    if (!defer_operation_loading) {
    	for (var i = 0; i < operations.length; i++) {
    		deps.push(operations[i].name);
    	}
    }
  	require(deps, function(CalculatorAsync) {
  		var calc = new CalculatorAsync();
      if (!defer_operation_loading) {
    		for(var i = 1; i < arguments.length; i++) {
    			var operation = arguments[i];
    			calc.registerOperation(deps[i].name, operation.symbol, operation);
    		}
      } else {
        calc.setAvailableOperations(operations);
      }
  		callback(calc);
  	});
}