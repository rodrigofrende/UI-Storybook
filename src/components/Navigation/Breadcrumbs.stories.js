import Breadcrumbs from './Breadcrumbs.js';

export default {
  title: 'Components/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    docs: {
      description: {
        component: 'Un componente de navegación de migas de pan versátil con múltiples variantes, tamaños y separadores personalizables.'
      }
    }
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'Array de elementos de navegación'
    },
    separator: {
      control: { type: 'select' },
      options: ['/', '>', '|', '→', '•'],
      description: 'Separador entre elementos'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del breadcrumb'
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'minimal'],
      description: 'Variante de diseño'
    },
    showHome: {
      control: 'boolean',
      description: 'Si mostrar el elemento de inicio'
    },
    homeIcon: {
      control: 'text',
      description: 'Icono SVG para el elemento de inicio'
    },
    homeText: {
      control: 'text',
      description: 'Texto del elemento de inicio'
    },
    homeHref: {
      control: 'text',
      description: 'Enlace del elemento de inicio'
    },
    maxItems: {
      control: { type: 'range', min: 0, max: 10, step: 1 },
      description: 'Máximo número de elementos a mostrar (0 = mostrar todos)'
    }
  }
};

// Breadcrumbs básico
export const Basic = {
  args: {
    items: [
      { label: 'Productos', href: '/productos' },
      { label: 'Electrónicos', href: '/productos/electronicos' },
      { label: 'Smartphones', href: '/productos/electronicos/smartphones' }
    ],
    separator: '/',
    size: 'md',
    variant: 'default',
    showHome: true,
    homeIcon: '',
    homeText: 'Inicio',
    homeHref: '/',
    maxItems: 0
  },
  render: (args) => {
    const breadcrumbs = new Breadcrumbs(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    
    breadcrumbs.mount(container);
    return container;
  }
};

// Breadcrumbs sin elemento de inicio
export const NoHome = {
  args: {
    ...Basic.args,
    showHome: false
  },
  render: Basic.render
};

// Breadcrumbs con icono de inicio
export const WithHomeIcon = {
  args: {
    ...Basic.args,
    homeIcon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>'
  },
  render: Basic.render
};

// Breadcrumbs pequeños
export const Small = {
  args: {
    ...Basic.args,
    size: 'sm'
  },
  render: Basic.render
};

// Breadcrumbs grandes
export const Large = {
  args: {
    ...Basic.args,
    size: 'lg'
  },
  render: Basic.render
};

// Breadcrumbs con variante outlined
export const Outlined = {
  args: {
    ...Basic.args,
    variant: 'outlined'
  },
  render: Basic.render
};

// Breadcrumbs con variante minimal
export const Minimal = {
  args: {
    ...Basic.args,
    variant: 'minimal'
  },
  render: Basic.render
};

// Breadcrumbs con separador personalizado
export const CustomSeparator = {
  args: {
    ...Basic.args,
    separator: '→'
  },
  render: Basic.render
};

// Breadcrumbs con separador de flecha
export const ArrowSeparator = {
  args: {
    ...Basic.args,
    separator: '>'
  },
  render: Basic.render
};

// Breadcrumbs con separador de barra
export const BarSeparator = {
  args: {
    ...Basic.args,
    separator: '|'
  },
  render: Basic.render
};

// Breadcrumbs con separador de punto
export const DotSeparator = {
  args: {
    ...Basic.args,
    separator: '•'
  },
  render: Basic.render
};

// Breadcrumbs con límite de elementos
export const WithMaxItems = {
  args: {
    items: [
      { label: 'Productos', href: '/productos' },
      { label: 'Electrónicos', href: '/productos/electronicos' },
      { label: 'Smartphones', href: '/productos/electronicos/smartphones' },
      { label: 'Android', href: '/productos/electronicos/smartphones/android' },
      { label: 'Samsung', href: '/productos/electronicos/smartphones/android/samsung' },
      { label: 'Galaxy S23', href: '/productos/electronicos/smartphones/android/samsung/galaxy-s23' }
    ],
    separator: '/',
    size: 'md',
    variant: 'default',
    showHome: true,
    homeIcon: '',
    homeText: 'Inicio',
    homeHref: '/',
    maxItems: 4
  },
  render: Basic.render
};

// Breadcrumbs de navegación de archivos
export const FilePath = {
  args: {
    items: [
      { label: 'Documents', href: '/documents' },
      { label: 'Work', href: '/documents/work' },
      { label: 'Projects', href: '/documents/work/projects' },
      { label: 'report.pdf', href: '/documents/work/projects/report.pdf' }
    ],
    separator: '>',
    size: 'md',
    variant: 'default',
    showHome: true,
    homeIcon: '',
    homeText: 'Home',
    homeHref: '/',
    maxItems: 0
  },
  render: Basic.render
};

// Breadcrumbs de categorías
export const Categories = {
  args: {
    items: [
      { label: 'Tecnología', href: '/tecnologia' },
      { label: 'Computadoras', href: '/tecnologia/computadoras' },
      { label: 'Laptops', href: '/tecnologia/computadoras/laptops' },
      { label: 'Gaming', href: '/tecnologia/computadoras/laptops/gaming' }
    ],
    separator: '/',
    size: 'md',
    variant: 'minimal',
    showHome: true,
    homeIcon: '',
    homeText: 'Inicio',
    homeHref: '/',
    maxItems: 0
  },
  render: Basic.render
};

// Breadcrumbs de e-commerce
export const Ecommerce = {
  args: {
    items: [
      { label: 'Tienda', href: '/tienda' },
      { label: 'Ropa', href: '/tienda/ropa' },
      { label: 'Hombre', href: '/tienda/ropa/hombre' },
      { label: 'Camisetas', href: '/tienda/ropa/hombre/camisetas' },
      { label: 'Básicas', href: '/tienda/ropa/hombre/camisetas/basicas' }
    ],
    separator: '/',
    size: 'md',
    variant: 'default',
    showHome: true,
    homeIcon: '',
    homeText: 'Inicio',
    homeHref: '/',
    maxItems: 0
  },
  render: Basic.render
};

// Breadcrumbs de blog
export const Blog = {
  args: {
    items: [
      { label: 'Blog', href: '/blog' },
      { label: 'Tecnología', href: '/blog/tecnologia' },
      { label: 'Desarrollo Web', href: '/blog/tecnologia/desarrollo-web' },
      { label: 'React vs Vue', href: '/blog/tecnologia/desarrollo-web/react-vs-vue' }
    ],
    separator: '→',
    size: 'md',
    variant: 'minimal',
    showHome: true,
    homeIcon: '',
    homeText: 'Inicio',
    homeHref: '/',
    maxItems: 0
  },
  render: Basic.render
};

// Breadcrumbs interactivo
export const Interactive = {
  args: {
    ...Basic.args
  },
  render: (args) => {
    const breadcrumbs = new Breadcrumbs(args);
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
    ['default', 'outlined', 'minimal'].forEach(variant => {
      const option = document.createElement('option');
      option.value = variant;
      option.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
      option.selected = variant === args.variant;
      variantSelect.appendChild(option);
    });
    variantSelect.onchange = (e) => {
      args.variant = e.target.value;
      breadcrumbs.setVariant(e.target.value);
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
      breadcrumbs.setSize(e.target.value);
    };
    
    const separatorSelect = document.createElement('select');
    separatorSelect.className = 'px-3 py-1 border rounded';
    ['/', '>', '|', '→', '•'].forEach(separator => {
      const option = document.createElement('option');
      option.value = separator;
      option.textContent = separator;
      option.selected = separator === args.separator;
      separatorSelect.appendChild(option);
    });
    separatorSelect.onchange = (e) => {
      args.separator = e.target.value;
      breadcrumbs.setSeparator(e.target.value);
    };
    
    const showHomeCheckbox = document.createElement('input');
    showHomeCheckbox.type = 'checkbox';
    showHomeCheckbox.checked = args.showHome;
    showHomeCheckbox.onchange = (e) => {
      args.showHome = e.target.checked;
      breadcrumbs.setShowHome(e.target.checked);
    };
    
    const showHomeLabel = document.createElement('label');
    showHomeLabel.textContent = 'Mostrar Inicio';
    showHomeLabel.style.marginLeft = '5px';
    
    const maxItemsInput = document.createElement('input');
    maxItemsInput.type = 'range';
    maxItemsInput.min = '0';
    maxItemsInput.max = '10';
    maxItemsInput.value = args.maxItems;
    maxItemsInput.className = 'w-32';
    maxItemsInput.onchange = (e) => {
      args.maxItems = parseInt(e.target.value);
      breadcrumbs.setMaxItems(parseInt(e.target.value));
    };
    
    const maxItemsLabel = document.createElement('label');
    maxItemsLabel.textContent = `Max Items: ${args.maxItems}`;
    maxItemsLabel.style.minWidth = '100px';
    
    maxItemsInput.oninput = (e) => {
      maxItemsLabel.textContent = `Max Items: ${e.target.value}`;
    };
    
    controls.appendChild(document.createElement('label')).textContent = 'Variante:';
    controls.appendChild(variantSelect);
    controls.appendChild(document.createElement('label')).textContent = 'Tamaño:';
    controls.appendChild(sizeSelect);
    controls.appendChild(document.createElement('label')).textContent = 'Separador:';
    controls.appendChild(separatorSelect);
    controls.appendChild(document.createElement('div')).appendChild(showHomeCheckbox);
    controls.lastChild.appendChild(showHomeLabel);
    controls.appendChild(maxItemsLabel);
    controls.appendChild(maxItemsInput);
    
    container.appendChild(controls);
    breadcrumbs.mount(container);
    
    return container;
  }
};
