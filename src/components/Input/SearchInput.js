export default class SearchInput {
  constructor(options = {}) {
    this.options = {
      placeholder: 'Search...',
      value: '',
      suggestions: [],
      onSearch: null,
      onSuggestionSelect: null,
      className: '',
      ...options
    };
    
    this.element = this.createSearchInput();
    this.suggestionsContainer = null;
    this.bindEvents();
  }

  createSearchInput() {
    const container = document.createElement('div');
    container.className = 'relative';

    // Create search wrapper
    const searchWrapper = document.createElement('div');
    searchWrapper.className = 'relative';

    // Create input element
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = this.options.placeholder;
    input.value = this.options.value;

    // Base classes with modern search styling
    const baseClasses = [
      'w-full px-12 py-3 border border-gray-300 rounded-full',
      'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
      'transition-all duration-300 shadow-sm',
      'placeholder-gray-400 text-gray-700',
      'hover:shadow-md focus:shadow-lg'
    ];

    input.className = [...baseClasses, this.options.className].join(' ');

    // Add search icon
    const searchIcon = document.createElement('span');
    searchIcon.className = 'absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400';
    searchIcon.innerHTML = `
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    `;

    // Add clear button
    const clearButton = document.createElement('button');
    clearButton.className = 'absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors';
    clearButton.innerHTML = `
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    `;
    clearButton.style.display = 'none';

    // Create suggestions container
    this.suggestionsContainer = document.createElement('div');
    this.suggestionsContainer.className = 'absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto';

    searchWrapper.appendChild(searchIcon);
    searchWrapper.appendChild(input);
    searchWrapper.appendChild(clearButton);
    searchWrapper.appendChild(this.suggestionsContainer);

    container.appendChild(searchWrapper);
    this.inputElement = input;
    this.clearButton = clearButton;
    
    return container;
  }

  bindEvents() {
    // Input events
    this.inputElement.addEventListener('input', (e) => {
      this.handleInput(e);
      this.toggleClearButton();
    });

    this.inputElement.addEventListener('focus', () => {
      this.showSuggestions();
    });

    this.inputElement.addEventListener('keydown', (e) => {
      this.handleKeydown(e);
    });

    // Clear button
    this.clearButton.addEventListener('click', () => {
      this.clearInput();
    });

    // Click outside to close suggestions
    document.addEventListener('click', (e) => {
      if (!this.element.contains(e.target)) {
        this.hideSuggestions();
      }
    });
  }

  handleInput(e) {
    const value = e.target.value;
    this.filterSuggestions(value);
    
    if (this.options.onSearch) {
      this.options.onSearch(value);
    }
  }

  handleKeydown(e) {
    if (e.key === 'Enter') {
      this.performSearch();
    } else if (e.key === 'Escape') {
      this.hideSuggestions();
      this.inputElement.blur();
    }
  }

  filterSuggestions(query) {
    if (!query.trim()) {
      this.hideSuggestions();
      return;
    }

    const filtered = this.options.suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(query.toLowerCase())
    );

    this.showSuggestions(filtered);
  }

  showSuggestions(suggestions = this.options.suggestions) {
    if (suggestions.length === 0) {
      this.hideSuggestions();
      return;
    }

    this.suggestionsContainer.innerHTML = '';
    
    suggestions.forEach((suggestion, index) => {
      const item = document.createElement('div');
      item.className = 'px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors';
      item.textContent = suggestion;
      
      item.addEventListener('click', () => {
        this.selectSuggestion(suggestion);
      });

      item.addEventListener('mouseenter', () => {
        this.highlightSuggestion(index);
      });

      this.suggestionsContainer.appendChild(item);
    });

    this.suggestionsContainer.style.display = 'block';
  }

  hideSuggestions() {
    this.suggestionsContainer.style.display = 'none';
  }

  selectSuggestion(suggestion) {
    this.inputElement.value = suggestion;
    this.hideSuggestions();
    
    if (this.options.onSuggestionSelect) {
      this.options.onSuggestionSelect(suggestion);
    }
  }

  highlightSuggestion(index) {
    const items = this.suggestionsContainer.querySelectorAll('div');
    items.forEach((item, i) => {
      item.className = i === index 
        ? 'px-4 py-2 bg-blue-100 cursor-pointer transition-colors'
        : 'px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors';
    });
  }

  performSearch() {
    const value = this.inputElement.value;
    if (this.options.onSearch) {
      this.options.onSearch(value);
    }
  }

  clearInput() {
    this.inputElement.value = '';
    this.hideSuggestions();
    this.toggleClearButton();
    this.inputElement.focus();
  }

  toggleClearButton() {
    this.clearButton.style.display = this.inputElement.value ? 'block' : 'none';
  }

  // Public methods
  setValue(value) {
    this.inputElement.value = value;
    this.toggleClearButton();
  }

  setSuggestions(suggestions) {
    this.options.suggestions = suggestions;
  }

  focus() {
    this.inputElement.focus();
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
