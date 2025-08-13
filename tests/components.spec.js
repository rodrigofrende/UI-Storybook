const { test, expect } = require('@playwright/test');

test.describe('UI Components Library', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display all 24 UI components', async ({ page }) => {
    // Verificar que el título principal esté presente
    await expect(page.locator('h1')).toHaveText('UI/UX COMPONENTS');
    
    // Verificar que haya 24 componentes (6 filas x 4 columnas en pantallas grandes)
    const components = page.locator('.grid > div');
    await expect(components).toHaveCount(24);
  });

  test('should display button component correctly', async ({ page }) => {
    const buttonComponent = page.locator('text=BUTTON').first();
    await expect(buttonComponent).toBeVisible();
    
    // Verificar que el botón tenga el estilo correcto
    const button = page.locator('.bg-light-blue').first();
    await expect(button).toHaveText('Button');
    await expect(button).toHaveCSS('background-color', 'rgb(59, 130, 246)'); // light-blue
  });

  test('should display input component correctly', async ({ page }) => {
    const inputComponent = page.locator('text=INPUT').first();
    await expect(inputComponent).toBeVisible();
    
    // Verificar que el input tenga el estilo correcto
    const input = page.locator('.border-2.border-dark-blue').first();
    await expect(input).toHaveText('Input');
  });

  test('should display dropdown component correctly', async ({ page }) => {
    const dropdownComponent = page.locator('text=DROPDOWN').first();
    await expect(dropdownComponent).toBeVisible();
    
    // Verificar que el dropdown tenga el ícono de búsqueda
    const searchIcon = page.locator('svg').first();
    await expect(searchIcon).toBeVisible();
  });

  test('should display slider component correctly', async ({ page }) => {
    const sliderComponent = page.locator('text=SLIDER').first();
    await expect(sliderComponent).toBeVisible();
    
    // Verificar que el slider tenga el thumb
    const sliderThumb = page.locator('.w-4.h-4.bg-dark-blue.rounded-full').first();
    await expect(sliderThumb).toBeVisible();
  });

  test('should display toggle component correctly', async ({ page }) => {
    const toggleComponent = page.locator('text=TOGGLE').first();
    await expect(toggleComponent).toBeVisible();
    
    // Verificar que el toggle tenga el switch
    const toggleSwitch = page.locator('.w-6.h-6.bg-dark-blue.rounded-full').first();
    await expect(toggleSwitch).toBeVisible();
  });

  test('should display icon component correctly', async ({ page }) => {
    const iconComponent = page.locator('text=ICON').first();
    await expect(iconComponent).toBeVisible();
    
    // Verificar que el ícono sea una estrella
    const starIcon = page.locator('svg').nth(1);
    await expect(starIcon).toBeVisible();
  });

  test('should display navbar component correctly', async ({ page }) => {
    const navbarComponent = page.locator('text=NAVBAR').first();
    await expect(navbarComponent).toBeVisible();
    
    // Verificar que tenga las tres líneas del menú hamburguesa
    const hamburgerLines = page.locator('.space-y-1 > div');
    await expect(hamburgerLines).toHaveCount(3);
  });

  test('should display sidebar component correctly', async ({ page }) => {
    const sidebarComponent = page.locator('text=SIDEBAR').first();
    await expect(sidebarComponent).toBeVisible();
    
    // Verificar que tenga el borde y las líneas
    const sidebar = page.locator('.border-2.border-dark-blue.rounded-lg').nth(1);
    await expect(sidebar).toBeVisible();
  });

  test('should display breadcrumbs component correctly', async ({ page }) => {
    const breadcrumbsComponent = page.locator('text=BREADCRUMBS').first();
    await expect(breadcrumbsComponent).toBeVisible();
    
    // Verificar que tenga las flechas
    const arrows = page.locator('svg');
    await expect(arrows).toHaveCount(3);
  });

  test('should display tabs component correctly', async ({ page }) => {
    const tabsComponent = page.locator('text=TABS').first();
    await expect(tabsComponent).toBeVisible();
    
    // Verificar que tenga 3 tabs
    const tabs = page.locator('text=Tab 1, text=Tab 2, text=Tab 3');
    await expect(tabs).toHaveCount(3);
  });

  test('should display pagination component correctly', async ({ page }) => {
    const paginationComponent = page.locator('text=PAGINATION').first();
    await expect(paginationComponent).toBeVisible();
    
    // Verificar que tenga los números y la flecha
    const pageNumbers = page.locator('text=1, text=2');
    await expect(pageNumbers).toHaveCount(2);
  });

  test('should display card component correctly', async ({ page }) => {
    const cardComponent = page.locator('text=CARD').first();
    await expect(cardComponent).toBeVisible();
    
    // Verificar que tenga el contenido interno
    const cardContent = page.locator('.w-32.h-24.border-2.border-dark-blue.rounded-lg');
    await expect(cardContent).toBeVisible();
  });

  test('should display list component correctly', async ({ page }) => {
    const listComponent = page.locator('text=LIST').first();
    await expect(listComponent).toBeVisible();
    
    // Verificar que tenga las líneas de la lista
    const listLines = page.locator('.space-y-2 > div');
    await expect(listLines).toHaveCount(3);
  });

  test('should display table component correctly', async ({ page }) => {
    const tableComponent = page.locator('text=TABLE').first();
    await expect(tableComponent).toBeVisible();
    
    // Verificar que tenga la grilla 3x3
    const tableCells = page.locator('.grid.grid-cols-3.gap-1 > div');
    await expect(tableCells).toHaveCount(9);
  });

  test('should display modal component correctly', async ({ page }) => {
    const modalComponent = page.locator('text=MODAL').first();
    await expect(modalComponent).toBeVisible();
    
    // Verificar que tenga el botón de cerrar
    const closeButton = page.locator('text=×');
    await expect(closeButton).toBeVisible();
  });

  test('should display alert component correctly', async ({ page }) => {
    const alertComponent = page.locator('text=ALERT').first();
    await expect(alertComponent).toBeVisible();
    
    // Verificar que tenga el signo de exclamación
    const exclamationMark = page.locator('text=!');
    await expect(exclamationMark).toBeVisible();
  });

  test('should display tooltip component correctly', async ({ page }) => {
    const tooltipComponent = page.locator('text=TOOLTIP').first();
    await expect(tooltipComponent).toBeVisible();
    
    // Verificar que tenga la forma de burbuja
    const tooltipBubble = page.locator('.w-16.h-12.bg-dark-blue');
    await expect(tooltipBubble).toBeVisible();
  });

  test('should display toast component correctly', async ({ page }) => {
    const toastComponent = page.locator('text=TOAST').first();
    await expect(toastComponent).toBeVisible();
    
    // Verificar que tenga el contenedor
    const toastContainer = page.locator('.w-32.h-12.border-2.border-dark-blue.rounded-lg').last();
    await expect(toastContainer).toBeVisible();
  });

  test('should display spinner component correctly', async ({ page }) => {
    const spinnerComponent = page.locator('text=SPINNER').first();
    await expect(spinnerComponent).toBeVisible();
    
    // Verificar que tenga la animación
    const spinner = page.locator('.animate-spin');
    await expect(spinner).toBeVisible();
  });

  test('should display avatar component correctly', async ({ page }) => {
    const avatarComponent = page.locator('text=AVATAR').first();
    await expect(avatarComponent).toBeVisible();
    
    // Verificar que tenga la forma circular
    const avatar = page.locator('.w-12.h-12.border-2.border-dark-blue.rounded-full');
    await expect(avatar).toBeVisible();
  });

  test('should display badge component correctly', async ({ page }) => {
    const badgeComponent = page.locator('text=BADGE').first();
    await expect(badgeComponent).toBeVisible();
    
    // Verificar que tenga el número
    const badgeNumber = page.locator('text=3');
    await expect(badgeNumber).toBeVisible();
  });

  test('should display progress components correctly', async ({ page }) => {
    const progressComponents = page.locator('text=PROGRESS');
    await expect(progressComponents).toHaveCount(2);
    
    // Verificar que el segundo progress tenga el fill
    const progressFilled = page.locator('.bg-light-blue.rounded-l-lg');
    await expect(progressFilled).toBeVisible();
  });

  test('should have interactive buttons', async ({ page }) => {
    const button = page.locator('.bg-light-blue').first();
    
    // Hacer click en el botón
    await button.click();
    
    // Verificar que se aplicó la transformación
    await expect(button).toHaveCSS('transform', 'matrix(0.95, 0, 0, 0.95, 0, 0)');
  });

  test('should have editable inputs', async ({ page }) => {
    const input = page.locator('.border-2.border-dark-blue').first();
    
    // Hacer click en el input
    await input.click();
    
    // Verificar que sea editable
    await expect(input).toHaveAttribute('contenteditable', 'true');
  });

  test('should be responsive', async ({ page }) => {
    // Verificar que la grilla sea responsive
    const grid = page.locator('.grid');
    
    // En pantallas pequeñas debería ser 1 columna
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(grid).toHaveClass(/grid-cols-1/);
    
    // En pantallas medianas debería ser 2 columnas
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(grid).toHaveClass(/md:grid-cols-2/);
    
    // En pantallas grandes debería ser 3 columnas
    await page.setViewportSize({ width: 1024, height: 768 });
    await expect(grid).toHaveClass(/lg:grid-cols-3/);
  });
});
