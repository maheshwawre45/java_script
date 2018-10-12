// Get the HTML elements
var inputElement = document.querySelector('#number');
var resultElement = document.querySelector('#text-number');
var numberArray = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];

// Event Listener
inputElement.addEventListener('keyup',function() {
   var numberString = inputElement.value;
   resultElement.textContent = getStringNumber(numberString);
});

// Application Logic
function getStringNumber(numberString) {
    var tempStr = '';
    for(var i = 0; i<numberString.length; i++){
        var index = parseInt(numberString.charAt(i));
        tempStr += numberArray[index] + ' ';
    }
    return tempStr;
}


////new script


var originalTextElement = document.querySelector('.text-section-div p');
var textAreaElement = document.querySelector('#text-area');
var textAreaBorderElement = document.querySelector('#text-area');
var minutesElement = document.querySelector('#minutes');
var secondsElement = document.querySelector('#seconds');
var resetButtonElement = document.querySelector('#reset');
var greetMsgElement = document.querySelector('.cong-section');
var textArray = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem culpa,',
    'deleniti fugit labore laudantium nobis odit porro praesentium quasi quia sapiente ',
    'sed suscipit tempore ut? Dignissimos eos molestiae nihil pariatur temporibus. Animi',
    'cumque doloremque eligendi, facere obcaecati optio perferendis voluptatum. ',
    'Accusamus accusantium ad, assumenda, eius et fugiat inventore ipsam maxime minima ',
    'minus nesciunt optio provident quisquam quod saepe sed suscipit totam. Accusantium',
    'consectetur dolorem ducimus earum iste laborum molestias porro tempora. A amet,',
    'animi, consectetur cumque dolore exercitationem explicabo ipsa iure maiores odit',
    'perspiciatis provident quisquam quod ratione repellendus saepe tempora vel veniam ',
    'quisquam quod ratione repellendus saepe tempora vel veniam voluptas voluptatum! Labore obcaecati sequi veniam.',
    'tempore ut? Dignissimos eos molestiae nihil pariatur temporibus. Animi cumque doloremque eligendi'];

var timer = 0;
var minutes = 0;
var seconds = 0;
var interval = 0;
var timerRunning = false;

// keypress Event Listener for Text Area
textAreaElement.addEventListener('keypress',function() {
    var textEnteredLength = textAreaElement.value.length;
    if(textEnteredLength === 0 && !timerRunning){
        // Start Timer
        interval = setInterval(startTimer,10);
        timerRunning = true;
    }
});

// Keyup Event Listener for Text Area
textAreaElement.addEventListener('keyup',function() {
    var textEntered = textAreaElement.value;
    var originalText = originalTextElement.textContent;
    var partialText = originalText.substr(0,textEntered.length);

    if(textEntered === ''){
        textAreaBorderElement.style.borderColor = 'gray';
    }
    else{
        if(textEntered === originalText){
            // green
            textAreaBorderElement.style.borderColor = 'seagreen';
            // Stop the Timer
            clearInterval(interval);
            // display cong msg
            greetMsgElement.style.display = 'block';
        }
        else{
            if(textEntered === partialText){
                // blue
                textAreaBorderElement.style.borderColor = 'lightblue';
            }
            else{
                // red
                textAreaBorderElement.style.borderColor = 'orangered';
            }
        }
    }
});

// Click event for Reset Button
resetButtonElement.addEventListener('click',function() {
    // stop the timer
    clearInterval(interval);
    timer = 0;
    minutes = 0;
    seconds = 0;
    interval = 0;
    timerRunning = false;
    textAreaBorderElement.style.borderColor = 'gray';
    textAreaElement.value = '';
    secondsElement.textContent = '00';
    minutesElement.textContent = '00';
    // Hide cong msg
    greetMsgElement.style.display = 'none';
    // Get the Random Text
    getRandomString();
});

// StartTimer Function
function startTimer() {

    minutes = Math.floor((timer/100)/60);
    seconds = Math.floor((timer/100) - (minutes * 60));

    minutesElement.textContent = leadingZero(minutes);
    secondsElement.textContent = leadingZero(seconds);
    timer++;
}

// leadingZero
function leadingZero(time) {
    if(time <= 9){
        return '0' + time;
    }
    else{
        return time;
    }
}

// get Random String
function getRandomString() {
    var randomIndex = Math.round(Math.random() * 10);
    var randomString = textArray[randomIndex];
    originalTextElement.textContent = randomString;
}
