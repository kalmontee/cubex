// Audio
var audio = new Audio("game-of-thrones.mp3");
var count = 15;
var intervalId;
var clockRunning = false;
var correctAnswer = 0;
var wrongAnswer = 0;
var unAnswer = 0;

// event listener
$('#start-game').click(startGame);
$('#options').on('click', 'button', optionClicked);

var trivia = {
    images: ["images/night-king.gif", 'images/Arya.gif', "images/dracarys.gif", "images/changing-faces.gif", "images/ned-stark.gif", "images/Tyrion.gif"],
    currentQuestion: 0,

    // questions, choices and answers
    questions: [
        "Who was responsible for the creation of the Night King?",
        "What was Hodor called before he got his tragic door-holding nickname?",
        "Dany's dragons are (or were) called Drogon, Viserion and _____",
        "Where is the House of Black and White, the training temple of the Faceless Men?",
        "Who was Ned Stark's predecessor as Robert Baratheon's Hand?",
        "How many kings and queens of Westeros did Lord Vary's serve?",
        "Who was the leader of the Golden Company sellswords when Dany ransacked King’s Landing?",
        "What is the name of the giant dragon-slaying crossbow that failed to protect King's Landing?",
        "How was 'The Queen of Thorns' more commonly known?",
        "Who said: 'You're shit at dying, you know that?",
        "Grey Worm is the leader of which group?"
    ],

    choices: [
        ["The Lord of Light", "The Drowned God", "The First Men", "The Children of the Forest"],
        ["Myrys", "Wylis", "Horys", "Gladys"],
        ["Dougal", "Vhagar", "Raegal", "Balerion"],
        ["Qarth", "Bravos", "Meeren", "No one knows"],
        ["Jamie Lannister", "Jon Arryn", "Tywin Lannister", "Ser Jorah Mormont"],
        ['Two', "Three", "Four", "Five"],
        ['Wes Borland', 'Kiefer Sutherland', 'Harry Strickland', 'Robert Westland'],
        ['Millipede', "The 'You're Making Me Very Cross(bow)'", "Scorpion", "Mantis"],
        ['Cersei Lannister', 'Margaery Tyrell', "Olenna Tyrell", "E Jarvis Thribb"],
        ["Sandor Clegane ('The Hound')", "King Robert", "Travis Bickle", "Harland Sanders"],
        ["The Unthanks", "The Unjust", "The Unsullied", "The Understones"]
    ],

    answers: [
        "The Children of the Forest",
        "Wylis",
        "Raegal",
        "Bravos",
        "Jon Arryn",
        "Three",
        "Harry Strickland",
        "Scorpion",
        "Olenna Tyrell",
        "Sandor Clegane ('The Hound')",
        "The Usullied",
    ]
}

function startGame() {
    // reset purposes
    intervalId;
    clockRunning = false;
    count = 15;
    correctAnswer = 0;
    wrongAnswer = 0;
    unAnswer = 0;
    trivia.currentQuestion = 0;
    clearInterval(intervalId);

    // set results to blank
    $('#ending').html('');
    $('#correct').html('');
    $('#incorrect').html('');
    $('#unAnswer').html('');
    $('#status').hide();

    // inside start game function play the game-of-thrones intro (audio.play())
    audio.play();

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
    $('#status').hide();

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

    var user_input = $(this).attr("answer");

    // userInput will declare whatever choice the user clicked on the answer
    if (trivia.answers[trivia.currentQuestion] === user_input) {
        // stop the count down from running
        clearInterval(intervalId);

        // add +1 to correctAnswer
        correctAnswer++

        // set timeout to display results for one seconds
        setTimeout(displayResults, 1000);

        // display a gif image

        // display the correct answer
        $('#status').html('<h3>Correct!!!! ' + trivia.answers[trivia.currentQuestion] + '</h3>');

    } else {
        // add +1 to wrongAnswer
        wrongAnswer++;

        // stop the timer once user pressed the wrong answer
        clearInterval(intervalId);
        clockRunning = false;

        // set timeout to display results for one second
        setTimeout(displayResults, 1000);
        // display a gif image

        // Display the correct answer
        $('#status').html('<h3>Incorrect!!! The answer was ' + trivia.answers[trivia.currentQuestion] + '</h3>');
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
        $('#status').html('<h3>You ran out of time!! The answer was ' + trivia.answers[trivia.currentQuestion] + '</h3>').hide();

        // if all the questions have been display show the results
    } else if (trivia.currentQuestion === trivia.questions.length) {
        $('#ending').html('Thank you for playing! WINTER IS COMING!!');
        $('#correct').html('Correct: ' + correctAnswer);
        $("#incorrect").html('Wrong: ' + wrongAnswer);
        $('#unAnswer').html('Unanswered: ' + unAnswer);

        // show start-game button to begin a new trivia
        $('#start-game').show();

        // hide trivia section
        $('#trivia').hide();
    }
}

function displayResults() {
    // hide the question, options, and countDown
    $('#question').hide();
    $('#options').hide();
    $('.time').hide();
    $('#status').show();

    // increment to next currentQuestion
    trivia.currentQuestion++;

    setTimeout(showQuestions, 3000);
}