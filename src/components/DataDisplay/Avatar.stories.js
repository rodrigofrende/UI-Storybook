import Avatar from './Avatar.js';

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: 'El componente Avatar muestra imágenes de perfil o iniciales con soporte para diferentes tamaños, formas y estados.'
      }
    }
  },
  argTypes: {
    src: {
      control: 'text',
      description: 'URL de la imagen del avatar'
    },
    alt: {
      control: 'text',
      description: 'Texto alternativo para la imagen'
    },
    fallback: {
      control: 'text',
      description: 'Texto de respaldo cuando no hay imagen'
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Tamaño del avatar'
    },
    shape: {
      control: { type: 'select' },
      options: ['circle', 'square', 'rounded'],
      description: 'Forma del avatar'
    },
    status: {
      control: { type: 'select' },
      options: ['', 'online', 'offline', 'away', 'busy'],
      description: 'Estado del usuario'
    },
    statusPosition: {
      control: { type: 'select' },
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
      description: 'Posición del indicador de estado'
    }
  }
};

// Story básico
export const Default = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    alt: 'John Doe',
    size: 'md',
    shape: 'circle'
  },
  render: (args) => {
    const avatar = new Avatar(args);
    return avatar.render();
  }
};

// Story con imagen
export const WithImage = {
  args: {
    src: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    alt: 'Jane Smith',
    size: 'lg',
    shape: 'circle'
  },
  render: (args) => {
    const avatar = new Avatar(args);
    return avatar.render();
  }
};

// Story con iniciales
export const WithInitials = {
  args: {
    alt: 'María González',
    size: 'lg',
    shape: 'circle'
  },
  render: (args) => {
    const avatar = new Avatar(args);
    return avatar.render();
  }
};

// Story con fallback personalizado
export const WithCustomFallback = {
  args: {
    fallback: 'MG',
    alt: 'María González',
    size: 'lg',
    shape: 'rounded'
  },
  render: (args) => {
    const avatar = new Avatar(args);
    return avatar.render();
  }
};

// Story con estado online
export const OnlineStatus = {
  args: {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    alt: 'Carlos López',
    size: 'lg',
    shape: 'circle',
    status: 'online'
  },
  render: (args) => {
    const avatar = new Avatar(args);
    return avatar.render();
  }
};

// Story con estado offline
export const OfflineStatus = {
  args: {
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    alt: 'Ana Martínez',
    size: 'lg',
    shape: 'circle',
    status: 'offline'
  },
  render: (args) => {
    const avatar = new Avatar(args);
    return avatar.render();
  }
};

// Story con estado ausente
export const AwayStatus = {
  args: {
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    alt: 'Luis Rodríguez',
    size: 'lg',
    shape: 'circle',
    status: 'away'
  },
  render: (args) => {
    const avatar = new Avatar(args);
    return avatar.render();
  }
};

// Story con estado ocupado
export const BusyStatus = {
  args: {
    src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    alt: 'Sofia Pérez',
    size: 'lg',
    shape: 'circle',
    status: 'busy'
  },
  render: (args) => {
    const avatar = new Avatar(args);
    return avatar.render();
  }
};

// Story con estado en posición personalizada
export const CustomStatusPosition = {
  args: {
    src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
    alt: 'Roberto Silva',
    size: 'lg',
    shape: 'circle',
    status: 'online',
    statusPosition: 'top-left'
  },
  render: (args) => {
    const avatar = new Avatar(args);
    return avatar.render();
  }
};

// Story con forma cuadrada
export const SquareShape = {
  args: {
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    alt: 'Carmen Vega',
    size: 'lg',
    shape: 'square'
  },
  render: (args) => {
    const avatar = new Avatar(args);
    return avatar.render();
  }
};

// Story con forma redondeada
export const RoundedShape = {
  args: {
    src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face',
    alt: 'Diego Morales',
    size: 'lg',
    shape: 'rounded'
  },
  render: (args) => {
    const avatar = new Avatar(args);
    return avatar.render();
  }
};

