import Table from './Table.js';

export default {
  title: 'Components/Layout/Table',
  component: Table,
  parameters: {
    docs: {
      description: {
        component: 'Un componente de tabla versátil con múltiples variantes, ordenamiento, selección, búsqueda y paginación integrada.'
      }
    }
  },
  argTypes: {
    columns: {
      control: 'object',
      description: 'Array de columnas con key, label, sortable, render y format opcionales'
    },
    data: {
      control: 'object',
      description: 'Array de datos para las filas de la tabla'
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'striped', 'bordered', 'hoverable'],
      description: 'Variante de diseño de la tabla'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño de la tabla'
    },
    showHeader: {
      control: 'boolean',
      description: 'Si mostrar el encabezado de la tabla'
    },
    showFooter: {
      control: 'boolean',
      description: 'Si mostrar el pie de la tabla'
    },
    sortable: {
      control: 'boolean',
      description: 'Si la tabla es ordenable'
    },
    selectable: {
      control: 'boolean',
      description: 'Si la tabla es seleccionable'
    },
    multiSelect: {
      control: 'boolean',
      description: 'Si permite selección múltiple'
    },
    searchable: {
      control: 'boolean',
      description: 'Si la tabla tiene búsqueda'
    },
    pagination: {
      control: 'boolean',
      description: 'Si la tabla tiene paginación'
    },
    itemsPerPage: {
      control: { type: 'range', min: 5, max: 50, step: 5 },
      description: 'Elementos por página'
    },
    onSort: {
      control: 'function',
      description: 'Callback cuando se ordena una columna'
    },
    onSelect: {
      control: 'function',
      description: 'Callback cuando se selecciona una fila'
    },
    onRowClick: {
      control: 'function',
      description: 'Callback cuando se hace clic en una fila'
    }
  }
};

