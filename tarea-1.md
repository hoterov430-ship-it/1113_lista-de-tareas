# Tarea 1 - Construyendo una lista de tareas con JavaScript

## Objetivo de la clase
En esta clase vamos a construir, paso a paso, una lista de tareas sencilla usando:

- HTML para la estructura
- CSS para el estilo
- JavaScript para la interaccion

La meta no es hacer una aplicacion compleja. La meta es entender bien los fundamentos:

- como leer un valor desde un `input`
- como ejecutar una funcion
- como crear elementos desde JavaScript
- como agregar elementos al DOM
- como eliminar elementos
- como cambiar clases para modificar el estilo

## Antes de empezar
Debes tener abiertos estos archivos del proyecto:

- `index.html`
- `style.css`
- `script.js`

Tambien debes abrir `index.html` en el navegador para ir viendo los cambios.

## Recomendacion de trabajo
No copies todo de una sola vez.

La idea de esta guia es que avances por partes:

1. Lee el paso
2. Entiende que se quiere lograr
3. Escribe el codigo
4. Guarda
5. Prueba en el navegador
6. Si algo falla, vuelve al paso anterior

---

## Parte 1. Entender que vamos a construir

La aplicacion final debe permitir:

- escribir una tarea en un campo
- presionar un boton para agregarla
- mostrar la tarea en una lista
- marcarla como completada
- eliminarla

Piensa en este flujo:

1. El usuario escribe "Hacer la tarea"
2. Presiona `Agregar`
3. La tarea aparece abajo
4. Si hace clic sobre ella, cambia su estilo
5. Si presiona `X`, se elimina

---

## Parte 2. Preparar la estructura HTML

### Que es HTML en este proyecto
HTML es la parte que define los elementos visibles en la pagina:

- titulos
- cajas de texto
- botones
- listas

### Que debes tener en `index.html`
La pagina necesita al menos:

- un titulo
- un `input`
- un boton
- una lista vacia

### Ejemplo base de estructura
Escribe o revisa una estructura parecida a esta:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Lista de Tareas</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Lista de Tareas</h1>

  <input type="text" id="tareaInput" placeholder="Escribe una tarea">
  <button onclick="agregarTarea()">Agregar</button>

  <ul id="listaTareas"></ul>

  <script src="script.js"></script>
</body>
</html>
```

### Explicacion

#### `input`
Sirve para que el usuario escriba texto.

```html
<input type="text" id="tareaInput" placeholder="Escribe una tarea">
```

Lo importante aqui es el `id="tareaInput"` porque luego JavaScript usara ese `id` para encontrar el elemento.

#### `button`
El boton ejecuta una funcion cuando el usuario hace clic.

```html
<button onclick="agregarTarea()">Agregar</button>
```

Eso significa: cuando alguien haga clic, llama la funcion `agregarTarea()`.

#### `ul`
La lista empezara vacia.

```html
<ul id="listaTareas"></ul>
```

Mas adelante JavaScript agregara elementos dentro de esa lista.

### Actividad 1
Haz esta parte en tu archivo `index.html`.

### Verificacion
Al abrir la pagina debes ver:

- el titulo
- el campo de texto
- el boton

Si todavia no funciona el boton, no te preocupes. Eso se resuelve en la parte de JavaScript.

---

## Parte 3. Agregar estilos basicos con CSS

### Que hace CSS
CSS se encarga del aspecto visual:

- colores
- espacio
- tamanos
- bordes
- distribucion

### Objetivo de esta parte
No buscamos un diseno complicado. Solo queremos que la pagina se vea ordenada.

### Ejemplo de estilos basicos
En `style.css` puedes escribir algo parecido a esto:

```css
body {
  font-family: Arial, sans-serif;
  background: #121212;
  color: white;
  padding: 30px;
}

input {
  padding: 8px;
  width: 220px;
}

