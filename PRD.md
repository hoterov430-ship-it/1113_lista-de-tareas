# PRD - Lista de Tareas Basica

## 1. Nombre del proyecto
Lista de Tareas Basica con JavaScript

## 2. Proposito
Construir una aplicacion web sencilla para que los alumnos practiquen los fundamentos de JavaScript manipulando elementos del DOM.

Este proyecto no busca resolver un problema complejo. Su objetivo principal es servir como ejercicio guiado para aprender:

- Capturar datos desde un `input`
- Responder a eventos con botones y clics
- Crear elementos HTML desde JavaScript
- Agregar elementos al DOM
- Eliminar elementos del DOM
- Cambiar clases CSS desde JavaScript
- Organizar logica basica en funciones

## 3. Usuario objetivo
Estudiantes que estan empezando a trabajar con:

- HTML
- CSS
- JavaScript basico

## 4. Problema que se quiere resolver
Los estudiantes necesitan un proyecto pequeno y claro para practicar JavaScript con resultados visibles en pantalla.

Una lista de tareas permite trabajar interaccion, eventos y manipulacion del DOM sin introducir todavia conceptos mas avanzados.

## 5. Alcance del proyecto
La aplicacion debe permitir unicamente lo siguiente:

- Escribir una tarea en un campo de texto
- Agregar la tarea a una lista visible
- Marcar una tarea como completada al hacer clic
- Eliminar una tarea con un boton

## 6. Alcance fuera del proyecto
Para mantener el ejercicio en nivel basico, por ahora no es obligatorio implementar:

- Base de datos
- Backend
- Inicio de sesion
- Edicion de tareas
- Filtros
- Fechas
- Categorias
- `localStorage`

Nota: `localStorage` puede dejarse como mejora futura cuando los estudiantes dominen mejor eventos, arreglos y conversion a JSON.

## 7. Funcionalidades principales

### 7.1 Agregar tarea
El usuario escribe un texto en el campo de entrada y presiona el boton `Agregar`.

Resultado esperado:

- Se crea un nuevo elemento en la lista
- El texto ingresado aparece en pantalla
- El campo de entrada se limpia

### 7.2 Marcar tarea como completada
El usuario hace clic sobre el texto de la tarea.

Resultado esperado:

- La tarea cambia visualmente
- Se aplica o quita una clase CSS para indicar que esta completada

### 7.3 Eliminar tarea
El usuario presiona el boton `X` de una tarea.

Resultado esperado:

- La tarea desaparece de la lista

## 8. Flujo de uso
1. El usuario abre `index.html` en el navegador.
2. Escribe una tarea en el campo de texto.
3. Presiona el boton `Agregar`.
4. La tarea aparece en la lista.
5. Puede hacer clic en la tarea para marcarla como completada.
6. Puede presionar `X` para eliminarla.

## 9. Requisitos funcionales

### RF1. Campo de entrada
La interfaz debe tener un `input` donde el usuario pueda escribir una tarea.

### RF2. Boton de agregar
La interfaz debe tener un boton que ejecute la funcion para agregar tareas.

### RF3. Validacion basica
Si el campo esta vacio, no se debe agregar una tarea.

### RF4. Creacion dinamica
Cada tarea debe crearse desde JavaScript usando `createElement`.

### RF5. Interaccion por clic
Cada tarea debe poder marcarse como completada mediante clic.

### RF6. Eliminacion
Cada tarea debe tener un boton para eliminarla.

## 10. Requisitos no funcionales

- El proyecto debe funcionar en un navegador moderno
- El codigo debe ser facil de leer para estudiantes
- Las funciones deben ser cortas y claras
- Los nombres de variables deben ser entendibles

## 11. Estructura esperada del proyecto

```text
index.html
style.css
script.js
README.md
PRD.md
```

## 12. Conceptos de JavaScript que se practican
Este proyecto permite trabajar los siguientes temas:

- Variables con `let`
- Funciones
- Condicionales con `if`
- Eventos como `onclick`
- Seleccion de elementos con `document.getElementById`
- Creacion de elementos con `document.createElement`
- Manipulacion del DOM con `appendChild`
- Eliminacion de nodos con `remove`
- Manejo de clases con `classList.toggle`

## 13. Criterios de aceptacion
El proyecto se considera correcto si cumple lo siguiente:

1. El usuario puede escribir una tarea y agregarla.
2. No se agregan tareas vacias.
3. Cada tarea nueva aparece en la lista.
4. Cada tarea se puede marcar como completada.
5. Cada tarea se puede eliminar.
6. La interfaz funciona solo con HTML, CSS y JavaScript.

## 14. Posibles mejoras futuras
Cuando el grupo domine la version basica, se pueden agregar mejoras como:

- Agregar tareas con la tecla `Enter`
- Guardar tareas con `localStorage`
- Contador de tareas pendientes
- Boton para eliminar todas las tareas
- Separar completamente el JavaScript en `script.js`

## 15. Enfoque pedagogico recomendado
Para trabajar este proyecto en clase, conviene avanzar por etapas:

1. Crear la estructura HTML
2. Dar estilo basico con CSS
3. Capturar el valor del `input`
4. Crear tareas desde JavaScript
5. Agregar la opcion de completar
6. Agregar la opcion de eliminar

De esta manera, los estudiantes ven resultados pequenos y entendibles en cada paso.
