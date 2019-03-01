
window.onload = init;

function init(){

	var input = document.querySelector('input')
	var buttons = document.querySelectorAll('.button');

	for(var i = 0; i < buttons.length; i++){
		buttons[i].addEventListener('click',launchCalculiator);

		function launchCalculiator(){

			var valueInput = input.value;
			var typeElement = this.dataset.type;

			if(typeElement == '='){

				var result = eval(valueInput);

					if(result == Infinity){
						alert('На ноль делить нельзя!')
					} else {
						input.value = validationResult(String(result));
					}

			} else if(typeElement == 'c'){
				var clearInput = valueInput.slice(0,-1);
				input.value = clearInput;

			} else if(typeElement == 'x2'){

				if(isNaN(valueInput)){
					alert('Вычислить можно только из целого числа');
				} else {
					var convertInNumXTwo = parseInt(valueInput);
					var numberInSquare = Math.pow(convertInNumXTwo,2);
					input.value = validationResult(String(numberInSquare));
				}

			} else if(typeElement == 'кв.кр') {

				if(isNaN(valueInput)){
					alert('Вычислить можно только из целого числа');
				} else {
					var convertInNum = parseInt(valueInput);
					var squareNum = Math.sqrt(convertInNum);
					input.value = validationResult(String(squareNum));
				}
			} else if(typeElement == '%'){

				if(isNaN(valueInput) == false){
					input.value = 0;
				} else {
					var evalStr = eval(valueInput);
					var percentNum = evalStr / 100;
					input.value = validationResult(String(percentNum));
				}

			} else {
				if(input.value == '.'){
					var zero = addZero(valueInput)
					input.value = '';
					input.value += zero + typeElement;
				} else {
					input.value += typeElement;
				}
			}

		}
	}
}

function validationResult(value){
	if(value == 'undefined' || value == 'NaN' || value == ''){
		alert('Для вычисления введите необходимые значения!')
		return '';
	} else {
		return value;
	}

}

function addZero(str){
	return '0' + str;
}