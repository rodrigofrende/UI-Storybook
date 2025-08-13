export default class Input {
  constructor(options = {}) {
    this.options = {
      type: 'text',
      placeholder: 'Input',
      value: '',
      label: '',
      required: false,
      disabled: false,
      error: '',
      icon: null,
      onChange: null,
      onFocus: null,
      onBlur: null,
      className: '',
      ...options
    };
    
    this.element = this.createInput();
    this.bindEvents();
  }

  createInput() {
    const container = document.createElement('div');
    container.className = 'relative';

    // Create label if provided
    if (this.options.label) {
      const label = document.createElement('label');
      label.className = 'block text-sm font-medium text-gray-700 mb-1';
      label.textContent = this.options.label;
      container.appendChild(label);
    }

    // Create input wrapper
    const inputWrapper = document.createElement('div');
    inputWrapper.className = 'relative';

    // Create input element
    const input = document.createElement('input');
    input.type = this.options.type;
    input.placeholder = this.options.placeholder;
    input.value = this.options.value;
    input.required = this.options.required;
    input.disabled = this.options.disabled;

    // Base classes
    const baseClasses = [
      'w-full px-4 py-2 border border-gray-300 rounded-lg',
      'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
      'transition-all duration-200',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'placeholder-gray-400'
    ];

    // Add error state classes
    if (this.options.error) {
      baseClasses.push('border-red-500 focus:ring-red-500');
    }

    input.className = [...baseClasses, this.options.className].join(' ');

    // Add icon if provided
    if (this.options.icon) {
      const icon = document.createElement('span');
      icon.className = 'absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400';
      icon.innerHTML = this.options.icon;
      inputWrapper.appendChild(icon);
      
      // Adjust input padding for icon
      input.className += ' pl-10';
    }

    inputWrapper.appendChild(input);

    // Create error message if provided
    if (this.options.error) {
      const error = document.createElement('p');
      error.className = 'mt-1 text-sm text-red-600';
      error.textContent = this.options.error;
      container.appendChild(error);
    }

    container.appendChild(inputWrapper);
    this.inputElement = input;
    
    return container;
  }

  bindEvents() {
    if (this.options.onChange) {
      this.inputElement.addEventListener('input', this.options.onChange);
    }
    if (this.options.onFocus) {
      this.inputElement.addEventListener('focus', this.options.onFocus);
    }
    if (this.options.onBlur) {
      this.inputElement.addEventListener('blur', this.options.onBlur);
    }
  }

  // Public methods
  getValue() {
    return this.inputElement.value;
  }

  setValue(value) {
    this.inputElement.value = value;
  }

  setError(error) {
    this.options.error = error;
    this.updateErrorDisplay();
  }

  clearError() {
    this.options.error = '';
    this.updateErrorDisplay();
  }

  setDisabled(disabled) {
    this.options.disabled = disabled;
    this.inputElement.disabled = disabled;
  }

  updateErrorDisplay() {
    const existingError = this.element.querySelector('.text-red-600');
    if (existingError) {
      existingError.remove();
    }

    if (this.options.error) {
      const error = document.createElement('p');
      error.className = 'mt-1 text-sm text-red-600';
      error.textContent = this.options.error;
      this.element.appendChild(error);
      
      // Update input border
      this.inputElement.className = this.inputElement.className.replace(
        /border-\w+-\d+/g, 'border-red-500'
      );
    } else {
      // Reset input border
      this.inputElement.className = this.inputElement.className.replace(
        /border-red-500/g, 'border-gray-300'
      );
    }
  }

  // Validation methods
  validate() {
    if (this.options.required && !this.inputElement.value.trim()) {
      this.setError('This field is required');
      return false;
    }
    this.clearError();
    return true;
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
    if (this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
  }
}
