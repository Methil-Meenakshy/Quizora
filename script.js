// ===============================
// QUIZ QUESTIONS
// ===============================

const quizData = {

    "Student Essentials": [
        {
            question: "Which language is used to structure a webpage?",
            options: ["Python", "HTML", "Java", "C++"],
            answer: "HTML"
        },
        {
            question: "What does CPU stand for?",
            options: [
                "Central Processing Unit",
                "Computer Processing Utility",
                "Central Program Unit",
                "Computer Power Unit"
            ],
            answer: "Central Processing Unit"
        },
        {
            question: "Which of these is an operating system?",
            options: ["Google", "Windows", "Python", "HTML"],
            answer: "Windows"
        },
        {
            question: "What does the term URL refer to when accessing something on the internet?",
            options: [
                "A type of computer virus",
                "The address of a resource on the internet",
                "A programming language",
                "A computer's storage device"
            ],
            answer: "The address of a resource on the internet"
        },
        {
            question: "Which data structure follows the LIFO principle?",
            options: ["Queue", "Array", "Stack", "Linked List"],
            answer: "Stack"
        }
    ],

    "World and Current Affairs": [
        {
            question: "Which is the largest continent in the world?",
            options: ["Africa", "Asia", "Europe", "North America"],
            answer: "Asia"
        },
        {
            question: "Which organization is responsible for maintaining international peace and security?",
            options: [
                "World Bank",
                "United Nations",
                "WTO",
                "NATO"
            ],
            answer: "United Nations"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Mercury"],
            answer: "Mars"
        },
        {
            question: "Which country is known as the Land of the Rising Sun?",
            options: ["China", "South Korea", "Japan", "Thailand"],
            answer: "Japan"
        },
        {
            question: "Which ocean is the largest on Earth?",
            options: [
                "Atlantic Ocean",
                "Indian Ocean",
                "Pacific Ocean",
                "Arctic Ocean"
            ],
            answer: "Pacific Ocean"
        }
    ],

    "Entertainment and Memory": [
        {
            question: "Which film series features the character Harry Potter?",
            options: [
                "The Lord of the Rings",
                "Harry Potter",
                "The Hunger Games",
                "The Chronicles of Narnia"
            ],
            answer: "Harry Potter"
        },
        {
            question: "Which instrument has black and white keys?",
            options: ["Guitar", "Piano", "Drums", "Violin"],
            answer: "Piano"
        },
        {
            question: "Which sport is associated with Wimbledon?",
            options: ["Football", "Cricket", "Tennis", "Basketball"],
            answer: "Tennis"
        },
        {
            question: "Which superhero is also known as the Dark Knight?",
            options: ["Superman", "Iron Man", "Batman", "Spider-Man"],
            answer: "Batman"
        },
        {
            question: "Which Indian film industry is commonly known as Bollywood?",
            options: [
                "Tamil cinema",
                "Hindi cinema",
                "Malayalam cinema",
                "Bengali cinema"
            ],
            answer: "Hindi cinema"
        }
    ],

    "Logic and Thinking": [
        {
            question: "If all roses are flowers and some flowers fade quickly, can we conclude that all roses fade quickly?",
            options: [
                "Yes, always",
                "No, there is not enough information",
                "Only if roses are red",
                "Only in summer"
            ],
            answer: "No, there is not enough information"
        },
        {
            question: "What number comes next: 2, 4, 8, 16, ?",
            options: ["20", "24", "32", "36"],
            answer: "32"
        },
        {
            question: "A clock shows 3:00. What is the angle between the hour and minute hands?",
            options: ["45 degrees", "90 degrees", "120 degrees", "180 degrees"],
            answer: "90 degrees"
        },
        {
            question: "If you rearrange the letters 'LISTEN', which word can you form?",
            options: ["SILENT", "LITTLE", "LINEST", "TINSEL"],
            answer: "SILENT"
        },
        {
            question: "A train travels 60 km in 1 hour. How far will it travel in 3 hours at the same speed?",
            options: ["120 km", "150 km", "180 km", "200 km"],
            answer: "180 km"
        }
    ],

    "Situations and Personality": [
        {
            question: "You have an important deadline tomorrow, but your friend asks you to go out. What would you most likely do?",
            options: [
                "Ignore the deadline",
                "Finish the important work first",
                "Cancel everything permanently",
                "Ask someone else to do your work"
            ],
            answer: "Finish the important work first"
        },
        {
            question: "During a group project, two members strongly disagree. What is the best approach?",
            options: [
                "Choose one person's side immediately",
                "Ignore the disagreement",
                "Listen to both sides and find a solution",
                "Leave the group"
            ],
            answer: "Listen to both sides and find a solution"
        },
        {
            question: "You make a mistake while working on an important task. What is the most responsible response?",
            options: [
                "Hide the mistake",
                "Blame someone else",
                "Acknowledge it and try to fix it",
                "Ignore it"
            ],
            answer: "Acknowledge it and try to fix it"
        },
        {
            question: "You are given a task you have never done before. What is a good first step?",
            options: [
                "Refuse immediately",
                "Try to understand the task and learn what is needed",
                "Wait until someone does it for you",
                "Guess without learning anything"
            ],
            answer: "Try to understand the task and learn what is needed"
        },
        {
            question: "A teammate receives praise for work that you also contributed to. What would be the most constructive response?",
            options: [
                "Start an argument",
                "Say nothing and become resentful",
                "Discuss your contribution calmly if recognition matters",
                "Stop helping the team"
            ],
            answer: "Discuss your contribution calmly if recognition matters"
        }
    ]
};


