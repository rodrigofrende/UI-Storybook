export default class Table {
  constructor(options = {}) {
    this.options = {
      columns: [],
      data: [],
      variant: 'default', // default, striped, bordered, hoverable
      size: 'md', // sm, md, lg
      showHeader: true,
      showFooter: false,
      sortable: false,
      selectable: false,
      multiSelect: false,
      searchable: false,
      pagination: false,
      itemsPerPage: 10,
      onSort: null,
      onSelect: null,
      onRowClick: null,
      ...options
    };
    
    this.sortColumn = null;
    this.sortDirection = 'asc';
    this.selectedRows = [];
    this.currentPage = 1;
    this.searchTerm = '';
    this.id = this.generateId();
  }

  generateId() {
    return 'table-' + Math.random().toString(36).substr(2, 9);
  }

  render() {
    const variantClasses = this.getVariantClasses();
    const sizeClasses = this.getSizeClasses();
    
    return `
      <div class="w-full" id="${this.id}">
        ${this.options.searchable ? this.renderSearch() : ''}
        
        <div class="overflow-x-auto">
          <table class="min-w-full ${variantClasses.table}">
            ${this.options.showHeader ? this.renderHeader() : ''}
            ${this.renderBody()}
            ${this.options.showFooter ? this.renderFooter() : ''}
          </table>
        </div>
        
        ${this.options.pagination ? this.renderPagination() : ''}
      </div>
    `;
  }

  renderSearch() {
    return `
      <div class="mb-4">
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input
            type="text"
            class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Buscar en la tabla..."
            value="${this.searchTerm}"
            oninput="this.setSearchTerm(this.value)"
          >
        </div>
      </div>
    `;
  }

  renderHeader() {
    const variantClasses = this.getVariantClasses();
    const sizeClasses = this.getSizeClasses();
    
    return `
      <thead class="${variantClasses.header}">
        <tr>
          ${this.options.selectable ? `
            <th class="${sizeClasses} ${variantClasses.headerCell} w-12">
              ${this.options.multiSelect ? `
                <input
                  type="checkbox"
                  class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  onchange="this.toggleSelectAll(this.checked)"
                >
              ` : ''}
            </th>
          ` : ''}
          
          ${this.options.columns.map(column => `
            <th class="${sizeClasses} ${variantClasses.headerCell} ${column.sortable && this.options.sortable ? 'cursor-pointer hover:bg-gray-50' : ''}" ${column.sortable && this.options.sortable ? `onclick="this.sortByColumn('${column.key}')"` : ''}>
              <div class="flex items-center justify-between">
                <span>${column.label}</span>
                ${column.sortable && this.options.sortable ? `
                  <div class="ml-2">
                    ${this.sortColumn === column.key ? `
                      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        ${this.sortDirection === 'asc' ? `
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
                        ` : `
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        `}
                      </svg>
                    ` : `
                      <svg class="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
                      </svg>
                    `}
                  </div>
                ` : ''}
              </div>
            </th>
          `).join('')}
        </tr>
      </thead>
    `;
  }

  renderBody() {
    const variantClasses = this.getVariantClasses();
    const sizeClasses = this.getSizeClasses();
    const filteredData = this.getFilteredData();
    const paginatedData = this.options.pagination ? this.getPaginatedData(filteredData) : filteredData;
    
    return `
      <tbody class="${variantClasses.body}">
        ${paginatedData.map((row, index) => `
          <tr class="${variantClasses.row} ${this.selectedRows.includes(index) ? variantClasses.selectedRow : ''} ${this.options.hoverable ? variantClasses.hoverRow : ''} ${this.options.onRowClick ? 'cursor-pointer' : ''}" ${this.options.onRowClick ? `onclick="this.handleRowClick(${index})"` : ''}>
            ${this.options.selectable ? `
              <td class="${sizeClasses} ${variantClasses.cell} w-12">
                <input
                  type="${this.options.multiSelect ? 'checkbox' : 'radio'}"
                  name="table-selection"
                  value="${index}"
                  ${this.selectedRows.includes(index) ? 'checked' : ''}
                  class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  onchange="this.toggleRowSelection(${index})"
                >
              </td>
            ` : ''}
            
            ${this.options.columns.map(column => `
              <td class="${sizeClasses} ${variantClasses.cell}">
                ${this.renderCellValue(row, column)}
              </td>
            `).join('')}
          </tr>
        `).join('')}
        
        ${paginatedData.length === 0 ? `
          <tr>
            <td colspan="${this.options.columns.length + (this.options.selectable ? 1 : 0)}" class="px-6 py-4 text-center text-gray-500">
              No se encontraron resultados
            </td>
          </tr>
        ` : ''}
      </tbody>
    `;
  }

  renderFooter() {
    const variantClasses = this.getVariantClasses();
    const sizeClasses = this.getSizeClasses();
    
    return `
      <tfoot class="${variantClasses.footer}">
        <tr>
          ${this.options.selectable ? `
            <td class="${sizeClasses} ${variantClasses.footerCell}"></td>
          ` : ''}
          
          ${this.options.columns.map(column => `
            <td class="${sizeClasses} ${variantClasses.footerCell}">
              ${column.footer ? column.footer : ''}
            </td>
          `).join('')}
        </tr>
      </tfoot>
    `;
  }

  renderPagination() {
    const totalPages = Math.ceil(this.getFilteredData().length / this.options.itemsPerPage);
    
    if (totalPages <= 1) return '';
    
    return `
      <div class="mt-4 flex items-center justify-between">
        <div class="text-sm text-gray-700">
          Mostrando 
          <span class="font-medium">${(this.currentPage - 1) * this.options.itemsPerPage + 1}</span>
          a 
          <span class="font-medium">${Math.min(this.currentPage * this.options.itemsPerPage, this.getFilteredData().length)}</span>
          de 
          <span class="font-medium">${this.getFilteredData().length}</span>
          resultados
        </div>
        
        <div class="flex space-x-2">
          <button
            type="button"
            class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            ${this.currentPage === 1 ? 'disabled' : ''}
            onclick="this.previousPage()"
          >
            Anterior
          </button>
          
          <span class="px-3 py-2 text-sm text-gray-700">
            Página ${this.currentPage} de ${totalPages}
          </span>
          
          <button
            type="button"
            class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            ${this.currentPage === totalPages ? 'disabled' : ''}
            onclick="this.nextPage()"
          >
            Siguiente
          </button>
        </div>
      </div>
    `;
  }

  renderCellValue(row, column) {
    if (column.render) {
      return column.render(row[column.key], row);
    }
    
    if (column.format) {
      return column.format(row[column.key], row);
    }
    
    return row[column.key] || '';
  }

  getVariantClasses() {
    const variants = {
      default: {
        table: 'divide-y divide-gray-200',
        header: 'bg-gray-50',
        headerCell: 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider',
        body: 'bg-white divide-y divide-gray-200',
        row: 'bg-white',
        selectedRow: 'bg-blue-50',
        hoverRow: 'hover:bg-gray-50',
        cell: 'px-6 py-4 whitespace-nowrap text-sm text-gray-900',
        footer: 'bg-gray-50',
        footerCell: 'px-6 py-3 text-left text-xs font-medium text-gray-500'
      },
      striped: {
        table: 'divide-y divide-gray-200',
        header: 'bg-gray-50',
        headerCell: 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider',
        body: 'bg-white divide-y divide-gray-200',
        row: 'bg-white even:bg-gray-50',
        selectedRow: 'bg-blue-50',
        hoverRow: 'hover:bg-gray-100',
        cell: 'px-6 py-4 whitespace-nowrap text-sm text-gray-900',
        footer: 'bg-gray-50',
        footerCell: 'px-6 py-3 text-left text-xs font-medium text-gray-500'
      },
      bordered: {
        table: 'border border-gray-200',
        header: 'bg-gray-50',
        headerCell: 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200',
        body: 'bg-white',
        row: 'bg-white',
        selectedRow: 'bg-blue-50',
        hoverRow: 'hover:bg-gray-50',
        cell: 'px-6 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-200',
        footer: 'bg-gray-50',
        footerCell: 'px-6 py-3 text-left text-xs font-medium text-gray-500 border border-gray-200'
      },
      hoverable: {
        table: 'divide-y divide-gray-200',
        header: 'bg-gray-50',
        headerCell: 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider',
        body: 'bg-white divide-y divide-gray-200',
        row: 'bg-white',
        selectedRow: 'bg-blue-50',
        hoverRow: 'hover:bg-gray-50',
        cell: 'px-6 py-4 whitespace-nowrap text-sm text-gray-900',
        footer: 'bg-gray-50',
        footerCell: 'px-6 py-3 text-left text-xs font-medium text-gray-500'
      }
    };
    
    return variants[this.options.variant] || variants.default;
  }

  getSizeClasses() {
    const sizes = {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base'
    };
    return sizes[this.options.size] || sizes.md;
  }

  sortByColumn(columnKey) {
    if (!this.options.sortable) return;
    
    if (this.sortColumn === columnKey) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = columnKey;
      this.sortDirection = 'asc';
    }
    
    this.updateDisplay();
    
    // Trigger onSort callback
    if (typeof this.options.onSort === 'function') {
      this.options.onSort(columnKey, this.sortDirection);
    }
    
    // Trigger custom event
    this.triggerEvent('sort', { 
      column: columnKey, 
      direction: this.sortDirection 
    });
  }

  toggleRowSelection(index) {
    if (this.options.multiSelect) {
      const itemIndex = this.selectedRows.indexOf(index);
      if (itemIndex > -1) {
        this.selectedRows.splice(itemIndex, 1);
      } else {
        this.selectedRows.push(index);
      }
    } else {
      this.selectedRows = [index];
    }
    
    this.updateDisplay();
    
    // Trigger onSelect callback
    if (typeof this.options.onSelect === 'function') {
      this.options.onSelect(this.selectedRows, this.getSelectedRows());
    }
    
    // Trigger custom event
    this.triggerEvent('select', { 
      selectedIndices: this.selectedRows, 
      selectedRows: this.getSelectedRows() 
    });
  }

  toggleSelectAll(checked) {
    if (!this.options.multiSelect) return;
    
    if (checked) {
      const filteredData = this.getFilteredData();
      this.selectedRows = Array.from({ length: filteredData.length }, (_, i) => i);
    } else {
      this.selectedRows = [];
    }
    
    this.updateDisplay();
    
    // Trigger onSelect callback
    if (typeof this.options.onSelect === 'function') {
      this.options.onSelect(this.selectedRows, this.getSelectedRows());
    }
  }

  handleRowClick(index) {
    if (typeof this.options.onRowClick === 'function') {
      this.options.onRowClick(index, this.options.data[index]);
    }
    
    // Trigger custom event
    this.triggerEvent('rowClick', { 
      index, 
      row: this.options.data[index] 
    });
  }

  setSearchTerm(term) {
    this.searchTerm = term;
    this.currentPage = 1;
    this.updateDisplay();
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplay();
    }
  }

  nextPage() {
    const totalPages = Math.ceil(this.getFilteredData().length / this.options.itemsPerPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
      this.updateDisplay();
    }
  }

  getFilteredData() {
    if (!this.searchTerm) return this.options.data;
    
    return this.options.data.filter(row => {
      return this.options.columns.some(column => {
        const value = row[column.key];
        if (value === null || value === undefined) return false;
        return value.toString().toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    });
  }

  getPaginatedData(data) {
    if (!this.options.pagination) return data;
    
    const startIndex = (this.currentPage - 1) * this.options.itemsPerPage;
    const endIndex = startIndex + this.options.itemsPerPage;
    
    return data.slice(startIndex, endIndex);
  }

  getSortedData(data) {
    if (!this.sortColumn) return data;
    
    const column = this.options.columns.find(col => col.key === this.sortColumn);
    if (!column || !column.sortable) return data;
    
    return [...data].sort((a, b) => {
      let aVal = a[this.sortColumn];
      let bVal = b[this.sortColumn];
      
      if (column.sortType === 'number') {
        aVal = parseFloat(aVal) || 0;
        bVal = parseFloat(bVal) || 0;
      } else if (column.sortType === 'date') {
        aVal = new Date(aVal).getTime();
        bVal = new Date(bVal).getTime();
      } else {
        aVal = String(aVal).toLowerCase();
        bVal = String(bVal).toLowerCase();
      }
      
      if (aVal < bVal) return this.sortDirection === 'asc' ? -1 : 1;
      if (aVal > bVal) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  setColumns(columns) {
    this.options.columns = columns;
    this.updateDisplay();
  }

  setData(data) {
    this.options.data = data;
    this.selectedRows = [];
    this.currentPage = 1;
    this.updateDisplay();
  }

  addRow(row) {
    this.options.data.push(row);
    this.updateDisplay();
  }

  removeRow(index) {
    if (index >= 0 && index < this.options.data.length) {
      this.options.data.splice(index, 1);
      
      // Update selected rows
      this.selectedRows = this.selectedRows
        .map(selectedIndex => selectedIndex > index ? selectedIndex - 1 : selectedIndex)
        .filter(selectedIndex => selectedIndex >= 0);
      
      this.updateDisplay();
    }
  }

  updateRow(index, updates) {
    if (index >= 0 && index < this.options.data.length) {
      this.options.data[index] = { ...this.options.data[index], ...updates };
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

  setShowHeader(showHeader) {
    this.options.showHeader = showHeader;
    this.updateDisplay();
  }

  setShowFooter(showFooter) {
    this.options.showFooter = showFooter;
    this.updateDisplay();
  }

  setSortable(sortable) {
    this.options.sortable = sortable;
    this.updateDisplay();
  }

  setSelectable(selectable, multiSelect = false) {
    this.options.selectable = selectable;
    this.options.multiSelect = multiSelect;
    this.selectedRows = [];
    this.updateDisplay();
  }

  setSearchable(searchable) {
    this.options.searchable = searchable;
    this.updateDisplay();
  }

  setPagination(pagination, itemsPerPage = 10) {
    this.options.pagination = pagination;
    this.options.itemsPerPage = itemsPerPage;
    this.currentPage = 1;
    this.updateDisplay();
  }

  getSelectedRows() {
    return this.selectedRows.map(index => this.options.data[index]);
  }

  getSelectedIndices() {
    return [...this.selectedRows];
  }

  updateDisplay() {
    const table = document.getElementById(this.id);
    if (table) {
      table.outerHTML = this.render();
    }
  }

  triggerEvent(eventName, data = {}) {
    const event = new CustomEvent(`table:${eventName}`, {
      detail: { table: this, ...data },
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
    // Add event listeners for sortable columns
    if (this.options.sortable) {
      const sortableHeaders = document.querySelectorAll(`#${this.id} th[onclick*="sortByColumn"]`);
      sortableHeaders.forEach(header => {
        header.addEventListener('click', (e) => {
          const columnKey = e.target.closest('th').getAttribute('onclick').match(/'([^']+)'/)[1];
          this.sortByColumn(columnKey);
        });
      });
    }
    
    // Add event listeners for selectable rows
    if (this.options.selectable) {
      const checkboxes = document.querySelectorAll(`#${this.id} input[type="checkbox"], #${this.id} input[type="radio"]`);
      checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', () => {
          const rowIndex = parseInt(checkbox.value);
          this.toggleRowSelection(rowIndex);
        });
      });
    }
    
    // Add event listeners for clickable rows
    if (this.options.onRowClick) {
      const tableRows = document.querySelectorAll(`#${this.id} tbody tr`);
      tableRows.forEach((row, index) => {
        row.addEventListener('click', () => {
          this.handleRowClick(index);
        });
      });
    }
  }

  // Métodos estáticos para crear tablas comunes
  static data(columns, data, options = {}) {
    return new Table({ 
      columns, 
      data, 
      variant: 'default',
      ...options 
    });
  }

  static sortable(columns, data, options = {}) {
    return new Table({ 
      columns, 
      data, 
      variant: 'default',
      sortable: true,
      ...options 
    });
  }

  static selectable(columns, data, options = {}) {
    return new Table({ 
      columns, 
      data, 
      variant: 'default',
      selectable: true,
      multiSelect: true,
      ...options 
    });
  }

  static bordered(columns, data, options = {}) {
    return new Table({ 
      columns, 
      data, 
      variant: 'bordered',
      ...options 
    });
  }

  static striped(columns, data, options = {}) {
    return new Table({ 
      columns, 
      data, 
      variant: 'striped',
      ...options 
    });
  }

  // Método para obtener el HTML de la tabla
  getHTML() {
    return this.render();
  }

  // Método para clonar la tabla
  clone() {
    return new Table({ ...this.options });
  }

  // Método para verificar si tiene datos
  hasData() {
    return this.options.data.length > 0;
  }

  // Método para obtener el número total de filas
  getRowCount() {
    return this.options.data.length;
  }

  // Método para obtener una fila específica
  getRow(index) {
    if (index >= 0 && index < this.options.data.length) {
      return this.options.data[index];
    }
    return null;
  }

  // Método para limpiar todos los datos
  clear() {
    this.options.data = [];
    this.selectedRows = [];
    this.currentPage = 1;
    this.updateDisplay();
  }

  // Método para filtrar datos
  filter(predicate) {
    const filteredData = this.options.data.filter(predicate);
    return new Table({ ...this.options, data: filteredData });
  }

  // Método para ordenar datos
  sort(compareFunction) {
    const sortedData = [...this.options.data].sort(compareFunction);
    return new Table({ ...this.options, data: sortedData });
  }
}
