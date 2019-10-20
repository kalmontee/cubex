// Audio
var audio = new Audio("game-of-thrones.mp3");
var count = 11;
var intervalId;
var clockRunning = false;
var correctAnswer = 0;
var wrongAnswer = 0;
var unAnswer = 0;

// event listener
$('#start-game').click(startgame);
$('#options').on('click', 'button', optionClicked);

var trivia = {
    images: ['images/Arya.gif', "images/changing-faces.gif", "images/dracarys.gif", "images/ned-stark.gif", "images/night-king.gif", "images/Tyrion.gif"],
    currentQuestion: 0,

    // questions, choices and answers
    questions: [
        "Who was responsible for the creation of the Night King?",
        "What was Hodor called before he got his tragic door-holding nickname?",
        "Dany's dragons are (or were) called Drogon, Viserion and _____",
        "Where is the House of Black and White, the training temple of the Faceless Men?",
        "Who was Ned Stark's predecessor as Robert Baratheon's Hand?",
        "How many kings and queens of Westeros did Lord Vary's serve?",
    ],

    choices: [
        ["The Lord of Light", "The Drowned God", "The First Men", "The Children of the Forest"],
        ["Myrys", "Wylis", "Horys", "Gladys"],
        ["Dougal", "Vhagar", "Raegal", "Balerion"],
        ["Qarth", "Bravos", "Meeren", "No one knows"],
        ["Jamie Lannister", "Jon Arryn", "Tywin Lannister", "Ser Jorah Mormont"],
        ['Two', "Three", "Four", "Five"]
    ],

    answers: [
        "The Children of the Forest",
        "Wylis",
        "Raegal",
        "Bravos",
        "Jon Arryn",
        "Three"
    ]
}

// function to start the game
$("#start-game").on('click', function() {
    // inside start game function play the game-of-thrones intro (audio.play())
    // audio.play();

    // Hide start button
    $('#start-game').hide();

    triviaGame();
    showQuestions();

});

function triviaGame() {

    $('#options').on('click', 'button', function() {
        console.log('It works'); // test

        // begin the coutDown
        // countDown();

        // Check if the answer is correct as user input
        var user_input = $(this).attr("answer");
        if (trivia.answers[trivia.currentQuestion] === user_input) {

            // display the status
            // displayResults();

            // setTimeout(showQuestions, 2000);
            // setTimeout(displayResults, 4000);

            // $('<div>').html('<img src=' + trivia.images[0] + ">");
            // $("#image-holder").html("<img src=" + trivia.images[0] + "width='400px'>");
            $('#status').html('<h3>Correct!!!! ' + trivia.answers[trivia.currentQuestion] + '</h3>');

            // stop the setInterval function
            stop();
            stopTimer = clearInterval(intervalId);

            // add +1 to correct answers
            // trivia.correctAnswer++;
        } else {
            // displayResults();
            // $('#status').html('<h3>Better luck next time! ' + trivia.answers[trivia.currentQuestion] + '</h3>');

            // stop the setInterval function
            stop();
            // displayResults();
            stopTimer = clearInterval(intervalId);

            // call setTimeout function
            var status = $('#status').html('<h3>The correct answer was ' + trivia.answers[trivia.currentQuestion] + '</h3>');
            // var hideStatus = setTimeout(status, 3000);

            // add +1 to wrong answers
            // trivia.wrongAnswer++;
        }
    });
}

function showQuestions() {
    $('#question').show();
    $('#options').show();
    $('.time').show();

    // Stop timer
    intervalId = setInterval(decrement, 1000);

    $('#question').html(trivia.questions[trivia.currentQuestion]);

    var choicesArr = trivia.choices[trivia.currentQuestion];

    $('#options').empty();
    // Loop through the choices and display it as a button.
    for (var i = 0; i < choicesArr.length; i++) {
        var button = $('<button>');
        button.text(choicesArr[i]);
        button.attr("answer", choicesArr[i]);
        $('#options').append(button);
    }

    console.log(trivia.questions[trivia.currentQuestion]);
    console.log(trivia.choices[trivia.currentQuestion]);
    console.log(trivia.answers[trivia.currentQuestion]);
}

function displayResults() {
    // hide the question, options, and countDown
    $('#question').hide();
    $('#options').hide();
    $('.time').hide();

    // Display a countDown when the next question is going to appear. 5 seconds max.
    // stop();
    stopTimer = clearInterval(intervalId);
    // trivia.currentQuestion++;

    setTimeout(showQuestions, 3000);
    // count = 11;
}

function decrement() {
    // decrease the number by one
    count--;

    // Diplsay the count down in the #countDown
    $("#countDown").text("Time remaining " + count + ' seconds');

    // if countDown is equal to 0
    if (count === 0) {
        // tell the user time is up!
        // $(".time").text('TIMES UP!');

        // call the stop function
        stop();
        stopTimer = clearInterval(intervalId);

        // display the correct answer
        displayResults();
        $('#status').html('<h3>The correct answer was ' + trivia.answers[trivia.currentQuestion] + '</h3>');

        // display the next question
        trivia.currentQuestion++;

        // add a +1 to unAnswer
        trivia.unAnswer++;
    }
    console.log(count);
}


function stop() {
    // clearInterval(intervalId);
    // triviaGame();
    // decrement();
    // showQuestions();
    displayResults();
    trivia.currentQuestion++;
}