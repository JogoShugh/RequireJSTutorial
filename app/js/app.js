function createAndRenderCalculator(calculator, containerSelector) {
	var calcUi = new CalculatorUI(calculator);
	var calcUiRendered = calcUi.render();
	calcUiRendered.append(createRemovalButton(calcUiRendered));
	$(containerSelector).append(calcUiRendered);
}

function createRemovalButton(elToRemoveOnClick) {
	var removalButton = $("<button class='remove btn btn-sm btn-warning'>Remove</button>");
	removalButton.click(function() {
		elToRemoveOnClick.remove();
	});
	return removalButton;
}

function createCalculatorBBOM() {
	createAndRenderCalculator(CalculatorBBOM, '#bbomCalculators');
}