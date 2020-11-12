let text = document.getElementById("text");

function boldy() {
    text.style.fontWeight = "bold";
}

function colory() {
    text.style.color = "red";
}

function larget() {
    text.style.fontSize = "large"
}

function never() {
    text.style.fontWeight = "400"
    text.style.color = "black"
    text.style.fontSize = "initial"
}

let bold = document.getElementById("bold");
bold.onclick = function () {
    let isBold = text.style.fontWeight;
    if (isBold == 'bold') {
        never();
    } else {
        boldy();
    }

}
let color = document.getElementById("color");
color.onclick = function () {
    let isColor = text.style.color;
    if (isColor == 'red') {
        never();
    } else {
        colory();
    }

}
let large = document.getElementById("large");
large.onclick = function () {
    console.log(text.style.fontSize);
    let isLarge = text.style.fontSize;
    if (isLarge == 'large') {
        never();
    } else {
        larget();
    }
}