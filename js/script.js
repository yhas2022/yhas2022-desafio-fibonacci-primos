// === MÓDULO 1: FIBONACCI FINANCIERO COMPLEJO ===
function simularConcierto() {
    let presupuesto = parseInt(document.getElementById("presupuestoInput").value);
    let txtSalida = document.getElementById("resFibonacci");
    let cajaBox = document.getElementById("boxResultadoFib");

    let a = 0;
    let b = 1;
    let c;
    let costoAcumulado = 0;
    let contadorCanciones = 0;
    let reporteLog = "📋 BALANCE DE REPRODUCCIÓN DIGITAL:\n\n";

    for (let i = 1; i <= 50; i++) {
        c = a + b;
        a = b;
        b = c;

        if (costoAcumulado + a > presupuesto) {
            reporteLog += `🚫 Canción N° ${i}: Requiere Bs. ${a} | ¡Supera el presupuesto disponible!\n`;
            break;
        }

        costoAcumulado += a;
        contadorCanciones++;
        reporteLog += `🎵 Canción N° ${i} Comprada ➔ Inversión: Bs. ${a} | Acumulado en Caja: Bs. ${costoAcumulado}\n`;
    }

    let vuelto = presupuesto - costoAcumulado;
    
    // Inyección en limpio con tipografía estilizada
    txtSalida.innerHTML = `🏆 RESUMEN COMPLETO DE OPERACIÓN:
--------------------------------------------------
• Total de canciones financiadas: ${contadorCanciones} tracks.
• Capital total invertido en entradas: Bs. ${costoAcumulado}.
• Saldo de retorno seguro (vuelto): Bs. ${vuelto}.

==================================================
${reporteLog}`;
    
    cajaBox.className = "zona-resultado alerta-exito";
}

// === MÓDULO 2: VALIDADOR DE PRIMOS ===
function jugarEscapeRoom() {
    let codigo = parseInt(document.getElementById("codigoPrimoInput").value);
    let txtSalida = document.getElementById("resPrimos");
    let cajaBox = document.getElementById("boxResultadoPri");

    if (codigo <= 1) {
        txtSalida.innerHTML = "❌ DIAGNÓSTICO: CLAVE RECHAZADA\nLos números menores o iguales a 1 no aplican a la regla de primalidad atómica.";
        cajaBox.className = "zona-resultado alerta-error";
        return;
    }

    let divisores = 0;
    for (let i = 1; i <= codigo; i++) {
        if (codigo % i === 0) {
            divisores++;
        }
    }

    if (divisores === 2) {
        txtSalida.innerHTML = `🔓 DIAGNÓSTICO: CLAVE APROBADA (Criptosegura)
--------------------------------------------------
El código numérico ${codigo} es perfectamente PRIMO. 
Solo posee dos divisores exactos (1 y ${codigo}). La firma digital es estable.`;
        cajaBox.className = "zona-resultado alerta-exito";
    } else {
        txtSalida.innerHTML = `🚨 DIAGNÓSTICO: ENTRADA VULNERABLE
--------------------------------------------------
El código ${codigo} NO es primo. Se detectaron ${divisores} divisores lógicos. 
La clave es un número compuesto fácil de interceptar por fuerza bruta.`;
        cajaBox.className = "zona-resultado alerta-error";
    }
}

// === MÓDULO 3: RADAR COMBINADO VIP ===
function escanearRadarVIP() {
    let rango = parseInt(document.getElementById("limiteRadarInput").value);
    let txtSalida = document.getElementById("resCombo");

    let a = 0;
    let b = 1;
    let c;
    let reporteRadar = "🛰️ INICIANDO ANÁLISIS CRUZADO DE DATOS...\n==================================================\n";
    let encontradosVIP = 0;

    for (let i = 1; i <= rango; i++) {
        c = a + b;
        a = b;
        b = c;

        let esPrimo = true;
        if (a <= 1) {
            esPrimo = false;
        } else {
            for (let x = 2; x < a; x++) {
                if (a % x === 0) {
                    esPrimo = false;
                    break;
                }
            }
        }

        if (esPrimo) {
            reporteRadar += `🌟 Asiento N° ${a} ➔ [COINCIDENCIA CRÍTICA: FILTRO VIP DETECTADO] ✅\n`;
            encontradosVIP++;
        } else {
            reporteRadar += `   Asiento N° ${a} ➔ [Registro Común - Pasando de largo...]\n`;
        }
    }

    reporteRadar += `\n==================================================\n🎯 CONCLUSIÓN DETECTOR: Se localizaron con precisión ${encontradosVIP} hitos matemáticos en el rango estipulado.`;
    txtSalida.innerText = reporteRadar;
}