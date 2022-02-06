var btns = document.querySelectorAll(".switch-tabs");
const tabs_main = document.querySelectorAll('.tabs');
const tab_count = document.querySelectorAll('.tabs').length;

for (var x = 0; x < tabs_main.length; x++) {
    var tab_counter = tabs_main[x].querySelector('.tab-counter');
    var text = (x + 1) + "/" + tab_count;
    tab_counter.innerHTML = text;
}

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (e) {

        var id = e.target.dataset.target;
        var question = e.target.dataset.question;
        var answer = e.target.dataset.answer;
        var selection = "";

        var radios = document.getElementsByClassName(question);

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

        //switch tabs
        var tabs = document.querySelectorAll('.tabs');
        for (var t = 0; t < tabs.length; t++) {
            tabs[t].classList.remove('active');
        }
        if (id == "submit") {
            document.querySelector('result-tab').classList.add('active');
        } else {
            var nextTab = document.getElementById(Id);
            nextTab.classList.add('active');
        }
    });
}