// Story con todos los tamaños
export const AllSizes = {
  render: () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
    const avatars = sizes.map(size => {
      const avatar = new Avatar({
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        alt: 'Usuario',
        size: size
      });
      return avatar.render();
    });
    
    return `
      <div class="flex items-end space-x-4 p-4">
        ${avatars.join('')}
      </div>
    `;
  }
};

// Story con todos los estados
export const AllStatuses = {
  render: () => {
    const statuses = [
      { status: 'online', label: 'Online' },
      { status: 'offline', label: 'Offline' },
      { status: 'away', label: 'Ausente' },
      { status: 'busy', label: 'Ocupado' }
    ];
    
    const avatars = statuses.map(({ status, label }) => {
      const avatar = new Avatar({
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        alt: 'Usuario',
        size: 'lg',
        status: status
      });
      return `
        <div class="text-center">
          ${avatar.render()}
          <p class="text-sm text-gray-600 mt-2">${label}</p>
        </div>
      `;
    });
    
    return `
      <div class="flex space-x-6 p-4">
        ${avatars.join('')}
      </div>
    `;
  }
};

// Story con todas las formas
export const AllShapes = {
  render: () => {
    const shapes = [
      { shape: 'circle', label: 'Círculo' },
      { shape: 'square', label: 'Cuadrado' },
      { shape: 'rounded', label: 'Redondeado' }
    ];
    
    const avatars = shapes.map(({ shape, label }) => {
      const avatar = new Avatar({
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        alt: 'Usuario',
        size: 'lg',
        shape: shape
      });
      return `
        <div class="text-center">
          ${avatar.render()}
          <p class="text-sm text-gray-600 mt-2">${label}</p>
        </div>
      `;
    });
    
    return `
      <div class="flex space-x-6 p-4">
        ${avatars.join('')}
      </div>
    `;
  }
};

// Story usando métodos estáticos
export const StaticMethods = {
  render: () => {
    const userAvatar = Avatar.user({ size: 'lg', status: 'online' });
    const groupAvatar = Avatar.group({ size: 'lg', shape: 'square' });
    const anonymousAvatar = Avatar.anonymous({ size: 'lg' });
    const initialsAvatar = Avatar.initials('JD', { size: 'lg', shape: 'rounded' });
    const nameAvatar = Avatar.fromName('María González', { size: 'lg', status: 'away' });
    const companyAvatar = Avatar.company('Tech Solutions Inc', { size: 'lg' });
    
    return `
      <div class="grid grid-cols-3 gap-6 p-4">
        <div class="text-center">
          ${userAvatar.render()}
          <p class="text-sm text-gray-600 mt-2">Usuario</p>
        </div>
        <div class="text-center">
          ${groupAvatar.render()}
          <p class="text-sm text-gray-600 mt-2">Grupo</p>
        </div>
        <div class="text-center">
          ${anonymousAvatar.render()}
          <p class="text-sm text-gray-600 mt-2">Anónimo</p>
        </div>
        <div class="text-center">
          ${initialsAvatar.render()}
          <p class="text-sm text-gray-600 mt-2">Iniciales</p>
        </div>
        <div class="text-center">
          ${nameAvatar.render()}
          <p class="text-sm text-gray-600 mt-2">Desde Nombre</p>
        </div>
        <div class="text-center">
          ${companyAvatar.render()}
          <p class="text-sm text-gray-600 mt-2">Empresa</p>
        </div>
      </div>
    `;
  }
};

