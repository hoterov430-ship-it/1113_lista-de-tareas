# Tarea 2 — Guardar tareas con localStorage

**Proyecto:** Lista de Tareas  
**Clase:** JavaScript Intermedio  
**Nivel:** Principiante - Intermedio

---

## Objetivo de esta tarea

Hacer que las tareas se guarden en `localStorage`, para que cuando el usuario recargue la página, sus tareas sigan ahí.

**Ahora:** Si recargas la página, las tareas desaparecen.  
**Después:** Las tareas se guardan automáticamente.

---

## ¿Por qué es importante?

`localStorage` es como una "memoria" del navegador. Los datos no desaparecen cuando cierras la pestaña. Esto es lo que usan aplicaciones como Gmail, Todoist, etc. para guardar tus datos sin necesidad de una base de datos.

---

## Paso 1 — Entender localStorage

`localStorage` guarda datos en pares clave-valor, como un diccionario en Python:

```js
// Guardar
localStorage.setItem('miDato', 'valor')

// Leer
const dato = localStorage.getItem('miDato')
console.log(dato) // "valor"

// Eliminar
localStorage.removeItem('miDato')

// Limpiar todo
localStorage.clear()
```

Para guardar múltiples tareas (un array), necesitamos convertirlas a texto con `JSON.stringify()` y de vuelta a array con `JSON.parse()`:

```js
const tareas = [
  { texto: 'Hacer tarea', completada: false },
  { texto: 'Limpiar cuarto', completada: true }
]

// Guardar
localStorage.setItem('misTareas', JSON.stringify(tareas))

// Leer
const tareasGuardadas = JSON.parse(localStorage.getItem('misTareas'))
```

---

## Paso 2 — Crear una estructura de datos mejorada

Actualmente, el script.js crea elementos `<li>` directo. Vamos a cambiar a guardar las tareas como objetos con más información.

En `script.js`, al inicio, agregar:

```js
const CLAVE_TAREAS = 'lista_tareas'

// Array para guardar las tareas en memoria
let tareas = []

// Cargar tareas guardadas al iniciar
function cargarTareas() {
  const tareasGuardadas = localStorage.getItem(CLAVE_TAREAS)
  if (tareasGuardadas) {
    tareas = JSON.parse(tareasGuardadas)
  }
}

// Guardar tareas en localStorage
function guardarTareas() {
  localStorage.setItem(CLAVE_TAREAS, JSON.stringify(tareas))
}

// Llamar al cargar la página
cargarTareas()
```

---

## Paso 3 — Modificar la función agregarTarea()

Reemplaza la función actual por:

```js
function agregarTarea() {
  let input = document.getElementById("tareaInput");
  let texto = input.value.trim();

  if (texto === "") return;

  // Crear objeto tarea
  const tarea = {
    id: Date.now(), // ID único basado en timestamp
    texto: texto,
    completada: false
  }

  // Agregar al array
  tareas.push(tarea)

  // Guardar en localStorage
  guardarTareas()

  // Renderizar la lista
  renderizarTareas()

  // Limpiar input
  input.value = ""
  input.focus()
}
```

---

## Paso 4 — Crear función para renderizar tareas

Esta función crea todos los elementos HTML a partir del array `tareas`:

```js
function renderizarTareas() {
  let listaTareas = document.getElementById("listaTareas");
  listaTareas.innerHTML = ""; // Limpiar lista

  tareas.forEach(function(tarea) {
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = tarea.texto;

    // Si está completada, agregar clase
    if (tarea.completada) {
      span.classList.add("completada");
    }

    // Al hacer clic, marcar como completada
    span.onclick = function() {
      tarea.completada = !tarea.completada
      guardarTareas()
      renderizarTareas()
    };

    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "X";
    botonEliminar.classList.add("eliminar");

    // Al hacer clic, eliminar
    botonEliminar.onclick = function() {
      tareas = tareas.filter(t => t.id !== tarea.id)
      guardarTareas()
      renderizarTareas()
    };

    li.appendChild(span);
    li.appendChild(botonEliminar);
    listaTareas.appendChild(li);
  });
}
```

---

## Paso 5 — Renderizar al cargar la página

Después de `cargarTareas()`, llama a:

```js
// Cargar y mostrar tareas al iniciar
cargarTareas()
renderizarTareas()
```

---

## Paso 6 — Actualizar el event listener de Enter

El código del Enter ya está, pero asegurate que esté después de las definiciones:

```js
// ENTER
let input = document.getElementById("tareaInput");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    agregarTarea();
  }
});
```

---

## Código final de script.js

Aquí está cómo debería verse completo:

```js
const CLAVE_TAREAS = 'lista_tareas'
let tareas = []

function cargarTareas() {
  const tareasGuardadas = localStorage.getItem(CLAVE_TAREAS)
  if (tareasGuardadas) {
    tareas = JSON.parse(tareasGuardadas)
  }
}

function guardarTareas() {
  localStorage.setItem(CLAVE_TAREAS, JSON.stringify(tareas))
}

function renderizarTareas() {
  let listaTareas = document.getElementById("listaTareas");
  listaTareas.innerHTML = "";

  tareas.forEach(function(tarea) {
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = tarea.texto;

    if (tarea.completada) {
      span.classList.add("completada");
    }

    span.onclick = function() {
      tarea.completada = !tarea.completada
      guardarTareas()
      renderizarTareas()
    };

    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "X";
    botonEliminar.classList.add("eliminar");

    botonEliminar.onclick = function() {
      tareas = tareas.filter(t => t.id !== tarea.id)
      guardarTareas()
      renderizarTareas()
    };

    li.appendChild(span);
    li.appendChild(botonEliminar);
    listaTareas.appendChild(li);
  });
}

function agregarTarea() {
  let input = document.getElementById("tareaInput");
  let texto = input.value.trim();

  if (texto === "") return;

  const tarea = {
    id: Date.now(),
    texto: texto,
    completada: false
  }

  tareas.push(tarea)
  guardarTareas()
  renderizarTareas()

  input.value = ""
  input.focus()
}

cargarTareas()
renderizarTareas()

let input = document.getElementById("tareaInput");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    agregarTarea();
  }
});
```

---

## Cómo probar

1. Abre el proyecto en el navegador
2. Agrega algunas tareas
3. Abre DevTools (F12) → Application → Local Storage
4. Busca `lista_tareas` — deberías ver un JSON con todas tus tareas
5. Recarga la página (Ctrl+R)
6. Las tareas deberían estar ahí aún

---

## Conceptos aprendidos

| Concepto | ¿Qué hace? |
|----------|-----------|
| `localStorage.setItem()` | Guarda datos en el navegador |
| `localStorage.getItem()` | Lee datos guardados |
| `JSON.stringify()` | Convierte array/objeto a texto |
| `JSON.parse()` | Convierte texto a array/objeto |
| `.filter()` | Crea un nuevo array sin los elementos que no cumplen |
| `Date.now()` | Crea un ID único basado en timestamp |
| `.trim()` | Elimina espacios al inicio y final |

---

## Desafío extra (opcional)

1. Agregar un botón para limpiar todas las tareas con una confirmación (`confirm()`).
2. Mostrar cuántas tareas hay en total (contador).
3. Que el foco vuelva al input después de agregar una tarea (ya está con `.focus()`).

> **Pista para punto 1**: Podés usar `tareas = []` y luego `guardarTareas()` y `renderizarTareas()`
