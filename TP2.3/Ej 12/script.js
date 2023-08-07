function agregarMensaje() {
    const mensajeInput = document.getElementById('mensaje');
    const mensaje = mensajeInput.value;
    const chatBox = document.getElementById('chatBox');
    
    if (mensaje !== '') {
      const nuevoMensaje = document.createElement('p');
      nuevoMensaje.textContent = mensaje;
      chatBox.appendChild(nuevoMensaje);
      mensajeInput.value = '';
      chatBox.scrollTop = chatBox.scrollHeight; // Hacer scroll automático hacia abajo
    }
  }
  