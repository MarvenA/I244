/**
 * Created by maus on 20.03.2016.
 */
window.onload = function() {
    var valimine = document.getElementById('valimine');

    valimine.onclick=function(){
        valimine.style.marginTop=((Math.random() * (window.screen.availHeight - 200))) + "px";
        valimine.style.marginLeft=((Math.random() * (window.screen.availWidth-200))) + "px";
    }
}