/**
 * Created by maus on 20.03.2016.
 */

window.onload = function() {

    var massiiv = document.getElementsByClassName('bead');

    for (var i = 0; i < massiiv.length; i++) {
        massiiv[i].onclick = function () {
            var style = window.getComputedStyle(this);
            var float_old = style.getPropertyValue('float');
            if (float_old == "left") {
                this.style.cssFloat = "right";

            } else {
                this.style.cssFloat = "left";

            }
        }
    }
}