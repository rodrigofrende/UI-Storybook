export default class Modal {
  constructor(options = {}) {
    this.options = {
      title: '',
      content: '',
      footer: '',
      size: 'md', // sm, md, lg, xl, full
      closeOnOverlay: true,
      closeOnEscape: true,
      showCloseButton: true,
      persistent: false,
      onOpen: null,
      onClose: null,
      ...options
    };
    
    this.isOpen = false;
    this.id = this.generateId();
    this.overlayId = `modal-overlay-${this.id}`;
    this.modalId = `modal-${this.id}`;
  }

  generateId() {
    return 'modal-' + Math.random().toString(36).substr(2, 9);
  }

  render() {
    const sizeClasses = this.getSizeClasses();
    
    return `
      <div 
        class="fixed inset-0 z-50 overflow-y-auto hidden" 
        id="${this.overlayId}"
        aria-labelledby="modal-title-${this.id}"
        aria-modal="true"
        role="dialog"
      >
        <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <!-- Background overlay -->
          <div 
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            ${this.options.closeOnOverlay ? `onclick="this.close()"` : ''}
          ></div>

          <!-- Modal panel -->
          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle ${sizeClasses} sm:w-full">
            <!-- Header -->
            ${this.options.title || this.options.showCloseButton ? `
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 border-b border-gray-200">
                <div class="flex items-center justify-between">
                  ${this.options.title ? `
                    <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title-${this.id}">
                      ${this.options.title}
                    </h3>
                  ` : ''}
                  
                  ${this.options.showCloseButton ? `
                    <button
                      type="button"
                      class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                      onclick="this.close()"
                      aria-label="Close modal"
                    >
                      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </button>
                  ` : ''}
                </div>
              </div>
            ` : ''}

            <!-- Content -->
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="text-gray-700">
                ${this.options.content}
              </div>
            </div>

            <!-- Footer -->
            ${this.options.footer ? `
              <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse border-t border-gray-200">
                ${this.options.footer}
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }

  getSizeClasses() {
    const sizes = {
      sm: 'sm:max-w-sm',
      md: 'sm:max-w-md',
      lg: 'sm:max-w-lg',
      xl: 'sm:max-w-xl',
      '2xl': 'sm:max-w-2xl',
      '3xl': 'sm:max-w-3xl',
      '4xl': 'sm:max-w-4xl',
      '5xl': 'sm:max-w-5xl',
      '6xl': 'sm:max-w-6xl',
      '7xl': 'sm:max-w-7xl',
      full: 'sm:max-w-full sm:m-4'
    };
    return sizes[this.options.size] || sizes.md;
  }

  open() {
    if (this.isOpen) return;
    
    this.isOpen = true;
    this.updateDisplay();
    this.attachEventListeners();
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Focus management
    this.focus();
    
    // Trigger onOpen callback
    if (typeof this.options.onOpen === 'function') {
      this.options.onOpen();
    }
    
    // Trigger custom event
    this.triggerEvent('open');
  }

  close() {
    if (!this.isOpen) return;
    
    this.isOpen = false;
    this.updateDisplay();
    
    // Restore body scroll
    document.body.style.overflow = '';
    
    // Trigger onClose callback
    if (typeof this.options.onClose === 'function') {
      this.options.onClose();
    }
    
    // Trigger custom event
    this.triggerEvent('close');
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  setTitle(title) {
    this.options.title = title;
    this.updateDisplay();
  }

  setContent(content) {
    this.options.content = content;
    this.updateDisplay();
  }

  setFooter(footer) {
    this.options.footer = footer;
    this.updateDisplay();
  }

  setSize(size) {
    this.options.size = size;
    this.updateDisplay();
  }

  setCloseOnOverlay(closeOnOverlay) {
    this.options.closeOnOverlay = closeOnOverlay;
  }

  setCloseOnEscape(closeOnEscape) {
    this.options.closeOnEscape = closeOnEscape;
  }

  setShowCloseButton(showCloseButton) {
    this.options.showCloseButton = showCloseButton;
    this.updateDisplay();
  }

  setPersistent(persistent) {
    this.options.persistent = persistent;
  }

  updateDisplay() {
    const overlay = document.getElementById(this.overlayId);
    if (overlay) {
      if (this.isOpen) {
        overlay.classList.remove('hidden');
        overlay.classList.add('block');
      } else {
        overlay.classList.remove('block');
        overlay.classList.add('hidden');
      }
    }
  }

  attachEventListeners() {
    // Escape key handler
    if (this.options.closeOnEscape) {
      const handleEscape = (e) => {
        if (e.key === 'Escape' && this.isOpen) {
          this.close();
        }
      };
      
      document.addEventListener('keydown', handleEscape);
      
      // Store reference for cleanup
      this.escapeHandler = handleEscape;
    }
  }

  removeEventListeners() {
    if (this.escapeHandler) {
      document.removeEventListener('keydown', this.escapeHandler);
      this.escapeHandler = null;
    }
  }

  focus() {
    const modal = document.getElementById(this.modalId);
    if (modal) {
      const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    }
  }

  triggerEvent(eventName, data = {}) {
    const event = new CustomEvent(`modal:${eventName}`, {
      detail: { modal: this, ...data },
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
    }
  }

  // Método para obtener el estado del modal
  isModalOpen() {
    return this.isOpen;
  }

  // Método para destruir el modal
  destroy() {
    this.removeEventListeners();
    const overlay = document.getElementById(this.overlayId);
    if (overlay) {
      overlay.remove();
    }
  }

  // Método estático para crear un modal de confirmación
  static confirm(options = {}) {
    const defaultOptions = {
      title: 'Confirmar',
      content: '¿Estás seguro de que quieres continuar?',
      size: 'sm',
      footer: `
        <button
          type="button"
          class="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
          onclick="this.close()"
        >
          Cancelar
        </button>
        <button
          type="button"
          class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
          onclick="this.confirm()"
        >
          Confirmar
        </button>
      `
    };
    
    return new Modal({ ...defaultOptions, ...options });
  }

  // Método estático para crear un modal de alerta
  static alert(options = {}) {
    const defaultOptions = {
      title: 'Alerta',
      size: 'sm',
      footer: `
        <button
          type="button"
          class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto sm:text-sm"
          onclick="this.close()"
        >
          Aceptar
        </button>
      `
    };
    
    return new Modal({ ...defaultOptions, ...options });
  }
}
