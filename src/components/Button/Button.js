export default class Button {
  constructor(options = {}) {
    this.options = {
      text: 'Button',
      variant: 'primary', // primary, secondary, outline, ghost
      size: 'medium', // small, medium, large
      disabled: false,
      loading: false,
      icon: null,
      onClick: null,
      className: '',
      ...options
    };
    
    this.element = this.createButton();
    this.bindEvents();
  }

  createButton() {
    const button = document.createElement('button');
    
    // Base classes
    const baseClasses = [
      'font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50',
      'disabled:opacity-50 disabled:cursor-not-allowed'
    ];

    // Variant classes
    const variantClasses = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
      secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
      outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
      ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500'
    };

    // Size classes
    const sizeClasses = {
      small: 'px-3 py-1.5 text-sm rounded-md',
      medium: 'px-6 py-3 text-base rounded-lg',
      large: 'px-8 py-4 text-lg rounded-xl'
    };

    // Combine classes
    const allClasses = [
      ...baseClasses,
      variantClasses[this.options.variant] || variantClasses.primary,
      sizeClasses[this.options.size] || sizeClasses.medium,
      this.options.className
    ];

    button.className = allClasses.join(' ');
    button.textContent = this.options.text;
    button.disabled = this.options.disabled;

    // Add icon if provided
    if (this.options.icon) {
      const icon = document.createElement('span');
      icon.innerHTML = this.options.icon;
      icon.className = 'mr-2';
      button.insertBefore(icon, button.firstChild);
    }

    // Add loading state
    if (this.options.loading) {
      this.addLoadingState(button);
    }

    return button;
  }

  addLoadingState(button) {
    const spinner = document.createElement('div');
    spinner.className = 'inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2';
    button.insertBefore(spinner, button.firstChild);
    button.disabled = true;
  }

  bindEvents() {
    if (this.options.onClick) {
      this.element.addEventListener('click', (e) => {
        if (!this.options.disabled && !this.options.loading) {
          this.options.onClick(e);
        }
      });
    }
  }

  // Public methods
  setText(text) {
    this.options.text = text;
    this.element.textContent = text;
  }

  setVariant(variant) {
    this.options.variant = variant;
    this.element.className = this.element.className.replace(
      /bg-\w+-\d+|text-\w+-\d+|border-\w+-\d+/g, ''
    );
    const variantClasses = {
      primary: 'bg-blue-600 text-white',
      secondary: 'bg-gray-600 text-white',
      outline: 'border-2 border-blue-600 text-blue-600',
      ghost: 'text-blue-600'
    };
    this.element.className += ' ' + (variantClasses[variant] || variantClasses.primary);
  }

  setSize(size) {
    this.options.size = size;
    this.element.className = this.element.className.replace(
      /px-\d+|py-\d+|text-\w+|rounded-\w+/g, ''
    );
    const sizeClasses = {
      small: 'px-3 py-1.5 text-sm rounded-md',
      medium: 'px-6 py-3 text-base rounded-lg',
      large: 'px-8 py-4 text-lg rounded-xl'
    };
    this.element.className += ' ' + (sizeClasses[size] || sizeClasses.medium);
  }

  setDisabled(disabled) {
    this.options.disabled = disabled;
    this.element.disabled = disabled;
  }

  setLoading(loading) {
    this.options.loading = loading;
    if (loading) {
      this.addLoadingState(this.element);
    } else {
      const spinner = this.element.querySelector('.animate-spin');
      if (spinner) {
        spinner.remove();
      }
      this.element.disabled = false;
    }
  }

  // Render method
  render(container) {
    if (typeof container === 'string') {
      container = document.querySelector(container);
    }
    if (container) {
      container.appendChild(this.element);
    }
    return this.element;
  }

  // Destroy method
  destroy() {
    this.element.remove();
  }
}
