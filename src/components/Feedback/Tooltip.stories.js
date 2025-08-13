import Tooltip from './Tooltip.js';

export default {
  title: 'Components/Feedback/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: 'Un componente de tooltip versátil con múltiples posiciones, variantes, tamaños y triggers personalizables.'
      }
    }
  },
  argTypes: {
    content: {
      control: 'text',
      description: 'Contenido del tooltip'
    },
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Posición del tooltip'
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'dark', 'light', 'info', 'success', 'warning', 'error'],
      description: 'Variante de diseño del tooltip'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del tooltip'
    },
    showArrow: {
      control: 'boolean',
      description: 'Si mostrar la flecha del tooltip'
    },
    delay: {
      control: { type: 'range', min: 0, max: 1000, step: 50 },
      description: 'Retraso antes de mostrar el tooltip (ms)'
    },
    maxWidth: {
      control: { type: 'range', min: 100, max: 500, step: 25 },
      description: 'Ancho máximo del tooltip'
    },
    trigger: {
      control: { type: 'select' },
      options: ['hover', 'click', 'focus'],
      description: 'Tipo de trigger para mostrar el tooltip'
    }
  }
};

// Tooltip básico
export const Basic = {
  args: {
    content: 'Este es un tooltip básico',
    position: 'top',
    variant: 'default',
    size: 'md',
    showArrow: true,
    delay: 200,
    maxWidth: 200,
    trigger: 'hover'
  },
  render: (args) => {
    const tooltip = new Tooltip(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.position = 'relative';
    
    const trigger = document.createElement('button');
    trigger.textContent = 'Hover sobre mí';
    trigger.className = 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600';
    trigger.setAttribute('data-tooltip-trigger', 'true');
    
    container.appendChild(trigger);
    
    tooltip.mount(container);
    return container;
  }
};

// Tooltip con diferentes posiciones
export const Positions = {
  args: {
    content: 'Tooltip en diferentes posiciones',
    variant: 'default',
    size: 'md',
    showArrow: true,
    delay: 200,
    maxWidth: 200,
    trigger: 'hover'
  },
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '60px';
    container.style.backgroundColor = '#f9fafb';
    container.style.position = 'relative';
    container.style.minHeight = '300px';
    
    const positions = ['top', 'right', 'bottom', 'left'];
    const buttons = [];
    
    positions.forEach((position, index) => {
      const button = document.createElement('button');
      button.textContent = `${position.charAt(0).toUpperCase() + position.slice(1)}`;
      button.className = 'px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600';
      button.setAttribute('data-tooltip-trigger', 'true');
      
      // Posicionar botones en diferentes lugares
      button.style.position = 'absolute';
      if (position === 'top') {
        button.style.top = '20px';
        button.style.left = '50%';
        button.style.transform = 'translateX(-50%)';
      } else if (position === 'right') {
        button.style.top = '50%';
        button.style.right = '20px';
        button.style.transform = 'translateY(-50%)';
      } else if (position === 'bottom') {
        button.style.bottom = '20px';
        button.style.left = '50%';
        button.style.transform = 'translateX(-50%)';
      } else if (position === 'left') {
        button.style.top = '50%';
        button.style.left = '20px';
        button.style.transform = 'translateY(-50%)';
      }
      
      container.appendChild(button);
      buttons.push(button);
      
      // Crear tooltip para cada posición
      const tooltip = new Tooltip({ ...args, position });
      tooltip.mount(container);
    });
    
    return container;
  }
};

// Tooltip con diferentes variantes
export const Variants = {
  args: {
    content: 'Diferentes variantes de tooltip',
    position: 'top',
    size: 'md',
    showArrow: true,
    delay: 200,
    maxWidth: 200,
    trigger: 'hover'
  },
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.position = 'relative';
    
    const variants = ['default', 'dark', 'light', 'info', 'success', 'warning', 'error'];
    const buttons = [];
    
    variants.forEach((variant, index) => {
      const button = document.createElement('button');
      button.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
      button.className = 'px-4 py-2 mr-2 mb-2 bg-gray-500 text-white rounded hover:bg-gray-600';
      button.setAttribute('data-tooltip-trigger', 'true');
      
      container.appendChild(button);
      buttons.push(button);
      
      // Crear tooltip para cada variante
      const tooltip = new Tooltip({ ...args, variant });
      tooltip.mount(container);
    });
    
    return container;
  }
};

