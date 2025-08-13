import Spinner from './Spinner.js';

export default {
  title: 'Components/Feedback/Spinner',
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component: 'Un componente de spinner de carga versátil con múltiples variantes, tamaños, colores y posiciones de texto.'
      }
    }
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Tamaño del spinner'
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'dots', 'bars', 'pulse', 'ring'],
      description: 'Variante de animación del spinner'
    },
    color: {
      control: { type: 'select' },
      options: ['blue', 'green', 'red', 'yellow', 'purple', 'pink', 'indigo', 'gray', 'white'],
      description: 'Color del spinner'
    },
    text: {
      control: 'text',
      description: 'Texto descriptivo del spinner'
    },
    textPosition: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Posición del texto relativo al spinner'
    }
  }
};

// Spinner básico
export const Basic = {
  args: {
    size: 'md',
    variant: 'default',
    color: 'blue',
    text: '',
    textPosition: 'bottom'
  },
  render: (args) => {
    const spinner = new Spinner(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    
    spinner.mount(container);
    return container;
  }
};

// Spinner con texto
export const WithText = {
  args: {
    size: 'md',
    variant: 'default',
    color: 'blue',
    text: 'Cargando...',
    textPosition: 'bottom'
  },
  render: (args) => {
    const spinner = new Spinner(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    
    spinner.mount(container);
    return container;
  }
};

// Spinner con diferentes variantes
export const Variants = {
  args: {
    size: 'md',
    color: 'blue',
    text: 'Cargando...',
    textPosition: 'bottom'
  },
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.gap = '40px';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    
    const variants = ['default', 'dots', 'bars', 'pulse', 'ring'];
    
    variants.forEach(variant => {
      const spinnerContainer = document.createElement('div');
      spinnerContainer.style.textAlign = 'center';
      
      const label = document.createElement('div');
      label.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
      label.style.marginBottom = '10px';
      label.style.fontWeight = 'bold';
      label.style.color = '#374151';
      
      spinnerContainer.appendChild(label);
      
      const spinner = new Spinner({ ...args, variant });
      spinner.mount(spinnerContainer);
      
      container.appendChild(spinnerContainer);
    });
    
    return container;
  }
};

// Spinner con diferentes tamaños
export const Sizes = {
  args: {
    variant: 'default',
    color: 'blue',
    text: 'Cargando...',
    textPosition: 'bottom'
  },
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.gap = '40px';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
    
    sizes.forEach(size => {
      const spinnerContainer = document.createElement('div');
      spinnerContainer.style.textAlign = 'center';
      
      const label = document.createElement('div');
      label.textContent = size.toUpperCase();
      label.style.marginBottom = '10px';
      label.style.fontWeight = 'bold';
      label.style.color = '#374151';
      
      spinnerContainer.appendChild(label);
      
      const spinner = new Spinner({ ...args, size });
      spinner.mount(spinnerContainer);
      
      container.appendChild(spinnerContainer);
    });
    
    return container;
  }
};

// Spinner con diferentes colores
export const Colors = {
  args: {
    size: 'md',
    variant: 'default',
    text: 'Cargando...',
    textPosition: 'bottom'
  },
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.gap = '40px';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    
    const colors = ['blue', 'green', 'red', 'yellow', 'purple', 'pink', 'indigo', 'gray'];
    
    colors.forEach(color => {
      const spinnerContainer = document.createElement('div');
      spinnerContainer.style.textAlign = 'center';
      
      const label = document.createElement('div');
      label.textContent = color.charAt(0).toUpperCase() + color.slice(1);
      label.style.marginBottom = '10px';
      label.style.fontWeight = 'bold';
      label.style.color = '#374151';
      
      spinnerContainer.appendChild(label);
      
      const spinner = new Spinner({ ...args, color });
      spinner.mount(spinnerContainer);
      
      container.appendChild(spinnerContainer);
    });
    
    return container;
  }
};

// Spinner con diferentes posiciones de texto
export const TextPositions = {
  args: {
    size: 'md',
    variant: 'default',
    color: 'blue',
    text: 'Cargando...'
  },
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.gap = '40px';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    
    const positions = ['top', 'bottom', 'left', 'right'];
    
    positions.forEach(position => {
      const spinnerContainer = document.createElement('div');
      spinnerContainer.style.textAlign = 'center';
      
      const label = document.createElement('div');
      label.textContent = position.charAt(0).toUpperCase() + position.slice(1);
      label.style.marginBottom = '10px';
      label.style.fontWeight = 'bold';
      label.style.color = '#374151';
      
      spinnerContainer.appendChild(label);
      
      const spinner = new Spinner({ ...args, textPosition: position });
      spinner.mount(spinnerContainer);
      
      container.appendChild(spinnerContainer);
    });
    
    return container;
  }
};

