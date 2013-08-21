function CalculatorUI(calculator) {
	this._calculator = calculator;
	this._input = null;
	this._output = null;
	this._lastResult = 0;
}

CalculatorUI.prototype.createOperationButton = function(operationSymbol, operationName) {
	var el = $("<button class='calculatorOperation btn btn-primary col-md-1 col-xs-3' data-operation='"
		+ operationName + "'>" + operationSymbol + "</button>"),
		that = this;
	el.click(function() {
		var $el = $(this),
			operationName = $el.attr('data-operation'),
			input = that._input.val(),
			numericValues = [];
			numericValues.push(that._lastResult);
		try {
			var num = parseFloat(input);
			if (!isNaN(num)) {
				numericValues.push(num);
			} else {
				numericValues.push(0);
			}
		} catch (ex) {
			// Oh well
		}		
		that._calculator.execute(operationName, numericValues, function(result) {
			console.log(result);
			that._lastResult = result;
			that.updateOutput();
		});
	});
	return el;
};

CalculatorUI.prototype.updateOutput = function() {
	this._output.text(this._lastResult);
};

CalculatorUI.prototype.render = function() {
	var operations = this._calculator.getOperations(),
		buttonsPanel = $("<div class='row col-md-12 col-xs-12'></div>"),
		clearEverything = $("<button class='calculatorOperation btn btn-primary col-md-1 col-xs-3' data-operation='clearEverything'>C</button>"),
		clearEntry = $("<button class='calculatorOperation btn btn-primary col-md-1 col-xs-3' data-operation='clearEntry'>CE</button>"),
		that = this;

	for(var key in operations) {
		var operation = operations[key];
		var operationEl = this.createOperationButton(operation.symbol, key);
		buttonsPanel.append(operationEl);
		buttonsPanel.append("&nbsp;")
	}
	this._output = $("<div class='calculatorOutput col-md-12 col-xs-12'></div>");	
	this.updateOutput();
	this._input = $("<input type='text' class='calculatorInput col-md-12 col-xs-12'></input>");

	clearEverything.click(function() {
		that._lastResult = 0;
		that.updateOutput();
		that._input.val('');
	});	
	clearEntry.click(function() {
		that._input.val('');
	});	

	buttonsPanel.prepend(clearEntry, clearEverything);

	var calculatorPanel = $("<div class='panel'></div>");
	var calculatorPanelBody = $("<div class='panel-body'></div>");
	calculatorPanel.append(calculatorPanelBody);

	calculatorPanelBody.append(this._output);	
	calculatorPanelBody.append(this._input);	
	calculatorPanelBody.append(buttonsPanel);

	return calculatorPanel;
};