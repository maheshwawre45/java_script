//get the html element

var inputElement = document.querySelector("#numadd");
var resultElement = document.querySelector("#tostring");
var numberArray = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];

//EVENT LISTENER

inputElement.addEventListener('keyup',function () {
    var numberString = inputElement.value;
    resultElement.textContent = getStringNumber(numberString)

});

//application logic

function getStringNumber(numberString){
    var tempStr = '';
    for(var i=0;
    i<numberString.length;i++){
        var index =parseInt(numberString.charAt(i));
        tempStr += numberArray[index]+ '';


    }
    return tempStr;
}

