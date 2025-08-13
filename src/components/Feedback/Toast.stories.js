import Toast from './Toast.js';

export default {
  title: 'Components/Feedback/Toast',
  component: Toast,
  parameters: {
    docs: {
      description: {
        component: 'Un componente de notificación toast versátil con múltiples tipos, posiciones y opciones de personalización.'
      }
    }
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Título del toast'
    },
    message: {
      control: 'text',
      description: 'Mensaje del toast'
    },
    type: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
      description: 'Tipo de toast'
    },
    duration: {
      control: { type: 'range', min: 0, max: 10000, step: 500 },
      description: 'Duración en milisegundos (0 = sin auto-cierre)'
    },
    position: {
      control: { type: 'select' },
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'],
      description: 'Posición del toast'
    },
    dismissible: {
      control: 'boolean',
      description: 'Si el toast se puede cerrar manualmente'
    },
    showIcon: {
      control: 'boolean',
      description: 'Si mostrar el icono del tipo'
    },
    onClose: {
      control: 'function',
      description: 'Callback cuando se cierra el toast'
    }
  }
};

// Toast básico
export const Basic = {
  args: {
    title: 'Notificación',
    message: 'Este es un toast básico',
    type: 'info',
    duration: 5000,
    position: 'top-right',
    dismissible: true,
    showIcon: true,
    onClose: null
  },
  render: (args) => {
    const toast = new Toast(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    container.style.position = 'relative';
    container.style.minHeight = '200px';
    
    const showButton = document.createElement('button');
    showButton.textContent = 'Mostrar Toast';
    showButton.className = 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600';
    showButton.onclick = () => {
      toast.show();
    };
    
    const hideButton = document.createElement('button');
    hideButton.textContent = 'Ocultar Toast';
    hideButton.className = 'px-4 py-2 ml-2 bg-gray-500 text-white rounded hover:bg-gray-600';
    hideButton.onclick = () => {
      toast.hide();
    };
    
    container.appendChild(showButton);
    container.appendChild(hideButton);
    
    // Montar el toast en el body para que se posicione correctamente
    document.body.insertAdjacentHTML('beforeend', toast.render());
    
    return container;
  }
};

// Toast de información
export const Info = {
  args: {
    title: 'Información',
    message: 'Este es un toast informativo',
    type: 'info',
    duration: 5000,
    position: 'top-right',
    dismissible: true,
    showIcon: true
  },
  render: (args) => {
    const toast = Toast.info(args.title, args.message, args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    
    const showButton = document.createElement('button');
    showButton.textContent = 'Toast de Información';
    showButton.className = 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600';
    showButton.onclick = () => {
      document.body.insertAdjacentHTML('beforeend', toast.render());
      toast.show();
    };
    
    container.appendChild(showButton);
    return container;
  }
};

// Toast de éxito
export const Success = {
  args: {
    title: 'Éxito',
    message: 'Operación completada exitosamente',
    type: 'success',
    duration: 5000,
    position: 'top-right',
    dismissible: true,
    showIcon: true
  },
  render: (args) => {
    const toast = Toast.success(args.title, args.message, args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    
    const showButton = document.createElement('button');
    showButton.textContent = 'Toast de Éxito';
    showButton.className = 'px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600';
    showButton.onclick = () => {
      document.body.insertAdjacentHTML('beforeend', toast.render());
      toast.show();
    };
    
    container.appendChild(showButton);
    return container;
  }
};

// Toast de advertencia
export const Warning = {
  args: {
    title: 'Advertencia',
    message: 'Ten cuidado con esta acción',
    type: 'warning',
    duration: 5000,
    position: 'top-right',
    dismissible: true,
    showIcon: true
  },
  render: (args) => {
    const toast = Toast.warning(args.title, args.message, args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    
    const showButton = document.createElement('button');
    showButton.textContent = 'Toast de Advertencia';
    showButton.className = 'px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600';
    showButton.onclick = () => {
      document.body.insertAdjacentHTML('beforeend', toast.render());
      toast.show();
    };
    
    container.appendChild(showButton);
    return container;
  }
};

// Toast de error
export const Error = {
  args: {
    title: 'Error',
    message: 'Algo salió mal',
    type: 'error',
    duration: 5000,
    position: 'top-right',
    dismissible: true,
    showIcon: true
  },
  render: (args) => {
    const toast = Toast.error(args.title, args.message, args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    
    const showButton = document.createElement('button');
    showButton.textContent = 'Toast de Error';
    showButton.className = 'px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600';
    showButton.onclick = () => {
      document.body.insertAdjacentHTML('beforeend', toast.render());
      toast.show();
    };
    
    container.appendChild(showButton);
    return container;
  }
};

// Toast sin auto-cierre
export const Persistent = {
  args: {
    title: 'Persistente',
    message: 'Este toast no se cierra automáticamente',
    type: 'info',
    duration: 0,
    position: 'top-right',
    dismissible: true,
    showIcon: true
  },
  render: (args) => {
    const toast = new Toast(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    
    const showButton = document.createElement('button');
    showButton.textContent = 'Toast Persistente';
    showButton.className = 'px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600';
    showButton.onclick = () => {
      document.body.insertAdjacentHTML('beforeend', toast.render());
      toast.show();
    };
    
    container.appendChild(showButton);
    return container;
  }
};

// Toast no descartable
export const NonDismissible = {
  args: {
    title: 'No Descartable',
    message: 'Este toast no se puede cerrar manualmente',
    type: 'warning',
    duration: 8000,
    position: 'top-right',
    dismissible: false,
    showIcon: true
  },
  render: (args) => {
    const toast = new Toast(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    
    const showButton = document.createElement('button');
    showButton.textContent = 'Toast No Descartable';
    showButton.className = 'px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600';
    showButton.onclick = () => {
      document.body.insertAdjacentHTML('beforeend', toast.render());
      toast.show();
    };
    
    container.appendChild(showButton);
    return container;
  }
};

// Toast sin icono
export const NoIcon = {
  args: {
    title: 'Sin Icono',
    message: 'Este toast no muestra icono',
    type: 'info',
    duration: 5000,
    position: 'top-right',
    dismissible: true,
    showIcon: false
  },
  render: (args) => {
    const toast = new Toast(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    
    const showButton = document.createElement('button');
    showButton.textContent = 'Toast Sin Icono';
    showButton.className = 'px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600';
    showButton.onclick = () => {
      document.body.insertAdjacentHTML('beforeend', toast.render());
      toast.show();
    };
    
    container.appendChild(showButton);
    return container;
  }
};

// Toast con diferentes posiciones
export const Positions = {
  args: {
    title: 'Posiciones',
    message: 'Toast en diferentes posiciones',
    type: 'info',
    duration: 5000,
    dismissible: true,
    showIcon: true
  },
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    
    const positions = ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'];
    
    positions.forEach((position, index) => {
      const button = document.createElement('button');
      button.textContent = position.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
      button.className = 'px-4 py-2 mr-2 mb-2 bg-blue-500 text-white rounded hover:bg-blue-600';
      button.onclick = () => {
        const toast = new Toast({ ...args, position });
        document.body.insertAdjacentHTML('beforeend', toast.render());
        toast.show();
      };
      
      container.appendChild(button);
    });
    
    return container;
  }
};

// Toast con callback de cierre
export const WithCallback = {
  args: {
    title: 'Con Callback',
    message: 'Este toast ejecuta una función al cerrarse',
    type: 'success',
    duration: 5000,
    position: 'top-right',
    dismissible: true,
    showIcon: true,
    onClose: (toast) => {
      console.log('Toast cerrado:', toast);
      alert('Toast cerrado exitosamente');
    }
  },
  render: (args) => {
    const toast = new Toast(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    
    const showButton = document.createElement('button');
    showButton.textContent = 'Toast Con Callback';
    showButton.className = 'px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600';
    showButton.onclick = () => {
      document.body.insertAdjacentHTML('beforeend', toast.render());
      toast.show();
    };
    
    container.appendChild(showButton);
    return container;
  }
};

// Toast con mensaje largo
export const LongMessage = {
  args: {
    title: 'Mensaje Largo',
    message: 'Este es un mensaje muy largo que demuestra cómo se comporta el toast cuando el contenido excede el ancho estándar. El toast se adapta automáticamente al contenido.',
    type: 'info',
    duration: 8000,
    position: 'top-right',
    dismissible: true,
    showIcon: true
  },
  render: (args) => {
    const toast = new Toast(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    
    const showButton = document.createElement('button');
    showButton.textContent = 'Toast Con Mensaje Largo';
    showButton.className = 'px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600';
    showButton.onclick = () => {
      document.body.insertAdjacentHTML('beforeend', toast.render());
      toast.show();
    };
    
    container.appendChild(showButton);
    return container;
  }
};

// Toast solo con título
export const TitleOnly = {
  args: {
    title: 'Solo Título',
    message: '',
    type: 'success',
    duration: 5000,
    position: 'top-right',
    dismissible: true,
    showIcon: true
  },
  render: (args) => {
    const toast = new Toast(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    
    const showButton = document.createElement('button');
    showButton.textContent = 'Toast Solo Título';
    showButton.className = 'px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600';
    showButton.onclick = () => {
      document.body.insertAdjacentHTML('beforeend', toast.render());
      toast.show();
    };
    
    container.appendChild(showButton);
    return container;
  }
};

// Toast solo con mensaje
export const MessageOnly = {
  args: {
    title: '',
    message: 'Solo mensaje sin título',
    type: 'info',
    duration: 5000,
    position: 'top-right',
    dismissible: true,
    showIcon: true
  },
  render: (args) => {
    const toast = new Toast(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    
    const showButton = document.createElement('button');
    showButton.textContent = 'Toast Solo Mensaje';
    showButton.className = 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600';
    showButton.onclick = () => {
      document.body.insertAdjacentHTML('beforeend', toast.render());
      toast.show();
    };
    
    container.appendChild(showButton);
    return container;
  }
};

// Toast con duración personalizada
export const CustomDuration = {
  args: {
    title: 'Duración Personalizada',
    message: 'Este toast dura 2 segundos',
    type: 'warning',
    duration: 2000,
    position: 'top-right',
    dismissible: true,
    showIcon: true
  },
  render: (args) => {
    const toast = new Toast(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    
    const showButton = document.createElement('button');
    showButton.textContent = 'Toast 2 Segundos';
    showButton.className = 'px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600';
    showButton.onclick = () => {
      document.body.insertAdjacentHTML('beforeend', toast.render());
      toast.show();
    };
    
    container.appendChild(showButton);
    return container;
  }
};

// Galería de toasts
export const Gallery = {
  args: {
    title: 'Galería',
    message: 'Muestra todos los tipos de toast',
    type: 'info',
    duration: 5000,
    position: 'top-right',
    dismissible: true,
    showIcon: true
  },
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    
    const types = [
      { type: 'info', label: 'Info', color: 'blue' },
      { type: 'success', label: 'Success', color: 'green' },
      { type: 'warning', label: 'Warning', color: 'yellow' },
      { type: 'error', label: 'Error', color: 'red' }
    ];
    
    types.forEach(({ type, label, color }) => {
      const button = document.createElement('button');
      button.textContent = `Toast ${label}`;
      button.className = `px-4 py-2 mr-2 mb-2 bg-${color}-500 text-white rounded hover:bg-${color}-600`;
      button.onclick = () => {
        const toast = Toast[type](`Toast ${label}`, `Este es un toast de tipo ${label.toLowerCase()}`, args);
        document.body.insertAdjacentHTML('beforeend', toast.render());
        toast.show();
      };
      
      container.appendChild(button);
    });
    
    return container;
  }
};

// Toast interactivo
export const Interactive = {
  args: {
    title: 'Toast Interactivo',
    message: 'Puedes cambiar las propiedades en tiempo real',
    type: 'info',
    duration: 5000,
    position: 'top-right',
    dismissible: true,
    showIcon: true
  },
  render: (args) => {
    const toast = new Toast(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    
    // Controles interactivos
    const controls = document.createElement('div');
    controls.style.marginBottom = '20px';
    controls.style.display = 'flex';
    controls.style.gap = '10px';
    controls.style.flexWrap = 'wrap';
    controls.style.alignItems = 'center';
    
    const typeSelect = document.createElement('select');
    typeSelect.className = 'px-3 py-1 border rounded';
    ['info', 'success', 'warning', 'error'].forEach(type => {
      const option = document.createElement('option');
      option.value = type;
      option.textContent = type.charAt(0).toUpperCase() + type.slice(1);
      option.selected = type === args.type;
      typeSelect.appendChild(option);
    });
    typeSelect.onchange = (e) => {
      args.type = e.target.value;
      toast.setType(e.target.value);
    };
    
    const positionSelect = document.createElement('select');
    positionSelect.className = 'px-3 py-1 border rounded';
    ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'].forEach(pos => {
      const option = document.createElement('option');
      option.value = pos;
      option.textContent = pos.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
      option.selected = pos === args.position;
      positionSelect.appendChild(option);
    });
    positionSelect.onchange = (e) => {
      args.position = e.target.value;
      toast.setPosition(e.target.value);
    };
    
    const durationInput = document.createElement('input');
    durationInput.type = 'number';
    durationInput.value = args.duration;
    durationInput.className = 'px-3 py-1 border rounded w-20';
    durationInput.placeholder = 'Duración';
    durationInput.onchange = (e) => {
      args.duration = parseInt(e.target.value);
      toast.setDuration(parseInt(e.target.value));
    };
    
    const dismissibleToggle = document.createElement('input');
    dismissibleToggle.type = 'checkbox';
    dismissibleToggle.checked = args.dismissible;
    dismissibleToggle.onchange = (e) => {
      args.dismissible = e.target.checked;
      toast.setDismissible(e.target.checked);
    };
    
    const iconToggle = document.createElement('input');
    iconToggle.type = 'checkbox';
    iconToggle.checked = args.showIcon;
    iconToggle.onchange = (e) => {
      args.showIcon = e.target.checked;
      toast.setShowIcon(e.target.checked);
    };
    
    controls.appendChild(document.createElement('label')).textContent = 'Tipo:';
    controls.appendChild(typeSelect);
    controls.appendChild(document.createElement('label')).textContent = 'Posición:';
    controls.appendChild(positionSelect);
    controls.appendChild(document.createElement('label')).textContent = 'Duración (ms):';
    controls.appendChild(durationInput);
    controls.appendChild(document.createElement('label')).textContent = 'Descartable:';
    controls.appendChild(dismissibleToggle);
    controls.appendChild(document.createElement('label')).textContent = 'Icono:';
    controls.appendChild(iconToggle);
    
    container.appendChild(controls);
    
    // Botón para mostrar toast
    const showButton = document.createElement('button');
    showButton.textContent = 'Mostrar Toast Interactivo';
    showButton.className = 'px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600';
    showButton.onclick = () => {
      document.body.insertAdjacentHTML('beforeend', toast.render());
      toast.show();
    };
    
    container.appendChild(showButton);
    return container;
  }
};
