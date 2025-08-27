function actualizarReloj() {
    const ahora = new Date();

    // Hora
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    document.getElementById("hora").textContent = `${horas}:${minutos}:${segundos}`;

    // Fecha
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const dia = ahora.getDate().toString().padStart(2, '0');
    const mes = (ahora.getMonth() + 1).toString().padStart(2, '0'); // Enero = 0
    const anio = ahora.getFullYear();
    const diaSemana = diasSemana[ahora.getDay()];

    document.getElementById("fecha").textContent = `${diaSemana}, ${dia}/${mes}/${anio}`;
}

setInterval(actualizarReloj, 1000);
actualizarReloj();