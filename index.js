answers = ["Just don't", "Deploy it", "Brilliant", "As if", "Hell yeah", "Nah", "Maybe"]

function getAnswer() {
    var item = answers[Math.floor(Math.random() * answers.length)];
    var asked = document.getElementById("question").value;

    document.getElementById("eight").innerHTML = item;

    document.getElementById("title").innerHTML = asked + "?";

    var shakeBall = document.getElementById("ball");
    shakeBall.classList.add("shaking");

    var textShake = document.getElementById("eight");
    textShake.classList.add("shakeText");

    setTimeout(function() {
        shakeBall.classList.remove('shaking');
        textShake.classList.remove('shakeText');
        //....and whatever else you need to do
    }, 1000);


}