// ===============================
// VARIABLES
// ===============================

let currentCategory = "";
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let quizFinished = false;


// ===============================
// SHOW CATEGORIES
// ===============================

function showCategories() {

    document.getElementById("categories").scrollIntoView({
        behavior: "smooth"
    });
}


// ===============================
// START QUIZ
// ===============================

function startQuiz(category) {

    currentCategory = category;
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    quizFinished = false;

    document.getElementById("quiz-title").innerText = category;

    showQuestion();

    document.getElementById("quiz").scrollIntoView({
        behavior: "smooth"
    });
}


// ===============================
// SHOW QUESTION
// ===============================

function showQuestion() {

    const questionData =
        quizData[currentCategory][currentQuestion];

    document.getElementById("question").innerText =
        questionData.question;

    document.getElementById("option1").innerText =
        questionData.options[0];

    document.getElementById("option2").innerText =
        questionData.options[1];

    document.getElementById("option3").innerText =
        questionData.options[2];

    document.getElementById("option4").innerText =
        questionData.options[3];

    selectedAnswer = null;

    resetOptions();

    document.getElementById("next").innerText =
        currentQuestion === 4 ? "Finish Quiz" : "Next";
}


// ===============================
// RESET OPTIONS
// ===============================

function resetOptions() {

    const options = [
        document.getElementById("option1"),
        document.getElementById("option2"),
        document.getElementById("option3"),
        document.getElementById("option4")
    ];

    options.forEach(function(option) {

        option.style.backgroundColor = "";
        option.style.color = "";
        option.disabled = false;

    });
}


// ===============================
// SELECT ANSWER
// ===============================

function selectAnswer(optionNumber) {

    if (selectedAnswer !== null) {
        return;
    }

    const questionData =
        quizData[currentCategory][currentQuestion];

    const selectedButton =
        document.getElementById("option" + optionNumber);

    const selectedText =
        selectedButton.innerText;

    selectedAnswer = selectedText;


    const options = [
        document.getElementById("option1"),
        document.getElementById("option2"),
        document.getElementById("option3"),
        document.getElementById("option4")
    ];


    // Disable all options
    options.forEach(function(option) {
        option.disabled = true;
    });


    // Correct answer
    if (selectedText === questionData.answer) {

        selectedButton.style.backgroundColor = "green";
        selectedButton.style.color = "white";

        score++;

    }

    // Wrong answer
    else {

        selectedButton.style.backgroundColor = "red";
        selectedButton.style.color = "white";


        // Show correct answer in green
        options.forEach(function(option) {

            if (option.innerText === questionData.answer) {

                option.style.backgroundColor = "green";
                option.style.color = "white";

            }

        });

    }
}


// ===============================
// NEXT / FINISH BUTTON
// ===============================

document.getElementById("next").addEventListener("click", function() {


    // If quiz is already finished
    if (quizFinished) {

        startQuiz(currentCategory);

        return;
    }


    // No answer selected
    if (selectedAnswer === null) {

        alert("Please select an answer first.");

        return;
    }


    // Last question
    if (currentQuestion === 4) {

        showResult();

        return;
    }


    // Go to next question
    currentQuestion++;

    showQuestion();

});


// ===============================
// SHOW RESULT
// ===============================

function showResult() {

    quizFinished = true;

    const percentage =
        (score / 5) * 100;


    let message;


    if (score === 5) {

        message = "Perfect score! Excellent work!";

    }

    else if (score >= 3) {

        message = "Good job! You did well!";

    }

    else {

        message = "Nice try! Keep learning and try again!";

    }


    // Change title
    document.getElementById("quiz-title").innerText =
        "Quiz Completed!";


    // Show score
    document.getElementById("question").innerText =
        "Your Score: " + score + " / 5";


    // Use the four existing buttons to show result information
    document.getElementById("option1").innerText =
        message;

    document.getElementById("option2").innerText =
        "Percentage: " + percentage + "%";

    document.getElementById("option3").innerText =
        "";

    document.getElementById("option4").innerText =
        "";


    // Disable result buttons
    document.getElementById("option1").disabled = true;
    document.getElementById("option2").disabled = true;
    document.getElementById("option3").disabled = true;
    document.getElementById("option4").disabled = true;


    // Change button to Play Again
    document.getElementById("next").innerText =
        "Play Again";
}


// ===============================
// CONNECT ANSWER BUTTONS
// ===============================

document.getElementById("option1").addEventListener("click", function() {
    selectAnswer(1);
});

document.getElementById("option2").addEventListener("click", function() {
    selectAnswer(2);
});

document.getElementById("option3").addEventListener("click", function() {
    selectAnswer(3);
});

document.getElementById("option4").addEventListener("click", function() {
    selectAnswer(4);
});