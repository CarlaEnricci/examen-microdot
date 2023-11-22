// Pido los datos cada segundo
setInterval(() => {
    // Pido los datos a la ruta /data/update
    fetch("/data/update")
    .then(response => response.json())
    .then(data => {
        // Guardo el valor de temperatura
        const luminica = data.porcentaje_luminico;
        // Maximo valor de temperatura
        const max_luminica = 100;
        // Lo escalo a un valor entre -30 y 240 grados
        const deg = luminica * 300 / max_luminica - 30;
        // Lo cambio en la aguja
        document.querySelector(".gauge .pointer .hand").style.transform = `rotate(${deg}deg)`;
    })
    
}, 200);
