import Input from './Input.js';

export default {
  title: 'Components/Input/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: 'Un componente de entrada de texto versátil con soporte para etiquetas, iconos, validación y múltiples tipos.'
      }
    }
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'Tipo de input'
    },
    placeholder: {
      control: 'text',
      description: 'Texto de placeholder'
    },
    value: {
      control: 'text',
      description: 'Valor inicial del input'
    },
    label: {
      control: 'text',
      description: 'Etiqueta del input'
    },
    required: {
      control: 'boolean',
      description: 'Si el campo es requerido'
    },
    disabled: {
      control: 'boolean',
      description: 'Si el input está deshabilitado'
    },
    error: {
      control: 'text',
      description: 'Mensaje de error'
    },
    icon: {
      control: 'text',
      description: 'Icono SVG para el input'
    },
    className: {
      control: 'text',
      description: 'Clases CSS adicionales'
    }
  }
};

// Input básico
export const Basic = {
  args: {
    type: 'text',
    placeholder: 'Escribe algo aquí...',
    value: '',
    label: 'Nombre',
    required: false,
    disabled: false,
    error: '',
    icon: '',
    className: ''
  },
  render: (args) => {
    const input = new Input(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    
    input.render(container);
    return container;
  }
};

// Input con etiqueta
export const WithLabel = {
  args: {
    type: 'text',
    placeholder: 'Ingresa tu nombre completo',
    value: '',
    label: 'Nombre Completo',
    required: true,
    disabled: false,
    error: '',
    icon: '',
    className: ''
  },
  render: (args) => {
    const input = new Input(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    
    input.render(container);
    return container;
  }
};

// Input con icono
export const WithIcon = {
  args: {
    type: 'text',
    placeholder: 'Buscar...',
    value: '',
    label: 'Búsqueda',
    required: false,
    disabled: false,
    error: '',
    icon: '🔍',
    className: ''
  },
  render: (args) => {
    const input = new Input(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    
    input.render(container);
    return container;
  }
};

// Input con error
export const WithError = {
  args: {
    type: 'email',
    placeholder: 'ejemplo@email.com',
    value: 'email-invalido',
    label: 'Correo Electrónico',
    required: true,
    disabled: false,
    error: 'Por favor ingresa un email válido',
    icon: '📧',
    className: ''
  },
  render: (args) => {
    const input = new Input(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    
    input.render(container);
    return container;
  }
};

// Input deshabilitado
export const Disabled = {
  args: {
    type: 'text',
    placeholder: 'Campo deshabilitado',
    value: 'No se puede editar',
    label: 'Campo Deshabilitado',
    required: false,
    disabled: true,
    error: '',
    icon: '🔒',
    className: ''
  },
  render: (args) => {
    const input = new Input(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    
    input.render(container);
    return container;
  }
};

// Input de contraseña
export const Password = {
  args: {
    type: 'password',
    placeholder: 'Ingresa tu contraseña',
    value: '',
    label: 'Contraseña',
    required: true,
    disabled: false,
    error: '',
    icon: '🔐',
    className: ''
  },
  render: (args) => {
    const input = new Input(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    
    input.render(container);
    return container;
  }
};

// Input de email
export const Email = {
  args: {
    type: 'email',
    placeholder: 'usuario@ejemplo.com',
    value: '',
    label: 'Email',
    required: true,
    disabled: false,
    error: '',
    icon: '📧',
    className: ''
  },
  render: (args) => {
    const input = new Input(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    
    input.render(container);
    return container;
  }
};

// Input numérico
export const Number = {
  args: {
    type: 'number',
    placeholder: '0',
    value: '',
    label: 'Edad',
    required: false,
    disabled: false,
    error: '',
    icon: '🔢',
    className: ''
  },
  render: (args) => {
    const input = new Input(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    
    input.render(container);
    return container;
  }
};

// Input de teléfono
export const Phone = {
  args: {
    type: 'tel',
    placeholder: '+1 (555) 123-4567',
    value: '',
    label: 'Teléfono',
    required: false,
    disabled: false,
    error: '',
    icon: '📞',
    className: ''
  },
  render: (args) => {
    const input = new Input(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    
    input.render(container);
    return container;
  }
};

// Input de URL
export const URL = {
  args: {
    type: 'url',
    placeholder: 'https://ejemplo.com',
    value: '',
    label: 'Sitio Web',
    required: false,
    disabled: false,
    error: '',
    icon: '🌐',
    className: ''
  },
  render: (args) => {
    const input = new Input(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    
    input.render(container);
    return container;
  }
};

// Galería de tipos
export const TypeGallery = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const title = document.createElement('h3');
    title.textContent = 'Galería de Tipos de Input';
    title.style.marginBottom = '20px';
    title.style.color = '#333';
    container.appendChild(title);
    
    const types = [
      { type: 'text', label: 'Texto', placeholder: 'Texto libre', icon: '📝' },
      { type: 'email', label: 'Email', placeholder: 'email@ejemplo.com', icon: '📧' },
      { type: 'password', label: 'Contraseña', placeholder: '••••••••', icon: '🔐' },
      { type: 'number', label: 'Número', placeholder: '0', icon: '🔢' },
      { type: 'tel', label: 'Teléfono', placeholder: '+1 (555) 123-4567', icon: '📞' },
      { type: 'url', label: 'URL', placeholder: 'https://ejemplo.com', icon: '🌐' },
      { type: 'search', label: 'Búsqueda', placeholder: 'Buscar...', icon: '🔍' }
    ];
    
    types.forEach((inputType) => {
      const input = new Input({
        type: inputType.type,
        placeholder: inputType.placeholder,
        label: inputType.label,
        icon: inputType.icon,
        required: false
      });
      
      const inputContainer = document.createElement('div');
      inputContainer.style.marginBottom = '20px';
      inputContainer.style.maxWidth = '400px';
      
      input.render(inputContainer);
      container.appendChild(inputContainer);
    });
    
    return container;
  }
};

// Input interactivo
export const Interactive = {
  args: {
    type: 'text',
    placeholder: 'Escribe algo...',
    value: '',
    label: 'Input Interactivo',
    required: false,
    disabled: false,
    error: '',
    icon: '✨',
    className: ''
  },
  render: (args) => {
    const input = new Input(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '500px';
    
    // Controles interactivos
    const controls = document.createElement('div');
    controls.style.marginBottom = '20px';
    controls.style.display = 'flex';
    controls.style.gap = '10px';
    controls.style.flexWrap = 'wrap';
    
    const typeSelect = document.createElement('select');
    typeSelect.className = 'px-3 py-1 border rounded';
    ['text', 'email', 'password', 'number', 'tel', 'url', 'search'].forEach(type => {
      const option = document.createElement('option');
      option.value = type;
      option.textContent = type.charAt(0).toUpperCase() + type.slice(1);
      option.selected = type === args.type;
      typeSelect.appendChild(option);
    });
    typeSelect.onchange = (e) => {
      args.type = e.target.value;
      input.destroy();
      const newInput = new Input(args);
      newInput.render(container);
    };
    
    const labelInput = document.createElement('input');
    labelInput.type = 'text';
    labelInput.placeholder = 'Etiqueta...';
    labelInput.className = 'px-3 py-1 border rounded';
    labelInput.value = args.label;
    labelInput.onchange = (e) => {
      args.label = e.target.value;
      input.destroy();
      const newInput = new Input(args);
      newInput.render(container);
    };
    
    const errorInput = document.createElement('input');
    errorInput.type = 'text';
    errorInput.placeholder = 'Error...';
    errorInput.className = 'px-3 py-1 border rounded';
    errorInput.value = args.error;
    errorInput.onchange = (e) => {
      args.error = e.target.value;
      input.destroy();
      const newInput = new Input(args);
      newInput.render(container);
    };
    
    const disabledCheckbox = document.createElement('input');
    disabledCheckbox.type = 'checkbox';
    disabledCheckbox.checked = args.disabled;
    disabledCheckbox.onchange = (e) => {
      args.disabled = e.target.checked;
      input.destroy();
      const newInput = new Input(args);
      newInput.render(container);
    };
    
    const disabledLabel = document.createElement('label');
    disabledLabel.textContent = 'Deshabilitado';
    disabledLabel.style.marginLeft = '5px';
    
    controls.appendChild(typeSelect);
    controls.appendChild(labelInput);
    controls.appendChild(errorInput);
    controls.appendChild(disabledCheckbox);
    controls.appendChild(disabledLabel);
    
    container.appendChild(controls);
    input.render(container);
    
    return container;
  }
};
