define(function() {
	function CalculatorAsync() {
		this._operations = {};
	}

	CalculatorAsync.prototype.registerOperation = function(operationName, operationSymbol, operationFunction) {
		this._operations[operationName] = {symbol: operationSymbol, func: operationFunction, loaded: true};
	};

	CalculatorAsync.prototype.hasOperation = function(operationName) {
		return this._operations[operationName] != null 
			&& this._operations[operationName] != undefined 
			&& this._operations[operationName].loaded === true;
	};

	CalculatorAsync.prototype.setAvailableOperations = function(operations) {
		for(var i = 0; i < operations.length; i++) {
			var operation = operations[i];
			this._operations[operation.name] = { loaded: false, symbol: operation.symbol };
		}
	};

	CalculatorAsync.prototype.getOperations = function() {
		return this._operations;
	};	

	CalculatorAsync.prototype.execute = function(operationName, args, callback) {
		if (this.hasOperation(operationName)) {
			var result = this._operations[operationName].func(args);
			console.log(result);
			callback(result);
		} else {
			var that = this;
			require([operationName], function(operation) {
				that.registerOperation(operationName, operation.symbol, operation);
				that.execute(operationName, args, callback);
			});
		}
	};
	
	return CalculatorAsync;
});