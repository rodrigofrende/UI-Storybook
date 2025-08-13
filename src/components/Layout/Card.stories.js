import Card from './Card.js';

export default {
  title: 'Components/Layout/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component: 'Un componente de tarjeta versátil para mostrar contenido organizado con múltiples variantes, tamaños y funcionalidades.'
      }
    }
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Título principal de la tarjeta'
    },
    subtitle: {
      control: 'text',
      description: 'Subtítulo de la tarjeta'
    },
    content: {
      control: 'text',
      description: 'Contenido principal de la tarjeta'
    },
    image: {
      control: 'text',
      description: 'URL de la imagen de la tarjeta'
    },
    imageAlt: {
      control: 'text',
      description: 'Texto alternativo de la imagen'
    },
    footer: {
      control: 'text',
      description: 'Contenido del pie de la tarjeta'
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'elevated', 'outlined', 'flat'],
      description: 'Variante visual de la tarjeta'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño de la tarjeta'
    },
    hover: {
      control: 'boolean',
      description: 'Si la tarjeta tiene efecto hover'
    },
    clickable: {
      control: 'boolean',
      description: 'Si la tarjeta es clickeable'
    }
  }
};

// Tarjeta básica
export const Basic = {
  args: {
    title: 'Título de la Tarjeta',
    subtitle: 'Subtítulo descriptivo',
    content: 'Esta es una tarjeta básica con título, subtítulo y contenido. Es perfecta para mostrar información organizada de manera clara.',
    variant: 'default',
    size: 'md',
    hover: true,
    clickable: false
  },
  render: (args) => {
    const card = new Card(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    card.mount(container);
    return container;
  }
};

// Tarjeta con imagen
export const WithImage = {
  args: {
    title: 'Tarjeta con Imagen',
    subtitle: 'Una imagen vale más que mil palabras',
    content: 'Esta tarjeta incluye una imagen que complementa el contenido textual y hace la presentación más atractiva visualmente.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    imageAlt: 'Paisaje natural',
    variant: 'default',
    size: 'md',
    hover: true,
    clickable: false
  },
  render: (args) => {
    const card = new Card(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    card.mount(container);
    return container;
  }
};

// Tarjeta elevada
export const Elevated = {
  args: {
    title: 'Tarjeta Elevada',
    subtitle: 'Con sombra prominente',
    content: 'Esta variante de tarjeta tiene una sombra más pronunciada que la hace destacar del fondo, creando un efecto de elevación.',
    variant: 'elevated',
    size: 'md',
    hover: true,
    clickable: false
  },
  render: (args) => {
    const card = new Card(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    card.mount(container);
    return container;
  }
};

// Tarjeta con borde
export const Outlined = {
  args: {
    title: 'Tarjeta con Borde',
    subtitle: 'Estilo minimalista',
    content: 'Esta variante usa solo un borde sin sombra, creando un diseño más limpio y minimalista.',
    variant: 'outlined',
    size: 'md',
    hover: true,
    clickable: false
  },
  render: (args) => {
    const card = new Card(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    card.mount(container);
    return container;
  }
};

// Tarjeta plana
export const Flat = {
  args: {
    title: 'Tarjeta Plana',
    subtitle: 'Sin sombras ni bordes',
    content: 'Esta variante no tiene sombras ni bordes, creando un diseño completamente plano y moderno.',
    variant: 'flat',
    size: 'md',
    hover: false,
    clickable: false
  },
  render: (args) => {
    const card = new Card(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    card.mount(container);
    return container;
  }
};

// Tarjeta pequeña
export const Small = {
  args: {
    title: 'Tarjeta Pequeña',
    subtitle: 'Tamaño compacto',
    content: 'Esta tarjeta tiene un tamaño reducido, ideal para mostrar información concisa en espacios limitados.',
    variant: 'default',
    size: 'sm',
    hover: true,
    clickable: false
  },
  render: (args) => {
    const card = new Card(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    card.mount(container);
    return container;
  }
};

// Tarjeta grande
export const Large = {
  args: {
    title: 'Tarjeta Grande',
    subtitle: 'Tamaño amplio',
    content: 'Esta tarjeta tiene un tamaño mayor, perfecta para mostrar contenido extenso o cuando se necesita más espacio visual.',
    variant: 'default',
    size: 'lg',
    hover: true,
    clickable: false
  },
  render: (args) => {
    const card = new Card(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    card.mount(container);
    return container;
  }
};

// Tarjeta con pie de página
export const WithFooter = {
  args: {
    title: 'Tarjeta con Pie de Página',
    subtitle: 'Información adicional',
    content: 'Esta tarjeta incluye un pie de página que puede contener metadatos, enlaces o acciones adicionales.',
    footer: 'Última actualización: hace 2 horas • 3 comentarios',
    variant: 'default',
    size: 'md',
    hover: true,
    clickable: false
  },
  render: (args) => {
    const card = new Card(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    card.mount(container);
    return container;
  }
};

// Tarjeta clickeable
export const Clickable = {
  args: {
    title: 'Tarjeta Clickeable',
    subtitle: 'Haz clic para interactuar',
    content: 'Esta tarjeta responde a los clics del usuario, ideal para navegación o acciones interactivas.',
    variant: 'default',
    size: 'md',
    hover: true,
    clickable: true,
    onClick: () => alert('¡Tarjeta clickeada!')
  },
  render: (args) => {
    const card = new Card(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    card.mount(container);
    return container;
  }
};

// Tarjeta con acciones
export const WithActions = {
  args: {
    title: 'Tarjeta con Acciones',
    subtitle: 'Botones interactivos',
    content: 'Esta tarjeta incluye botones de acción que permiten al usuario realizar diferentes operaciones.',
    variant: 'default',
    size: 'md',
    hover: true,
    clickable: false,
    actions: [
      {
        label: 'Ver Detalles',
        variant: 'primary',
        size: 'sm',
        onClick: () => alert('Ver detalles clickeado')
      },
      {
        label: 'Editar',
        variant: 'secondary',
        size: 'sm',
        onClick: () => alert('Editar clickeado')
      },
      {
        label: 'Eliminar',
        variant: 'danger',
        size: 'sm',
        onClick: () => alert('Eliminar clickeado')
      }
    ]
  },
  render: (args) => {
    const card = new Card(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    card.mount(container);
    return container;
  }
};

// Galería de variantes
export const VariantGallery = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const variants = ['default', 'elevated', 'outlined', 'flat'];
    const variantNames = ['Default', 'Elevated', 'Outlined', 'Flat'];
    
    variants.forEach((variant, index) => {
      const cardContainer = document.createElement('div');
      cardContainer.style.marginBottom = '20px';
      
      const title = document.createElement('h3');
      title.textContent = variantNames[index];
      title.style.marginBottom = '10px';
      title.style.fontWeight = 'bold';
      cardContainer.appendChild(title);
      
      const card = new Card({
        title: `Tarjeta ${variantNames[index]}`,
        subtitle: `Variante ${variant}`,
        content: `Esta es una tarjeta de tipo ${variant} que muestra las diferentes opciones de estilo disponibles.`,
        variant: variant,
        size: 'md',
        hover: variant !== 'flat',
        clickable: false
      });
      
      card.mount(cardContainer);
      container.appendChild(cardContainer);
    });
    
    return container;
  }
};

// Galería de tamaños
export const SizeGallery = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const sizes = ['sm', 'md', 'lg'];
    const sizeNames = ['Pequeña', 'Mediana', 'Grande'];
    
    sizes.forEach((size, index) => {
      const cardContainer = document.createElement('div');
      cardContainer.style.marginBottom = '20px';
      
      const title = document.createElement('h3');
      title.textContent = sizeNames[index];
      title.style.marginBottom = '10px';
      title.style.fontWeight = 'bold';
      cardContainer.appendChild(title);
      
      const card = new Card({
        title: `Tarjeta ${sizeNames[index]}`,
        subtitle: `Tamaño ${size}`,
        content: `Esta tarjeta tiene un tamaño ${size} que se adapta a diferentes necesidades de contenido.`,
        variant: 'default',
        size: size,
        hover: true,
        clickable: false
      });
      
      card.mount(cardContainer);
      container.appendChild(cardContainer);
    });
    
    return container;
  }
};
