setInterval(() => {
    function formatTime(time) {
        return time < 10 ? "0" + time : time;
    }

    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundo = data.getSeconds();

    console.log(formatTime(hora))
}, 1000);



