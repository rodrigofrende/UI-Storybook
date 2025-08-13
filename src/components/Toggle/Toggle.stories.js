import Toggle from './Toggle.js';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component: 'Un componente de alternancia (toggle/switch) versátil con múltiples tamaños, colores y estados.'
      }
    }
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Estado inicial del toggle'
    },
    disabled: {
      control: 'boolean',
      description: 'Si el toggle está deshabilitado'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del toggle'
    },
    color: {
      control: { type: 'select' },
      options: ['blue', 'green', 'red', 'purple', 'orange'],
      description: 'Color del toggle cuando está activo'
    },
    label: {
      control: 'text',
      description: 'Etiqueta del toggle'
    },
    showLabel: {
      control: 'boolean',
      description: 'Si mostrar la etiqueta'
    }
  }
};

// Toggle básico
export const Basic = {
  args: {
    checked: false,
    disabled: false,
    size: 'md',
    color: 'blue',
    label: 'Notificaciones',
    showLabel: true
  },
  render: (args) => {
    const toggle = new Toggle(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    toggle.mount(container);
    return container;
  }
};

// Toggle activado
export const Checked = {
  args: {
    checked: true,
    disabled: false,
    size: 'md',
    color: 'blue',
    label: 'Modo oscuro',
    showLabel: true
  },
  render: (args) => {
    const toggle = new Toggle(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    toggle.mount(container);
    return container;
  }
};

// Toggle deshabilitado
export const Disabled = {
  args: {
    checked: false,
    disabled: true,
    size: 'md',
    color: 'blue',
    label: 'Función no disponible',
    showLabel: true
  },
  render: (args) => {
    const toggle = new Toggle(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    toggle.mount(container);
    return container;
  }
};

// Toggle pequeño
export const Small = {
  args: {
    checked: false,
    disabled: false,
    size: 'sm',
    color: 'green',
    label: 'Auto-save',
    showLabel: true
  },
  render: (args) => {
    const toggle = new Toggle(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    toggle.mount(container);
    return container;
  }
};

// Toggle grande
export const Large = {
  args: {
    checked: true,
    disabled: false,
    size: 'lg',
    color: 'purple',
    label: 'Modo de alto contraste',
    showLabel: true
  },
  render: (args) => {
    const toggle = new Toggle(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    toggle.mount(container);
    return container;
  }
};

// Toggle sin etiqueta
export const NoLabel = {
  args: {
    checked: false,
    disabled: false,
    size: 'md',
    color: 'red',
    label: '',
    showLabel: false
  },
  render: (args) => {
    const toggle = new Toggle(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    toggle.mount(container);
    return container;
  }
};

// Toggle verde
export const Green = {
  args: {
    checked: true,
    disabled: false,
    size: 'md',
    color: 'green',
    label: 'Estado activo',
    showLabel: true
  },
  render: (args) => {
    const toggle = new Toggle(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    toggle.mount(container);
    return container;
  }
};

// Toggle rojo
export const Red = {
  args: {
    checked: false,
    disabled: false,
    size: 'md',
    color: 'red',
    label: 'Modo de emergencia',
    showLabel: true
  },
  render: (args) => {
    const toggle = new Toggle(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    toggle.mount(container);
    return container;
  }
};

// Toggle púrpura
export const Purple = {
  args: {
    checked: true,
    disabled: false,
    size: 'md',
    color: 'purple',
    label: 'Modo premium',
    showLabel: true
  },
  render: (args) => {
    const toggle = new Toggle(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    toggle.mount(container);
    return container;
  }
};

// Toggle naranja
export const Orange = {
  args: {
    checked: false,
    disabled: false,
    size: 'md',
    color: 'orange',
    label: 'Modo de desarrollo',
    showLabel: true
  },
  render: (args) => {
    const toggle = new Toggle(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    toggle.mount(container);
    return container;
  }
};

// Galería de tamaños
export const SizeGallery = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const sizes = ['sm', 'md', 'lg'];
    const sizeNames = ['Pequeño', 'Mediano', 'Grande'];
    
    sizes.forEach((size, index) => {
      const toggleContainer = document.createElement('div');
      toggleContainer.style.marginBottom = '20px';
      toggleContainer.style.display = 'flex';
      toggleContainer.style.alignItems = 'center';
      toggleContainer.style.gap = '20px';
      
      const label = document.createElement('div');
      label.textContent = sizeNames[index];
      label.style.minWidth = '80px';
      label.style.fontWeight = 'bold';
      
      const toggle = new Toggle({
        checked: index === 1, // El mediano estará activado
        disabled: false,
        size: size,
        color: 'blue',
        label: `Toggle ${sizeNames[index]}`,
        showLabel: true
      });
      
      toggleContainer.appendChild(label);
      toggle.mount(toggleContainer);
      container.appendChild(toggleContainer);
    });
    
    return container;
  }
};

// Galería de colores
export const ColorGallery = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const colors = ['blue', 'green', 'red', 'purple', 'orange'];
    const colorNames = ['Azul', 'Verde', 'Rojo', 'Púrpura', 'Naranja'];
    
    colors.forEach((color, index) => {
      const toggleContainer = document.createElement('div');
      toggleContainer.style.marginBottom = '20px';
      toggleContainer.style.display = 'flex';
      toggleContainer.style.alignItems = 'center';
      toggleContainer.style.gap = '20px';
      
      const label = document.createElement('div');
      label.textContent = colorNames[index];
      label.style.minWidth = '80px';
      label.style.fontWeight = 'bold';
      
      const toggle = new Toggle({
        checked: index % 2 === 0, // Alternar estados
        disabled: false,
        size: 'md',
        color: color,
        label: `Toggle ${colorNames[index]}`,
        showLabel: true
      });
      
      toggleContainer.appendChild(label);
      toggle.mount(toggleContainer);
      container.appendChild(toggleContainer);
    });
    
    return container;
  }
};

// Toggle interactivo
export const Interactive = {
  args: {
    checked: false,
    disabled: false,
    size: 'md',
    color: 'blue',
    label: 'Toggle Interactivo',
    showLabel: true
  },
  render: (args) => {
    const toggle = new Toggle(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    // Controles interactivos
    const controls = document.createElement('div');
    controls.style.marginBottom = '20px';
    controls.style.display = 'flex';
    controls.style.gap = '10px';
    controls.style.flexWrap = 'wrap';
    
    const colorSelect = document.createElement('select');
    colorSelect.className = 'px-3 py-1 border rounded';
    ['blue', 'green', 'red', 'purple', 'orange'].forEach(color => {
      const option = document.createElement('option');
      option.value = color;
      option.textContent = color.charAt(0).toUpperCase() + color.slice(1);
      colorSelect.appendChild(option);
    });
    colorSelect.onchange = (e) => toggle.setColor(e.target.value);
    
    const sizeSelect = document.createElement('select');
    sizeSelect.className = 'px-3 py-1 border rounded';
    ['sm', 'md', 'lg'].forEach(size => {
      const option = document.createElement('option');
      option.value = size;
      option.textContent = size.toUpperCase();
      sizeSelect.appendChild(option);
    });
    sizeSelect.value = 'md';
    sizeSelect.onchange = (e) => toggle.setSize(e.target.value);
    
    const disableBtn = document.createElement('button');
    disableBtn.textContent = 'Toggle Disabled';
    disableBtn.className = 'px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600';
    disableBtn.onclick = () => {
      if (toggle.options.disabled) {
        toggle.enable();
        disableBtn.textContent = 'Disable';
        disableBtn.className = 'px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600';
      } else {
        toggle.disable();
        disableBtn.textContent = 'Enable';
        disableBtn.className = 'px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600';
      }
    };
    
    controls.appendChild(colorSelect);
    controls.appendChild(sizeSelect);
    controls.appendChild(disableBtn);
    
    container.appendChild(controls);
    toggle.mount(container);
    
    return container;
  }
};
