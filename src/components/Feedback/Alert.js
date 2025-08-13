export default class Alert {
  constructor(options = {}) {
    this.options = {
      type: 'info', // info, success, warning, error
      title: '',
      message: '',
      dismissible: true,
      autoDismiss: false,
      autoDismissDelay: 5000,
      icon: true,
      ...options
    };
    
    this.id = this.generateId();
    this.isVisible = true;
    this.autoDismissTimer = null;
  }

  generateId() {
    return 'alert-' + Math.random().toString(36).substr(2, 9);
  }

  render() {
    const typeClasses = this.getTypeClasses();
    const icon = this.options.icon ? this.getIcon() : '';
    
    return `
      <div 
        class="rounded-md p-4 ${typeClasses.background} ${typeClasses.border} transition-all duration-300 ${this.isVisible ? 'opacity-100' : 'opacity-0'}"
        id="${this.id}"
        role="alert"
        aria-live="assertive"
      >
        <div class="flex">
          ${icon ? `
            <div class="flex-shrink-0">
              ${icon}
            </div>
          ` : ''}
          
          <div class="ml-3 flex-1">
            ${this.options.title ? `
              <h3 class="text-sm font-medium ${typeClasses.titleColor}">
                ${this.options.title}
              </h3>
            ` : ''}
            
            ${this.options.message ? `
              <div class="mt-2 text-sm ${typeClasses.messageColor}">
                ${this.options.message}
              </div>
            ` : ''}
          </div>
          
          ${this.options.dismissible ? `
            <div class="ml-auto pl-3">
              <div class="-mx-1.5 -my-1.5">
                <button
                  type="button"
                  class="inline-flex rounded-md p-1.5 ${typeClasses.buttonBackground} ${typeClasses.buttonColor} hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-50 focus:ring-blue-600 transition-colors duration-200"
                  onclick="this.dismiss()"
                  aria-label="Dismiss alert"
                >
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  getTypeClasses() {
    const types = {
      info: {
        background: 'bg-blue-50',
        border: 'border border-blue-200',
        titleColor: 'text-blue-800',
        messageColor: 'text-blue-700',
        buttonBackground: 'bg-blue-50',
        buttonColor: 'text-blue-500'
      },
      success: {
        background: 'bg-green-50',
        border: 'border border-green-200',
        titleColor: 'text-green-800',
        messageColor: 'text-green-700',
        buttonBackground: 'bg-green-50',
        buttonColor: 'text-green-500'
      },
      warning: {
        background: 'bg-yellow-50',
        border: 'border border-yellow-200',
        titleColor: 'text-yellow-800',
        messageColor: 'text-yellow-700',
        buttonBackground: 'bg-yellow-50',
        buttonColor: 'text-yellow-500'
      },
      error: {
        background: 'bg-red-50',
        border: 'border border-red-200',
        titleColor: 'text-red-800',
        messageColor: 'text-red-700',
        buttonBackground: 'bg-red-50',
        buttonColor: 'text-red-500'
      }
    };
    
    return types[this.options.type] || types.info;
  }

  getIcon() {
    const icons = {
      info: `
        <svg class="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
        </svg>
      `,
      success: `
        <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
        </svg>
      `,
      warning: `
        <svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
        </svg>
      `,
      error: `
        <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
        </svg>
      `
    };
    
    return icons[this.options.type] || icons.info;
  }

  show() {
    this.isVisible = true;
    this.updateDisplay();
    
    if (this.options.autoDismiss) {
      this.startAutoDismiss();
    }
    
    this.triggerEvent('show');
  }

  hide() {
    this.isVisible = false;
    this.updateDisplay();
    
    if (this.autoDismissTimer) {
      clearTimeout(this.autoDismissTimer);
      this.autoDismissTimer = null;
    }
    
    this.triggerEvent('hide');
  }

  dismiss() {
    this.hide();
    
    // Remove from DOM after animation
    setTimeout(() => {
      const alert = document.getElementById(this.id);
      if (alert) {
        alert.remove();
      }
    }, 300);
    
    this.triggerEvent('dismiss');
  }

  startAutoDismiss() {
    if (this.autoDismissTimer) {
      clearTimeout(this.autoDismissTimer);
    }
    
    this.autoDismissTimer = setTimeout(() => {
      this.dismiss();
    }, this.options.autoDismissDelay);
  }

  setType(type) {
    this.options.type = type;
    this.updateDisplay();
  }

  setTitle(title) {
    this.options.title = title;
    this.updateDisplay();
  }

  setMessage(message) {
    this.options.message = message;
    this.updateDisplay();
  }

  setDismissible(dismissible) {
    this.options.dismissible = dismissible;
    this.updateDisplay();
  }

  setAutoDismiss(autoDismiss, delay = null) {
    this.options.autoDismiss = autoDismiss;
    if (delay !== null) {
      this.options.autoDismissDelay = delay;
    }
    
    if (autoDismiss && this.isVisible) {
      this.startAutoDismiss();
    } else if (this.autoDismissTimer) {
      clearTimeout(this.autoDismissTimer);
      this.autoDismissTimer = null;
    }
  }

  setIcon(showIcon) {
    this.options.icon = showIcon;
    this.updateDisplay();
  }

  updateDisplay() {
    const alert = document.getElementById(this.id);
    if (alert) {
      alert.outerHTML = this.render();
    }
  }

  triggerEvent(eventName, data = {}) {
    const event = new CustomEvent(`alert:${eventName}`, {
      detail: { alert: this, ...data },
      bubbles: true
    });
    document.dispatchEvent(event);
  }

  // Métodos para integración con frameworks
  mount(element) {
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }
    if (element) {
      element.innerHTML = this.render();
      this.attachEventListeners();
      
      if (this.options.autoDismiss) {
        this.startAutoDismiss();
      }
    }
  }

  attachEventListeners() {
    const dismissButton = document.querySelector(`#${this.id} button[onclick*="dismiss"]`);
    if (dismissButton) {
      dismissButton.addEventListener('click', () => this.dismiss());
    }
  }

  // Métodos estáticos para crear alerts comunes
  static info(message, title = 'Información') {
    return new Alert({ type: 'info', message, title });
  }

  static success(message, title = 'Éxito') {
    return new Alert({ type: 'success', message, title });
  }

  static warning(message, title = 'Advertencia') {
    return new Alert({ type: 'warning', message, title });
  }

  static error(message, title = 'Error') {
    return new Alert({ type: 'error', message, title });
  }

  // Método para mostrar un alert temporal
  static showTemporary(type, message, title = '', duration = 5000) {
    const alert = new Alert({
      type,
      message,
      title,
      autoDismiss: true,
      autoDismissDelay: duration
    });
    
    // Append to body
    document.body.insertAdjacentHTML('beforeend', alert.render());
    alert.show();
    
    return alert;
  }
}
