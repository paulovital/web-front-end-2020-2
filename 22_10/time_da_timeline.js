function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay; 
}

let tempo = document.querySelectorAll('#playlist.style-scope.ytd-watch-flexy span.ytd-thumbnail-overlay-time-status-renderer')
tempo = Array.from(tempo)
let segundos = tempo.reduce((ac, va) =>{
    let [min, sec] = va.innerText.split(':');
    ac += (parseInt(min) * 60) + parseInt(sec)
    return ac
 }, 0)

 secondsToHms(segundos)