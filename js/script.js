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
        var tabs = document.querySelectorAll('.tabs');
        for (var t = 0; t < tabs.length; t++) {
            tabs[t].classList.remove('active');
        }

        var id = e.target.dataset.target;
        var nextTab = document.getElementById(id);

        nextTab.classList.add('active');
    });
}