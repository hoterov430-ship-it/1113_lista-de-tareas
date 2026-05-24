let tareas = [];

// CARGAR TAREAS AL ABRIR
window.onload = function () {
  let tareasGuardadas = localStorage.getItem("tareas");

  if (tareasGuardadas) {
    tareas = JSON.parse(tareasGuardadas);
    mostrarTareas();
  }
};

// AGREGAR TAREA
function agregarTarea() {
  let input = document.getElementById("tareaInput");
  let texto = input.value.trim();

  if (texto === "") return;

  let nuevaTarea = {
    texto: texto,
    completada: false
  };

  tareas.push(nuevaTarea);

  guardarTareas();
  mostrarTareas();

  input.value = "";
}

// MOSTRAR TAREAS
function mostrarTareas(filtro = "todas") {

  let lista = document.getElementById("listaTareas");

  lista.innerHTML = "";

  let tareasFiltradas = tareas;

  if (filtro === "pendientes") {
    tareasFiltradas = tareas.filter(t => !t.completada);
  }

  if (filtro === "completadas") {
    tareasFiltradas = tareas.filter(t => t.completada);
  }

  tareasFiltradas.forEach((tarea, index) => {

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = tarea.texto;

    if (tarea.completada) {
      span.classList.add("completada");
    }

    // COMPLETAR
    span.onclick = function () {

      tarea.completada = !tarea.completada;

      guardarTareas();
      mostrarTareas(filtro);
    };

    // ELIMINAR
    let botonEliminar = document.createElement("button");

    botonEliminar.textContent = "X";

    botonEliminar.classList.add("eliminar");

    botonEliminar.onclick = function () {

      tareas.splice(index, 1);

      guardarTareas();
      mostrarTareas(filtro);
    };

    li.appendChild(span);
    li.appendChild(botonEliminar);

    lista.appendChild(li);
  });

  actualizarContador();
}

// GUARDAR EN LOCALSTORAGE
function guardarTareas() {

  localStorage.setItem("tareas", JSON.stringify(tareas));
}

// CONTADOR
function actualizarContador() {

  let completadas = tareas.filter(t => t.completada).length;

  let total = tareas.length;

  document.getElementById("contadorTexto").textContent =
    `${completadas} completadas de ${total} tareas`;
}

// FILTRAR
function filtrarTareas(tipo) {

  mostrarTareas(tipo);
}

// ENTER
let input = document.getElementById("tareaInput");

input.addEventListener("keypress", function(event) {

  if (event.key === "Enter") {

    agregarTarea();
  }
});