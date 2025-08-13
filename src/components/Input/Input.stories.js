export default {
  title: 'Components/Input',
  parameters: {
    docs: {
      description: {
        component: 'Un campo de entrada de texto reutilizable con diferentes variantes y estados.'
      }
    }
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Texto de placeholder',
      defaultValue: 'Enter text...'
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'Tipo de input',
      defaultValue: 'text'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del input',
      defaultValue: 'md'
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline', 'filled'],
      description: 'Variante del input',
      defaultValue: 'default'
    },
    disabled: {
      control: 'boolean',
      description: 'Estado deshabilitado',
      defaultValue: false
    },
    error: {
      control: 'boolean',
      description: 'Estado de error',
      defaultValue: false
    },
    helperText: {
      control: 'text',
      description: 'Texto de ayuda',
      defaultValue: ''
    }
  }
};

export const Default = {
  args: {
    placeholder: 'Enter text...',
    type: 'text',
    size: 'md',
    variant: 'default',
    disabled: false,
    error: false,
    helperText: ''
  },
  render: (args) => {
    const container = document.createElement('div');
    container.className = 'space-y-2';
    
    const input = document.createElement('input');
    input.type = args.type;
    input.placeholder = args.placeholder;
    input.className = getInputClasses(args.variant, args.size, args.disabled, args.error);
    input.disabled = args.disabled;
    
    if (args.helperText) {
      const helper = document.createElement('p');
      helper.className = getHelperClasses(args.error);
      helper.textContent = args.helperText;
      container.appendChild(helper);
    }
    
    container.insertBefore(input, container.firstChild);
    
    // Agregar funcionalidad de focus
    input.addEventListener('focus', () => {
      input.classList.add('ring-2', 'ring-light-blue', 'ring-opacity-50');
    });
    
    input.addEventListener('blur', () => {
      input.classList.remove('ring-2', 'ring-light-blue', 'ring-opacity-50');
    });
    
    return container;
  }
};

export const Outline = {
  args: {
    placeholder: 'Outline input...',
    type: 'text',
    size: 'md',
    variant: 'outline',
    disabled: false,
    error: false,
    helperText: 'This is an outline input'
  },
  render: Default.render
};

export const Filled = {
  args: {
    placeholder: 'Filled input...',
    type: 'text',
    size: 'md',
    variant: 'filled',
    disabled: false,
    error: false,
    helperText: 'This is a filled input'
  },
  render: Default.render
};

export const Small = {
  args: {
    placeholder: 'Small input...',
    type: 'text',
    size: 'sm',
    variant: 'default',
    disabled: false,
    error: false,
    helperText: 'Small size input'
  },
  render: Default.render
};

export const Large = {
  args: {
    placeholder: 'Large input...',
    type: 'text',
    size: 'lg',
    variant: 'default',
    disabled: false,
    error: false,
    helperText: 'Large size input'
  },
  render: Default.render
};

export const WithError = {
  args: {
    placeholder: 'Input with error...',
    type: 'text',
    size: 'md',
    variant: 'default',
    disabled: false,
    error: true,
    helperText: 'This field is required'
  },
  render: Default.render
};

export const Disabled = {
  args: {
    placeholder: 'Disabled input...',
    type: 'text',
    size: 'md',
    variant: 'default',
    disabled: true,
    error: false,
    helperText: 'This input is disabled'
  },
  render: Default.render
};

export const Email = {
  args: {
    placeholder: 'Enter your email...',
    type: 'email',
    size: 'md',
    variant: 'default',
    disabled: false,
    error: false,
    helperText: 'We\'ll never share your email'
  },
  render: Default.render
};

export const Password = {
  args: {
    placeholder: 'Enter your password...',
    type: 'password',
    size: 'md',
    variant: 'default',
    disabled: false,
    error: false,
    helperText: 'Password must be at least 8 characters'
  },
  render: Default.render
};

function getInputClasses(variant, size, disabled, error) {
  const baseClasses = 'w-full rounded-lg border transition-all duration-200 focus:outline-none';
  
  const variantClasses = {
    default: 'border-gray-300 bg-white',
    outline: 'border-2 border-light-blue bg-transparent',
    filled: 'border-gray-300 bg-gray-50'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg'
  };
  
  const stateClasses = disabled 
    ? 'opacity-50 cursor-not-allowed bg-gray-100' 
    : error 
      ? 'border-red-500 focus:border-red-500' 
      : 'focus:border-light-blue';
  
  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${stateClasses}`;
}

function getHelperClasses(error) {
  const baseClasses = 'text-sm';
  return error 
    ? `${baseClasses} text-red-600` 
    : `${baseClasses} text-gray-600`;
}
