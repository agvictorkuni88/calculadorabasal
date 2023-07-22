function calcularHidratacion() {
    const peso = parseFloat(document.getElementById("peso").value);

    if (peso <= 30) {
        calcularHidratacionHollidaySegar(peso);
    } else {
        calcularHidratacionSuperficieCorporal(peso);
    }
}

function calcularHidratacionHollidaySegar(peso) {
    let volumenDiario = 0;
    let mantenimiento = 0;
    let mantenimientoMedio = 0;

    if (peso <= 10) {
        volumenDiario = peso * 100;
    } else if (peso > 10 && peso <= 20) {
        volumenDiario = 1000 + (peso - 10) * 50;
    } else {
        volumenDiario = 1000 + 500 + (peso - 20) * 20;
    }

    mantenimiento = volumenDiario / 24;
    mantenimientoMedio = mantenimiento + mantenimiento / 2;

    mostrarResultados("Holliday-Segar", volumenDiario.toFixed(2), mantenimiento.toFixed(2), mantenimientoMedio.toFixed(2));
}

function calcularHidratacionSuperficieCorporal(peso) {
    // Cálculo del método de superficie corporal (para niños con más de 30kg)
    const superficieCorporal = ((peso * 4) + 7) / (peso + 90);

    const mantenimiento1500 = superficieCorporal * 1500;
    const mantenimiento2000 = superficieCorporal * 2000;

    mostrarResultados("Superficie Corporal", '', mantenimiento1500, mantenimiento2000);
}

function mostrarResultados(metodo, volumenDiario, mantenimiento, mantenimientoMedio) {
    const metodoElement = document.getElementById("metodo");
    metodoElement.textContent = metodo;

    const volumenDiarioElement = document.getElementById("volumenDiario");
    volumenDiarioElement.textContent = volumenDiario !== '' ? `${volumenDiario}cc` : '-';

    const mantenimientoElement = document.getElementById("mantenimiento");
    mantenimientoElement.textContent = `${mantenimiento}cc/hr`;

    const mantenimientoMedioElement = document.getElementById("mantenimientoMedio");
    mantenimientoMedioElement.textContent = `${mantenimientoMedio}cc/hr`;
}
