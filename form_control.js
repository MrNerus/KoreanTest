function checkError() {
    var answers = document.getElementsByClassName('answer');
    var score_counter = 0;
    for (var i = 0; i < answers.length; i++) {
        var radio = answers[i].querySelector('input[type="radio"]');

        if (radio.checked) {
            if (radio.getAttribute('isCorrect') == 'true') {
                score_counter += 1
                radio.parentElement.parentElement.parentElement.style.background = '#2d27ffAA';
                radio.parentElement.parentElement.parentElement.style.border = '2px solid #2d27ff';
            } else if (radio.getAttribute('isCorrect') == 'false') {
                radio.parentElement.parentElement.parentElement.style.background = '#ff0a6cAA';
                radio.parentElement.parentElement.parentElement.style.border = '2px solid #ff0a6c';
            }
        }
    }
    document.getElementById("score").innerHTML = `${score_counter} / 10`;
}

function clearCheck() {
    var displayed = Array.from(document.getElementsByClassName("showAnswer"));
    for (let i = 0; i < displayed.length; i++) {
        displayed[i].classList.remove("showAnswer")
    }
    var nulls = document.querySelectorAll('input[value="null"]');
    for (var i = 0; i < nulls.length; i++) {
        nulls[i].checked = true;
        nulls[i].parentElement.parentElement.parentElement.style.background = '#ffffff30';
        nulls[i].parentElement.parentElement.parentElement.style.border = '2px solid transparent';
    }
    document.getElementById("score").innerHTML = `0 / 10`;
}

function showAnswer() {
    var answers = document.getElementsByClassName('answer');
    for (var i = 0; i < answers.length; i++) {
        answers[i].classList.add("showAnswer")
    }
}