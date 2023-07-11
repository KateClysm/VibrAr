var linkTaylor = document.getElementById('linkTaylor');
var linkTheWeeknd = document.getElementById('linkTheWeeknd');
var linkManeskin = document.getElementById('linkManeskin');
var linkRedHot = document.getElementById('linkRedHot');
var linkEvanescence = document.getElementById('linkEvanescence');
var linkDuki = document.getElementById('linkDuki');

function cambiarLinkVisible() {
    linkTaylor.href = "taylor.html";
    linkTheWeeknd.href = "theweeknd.html";
    linkManeskin.href = "maneskin.html";
    linkRedHot.href = "redhot.html";
    linkEvanescence.href = "evanescence.html";
    linkDuki.href = "duki.html";
}

function cambiarLinkOculto() {
    linkTaylor.href = "#";
    linkTheWeeknd.href = "#";
    linkManeskin.href = "#";
    linkRedHot.href = "#";
    linkEvanescence.href = "#";
    linkDuki.href = "#";
}

function cambioDeTamaño() {
    if (window.innerWidth <= 1023) {
        cambiarLinkVisible();
    } else {
        cambiarLinkOculto();
    }
}

cambioDeTamaño();
window.addEventListener("resize", cambioDeTamaño);