button {
  padding: 8px 12px;
  margin-left: 8px;
  border: none;
  background: #00c853;
  color: white;
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

li {
  background: #2c2c2c;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.completada {
  text-decoration: line-through;
  opacity: 0.6;
}

.eliminar {
  background: #d50000;
}
```

### Explicacion importante

#### `.completada`
Esta clase se usara desde JavaScript.

Cuando una tarea tenga la clase `.completada`, su texto se vera tachado.

#### `.eliminar`
Esta clase se usara para el boton `X`.

Sirve para diferenciar visualmente el boton de eliminar.

### Actividad 2
Escribe estos estilos o construye unos similares.

### Verificacion
La pagina debe verse mejor organizada, aunque todavia no se agreguen tareas.

---

## Parte 4. Crear el archivo JavaScript

### Objetivo
Ahora vamos a darle comportamiento a la pagina.

En `script.js` vamos a escribir una funcion llamada `agregarTarea()`.

### Primer paso
Abre `script.js` y escribe esta funcion vacia:

```js
function agregarTarea() {
}
```

### Para que sirve
Esta funcion se ejecutara cuando el usuario haga clic en el boton `Agregar`.

### Actividad 3
Escribe la funcion vacia y guarda.

### Verificacion
Si el archivo esta bien conectado con HTML, al menos no deberia haber errores por funcion inexistente.

---

## Parte 5. Leer lo que el usuario escribe

### Que vamos a hacer ahora
Necesitamos obtener el texto escrito dentro del `input`.

### Codigo
Dentro de `agregarTarea()` escribe:

```js
function agregarTarea() {
  let input = document.getElementById("tareaInput");
  let texto = input.value;
}
```

### Explicacion linea por linea

#### `document.getElementById("tareaInput")`
Busca en el HTML el elemento que tiene ese `id`.

En este caso encuentra el campo de texto.

#### `input.value`
Obtiene lo que el usuario escribio.

Si el usuario escribio `Estudiar JavaScript`, entonces `texto` tendra ese valor.

### Actividad 4
Escribe esas lineas dentro de la funcion.

### Prueba sugerida
Puedes usar temporalmente:

```js
console.log(texto);
```

Cada vez que presiones el boton, deberia aparecer en la consola lo que escribiste.

---

## Parte 6. Evitar tareas vacias

### Problema
Si el usuario no escribe nada y presiona el boton, no tiene sentido agregar una tarea vacia.

### Solucion
Agrega una validacion:

```js
function agregarTarea() {
  let input = document.getElementById("tareaInput");
  let texto = input.value;

  if (texto === "") return;
}
```

### Explicacion
La condicion pregunta:

"El texto esta vacio?"

Si la respuesta es si, la funcion termina inmediatamente con `return`.

### Actividad 5
Agrega esta validacion.

### Prueba

1. Deja el campo vacio
2. Presiona `Agregar`
3. No debe pasar nada

Eso es correcto.

---

## Parte 7. Crear una tarea nueva desde JavaScript

### Que es lo nuevo aqui
Hasta ahora solo leemos el texto. Ahora vamos a crear un nuevo elemento HTML.

### Codigo
Agrega esto dentro de la funcion:

```js
let li = document.createElement("li");
```

### Explicacion
Esta linea crea un elemento `<li>` en memoria.

Todavia no aparece en pantalla.

Solo existe como un nuevo nodo que luego podemos completar y agregar a la lista.

### Actividad 6
Agrega la variable `li`.

---

## Parte 8. Crear el texto de la tarea

### Objetivo
Dentro de cada tarea vamos a poner un `span` con el texto.

### Codigo
Agrega estas lineas:

```js
let span = document.createElement("span");
span.textContent = texto;
```

### Explicacion

#### `document.createElement("span")`
Crea un elemento de texto en linea.

#### `span.textContent = texto`
Coloca dentro del `span` lo que el usuario escribio.

Si el usuario escribio `Leer`, entonces el `span` mostrara `Leer`.

### Actividad 7
Agrega el `span` y asigna el texto.

---

## Parte 9. Permitir marcar la tarea como completada

### Idea
Cuando el usuario haga clic sobre el texto, vamos a cambiar una clase CSS.

### Codigo
Escribe esto:

```js
span.onclick = function () {
  span.classList.toggle("completada");
};
```

### Explicacion

#### `onclick`
Define lo que pasa cuando se hace clic.

#### `classList.toggle("completada")`
Si la clase no existe, la agrega.
Si la clase ya existe, la quita.

Eso permite alternar entre:

- tarea normal
- tarea completada

### Actividad 8
Agrega el evento `onclick` al `span`.

### Verificacion
Cuando luego agregues una tarea y hagas clic sobre ella, deberia tacharse.

Si no ocurre, revisa que en CSS exista exactamente la clase `.completada`.

---

## Parte 10. Crear el boton para eliminar

### Objetivo
Cada tarea debe tener su propio boton para eliminarla.

### Codigo
Agrega estas lineas:

```js
let botonEliminar = document.createElement("button");
botonEliminar.textContent = "X";
botonEliminar.classList.add("eliminar");
```

### Explicacion

#### `textContent = "X"`
Hace que el boton muestre la letra `X`.

#### `classList.add("eliminar")`
Le agrega una clase CSS para que tenga un estilo diferente.

### Actividad 9
Crea el boton de eliminar.

---

## Parte 11. Programar la eliminacion

### Que debe pasar
Al hacer clic en `X`, la tarea completa debe desaparecer.

### Codigo
Agrega esto:

```js
botonEliminar.onclick = function () {
  li.remove();
};
```

### Explicacion
Cuando se hace clic en el boton, se elimina el elemento `li`.

Eso borra toda la tarea de la lista.

### Actividad 10
Agrega el evento del boton eliminar.

---

## Parte 12. Unir las piezas

### Situacion actual
Ya creaste:

- un `li`
- un `span`
- un boton

Ahora debes meter esos elementos dentro de la tarea.

### Codigo
Agrega:

```js
li.appendChild(span);
li.appendChild(botonEliminar);
```

### Explicacion
`appendChild` significa agregar un elemento hijo dentro de otro.

Aqui estamos diciendo:

- agrega el `span` dentro del `li`
- agrega el boton dentro del `li`

### Actividad 11
Agrega esas dos lineas.

---

## Parte 13. Mostrar la tarea en pantalla

### Problema
Aunque ya existe el `li`, todavia no esta dentro de la lista real del HTML.

### Solucion
Debemos agregarlo al `ul`.

### Codigo
Escribe:

```js
document.getElementById("listaTareas").appendChild(li);
```

### Explicacion
JavaScript busca la lista con `id="listaTareas"` y mete adentro la nueva tarea.

En este momento la tarea ya deberia aparecer en pantalla.

### Actividad 12
Agrega esta linea.

### Verificacion
Escribe una tarea y presiona `Agregar`.

Debes ver el nuevo elemento en la lista.

---

## Parte 14. Limpiar el campo despues de agregar

### Problema
Si despues de agregar una tarea el texto sigue en el `input`, la experiencia es incomoda.

### Solucion
Vaciar el campo.

### Codigo
Agrega al final de la funcion:

```js
input.value = "";
```

### Explicacion
Eso devuelve el `input` a vacio para poder escribir otra tarea.

### Actividad 13
Agrega la linea y prueba.

---

## Parte 15. Resultado esperado de la funcion completa

Al final, `script.js` deberia quedar parecido a esto:

```js
function agregarTarea() {
  let input = document.getElementById("tareaInput");
  let texto = input.value;

  if (texto === "") return;

  let li = document.createElement("li");

  let span = document.createElement("span");
  span.textContent = texto;

  span.onclick = function () {
    span.classList.toggle("completada");
  };

  let botonEliminar = document.createElement("button");
  botonEliminar.textContent = "X";
  botonEliminar.classList.add("eliminar");

  botonEliminar.onclick = function () {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(botonEliminar);

  document.getElementById("listaTareas").appendChild(li);

  input.value = "";
}
```

Importante: no copies este bloque de inmediato si no has trabajado los pasos anteriores. Usalo para comparar y revisar.

---

## Parte 16. Lista de comprobacion final

Cuando termines, revisa si tu proyecto cumple esto:

- aparece el titulo en pantalla
- existe un campo para escribir
- existe un boton `Agregar`
- se puede escribir una tarea
- al presionar `Agregar` aparece en la lista
- si el campo esta vacio, no agrega nada
- al hacer clic sobre la tarea, cambia su estilo
- al presionar `X`, la tarea desaparece

Si todo eso funciona, la practica esta correcta.

---

## Parte 17. Errores comunes y como revisarlos

### Error 1. El boton no hace nada
Revisa:

- que exista `onclick="agregarTarea()"`
- que `script.js` este conectado en el HTML
- que la funcion se llame exactamente `agregarTarea`

### Error 2. La tarea no se marca como completada
Revisa:

- que en JavaScript uses `"completada"`
- que en CSS exista `.completada`
- que no hayas escrito otro nombre como `.completed`

### Error 3. La tarea no aparece
Revisa:

- que exista `id="listaTareas"` en el HTML
- que estes usando `appendChild(li)`
- que no haya errores en la consola

### Error 4. Eliminar no funciona
Revisa:

- que el evento este en `botonEliminar.onclick`
- que dentro uses `li.remove()`

---

## Parte 18. Preguntas para reflexionar en clase

Responde con tus palabras:

1. Que hace `document.getElementById()`?
2. Para que sirve `createElement()`?
3. Cual es la diferencia entre crear un elemento y mostrarlo en pantalla?
4. Para que usamos `appendChild()`?
5. Que hace `classList.toggle()`?
6. Por que validamos que el texto no este vacio?

---

## Parte 19. Reto opcional

Si terminas antes, intenta una de estas mejoras:

### Reto 1
Hacer que tambien se agregue la tarea al presionar la tecla `Enter`.

### Reto 2
Mostrar un mensaje cuando el usuario intente agregar una tarea vacia.

### Reto 3
Mover toda la logica de JavaScript fuera del HTML y dejarla solo en `script.js`.

---

## Parte 20. Cierre de la clase

Hoy no estamos aprendiendo a memorizar codigo.

Estamos aprendiendo a pensar el proceso:

1. obtener un dato
2. validarlo
3. crear elementos
4. conectarlos
5. mostrarlos
6. responder a eventos

Si entiendes ese flujo, ya diste un paso importante en JavaScript.
