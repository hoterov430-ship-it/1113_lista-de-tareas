# Tarea 4 — Filtros: Todas, Pendientes, Completadas

**Proyecto:** Lista de Tareas  
**Clase:** JavaScript Intermedio  
**Nivel:** Intermedio

---

## Objetivo de esta tarea

Agregar botones para filtrar la lista:

- **Todas** - mostrar todas las tareas
- **Pendientes** - mostrar solo las no completadas
- **Completadas** - mostrar solo las completadas

Sin eliminar las tareas, solo ocultarlas según el filtro.

---

## Por qué es importante

Muchas apps de tareas funcionan así (Todoist, Microsoft To Do, etc.). Permite al usuario enfocarse en lo que tiene que hacer ahora.

---

## Paso 1 — Actualizar el HTML

En `index.html`, después de la barra de progreso, agregar:

```html
<div class="filtros-container">
  <button class="filtro-btn activo" onclick="filtrarTareas('todas')">
    Todas
  </button>
  <button class="filtro-btn" onclick="filtrarTareas('pendientes')">
    Pendientes
  </button>
  <button class="filtro-btn" onclick="filtrarTareas('completadas')">
    Completadas
  </button>
</div>
```

---

## Paso 2 — Agregar estilos CSS

En `style.css`, agregar al final:

```css
/* FILTROS */
.filtros-container {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: center;
}

.filtro-btn {
  padding: 10px 18px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.05);
  color: white;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 600;
  font-size: 14px;
}

.filtro-btn:hover {
  border-color: rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.filtro-btn.activo {
  background: linear-gradient(135deg, #00f7ff, #8b5cf6);
  border-color: transparent;
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
}

.tarea-oculta {
  display: none;
}
```

---

## Paso 3 — Crear variable para el filtro actual

En `script.js`, al inicio (después de `let tareas = []`), agregar:

```js
let filtroActual = 'todas'
```

---

## Paso 4 — Modificar renderizarTareas()

Cambiar la función para que considere el filtro:

```js
function renderizarTareas() {
  let listaTareas = document.getElementById("listaTareas");
  listaTareas.innerHTML = "";

  tareas.forEach(function(tarea) {
    // Decidir si mostrar esta tarea según el filtro
    let debeVerla = false
    
    if (filtroActual === 'todas') {
      debeVerla = true
    } else if (filtroActual === 'pendientes' && !tarea.completada) {
      debeVerla = true
    } else if (filtroActual === 'completadas' && tarea.completada) {
      debeVerla = true
    }

    // Si no debe verse, saltar
    if (!debeVerla) return

    // ... resto del código anterior para crear li, span, etc ...
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

  actualizarEstadisticas()
}
```

---

## Paso 5 — Crear función de filtrado

Agregar esta función después de `actualizarEstadisticas()`:

```js
function filtrarTareas(tipo) {
  filtroActual = tipo

  // Actualizar botones activos
  const botones = document.querySelectorAll('.filtro-btn')
  botones.forEach(function(btn) {
    btn.classList.remove('activo')
  })
  
  // Marcar el botón clickeado como activo
  event.target.classList.add('activo')

  // Renderizar con el nuevo filtro
  renderizarTareas()
}
```

---

## Paso 6 — Verificar en el navegador

1. Agrega varias tareas
2. Marca algunas como completadas
3. Haz clic en los botones:
   - **Todas** - ve todas las tareas
   - **Pendientes** - solo las no completadas
   - **Completadas** - solo las marcadas con tachado
4. Los datos siguen guardados en `localStorage`

---

## Cómo funciona el filtro

```js
if (filtroActual === 'todas') {
  debeVerla = true  // Ver todos
}

else if (filtroActual === 'pendientes' && !tarea.completada) {
  debeVerla = true  // Ver solo si NO está completada
}

else if (filtroActual === 'completadas' && tarea.completada) {
  debeVerla = true  // Ver solo si SÍ está completada
}

if (!debeVerla) return  // Si no debe verse, skipear este forEach
```

---

## Código completo referencia de script.js

Aquí está cómo debería verse todo junto:

```js
const CLAVE_TAREAS = 'lista_tareas'
let tareas = []
let filtroActual = 'todas'

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
    // FILTRO
    let debeVerla = false
    
    if (filtroActual === 'todas') {
      debeVerla = true
    } else if (filtroActual === 'pendientes' && !tarea.completada) {
      debeVerla = true
    } else if (filtroActual === 'completadas' && tarea.completada) {
      debeVerla = true
    }

    if (!debeVerla) return

    // CREAR ELEMENTO
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

  actualizarEstadisticas()
}

function actualizarEstadisticas() {
  const total = tareas.length
  const completadas = tareas.filter(t => t.completada).length
  const porcentaje = total === 0 ? 0 : Math.round((completadas / total) * 100)

  document.getElementById('totalTareas').textContent = total
  document.getElementById('completadasTareas').textContent = completadas
  document.getElementById('porcentajeTareas').textContent = porcentaje + '%'
  document.getElementById('barraProgreso').style.width = porcentaje + '%'
}

function filtrarTareas(tipo) {
  filtroActual = tipo

  const botones = document.querySelectorAll('.filtro-btn')
  botones.forEach(function(btn) {
    btn.classList.remove('activo')
  })
  
  event.target.classList.add('activo')
  renderizarTareas()
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

## Conceptos aprendidos

| Concepto | ¿Qué hace? |
|----------|-----------|
| `return` en forEach | Salta al siguiente elemento sin ejecutar el resto |
| Operador `&&` (AND) | Ambas condiciones deben ser verdaderas |
| Operador `!` (NOT) | Invierte un booleano (true → false) |
| `event.target` | El elemento que generó el evento |
| `.querySelectorAll()` | Selecciona múltiples elementos |
| Estado de filtro | Variable que guarda el filtro actualmente seleccionado |

---

## Desafío extra (opcional)

1. Agregar un botón "Mostrar todo" que reinicie a "Todas" automaticamente.

2. Cuando filtra por "Completadas" y no hay ninguna, mostrar un mensaje: "No hay tareas completadas aún."

3. Cambiar el icono del botón según el filtro (ej: 👁️ para "Todas", ✓ para "Completadas").

4. Agregar animación al cambiar filtro (fade in/out).

> **Pista para punto 2**: Podés agregar después de `listaTareas.innerHTML = ""` una verificación de si hay elementos:
> ```js
> if (listaTareas.children.length === 0) {
>   // Mostrar mensaje de "No hay tareas"
> }
> ```
