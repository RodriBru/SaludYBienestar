

  
  
  
  
  function mostrarDieta(opcion) {
    // Ocultar el contenedor de tarjetas
    document.querySelector(".card-container").style.display = "none";

    // Variable para almacenar la información a mostrar
    let mensaje = "";

    switch (opcion) {
      case "bajar":
        mensaje = `
          <h3>🔥Para bajar de peso</h3>
          <p>Adoptá un enfoque inteligente y sostenible para la pérdida de peso 🧠🍽️. Prioriza el consumo de proteínas magras (como pollo, pescado o tofu) que ayudan a preservar tu masa muscular 💪, y combinálas con carbohidratos complejos (como avena, arroz integral o legumbres) para mantenerte saciado por más tiempo 🍠🥦.
Reducí ligeramente tu ingesta calórica diaria sin dejar de nutrir tu cuerpo con alimentos naturales, frescos y balanceados 🥗.
Sumá actividad física regular 🏃‍♂️ y descansá bien 🛌. ¡Tu bienestar es el mejor indicador de progreso! 🌟</p>
        `;
        break;
      case "subir":
        mensaje = `
          <h3>🏋️‍♂️Para subir de peso</h3>
          <p>Si querés aumentar tu peso de manera saludable, el secreto está en una ingesta calórica superior a tu gasto energético 🔥. Incorporá alimentos ricos en proteínas de calidad (como huevos, carnes magras, legumbres o yogur griego) y carbohidratos complejos (como avena, arroz, papa y pan integral) 🍳🥔🍞.
Comé varias veces al día y no te saltees comidas 🍽️. Sumá snacks nutritivos como frutos secos, batidos naturales o barritas energéticas 🥜🥤.
Combiná tu alimentación con un plan de entrenamiento de fuerza progresivo 💪. ¡Así lograrás un aumento de masa muscular equilibrado, sin acumular grasa en exceso! ⚖️✨</p>
        `;
        break;
      case "definir":
        mensaje = `
          <h3>✨Para definir</h3>
          <p>Si ya ganaste masa muscular y querés resaltar definición y marcar tu físico, lo clave es ajustar tu alimentación con inteligencia 🧠🍽️.
Reducí levemente los carbohidratos 🥖, mantené una buena dosis de proteínas de alta calidad 🍗🧀 y sumá grasas saludables como palta, aceite de oliva o frutos secos 🥑🌰.
Esto ayuda a preservar el músculo mientras disminuye el porcentaje de grasa corporal 🔥.
Comé en horarios regulares, hidratate bien 💧 y acompañá tu alimentación con entrenamiento de fuerza + cardio moderado 🏋️‍♀️🏃‍♂️.
💡 Recordá: Definir no es solo bajar de peso, ¡es optimizar tu composición corporal y sentirte increíble en el proceso! 💪🌟</p>
        `;
        break;
      case "mantenerse":
        mensaje = `
          <h3>🌿Para mantenerse saludable</h3>
          <p>Si tu meta es sentirte bien todos los días y cuidar tu bienestar general, lo ideal es seguir una alimentación balanceada, variada y sostenible 🍽️🌈.
Incorporá una buena mezcla de frutas 🍓, verduras 🥦, cereales integrales 🌾, proteínas magras 🍗 y grasas saludables 🥑, en porciones adecuadas.
No se trata de hacer dietas estrictas, sino de nutrir tu cuerpo de forma inteligente y consciente 🧠💚.
Sumá actividad física regular, buen descanso 😴 y una hidratación constante 💧.
✨ Tu energía, tu humor y tu salud lo van a agradecer cada día.</p>
        `;
        break;
      case "balanceada":
        mensaje = `
          <h3>🥗 Dieta balanceada</h3>
          <p>Una dieta balanceada significa comer con inteligencia y variedad 🍽️. Combina todos los grupos de alimentos en proporciones adecuadas para asegurar una nutrición completa y sostenida 🧘‍♂️💪.

Incluye proteínas magras como pollo o legumbres 🍗, carbohidratos complejos como arroz integral o avena 🍚, grasas saludables como palta o frutos secos 🥑, y por supuesto, muchas frutas y verduras de colores 🌈🥦🍓.

Además, no olvides los lácteos o sus reemplazos ricos en calcio 🧀.
✨ Comer equilibradamente mejora tu energía, concentración y bienestar general. ¡Tu cuerpo y mente te lo agradecerán!

</p>
        `;
        break;
      default:
        mensaje = `<p>Elige una opción válida.</p>`;
    }
    
    // Agregar un botón para volver a la lista de objetivos
    mensaje += `<button onclick="volverOpciones()">Volver</button>`;

    // Insertar la información en el área correspondiente y mostrarla
    const resultado = document.querySelector("#resultadoDieta");
    resultado.innerHTML = mensaje;
    resultado.style.display = "block";
  }

  // Función para volver a mostrar las tarjetas de opciones
  function volverOpciones() {
    document.querySelector("#resultadoDieta").style.display = "none";
    document.querySelector(".card-container").style.display = "flex";
  }


 
  document.addEventListener("DOMContentLoaded", () => {
    // Función de cálculo
    function calcularCalorias() {
      const genero = document.querySelector('input[name="genero"]:checked').value;
      const peso = parseFloat(document.getElementById("peso").value);
      const altura = parseFloat(document.getElementById("altura").value);
      const edad = parseInt(document.getElementById("edad").value);
      const actividad = parseFloat(document.getElementById("actividad").value);
      const objetivo = document.getElementById("objetivo").value;
  
      if (isNaN(peso) || isNaN(altura) || isNaN(edad) || peso <= 0 || altura <= 0 || edad <= 0) {
        document.getElementById("resultado").innerHTML = "<p style='color:red'>Por favor, ingresa valores válidos (mayores a 0).</p>";
        return;
      }
  
      let bmr;
      if (genero === "masculino") {
        bmr = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * edad);
      } else {
        bmr = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * edad);
      }
  
      const tdee = bmr * actividad;
      let caloriasFinales;
  
      switch (objetivo) {
        case "bajar":
          caloriasFinales = tdee - 500;
          break;
        case "subir":
          caloriasFinales = tdee + 500;
          break;
        case "definir":
          caloriasFinales = tdee - 300;
          break;
        default:
          caloriasFinales = tdee;
      }
  
      // Macronutrientes
      let proteinas, carbohidratos, grasas;
      switch (objetivo) {
        case "bajar":
          proteinas = peso * 2.2;
          carbohidratos = (caloriasFinales * 0.4) / 4;
          grasas = (caloriasFinales * 0.3) / 9;
          break;
        case "subir":
          proteinas = peso * 2.0;
          carbohidratos = (caloriasFinales * 0.5) / 4;
          grasas = (caloriasFinales * 0.25) / 9;
          break;
        case "definir":
          proteinas = peso * 2.5;
          carbohidratos = (caloriasFinales * 0.35) / 4;
          grasas = (caloriasFinales * 0.25) / 9;
          break;
        default:
          proteinas = peso * 1.8;
          carbohidratos = (caloriasFinales * 0.45) / 4;
          grasas = (caloriasFinales * 0.3) / 9;
      }
  
      // Mostrar resultados
      document.getElementById("resultado").innerHTML = `
        <p>Calorías diarias recomendadas: <strong>${Math.round(caloriasFinales)} kcal</strong></p>
        <p>Proteínas: <strong>${Math.round(proteinas)} g</strong></p>
        <p>Carbohidratos: <strong>${Math.round(carbohidratos)} g</strong></p>
        <p>Grasas: <strong>${Math.round(grasas)} g</strong></p>
      `;
  
      mostrarGrafico(proteinas, carbohidratos, grasas);
    }
  
    // Función para mostrar el gráfico
