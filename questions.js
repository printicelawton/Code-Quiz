//This is a Javascript timed quiz to test your knowledge 
//You will have 15 seconds to answer each question
//Time begins with you click the Start Button
//If you answer an question incorrectly time is subtracted from the clock
//The game is over when all questions are answered or the timer reaches 0
//When the game is over you can save your initials and your score


// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Inside which HTML element do we put the Javascript?",
    answer: "<script>",
    options: [
      "<script>",
      "<scripting>",
      "<js>",
      "<javascript"
    ]
  },
    {
    numb: 2,
    question: "The external JavaScript file must contain the <script> tag",
    answer: "True",
    options: [
      "True",
      "False",
    ]
  },
    {
    numb: 3,
    question: "What operator is used to assign a value to a declared variable?",
    answer: "Equal sign (=)",
    options: [
      "Question Mark (?)",
      "Double-equal (==)",
      "Colon (:)",
      "Equal Sign (=)"
    ]
  },
    {
    numb: 4,
    question: "What is the difference between && and ||? ",
    answer: "The logical operator && returns true if both expressions are true while the logical operator || returns true if one expression or the other returns true.",
    options: [
      "The logical operator && returns true if none of the expressions are true while the logical operator || returns true if one expression or the other returns true.",
      "The logical operator && returns true if one expression is true while the logical operator || returns true if both expressions returntrue true.",
      "The logical operator && returns true if both expressions are true while the logical operator || returns true if one expression or the other returns true.",
    ]
  },
    {
    numb: 5,
    question: "How do we declare a conditional statement in JavaScript?",
    answer: "if...else",
    options: [
      "for loop",
      "if...else",
      "difference between",
      "while loop"
    ]
  },
  
];

