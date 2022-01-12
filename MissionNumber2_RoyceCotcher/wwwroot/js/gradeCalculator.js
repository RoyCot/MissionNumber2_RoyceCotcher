$("#btnSubmit").click(function () {
    let iAssign = $("#intAssign").val();
    let iGroup = $("#intGroup").val();
    let iQuiz = $("#intQuiz").val();
    let iExam = $("#intExam").val();
    let iIntex = $("#intIntex").val();


    let iTotalScore = (iAssign * 0.55) + (iGroup * 0.05) +
        (iQuiz * 0.1) + (iExam * 0.2) + (iIntex * 0.1);



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