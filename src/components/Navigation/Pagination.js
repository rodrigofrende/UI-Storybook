export default class Pagination {
  constructor(options = {}) {
    this.options = {
      currentPage: 1,
      totalPages: 1,
      totalItems: 0,
      itemsPerPage: 10,
      showFirstLast: true,
      showPrevNext: true,
      showPageNumbers: true,
      maxVisiblePages: 5,
      size: 'md', // sm, md, lg
      variant: 'default', // default, outlined, minimal
      onChange: null,
      ...options
    };
    
    this.currentPage = this.options.currentPage;
    this.id = this.generateId();
  }

  generateId() {
    return 'pagination-' + Math.random().toString(36).substr(2, 9);
  }

  render() {
    const sizeClasses = this.getSizeClasses();
    const variantClasses = this.getVariantClasses();
    
    return `
      <nav class="flex items-center justify-between" aria-label="Pagination" id="${this.id}">
        <!-- Info section -->
        <div class="flex items-center text-sm text-gray-700">
          <span>
            Mostrando 
            <span class="font-medium">${this.getStartItem()}</span>
            a 
            <span class="font-medium">${this.getEndItem()}</span>
            de 
            <span class="font-medium">${this.options.totalItems}</span>
            resultados
          </span>
        </div>

        <!-- Pagination controls -->
        <div class="flex items-center space-x-1">
          ${this.renderFirstButton()}
          ${this.renderPrevButton()}
          ${this.renderPageNumbers()}
          ${this.renderNextButton()}
          ${this.renderLastButton()}
        </div>
      </nav>
    `;
  }

  renderFirstButton() {
    if (!this.options.showFirstLast) return '';
    
    const isDisabled = this.currentPage === 1;
    const sizeClasses = this.getSizeClasses();
    const variantClasses = this.getVariantClasses();
    
    return `
      <button
        type="button"
        class="${sizeClasses} ${variantClasses.button} ${isDisabled ? variantClasses.disabled : variantClasses.enabled} ${variantClasses.firstLast}"
        ${isDisabled ? 'disabled' : `onclick="this.goToPage(1)"`}
        aria-label="Ir a la primera página"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path>
        </svg>
      </button>
    `;
  }

  renderPrevButton() {
    if (!this.options.showPrevNext) return '';
    
    const isDisabled = this.currentPage === 1;
    const sizeClasses = this.getSizeClasses();
    const variantClasses = this.getVariantClasses();
    
    return `
      <button
        type="button"
        class="${sizeClasses} ${variantClasses.button} ${isDisabled ? variantClasses.disabled : variantClasses.enabled}"
        ${isDisabled ? 'disabled' : `onclick="this.goToPage(${this.currentPage - 1})"`}
        aria-label="Ir a la página anterior"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
    `;
  }

  renderPageNumbers() {
    if (!this.options.showPageNumbers) return '';
    
    const pages = this.getVisiblePages();
    const sizeClasses = this.getSizeClasses();
    const variantClasses = this.getVariantClasses();
    
    return pages.map(page => {
      const isCurrent = page === this.currentPage;
      const isEllipsis = page === '...';
      
      if (isEllipsis) {
        return `
          <span class="${sizeClasses} ${variantClasses.ellipsis}">
            ...
          </span>
        `;
      }
      
      return `
        <button
          type="button"
          class="${sizeClasses} ${variantClasses.button} ${isCurrent ? variantClasses.active : variantClasses.enabled}"
          onclick="this.goToPage(${page})"
          aria-label="Ir a la página ${page}"
          aria-current="${isCurrent ? 'page' : 'false'}"
        >
          ${page}
        </button>
      `;
    }).join('');
  }

  renderNextButton() {
    if (!this.options.showPrevNext) return '';
    
    const isDisabled = this.currentPage === this.options.totalPages;
    const sizeClasses = this.getSizeClasses();
    const variantClasses = this.getVariantClasses();
    
    return `
      <button
        type="button"
        class="${sizeClasses} ${variantClasses.button} ${isDisabled ? variantClasses.disabled : variantClasses.enabled}"
        ${isDisabled ? 'disabled' : `onclick="this.goToPage(${this.currentPage + 1})"`}
        aria-label="Ir a la página siguiente"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    `;
  }

  renderLastButton() {
    if (!this.options.showFirstLast) return '';
    
    const isDisabled = this.currentPage === this.options.totalPages;
    const sizeClasses = this.getSizeClasses();
    const variantClasses = this.getVariantClasses();
    
    return `
      <button
        type="button"
        class="${sizeClasses} ${variantClasses.button} ${isDisabled ? variantClasses.disabled : variantClasses.enabled} ${variantClasses.firstLast}"
        ${isDisabled ? 'disabled' : `onclick="this.goToPage(${this.options.totalPages})"`}
        aria-label="Ir a la última página"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
        </svg>
      </button>
    `;
  }

  getVisiblePages() {
    const totalPages = this.options.totalPages;
    const currentPage = this.currentPage;
    const maxVisible = this.options.maxVisiblePages;
    
    if (totalPages <= maxVisible) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    
    const pages = [];
    const halfVisible = Math.floor(maxVisible / 2);
    
    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);
    
    if (endPage - startPage + 1 < maxVisible) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }
    
    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        pages.push('...');
      }
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push('...');
      }
      pages.push(totalPages);
    }
    
    return pages;
  }

  getStartItem() {
    return (this.currentPage - 1) * this.options.itemsPerPage + 1;
  }

  getEndItem() {
    return Math.min(this.currentPage * this.options.itemsPerPage, this.options.totalItems);
  }

  getSizeClasses() {
    const sizes = {
      sm: 'px-2 py-1 text-xs',
      md: 'px-3 py-2 text-sm',
      lg: 'px-4 py-2 text-base'
    };
    return sizes[this.options.size] || sizes.md;
  }

  getVariantClasses() {
    const variants = {
      default: {
        button: 'inline-flex items-center justify-center font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
        enabled: 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300',
        active: 'bg-blue-600 text-white border border-blue-600',
        disabled: 'bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed',
        ellipsis: 'inline-flex items-center justify-center text-gray-500',
        firstLast: ''
      },
      outlined: {
        button: 'inline-flex items-center justify-center font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
        enabled: 'bg-transparent text-gray-700 hover:bg-gray-50 border border-gray-300',
        active: 'bg-blue-50 text-blue-600 border border-blue-300',
        disabled: 'bg-transparent text-gray-400 border border-gray-200 cursor-not-allowed',
        ellipsis: 'inline-flex items-center justify-center text-gray-500',
        firstLast: ''
      },
      minimal: {
        button: 'inline-flex items-center justify-center font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
        enabled: 'bg-transparent text-gray-700 hover:bg-gray-100',
        active: 'bg-blue-100 text-blue-700',
        disabled: 'bg-transparent text-gray-400 cursor-not-allowed',
        ellipsis: 'inline-flex items-center justify-center text-gray-500',
        firstLast: ''
      }
    };
    
    return variants[this.options.variant] || variants.default;
  }

  goToPage(page) {
    if (page < 1 || page > this.options.totalPages || page === this.currentPage) return;
    
    this.currentPage = page;
    this.updateDisplay();
    
    // Trigger onChange callback
    if (typeof this.options.onChange === 'function') {
      this.options.onChange(page, this.getPageInfo());
    }
    
    // Trigger custom event
    this.triggerEvent('change', { 
      currentPage: page, 
      pageInfo: this.getPageInfo() 
    });
  }

  getPageInfo() {
    return {
      currentPage: this.currentPage,
      totalPages: this.options.totalPages,
      totalItems: this.options.totalItems,
      itemsPerPage: this.options.itemsPerPage,
      startItem: this.getStartItem(),
      endItem: this.getEndItem()
    };
  }

  setCurrentPage(page) {
    if (page < 1 || page > this.options.totalPages) return;
    
    this.currentPage = page;
    this.updateDisplay();
  }

  setTotalPages(totalPages) {
    this.options.totalPages = totalPages;
    if (this.currentPage > totalPages) {
      this.currentPage = totalPages;
    }
    this.updateDisplay();
  }

  setTotalItems(totalItems) {
    this.options.totalItems = totalItems;
    this.options.totalPages = Math.ceil(totalItems / this.options.itemsPerPage);
    if (this.currentPage > this.options.totalPages) {
      this.currentPage = this.options.totalPages;
    }
    this.updateDisplay();
  }

  setItemsPerPage(itemsPerPage) {
    this.options.itemsPerPage = itemsPerPage;
    this.options.totalPages = Math.ceil(this.options.totalItems / itemsPerPage);
    if (this.currentPage > this.options.totalPages) {
      this.currentPage = this.options.totalPages;
    }
    this.updateDisplay();
  }

  setShowFirstLast(showFirstLast) {
    this.options.showFirstLast = showFirstLast;
    this.updateDisplay();
  }

  setShowPrevNext(showPrevNext) {
    this.options.showPrevNext = showPrevNext;
    this.updateDisplay();
  }

  setShowPageNumbers(showPageNumbers) {
    this.options.showPageNumbers = showPageNumbers;
    this.updateDisplay();
  }

  setMaxVisiblePages(maxVisiblePages) {
    this.options.maxVisiblePages = maxVisiblePages;
    this.updateDisplay();
  }

  setSize(size) {
    this.options.size = size;
    this.updateDisplay();
  }

  setVariant(variant) {
    this.options.variant = variant;
    this.updateDisplay();
  }

  nextPage() {
    this.goToPage(this.currentPage + 1);
  }

  previousPage() {
    this.goToPage(this.currentPage - 1);
  }

  firstPage() {
    this.goToPage(1);
  }

  lastPage() {
    this.goToPage(this.options.totalPages);
  }

  updateDisplay() {
    const pagination = document.getElementById(this.id);
    if (pagination) {
      pagination.outerHTML = this.render();
    }
  }

  triggerEvent(eventName, data = {}) {
    const event = new CustomEvent(`pagination:${eventName}`, {
      detail: { pagination: this, ...data },
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
    // Add keyboard navigation
    const buttons = document.querySelectorAll(`#${this.id} button`);
    buttons.forEach(button => {
      button.addEventListener('keydown', (e) => {
        switch (e.key) {
          case 'ArrowLeft':
            e.preventDefault();
            this.previousPage();
            break;
          case 'ArrowRight':
            e.preventDefault();
            this.nextPage();
            break;
          case 'Home':
            e.preventDefault();
            this.firstPage();
            break;
          case 'End':
            e.preventDefault();
            this.lastPage();
            break;
        }
      });
    });
  }

  // Métodos para accesibilidad
  focus() {
    const activeButton = document.querySelector(`#${this.id} button[aria-current="page"]`);
    if (activeButton) activeButton.focus();
  }

  // Método para obtener información de la paginación
  getPaginationInfo() {
    return {
      currentPage: this.currentPage,
      totalPages: this.options.totalPages,
      totalItems: this.options.totalItems,
      itemsPerPage: this.options.itemsPerPage,
      hasNextPage: this.currentPage < this.options.totalPages,
      hasPreviousPage: this.currentPage > 1,
      isFirstPage: this.currentPage === 1,
      isLastPage: this.currentPage === this.options.totalPages
    };
  }

  // Método para verificar si una página es válida
  isValidPage(page) {
    return page >= 1 && page <= this.options.totalPages;
  }

  // Método para obtener el rango de elementos de una página específica
  getPageRange(page) {
    if (!this.isValidPage(page)) return null;
    
    const startItem = (page - 1) * this.options.itemsPerPage + 1;
    const endItem = Math.min(page * this.options.itemsPerPage, this.options.totalItems);
    
    return { startItem, endItem };
  }
}
