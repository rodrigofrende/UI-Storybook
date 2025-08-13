import Button from './Button.js';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Un componente de botón versátil con múltiples variantes, tamaños y estados.'
      }
    }
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Texto del botón'
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: 'Variante visual del botón'
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del botón'
    },
    disabled: {
      control: 'boolean',
      description: 'Estado deshabilitado'
    },
    loading: {
      control: 'boolean',
      description: 'Estado de carga'
    },
    icon: {
      control: 'text',
      description: 'Icono SVG del botón'
    },
    onClick: {
      action: 'clicked',
      description: 'Función llamada al hacer clic'
    }
  }
};

// Botón primario por defecto
export const Primary = {
  args: {
    text: 'Botón Primario',
    variant: 'primary',
    size: 'medium',
    disabled: false,
    loading: false
  },
  render: (args) => {
    const button = new Button(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    button.render(container);
    return container;
  }
};

// Botón secundario
export const Secondary = {
  args: {
    text: 'Botón Secundario',
    variant: 'secondary',
    size: 'medium',
    disabled: false
  },
  render: (args) => {
    const button = new Button(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    button.render(container);
    return container;
  }
};

// Botón outline
export const Outline = {
  args: {
    text: 'Botón Outline',
    variant: 'outline',
    size: 'medium',
    disabled: false
  },
  render: (args) => {
    const button = new Button(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    button.render(container);
    return container;
  }
};

// Botón ghost
export const Ghost = {
  args: {
    text: 'Botón Ghost',
    variant: 'ghost',
    size: 'medium',
    disabled: false
  },
  render: (args) => {
    const button = new Button(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    button.render(container);
    return container;
  }
};

// Botón pequeño
export const Small = {
  args: {
    text: 'Botón Pequeño',
    variant: 'primary',
    size: 'small',
    disabled: false
  },
  render: (args) => {
    const button = new Button(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    button.render(container);
    return container;
  }
};

// Botón grande
export const Large = {
  args: {
    text: 'Botón Grande',
    variant: 'primary',
    size: 'large',
    disabled: false
  },
  render: (args) => {
    const button = new Button(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    button.render(container);
    return container;
  }
};

// Botón deshabilitado
export const Disabled = {
  args: {
    text: 'Botón Deshabilitado',
    variant: 'primary',
    size: 'medium',
    disabled: true
  },
  render: (args) => {
    const button = new Button(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    button.render(container);
    return container;
  }
};

// Botón con estado de carga
export const Loading = {
  args: {
    text: 'Cargando...',
    variant: 'primary',
    size: 'medium',
    loading: true
  },
  render: (args) => {
    const button = new Button(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    button.render(container);
    return container;
  }
};

// Botón con icono
export const WithIcon = {
  args: {
    text: 'Botón con Icono',
    variant: 'primary',
    size: 'medium',
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>'
  },
  render: (args) => {
    const button = new Button(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    button.render(container);
    return container;
  }
};

// Galería de todos los botones
export const AllVariants = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const variants = ['primary', 'secondary', 'outline', 'ghost'];
    const sizes = ['small', 'medium', 'large'];
    
    variants.forEach(variant => {
      const variantContainer = document.createElement('div');
      variantContainer.style.marginBottom = '20px';
      
      const title = document.createElement('h3');
      title.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
      title.style.marginBottom = '10px';
      title.style.fontWeight = 'bold';
      variantContainer.appendChild(title);
      
      const buttonContainer = document.createElement('div');
      buttonContainer.style.display = 'flex';
      buttonContainer.style.gap = '10px';
      buttonContainer.style.alignItems = 'center';
      
      sizes.forEach(size => {
        const button = new Button({
          text: size.charAt(0).toUpperCase() + size.slice(1),
          variant,
          size,
          onClick: () => console.log(`${variant} ${size} clicked`)
        });
        button.render(buttonContainer);
      });
      
      variantContainer.appendChild(buttonContainer);
      container.appendChild(variantContainer);
    });
    
    return container;
  }
};
