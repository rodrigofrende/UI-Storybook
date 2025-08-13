export default class Dropdown {
  constructor(options = {}) {
    this.options = {
      placeholder: 'Search...',
      searchable: true,
      multiple: false,
      ...options
    };
    
    this.selectedValues = [];
    this.isOpen = false;
    this.filteredOptions = [];
  }

  render(options = []) {
    this.options.items = options;
    this.filteredOptions = [...options];
    
    return `
      <div class="relative inline-block text-left w-full max-w-xs">
        <div class="relative">
          <div class="flex items-center">
            <div class="relative flex-1">
              <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <input 
                type="text" 
                class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="${this.options.placeholder}"
                ${this.options.searchable ? '' : 'readonly'}
              >
            </div>
            <button 
              type="button" 
              class="ml-2 p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              onclick="this.toggleDropdown()"
            >
              <svg class="w-4 h-4 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <div class="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible transition-all duration-200 max-h-60 overflow-auto">
          ${this.renderOptions()}
        </div>
      </div>
    `;
  }

  renderOptions() {
    if (this.filteredOptions.length === 0) {
      return `
        <div class="px-4 py-2 text-gray-500 text-sm">
          No options found
        </div>
      `;
    }

    return this.filteredOptions.map(option => `
      <div 
        class="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-150 ${this.isSelected(option.value) ? 'bg-blue-50 text-blue-600' : ''}"
        onclick="this.selectOption('${option.value}')"
      >
        ${option.label}
      </div>
    `).join('');
  }

  isSelected(value) {
    return this.selectedValues.includes(value);
  }

  selectOption(value) {
    if (this.options.multiple) {
      const index = this.selectedValues.indexOf(value);
      if (index > -1) {
        this.selectedValues.splice(index, 1);
      } else {
        this.selectedValues.push(value);
      }
    } else {
      this.selectedValues = [value];
      this.closeDropdown();
    }
    this.updateDisplay();
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
    this.updateDropdownVisibility();
  }

  closeDropdown() {
    this.isOpen = false;
    this.updateDropdownVisibility();
  }

  updateDropdownVisibility() {
    const dropdown = document.querySelector('.dropdown-options');
    if (dropdown) {
      if (this.isOpen) {
        dropdown.classList.remove('opacity-0', 'invisible');
        dropdown.classList.add('opacity-100', 'visible');
      } else {
        dropdown.classList.add('opacity-0', 'invisible');
        dropdown.classList.remove('opacity-100', 'visible');
      }
    }
  }

  updateDisplay() {
    // Update the display to show selected values
    const input = document.querySelector('input[placeholder*="Search"]');
    if (input) {
      if (this.selectedValues.length > 0) {
        const selectedLabels = this.selectedValues.map(value => {
          const option = this.options.items.find(item => item.value === value);
          return option ? option.label : value;
        });
        input.value = selectedLabels.join(', ');
      } else {
        input.value = '';
      }
    }
  }

  filterOptions(searchTerm) {
    if (!searchTerm) {
      this.filteredOptions = [...this.options.items];
    } else {
      this.filteredOptions = this.options.items.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    this.renderOptions();
  }
}
