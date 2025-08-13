import Alert from './Alert.js';

export default {
  title: 'Components/Feedback/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: 'Un componente de alerta versátil con múltiples tipos, estados y funcionalidades de auto-dismiss.'
      }
    }
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
      description: 'Tipo de alerta'
    },
    title: {
      control: 'text',
      description: 'Título de la alerta'
    },
    message: {
      control: 'text',
      description: 'Mensaje de la alerta'
    },
    dismissible: {
      control: 'boolean',
      description: 'Si la alerta se puede cerrar'
    },
    autoDismiss: {
      control: 'boolean',
      description: 'Si la alerta se cierra automáticamente'
    },
    autoDismissDelay: {
      control: { type: 'number', min: 1000, max: 10000, step: 500 },
      description: 'Tiempo antes de auto-cerrar (ms)'
    },
    icon: {
      control: 'boolean',
      description: 'Mostrar icono'
    }
  }
};

// Alerta de información
export const Info = {
  args: {
    type: 'info',
    title: 'Información',
    message: 'Esta es una alerta informativa que te proporciona detalles importantes sobre el sistema.',
    dismissible: true,
    autoDismiss: false,
    icon: true
  },
  render: (args) => {
    const alert = new Alert(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    alert.mount(container);
    return container;
  }
};

// Alerta de éxito
export const Success = {
  args: {
    type: 'success',
    title: 'Éxito',
    message: '¡Operación completada exitosamente! Los datos se han guardado correctamente.',
    dismissible: true,
    autoDismiss: false,
    icon: true
  },
  render: (args) => {
    const alert = new Alert(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    alert.mount(container);
    return container;
  }
};

// Alerta de advertencia
export const Warning = {
  args: {
    type: 'warning',
    title: 'Advertencia',
    message: 'Ten cuidado con esta acción. Podría tener consecuencias inesperadas.',
    dismissible: true,
    autoDismiss: false,
    icon: true
  },
  render: (args) => {
    const alert = new Alert(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    alert.mount(container);
    return container;
  }
};

// Alerta de error
export const Error = {
  args: {
    type: 'error',
    title: 'Error',
    message: 'Ha ocurrido un error inesperado. Por favor, intenta nuevamente o contacta al soporte.',
    dismissible: true,
    autoDismiss: false,
    icon: true
  },
  render: (args) => {
    const alert = new Alert(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    alert.mount(container);
    return container;
  }
};

// Alerta sin título
export const NoTitle = {
  args: {
    type: 'info',
    title: '',
    message: 'Esta es una alerta simple sin título, solo con un mensaje informativo.',
    dismissible: true,
    autoDismiss: false,
    icon: true
  },
  render: (args) => {
    const alert = new Alert(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    alert.mount(container);
    return container;
  }
};

// Alerta sin icono
export const NoIcon = {
  args: {
    type: 'success',
    title: 'Sin Icono',
    message: 'Esta alerta no tiene icono, solo texto.',
    dismissible: true,
    autoDismiss: false,
    icon: false
  },
  render: (args) => {
    const alert = new Alert(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    alert.mount(container);
    return container;
  }
};

// Alerta no descartable
export const NonDismissible = {
  args: {
    type: 'warning',
    title: 'No Descartable',
    message: 'Esta alerta no se puede cerrar. Es importante que la leas completamente.',
    dismissible: false,
    autoDismiss: false,
    icon: true
  },
  render: (args) => {
    const alert = new Alert(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    alert.mount(container);
    return container;
  }
};

// Alerta con auto-dismiss
export const AutoDismiss = {
  args: {
    type: 'info',
    title: 'Auto-Dismiss',
    message: 'Esta alerta se cerrará automáticamente en 5 segundos.',
    dismissible: true,
    autoDismiss: true,
    autoDismissDelay: 5000,
    icon: true
  },
  render: (args) => {
    const alert = new Alert(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    alert.mount(container);
    return container;
  }
};

// Alerta con mensaje largo
export const LongMessage = {
  args: {
    type: 'info',
    title: 'Mensaje Largo',
    message: 'Esta es una alerta con un mensaje muy largo que puede extenderse por múltiples líneas. Es útil para mostrar información detallada o instrucciones paso a paso que requieren más espacio para ser explicadas claramente.',
    dismissible: true,
    autoDismiss: false,
    icon: true
  },
  render: (args) => {
    const alert = new Alert(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '600px';
    alert.mount(container);
    return container;
  }
};

// Galería de todos los tipos
export const AllTypes = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const types = [
      { type: 'info', title: 'Información', message: 'Mensaje informativo' },
      { type: 'success', title: 'Éxito', message: 'Operación exitosa' },
      { type: 'warning', title: 'Advertencia', message: 'Mensaje de advertencia' },
      { type: 'error', title: 'Error', message: 'Mensaje de error' }
    ];
    
    types.forEach((alertConfig, index) => {
      const alert = new Alert({
        ...alertConfig,
        dismissible: true,
        autoDismiss: false,
        icon: true
      });
      
      const alertContainer = document.createElement('div');
      alertContainer.style.marginBottom = '16px';
      alert.mount(alertContainer);
      container.appendChild(alertContainer);
    });
    
    return container;
  }
};

// Alerta interactiva
export const Interactive = {
  args: {
    type: 'info',
    title: 'Alerta Interactiva',
    message: 'Esta alerta tiene controles interactivos para cambiar sus propiedades.',
    dismissible: true,
    autoDismiss: false,
    icon: true
  },
  render: (args) => {
    const alert = new Alert(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    // Controles interactivos
    const controls = document.createElement('div');
    controls.style.marginBottom = '20px';
    controls.style.display = 'flex';
    controls.style.gap = '10px';
    controls.style.flexWrap = 'wrap';
    
    const typeSelect = document.createElement('select');
    typeSelect.className = 'px-3 py-1 border rounded';
    ['info', 'success', 'warning', 'error'].forEach(type => {
      const option = document.createElement('option');
      option.value = type;
      option.textContent = type.charAt(0).toUpperCase() + type.slice(1);
      typeSelect.appendChild(option);
    });
    typeSelect.onchange = (e) => alert.setType(e.target.value);
    
    const iconToggle = document.createElement('button');
    iconToggle.textContent = 'Toggle Icon';
    iconToggle.className = 'px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600';
    iconToggle.onclick = () => alert.setIcon(!alert.options.icon);
    
    const dismissibleToggle = document.createElement('button');
    dismissibleToggle.textContent = 'Toggle Dismissible';
    dismissibleToggle.className = 'px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600';
    dismissibleToggle.onclick = () => alert.setDismissible(!alert.options.dismissible);
    
    controls.appendChild(typeSelect);
    controls.appendChild(iconToggle);
    controls.appendChild(dismissibleToggle);
    
    container.appendChild(controls);
    alert.mount(container);
    
    return container;
  }
};
