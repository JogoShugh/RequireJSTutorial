function CalculatorAsyncLoad(operations, callback) {
 	require.config({
    baseUrl: 'js'
  });
	var deps = ['calculator-async'];
	require(deps, function(CalculatorAsync) {
		var calc = new CalculatorAsync();
    calc.setAvailableOperations(operations);
		callback(calc);
	});
}