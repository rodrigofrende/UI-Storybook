export default class Tabs {
  constructor(options = {}) {
    this.options = {
      tabs: [],
      activeTab: 0,
      variant: 'default', // default, pills, underline, cards
      size: 'md', // sm, md, lg
      vertical: false,
      onChange: null,
      ...options
    };
    
    this.activeTabIndex = this.options.activeTab;
    this.id = this.generateId();
  }

  generateId() {
    return 'tabs-' + Math.random().toString(36).substr(2, 9);
  }

  render() {
    const variantClasses = this.getVariantClasses();
    const sizeClasses = this.getSizeClasses();
    const orientationClass = this.options.vertical ? 'flex-col' : 'flex-row';
    
    return `
      <div class="w-full" id="${this.id}">
        <!-- Tab Navigation -->
        <div class="border-b border-gray-200">
          <nav class="-mb-px flex ${orientationClass} ${variantClasses.nav}" aria-label="Tabs">
            ${this.renderTabHeaders()}
          </nav>
        </div>
        
        <!-- Tab Content -->
        <div class="mt-4">
          ${this.renderTabContent()}
        </div>
      </div>
    `;
  }

  renderTabHeaders() {
    return this.options.tabs.map((tab, index) => {
      const isActive = index === this.activeTabIndex;
      const variantClasses = this.getVariantClasses();
      const sizeClasses = this.getSizeClasses();
      const activeClasses = variantClasses.active;
      const inactiveClasses = variantClasses.inactive;
      
      return `
        <button
          type="button"
          class="whitespace-nowrap ${sizeClasses} ${isActive ? activeClasses : inactiveClasses} transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onclick="this.setActiveTab(${index})"
          role="tab"
          aria-selected="${isActive}"
          aria-controls="tab-panel-${this.id}-${index}"
          id="tab-${this.id}-${index}"
        >
          ${tab.icon ? `
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              ${tab.icon}
            </svg>
          ` : ''}
          ${tab.label}
          ${tab.badge ? `
            <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              ${tab.badge}
            </span>
          ` : ''}
        </button>
      `;
    }).join('');
  }

  renderTabContent() {
    return this.options.tabs.map((tab, index) => {
      const isActive = index === this.activeTabIndex;
      
      return `
        <div
          class="${isActive ? 'block' : 'hidden'}"
          role="tabpanel"
          aria-labelledby="tab-${this.id}-${index}"
          id="tab-panel-${this.id}-${index}"
        >
          ${tab.content}
        </div>
      `;
    }).join('');
  }

  getVariantClasses() {
    const variants = {
      default: {
        nav: 'space-x-8',
        active: 'border-blue-500 text-blue-600 border-b-2',
        inactive: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
      },
      pills: {
        nav: 'space-x-1',
        active: 'bg-blue-100 text-blue-700 rounded-md',
        inactive: 'text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md'
      },
      underline: {
        nav: 'space-x-8',
        active: 'border-blue-500 text-blue-600 border-b-2',
        inactive: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
      },
      cards: {
        nav: 'space-x-1',
        active: 'bg-white text-blue-600 border border-gray-200 border-b-0 rounded-t-lg shadow-sm',
        inactive: 'text-gray-500 hover:text-gray-700 bg-gray-50 border border-transparent border-b-gray-200 rounded-t-lg hover:bg-gray-100'
      }
    };
    
    return variants[this.options.variant] || variants.default;
  }

  getSizeClasses() {
    const sizes = {
      sm: 'px-3 py-1.5 text-sm font-medium',
      md: 'px-4 py-2 text-sm font-medium',
      lg: 'px-6 py-3 text-base font-medium'
    };
    return sizes[this.options.size] || sizes.md;
  }

  setActiveTab(index) {
    if (index < 0 || index >= this.options.tabs.length) return;
    
    this.activeTabIndex = index;
    this.updateDisplay();
    
    // Trigger onChange callback
    if (typeof this.options.onChange === 'function') {
      this.options.onChange(index, this.options.tabs[index]);
    }
    
    // Trigger custom event
    this.triggerEvent('change', { 
      activeTab: index, 
      tab: this.options.tabs[index] 
    });
  }

  getActiveTab() {
    return this.activeTabIndex;
  }

  getActiveTabData() {
    return this.options.tabs[this.activeTabIndex];
  }

  addTab(tab) {
    this.options.tabs.push(tab);
    this.updateDisplay();
  }

  removeTab(index) {
    if (index < 0 || index >= this.options.tabs.length) return;
    
    this.options.tabs.splice(index, 1);
    
    // Adjust active tab if necessary
    if (this.activeTabIndex >= this.options.tabs.length) {
      this.activeTabIndex = Math.max(0, this.options.tabs.length - 1);
    }
    
    this.updateDisplay();
  }

  updateTab(index, updates) {
    if (index < 0 || index >= this.options.tabs.length) return;
    
    this.options.tabs[index] = { ...this.options.tabs[index], ...updates };
    this.updateDisplay();
  }

  setTabs(tabs) {
    this.options.tabs = tabs;
    this.activeTabIndex = Math.min(this.activeTabIndex, tabs.length - 1);
    this.updateDisplay();
  }

  setVariant(variant) {
    this.options.variant = variant;
    this.updateDisplay();
  }

  setSize(size) {
    this.options.size = size;
    this.updateDisplay();
  }

  setVertical(vertical) {
    this.options.vertical = vertical;
    this.updateDisplay();
  }

  nextTab() {
    const nextIndex = (this.activeTabIndex + 1) % this.options.tabs.length;
    this.setActiveTab(nextIndex);
  }

  previousTab() {
    const prevIndex = this.activeTabIndex === 0 ? this.options.tabs.length - 1 : this.activeTabIndex - 1;
    this.setActiveTab(prevIndex);
  }

  updateDisplay() {
    const tabsContainer = document.getElementById(this.id);
    if (tabsContainer) {
      tabsContainer.outerHTML = this.render();
      this.attachEventListeners();
    }
  }

  triggerEvent(eventName, data = {}) {
    const event = new CustomEvent(`tabs:${eventName}`, {
      detail: { tabs: this, ...data },
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
    const tabButtons = document.querySelectorAll(`#${this.id} button[role="tab"]`);
    tabButtons.forEach((button, index) => {
      button.addEventListener('keydown', (e) => {
        switch (e.key) {
          case 'ArrowRight':
          case 'ArrowDown':
            e.preventDefault();
            this.nextTab();
            break;
          case 'ArrowLeft':
          case 'ArrowUp':
            e.preventDefault();
            this.previousTab();
            break;
          case 'Home':
            e.preventDefault();
            this.setActiveTab(0);
            break;
          case 'End':
            e.preventDefault();
            this.setActiveTab(this.options.tabs.length - 1);
            break;
        }
      });
    });
  }

  // Métodos para accesibilidad
  focus() {
    const activeTab = document.querySelector(`#tab-${this.id}-${this.activeTabIndex}`);
    if (activeTab) activeTab.focus();
  }

  // Método para obtener información de las pestañas
  getTabsInfo() {
    return {
      tabs: this.options.tabs,
      activeTab: this.activeTabIndex,
      totalTabs: this.options.tabs.length
    };
  }

  // Método para verificar si una pestaña está activa
  isTabActive(index) {
    return index === this.activeTabIndex;
  }

  // Método para obtener el contenido de una pestaña específica
  getTabContent(index) {
    if (index < 0 || index >= this.options.tabs.length) return null;
    return this.options.tabs[index];
  }
}
