export default class Toast {
  constructor(options = {}) {
    this.options = {
      title: '',
      message: '',
      type: 'info', // info, success, warning, error
      duration: 5000,
      position: 'top-right', // top-right, top-left, bottom-right, bottom-left, top-center, bottom-center
      dismissible: true,
      showIcon: true,
      onClose: null,
      ...options
    };
    
    this.id = this.generateId();
    this.isVisible = false;
    this.timeout = null;
  }

  generateId() {
    return 'toast-' + Math.random().toString(36).substr(2, 9);
  }

  render() {
    const typeClasses = this.getTypeClasses();
    const positionClasses = this.getPositionClasses();
    const icon = this.options.showIcon ? this.getIcon() : '';
    
    return `
      <div 
        class="fixed z-50 ${positionClasses} ${this.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'} transition-all duration-300 ease-in-out"
        id="${this.id}"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div class="p-4">
            <div class="flex items-start">
              ${icon ? `
                <div class="flex-shrink-0">
                  ${icon}
                </div>
              ` : ''}
              
              <div class="ml-3 w-0 flex-1">
                ${this.options.title ? `
                  <p class="text-sm font-medium text-gray-900">
                    ${this.options.title}
                  </p>
                ` : ''}
                
                ${this.options.message ? `
                  <p class="mt-1 text-sm text-gray-500">
                    ${this.options.message}
                  </p>
                ` : ''}
              </div>
              
              ${this.options.dismissible ? `
                <div class="ml-4 flex-shrink-0 flex">
                  <button
                    type="button"
                    class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                    onclick="this.close()"
                    aria-label="Close toast"
                  >
                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                  </button>
                </div>
              ` : ''}
            </div>
          </div>
          
          ${this.options.duration > 0 ? `
            <div class="w-full bg-gray-200 h-1">
              <div class="h-full ${typeClasses.progress} transition-all duration-300 ease-linear" style="width: 100%"></div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  getTypeClasses() {
    const types = {
      info: {
        icon: 'text-blue-400',
        progress: 'bg-blue-500'
      },
      success: {
        icon: 'text-green-400',
        progress: 'bg-green-500'
      },
      warning: {
        icon: 'text-yellow-400',
        progress: 'bg-yellow-500'
      },
      error: {
        icon: 'text-red-400',
        progress: 'bg-red-500'
      }
    };
    
    return types[this.options.type] || types.info;
  }

  getPositionClasses() {
    const positions = {
      'top-right': 'top-4 right-4',
      'top-left': 'top-4 left-4',
      'bottom-right': 'bottom-4 right-4',
      'bottom-left': 'bottom-4 left-4',
      'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
      'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2'
    };
    
    return positions[this.options.position] || positions['top-right'];
  }

  getIcon() {
    const icons = {
      info: `
        <svg class="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      `,
      success: `
        <svg class="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      `,
      warning: `
        <svg class="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
        </svg>
      `,
      error: `
        <svg class="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      `
    };
    
    return icons[this.options.type] || icons.info;
  }

  show() {
    if (this.isVisible) return;
    
    this.isVisible = true;
    this.updateDisplay();
    
    // Start progress bar animation
    if (this.options.duration > 0) {
      this.startProgress();
    }
    
    // Auto-dismiss after duration
    if (this.options.duration > 0) {
      this.timeout = setTimeout(() => {
        this.close();
      }, this.options.duration);
    }
    
    this.triggerEvent('show');
  }

  hide() {
    if (!this.isVisible) return;
    
    this.isVisible = false;
    this.updateDisplay();
    
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
    
    this.triggerEvent('hide');
  }

  close() {
    this.hide();
    
    // Remove from DOM after animation
    setTimeout(() => {
      const toast = document.getElementById(this.id);
      if (toast) {
        toast.remove();
      }
    }, 300);
    
    // Trigger onClose callback
    if (typeof this.options.onClose === 'function') {
      this.options.onClose(this);
    }
    
    this.triggerEvent('close');
  }

  startProgress() {
    const progressBar = document.querySelector(`#${this.id} .bg-gray-200 div`);
    if (progressBar) {
      setTimeout(() => {
        progressBar.style.width = '0%';
      }, 100);
    }
  }

  setTitle(title) {
    this.options.title = title;
    this.updateDisplay();
  }

  setMessage(message) {
    this.options.message = message;
    this.updateDisplay();
  }

  setType(type) {
    this.options.type = type;
    this.updateDisplay();
  }

  setDuration(duration) {
    this.options.duration = duration;
  }

  setPosition(position) {
    this.options.position = position;
    this.updateDisplay();
  }

  setDismissible(dismissible) {
    this.options.dismissible = dismissible;
    this.updateDisplay();
  }

  setShowIcon(showIcon) {
    this.options.showIcon = showIcon;
    this.updateDisplay();
  }

  updateDisplay() {
    const toast = document.getElementById(this.id);
    if (toast) {
      toast.outerHTML = this.render();
    }
  }

  triggerEvent(eventName, data = {}) {
    const event = new CustomEvent(`toast:${eventName}`, {
      detail: { toast: this, ...data },
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
    }
  }

  attachEventListeners() {
    const closeButton = document.querySelector(`#${this.id} button[onclick*="close"]`);
    if (closeButton) {
      closeButton.addEventListener('click', () => this.close());
    }
  }

  // Métodos estáticos para crear toasts comunes
  static info(title, message = '', options = {}) {
    return new Toast({ title, message, type: 'info', ...options });
  }

  static success(title, message = '', options = {}) {
    return new Toast({ title, message, type: 'success', ...options });
  }

  static warning(title, message = '', options = {}) {
    return new Toast({ title, message, type: 'warning', ...options });
  }

  static error(title, message = '', options = {}) {
    return new Toast({ title, message, type: 'error', ...options });
  }

  // Método para mostrar un toast temporal
  static show(type, title, message = '', options = {}) {
    const toast = new Toast({ type, title, message, ...options });
    
    // Append to body
    document.body.insertAdjacentHTML('beforeend', toast.render());
    toast.show();
    
    return toast;
  }

  // Método para obtener el HTML del toast
  getHTML() {
    return this.render();
  }

  // Método para clonar el toast
  clone() {
    return new Toast({ ...this.options });
  }

  // Método para verificar si está visible
  isToastVisible() {
    return this.isVisible;
  }

  // Método para destruir el toast
  destroy() {
    this.close();
    const toast = document.getElementById(this.id);
    if (toast) {
      toast.remove();
    }
  }
}
