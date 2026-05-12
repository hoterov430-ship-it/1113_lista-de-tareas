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

// ENTER
let input = document.getElementById("tareaInput");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    agregarTarea();
  }
});
