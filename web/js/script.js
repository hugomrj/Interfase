
function saludo() {
    alert("Que hay de nuevo!");
}
 
 
 
function mensaje() {
    alert("Gracias por hacerme click");
}
 
function inicia() {
    listen(document.getElementById("miBoton"),"click",mensaje);
}
 
//addLoadEvent(saludo);
addLoadEvent(inicia);