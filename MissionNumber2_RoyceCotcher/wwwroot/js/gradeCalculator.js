$("#btnSubmit").click(function () {
    //Assign each input field's value to a variable
    let iAssign = $("#intAssign").val();
    let iGroup = $("#intGroup").val();
    let iQuiz = $("#intQuiz").val();
    let iExam = $("#intExam").val();
    let iIntex = $("#intIntex").val();

    //Add up total score based on grade weights to one variable
    let iTotalScore = (iAssign * 0.55) + (iGroup * 0.05) +
        (iQuiz * 0.1) + (iExam * 0.2) + (iIntex * 0.1);


    //If, else if, and else statements to print different options based on student's result
    if (iTotalScore > 89) {
        alert("Your score was " + iTotalScore + ". You got an A in the class");
    }
    else if (iTotalScore > 79) {
        alert("Your score was " + iTotalScore + ". You got a B in the class");
    }

    else if (iTotalScore > 69) {
        alert("Your score was " + iTotalScore + ". You got a C in the class");
    }

    else if (iTotalScore > 59) {
        alert("Your score was " + iTotalScore + ". You got a D in the class");
    }

    else {
        alert("You didn't pass the class. Better luck next time");
    }

    
})