import Pagination from './Pagination.js';

export default {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component: 'Un componente de paginación versátil con múltiples variantes, navegación por teclado y soporte para diferentes tamaños y estilos.'
      }
    }
  },
  argTypes: {
    currentPage: {
      control: { type: 'range', min: 1, max: 100, step: 1 },
      description: 'Página actual'
    },
    totalPages: {
      control: { type: 'range', min: 1, max: 100, step: 1 },
      description: 'Número total de páginas'
    },
    totalItems: {
      control: { type: 'range', min: 0, max: 1000, step: 10 },
      description: 'Número total de elementos'
    },
    itemsPerPage: {
      control: { type: 'range', min: 5, max: 100, step: 5 },
      description: 'Elementos por página'
    },
    showFirstLast: {
      control: 'boolean',
      description: 'Si mostrar botones de primera/última página'
    },
    showPrevNext: {
      control: 'boolean',
      description: 'Si mostrar botones de anterior/siguiente'
    },
    showPageNumbers: {
      control: 'boolean',
      description: 'Si mostrar números de página'
    },
    maxVisiblePages: {
      control: { type: 'range', min: 3, max: 10, step: 1 },
      description: 'Máximo número de páginas visibles'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño de la paginación'
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'minimal'],
      description: 'Variante de diseño'
    },
    onChange: {
      control: 'function',
      description: 'Callback cuando se cambia de página'
    }
  }
};

// Paginación básica
export const Basic = {
  args: {
    currentPage: 1,
    totalPages: 10,
    totalItems: 100,
    itemsPerPage: 10,
    showFirstLast: true,
    showPrevNext: true,
    showPageNumbers: true,
    maxVisiblePages: 5,
    size: 'md',
    variant: 'default',
    onChange: null
  },
  render: (args) => {
    const pagination = new Pagination(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    
    pagination.mount(container);
    return container;
  }
};

// Paginación con muchas páginas
export const ManyPages = {
  args: {
    ...Basic.args,
    currentPage: 25,
    totalPages: 50,
    totalItems: 500,
    maxVisiblePages: 7
  },
  render: Basic.render
};

// Paginación pequeña
export const Small = {
  args: {
    ...Basic.args,
    size: 'sm',
    totalPages: 8,
    totalItems: 80
  },
  render: Basic.render
};

// Paginación grande
export const Large = {
  args: {
    ...Basic.args,
    size: 'lg',
    totalPages: 15,
    totalItems: 150
  },
  render: Basic.render
};

// Paginación con variante outlined
export const Outlined = {
  args: {
    ...Basic.args,
    variant: 'outlined'
  },
  render: Basic.render
};

// Paginación con variante minimal
export const Minimal = {
  args: {
    ...Basic.args,
    variant: 'minimal'
  },
  render: Basic.render
};

// Paginación sin botones de primera/última
export const NoFirstLast = {
  args: {
    ...Basic.args,
    showFirstLast: false
  },
  render: Basic.render
};

// Paginación sin botones de anterior/siguiente
export const NoPrevNext = {
  args: {
    ...Basic.args,
    showPrevNext: false
  },
  render: Basic.render
};

// Paginación solo con números
export const NumbersOnly = {
  args: {
    ...Basic.args,
    showFirstLast: false,
    showPrevNext: false
  },
  render: Basic.render
};

// Paginación con pocas páginas visibles
export const FewVisiblePages = {
  args: {
    ...Basic.args,
    maxVisiblePages: 3,
    totalPages: 20
  },
  render: Basic.render
};

// Paginación de e-commerce
export const Ecommerce = {
  args: {
    currentPage: 3,
    totalPages: 25,
    totalItems: 250,
    itemsPerPage: 10,
    maxVisiblePages: 5,
    variant: 'outlined',
    size: 'md'
  },
  render: (args) => {
    const pagination = new Pagination(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#ffffff';
    container.style.border = '1px solid #e5e7eb';
    container.style.borderRadius = '8px';
    
    // Header del e-commerce
    const header = document.createElement('div');
    header.style.marginBottom = '20px';
    header.innerHTML = `
      <h3 class="text-lg font-semibold text-gray-900 mb-2">Productos</h3>
      <p class="text-sm text-gray-600">Mostrando ${args.currentPage * args.itemsPerPage - args.itemsPerPage + 1} a ${Math.min(args.currentPage * args.itemsPerPage, args.totalItems)} de ${args.totalItems} productos</p>
    `;
    container.appendChild(header);
    
    // Grid de productos simulados
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))';
    grid.style.gap = '16px';
    grid.style.marginBottom = '20px';
    
    for (let i = 0; i < 6; i++) {
      const product = document.createElement('div');
      product.style.border = '1px solid #e5e7eb';
      product.style.borderRadius = '8px';
      product.style.padding = '16px';
      product.style.textAlign = 'center';
      
      product.innerHTML = `
        <div style="width: 100px; height: 100px; background: #f3f4f6; border-radius: 8px; margin: 0 auto 12px;"></div>
        <h4 class="font-medium text-gray-900 mb-2">Producto ${i + 1}</h4>
        <p class="text-sm text-gray-600 mb-2">Descripción del producto</p>
        <span class="text-lg font-bold text-blue-600">$29.99</span>
      `;
      
      grid.appendChild(product);
    }
    
    container.appendChild(grid);
    
    // Paginación
    pagination.mount(container);
    
    return container;
  }
};

