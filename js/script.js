var btns = document.querySelectorAll(".switch-tabs");
const tabsMain = document.querySelectorAll('.tabs');
const tabCount = document.querySelectorAll('.tabs').length;
var selection_arr = [];

for (var x = 0; x < tabsMain.length; x++) {
    var tabCounter = tabsMain[x].querySelector('.tab-counter');
    var text = (x + 1) + "/" + tabCount;
    tabCounter.innerHTML = text;
}

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (e) {

        var id = e.target.dataset.target;
        var question = e.target.dataset.question;
        var answer = e.target.dataset.answer;
        var selection = "";

        var radios = document.getElementsByName(question);

        for (var radio of radios) {
            if (radio.checked) {
                selection = radio.value;
            }

        }

        //validating inputs
        if (selection == "") {
            alert("Kindly select a value from the provided options");
            return false;
        }
        saveSelection(selection, answer, question);

        //switch tabs
        var tabs = document.querySelectorAll('.tabs');
        for (var t = 0; t < tabs.length; t++) {
            tabs[t].classList.remove('active');
        }
        if (id == "submit") {
            calculateFinalResult();
            document.querySelector('#result-tab').classList.add('active');
        } else {
            var nextTab = document.getElementById(id);
            nextTab.classList.add('active');
        }
    });
}

function saveSelection(selection, answer, question) {
    var arr = [];

    if (selection == answer) {
        arr.score = 1;
    } else {
        arr.score = 0;
    }
    arr.question = question;
    selection_arr.push(arr);

}
function calculateFinalResult() {
    var finalScore = 0, percentage, grade
    questions = document.querySelectorAll('.question').length;
    for (var j = 0; j < selection_arr.length; j++) {
        var arr = selection_arr[j];
        finalScore += arr.score;
    }
    var resultTab = document.querySelector('#result-tab');

    if (finalScore > 0) {
        percentage = finalScore / questions * 100;
    } else {
        percentage = 0;
    }
    if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "Fail";
    }


    resultTab.querySelector('#result-score').innerHTML = finalScore + " out of " + questions;
    resultTab.querySelector('#result-percentage').innerHTML = percentage + "%";
    resultTab.querySelector('#grade').innerHTML = "Grade: " + grade;

    if (percentage < 80) {
        resultTab.querySelector("#retake-test").disabled = false;
    }

}
function retakeTest() {
    window.location.reload();
}
var answers = document.querySelectorAll('.answer-tab');
for (var a = 0; a < answers.length; a++) {
    answers[a].addEventListener("click", function (e) {
        var parent_id = e.target.dataset.parent;
        var parent = document.getElementById(parent_id);
        var siblings = parent.querySelectorAll('.answer-tab');
        for (var z = 0; z < siblings.length; z++) {
            siblings[z].classList.remove('selected');
            siblings[z].querySelector('input').checked = false;
        }
        e.target.classList.add('selected');
        e.target.querySelector('input').checked = true;
    });
}