function mostrarGrafico(proteinas, carbohidratos, grasas) {
  const chartContainer = document.getElementById("chartContainer");
  chartContainer.style.display = "block";
  const ctx = document.getElementById("macrosChart").getContext("2d");

  if (window.macrosChart && typeof window.macrosChart.destroy === "function") {
    window.macrosChart.destroy();
  }

  const data = [proteinas, carbohidratos, grasas];
  const total = data.reduce((a, b) => a + b, 0);

  window.macrosChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Proteínas", "Carbohidratos", "Grasas"],
      datasets: [{
        data: data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",  // Rojo
          "rgba(54, 162, 235, 0.8)",  // Azul
          "rgba(255, 206, 86, 0.8)"   // Amarillo
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)"
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 1.66,
      layout: {
        padding: 0 // 🔥 Elimina el espacio interno
      },
      cutout: '60%', // 🔄 Tamaño del agujero interior de la dona
      animation: {
        duration: 1000,
        easing: 'easeOutQuart'
      },
      plugins: {
        legend: {
          position: "bottom"
        },
        datalabels: {
          color: "#000000",
          font: {
            weight: "bold",
            size: 14
          },
          formatter: (value) => {
            const porcentaje = ((value / total) * 100).toFixed(0);
            return `${Math.round(value)}g\n(${porcentaje}%)`;
          }
        }
      }
    },
    plugins: [ChartDataLabels]
  });
}


  
    // Evento de submit del formulario
    document.getElementById("calcForm").addEventListener("submit", function(e) {
      e.preventDefault();
      calcularCalorias();
    });
  
 // Botón compartir resultados
document.getElementById("shareBtn").addEventListener("click", function () {
  const resultados = document.getElementById("resultado").innerText;
  localStorage.setItem("resultadosCalorias", resultados);
  alert("Resultados guardados en tu dispositivo. ¡Comparte estos datos con quien quieras!");
});

