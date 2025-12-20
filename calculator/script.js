const display = document.getElementById('display');

function appendNum (input){
    if(display.value === 'Syntax Error'){
        display.value = '';
    }
    display.value += input;
};

function clearDisplay (){   
    display.value = '';
};

function calculate (){
    try{
        display.value = eval(display.value);
    }
    catch (error){
        display.value = 'Syntax Error';
    }
};