// Tooltip con diferentes tamaños
export const Sizes = {
  args: {
    content: 'Tooltips de diferentes tamaños',
    position: 'top',
    variant: 'default',
    showArrow: true,
    delay: 200,
    maxWidth: 200,
    trigger: 'hover'
  },
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.position = 'relative';
    
    const sizes = ['sm', 'md', 'lg'];
    const buttons = [];
    
    sizes.forEach((size, index) => {
      const button = document.createElement('button');
      button.textContent = size.toUpperCase();
      button.className = 'px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600';
      button.setAttribute('data-tooltip-trigger', 'true');
      
      container.appendChild(button);
      buttons.push(button);
      
      // Crear tooltip para cada tamaño
      const tooltip = new Tooltip({ ...args, size });
      tooltip.mount(container);
    });
    
    return container;
  }
};

// Tooltip sin flecha
export const NoArrow = {
  args: {
    content: 'Tooltip sin flecha',
    position: 'top',
    variant: 'default',
    size: 'md',
    showArrow: false,
    delay: 200,
    maxWidth: 200,
    trigger: 'hover'
  },
  render: (args) => {
    const tooltip = new Tooltip(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.position = 'relative';
    
    const trigger = document.createElement('button');
    trigger.textContent = 'Sin flecha';
    trigger.className = 'px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600';
    trigger.setAttribute('data-tooltip-trigger', 'true');
    
    container.appendChild(trigger);
    
    tooltip.mount(container);
    return container;
  }
};

// Tooltip con retraso personalizado
export const CustomDelay = {
  args: {
    content: 'Tooltip con retraso personalizado',
    position: 'top',
    variant: 'info',
    size: 'md',
    showArrow: true,
    delay: 500,
    maxWidth: 200,
    trigger: 'hover'
  },
  render: (args) => {
    const tooltip = new Tooltip(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.position = 'relative';
    
    const trigger = document.createElement('button');
    trigger.textContent = 'Retraso 500ms';
    trigger.className = 'px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600';
    trigger.setAttribute('data-tooltip-trigger', 'true');
    
    container.appendChild(trigger);
    
    tooltip.mount(container);
    return container;
  }
};

// Tooltip con trigger de clic
export const ClickTrigger = {
  args: {
    content: 'Tooltip activado por clic',
    position: 'top',
    variant: 'success',
    size: 'md',
    showArrow: true,
    delay: 0,
    maxWidth: 200,
    trigger: 'click'
  },
  render: (args) => {
    const tooltip = new Tooltip(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.position = 'relative';
    
    const trigger = document.createElement('button');
    trigger.textContent = 'Clic para mostrar';
    trigger.className = 'px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600';
    trigger.setAttribute('data-tooltip-trigger', 'true');
    
    container.appendChild(trigger);
    
    tooltip.mount(container);
    return container;
  }
};

// Tooltip con trigger de foco
export const FocusTrigger = {
  args: {
    content: 'Tooltip activado por foco',
    position: 'top',
    variant: 'warning',
    size: 'md',
    showArrow: true,
    delay: 100,
    maxWidth: 200,
    trigger: 'focus'
  },
  render: (args) => {
    const tooltip = new Tooltip(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.position = 'relative';
    
    const trigger = document.createElement('input');
    trigger.type = 'text';
    trigger.placeholder = 'Haz foco aquí';
    trigger.className = 'px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500';
    trigger.setAttribute('data-tooltip-trigger', 'true');
    
    container.appendChild(trigger);
    
    tooltip.mount(container);
    return container;
  }
};

// Tooltip con ancho máximo personalizado
export const CustomMaxWidth = {
  args: {
    content: 'Este es un tooltip con un ancho máximo personalizado muy largo para demostrar cómo se comporta cuando el contenido excede el ancho máximo establecido.',
    position: 'top',
    variant: 'light',
    size: 'md',
    showArrow: true,
    delay: 200,
    maxWidth: 150,
    trigger: 'hover'
  },
  render: (args) => {
    const tooltip = new Tooltip(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.position = 'relative';
    
    const trigger = document.createElement('button');
    trigger.textContent = 'Ancho personalizado';
    trigger.className = 'px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600';
    trigger.setAttribute('data-tooltip-trigger', 'true');
    
    container.appendChild(trigger);
    
    tooltip.mount(container);
    return container;
  }
};

// Tooltip informativo
export const Info = {
  args: {
    content: 'Información útil para el usuario',
    position: 'top',
    variant: 'info',
    size: 'md',
    showArrow: true,
    delay: 200,
    maxWidth: 200,
    trigger: 'hover'
  },
  render: (args) => {
    const tooltip = Tooltip.info(args.content, args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.position = 'relative';
    
    const trigger = document.createElement('button');
    trigger.textContent = 'ℹ️ Información';
    trigger.className = 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600';
    trigger.setAttribute('data-tooltip-trigger', 'true');
    
    container.appendChild(trigger);
    
    tooltip.mount(container);
    return container;
  }
};

// Tooltip de éxito
export const Success = {
  args: {
    content: 'Operación completada exitosamente',
    position: 'top',
    variant: 'success',
    size: 'md',
    showArrow: true,
    delay: 200,
    maxWidth: 200,
    trigger: 'hover'
  },
  render: (args) => {
    const tooltip = Tooltip.success(args.content, args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.position = 'relative';
    
    const trigger = document.createElement('button');
    trigger.textContent = '✅ Éxito';
    trigger.className = 'px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600';
    trigger.setAttribute('data-tooltip-trigger', 'true');
    
    container.appendChild(trigger);
    
    tooltip.mount(container);
    return container;
  }
};

// Tooltip de advertencia
export const Warning = {
  args: {
    content: 'Advertencia: Esta acción no se puede deshacer',
    position: 'top',
    variant: 'warning',
    size: 'md',
    showArrow: true,
    delay: 200,
    maxWidth: 200,
    trigger: 'hover'
  },
  render: (args) => {
    const tooltip = Tooltip.warning(args.content, args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.position = 'relative';
    
    const trigger = document.createElement('button');
    trigger.textContent = '⚠️ Advertencia';
    trigger.className = 'px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600';
    trigger.setAttribute('data-tooltip-trigger', 'true');
    
    container.appendChild(trigger);
    
    tooltip.mount(container);
    return container;
  }
};

// Tooltip de error
export const Error = {
  args: {
    content: 'Error: No se pudo completar la operación',
    position: 'top',
    variant: 'error',
    size: 'md',
    showArrow: true,
    delay: 200,
    maxWidth: 200,
    trigger: 'hover'
  },
  render: (args) => {
    const tooltip = Tooltip.error(args.content, args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.position = 'relative';
    
    const trigger = document.createElement('button');
    trigger.textContent = '❌ Error';
    trigger.className = 'px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600';
    trigger.setAttribute('data-tooltip-trigger', 'true');
    
    container.appendChild(trigger);
    
    tooltip.mount(container);
    return container;
  }
};

// Tooltip de ayuda
export const Help = {
  args: {
    content: '¿Necesitas ayuda? Este tooltip te proporciona información útil.',
    position: 'top',
    variant: 'info',
    size: 'sm',
    showArrow: true,
    delay: 200,
    maxWidth: 200,
    trigger: 'hover'
  },
  render: (args) => {
    const tooltip = Tooltip.help(args.content, args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.position = 'relative';
    
    const trigger = document.createElement('button');
    trigger.textContent = '❓ Ayuda';
    trigger.className = 'px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600';
    trigger.setAttribute('data-tooltip-trigger', 'true');
    
    container.appendChild(trigger);
    
    tooltip.mount(container);
    return container;
  }
};

// Tooltip interactivo
export const Interactive = {
  args: {
    content: 'Tooltip interactivo - puedes cambiar las propiedades',
    position: 'top',
    variant: 'default',
    size: 'md',
    showArrow: true,
    delay: 200,
    maxWidth: 200,
    trigger: 'hover'
  },
  render: (args) => {
    const tooltip = new Tooltip(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.position = 'relative';
    
    // Controles interactivos
    const controls = document.createElement('div');
    controls.style.marginBottom = '20px';
    controls.style.display = 'flex';
    controls.style.gap = '10px';
    controls.style.flexWrap = 'wrap';
    controls.style.alignItems = 'center';
    
    const positionSelect = document.createElement('select');
    positionSelect.className = 'px-3 py-1 border rounded';
    ['top', 'right', 'bottom', 'left'].forEach(pos => {
      const option = document.createElement('option');
      option.value = pos;
      option.textContent = pos.charAt(0).toUpperCase() + pos.slice(1);
      option.selected = pos === args.position;
      positionSelect.appendChild(option);
    });
    positionSelect.onchange = (e) => {
      args.position = e.target.value;
      tooltip.setPosition(e.target.value);
    };
    
    const variantSelect = document.createElement('select');
    variantSelect.className = 'px-3 py-1 border rounded';
    ['default', 'dark', 'light', 'info', 'success', 'warning', 'error'].forEach(variant => {
      const option = document.createElement('option');
      option.value = variant;
      option.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
      option.selected = variant === args.variant;
      variantSelect.appendChild(option);
    });
    variantSelect.onchange = (e) => {
      args.variant = e.target.value;
      tooltip.setVariant(e.target.value);
    };
    
    const sizeSelect = document.createElement('select');
    sizeSelect.className = 'px-3 py-1 border rounded';
    ['sm', 'md', 'lg'].forEach(size => {
      const option = document.createElement('option');
      option.value = size;
      option.textContent = size.toUpperCase();
      option.selected = size === args.size;
      sizeSelect.appendChild(option);
    });
    sizeSelect.onchange = (e) => {
      args.size = e.target.value;
      tooltip.setSize(e.target.value);
    };
    
    const contentInput = document.createElement('input');
    contentInput.type = 'text';
    contentInput.value = args.content;
    contentInput.className = 'px-3 py-1 border rounded';
    contentInput.placeholder = 'Contenido del tooltip';
    contentInput.onchange = (e) => {
      args.content = e.target.value;
      tooltip.setContent(e.target.value);
    };
    
    const arrowToggle = document.createElement('input');
    arrowToggle.type = 'checkbox';
    arrowToggle.checked = args.showArrow;
    arrowToggle.onchange = (e) => {
      args.showArrow = e.target.checked;
      tooltip.setShowArrow(e.target.checked);
    };
    
    controls.appendChild(document.createElement('label')).textContent = 'Posición:';
    controls.appendChild(positionSelect);
    controls.appendChild(document.createElement('label')).textContent = 'Variante:';
    controls.appendChild(variantSelect);
    controls.appendChild(document.createElement('label')).textContent = 'Tamaño:';
    controls.appendChild(sizeSelect);
    controls.appendChild(document.createElement('label')).textContent = 'Contenido:';
    controls.appendChild(contentInput);
    controls.appendChild(document.createElement('label')).textContent = 'Flecha:';
    controls.appendChild(arrowToggle);
    
    container.appendChild(controls);
    
    // Botón trigger
    const trigger = document.createElement('button');
    trigger.textContent = 'Tooltip interactivo';
    trigger.className = 'px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600';
    trigger.setAttribute('data-tooltip-trigger', 'true');
    
    container.appendChild(trigger);
    
    tooltip.mount(container);
    return container;
  }
};