// Story con avatares de grupo
export const GroupAvatars = {
  render: () => {
    const avatars = [
      { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face', alt: 'Usuario 1' },
      { src: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face', alt: 'Usuario 2' },
      { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face', alt: 'Usuario 3' },
      { src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face', alt: 'Usuario 4' }
    ];
    
    const avatarElements = avatars.map((avatarData, index) => {
      const avatar = new Avatar({
        ...avatarData,
        size: 'md',
        status: index === 0 ? 'online' : (index === 1 ? 'away' : 'offline')
      });
      return avatar.render();
    });
    
    return `
      <div class="flex -space-x-2 p-4">
        ${avatarElements.join('')}
      </div>
    `;
  }
};

// Story interactivo
export const Interactive = {
  render: () => {
    const container = document.createElement('div');
    container.innerHTML = `
      <div class="p-4 space-y-4">
        <div class="flex space-x-4">
          <button id="changeImage" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Cambiar Imagen
          </button>
          <button id="changeSize" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Cambiar Tamaño
          </button>
          <button id="changeShape" class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
            Cambiar Forma
          </button>
          <button id="toggleStatus" class="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
            Toggle Estado
          </button>
        </div>
        <div id="avatarContainer"></div>
      </div>
    `;
    
    const avatar = new Avatar({
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      alt: 'Usuario Interactivo',
      size: 'lg',
      status: 'online'
    });
    
    const avatarContainer = container.querySelector('#avatarContainer');
    avatar.mount(avatarContainer);
    
    // Event listeners
    container.querySelector('#changeImage').addEventListener('click', () => {
      const images = [
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
      ];
      const randomImage = images[Math.floor(Math.random() * images.length)];
      avatar.setImage(randomImage, 'Usuario');
    });
    
    container.querySelector('#changeSize').addEventListener('click', () => {
      const sizes = ['sm', 'md', 'lg', 'xl'];
      const currentSize = avatar.options.size;
      const currentIndex = sizes.indexOf(currentSize);
      const nextIndex = (currentIndex + 1) % sizes.length;
      avatar.setSize(sizes[nextIndex]);
    });
    
    container.querySelector('#changeShape').addEventListener('click', () => {
      const shapes = ['circle', 'square', 'rounded'];
      const currentShape = avatar.options.shape;
      const currentIndex = shapes.indexOf(currentShape);
      const nextIndex = (currentIndex + 1) % shapes.length;
      avatar.setShape(shapes[nextIndex]);
    });
    
    container.querySelector('#toggleStatus').addEventListener('click', () => {
      const statuses = ['online', 'away', 'busy', 'offline', ''];
      const currentStatus = avatar.options.status;
      const currentIndex = statuses.indexOf(currentStatus);
      const nextIndex = (currentIndex + 1) % statuses.length;
      avatar.setStatus(statuses[nextIndex]);
    });
    
    return container;
  }
};

// Story con fallback de imagen
export const ImageFallback = {
  render: () => {
    const avatar = new Avatar({
      src: 'https://invalid-url-that-will-fail.com/image.jpg',
      alt: 'Usuario con Fallback',
      size: 'lg',
      fallback: 'U'
    });
    
    return `
      <div class="p-4">
        <p class="text-sm text-gray-600 mb-2">Este avatar tiene una URL de imagen inválida, por lo que mostrará el fallback:</p>
        ${avatar.render()}
      </div>
    `;
  }
};

// Story con diferentes posiciones de estado
export const StatusPositions = {
  render: () => {
    const positions = [
      { position: 'top-left', label: 'Arriba Izquierda' },
      { position: 'top-right', label: 'Arriba Derecha' },
      { position: 'bottom-left', label: 'Abajo Izquierda' },
      { position: 'bottom-right', label: 'Abajo Derecha' }
    ];
    
    const avatars = positions.map(({ position, label }) => {
      const avatar = new Avatar({
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        alt: 'Usuario',
        size: 'lg',
        status: 'online',
        statusPosition: position
      });
      return `
        <div class="text-center">
          ${avatar.render()}
          <p class="text-sm text-gray-600 mt-2">${label}</p>
        </div>
      `;
    });
    
    return `
      <div class="grid grid-cols-2 gap-6 p-4">
        ${avatars.join('')}
      </div>
    `;
  }
};
