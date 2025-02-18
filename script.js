function startTime(){
    let today = new Date();
    let hours = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    min = checkTime(min);

    document.getElementById('txt').innerHTML = hours + ":" + min;
    document.getElementById('seconds').innerHTML = sec
    time = setTimeout('startTime()', 500);
}
function checkTime(i){
    if (i<10){
        i="0"+i;
    } return i;
}

startTime()