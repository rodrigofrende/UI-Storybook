export default {
  title: 'Components/Button',
  parameters: {
    docs: {
      description: {
        component: 'Un botón reutilizable con diferentes variantes y estados.'
      }
    }
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Texto del botón',
      defaultValue: 'Click me'
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: 'Variante del botón',
      defaultValue: 'primary'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del botón',
      defaultValue: 'md'
    },
    disabled: {
      control: 'boolean',
      description: 'Estado deshabilitado',
      defaultValue: false
    }
  }
};

export const Primary = {
  args: {
    text: 'Primary Button',
    variant: 'primary',
    size: 'md',
    disabled: false
  },
  render: (args) => {
    const button = document.createElement('button');
    button.textContent = args.text;
    button.className = getButtonClasses(args.variant, args.size, args.disabled);
    button.disabled = args.disabled;
    
    if (!args.disabled) {
      button.addEventListener('click', () => {
        console.log('Button clicked!');
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
          button.style.transform = 'scale(1)';
        }, 150);
      });
    }
    
    return button;
  }
};

export const Secondary = {
  args: {
    text: 'Secondary Button',
    variant: 'secondary',
    size: 'md',
    disabled: false
  },
  render: Primary.render
};

export const Outline = {
  args: {
    text: 'Outline Button',
    variant: 'outline',
    size: 'md',
    disabled: false
  },
  render: Primary.render
};

export const Ghost = {
  args: {
    text: 'Ghost Button',
    variant: 'ghost',
    size: 'md',
    disabled: false
  },
  render: Primary.render
};

export const Small = {
  args: {
    text: 'Small Button',
    variant: 'primary',
    size: 'sm',
    disabled: false
  },
  render: Primary.render
};

export const Large = {
  args: {
    text: 'Large Button',
    variant: 'primary',
    size: 'lg',
    disabled: false
  },
  render: Primary.render
};

export const Disabled = {
  args: {
    text: 'Disabled Button',
    variant: 'primary',
    size: 'md',
    disabled: true
  },
  render: Primary.render
};

function getButtonClasses(variant, size, disabled) {
  const baseClasses = 'font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-200';
  
  const variantClasses = {
    primary: 'bg-light-blue text-white hover:bg-blue-600 focus:ring-blue-500',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500',
    outline: 'border-2 border-light-blue text-light-blue hover:bg-light-blue hover:text-white focus:ring-light-blue',
    ghost: 'text-light-blue hover:bg-blue-100 focus:ring-blue-500'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses}`;
}
