import SearchInput from './SearchInput.js';

export default {
  title: 'Components/Input/SearchInput',
  component: SearchInput,
  parameters: {
    docs: {
      description: {
        component: 'Un componente de búsqueda avanzado con sugerencias, autocompletado y funcionalidades de filtrado.'
      }
    }
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Texto de placeholder del input'
    },
    value: {
      control: 'text',
      description: 'Valor inicial del input'
    },
    suggestions: {
      control: 'object',
      description: 'Lista de sugerencias para autocompletado'
    },
    className: {
      control: 'text',
      description: 'Clases CSS adicionales'
    }
  }
};

// Historia básica
export const Default = {
  args: {
    placeholder: 'Buscar Pokémon...',
    value: '',
    suggestions: ['Pikachu', 'Charizard', 'Bulbasaur', 'Squirtle', 'Mewtwo']
  },
  render: (args) => {
    const searchInput = new SearchInput(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    searchInput.render(container);
    return container;
  }
};

// Historia con valor inicial
export const WithInitialValue = {
  args: {
    placeholder: 'Buscar Pokémon...',
    value: 'Pikachu',
    suggestions: ['Pikachu', 'Charizard', 'Bulbasaur', 'Squirtle', 'Mewtwo']
  },
  render: (args) => {
    const searchInput = new SearchInput(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    searchInput.render(container);
    return container;
  }
};

// Historia con muchas sugerencias
export const WithManySuggestions = {
  args: {
    placeholder: 'Buscar Pokémon...',
    value: '',
    suggestions: [
      'Pikachu', 'Charizard', 'Bulbasaur', 'Squirtle', 'Mewtwo',
      'Gengar', 'Alakazam', 'Machamp', 'Golem', 'Ninetales',
      'Raichu', 'Arcanine', 'Poliwrath', 'Victreebel', 'Tentacruel'
    ]
  },
  render: (args) => {
    const searchInput = new SearchInput(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    searchInput.render(container);
    return container;
  }
};

// Historia con placeholder personalizado
export const CustomPlaceholder = {
  args: {
    placeholder: '¿Qué Pokémon buscas hoy?',
    value: '',
    suggestions: ['Pikachu', 'Charizard', 'Bulbasaur']
  },
  render: (args) => {
    const searchInput = new SearchInput(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    searchInput.render(container);
    return container;
  }
};

// Historia con funcionalidad de búsqueda
export const WithSearchFunctionality = {
  args: {
    placeholder: 'Buscar Pokémon...',
    value: '',
    suggestions: ['Pikachu', 'Charizard', 'Bulbasaur', 'Squirtle', 'Mewtwo'],
    onSearch: (query) => {
      console.log('Buscando:', query);
      alert(`Buscando: ${query}`);
    },
    onSuggestionSelect: (suggestion) => {
      console.log('Sugerencia seleccionada:', suggestion);
      alert(`Pokémon seleccionado: ${suggestion}`);
    }
  },
  render: (args) => {
    const searchInput = new SearchInput(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    // Agregar información sobre la funcionalidad
    const info = document.createElement('div');
    info.innerHTML = '<p style="margin-bottom: 10px; color: #666;">Escribe para buscar o selecciona una sugerencia. Revisa la consola para ver los logs.</p>';
    container.appendChild(info);
    
    searchInput.render(container);
    return container;
  }
};
