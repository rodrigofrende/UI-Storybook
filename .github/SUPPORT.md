# Soporte

## 🆘 ¿Necesitas Ayuda?

Estamos aquí para ayudarte con tu librería UI. Aquí tienes varias formas de obtener soporte:

## 📚 Documentación

- **[README Principal](../README.md)** - Guía completa del proyecto
- **[Storybook](../README.md#storybook)** - Documentación interactiva de componentes
- **[Guía de Contribución](CONTRIBUTING.md)** - Cómo contribuir al proyecto

## 🐛 Reportar Bugs

Si encuentras un bug:

1. **Busca en Issues existentes** - Es posible que ya esté reportado
2. **Crea un nuevo Issue** usando el template de [Bug Report](ISSUE_TEMPLATE/bug_report.md)
3. **Incluye detalles** como:
   - Pasos para reproducir
   - Comportamiento esperado vs actual
   - Screenshots si es posible
   - Información del entorno

## 💡 Solicitar Features

¿Tienes una idea para mejorar la librería?

1. **Busca en Issues existentes** - Es posible que ya esté solicitado
2. **Crea un nuevo Issue** usando el template de [Feature Request](ISSUE_TEMPLATE/feature_request.md)
3. **Describe detalladamente** tu propuesta

## ❓ Preguntas Generales

Para preguntas que no son bugs ni features:

1. **Usa Discussions** - Para conversaciones generales
2. **Crea un Issue** con la etiqueta `question`
3. **Menciona** que es una pregunta general

## 🚀 Problemas Comunes

### Storybook no inicia

```bash
# Verifica que las dependencias estén instaladas
npm install

# Intenta limpiar la caché
npm run build-storybook
npm run storybook
```

### Componentes no se renderizan

- Verifica que Tailwind CSS esté cargado
- Revisa la consola del navegador por errores
- Asegúrate de que los archivos `.stories.js` estén en la ubicación correcta

### Problemas de estilos

- Verifica que Tailwind CSS esté configurado correctamente
- Revisa que las clases CSS estén bien escritas
- Asegúrate de que el archivo `preview-head.html` esté configurado

## 🔧 Solución de Problemas

### Logs de Error

Si encuentras errores, incluye:

```bash
# Versión de Node.js
node --version

# Versión de npm
npm --version

# Logs de error completos
npm run storybook 2>&1 | tee error.log
```

### Entorno de Desarrollo

- **OS:** Windows, macOS, Linux
- **Node.js:** Versión 16 o superior
- **Navegador:** Chrome, Firefox, Safari, Edge

## 📞 Contacto Directo

Si necesitas ayuda urgente o tienes preguntas específicas:

- **Email:** [INSERTAR EMAIL]
- **Discord:** [INSERTAR SERVIDOR SI LO TIENES]
- **Twitter:** [INSERTAR USUARIO SI LO TIENES]

## 🕒 Tiempos de Respuesta

- **Bugs críticos:** 24-48 horas
- **Features:** 1-2 semanas
- **Preguntas generales:** 3-5 días
- **Pull Requests:** 1-3 días

## 🌟 Agradecimientos

Gracias por usar nuestra librería UI. Tu feedback nos ayuda a mejorar constantemente.

---

**¿No encuentras lo que buscas?** [Abre un Issue](../../issues/new) y te ayudaremos personalmente! 🎉
