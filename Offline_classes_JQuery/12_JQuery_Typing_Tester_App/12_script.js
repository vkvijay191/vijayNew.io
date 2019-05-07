let textArray = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem culpa,',
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
let timer = 0;
let timerRunning = false;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval = 0;
let clapSound = $('#clap-sound');
let congratsSound = $('#congrats-sound');

// Keyup for Text-area
$('#text-area').keyup(function() {
    let textEnteredLength = $(this).val().length;
    let originalText = $('#original-text').text();
    let textEntered = $(this).val();
    let partialText = originalText.substr(0,textEntered.length);
    callTimer(textEnteredLength);
    evaluateText(originalText,textEntered,partialText);
});

// Reset Button Logic
$('#reset-button').click(function() {
    clearInterval(interval);
    resetFields();
    $('#text-area').val('');
    $('#message-card').removeClass('bg-primary').removeClass('bg-success').removeClass('bg-danger').addClass('bg-light');
    $('#message').text('');
    $('#minutes').text('00');
    $('#seconds').text('00');
    $('#m-seconds').text('00');
    generateRandomText();
});

// Evaluation of text
let evaluateText = (originalText,textEntered,partialText) => {
    let messageCard = $('#message-card');
    let message = $('#message');
    if(textEntered === ''){
        // gray
        messageCard.removeClass('bg-primary').removeClass('bg-success').removeClass('bg-danger').addClass('bg-light');
        message.text('');
    }
    else{
        if(textEntered === originalText){
            // green
            messageCard.removeClass('bg-primary').removeClass('bg-light').removeClass('bg-danger').addClass('bg-success');
            message.text('Congratulations');
            // stop Timer
            clearInterval(interval);
            congratsSound.trigger('play');
            displayModal();
        }
        else{
            if(textEntered === partialText){
                // blue
                messageCard.removeClass('bg-success').removeClass('bg-light').removeClass('bg-danger').addClass('bg-primary');
                message.text('Correct !');
            }
            else{
                // red
                messageCard.removeClass('bg-success').removeClass('bg-light').removeClass('bg-primary').addClass('bg-danger');
                message.text('Wrong !');
                clapSound.trigger('play');
            }
        }
    }
};


// Call Timer
let callTimer = (textEnteredLength) => {
    if(textEnteredLength === 1 && !timerRunning){
        interval = setInterval(startTimer,10);
        timerRunning = true;
    }
};



// start Timer
let startTimer = () => {
    timer++;
    minutes = Math.floor((timer/100)/60);
    seconds = Math.floor((timer/100) - (minutes * 60));
    milliseconds = Math.floor(timer- (seconds * 100) - (minutes * 6000));

    $('#minutes').text(leadingZero(minutes));
    $('#seconds').text(leadingZero(seconds));
    $('#m-seconds').text(leadingZero(milliseconds));
};

// leading Zero
let leadingZero = (time) => {
    if(time <= 9){
        return "0" + time;
    }
    else {
        return time;
    }
};

// resetFields
let resetFields = () => {
    timer = 0;
    timerRunning = false;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    interval = 0;
};

// generate Random Text
let generateRandomText = () => {
    let randomIndex = Math.round(Math.random() * 10);
    let randomText = textArray[randomIndex];
    $('#original-text').text(randomText.trim());
};

// display Modal
let displayModal = () => {
    $('#modal-minutes').text(leadingZero(minutes));
    $('#modal-seconds').text(leadingZero(seconds));
    $('#modal-mSeconds').text(leadingZero(milliseconds));
    $('#congrats-modal').modal('show');
};