# Tarea 3 — Estadísticas: contador y barra de progreso

**Proyecto:** Lista de Tareas  
**Clase:** JavaScript Intermedio  
**Nivel:** Intermedio

---

## Objetivo de esta tarea

Agregar estadísticas visuales a la app:

- **Contador de tareas totales**
- **Contador de tareas completadas**
- **Porcentaje de progreso**
- **Barra de progreso visual**

Así el usuario puede ver de un vistazo cuánto ha avanzado.

---

## Paso 1 — Actualizar el HTML

En `index.html`, después del título `<h1>`, agregar:

```html
<div class="stats-container">
  <div class="stat">
    <span class="stat-label">Total</span>
    <span class="stat-value" id="totalTareas">0</span>
  </div>

  <div class="stat">
    <span class="stat-label">Completadas</span>
    <span class="stat-value" id="completadasTareas">0</span>
  </div>

  <div class="stat">
    <span class="stat-label">Progreso</span>
    <span class="stat-value" id="porcentajeTareas">0%</span>
  </div>
</div>

<div class="progress-bar-container">
  <div class="progress-bar-fill" id="barraProgreso"></div>
</div>
```

---

## Paso 2 — Agregar estilos CSS

En `style.css`, agregar al final:

```css
/* ESTADÍSTICAS */
.stats-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 20px;
  margin-top: 20px;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  gap: 6px;
}

.stat-label {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.stat-value {
  font-size: 24px;
  font-weight: 700;
  background: linear-gradient(90deg, #00f7ff, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}

/* BARRA DE PROGRESO */
.progress-bar-container {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #00f7ff, #8b5cf6);
  border-radius: 10px;
  width: 0%;
  transition: width 0.3s ease;
  box-shadow: 0 0 10px #00f7ff70;
}
```

---

## Paso 3 — Crear función de estadísticas

En `script.js`, después de `renderizarTareas()`, agregar:

```js
function actualizarEstadisticas() {
  const total = tareas.length
  const completadas = tareas.filter(t => t.completada).length
  const porcentaje = total === 0 ? 0 : Math.round((completadas / total) * 100)

  // Actualizar números
  document.getElementById('totalTareas').textContent = total
  document.getElementById('completadasTareas').textContent = completadas
  document.getElementById('porcentajeTareas').textContent = porcentaje + '%'

  // Actualizar barra de progreso
  document.getElementById('barraProgreso').style.width = porcentaje + '%'
}
```

---

## Paso 4 — Llamar a actualizar estadísticas

Modificar `renderizarTareas()` para que al final llame a `actualizarEstadisticas()`:

```js
function renderizarTareas() {
  let listaTareas = document.getElementById("listaTareas");
  listaTareas.innerHTML = "";

  tareas.forEach(function(tarea) {
    // ... código anterior ...
  });

  // Agregar esta línea al final
  actualizarEstadisticas()
}
```

También llamar a `actualizarEstadisticas()` en la función `agregarTarea()`:

```js
function agregarTarea() {
  // ... código anterior ...
  renderizarTareas() // Esto ya llama a actualizarEstadisticas()
}
```

Y al cargar:

```js
cargarTareas()
renderizarTareas() // Esto renderiza y actualiza estadísticas
```

---

## Paso 5 — Verificar en el navegador

1. Abre el proyecto
2. Agrega algunas tareas
3. Verifica que el contador se actualice
4. Marca algunas como completadas
5. La barra de progreso debería llenar según el porcentaje

---

## Explicación de la lógica

```js
const total = tareas.length
// Cuenta cuántas tareas hay en total

const completadas = tareas.filter(t => t.completada).length
// Filtra solo las completadas y cuenta

const porcentaje = (completadas / total) * 100
// Si hay 2 completadas de 5, es 2/5 * 100 = 40%

Math.round(porcentaje)
// Redondea a número entero (40 en vez de 40.2)
```

---

## Conceptos aprendidos

| Concepto | ¿Qué hace? |
|----------|-----------|
| `.filter()` | Crea un nuevo array solo con elementos que cumplen |
| `.length` | Cuenta cuántos elementos hay en un array |
| `Math.round()` | Redondea al número entero más cercano |
| Lógica matemática | Calcular porcentaje |
| `style.width` | Cambiar ancho de elemento dinámicamente |
| `grid-template-columns` | Crear grid de 3 columnas iguales |

---

## Desafío extra (opcional)

1. Cambiar el color de la barra según el progreso:
   - Rojo si está < 25%
   - Naranja si está < 50%
   - Amarillo si está < 75%
   - Verde si está >= 75%

2. Mostrar un mensaje diferente cuando todas están completadas: "¡Felicitaciones! 🎉"

3. Agregar animación cuando se completa una tarea (hacer que la barra "salte").

> **Pista para punto 1**: Podés usar `if/else` para cambiar la clase CSS de la barra:
> ```js
> if (porcentaje >= 75) {
>   barraProgreso.classList.add('completa')
> }
> ```
