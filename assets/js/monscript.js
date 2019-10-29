// Sélectionne l'élement a partir de son id
var picture = document.getElementById('image1');
// Si l'on survole l'element
picture.onmouseover = function() {
picture.style.border = "3px solid red";
}
picture.onmouseout = function() {
picture.style.border = "none";
}
