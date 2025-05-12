// ON LOAD
var current = 2;
var picture1 = document.getElementById("1");
var picture2 = document.getElementById("2");
var picture3 = document.getElementById("3");

window.onload = function () {
    updateDisplay();
};


// CAROUSEL change picture
var previous = document.getElementById("previous");
var next = document.getElementById("next");

next.addEventListener("click", function () {
    if (current == 3) {
        current = 1;
    } else {
        current++;
    }
    updateDisplay();
    console.log("new current : " + current);
});

previous.addEventListener("click", function () {
    if (current == 1) {
        current = 3;
    } else {
        current--;
    }
    updateDisplay();
    console.log("new current : " + current);
});

function updateDisplay() {
    if (current == 1) {
        picture1.style.display = "block";
        picture1.classList.remove("reducedPicture");
        picture1.style.order = "0";

        picture2.style.order = "1";
        picture2.classList.add("reducedPicture");

        picture3.classList.add("reducedPicture");
        picture3.style.order = "-1";
    } else if (current == 2) {
        picture1.classList.add("reducedPicture");
        picture1.style.order = "-1";

        picture2.style.display = "block";
        picture2.style.order = "0";
        picture2.classList.remove("reducedPicture");

        picture3.classList.add("reducedPicture");
        picture3.style.order = "1";
    } else if (current == 3) {
        picture1.classList.add("reducedPicture");
        picture1.style.order = "1";

        picture2.classList.add("reducedPicture");
        picture2.style.order = "-1"

        picture3.style.display = "block";
        picture3.style.order = "0";
        picture3.classList.remove("reducedPicture");
    }
}
