let tab = document.querySelectorAll('.container .navigation button');
let panel = document.querySelectorAll('.container .panel');

function showPanel(panelIndex, colorCode) {
    tab.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tab[panelIndex].style.backgroundColor = "teal";
    tab[panelIndex].style.color = "white";
    panel.forEach(function(node) {
        node.style.display = "none";
    });
    panel[panelIndex].style.display = "block";
    panel[panelIndex].style.backgroundColor = colorCode;
}

showPanel(0, '');