window.addEventListener('DOMContentLoaded', init, false);

function init() {
    alert ('Welcome to my JavaScript Experiments!');
    var colorButton = document.getElementById("colorButton");
    var fontSizeButton = document.getElementById("fontSizeButton");
    var resetButton = document.getElementById("resetButton"); 
    var table = document.getElementById("myTable");

    colorButton.addEventListener('click', changeColor, false);
    fontSizeButton.addEventListener('click', increaseFontSize, false);
    resetButton.addEventListener('click', resetStyles, false); 
}

function changeColor() {
    var table = document.getElementById("myTable");
    table.style.backgroundColor = "#001E44";
    table.style.color = "white";
}

function increaseFontSize() {
    var table = document.getElementById("myTable");
    var currentFontSize = window.getComputedStyle(table, null).getPropertyValue('font-size');
    var currentSize = parseFloat(currentFontSize);
    var newSize = currentSize + 4;
    table.style.fontSize = newSize + "px";
}

function resetStyles() {
    var table = document.getElementById("myTable");
    table.style.backgroundColor = ""; 
    table.style.color = ""; 
    table.style.fontSize = ""; 
}
