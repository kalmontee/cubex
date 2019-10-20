// Audio
var audio = new Audio("game-of-thrones.mp3");
var count = 11;
var intervalId;
var clockRunning = false;
var correctAnswer = 0;
var wrongAnswer = 0;
var unAnswer = 0;

// event listener
$('#start-game').click(startGame);
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

function startGame() {
    // inside start game function play the game-of-thrones intro (audio.play())
    // audio.play();

    // hide the start button once the user press start
    $('#start-game').hide();

    // Show the question section
    $('#trivia').show();

    // Show the first question
    showQuestions();
}

function showQuestions() {
    $('#question').show();
    $('#options').show();
    $('.time').show();

    // Set the count down for each question
    count = 15;

    // To avoid the timer speed up
    if (!clockRunning) {
        intervalId = setInterval(timeRunning, 1000);
    }

    // Display the questions
    $('#question').html(trivia.questions[trivia.currentQuestion]);

    var choicesArr = trivia.choices[trivia.currentQuestion];

    // To avoid all the questions display at once
    $('#options').empty();

    // Loop through the choices and display it as a button.
    for (var i = 0; i < choicesArr.length; i++) {
        var button = $('<button>');
        button.text(choicesArr[i]);
        button.attr("answer", choicesArr[i]);
        $('#options').append(button);
    }

    // for testing purposes only
    console.log(trivia.questions[trivia.currentQuestion]);
    console.log(trivia.choices[trivia.currentQuestion]);
    console.log(trivia.answers[trivia.currentQuestion]);
}

function optionClicked() {
    trivia.answers[trivia.currentQuestion];

    // setTimeout id variable;
    var timeoutId;

    // userInput will declare whatever choice the user clicked on the answer
    if (trivia.answers[trivia.currentQuestion] === user_input) {
        // stop the count down from running
        clearInterval(intervalId);

        // add +1 to correctAnswer
        correctAnswer++

        // set timeout to display results

        // display a gif image

        // display the correct answer
        $('#status').html('<h3>Correct!!!! ' + trivia.answers[trivia.currentQuestion] + '</h3>');

    } else {
        // add +1 to wrongAnswer
        wrongAnswer++;

        // set timeout to display results

        // display a gif image

        // Display the correct answer
        $('#status').html('<h3>The correct answer was ' + trivia.answers[trivia.currentQuestion] + '</h3>');
    }
}

function timeRunning() {
    // Display the countDown
    if (count > -1 && trivia.currentQuestion < trivia.questions.length) {
        $("#countDown").text("Time remaining: " + count + ' seconds');

        // decrement the count
        count--;

        // clockRunning to false
        clockRunning = false;
    } else if (count === -1) {
        // add +1 to unAnswer
        unAnswer++;

        clearInterval(intervalId);
        clockRunning = false;

        // setTimeout for one second to display the correct answer
        timeoutId = setTimeout(displayResults, 1000);

        // display the status "Ran out of time"
        $('#status').html('<h3>You ran out of time!! The answer was ' + trivia.answers[trivia.currentQuestion] + '</h3>');

        // if all the questions have been display show the results
    }
}

function displayResults() {
    // hide the question, options, and countDown
    $('#question').hide();
    $('#options').hide();
    $('.time').hide();

    // increment to next currentQuestion
    trivia.currentQuestion++;

    setTimeout(showQuestions, 3000);
}

// dont need a stop function...
function stop() {
    // clearInterval(intervalId);
    // triviaGame();
    // decrement();
    // showQuestions();
    displayResults();
    trivia.currentQuestion++;
}