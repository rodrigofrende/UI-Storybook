import Progress from './Progress.js';

export default {
  title: 'Components/DataDisplay/Progress',
  component: Progress,
  parameters: {
    docs: {
      description: {
        component: 'Un componente de barra de progreso versátil con variantes lineales y circulares, múltiples colores y estados animados.'
      }
    }
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Valor actual del progreso (0-100)'
    },
    max: {
      control: { type: 'number', min: 1, max: 1000 },
      description: 'Valor máximo del progreso'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del componente'
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'striped', 'animated', 'circular'],
      description: 'Variante visual del progreso'
    },
    color: {
      control: { type: 'select' },
      options: ['blue', 'green', 'red', 'yellow', 'purple', 'pink', 'indigo', 'gray'],
      description: 'Color del progreso'
    },
    showValue: {
      control: 'boolean',
      description: 'Mostrar el valor numérico'
    },
    showLabel: {
      control: 'boolean',
      description: 'Mostrar etiqueta personalizada'
    },
    label: {
      control: 'text',
      description: 'Texto de la etiqueta'
    },
    thickness: {
      control: { type: 'select' },
      options: ['thin', 'md', 'thick'],
      description: 'Grosor de la barra de progreso'
    }
  }
};

// Progreso lineal básico
export const Linear = {
  args: {
    value: 75,
    max: 100,
    size: 'md',
    variant: 'default',
    color: 'blue',
    showValue: true,
    showLabel: false,
    thickness: 'md'
  },
  render: (args) => {
    const progress = new Progress(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    progress.mount(container);
    return container;
  }
};

// Progreso con etiqueta
export const WithLabel = {
  args: {
    value: 60,
    max: 100,
    size: 'md',
    variant: 'default',
    color: 'green',
    showValue: true,
    showLabel: true,
    label: 'Completado',
    thickness: 'md'
  },
  render: (args) => {
    const progress = new Progress(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    progress.mount(container);
    return container;
  }
};

// Progreso rayado
export const Striped = {
  args: {
    value: 45,
    max: 100,
    size: 'md',
    variant: 'striped',
    color: 'purple',
    showValue: true,
    showLabel: false,
    thickness: 'thick'
  },
  render: (args) => {
    const progress = new Progress(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    progress.mount(container);
    return container;
  }
};

// Progreso animado
export const Animated = {
  args: {
    value: 80,
    max: 100,
    size: 'md',
    variant: 'animated',
    color: 'indigo',
    showValue: true,
    showLabel: false,
    thickness: 'md'
  },
  render: (args) => {
    const progress = new Progress(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    progress.mount(container);
    return container;
  }
};

// Progreso circular
export const Circular = {
  args: {
    value: 65,
    max: 100,
    size: 'lg',
    variant: 'circular',
    color: 'red',
    showValue: true,
    showLabel: true,
    label: 'Progreso',
    thickness: 'md'
  },
  render: (args) => {
    const progress = new Progress(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.textAlign = 'center';
    progress.mount(container);
    return container;
  }
};

// Progreso pequeño
export const Small = {
  args: {
    value: 30,
    max: 100,
    size: 'sm',
    variant: 'default',
    color: 'yellow',
    showValue: true,
    showLabel: false,
    thickness: 'thin'
  },
  render: (args) => {
    const progress = new Progress(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    progress.mount(container);
    return container;
  }
};

// Progreso grande
export const Large = {
  args: {
    value: 90,
    max: 100,
    size: 'lg',
    variant: 'default',
    color: 'pink',
    showValue: true,
    showLabel: true,
    label: 'Casi completo',
    thickness: 'thick'
  },
  render: (args) => {
    const progress = new Progress(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    progress.mount(container);
    return container;
  }
};

// Galería de colores
export const ColorVariants = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const colors = ['blue', 'green', 'red', 'yellow', 'purple', 'pink', 'indigo', 'gray'];
    const values = [25, 40, 55, 70, 85, 95, 60, 35];
    
    colors.forEach((color, index) => {
      const progressContainer = document.createElement('div');
      progressContainer.style.marginBottom = '20px';
      
      const label = document.createElement('div');
      label.textContent = color.charAt(0).toUpperCase() + color.slice(1);
      label.style.marginBottom = '8px';
      label.style.fontWeight = 'bold';
      progressContainer.appendChild(label);
      
      const progress = new Progress({
        value: values[index],
        max: 100,
        size: 'md',
        variant: 'default',
        color: color,
        showValue: true,
        showLabel: false,
        thickness: 'md'
      });
      
      progress.mount(progressContainer);
      container.appendChild(progressContainer);
    });
    
    return container;
  }
};

// Progreso interactivo
export const Interactive = {
  args: {
    value: 50,
    max: 100,
    size: 'md',
    variant: 'default',
    color: 'blue',
    showValue: true,
    showLabel: true,
    label: 'Progreso Interactivo',
    thickness: 'md'
  },
  render: (args) => {
    const progress = new Progress(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    
    // Controles interactivos
    const controls = document.createElement('div');
    controls.style.marginBottom = '20px';
    controls.style.display = 'flex';
    controls.style.gap = '10px';
    controls.style.flexWrap = 'wrap';
    
    const incrementBtn = document.createElement('button');
    incrementBtn.textContent = '+10';
    incrementBtn.className = 'px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600';
    incrementBtn.onclick = () => progress.increment(10);
    
    const decrementBtn = document.createElement('button');
    decrementBtn.textContent = '-10';
    decrementBtn.className = 'px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600';
    decrementBtn.onclick = () => progress.decrement(10);
    
    const animateBtn = document.createElement('button');
    animateBtn.textContent = 'Animar a 100%';
    animateBtn.className = 'px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600';
    animateBtn.onclick = () => progress.animateTo(100, 2000);
    
    controls.appendChild(incrementBtn);
    controls.appendChild(decrementBtn);
    controls.appendChild(animateBtn);
    
    container.appendChild(controls);
    progress.mount(container);
    
    return container;
  }
};
