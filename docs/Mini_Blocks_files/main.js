window.addEventListener("load", function(){
    var Engine = document.getElementById("gameFrame").contentWindow.Engine;
    var Game = document.getElementById("gameFrame").contentWindow.Game;
    var Utils = document.getElementById("gameFrame").contentWindow.Utils;
    
    Engine.System.run();
});