// Botón descargar gráfico
document.getElementById("descargarGrafico").addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "grafico_macros.png";
  link.href = document.getElementById("macrosChart").toDataURL();
  link.click();
});
    


});

/// ===============================
// Rutinas Semanales con Tabla
// ===============================

const rutinasSemanales = {
    cardio: {
      principiante: {
        lunes: "Caminata ligera (30 min)",
        martes: "Descanso",
        miercoles: "Bicicleta estática (20 min)",
        jueves: "Descanso",
        viernes: "Correr a ritmo suave (20 min)",
        sabado: "Descanso",
        domingo: "Descanso"
      },
      intermedio: {
        lunes: "Correr (30 min)",
        martes: "Descanso",
        miercoles: "HIIT Cardio (20 min)",
        jueves: "Descanso",
        viernes: "Nadar (40 min)",
        sabado: "Descanso",
        domingo: "Descanso"
      },
      avanzado: {
        lunes: "Sprint (25 min)",
        martes: "HIIT Avanzado (30 min)",
        miercoles: "Ciclismo de montaña (45 min)",
        jueves: "Descanso",
        viernes: "HIIT con intervalos (30 min)",
        sabado: "Descanso",
        domingo: "Descanso"
      }
    },
    fuerza: {
      principiante: {
        lunes: "Flexiones (3x10), Sentadillas (3x15)",
        martes: "Descanso",
        miercoles: "Peso muerto (3x10), Plancha (3x30s)",
        jueves: "Descanso",
        viernes: "Zancadas (3x10), Fondos de tríceps (3x10)",
        sabado: "Descanso",
        domingo: "Descanso"
      },
      intermedio: {
        lunes: "Flexiones (4x12), Sentadillas (4x15)",
        martes: "Descanso",
        miercoles: "Peso muerto (4x12), Plancha (3x45s)",
        jueves: "Descanso",
        viernes: "Zancadas con peso (4x12), Fondos (4x12)",
        sabado: "Descanso",
        domingo: "Descanso"
      },
      avanzado: {
        lunes: "Flexiones con palmada (5x15), Sentadillas con barra (5x15)",
        martes: "Peso muerto (5x12), Burpees (4x10)",
        miercoles: "Zancadas con barra (5x12), Pull-ups (4x10)",
        jueves: "Descanso",
        viernes: "Plancha con peso (5x1min), Ab twist con peso (4x25)",
        sabado: "Descanso",
        domingo: "Descanso"
      }
    },
    flexibilidad: {
      principiante: {
        lunes: "Estiramiento de cuello (10 min)",
        martes: "Descanso",
        miercoles: "Estiramiento de espalda baja (15 min)",
        jueves: "Estiramiento de piernas (15 min)",
        viernes: "Yoga básico (20 min)",
        sabado: "Descanso",
        domingo: "Descanso"
      },
      intermedio: {
        lunes: "Yoga intermedio (25 min)",
        martes: "Estiramientos dinámicos (15 min)",
        miercoles: "Yoga intermedio (25 min)",
        jueves: "Estiramientos de caderas (15 min)",
        viernes: "Pilates básico (20 min)",
        sabado: "Descanso",
        domingo: "Descanso"
      },
      avanzado: {
        lunes: "Yoga avanzado (40 min)",
        martes: "Estiramientos intensivos (30 min)",
        miercoles: "Pilates avanzado (40 min)",
        jueves: "Flexibilidad activa (30 min)",
        viernes: "Movilidad articular (25 min)",
        sabado: "Descanso",
        domingo: "Descanso"
      }
    },
    resistencia: {
      principiante: {
        lunes: "Caminata rápida (30 min)",
        martes: "Descanso",
        miercoles: "Bicicleta estática (25 min)",
        jueves: "Descanso",
        viernes: "Circuito de cuerpo completo (20 min)",
        sabado: "Descanso",
        domingo: "Descanso"
      },
      intermedio: {
        lunes: "Running moderado (30 min)",
        martes: "Descanso",
        miercoles: "Bicicleta de montaña (35 min)",
        jueves: "Descanso",
        viernes: "Circuito de resistencia (30 min)",
        sabado: "Descanso",
        domingo: "Descanso"
      },
      avanzado: {
        lunes: "Running (45 min)",
        martes: "HIIT de resistencia (30 min)",
        miercoles: "Circuito avanzado (40 min)",
        jueves: "Descanso",
        viernes: "Running prolongado (60 min)",
        sabado: "Descanso",
        domingo: "Descanso"
      }
    },
    hiit: {
      principiante: {
        lunes: "HIIT bajo impacto (15 min)",
        martes: "Descanso",
        miercoles: "HIIT fullbody (20 min)",
        jueves: "Descanso",
        viernes: "HIIT funcional (15 min)",
        sabado: "Descanso",
        domingo: "Descanso"
      },
      intermedio: {
        lunes: "HIIT circuito (25 min)",
        martes: "HIIT tren inferior (20 min)",
        miercoles: "Descanso",
        jueves: "HIIT tren superior (20 min)",
        viernes: "HIIT fullbody (30 min)",
        sabado: "Descanso",
        domingo: "Descanso"
      },
      avanzado: {
        lunes: "HIIT con pesas (30 min)",
        martes: "HIIT intensivo (30 min)",
        miercoles: "HIIT fullbody (35 min)",
        jueves: "Descanso",
        viernes: "HIIT experto (40 min)",
        sabado: "Descanso",
        domingo: "Descanso"
      }
    }
  };
  
  function mostrarTablaRutina(tipo) {
    const nivel = document.getElementById("nivelExperiencia").value;
    const rutina = rutinasSemanales[tipo]?.[nivel] || {};
    const contenedorTabla = document.getElementById("tablaRutinaContenido");
    const titulo = document.getElementById("tituloTablaRutina");
    const tablaContainer = document.getElementById("tablaRutinaContainer");
    const tarjetas = document.getElementById("rutinaCards");
  
    const diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
  
    contenedorTabla.innerHTML = "";
    diasSemana.forEach(dia => {
      contenedorTabla.innerHTML += `
        <tr>
          <td style="text-transform: capitalize">${dia}</td>
          <td colspan="4">${rutina[dia] || "Descanso"}</td>
        </tr>
      `;
    });
  
    titulo.textContent = `Rutina de ${tipo.charAt(0).toUpperCase() + tipo.slice(1)} - Nivel ${nivel.charAt(0).toUpperCase() + nivel.slice(1)}`;
    tarjetas.style.display = "none";
    tablaContainer.style.display = "block";
  }
  
  function volverACartas() {
    document.getElementById("tablaRutinaContainer").style.display = "none";
    document.getElementById("rutinaCards").style.display = "flex";
  }
  
  function actualizarTodasLasRutinas() {
    const visible = document.getElementById("tablaRutinaContainer").style.display === "block";
    if (visible) {
      const titulo = document.getElementById("tituloTablaRutina").textContent.toLowerCase();
      if (titulo.includes("cardio")) mostrarTablaRutina("cardio");
      else if (titulo.includes("fuerza")) mostrarTablaRutina("fuerza");
      else if (titulo.includes("flexibilidad")) mostrarTablaRutina("flexibilidad");
      else if (titulo.includes("resistencia")) mostrarTablaRutina("resistencia");
      else if (titulo.includes("hiit")) mostrarTablaRutina("hiit");
    }
  }
  
  function descargarPDF(tipo) {
    alert(`(Opcional) Generar PDF para: ${tipo}`);
  }
  
  document.getElementById("descargarRutinaBtn").addEventListener("click", () => {
    const tabla = document.getElementById("tablaRutinaContainer");
  
    html2canvas(tabla).then(canvas => {
      const link = document.createElement("a");
      link.download = "rutina_semanal.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  });
  



  function mostrarBienestar(opcion) {
    let contenido = "";
  
    switch (opcion) {
      case "relajacion":
        contenido = `
          <h4>🧘‍♀️ Técnicas de Relajación</h4>
          <p>Incorpora respiración profunda, música suave o estiramientos suaves a tu rutina diaria. Estos hábitos ayudan a disminuir el estrés y promover un estado de calma mental.</p>
        `;
        break;
  
      case "mindfulness":
        contenido = `
          <h4>🧠 Prácticas de Mindfulness</h4>
          <p>Dedica al menos 10 minutos al día para meditar, respirar conscientemente o simplemente observar tu entorno. Estar presente te ayuda a reducir la ansiedad y mejorar el enfoque.</p>
        `;
        break;
  
      case "habitos":
        contenido = `
          <h4>❤️ Hábitos Saludables</h4>
          <p>Incorpora pequeños cambios positivos como tomar más agua, descansar bien y moverte regularmente. La constancia en tus hábitos diarios es clave para un bienestar duradero.</p>
        `;
        break;
  
      case "suenio":
        contenido = `
          <h4>🌙 Mejora tu Sueño</h4>
          <p>Establece una rutina nocturna relajante, evita pantallas antes de dormir y mantén un ambiente oscuro y fresco. Dormir bien es esencial para la recuperación mental y física.</p>
        `;
        break;
  
      case "estres":
        contenido = `
          <h4>💆‍♂️ Manejo del Estrés</h4>
          <p>Incluye actividades que disfrutes, como caminar, leer o hacer ejercicio. Organiza tus prioridades y tómate pausas. Reducir el estrés mejora tu salud emocional y física.</p>
        `;
        break;
  
      case "hidratacion":
        contenido = `
          <h4>💧 Hidratación</h4>
          <p>Beber suficiente agua a lo largo del día mejora tu concentración, digestión y energía. Lleva siempre una botella contigo y establece recordatorios si lo necesitas.</p>
        `;
        break;
  
      case "ejercicio":
        contenido = `
          <h4>🏃‍♀️ Ejercicio Físico</h4>
          <p>Muévete al menos 30 minutos al día. Puede ser caminar, bailar, practicar yoga o entrenar. El ejercicio fortalece tu cuerpo y libera endorfinas, ¡tu dosis natural de felicidad!</p>
        `;
        break;
  
      case "alimentacion":
        contenido = `
          <h4>🥗 Alimentación Balanceada</h4>
          <p>Incluye frutas, verduras, proteínas, granos enteros y grasas saludables en tu dieta. Comer bien es un acto de amor propio y la base de una buena salud.</p>
        `;
        break;
    }
  
    const resultado = document.getElementById("resultadoBienestar");
    resultado.innerHTML = `
      <button onclick="volverABienestar()" class="btn-volver">← Volver</button>
      ${contenido}
    `;
    resultado.classList.remove("oculto");
  
    // Oculta solo las tarjetas de bienestar
    document.querySelector(".bienestar-grid").style.display = "none";
  }
  
  
  function volverABienestar() {
    document.getElementById("resultadoBienestar").classList.add("oculto");
    document.querySelector(".bienestar-grid").style.display = "grid";
  }
  








  
function generarPlanBienestar() {
  const interes = document.getElementById("interes").value;
  const contenedor = document.getElementById("planBienestar");

  let plan = "";

  switch (interes) {
      case 'relajacion':
          plan = `
              <h4>🧘‍♂️ Plan de Relajación</h4>
              <p>• Comenzá y terminá tu día con ejercicios de respiración profunda 🌬️.</p>
              <p>• Sumá sesiones de <strong>yoga suave</strong> al menos 3 veces por semana 🧘.</p>
              <p>• Creá un ambiente tranquilo con música relajante o aromas naturales 🍃.</p>
          `;
          break;

      case 'mindfulness':
          plan = `
              <h4>🧠 Plan de Mindfulness</h4>
              <p>• Meditá 10 minutos cada mañana en silencio o usando una app 📿.</p>
              <p>• Durante el día, hacé pausas conscientes: observá tu respiración o lo que te rodea 🌇.</p>
              <p>• Practicá atención plena comiendo, caminando o duchándote 🚿.</p>
          `;
          break;

      case 'habitos':
          plan = `
              <h4>💡 Plan de Hábitos Saludables</h4>
              <p>• Aumentá el consumo de frutas, verduras y agua 🥦💧.</p>
              <p>• Creá una rutina de sueño, alimentación y movimiento 📅.</p>
              <p>• Establecé metas semanales pequeñas y alcanzables ✅.</p>
          `;
          break;

      case 'suenio':
          plan = `
              <h4>🌙 Plan para Mejorar el Sueño</h4>
              <p>• Acostate y despertate a la misma hora todos los días 🛏️.</p>
              <p>• Evitá pantallas 30 minutos antes de dormir 📵.</p>
              <p>• Hacé ejercicios suaves antes de acostarte como estiramientos o respiración profunda 😌.</p>
          `;
          break;

      case 'estres':
          plan = `
              <h4>🔥 Plan para Manejo del Estrés</h4>
              <p>• Realizá caminatas al aire libre o actividad física moderada 🚶‍♀️.</p>
              <p>• Usá técnicas como respiración consciente o journaling 📓.</p>
              <p>• Dedicá tiempo a tus hobbies y descansos sin culpa 🎨.</p>
          `;
          break;

      case 'autoestima':
          plan = `
              <h4>💖 Plan para Fortalecer la Autoestima</h4>
              <p>• Anotá 3 logros o cosas que valorás de vos cada día 📝.</p>
              <p>• Alejate de personas o entornos que te resten ✋.</p>
              <p>• Celebrá tus avances, por pequeños que sean 🎉.</p>
          `;
          break;

      case 'motivacion':
          plan = `
              <h4>🚀 Plan para Aumentar la Motivación</h4>
              <p>• Empezá con tareas pequeñas para activar el impulso inicial ⚡.</p>
              <p>• Dividí tus objetivos en pasos concretos y alcanzables 🎯.</p>
              <p>• Rodeate de mensajes, personas o música que te inspiren 🎧.</p>
          `;
          break;

      case 'conexionSocial':
          plan = `
              <h4>🤝 Plan para Fomentar la Conexión Social</h4>
              <p>• Hablá con alguien al menos una vez al día, aunque sea por mensaje 📲.</p>
              <p>• Participá en grupos, clubes o actividades que te interesen 📚.</p>
              <p>• Pedí ayuda cuando la necesites y ofrecela cuando puedas 💬.</p>
          `;
          break;

      default:
          plan = `<p>Seleccioná un área de interés para ver tu plan de bienestar personalizado 🌿</p>`;
  }

  contenedor.innerHTML = plan;
}


function mostrarResultadosTest() {
    // Obtener las respuestas del formulario
    const respuestas = {
        estres: document.querySelector('input[name="estresTest"]:checked')?.value,
        suenio: document.querySelector('input[name="suenioTest"]:checked')?.value,
        alimentacion: document.querySelector('input[name="alimentacionTest"]:checked')?.value,
        actividad: document.querySelector('input[name="actividadTest"]:checked')?.value,
        emociones: document.querySelector('input[name="emocionesTest"]:checked')?.value,
        satisfaccion: document.querySelector('input[name="satisfaccionTest"]:checked')?.value
    };

    // Validar que todas las respuestas estén seleccionadas
    if (Object.values(respuestas).includes(undefined)) {
        document.getElementById("testResultados").innerHTML = "Por favor, responde todas las preguntas.";
        return;
    }

    // Calcular el bienestar general
    let bienestar = 0;
    const recomendaciones = [];

    // Evaluar las respuestas y generar recomendaciones
    if (respuestas.estres === 'no') bienestar++;
    else recomendaciones.push("Te recomendamos practicar técnicas de relajación como meditación o respiración profunda para reducir el estrés.");

    if (respuestas.suenio === 'si') bienestar++;
    else recomendaciones.push("Intenta establecer una rutina de sueño regular, evitar pantallas antes de dormir y crear un ambiente relajante para mejorar la calidad de tu sueño.");

    if (respuestas.alimentacion === 'si') bienestar++;
    else recomendaciones.push("Considera consultar con un nutricionista para crear un plan de alimentación balanceada que cubra tus necesidades y objetivos.");

    if (respuestas.actividad === 'si') bienestar++;
    else recomendaciones.push("Incorpora ejercicio moderado en tu rutina diaria. Caminar, nadar o hacer yoga son opciones efectivas.");

    if (respuestas.emociones === 'si') bienestar++;
    else recomendaciones.push("Tómate tiempo para ti mismo, busca apoyo emocional cuando lo necesites y considera practicar actividades que fomenten el bienestar emocional como el journaling o terapia.");

    if (respuestas.satisfaccion === 'si') bienestar++;
    else recomendaciones.push("Reflexiona sobre lo que te gustaría cambiar en tu vida y establece pequeños objetivos alcanzables que te ayuden a sentirte más satisfecho.");

    // Mostrar los resultados generales y recomendaciones
    let resultadoTexto = "";
    if (bienestar === 6) {
        resultadoTexto = "¡Excelente! Tu bienestar es muy alto. Sigue cuidando de ti mismo.";
    } else if (bienestar >= 4) {
        resultadoTexto = "Estás en buen camino, pero hay algunos aspectos que podrías mejorar.";
    } else if (bienestar >= 2) {
        resultadoTexto = "Parece que podrías beneficiarte de hacer algunos cambios en tu vida para mejorar tu bienestar.";
    } else {
        resultadoTexto = "Te recomendamos que busques maneras de mejorar tu bienestar, especialmente en áreas clave.";
    }

    // Mostrar los resultados
    let recomendacionesTexto = "";
    if (recomendaciones.length > 0) {
        recomendacionesTexto = "<h4>Recomendaciones:</h4><ul>";
        recomendaciones.forEach(recomendacion => {
            recomendacionesTexto += `<li>${recomendacion}</li>`;
        });
        recomendacionesTexto += "</ul>";
    }

    document.getElementById("testResultados").innerHTML = `
        <p><strong>Resultados de tu test de bienestar:</strong></p>
        <p>${resultadoTexto}</p>
        ${recomendacionesTexto}
    `;
    
    // Llamar a la función para actualizar la barra de progreso al final de los resultados
    updateProgress();
}

// Función para actualizar la barra de progreso
function updateProgress() {
    // Inicializamos el progreso en 0
    let progreso = 0;
    const totalPreguntas = 6;  // Total de preguntas (en tu caso 6)
    let respuestasPositivas = 0;

    // Evaluamos las respuestas y aumentamos el progreso si son positivas
    if (document.querySelector('input[name="estresTest"]:checked')?.value === 'no') {
        respuestasPositivas++; // No hay estrés, cuenta como positiva
    }

    if (document.querySelector('input[name="suenioTest"]:checked')?.value === 'si') {
        respuestasPositivas++; // Buen sueño, cuenta como positiva
    }

    if (document.querySelector('input[name="alimentacionTest"]:checked')?.value === 'si') {
        respuestasPositivas++; // Alimentación balanceada, cuenta como positiva
    }

    if (document.querySelector('input[name="actividadTest"]:checked')?.value === 'si') {
        respuestasPositivas++; // Ejercicio regular, cuenta como positiva
    }

    if (document.querySelector('input[name="emocionesTest"]:checked')?.value === 'si') {
        respuestasPositivas++; // Bienestar emocional, cuenta como positiva
    }

    if (document.querySelector('input[name="satisfaccionTest"]:checked')?.value === 'si') {
        respuestasPositivas++; // Satisfacción con la vida, cuenta como positiva
    }

    // Calcular el progreso basado en las respuestas positivas
    progreso = (respuestasPositivas / totalPreguntas) * 100;

    // Limitar el progreso máximo al 100%
    progreso = Math.min(progreso, 100);

    // Actualizar el ancho de la barra de progreso
    document.getElementById('progress').style.width = progreso + '%';
}














const recetas = {
  desayuno: [
    {
      nombre: "Avena con Frutas",
      descripcion: "Avena cocida con frutas frescas y miel",
      imagen: "imagenes/avena-con-frutas.png"
    },
    {
      nombre: "Tostadas de Aguacate",
      descripcion: "Tostadas integrales con aguacate y tomate",
      imagen: "imagenes/tostadas-aguacate.png"
    }
  ],
  almuerzo: [
    {
      nombre: "Ensalada de Pollo",
      descripcion: "Ensalada fresca con pechuga de pollo y aderezo",
      imagen: "imagenes/ensalada-pollo.png"
    },
    {
      nombre: "Sopa de Lentejas",
      descripcion: "Sopa casera de lentejas con verduras",
      imagen: "imagenes/sopa-lentejas.png"
    }
  ],
  cena: [
    {
      nombre: "Pasta con Pesto",
      descripcion: "Pasta integral con salsa pesto y tomates cherry",
      imagen: "imagenes/pasta-pesto.png"
    },
    {
      nombre: "Salmón al Horno",
      descripcion: "Salmón al horno con papas y espárragos",
      imagen: "imagenes/salmon-horno.png"
    }
  ]
};

function mostrarRecetas(tipo) {
  const container = document.getElementById("recetasContainer");
  container.innerHTML = ""; // Limpiar las recetas anteriores

  // Ocultar cualquier otra sección si existiera
  document.querySelectorAll(".recetas").forEach(el => el.classList.add("oculto"));

  recetas[tipo].forEach(receta => {
    const recetaDiv = document.createElement("div");
    recetaDiv.classList.add("receta");

    recetaDiv.innerHTML = `
      <img src="${receta.imagen}" alt="${receta.nombre}" onerror="this.src='imagenes/default.png'">
      <h3>${receta.nombre}</h3>
      <p>${receta.descripcion}</p>
    `;

    container.appendChild(recetaDiv);
  });

  // ✅ YA NO USAMOS getElementById(`${tipo}Recetas`) porque no existe en tu HTML
}







// Detecta el scroll y añade/quita la clase 'scrolled' al elemento <nav>
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  

  // Ejemplo de la función que crea una tarjeta
function crearTarjetaReceta(receta) {
    const recetaDiv = document.createElement('div');
    recetaDiv.classList.add('card'); // en lugar de 'receta'
    
    recetaDiv.innerHTML = `
      <img src="${receta.imagen}" alt="${receta.nombre}">
      <h4>${receta.nombre}</h4>
      <p>${receta.descripcion}</p>
    `;
  
    return recetaDiv;
  }
  

  const nutricionistas = {
    montevideo: [
      {
        nombre: "Lic. Juan Pérez",
        contacto: "011111111",
        mail: "juan.perez@email.com",
        dias: "Lunes a Viernes",
        imagen: "imagenes/default.png"
      },
      {
        nombre: "Dra. Ana Gómez",
        contacto: "011111111",
        mail: "ana.gomez@email.com",
        dias: "Martes y Jueves",
        imagen: "imagenes/default.png"
      }
    ]
    // agrega más departamentos
  };
  
  function mostrarNutricionistas() {
    const departamento = document.getElementById("departamentoNutricion").value;
    const infoContainer = document.getElementById("nutricionistasInfo");
    const lista = document.getElementById("listaNutricionistas");
  
    lista.innerHTML = "";
    infoContainer.style.display = "block";
  
    if (nutricionistas[departamento] && nutricionistas[departamento].length > 0) {
      nutricionistas[departamento].forEach(n => {
        const card = document.createElement("div");
        card.classList.add("card-nutricionista");
  
        card.innerHTML = `
  <img src="${n.imagen}" alt="${n.nombre}">
  <h4>${n.nombre}</h4>
  <p>📞 <strong>Teléfono:</strong> <a href="tel:${n.contacto}" class="info">${n.contacto}</a></p>
      <p>📧 <strong>Correo:</strong> <a href="mailto:${n.maill}" class="info">${n.mail}</a></p>
      <p>📅 <strong>Días disponibles:</strong> <span class="info">${n.dias}</span></p>
`;
  
        lista.appendChild(card);
      });
    } else {
      lista.innerHTML = "<p>No hay nutricionistas disponibles en este departamento.</p>";
    }
  }



  function mostrarPersonalTrainners() {
    const departamento = document.getElementById("departamentoTrainers").value;
    const trainersInfo = document.getElementById("trainersInfo");
    const listaTrainers = document.getElementById("listaTrainers");
  
    // Mostrar el contenedor
    trainersInfo.style.display = "block";
    listaTrainers.innerHTML = ""; // Limpiar antes de renderizar
  
    // Base de datos de trainers
    const trainers = {
      montevideo: [
        {
          nombre: "Prof. Juan Martínez",
          especialidad: "Fuerza & Resistencia",
          telefono: "011111111",
          email: "juan@trainer.com",
          dias: "Lunes, Miércoles y Viernes",
          imagen: "imagenes/default.png"
        },
        {
          nombre: "Prof. Carla Silva",
          especialidad: "HIIT & Funcional",
          telefono: "011111111",
          email: "carla@trainer.com",
          dias: "Martes y Jueves",
          imagen: "imagenes/default.png"
        }
      ],
      canelones: [
        {
          nombre: "Prof. Leo Rodríguez",
          especialidad: "Cardio & Core",
          telefono: "011111111",
          email: "leo@trainer.com",
          dias: "Lunes a Viernes",
          imagen: "imagenes/default.png"
        }
      ],
      // Otros departamentos vacíos por ahora...
      maldonado: [],
      artigas: [],
      rocha: [],
      salto: [],
      colonia: [],
      tacuarembo: [],
      cerro_largo: [],
      durazno: [],
      flores: [],
      florida: [],
      lavalleja: [],
      soriano: [],
      rio_negro: [],
      payacu: [],
      san_jose: [],
      treinta_y_tres: []
    };
  
    const entrenadores = trainers[departamento];
  
    if (entrenadores && entrenadores.length > 0) {
      entrenadores.forEach(trainer => {
        const div = document.createElement("div");
        div.classList.add("card-trainer");
  
        div.innerHTML = `
          <img src="${trainer.imagen || 'imagenes/default-trainer.png'}" alt="${trainer.nombre}">
          <h4>${trainer.nombre}</h4>
         <p>💪 <strong>Especialidad:</strong> <span class="info">Fuerza & Resistencia</span></p>
<p>📞 <strong>Teléfono:</strong> <a href="tel:091234567" class="info">091234567</a></p>
<p>📧 <strong>Correo:</strong> <a href="mailto:juan@trainer.com" class="info">juan@trainer.com</a></p>
<p>📅 <strong>Días disponibles:</strong> <span class="info">Lunes, Miércoles y Viernes</span></p>
        `;
  
        listaTrainers.appendChild(div);
      });
    } else {
      const mensaje = document.createElement("p");
      mensaje.textContent = "Actualmente no hay personal trainers disponibles en este departamento.";
      listaTrainers.appendChild(mensaje);
    }
  }
  



  function mostrarPsicologos() {
    const departamento = document.getElementById("departamentoPsicologos").value;
    const contenedor = document.getElementById("psicologosInfo");
    const lista = document.getElementById("listaPsicologos");
  
    const psicologos = {
      montevideo: [
        {
          nombre: "Lic. Mariana López",
          telefono: "01111111",
          correo: "mariana@psico.com",
          dias: "Lunes y Miércoles",
          imagen: "imagenes/psico1.jpg"
        },
        {
          nombre: "Dr. Pablo Torres",
          telefono: "0111111111",
          correo: "pablo@psico.com",
          dias: "Martes y Jueves",
          imagen: "imagenes/psico2.jpg"
        }
      ],
      canelones: [
        {
          nombre: "Lic. Lucía Ferreira",
          telefono: "011111111",
          correo: "lucia@psico.com",
          dias: "Viernes",
          imagen: "imagenes/psico3.jpg"
        }
      ]
      // Agregá más departamentos si querés
    };
  
    lista.innerHTML = "";
    contenedor.style.display = "block";
  
    if (psicologos[departamento]) {
      psicologos[departamento].forEach(p => {
        const card = document.createElement("div");
        card.classList.add("card-trainer");
  
        card.innerHTML = `
          <img src="${p.imagen}" alt="${p.nombre}" onerror="this.src='imagenes/default.png'">
          <h4>${p.nombre}</h4>
          <p>📞 <strong>Teléfono:</strong> <a href="tel:${p.telefono}" class="info">${p.telefono}</a></p>
          <p>📧 <strong>Correo:</strong> <a href="mailto:${p.correo}" class="info">${p.correo}</a></p>
          <p>📅 <strong>Días disponibles:</strong> <span class="info">${p.dias}</span></p>
        `;
  
        lista.appendChild(card);
      });
    } else {
      lista.innerHTML = "<p>No hay psicólogos registrados en este departamento por el momento.</p>";
    }
  }
  
  















  
