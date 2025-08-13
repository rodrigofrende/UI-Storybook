class c{constructor(e={}){this.options={items:[],collapsed:!1,width:280,collapsedWidth:64,position:"left",variant:"default",showToggle:!0,showLogo:!0,logo:"",logoText:"Logo",onToggle:null,...e},this.isCollapsed=this.options.collapsed,this.id=this.generateId()}generateId(){return"sidebar-"+Math.random().toString(36).substr(2,9)}render(){const e=this.getVariantClasses(),t=this.getPositionClasses(),o=this.isCollapsed?this.options.collapsedWidth:this.options.width;return`
      <aside 
        class="fixed top-0 ${t} h-full ${e.background} ${e.border} transition-all duration-300 ease-in-out z-40"
        id="${this.id}"
        style="width: ${o}px;"
        aria-label="Sidebar"
      >
        <div class="flex flex-col h-full">
          <!-- Header -->
          ${this.renderHeader()}
          
          <!-- Navigation -->
          <nav class="flex-1 overflow-y-auto">
            ${this.renderNavigation()}
          </nav>
          
          <!-- Footer -->
          ${this.renderFooter()}
        </div>
      </aside>
      
      <!-- Overlay for mobile -->
      <div 
        class="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden ${this.isCollapsed?"hidden":""}"
        id="sidebar-overlay-${this.id}"
        onclick="this.toggle()"
      ></div>
    `}renderHeader(){const e=this.getVariantClasses();return`
      <div class="flex items-center justify-between p-4 ${e.headerBorder}">
        ${this.options.showLogo?`
          <div class="flex items-center space-x-3">
            ${this.options.logo?`
              <img src="${this.options.logo}" alt="${this.options.logoText}" class="w-8 h-8">
            `:""}
            ${this.isCollapsed?"":`
              <span class="text-xl font-bold ${e.logoText}">${this.options.logoText}</span>
            `}
          </div>
        `:""}
        
        ${this.options.showToggle?`
          <button
            type="button"
            class="p-2 rounded-md ${e.toggleButton} hover:bg-opacity-80 transition-colors duration-200"
            onclick="this.toggle()"
            aria-label="Toggle sidebar"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              ${this.isCollapsed?`
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
              `:`
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path>
              `}
            </svg>
          </button>
        `:""}
      </div>
    `}renderNavigation(){const e=this.getVariantClasses();return`
      <div class="px-4 py-2">
        ${this.options.items.map(t=>this.renderNavItem(t,e)).join("")}
      </div>
    `}renderNavItem(e,t){const o=e.active||!1,r=e.children&&e.children.length>0,i=e.expanded||!1;return`
      <div class="mb-1">
        ${r?`
          <button
            type="button"
            class="w-full flex items-center justify-between px-3 py-2 rounded-md ${t.navItem} ${o?t.navItemActive:""} hover:bg-opacity-80 transition-colors duration-200"
            onclick="this.toggleSubmenu('${e.id}')"
            aria-expanded="${i}"
          >
            <div class="flex items-center space-x-3">
              ${e.icon?`
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  ${e.icon}
                </svg>
              `:""}
              ${this.isCollapsed?"":`
                <span>${e.label}</span>
              `}
            </div>
            ${this.isCollapsed?"":`
              <svg class="w-4 h-4 transform transition-transform duration-200 ${i?"rotate-180":""}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            `}
          </button>
          ${r?`
            <div class="ml-4 mt-1 ${i?"block":"hidden"}" id="submenu-${e.id}">
              ${e.children.map(l=>this.renderNavItem(l,t)).join("")}
            </div>
          `:""}
        `:`
          <a
            href="${e.href||"#"}"
            class="flex items-center space-x-3 px-3 py-2 rounded-md ${t.navItem} ${o?t.navItemActive:""} hover:bg-opacity-80 transition-colors duration-200"
            ${e.onClick?`onclick="${e.onClick}"`:""}
          >
            ${e.icon?`
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                ${e.icon}
              </svg>
            `:""}
            ${this.isCollapsed?"":`
              <span>${e.label}</span>
            `}
            ${e.badge?`
              <span class="ml-auto inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${t.badge}">
                ${e.badge}
              </span>
            `:""}
          </a>
        `}
      </div>
    `}renderFooter(){const e=this.getVariantClasses();return`
      <div class="p-4 ${e.headerBorder}">
        ${this.isCollapsed?`
          <div class="w-8 h-8 rounded-full bg-gray-300 mx-auto"></div>
        `:`
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 rounded-full bg-gray-300"></div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium ${e.text} truncate">Usuario</p>
              <p class="text-xs ${e.textSecondary} truncate">usuario@ejemplo.com</p>
            </div>
          </div>
        `}
      </div>
    `}getVariantClasses(){const e={default:{background:"bg-white",border:"border-r border-gray-200",headerBorder:"border-b border-gray-200",logoText:"text-gray-900",text:"text-gray-900",textSecondary:"text-gray-500",toggleButton:"text-gray-500 hover:bg-gray-100",navItem:"text-gray-700 hover:bg-gray-100",navItemActive:"bg-blue-100 text-blue-700",badge:"bg-blue-100 text-blue-800"},dark:{background:"bg-gray-900",border:"border-r border-gray-700",headerBorder:"border-b border-gray-700",logoText:"text-white",text:"text-white",textSecondary:"text-gray-400",toggleButton:"text-gray-400 hover:bg-gray-800",navItem:"text-gray-300 hover:bg-gray-800",navItemActive:"bg-blue-600 text-white",badge:"bg-blue-600 text-white"},light:{background:"bg-gray-50",border:"border-r border-gray-200",headerBorder:"border-b border-gray-200",logoText:"text-gray-900",text:"text-gray-900",textSecondary:"text-gray-600",toggleButton:"text-gray-600 hover:bg-gray-200",navItem:"text-gray-700 hover:bg-gray-200",navItemActive:"bg-blue-50 text-blue-700",badge:"bg-blue-100 text-blue-800"}};return e[this.options.variant]||e.default}getPositionClasses(){const e={left:"left-0",right:"right-0"};return e[this.options.position]||e.left}toggle(){this.isCollapsed=!this.isCollapsed,this.updateDisplay(),typeof this.options.onToggle=="function"&&this.options.onToggle(this.isCollapsed),this.triggerEvent("toggle",{collapsed:this.isCollapsed})}collapse(){this.isCollapsed||this.toggle()}expand(){this.isCollapsed&&this.toggle()}setItems(e){this.options.items=e,this.updateDisplay()}addItem(e){this.options.items.push(e),this.updateDisplay()}removeItem(e){e>=0&&e<this.options.items.length&&(this.options.items.splice(e,1),this.updateDisplay())}updateItem(e,t){e>=0&&e<this.options.items.length&&(this.options.items[e]={...this.options.items[e],...t},this.updateDisplay())}setCollapsed(e){this.isCollapsed=e,this.updateDisplay()}setWidth(e){this.options.width=e,this.updateDisplay()}setCollapsedWidth(e){this.options.collapsedWidth=e,this.updateDisplay()}setPosition(e){this.options.position=e,this.updateDisplay()}setVariant(e){this.options.variant=e,this.updateDisplay()}setShowToggle(e){this.options.showToggle=e,this.updateDisplay()}setShowLogo(e){this.options.showLogo=e,this.updateDisplay()}setLogo(e,t=""){this.options.logo=e,t&&(this.options.logoText=t),this.updateDisplay()}toggleSubmenu(e){const t=document.getElementById(`submenu-${e}`);if(t){const o=t.classList.contains("hidden");t.classList.toggle("hidden",!o);const r=this.options.items.find(i=>i.id===e);r&&(r.expanded=!o)}}updateDisplay(){const e=document.getElementById(this.id);e&&(e.outerHTML=this.render())}triggerEvent(e,t={}){const o=new CustomEvent(`sidebar:${e}`,{detail:{sidebar:this,...t},bubbles:!0});document.dispatchEvent(o)}mount(e){typeof e=="string"&&(e=document.querySelector(e)),e&&(e.innerHTML=this.render(),this.attachEventListeners())}attachEventListeners(){document.querySelectorAll(`#${this.id} button[onclick*="toggleSubmenu"]`).forEach(t=>{t.addEventListener("click",o=>{const r=o.target.closest("button").getAttribute("onclick").match(/'([^']+)'/)[1];this.toggleSubmenu(r)})})}static navigation(e,t={}){return new c({items:e,variant:"default",...t})}static admin(e,t={}){return new c({items:e,variant:"dark",showLogo:!0,showToggle:!0,...t})}static minimal(e,t={}){return new c({items:e,variant:"light",showLogo:!1,showToggle:!1,collapsed:!0,...t})}getHTML(){return this.render()}clone(){return new c({...this.options})}isSidebarCollapsed(){return this.isCollapsed}getCurrentWidth(){return this.isCollapsed?this.options.collapsedWidth:this.options.width}getSidebarInfo(){return{collapsed:this.isCollapsed,width:this.getCurrentWidth(),position:this.options.position,variant:this.options.variant,totalItems:this.options.items.length}}}const ie={title:"Components/Navigation/Sidebar",component:c,parameters:{docs:{description:{component:"Un componente de barra lateral versátil con navegación, soporte para colapso y múltiples variantes de diseño."}}},argTypes:{items:{control:"object",description:"Array de elementos de navegación"},collapsed:{control:"boolean",description:"Si el sidebar está colapsado"},width:{control:{type:"range",min:200,max:400,step:10},description:"Ancho del sidebar expandido"},collapsedWidth:{control:{type:"range",min:40,max:100,step:8},description:"Ancho del sidebar colapsado"},position:{control:{type:"select"},options:["left","right"],description:"Posición del sidebar"},variant:{control:{type:"select"},options:["default","dark","light"],description:"Variante de diseño"},showToggle:{control:"boolean",description:"Si mostrar el botón de colapso"},showLogo:{control:"boolean",description:"Si mostrar el logo"},logo:{control:"text",description:"URL del logo"},logoText:{control:"text",description:"Texto del logo"}}},a={args:{items:[{id:"dashboard",label:"Dashboard",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>',href:"#dashboard"},{id:"users",label:"Usuarios",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>',href:"#users"},{id:"settings",label:"Configuración",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>',href:"#settings"}],collapsed:!1,width:280,collapsedWidth:64,position:"left",variant:"default",showToggle:!0,showLogo:!0,logo:"",logoText:"Mi App"},render:s=>{const e=new c(s),t=document.createElement("div");return t.style.height="100vh",t.style.position="relative",e.mount(t),t}},u={args:{...a.args,collapsed:!0},render:a.render},g={args:{...a.args,variant:"dark"},render:a.render},m={args:{...a.args,variant:"light"},render:a.render},b={args:{items:[{id:"dashboard",label:"Dashboard",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>',href:"#dashboard"},{id:"users",label:"Usuarios",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>',expanded:!0,children:[{id:"users-list",label:"Lista de Usuarios",href:"#users-list"},{id:"users-create",label:"Crear Usuario",href:"#users-create"},{id:"users-roles",label:"Roles",href:"#users-roles"}]},{id:"products",label:"Productos",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>',expanded:!1,children:[{id:"products-list",label:"Lista de Productos",href:"#products-list"},{id:"products-categories",label:"Categorías",href:"#products-categories"},{id:"products-inventory",label:"Inventario",href:"#products-inventory"}]},{id:"settings",label:"Configuración",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>',href:"#settings"}],collapsed:!1,width:280,collapsedWidth:64,position:"left",variant:"default",showToggle:!0,showLogo:!0,logo:"",logoText:"Mi App"},render:a.render},v={args:{items:[{id:"dashboard",label:"Dashboard",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>',href:"#dashboard"},{id:"notifications",label:"Notificaciones",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12c-1 0-2-.4-2-1V5c0-1.1.9-2 2-2s2 .9 2 2v6c0 .6-1 1-2 1z"></path>',href:"#notifications",badge:"12"},{id:"messages",label:"Mensajes",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>',href:"#messages",badge:"3"},{id:"settings",label:"Configuración",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>',href:"#settings"}],collapsed:!1,width:280,collapsedWidth:64,position:"left",variant:"default",showToggle:!0,showLogo:!0,logo:"",logoText:"Mi App"},render:a.render},k={args:{...a.args,position:"right"},render:a.render},f={args:{...a.args,showLogo:!1},render:a.render},w={args:{...a.args,showToggle:!1},render:a.render},x={args:{items:[{id:"home",label:"Inicio",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>',href:"#home"},{id:"search",label:"Búsqueda",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>',href:"#search"},{id:"user",label:"Perfil",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>',href:"#user"}],collapsed:!0,width:280,collapsedWidth:64,position:"left",variant:"light",showToggle:!1,showLogo:!1,logo:"",logoText:""},render:a.render},y={args:{items:[{id:"dashboard",label:"Dashboard",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>',href:"#dashboard"},{id:"users",label:"Usuarios",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>',href:"#users"},{id:"analytics",label:"Analytics",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>',href:"#analytics"},{id:"settings",label:"Configuración",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>',href:"#settings"}],collapsed:!1,width:280,collapsedWidth:64,position:"left",variant:"dark",showToggle:!0,showLogo:!0,logo:"",logoText:"Admin Panel"},render:a.render},C={args:{...a.args},render:s=>{const e=new c(s),t=document.createElement("div");t.style.height="100vh",t.style.position="relative";const o=document.createElement("div");o.style.position="fixed",o.style.top="20px",o.style.right="20px",o.style.zIndex="50",o.style.backgroundColor="white",o.style.padding="20px",o.style.borderRadius="8px",o.style.boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1)",o.style.display="flex",o.style.flexDirection="column",o.style.gap="10px",o.style.minWidth="200px";const r=document.createElement("select");r.className="px-3 py-1 border rounded",["default","dark","light"].forEach(n=>{const d=document.createElement("option");d.value=n,d.textContent=n.charAt(0).toUpperCase()+n.slice(1),d.selected=n===s.variant,r.appendChild(d)}),r.onchange=n=>{s.variant=n.target.value,e.setVariant(n.target.value)};const i=document.createElement("select");i.className="px-3 py-1 border rounded",["left","right"].forEach(n=>{const d=document.createElement("option");d.value=n,d.textContent=n.charAt(0).toUpperCase()+n.slice(1),d.selected=n===s.position,i.appendChild(d)}),i.onchange=n=>{s.position=n.target.value,e.setPosition(n.target.value)};const l=document.createElement("input");l.type="range",l.min="200",l.max="400",l.value=s.width,l.className="w-full",l.onchange=n=>{s.width=parseInt(n.target.value),e.setWidth(parseInt(n.target.value))};const p=document.createElement("input");p.type="checkbox",p.checked=s.collapsed,p.onchange=n=>{s.collapsed=n.target.checked,n.target.checked?e.collapse():e.expand()};const M=document.createElement("label");M.textContent="Colapsado",M.style.marginLeft="5px";const h=document.createElement("button");return h.textContent="Toggle Sidebar",h.className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",h.onclick=()=>e.toggle(),o.appendChild(document.createElement("label")).textContent="Variante:",o.appendChild(r),o.appendChild(document.createElement("label")).textContent="Posición:",o.appendChild(i),o.appendChild(document.createElement("label")).textContent=`Ancho: ${s.width}px`,o.appendChild(l),o.appendChild(document.createElement("div")).appendChild(p),o.lastChild.appendChild(M),o.appendChild(h),t.appendChild(o),e.mount(t),t}};var j,z,$;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'dashboard',
      label: 'Dashboard',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>',
      href: '#dashboard'
    }, {
      id: 'users',
      label: 'Usuarios',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>',
      href: '#users'
    }, {
      id: 'settings',
      label: 'Configuración',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>',
      href: '#settings'
    }],
    collapsed: false,
    width: 280,
    collapsedWidth: 64,
    position: 'left',
    variant: 'default',
    showToggle: true,
    showLogo: true,
    logo: '',
    logoText: 'Mi App'
  },
  render: args => {
    const sidebar = new Sidebar(args);
    const container = document.createElement('div');
    container.style.height = '100vh';
    container.style.position = 'relative';
    sidebar.mount(container);
    return container;
  }
}`,...($=(z=a.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var T,S,L;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    collapsed: true
  },
  render: Basic.render
}`,...(L=(S=u.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var E,B,I;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    variant: 'dark'
  },
  render: Basic.render
}`,...(I=(B=g.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var V,H,A;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    variant: 'light'
  },
  render: Basic.render
}`,...(A=(H=m.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var D,W,N;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'dashboard',
      label: 'Dashboard',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>',
      href: '#dashboard'
    }, {
      id: 'users',
      label: 'Usuarios',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>',
      expanded: true,
      children: [{
        id: 'users-list',
        label: 'Lista de Usuarios',
        href: '#users-list'
      }, {
        id: 'users-create',
        label: 'Crear Usuario',
        href: '#users-create'
      }, {
        id: 'users-roles',
        label: 'Roles',
        href: '#users-roles'
      }]
    }, {
      id: 'products',
      label: 'Productos',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>',
      expanded: false,
      children: [{
        id: 'products-list',
        label: 'Lista de Productos',
        href: '#products-list'
      }, {
        id: 'products-categories',
        label: 'Categorías',
        href: '#products-categories'
      }, {
        id: 'products-inventory',
        label: 'Inventario',
        href: '#products-inventory'
      }]
    }, {
      id: 'settings',
      label: 'Configuración',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>',
      href: '#settings'
    }],
    collapsed: false,
    width: 280,
    collapsedWidth: 64,
    position: 'left',
    variant: 'default',
    showToggle: true,
    showLogo: true,
    logo: '',
    logoText: 'Mi App'
  },
  render: Basic.render
}`,...(N=(W=b.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var P,U,F;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'dashboard',
      label: 'Dashboard',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>',
      href: '#dashboard'
    }, {
      id: 'notifications',
      label: 'Notificaciones',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12c-1 0-2-.4-2-1V5c0-1.1.9-2 2-2s2 .9 2 2v6c0 .6-1 1-2 1z"></path>',
      href: '#notifications',
      badge: '12'
    }, {
      id: 'messages',
      label: 'Mensajes',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>',
      href: '#messages',
      badge: '3'
    }, {
      id: 'settings',
      label: 'Configuración',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>',
      href: '#settings'
    }],
    collapsed: false,
    width: 280,
    collapsedWidth: 64,
    position: 'left',
    variant: 'default',
    showToggle: true,
    showLogo: true,
    logo: '',
    logoText: 'Mi App'
  },
  render: Basic.render
}`,...(F=(U=v.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var R,q,O;k.parameters={...k.parameters,docs:{...(R=k.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    position: 'right'
  },
  render: Basic.render
}`,...(O=(q=k.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var G,J,K;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    showLogo: false
  },
  render: Basic.render
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    showToggle: false
  },
  render: Basic.render
}`,...(Y=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,_,ee;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'home',
      label: 'Inicio',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>',
      href: '#home'
    }, {
      id: 'search',
      label: 'Búsqueda',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>',
      href: '#search'
    }, {
      id: 'user',
      label: 'Perfil',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>',
      href: '#user'
    }],
    collapsed: true,
    width: 280,
    collapsedWidth: 64,
    position: 'left',
    variant: 'light',
    showToggle: false,
    showLogo: false,
    logo: '',
    logoText: ''
  },
  render: Basic.render
}`,...(ee=(_=x.parameters)==null?void 0:_.docs)==null?void 0:ee.source}}};var te,oe,ne;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'dashboard',
      label: 'Dashboard',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>',
      href: '#dashboard'
    }, {
      id: 'users',
      label: 'Usuarios',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>',
      href: '#users'
    }, {
      id: 'analytics',
      label: 'Analytics',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>',
      href: '#analytics'
    }, {
      id: 'settings',
      label: 'Configuración',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>',
      href: '#settings'
    }],
    collapsed: false,
    width: 280,
    collapsedWidth: 64,
    position: 'left',
    variant: 'dark',
    showToggle: true,
    showLogo: true,
    logo: '',
    logoText: 'Admin Panel'
  },
  render: Basic.render
}`,...(ne=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ae,se,re;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    ...Basic.args
  },
  render: args => {
    const sidebar = new Sidebar(args);
    const container = document.createElement('div');
    container.style.height = '100vh';
    container.style.position = 'relative';

    // Controles interactivos
    const controls = document.createElement('div');
    controls.style.position = 'fixed';
    controls.style.top = '20px';
    controls.style.right = '20px';
    controls.style.zIndex = '50';
    controls.style.backgroundColor = 'white';
    controls.style.padding = '20px';
    controls.style.borderRadius = '8px';
    controls.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    controls.style.display = 'flex';
    controls.style.flexDirection = 'column';
    controls.style.gap = '10px';
    controls.style.minWidth = '200px';
    const variantSelect = document.createElement('select');
    variantSelect.className = 'px-3 py-1 border rounded';
    ['default', 'dark', 'light'].forEach(variant => {
      const option = document.createElement('option');
      option.value = variant;
      option.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
      option.selected = variant === args.variant;
      variantSelect.appendChild(option);
    });
    variantSelect.onchange = e => {
      args.variant = e.target.value;
      sidebar.setVariant(e.target.value);
    };
    const positionSelect = document.createElement('select');
    positionSelect.className = 'px-3 py-1 border rounded';
    ['left', 'right'].forEach(position => {
      const option = document.createElement('option');
      option.value = position;
      option.textContent = position.charAt(0).toUpperCase() + position.slice(1);
      option.selected = position === args.position;
      positionSelect.appendChild(option);
    });
    positionSelect.onchange = e => {
      args.position = e.target.value;
      sidebar.setPosition(e.target.value);
    };
    const widthInput = document.createElement('input');
    widthInput.type = 'range';
    widthInput.min = '200';
    widthInput.max = '400';
    widthInput.value = args.width;
    widthInput.className = 'w-full';
    widthInput.onchange = e => {
      args.width = parseInt(e.target.value);
      sidebar.setWidth(parseInt(e.target.value));
    };
    const collapsedCheckbox = document.createElement('input');
    collapsedCheckbox.type = 'checkbox';
    collapsedCheckbox.checked = args.collapsed;
    collapsedCheckbox.onchange = e => {
      args.collapsed = e.target.checked;
      if (e.target.checked) {
        sidebar.collapse();
      } else {
        sidebar.expand();
      }
    };
    const collapsedLabel = document.createElement('label');
    collapsedLabel.textContent = 'Colapsado';
    collapsedLabel.style.marginLeft = '5px';
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Sidebar';
    toggleButton.className = 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600';
    toggleButton.onclick = () => sidebar.toggle();
    controls.appendChild(document.createElement('label')).textContent = 'Variante:';
    controls.appendChild(variantSelect);
    controls.appendChild(document.createElement('label')).textContent = 'Posición:';
    controls.appendChild(positionSelect);
    controls.appendChild(document.createElement('label')).textContent = \`Ancho: \${args.width}px\`;
    controls.appendChild(widthInput);
    controls.appendChild(document.createElement('div')).appendChild(collapsedCheckbox);
    controls.lastChild.appendChild(collapsedLabel);
    controls.appendChild(toggleButton);
    container.appendChild(controls);
    sidebar.mount(container);
    return container;
  }
}`,...(re=(se=C.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};const le=["Basic","Collapsed","Dark","Light","WithSubmenus","WithBadges","RightPosition","NoLogo","NoToggle","Minimal","Admin","Interactive"];export{y as Admin,a as Basic,u as Collapsed,g as Dark,C as Interactive,m as Light,x as Minimal,f as NoLogo,w as NoToggle,k as RightPosition,v as WithBadges,b as WithSubmenus,le as __namedExportsOrder,ie as default};