// Paginación de blog
export const Blog = {
  args: {
    currentPage: 2,
    totalPages: 12,
    totalItems: 120,
    itemsPerPage: 10,
    maxVisiblePages: 5,
    variant: 'minimal',
    size: 'md'
  },
  render: (args) => {
    const pagination = new Pagination(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#ffffff';
    
    // Header del blog
    const header = document.createElement('div');
    header.style.marginBottom = '20px';
    header.innerHTML = `
      <h3 class="text-xl font-bold text-gray-900 mb-2">Blog</h3>
      <p class="text-gray-600">Página ${args.currentPage} de ${args.totalPages}</p>
    `;
    container.appendChild(header);
    
    // Lista de artículos simulados
    const articles = document.createElement('div');
    articles.style.marginBottom = '20px';
    
    for (let i = 0; i < 3; i++) {
      const article = document.createElement('article');
      article.style.borderBottom = '1px solid #e5e7eb';
      article.style.paddingBottom = '20px';
      article.style.marginBottom = '20px';
      
      article.innerHTML = `
        <h4 class="text-lg font-semibold text-gray-900 mb-2">Artículo ${i + 1} - Título del Post</h4>
        <p class="text-gray-600 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
        <div class="flex items-center text-sm text-gray-500">
          <span>15 de Diciembre, 2024</span>
          <span class="mx-2">•</span>
          <span>5 min de lectura</span>
        </div>
      `;
      
      articles.appendChild(article);
    }
    
    container.appendChild(articles);
    
    // Paginación
    pagination.mount(container);
    
    return container;
  }
};

// Paginación interactiva
export const Interactive = {
  args: {
    ...Basic.args,
    onChange: (page, pageInfo) => {
      console.log('Página cambiada:', page, pageInfo);
    }
  },
  render: (args) => {
    const pagination = new Pagination(args);
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
    
    const pageInput = document.createElement('input');
    pageInput.type = 'number';
    pageInput.min = '1';
    pageInput.max = args.totalPages;
    pageInput.value = args.currentPage;
    pageInput.className = 'px-3 py-1 border rounded w-20';
    pageInput.placeholder = 'Página';
    
    const goButton = document.createElement('button');
    goButton.textContent = 'Ir a página';
    goButton.className = 'px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600';
    goButton.onclick = () => {
      const page = parseInt(pageInput.value);
      if (page >= 1 && page <= args.totalPages) {
        pagination.setCurrentPage(page);
        args.currentPage = page;
      }
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
      pagination.setSize(e.target.value);
    };
    
    const variantSelect = document.createElement('select');
    variantSelect.className = 'px-3 py-1 border rounded';
    ['default', 'outlined', 'minimal'].forEach(variant => {
      const option = document.createElement('option');
      option.value = variant;
      option.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
      option.selected = variant === args.variant;
      variantSelect.appendChild(option);
    });
    variantSelect.onchange = (e) => {
      args.variant = e.target.value;
      pagination.setVariant(e.target.value);
    };
    
    controls.appendChild(document.createElement('label')).textContent = 'Ir a página:';
    controls.appendChild(pageInput);
    controls.appendChild(goButton);
    controls.appendChild(document.createElement('label')).textContent = 'Tamaño:';
    controls.appendChild(sizeSelect);
    controls.appendChild(document.createElement('label')).textContent = 'Variante:';
    controls.appendChild(variantSelect);
    
    container.appendChild(controls);
    
    // Paginación
    pagination.mount(container);
    
    return container;
  }
};
