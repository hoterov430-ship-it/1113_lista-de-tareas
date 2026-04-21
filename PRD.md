# To-Do List Team

---

## Objetivo del proyecto
Desarrollar una aplicación web que permita gestionar tareas con almacenamiento local, implementando trabajo en equipo y división de responsabilidades.

---

## Equipo y roles

- Camilo Vega → HTML (estructura de la interfaz)
- Harold Otero → CSS (diseño visual)
- Laura Guerrero → JavaScript básico (agregar y eliminar tareas)
- Valeria Vargas → JavaScript avanzado (completar tareas y almacenamiento)

---

## Flujo de funcionamiento (cómo funciona la app)

1. El usuario escribe una tarea en el input
2. Presiona "Agregar" o Enter
3. La tarea se muestra en pantalla
4. Puede:
   - Marcarla como completada (clic)
   - Eliminarla (botón X)
5. Las tareas se guardan automáticamente
6. Al recargar la página, las tareas siguen ahí

---

## Lógica del sistema

### Estructura de datos
Cada tarea se guarda como objeto:

```js
{
  text: "Hacer tarea",
  completed: false
}
