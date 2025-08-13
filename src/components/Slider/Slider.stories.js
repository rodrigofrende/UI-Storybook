import Slider from './Slider.js';

export default {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    docs: {
      description: {
        component: 'Un componente de control deslizante versátil con múltiples tamaños, colores y rangos personalizables.'
      }
    }
  },
  argTypes: {
    min: {
      control: { type: 'number', min: -100, max: 0 },
      description: 'Valor mínimo del slider'
    },
    max: {
      control: { type: 'number', min: 1, max: 200 },
      description: 'Valor máximo del slider'
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Valor actual del slider'
    },
    step: {
      control: { type: 'number', min: 0.1, max: 10, step: 0.1 },
      description: 'Incremento del slider'
    },
    disabled: {
      control: 'boolean',
      description: 'Si el slider está deshabilitado'
    },
    showValue: {
      control: 'boolean',
      description: 'Si mostrar el valor numérico'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del slider'
    },
    color: {
      control: { type: 'select' },
      options: ['blue', 'green', 'red', 'purple', 'orange'],
      description: 'Color del slider'
    }
  }
};

// Slider básico
export const Basic = {
  args: {
    min: 0,
    max: 100,
    value: 50,
    step: 1,
    disabled: false,
    showValue: true,
    size: 'md',
    color: 'blue'
  },
  render: (args) => {
    const slider = new Slider(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    slider.mount(container);
    return container;
  }
};

// Slider con valor alto
export const HighValue = {
  args: {
    min: 0,
    max: 100,
    value: 80,
    step: 1,
    disabled: false,
    showValue: true,
    size: 'md',
    color: 'blue'
  },
  render: (args) => {
    const slider = new Slider(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    slider.mount(container);
    return container;
  }
};

// Slider con valor bajo
export const LowValue = {
  args: {
    min: 0,
    max: 100,
    value: 20,
    step: 1,
    disabled: false,
    showValue: true,
    size: 'md',
    color: 'blue'
  },
  render: (args) => {
    const slider = new Slider(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    slider.mount(container);
    return container;
  }
};

// Slider pequeño
export const Small = {
  args: {
    min: 0,
    max: 100,
    value: 60,
    step: 1,
    disabled: false,
    showValue: true,
    size: 'sm',
    color: 'green'
  },
  render: (args) => {
    const slider = new Slider(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    slider.mount(container);
    return container;
  }
};

// Slider grande
export const Large = {
  args: {
    min: 0,
    max: 100,
    value: 40,
    step: 1,
    disabled: false,
    showValue: true,
    size: 'lg',
    color: 'purple'
  },
  render: (args) => {
    const slider = new Slider(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    slider.mount(container);
    return container;
  }
};

// Slider deshabilitado
export const Disabled = {
  args: {
    min: 0,
    max: 100,
    value: 50,
    step: 1,
    disabled: true,
    showValue: true,
    size: 'md',
    color: 'blue'
  },
  render: (args) => {
    const slider = new Slider(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    slider.mount(container);
    return container;
  }
};

// Slider sin valor visible
export const NoValue = {
  args: {
    min: 0,
    max: 100,
    value: 70,
    step: 1,
    disabled: false,
    showValue: false,
    size: 'md',
    color: 'red'
  },
  render: (args) => {
    const slider = new Slider(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    slider.mount(container);
    return container;
  }
};

// Slider con paso personalizado
export const CustomStep = {
  args: {
    min: 0,
    max: 100,
    value: 25,
    step: 5,
    disabled: false,
    showValue: true,
    size: 'md',
    color: 'orange'
  },
  render: (args) => {
    const slider = new Slider(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    slider.mount(container);
    return container;
  }
};

// Slider con rango personalizado
export const CustomRange = {
  args: {
    min: -50,
    max: 50,
    value: 0,
    step: 1,
    disabled: false,
    showValue: true,
    size: 'md',
    color: 'blue'
  },
  render: (args) => {
    const slider = new Slider(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    slider.mount(container);
    return container;
  }
};

// Slider verde
export const Green = {
  args: {
    min: 0,
    max: 100,
    value: 65,
    step: 1,
    disabled: false,
    showValue: true,
    size: 'md',
    color: 'green'
  },
  render: (args) => {
    const slider = new Slider(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    slider.mount(container);
    return container;
  }
};

// Slider rojo
export const Red = {
  args: {
    min: 0,
    max: 100,
    value: 35,
    step: 1,
    disabled: false,
    showValue: true,
    size: 'md',
    color: 'red'
  },
  render: (args) => {
    const slider = new Slider(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    slider.mount(container);
    return container;
  }
};

// Slider púrpura
export const Purple = {
  args: {
    min: 0,
    max: 100,
    value: 85,
    step: 1,
    disabled: false,
    showValue: true,
    size: 'md',
    color: 'purple'
  },
  render: (args) => {
    const slider = new Slider(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    slider.mount(container);
    return container;
  }
};

// Slider naranja
export const Orange = {
  args: {
    min: 0,
    max: 100,
    value: 15,
    step: 1,
    disabled: false,
    showValue: true,
    size: 'md',
    color: 'orange'
  },
  render: (args) => {
    const slider = new Slider(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    slider.mount(container);
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
      const sliderContainer = document.createElement('div');
      sliderContainer.style.marginBottom = '20px';
      
      const title = document.createElement('div');
      title.textContent = sizeNames[index];
      title.style.marginBottom = '10px';
      title.style.fontWeight = 'bold';
      sliderContainer.appendChild(title);
      
      const slider = new Slider({
        min: 0,
        max: 100,
        value: 30 + (index * 20),
        step: 1,
        disabled: false,
        showValue: true,
        size: size,
        color: 'blue'
      });
      
      slider.mount(sliderContainer);
      container.appendChild(sliderContainer);
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
      const sliderContainer = document.createElement('div');
      sliderContainer.style.marginBottom = '20px';
      
      const title = document.createElement('div');
      title.textContent = colorNames[index];
      title.style.marginBottom = '10px';
      title.style.fontWeight = 'bold';
      sliderContainer.appendChild(title);
      
      const slider = new Slider({
        min: 0,
        max: 100,
        value: 20 + (index * 15),
        step: 1,
        disabled: false,
        showValue: true,
        size: 'md',
        color: color
      });
      
      slider.mount(sliderContainer);
      container.appendChild(sliderContainer);
    });
    
    return container;
  }
};

// Slider interactivo
export const Interactive = {
  args: {
    min: 0,
    max: 100,
    value: 50,
    step: 1,
    disabled: false,
    showValue: true,
    size: 'md',
    color: 'blue'
  },
  render: (args) => {
    const slider = new Slider(args);
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
    colorSelect.onchange = (e) => slider.setColor(e.target.value);
    
    const sizeSelect = document.createElement('select');
    sizeSelect.className = 'px-3 py-1 border rounded';
    ['sm', 'md', 'lg'].forEach(size => {
      const option = document.createElement('option');
      option.value = size;
      option.textContent = size.toUpperCase();
      option.selected = size === 'md';
      sizeSelect.appendChild(option);
    });
    sizeSelect.onchange = (e) => slider.setSize(e.target.value);
    
    const stepSelect = document.createElement('select');
    stepSelect.className = 'px-3 py-1 border rounded';
    [0.1, 0.5, 1, 2, 5, 10].forEach(step => {
      const option = document.createElement('option');
      option.value = step;
      option.textContent = step;
      option.selected = step === 1;
      stepSelect.appendChild(option);
    });
    stepSelect.onchange = (e) => slider.setStep(parseFloat(e.target.value));
    
    const disableBtn = document.createElement('button');
    disableBtn.textContent = 'Toggle Disabled';
    disableBtn.className = 'px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600';
    disableBtn.onclick = () => {
      if (slider.options.disabled) {
        slider.enable();
        disableBtn.textContent = 'Disable';
        disableBtn.className = 'px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600';
      } else {
        slider.disable();
        disableBtn.textContent = 'Enable';
        disableBtn.className = 'px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600';
      }
    };
    
    controls.appendChild(colorSelect);
    controls.appendChild(sizeSelect);
    controls.appendChild(stepSelect);
    controls.appendChild(disableBtn);
    
    container.appendChild(controls);
    slider.mount(container);
    
    return container;
  }
};
