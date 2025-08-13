# Button Component

Un botón reutilizable y accesible con múltiples variantes y estados.

## Características

- **Variantes**: Primary, Secondary, Outline, Ghost
- **Tamaños**: Small, Medium, Large
- **Estados**: Normal, Hover, Focus, Disabled
- **Accesibilidad**: Soporte completo para teclado y lectores de pantalla
- **Animaciones**: Efectos de hover y click suaves

## Uso

```html
<!-- Botón básico -->
<button class="bg-light-blue text-white px-6 py-3 rounded-lg font-medium">
  Click me
</button>

<!-- Con variantes -->
<button class="border-2 border-light-blue text-light-blue px-6 py-3 rounded-lg font-medium">
  Outline Button
</button>
```

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `text` | string | 'Click me' | Texto del botón |
| `variant` | 'primary' \| 'secondary' \| 'outline' \| 'ghost' | 'primary' | Estilo del botón |
| `size` | 'sm' \| 'md' \| 'lg' | 'md' | Tamaño del botón |
| `disabled` | boolean | false | Estado deshabilitado |

## Variantes

### Primary
El botón principal con fondo azul y texto blanco.

### Secondary
Botón secundario con fondo gris.

### Outline
Botón con borde y sin fondo, cambia de color en hover.

### Ghost
Botón transparente que solo muestra el texto.

## Tamaños

- **Small**: `px-4 py-2 text-sm`
- **Medium**: `px-6 py-3 text-base` (default)
- **Large**: `px-8 py-4 text-lg`

## Estados

- **Normal**: Estado por defecto
- **Hover**: Efectos visuales al pasar el mouse
- **Focus**: Indicador visual para navegación por teclado
- **Disabled**: Estado no interactivo con opacidad reducida

## Accesibilidad

- Soporte completo para navegación por teclado
- Indicadores de focus visibles
- Atributos ARIA apropiados
- Compatible con lectores de pantalla

## Ejemplos

```javascript
// Botón con todas las opciones
<Button 
  text="Submit Form"
  variant="primary"
  size="lg"
  disabled={false}
/>
```

## CSS Classes

El componente utiliza Tailwind CSS con clases personalizadas:

- `bg-light-blue`: Color de fondo principal
- `hover:bg-blue-600`: Color de hover
- `focus:ring-2`: Anillo de focus
- `transition-all duration-200`: Transiciones suaves