// Spinner de puntos
export const Dots = {
  args: {
    size: 'md',
    variant: 'dots',
    color: 'blue',
    text: 'Sincronizando...',
    textPosition: 'bottom'
  },
  render: (args) => {
    const spinner = Spinner.dots(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    
    spinner.mount(container);
    return container;
  }
};

// Spinner de barras
export const Bars = {
  args: {
    size: 'md',
    variant: 'bars',
    color: 'green',
    text: 'Procesando...',
    textPosition: 'bottom'
  },
  render: (args) => {
    const spinner = Spinner.bars(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    
    spinner.mount(container);
    return container;
  }
};

// Spinner de pulso
export const Pulse = {
  args: {
    size: 'md',
    variant: 'pulse',
    color: 'purple',
    text: 'Esperando...',
    textPosition: 'bottom'
  },
  render: (args) => {
    const spinner = Spinner.pulse(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    
    spinner.mount(container);
    return container;
  }
};

// Spinner de anillo
export const Ring = {
  args: {
    size: 'md',
    variant: 'ring',
    color: 'indigo',
    text: 'Conectando...',
    textPosition: 'bottom'
  },
  render: (args) => {
    const spinner = Spinner.ring(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    
    spinner.mount(container);
    return container;
  }
};

// Spinner de carga estándar
export const Loading = {
  args: {
    size: 'md',
    color: 'blue',
    text: 'Cargando...',
    textPosition: 'bottom'
  },
  render: (args) => {
    const spinner = Spinner.loading(args.text, args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    
    spinner.mount(container);
    return container;
  }
};

// Spinner de procesamiento
export const Processing = {
  args: {
    size: 'md',
    color: 'green',
    text: 'Procesando...',
    textPosition: 'bottom'
  },
  render: (args) => {
    const spinner = Spinner.processing(args.text, args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    
    spinner.mount(container);
    return container;
  }
};

// Spinner de sincronización
export const Syncing = {
  args: {
    size: 'md',
    color: 'blue',
    text: 'Sincronizando...',
    textPosition: 'bottom'
  },
  render: (args) => {
    const spinner = Spinner.syncing(args.text, args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    
    spinner.mount(container);
    return container;
  }
};

// Spinner pequeño
export const Small = {
  args: {
    size: 'sm',
    variant: 'default',
    color: 'blue',
    text: 'Cargando...',
    textPosition: 'bottom'
  },
  render: (args) => {
    const spinner = new Spinner(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    
    spinner.mount(container);
    return container;
  }
};

// Spinner grande
export const Large = {
  args: {
    size: 'lg',
    variant: 'default',
    color: 'blue',
    text: 'Cargando...',
    textPosition: 'bottom'
  },
  render: (args) => {
    const spinner = new Spinner(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    
    spinner.mount(container);
    return container;
  }
};

// Spinner extra grande
export const ExtraLarge = {
  args: {
    size: 'xl',
    variant: 'default',
    color: 'blue',
    text: 'Cargando...',
    textPosition: 'bottom'
  },
  render: (args) => {
    const spinner = new Spinner(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    
    spinner.mount(container);
    return container;
  }
};

// Spinner con texto a la izquierda
export const TextLeft = {
  args: {
    size: 'md',
    variant: 'default',
    color: 'blue',
    text: 'Cargando datos...',
    textPosition: 'left'
  },
  render: (args) => {
    const spinner = new Spinner(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    
    spinner.mount(container);
    return container;
  }
};

// Spinner con texto a la derecha
export const TextRight = {
  args: {
    size: 'md',
    variant: 'default',
    color: 'blue',
    text: 'Cargando datos...',
    textPosition: 'right'
  },
  render: (args) => {
    const spinner = new Spinner(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    
    spinner.mount(container);
    return container;
  }
};

// Spinner con texto arriba
export const TextTop = {
  args: {
    size: 'md',
    variant: 'default',
    color: 'blue',
    text: 'Cargando datos...',
    textPosition: 'top'
  },
  render: (args) => {
    const spinner = new Spinner(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    
    spinner.mount(container);
    return container;
  }
};

// Galería de spinners
export const Gallery = {
  args: {
    text: 'Cargando...',
    textPosition: 'bottom'
  },
  render: (args) => {
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.gap = '40px';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '300px';
    
    const variants = ['default', 'dots', 'bars', 'pulse', 'ring'];
    const sizes = ['sm', 'md', 'lg'];
    const colors = ['blue', 'green', 'red', 'purple'];
    
    variants.forEach(variant => {
      const variantContainer = document.createElement('div');
      variantContainer.style.textAlign = 'center';
      variantContainer.style.marginBottom = '20px';
      
      const variantLabel = document.createElement('h3');
      variantLabel.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
      variantLabel.style.marginBottom = '20px';
      variantLabel.style.color = '#374151';
      variantLabel.style.fontSize = '18px';
      variantLabel.style.fontWeight = 'bold';
      
      variantContainer.appendChild(variantLabel);
      
      const sizesContainer = document.createElement('div');
      sizesContainer.style.display = 'flex';
      sizesContainer.style.gap = '20px';
      sizesContainer.style.justifyContent = 'center';
      sizesContainer.style.flexWrap = 'wrap';
      
      sizes.forEach(size => {
        const sizeContainer = document.createElement('div');
        sizeContainer.style.textAlign = 'center';
        
        const sizeLabel = document.createElement('div');
        sizeLabel.textContent = size.toUpperCase();
        sizeLabel.style.marginBottom = '10px';
        sizeLabel.style.fontWeight = 'bold';
        sizeLabel.style.color = '#6b7280';
        
        sizeContainer.appendChild(sizeLabel);
        
        const spinner = new Spinner({ ...args, variant, size, color: colors[Math.floor(Math.random() * colors.length)] });
        spinner.mount(sizeContainer);
        
        sizesContainer.appendChild(sizeContainer);
      });
      
      variantContainer.appendChild(sizesContainer);
      container.appendChild(variantContainer);
    });
    
    return container;
  }
};

// Spinner interactivo
export const Interactive = {
  args: {
    size: 'md',
    variant: 'default',
    color: 'blue',
    text: 'Cargando...',
    textPosition: 'bottom'
  },
  render: (args) => {
    const spinner = new Spinner(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style.minHeight = '300px';
    
    // Controles interactivos
    const controls = document.createElement('div');
    controls.style.marginBottom = '30px';
    controls.style.display = 'flex';
    controls.style.gap = '15px';
    controls.style.flexWrap = 'wrap';
    controls.style.justifyContent = 'center';
    controls.style.alignItems = 'center';
    
    const variantSelect = document.createElement('select');
    variantSelect.className = 'px-3 py-1 border rounded';
    ['default', 'dots', 'bars', 'pulse', 'ring'].forEach(variant => {
      const option = document.createElement('option');
      option.value = variant;
      option.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
      option.selected = variant === args.variant;
      variantSelect.appendChild(option);
    });
    variantSelect.onchange = (e) => {
      args.variant = e.target.value;
      spinner.setVariant(e.target.value);
    };
    
    const sizeSelect = document.createElement('select');
    sizeSelect.className = 'px-3 py-1 border rounded';
    ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
      const option = document.createElement('option');
      option.value = size;
      option.textContent = size.toUpperCase();
      option.selected = size === args.size;
      sizeSelect.appendChild(option);
    });
    sizeSelect.onchange = (e) => {
      args.size = e.target.value;
      spinner.setSize(e.target.value);
    };
    
    const colorSelect = document.createElement('select');
    colorSelect.className = 'px-3 py-1 border rounded';
    ['blue', 'green', 'red', 'yellow', 'purple', 'pink', 'indigo', 'gray'].forEach(color => {
      const option = document.createElement('option');
      option.value = color;
      option.textContent = color.charAt(0).toUpperCase() + color.slice(1);
      option.selected = color === args.color;
      colorSelect.appendChild(option);
    });
    colorSelect.onchange = (e) => {
      args.color = e.target.value;
      spinner.setColor(e.target.value);
    };
    
    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.value = args.text;
    textInput.className = 'px-3 py-1 border rounded';
    textInput.placeholder = 'Texto del spinner';
    textInput.onchange = (e) => {
      args.text = e.target.value;
      spinner.setText(e.target.value);
    };
    
    const positionSelect = document.createElement('select');
    positionSelect.className = 'px-3 py-1 border rounded';
    ['top', 'bottom', 'left', 'right'].forEach(position => {
      const option = document.createElement('option');
      option.value = position;
      option.textContent = position.charAt(0).toUpperCase() + position.slice(1);
      option.selected = position === args.textPosition;
      positionSelect.appendChild(option);
    });
    positionSelect.onchange = (e) => {
      args.textPosition = e.target.value;
      spinner.setTextPosition(e.target.value);
    };
    
    controls.appendChild(document.createElement('label')).textContent = 'Variante:';
    controls.appendChild(variantSelect);
    controls.appendChild(document.createElement('label')).textContent = 'Tamaño:';
    controls.appendChild(sizeSelect);
    controls.appendChild(document.createElement('label')).textContent = 'Color:';
    controls.appendChild(colorSelect);
    controls.appendChild(document.createElement('label')).textContent = 'Texto:';
    controls.appendChild(textInput);
    controls.appendChild(document.createElement('label')).textContent = 'Posición:';
    controls.appendChild(positionSelect);
    
    container.appendChild(controls);
    
    // Spinner
    const spinnerContainer = document.createElement('div');
    spinnerContainer.style.display = 'flex';
    spinnerContainer.style.justifyContent = 'center';
    spinnerContainer.style.alignItems = 'center';
    spinnerContainer.style.minHeight = '200px';
    
    spinner.mount(spinnerContainer);
    container.appendChild(spinnerContainer);
    
    return container;
  }
};
