import Modal from './Modal.js';

export default {
  title: 'Components/Layout/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: 'Un componente de ventana modal versátil con múltiples tamaños, opciones de cierre y funcionalidades avanzadas.'
      }
    }
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Título del modal'
    },
    content: {
      control: 'text',
      description: 'Contenido del modal'
    },
    footer: {
      control: 'text',
      description: 'Contenido del pie del modal'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', 'full'],
      description: 'Tamaño del modal'
    },
    closeOnOverlay: {
      control: 'boolean',
      description: 'Si se cierra al hacer clic en el overlay'
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Si se cierra con la tecla Escape'
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Si mostrar el botón de cerrar'
    },
    persistent: {
      control: 'boolean',
      description: 'Si el modal es persistente (no se puede cerrar)'
    }
  }
};

// Modal básico
export const Basic = {
  args: {
    title: 'Modal Básico',
    content: 'Este es un modal básico con título y contenido. Puedes cerrarlo haciendo clic en el botón X o en el overlay.',
    footer: '',
    size: 'md',
    closeOnOverlay: true,
    closeOnEscape: true,
    showCloseButton: true,
    persistent: false
  },
  render: (args) => {
    const modal = new Modal(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const openButton = document.createElement('button');
    openButton.textContent = 'Abrir Modal';
    openButton.className = 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600';
    openButton.onclick = () => modal.open();
    
    container.appendChild(openButton);
    modal.mount(container);
    
    return container;
  }
};

// Modal con título
export const WithTitle = {
  args: {
    title: 'Modal con Título',
    content: 'Este modal tiene un título prominente que describe su propósito. Es útil para identificar claramente el contenido del modal.',
    footer: '',
    size: 'md',
    closeOnOverlay: true,
    closeOnEscape: true,
    showCloseButton: true,
    persistent: false
  },
  render: (args) => {
    const modal = new Modal(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const openButton = document.createElement('button');
    openButton.textContent = 'Abrir Modal con Título';
    openButton.className = 'px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600';
    openButton.onclick = () => modal.open();
    
    container.appendChild(openButton);
    modal.mount(container);
    
    return container;
  }
};

// Modal con pie de página
export const WithFooter = {
  args: {
    title: 'Modal con Pie de Página',
    content: 'Este modal incluye un pie de página con botones de acción. Es ideal para modales que requieren confirmación o acciones del usuario.',
    footer: `
      <div class="flex justify-end space-x-3">
        <button
          type="button"
          class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onclick="this.close()"
        >
          Cancelar
        </button>
        <button
          type="button"
          class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onclick="alert('Acción confirmada!'); this.close()"
        >
          Confirmar
        </button>
      </div>
    `,
    size: 'md',
    closeOnOverlay: true,
    closeOnEscape: true,
    showCloseButton: true,
    persistent: false
  },
  render: (args) => {
    const modal = new Modal(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const openButton = document.createElement('button');
    openButton.textContent = 'Abrir Modal con Footer';
    openButton.className = 'px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600';
    openButton.onclick = () => modal.open();
    
    container.appendChild(openButton);
    modal.mount(container);
    
    return container;
  }
};

// Modal pequeño
export const Small = {
  args: {
    title: 'Modal Pequeño',
    content: 'Este es un modal de tamaño pequeño, ideal para confirmaciones rápidas o mensajes cortos.',
    footer: '',
    size: 'sm',
    closeOnOverlay: true,
    closeOnEscape: true,
    showCloseButton: true,
    persistent: false
  },
  render: (args) => {
    const modal = new Modal(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const openButton = document.createElement('button');
    openButton.textContent = 'Abrir Modal Pequeño';
    openButton.className = 'px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600';
    openButton.onclick = () => modal.open();
    
    container.appendChild(openButton);
    modal.mount(container);
    
    return container;
  }
};

// Modal grande
export const Large = {
  args: {
    title: 'Modal Grande',
    content: 'Este es un modal de tamaño grande que proporciona mucho espacio para contenido extenso, formularios complejos o galerías de imágenes.',
    footer: '',
    size: 'lg',
    closeOnOverlay: true,
    closeOnEscape: true,
    showCloseButton: true,
    persistent: false
  },
  render: (args) => {
    const modal = new Modal(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const openButton = document.createElement('button');
    openButton.textContent = 'Abrir Modal Grande';
    openButton.className = 'px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600';
    openButton.onclick = () => modal.open();
    
    container.appendChild(openButton);
    modal.mount(container);
    
    return container;
  }
};

// Modal extra grande
export const ExtraLarge = {
  args: {
    title: 'Modal Extra Grande',
    content: 'Este modal extra grande es perfecto para mostrar contenido muy extenso, tablas de datos, o cuando necesitas maximizar el espacio disponible.',
    footer: '',
    size: 'xl',
    closeOnOverlay: true,
    closeOnEscape: true,
    showCloseButton: true,
    persistent: false
  },
  render: (args) => {
    const modal = new Modal(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const openButton = document.createElement('button');
    openButton.textContent = 'Abrir Modal Extra Grande';
    openButton.className = 'px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600';
    openButton.onclick = () => modal.open();
    
    container.appendChild(openButton);
    modal.mount(container);
    
    return container;
  }
};

// Modal de pantalla completa
export const FullScreen = {
  args: {
    title: 'Modal de Pantalla Completa',
    content: 'Este modal ocupa toda la pantalla, proporcionando el máximo espacio posible para contenido extenso o experiencias inmersivas.',
    footer: '',
    size: 'full',
    closeOnOverlay: true,
    closeOnEscape: true,
    showCloseButton: true,
    persistent: false
  },
  render: (args) => {
    const modal = new Modal(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const openButton = document.createElement('button');
    openButton.textContent = 'Abrir Modal Pantalla Completa';
    openButton.className = 'px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900';
    openButton.onclick = () => modal.open();
    
    container.appendChild(openButton);
    modal.mount(container);
    
    return container;
  }
};

// Modal sin botón de cerrar
export const NoCloseButton = {
  args: {
    title: 'Modal sin Botón de Cerrar',
    content: 'Este modal no tiene botón de cerrar visible. Solo se puede cerrar haciendo clic en el overlay o presionando Escape.',
    footer: '',
    size: 'md',
    closeOnOverlay: true,
    closeOnEscape: true,
    showCloseButton: false,
    persistent: false
  },
  render: (args) => {
    const modal = new Modal(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const openButton = document.createElement('button');
    openButton.textContent = 'Abrir Modal sin Botón de Cerrar';
    openButton.className = 'px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600';
    openButton.onclick = () => modal.open();
    
    container.appendChild(openButton);
    modal.mount(container);
    
    return container;
  }
};

// Modal persistente
export const Persistent = {
  args: {
    title: 'Modal Persistente',
    content: 'Este modal es persistente y no se puede cerrar fácilmente. Es útil para información crítica que el usuario debe leer completamente.',
    footer: `
      <div class="flex justify-center">
        <button
          type="button"
          class="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          onclick="this.close()"
        >
          Entendido
        </button>
      </div>
    `,
    size: 'md',
    closeOnOverlay: false,
    closeOnEscape: false,
    showCloseButton: false,
    persistent: true
  },
  render: (args) => {
    const modal = new Modal(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const openButton = document.createElement('button');
    openButton.textContent = 'Abrir Modal Persistente';
    openButton.className = 'px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700';
    openButton.onclick = () => modal.open();
    
    container.appendChild(openButton);
    modal.mount(container);
    
    return container;
  }
};

// Modal con contenido HTML
export const WithHTMLContent = {
  args: {
    title: 'Modal con Contenido HTML',
    content: `
      <div class="space-y-4">
        <h4 class="text-lg font-semibold text-gray-900">Información del Pokémon</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <div class="flex items-center space-x-3">
            <div class="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
              <span class="text-2xl">⚡</span>
            </div>
            <div>
              <h5 class="font-medium text-gray-900">Pikachu</h5>
              <p class="text-sm text-gray-600">Tipo: Eléctrico</p>
              <p class="text-sm text-gray-600">Altura: 0.4m</p>
            </div>
          </div>
        </div>
        <p class="text-gray-700">Pikachu es un Pokémon de tipo Eléctrico conocido por su cola en forma de rayo y su personalidad amigable.</p>
      </div>
    `,
    footer: `
      <div class="flex justify-end space-x-3">
        <button
          type="button"
          class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onclick="this.close()"
        >
          Cerrar
        </button>
        <button
          type="button"
          class="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          onclick="alert('¡Pikachu seleccionado!')"
        >
          Seleccionar
        </button>
      </div>
    `,
    size: 'lg',
    closeOnOverlay: true,
    closeOnEscape: true,
    showCloseButton: true,
    persistent: false
  },
  render: (args) => {
    const modal = new Modal(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const openButton = document.createElement('button');
    openButton.textContent = 'Abrir Modal con HTML';
    openButton.className = 'px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600';
    openButton.onclick = () => modal.open();
    
    container.appendChild(openButton);
    modal.mount(container);
    
    return container;
  }
};

// Modal de confirmación
export const Confirmation = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const confirmButton = document.createElement('button');
    confirmButton.textContent = 'Mostrar Confirmación';
    confirmButton.className = 'px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mr-3';
    confirmButton.onclick = () => {
      const confirmModal = Modal.confirm({
        title: 'Confirmar Eliminación',
        content: '¿Estás seguro de que quieres eliminar este Pokémon? Esta acción no se puede deshacer.',
        footer: `
          <button
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            onclick="this.close()"
          >
            Cancelar
          </button>
          <button
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            onclick="alert('Pokémon eliminado!'); this.close()"
          >
            Eliminar
          </button>
        `
      });
      confirmModal.mount(container);
      confirmModal.open();
    };
    
    const alertButton = document.createElement('button');
    alertButton.textContent = 'Mostrar Alerta';
    alertButton.className = 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600';
    alertButton.onclick = () => {
      const alertModal = Modal.alert({
        title: 'Información Importante',
        content: 'Has alcanzado el nivel máximo de tu Pokémon. ¡Felicidades!',
        footer: `
          <button
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto sm:text-sm"
            onclick="this.close()"
          >
            ¡Entendido!
          </button>
        `
      });
      alertModal.mount(container);
      alertModal.open();
    };
    
    container.appendChild(confirmButton);
    container.appendChild(alertButton);
    
    return container;
  }
};

// Modal interactivo
export const Interactive = {
  args: {
    title: 'Modal Interactivo',
    content: 'Este modal tiene controles interactivos que te permiten cambiar sus propiedades en tiempo real.',
    footer: '',
    size: 'lg',
    closeOnOverlay: true,
    closeOnEscape: true,
    showCloseButton: true,
    persistent: false
  },
  render: (args) => {
    const modal = new Modal(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    // Controles interactivos
    const controls = document.createElement('div');
    controls.style.marginBottom = '20px';
    controls.style.display = 'flex';
    controls.style.gap = '10px';
    controls.style.flexWrap = 'wrap';
    
    const sizeSelect = document.createElement('select');
    sizeSelect.className = 'px-3 py-1 border rounded';
    ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', 'full'].forEach(size => {
      const option = document.createElement('option');
      option.value = size;
      option.textContent = size.toUpperCase();
      option.selected = size === 'lg';
      sizeSelect.appendChild(option);
    });
    sizeSelect.onchange = (e) => modal.setSize(e.target.value);
    
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.placeholder = 'Nuevo título...';
    titleInput.className = 'px-3 py-1 border rounded';
    titleInput.value = args.title;
    titleInput.onchange = (e) => modal.setTitle(e.target.value);
    
    const contentInput = document.createElement('input');
    contentInput.type = 'text';
    contentInput.placeholder = 'Nuevo contenido...';
    contentInput.className = 'px-3 py-1 border rounded';
    contentInput.value = args.content;
    contentInput.onchange = (e) => modal.setContent(e.target.value);
    
    const closeOverlayToggle = document.createElement('button');
    closeOverlayToggle.textContent = 'Toggle Overlay Close';
    closeOverlayToggle.className = 'px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600';
    closeOverlayToggle.onclick = () => {
      args.closeOnOverlay = !args.closeOnOverlay;
      modal.setCloseOnOverlay(args.closeOnOverlay);
      closeOverlayToggle.textContent = args.closeOnOverlay ? 'Disable Overlay Close' : 'Enable Overlay Close';
    };
    
    controls.appendChild(sizeSelect);
    controls.appendChild(titleInput);
    controls.appendChild(contentInput);
    controls.appendChild(closeOverlayToggle);
    
    const openButton = document.createElement('button');
    openButton.textContent = 'Abrir Modal Interactivo';
    openButton.className = 'px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600';
    openButton.onclick = () => modal.open();
    
    container.appendChild(controls);
    container.appendChild(openButton);
    modal.mount(container);
    
    return container;
  }
};
