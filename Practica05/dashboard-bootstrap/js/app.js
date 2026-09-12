// ==============================================================
// LÓGICA DE INTERACCIÓN Y MANIPULACIÓN DEL DOM (JS)
// ==============================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Selección de elementos del DOM con const
  const formNuevoRegistro = document.querySelector('#formNuevoRegistro');
  const tablaCuerpo = document.querySelector('table tbody');
  const modalElemento = document.querySelector('#modalNuevoRegistro');

  // 2. Escuchador de eventos para el formulario
  if (formNuevoRegistro) {
    formNuevoRegistro.addEventListener('submit', (event) => {
      // Prevenir el recargo predeterminado de la página
      event.preventDefault();

      // Captura de valores ingresados en los campos
      const nombreEvento = document.querySelector('#eventoNombre').value;
      const prioridad = document.querySelector('#prioridadSelect').value;
      const origen = document.querySelector('#origenInput').value;

      // Generar datos dinámicos (ID y Fecha actual)
      const idRandom = `#LOG-${Math.floor(1000 + Math.random() * 9000)}`;
      const fechaActual = new Date().toISOString().slice(0, 16).replace('T', ' ');

      // Determinar la clase del Badge según la prioridad con condicionales
      let badgeClass = 'bg-secondary';
      if (prioridad === 'Crítico') {
        badgeClass = 'bg-danger';
      } else if (prioridad === 'Advertencia') {
        badgeClass = 'bg-warning text-dark';
      } else if (prioridad === 'Normal') {
        badgeClass = 'bg-success';
      }

      // 3. Crear una nueva fila semántica en la tabla (Manipulación del DOM)
      const nuevaFila = document.createElement('tr');
      nuevaFila.innerHTML = `
        <td>${idRandom}</td>
        <td>${fechaActual}</td>
        <td>${nombreEvento}</td>
        <td>${origen}</td>
        <td><span class="badge ${badgeClass}">${prioridad}</span></td>
      `;

      // Insertar la fila al inicio del cuerpo de la tabla
      tablaCuerpo.insertBefore(nuevaFila, tablaCuerpo.firstChild);

      // Limpiar los campos del formulario
      formNuevoRegistro.reset();

      // 4. Cerrar la ventana Modal utilizando la API de Bootstrap JS
      const bootstrapModal = bootstrap.Modal.getInstance(modalElemento);
      if (bootstrapModal) {
        bootstrapModal.hide();
      }
    });
  }
});