// Tabla básica
export const Basic = {
  args: {
    columns: [
      { key: 'name', label: 'Nombre', sortable: true },
      { key: 'email', label: 'Email', sortable: true },
      { key: 'role', label: 'Rol', sortable: true },
      { key: 'status', label: 'Estado', sortable: true }
    ],
    data: [
      { name: 'Juan Pérez', email: 'juan@ejemplo.com', role: 'Administrador', status: 'Activo' },
      { name: 'María García', email: 'maria@ejemplo.com', role: 'Usuario', status: 'Activo' },
      { name: 'Carlos López', email: 'carlos@ejemplo.com', role: 'Editor', status: 'Inactivo' },
      { name: 'Ana Martínez', email: 'ana@ejemplo.com', role: 'Usuario', status: 'Activo' }
    ],
    variant: 'default',
    size: 'md',
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
    onRowClick: null
  },
  render: (args) => {
    const table = new Table(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    
    table.mount(container);
    return container;
  }
};

// Tabla ordenable
export const Sortable = {
  args: {
    ...Basic.args,
    sortable: true,
    onSort: (column, direction) => {
      console.log('Ordenando por:', column, 'dirección:', direction);
    }
  },
  render: Basic.render
};

// Tabla seleccionable
export const Selectable = {
  args: {
    ...Basic.args,
    selectable: true,
    multiSelect: true,
    onSelect: (selectedIndices, selectedRows) => {
      console.log('Filas seleccionadas:', selectedIndices, selectedRows);
    }
  },
  render: Basic.render
};

// Tabla con búsqueda
export const Searchable = {
  args: {
    ...Basic.args,
    searchable: true,
    data: [
      { name: 'Juan Pérez', email: 'juan@ejemplo.com', role: 'Administrador', status: 'Activo' },
      { name: 'María García', email: 'maria@ejemplo.com', role: 'Usuario', status: 'Activo' },
      { name: 'Carlos López', email: 'carlos@ejemplo.com', role: 'Editor', status: 'Inactivo' },
      { name: 'Ana Martínez', email: 'ana@ejemplo.com', role: 'Usuario', status: 'Activo' },
      { name: 'Pedro Sánchez', email: 'pedro@ejemplo.com', role: 'Editor', status: 'Activo' },
      { name: 'Laura Torres', email: 'laura@ejemplo.com', role: 'Usuario', status: 'Inactivo' }
    ]
  },
  render: Basic.render
};

// Tabla con paginación
export const WithPagination = {
  args: {
    ...Basic.args,
    pagination: true,
    itemsPerPage: 3,
    data: [
      { name: 'Juan Pérez', email: 'juan@ejemplo.com', role: 'Administrador', status: 'Activo' },
      { name: 'María García', email: 'maria@ejemplo.com', role: 'Usuario', status: 'Activo' },
      { name: 'Carlos López', email: 'carlos@ejemplo.com', role: 'Editor', status: 'Inactivo' },
      { name: 'Ana Martínez', email: 'ana@ejemplo.com', role: 'Usuario', status: 'Activo' },
      { name: 'Pedro Sánchez', email: 'pedro@ejemplo.com', role: 'Editor', status: 'Activo' },
      { name: 'Laura Torres', email: 'laura@ejemplo.com', role: 'Usuario', status: 'Inactivo' },
      { name: 'Roberto Vega', email: 'roberto@ejemplo.com', role: 'Administrador', status: 'Activo' },
      { name: 'Carmen Ruiz', email: 'carmen@ejemplo.com', role: 'Usuario', status: 'Activo' }
    ]
  },
  render: Basic.render
};

// Tabla con variante striped
export const Striped = {
  args: {
    ...Basic.args,
    variant: 'striped'
  },
  render: Basic.render
};

// Tabla con variante bordered
export const Bordered = {
  args: {
    ...Basic.args,
    variant: 'bordered'
  },
  render: Basic.render
};

// Tabla con variante hoverable
export const Hoverable = {
  args: {
    ...Basic.args,
    variant: 'hoverable',
    onRowClick: (index, row) => {
      console.log('Fila clickeada:', index, row);
    }
  },
  render: Basic.render
};

// Tabla pequeña
export const Small = {
  args: {
    ...Basic.args,
    size: 'sm'
  },
  render: Basic.render
};

// Tabla grande
export const Large = {
  args: {
    ...Basic.args,
    size: 'lg'
  },
  render: Basic.render
};

// Tabla de productos
export const Products = {
  args: {
    columns: [
      { key: 'name', label: 'Producto', sortable: true },
      { key: 'category', label: 'Categoría', sortable: true },
      { key: 'price', label: 'Precio', sortable: true, sortType: 'number' },
      { key: 'stock', label: 'Stock', sortable: true, sortType: 'number' },
      { key: 'status', label: 'Estado', sortable: true }
    ],
    data: [
      { name: 'iPhone 13 Pro', category: 'Electrónicos', price: 999, stock: 15, status: 'Disponible' },
      { name: 'MacBook Air M2', category: 'Computadoras', price: 1199, stock: 8, status: 'Disponible' },
      { name: 'iPad Air', category: 'Tablets', price: 599, stock: 0, status: 'Agotado' },
      { name: 'AirPods Pro', category: 'Audio', price: 249, stock: 25, status: 'Disponible' },
      { name: 'Apple Watch', category: 'Wearables', price: 399, stock: 12, status: 'Disponible' }
    ],
    variant: 'bordered',
    sortable: true,
    selectable: true,
    multiSelect: true
  },
  render: Basic.render
};

// Tabla de usuarios con acciones
export const UsersWithActions = {
  args: {
    columns: [
      { key: 'avatar', label: 'Avatar', render: (value) => `<div class="w-8 h-8 bg-gray-300 rounded-full"></div>` },
      { key: 'name', label: 'Nombre', sortable: true },
      { key: 'email', label: 'Email', sortable: true },
      { key: 'role', label: 'Rol', sortable: true },
      { key: 'lastLogin', label: 'Último acceso', sortable: true, sortType: 'date' },
      { key: 'actions', label: 'Acciones', render: (value, row) => `
        <div class="flex space-x-2">
          <button class="p-1 text-blue-600 hover:bg-blue-100 rounded" onclick="console.log('Editar ${row.name}')">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
            </svg>
          </button>
          <button class="p-1 text-red-600 hover:bg-red-100 rounded" onclick="console.log('Eliminar ${row.name}')">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
            </svg>
          </button>
        </div>
      ` }
    ],
    data: [
      { name: 'Juan Pérez', email: 'juan@ejemplo.com', role: 'Administrador', lastLogin: '2024-12-15T10:30:00Z' },
      { name: 'María García', email: 'maria@ejemplo.com', role: 'Usuario', lastLogin: '2024-12-14T15:45:00Z' },
      { name: 'Carlos López', email: 'carlos@ejemplo.com', role: 'Editor', lastLogin: '2024-12-13T09:15:00Z' },
      { name: 'Ana Martínez', email: 'ana@ejemplo.com', role: 'Usuario', lastLogin: '2024-12-15T08:20:00Z' }
    ],
    variant: 'hoverable',
    sortable: true,
    onRowClick: (index, row) => {
      console.log('Usuario clickeado:', row.name);
    }
  },
  render: Basic.render
};

// Tabla de finanzas
export const Financial = {
  args: {
    columns: [
      { key: 'date', label: 'Fecha', sortable: true, sortType: 'date' },
      { key: 'description', label: 'Descripción', sortable: true },
      { key: 'category', label: 'Categoría', sortable: true },
      { key: 'amount', label: 'Monto', sortable: true, sortType: 'number', 
        render: (value) => `<span class="font-mono ${value >= 0 ? 'text-green-600' : 'text-red-600'}">${value >= 0 ? '+' : ''}$${Math.abs(value).toFixed(2)}</span>` },
      { key: 'balance', label: 'Balance', sortable: true, sortType: 'number',
        render: (value) => `<span class="font-mono font-semibold">$${value.toFixed(2)}</span>` }
    ],
    data: [
      { date: '2024-12-15', description: 'Salario', category: 'Ingresos', amount: 2500, balance: 2500 },
      { date: '2024-12-14', description: 'Supermercado', category: 'Alimentación', amount: -120.50, balance: 2379.50 },
      { date: '2024-12-13', description: 'Gasolina', category: 'Transporte', amount: -45.00, balance: 2334.50 },
      { date: '2024-12-12', description: 'Freelance', category: 'Ingresos', amount: 300, balance: 2634.50 },
      { date: '2024-12-11', description: 'Restaurante', category: 'Entretenimiento', amount: -65.00, balance: 2569.50 }
    ],
    variant: 'striped',
    sortable: true,
    showFooter: true
  },
  render: Basic.render
};

// Tabla interactiva completa
export const Interactive = {
  args: {
    ...Basic.args,
    sortable: true,
    selectable: true,
    multiSelect: true,
    searchable: true,
    pagination: true,
    itemsPerPage: 5,
    onSort: (column, direction) => {
      console.log('Ordenando por:', column, 'dirección:', direction);
    },
    onSelect: (selectedIndices, selectedRows) => {
      console.log('Filas seleccionadas:', selectedIndices, selectedRows);
    },
    onRowClick: (index, row) => {
      console.log('Fila clickeada:', index, row);
    }
  },
  render: (args) => {
    const table = new Table(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    
    // Controles interactivos
    const controls = document.createElement('div');
    controls.style.marginBottom = '20px';
    controls.style.display = 'flex';
    controls.style.gap = '10px';
    controls.style.flexWrap = 'wrap';
    controls.style.alignItems = 'center';
    
    const variantSelect = document.createElement('select');
    variantSelect.className = 'px-3 py-1 border rounded';
    ['default', 'striped', 'bordered', 'hoverable'].forEach(variant => {
      const option = document.createElement('option');
      option.value = variant;
      option.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
      option.selected = variant === args.variant;
      variantSelect.appendChild(option);
    });
    variantSelect.onchange = (e) => {
      args.variant = e.target.value;
      table.setVariant(e.target.value);
    };
    
    const sizeSelect = document.createElement('select');
    sizeSelect.className = 'px-3 py-1 border rounded';
    ['sm', 'md', 'lg'].forEach(size => {
      const option = document.createElement('option');
      option.value = size;
      option.textContent = size.toUpperCase();
      option.selected = size === args.size;
      sizeSelect.appendChild(option);
    });
    sizeSelect.onchange = (e) => {
      args.size = e.target.value;
      table.setSize(e.target.value);
    };
    
    const addRowButton = document.createElement('button');
    addRowButton.textContent = 'Agregar Fila';
    addRowButton.className = 'px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600';
    addRowButton.onclick = () => {
      const newRow = {
        name: `Usuario ${Math.floor(Math.random() * 1000)}`,
        email: `usuario${Math.floor(Math.random() * 1000)}@ejemplo.com`,
        role: ['Usuario', 'Editor', 'Administrador'][Math.floor(Math.random() * 3)],
        status: Math.random() > 0.5 ? 'Activo' : 'Inactivo'
      };
      table.addRow(newRow);
    };
    
    const clearButton = document.createElement('button');
    clearButton.textContent = 'Limpiar';
    clearButton.className = 'px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600';
    clearButton.onclick = () => table.clear();
    
    controls.appendChild(document.createElement('label')).textContent = 'Variante:';
    controls.appendChild(variantSelect);
    controls.appendChild(document.createElement('label')).textContent = 'Tamaño:';
    controls.appendChild(sizeSelect);
    controls.appendChild(addRowButton);
    controls.appendChild(clearButton);
    
    container.appendChild(controls);
    
    // Tabla
    table.mount(container);
    
    return container;
  }
};
