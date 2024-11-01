let calculation = '';

displayCalculation();

function updateCalculation(value){
    calculation += value;
    displayCalculation();
}

function calculate(){
    try{
        calculation = eval(calculation);
        displayCalculation();
    }
    catch(error){
        alert('Error in Calculation');
    }
}

function clearCalculation(){
    calculation = '';
    displayCalculation();
}

function displayCalculation(){
    let displayElement = document.querySelector('.js-calculation');
    if (displayElement) {
        displayElement.textContent = calculation;
    } else {
        console.error('Element with class "js-calculation" not found.');
    }
} 