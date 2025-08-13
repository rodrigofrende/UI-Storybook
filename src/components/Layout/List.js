export default class List {
  constructor(options = {}) {
    this.options = {
      items: [],
      variant: 'default', // default, bordered, striped, hoverable, selectable
      size: 'md', // sm, md, lg
      showDividers: true,
      showIcons: false,
      showActions: false,
      selectable: false,
      multiSelect: false,
      onSelect: null,
      onItemClick: null,
      ...options
    };
    
    this.selectedItems = [];
    this.id = this.generateId();
  }

  generateId() {
    return 'list-' + Math.random().toString(36).substr(2, 9);
  }

  render() {
    const variantClasses = this.getVariantClasses();
    const sizeClasses = this.getSizeClasses();
    
    return `
      <div class="w-full" id="${this.id}">
        <ul class="divide-y ${variantClasses.divider} ${variantClasses.background} ${variantClasses.border} rounded-lg overflow-hidden">
          ${this.options.items.map((item, index) => this.renderListItem(item, index, variantClasses, sizeClasses)).join('')}
        </ul>
        
        ${this.options.items.length === 0 ? `
          <div class="text-center py-8 text-gray-500">
            <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
            <h3 class="mt-2 text-sm font-medium text-gray-900">No hay elementos</h3>
            <p class="mt-1 text-sm text-gray-500">Comienza agregando algunos elementos a la lista.</p>
          </div>
        ` : ''}
      </div>
    `;
  }

  renderListItem(item, index, variantClasses, sizeClasses) {
    const isSelected = this.selectedItems.includes(index);
    const hasActions = this.options.showActions && item.actions;
    const hasIcon = this.options.showIcons && item.icon;
    const isSelectable = this.options.selectable;
    
    return `
      <li class="relative ${variantClasses.item} ${isSelected ? variantClasses.selected : ''} ${this.options.hoverable ? variantClasses.hover : ''} transition-colors duration-200">
        ${isSelectable ? `
          <div class="flex items-center px-4 py-3">
            <input
              type="${this.options.multiSelect ? 'checkbox' : 'radio'}"
              name="list-selection"
              value="${index}"
              ${isSelected ? 'checked' : ''}
              class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              onchange="this.toggleSelection(${index})"
            >
            <div class="ml-3 flex-1">
              ${this.renderItemContent(item, variantClasses, sizeClasses)}
            </div>
            ${hasActions ? this.renderItemActions(item.actions) : ''}
          </div>
        ` : `
          <div class="flex items-center px-4 py-3 ${this.options.onItemClick ? 'cursor-pointer' : ''}" ${this.options.onItemClick ? `onclick="this.handleItemClick(${index})"` : ''}>
            ${hasIcon ? `
              <div class="flex-shrink-0 mr-3">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  ${item.icon}
                </svg>
              </div>
            ` : ''}
            <div class="flex-1">
              ${this.renderItemContent(item, variantClasses, sizeClasses)}
            </div>
            ${hasActions ? this.renderItemActions(item.actions) : ''}
          </div>
        `}
      </li>
    `;
  }

  renderItemContent(item, variantClasses, sizeClasses) {
    return `
      <div class="flex items-center justify-between">
        <div class="flex-1 min-w-0">
          ${item.title ? `
            <p class="text-sm font-medium ${variantClasses.title} truncate">
              ${item.title}
            </p>
          ` : ''}
          
          ${item.subtitle ? `
            <p class="text-sm ${variantClasses.subtitle} truncate">
              ${item.subtitle}
            </p>
          ` : ''}
          
          ${item.description ? `
            <p class="text-sm ${variantClasses.description} mt-1">
              ${item.description}
            </p>
          ` : ''}
          
          ${item.meta ? `
            <div class="flex items-center space-x-2 mt-2">
              ${item.meta.map(meta => `
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${meta.variant ? this.getMetaVariantClasses(meta.variant) : 'bg-gray-100 text-gray-800'}">
                  ${meta.icon ? `
                    <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      ${meta.icon}
                    </svg>
                  ` : ''}
                  ${meta.text}
                </span>
              `).join('')}
            </div>
          ` : ''}
        </div>
        
        ${item.rightContent ? `
          <div class="ml-4 flex-shrink-0">
            ${item.rightContent}
          </div>
        ` : ''}
      </div>
    `;
  }

  renderItemActions(actions) {
    return `
      <div class="ml-4 flex-shrink-0 flex items-center space-x-2">
        ${actions.map(action => `
          <button
            type="button"
            class="p-1 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors duration-200"
            onclick="${action.onClick || ''}"
            title="${action.title || ''}"
            aria-label="${action.title || ''}"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              ${action.icon}
            </svg>
          </button>
        `).join('')}
      </div>
    `;
  }

  getMetaVariantClasses(variant) {
    const variants = {
      primary: 'bg-blue-100 text-blue-800',
      success: 'bg-green-100 text-green-800',
      warning: 'bg-yellow-100 text-yellow-800',
      danger: 'bg-red-100 text-red-800',
      info: 'bg-indigo-100 text-indigo-800'
    };
    
    return variants[variant] || variants.primary;
  }

  getVariantClasses() {
    const variants = {
      default: {
        background: 'bg-white',
        border: 'border border-gray-200',
        divider: 'divide-gray-200',
        item: 'bg-white',
        selected: 'bg-blue-50 border-blue-200',
        hover: 'hover:bg-gray-50',
        title: 'text-gray-900',
        subtitle: 'text-gray-500',
        description: 'text-gray-600'
      },
      bordered: {
        background: 'bg-white',
        border: 'border border-gray-200',
        divider: 'divide-gray-200',
        item: 'bg-white',
        selected: 'bg-blue-50 border-blue-200',
        hover: 'hover:bg-gray-50',
        title: 'text-gray-900',
        subtitle: 'text-gray-500',
        description: 'text-gray-600'
      },
      striped: {
        background: 'bg-white',
        border: 'border border-gray-200',
        divider: 'divide-gray-200',
        item: 'bg-white even:bg-gray-50',
        selected: 'bg-blue-50 border-blue-200',
        hover: 'hover:bg-gray-100',
        title: 'text-gray-900',
        subtitle: 'text-gray-500',
        description: 'text-gray-600'
      },
      hoverable: {
        background: 'bg-white',
        border: 'border border-gray-200',
        divider: 'divide-gray-200',
        item: 'bg-white',
        selected: 'bg-blue-50 border-blue-200',
        hover: 'hover:bg-gray-50',
        title: 'text-gray-900',
        subtitle: 'text-gray-500',
        description: 'text-gray-600'
      },
      selectable: {
        background: 'bg-white',
        border: 'border border-gray-200',
        divider: 'divide-gray-200',
        item: 'bg-white',
        selected: 'bg-blue-50 border-blue-200',
        hover: 'hover:bg-gray-50',
        title: 'text-gray-900',
        subtitle: 'text-gray-500',
        description: 'text-gray-600'
      }
    };
    
    return variants[this.options.variant] || variants.default;
  }

  getSizeClasses() {
    const sizes = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg'
    };
    return sizes[this.options.size] || sizes.md;
  }

  toggleSelection(index) {
    if (this.options.multiSelect) {
      const itemIndex = this.selectedItems.indexOf(index);
      if (itemIndex > -1) {
        this.selectedItems.splice(itemIndex, 1);
      } else {
        this.selectedItems.push(index);
      }
    } else {
      this.selectedItems = [index];
    }
    
    this.updateDisplay();
    
    // Trigger onSelect callback
    if (typeof this.options.onSelect === 'function') {
      this.options.onSelect(this.selectedItems, this.getSelectedItems());
    }
    
    // Trigger custom event
    this.triggerEvent('select', { 
      selectedIndices: this.selectedItems, 
      selectedItems: this.getSelectedItems() 
    });
  }

  handleItemClick(index) {
    if (typeof this.options.onItemClick === 'function') {
      this.options.onItemClick(index, this.options.items[index]);
    }
    
    // Trigger custom event
    this.triggerEvent('itemClick', { 
      index, 
      item: this.options.items[index] 
    });
  }

  setItems(items) {
    this.options.items = items;
    this.selectedItems = [];
    this.updateDisplay();
  }

  addItem(item) {
    this.options.items.push(item);
    this.updateDisplay();
  }

  removeItem(index) {
    if (index >= 0 && index < this.options.items.length) {
      this.options.items.splice(index, 1);
      
      // Update selected items
      this.selectedItems = this.selectedItems
        .map(selectedIndex => selectedIndex > index ? selectedIndex - 1 : selectedIndex)
        .filter(selectedIndex => selectedIndex >= 0);
      
      this.updateDisplay();
    }
  }

  updateItem(index, updates) {
    if (index >= 0 && index < this.options.items.length) {
      this.options.items[index] = { ...this.options.items[index], ...updates };
      this.updateDisplay();
    }
  }

  setVariant(variant) {
    this.options.variant = variant;
    this.updateDisplay();
  }

  setSize(size) {
    this.options.size = size;
    this.updateDisplay();
  }

  setShowDividers(showDividers) {
    this.options.showDividers = showDividers;
    this.updateDisplay();
  }

  setShowIcons(showIcons) {
    this.options.showIcons = showIcons;
    this.updateDisplay();
  }

  setShowActions(showActions) {
    this.options.showActions = showActions;
    this.updateDisplay();
  }

  setSelectable(selectable, multiSelect = false) {
    this.options.selectable = selectable;
    this.options.multiSelect = multiSelect;
    this.selectedItems = [];
    this.updateDisplay();
  }

  selectItem(index) {
    if (!this.options.selectable) return;
    
    if (this.options.multiSelect) {
      if (!this.selectedItems.includes(index)) {
        this.selectedItems.push(index);
      }
    } else {
      this.selectedItems = [index];
    }
    
    this.updateDisplay();
  }

  deselectItem(index) {
    if (!this.options.selectable || !this.options.multiSelect) return;
    
    const itemIndex = this.selectedItems.indexOf(index);
    if (itemIndex > -1) {
      this.selectedItems.splice(itemIndex, 1);
      this.updateDisplay();
    }
  }

  selectAll() {
    if (!this.options.selectable || !this.options.multiSelect) return;
    
    this.selectedItems = this.options.items.map((_, index) => index);
    this.updateDisplay();
  }

  deselectAll() {
    if (!this.options.selectable) return;
    
    this.selectedItems = [];
    this.updateDisplay();
  }

  getSelectedItems() {
    return this.selectedItems.map(index => this.options.items[index]);
  }

  getSelectedIndices() {
    return [...this.selectedItems];
  }

  updateDisplay() {
    const list = document.getElementById(this.id);
    if (list) {
      list.outerHTML = this.render();
    }
  }

  triggerEvent(eventName, data = {}) {
    const event = new CustomEvent(`list:${eventName}`, {
      detail: { list: this, ...data },
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
    // Add event listeners for selectable items
    if (this.options.selectable) {
      const checkboxes = document.querySelectorAll(`#${this.id} input[type="checkbox"], #${this.id} input[type="radio"]`);
      checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', () => {
          const itemIndex = parseInt(checkbox.value);
          this.toggleSelection(itemIndex);
        });
      });
    }
    
    // Add event listeners for clickable items
    if (this.options.onItemClick) {
      const listItems = document.querySelectorAll(`#${this.id} li`);
      listItems.forEach((listItem, index) => {
        listItem.addEventListener('click', () => {
          this.handleItemClick(index);
        });
      });
    }
  }

  // Métodos estáticos para crear listas comunes
  static navigation(items, options = {}) {
    return new List({ 
      items, 
      variant: 'default', 
      showIcons: true,
      ...options 
    });
  }

  static selectable(items, options = {}) {
    return new List({ 
      items, 
      variant: 'selectable', 
      selectable: true,
      multiSelect: true,
      ...options 
    });
  }

  static bordered(items, options = {}) {
    return new List({ 
      items, 
      variant: 'bordered', 
      showDividers: true,
      ...options 
    });
  }

  static striped(items, options = {}) {
    return new List({ 
      items, 
      variant: 'striped', 
      showDividers: false,
      ...options 
    });
  }

  // Método para obtener el HTML de la lista
  getHTML() {
    return this.render();
  }

  // Método para clonar la lista
  clone() {
    return new List({ ...this.options });
  }

  // Método para verificar si tiene elementos
  hasItems() {
    return this.options.items.length > 0;
  }

  // Método para obtener el número total de elementos
  getItemCount() {
    return this.options.items.length;
  }

  // Método para obtener un elemento específico
  getItem(index) {
    if (index >= 0 && index < this.options.items.length) {
      return this.options.items[index];
    }
    return null;
  }

  // Método para limpiar todos los elementos
  clear() {
    this.options.items = [];
    this.selectedItems = [];
    this.updateDisplay();
  }

  // Método para filtrar elementos
  filter(predicate) {
    const filteredItems = this.options.items.filter(predicate);
    return new List({ ...this.options, items: filteredItems });
  }

  // Método para ordenar elementos
  sort(compareFunction) {
    const sortedItems = [...this.options.items].sort(compareFunction);
    return new List({ ...this.options, items: sortedItems });
  }
}
