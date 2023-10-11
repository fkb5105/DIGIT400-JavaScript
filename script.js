window.addEventListener('DOMContentLoaded', init, false);

function init() {
    alert('Welcome to my JavaScript Experiments!');
    var colorButton = document.getElementById("colorButton");
    var fontSizeButton = document.getElementById("fontSizeButton");
    var resetButton = document.getElementById("resetButton");
    var customButton = document.querySelector(".custom-button"); 

    colorButton.addEventListener('click', changeColor, false);
    fontSizeButton.addEventListener('click', increaseFontSize, false);
    resetButton.addEventListener('click', resetStyles, false);
    customButton.addEventListener('click', customButtonClick, false); 
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
    var tableHeader = document.querySelector("thead");
    tableHeader.style.color = ""; 
    tableHeader.style.backgroundColor = ""
}

function customButtonClick() {
    var tableHeader = document.querySelector("thead");
    tableHeader.style.color = "white"; 
    tableHeader.style.backgroundColor = "#009CDE";
    console.log("Custom button clicked");
}
