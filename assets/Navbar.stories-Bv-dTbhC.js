class r{constructor(e={}){this.options={brand:"Brand",brandLogo:"",items:[],fixed:!1,transparent:!1,color:"white",...e},this.isMenuOpen=!1,this.id=this.generateId()}generateId(){return"navbar-"+Math.random().toString(36).substr(2,9)}render(){const e=this.options.fixed?"fixed top-0 left-0 right-0 z-50":"",n=this.options.transparent?"bg-transparent":"bg-white shadow-sm",a=this.options.color==="dark"?"text-gray-800":"text-white";return`
      <nav class="${e} ${n} border-b border-gray-200 transition-all duration-300" id="${this.id}">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <!-- Brand -->
            <div class="flex items-center">
              ${this.options.brandLogo?`
                <img class="h-8 w-auto mr-3" src="${this.options.brandLogo}" alt="${this.options.brand}">
              `:""}
              <span class="text-xl font-bold ${a}">${this.options.brand}</span>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                ${this.renderNavItems()}
              </div>
            </div>

            <!-- Mobile menu button -->
            <div class="md:hidden">
              <button
                type="button"
                class="text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition-colors duration-200"
                onclick="this.toggleMobileMenu()"
                aria-label="Toggle menu"
              >
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div class="md:hidden hidden" id="mobile-menu-${this.id}">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            ${this.renderMobileNavItems()}
          </div>
        </div>
      </nav>
    `}renderNavItems(){return this.options.items.map(e=>{const n=e.active?"bg-gray-100 text-gray-900":"text-gray-600 hover:bg-gray-50 hover:text-gray-900";return e.type==="button"?`
          <button
            class="px-3 py-2 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
            onclick="${e.onClick||""}"
          >
            ${e.label}
          </button>
        `:`
        <a
          href="${e.href||"#"}"
          class="px-3 py-2 rounded-md text-sm font-medium ${n} transition-colors duration-200"
          ${e.onClick?`onclick="${e.onClick}"`:""}
        >
          ${e.label}
        </a>
      `}).join("")}renderMobileNavItems(){return this.options.items.map(e=>{const n=e.active?"bg-gray-100 text-gray-900":"text-gray-600 hover:bg-gray-50 hover:text-gray-900";return e.type==="button"?`
          <button
            class="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
            onclick="${e.onClick||""}"
          >
            ${e.label}
          </button>
        `:`
        <a
          href="${e.href||"#"}"
          class="block px-3 py-2 rounded-md text-base font-medium ${n} transition-colors duration-200"
          ${e.onClick?`onclick="${e.onClick}"`:""}
        >
          ${e.label}
        </a>
      `}).join("")}toggleMobileMenu(){this.isMenuOpen=!this.isMenuOpen,this.updateMobileMenu()}updateMobileMenu(){const e=document.getElementById(`mobile-menu-${this.id}`);e&&(this.isMenuOpen?(e.classList.remove("hidden"),e.classList.add("block")):(e.classList.remove("block"),e.classList.add("hidden")))}closeMobileMenu(){this.isMenuOpen=!1,this.updateMobileMenu()}setItems(e){this.options.items=e,this.updateDisplay()}addItem(e){this.options.items.push(e),this.updateDisplay()}removeItem(e){this.options.items.splice(e,1),this.updateDisplay()}setBrand(e,n=""){this.options.brand=e,this.options.brandLogo=n,this.updateDisplay()}setFixed(e){this.options.fixed=e,this.updateDisplay()}setTransparent(e){this.options.transparent=e,this.updateDisplay()}setColor(e){this.options.color=e,this.updateDisplay()}updateDisplay(){const e=document.getElementById(this.id);e&&(e.outerHTML=this.render(),this.attachEventListeners())}mount(e){typeof e=="string"&&(e=document.querySelector(e)),e&&(e.innerHTML=this.render(),this.attachEventListeners())}attachEventListeners(){const e=document.querySelector(`#${this.id} button[onclick*="toggleMobileMenu"]`);e&&e.addEventListener("click",()=>this.toggleMobileMenu()),document.addEventListener("click",n=>{n.target.closest(`#${this.id}`)||this.closeMobileMenu()}),window.addEventListener("resize",()=>{window.innerWidth>=768&&this.closeMobileMenu()})}focus(){const e=document.querySelector(`#${this.id} a, #${this.id} button`);e&&e.focus()}isMobileMenuOpen(){return this.isMenuOpen}}const ne={title:"Components/Navigation/Navbar",component:r,parameters:{docs:{description:{component:"Un componente de barra de navegación responsiva con soporte para menú móvil, logo de marca y múltiples estilos."}}},argTypes:{brand:{control:"text",description:"Nombre de la marca"},brandLogo:{control:"text",description:"URL del logo de la marca"},items:{control:"object",description:"Array de elementos de navegación"},fixed:{control:"boolean",description:"Si la navbar está fija en la parte superior"},transparent:{control:"boolean",description:"Si la navbar es transparente"},color:{control:{type:"select"},options:["white","dark"],description:"Color del texto de la marca"}}},p={args:{brand:"Pokémon World",brandLogo:"",items:[{label:"Inicio",href:"#",active:!0},{label:"Pokédex",href:"#"},{label:"Equipo",href:"#"},{label:"Batalla",href:"#"},{label:"Tienda",href:"#"}],fixed:!1,transparent:!1,color:"dark"},render:t=>{const e=new r(t),n=document.createElement("div");return n.style.padding="20px",n.style.paddingTop="80px",e.mount(n),n}},b={args:{brand:"Pokémon World",brandLogo:"https://cdn-icons-png.flaticon.com/512/188/188987.png",items:[{label:"Inicio",href:"#",active:!0},{label:"Pokédex",href:"#"},{label:"Equipo",href:"#"},{label:"Batalla",href:"#"},{label:"Tienda",href:"#"}],fixed:!1,transparent:!1,color:"dark"},render:t=>{const e=new r(t),n=document.createElement("div");return n.style.padding="20px",n.style.paddingTop="80px",e.mount(n),n}},u={args:{brand:"Pokémon World",brandLogo:"",items:[{label:"Inicio",href:"#",active:!0},{label:"Pokédex",href:"#"},{label:"Equipo",href:"#"},{label:"Batalla",href:"#"},{label:"Tienda",href:"#"}],fixed:!0,transparent:!1,color:"dark"},render:t=>{const e=new r(t),n=document.createElement("div");n.style.padding="20px",n.style.paddingTop="80px";const a=document.createElement("div");return a.style.height="200vh",a.style.background="linear-gradient(45deg, #f0f9ff, #e0f2fe, #bae6fd)",a.innerHTML='<div style="padding: 20px; text-align: center;"><h2>Contenido de la página</h2><p>Haz scroll para ver la navbar fija en acción</p></div>',e.mount(n),n.appendChild(a),n}},g={args:{brand:"Pokémon World",brandLogo:"",items:[{label:"Inicio",href:"#",active:!0},{label:"Pokédex",href:"#"},{label:"Equipo",href:"#"},{label:"Batalla",href:"#"},{label:"Tienda",href:"#"}],fixed:!1,transparent:!0,color:"white"},render:t=>{const e=new r(t),n=document.createElement("div");n.style.padding="20px",n.style.paddingTop="80px";const a=document.createElement("div");return a.style.background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)",a.style.minHeight="100vh",a.style.position="absolute",a.style.top="0",a.style.left="0",a.style.right="0",a.style.zIndex="-1",e.mount(n),n.appendChild(a),n}},m={args:{brand:"Pokémon World",brandLogo:"",items:[{label:"Inicio",href:"#",active:!0},{label:"Pokédex",href:"#"},{label:"Equipo",href:"#"},{label:"Batalla",href:"#"},{label:"Iniciar Sesión",type:"button",onClick:'alert("Iniciando sesión...")'},{label:"Registrarse",type:"button",onClick:'alert("Registrando...")'}],fixed:!1,transparent:!1,color:"dark"},render:t=>{const e=new r(t),n=document.createElement("div");return n.style.padding="20px",n.style.paddingTop="80px",e.mount(n),n}},h={args:{brand:"Pokémon World",brandLogo:"",items:[{label:"Inicio",href:"#",active:!0},{label:"Pokédex",href:"#"},{label:"Equipo",href:"#"},{label:"Batalla",href:"#"},{label:"Tienda",href:"#"},{label:"Eventos",href:"#"},{label:"Comunidad",href:"#"},{label:"Soporte",href:"#"},{label:"Blog",href:"#"},{label:"Contacto",href:"#"}],fixed:!1,transparent:!1,color:"dark"},render:t=>{const e=new r(t),n=document.createElement("div");return n.style.padding="20px",n.style.paddingTop="80px",e.mount(n),n}},f={args:{brand:"Pokémon World",brandLogo:"",items:[{label:"Inicio",href:"#"},{label:"Pokédex",href:"#",active:!0},{label:"Equipo",href:"#"},{label:"Batalla",href:"#"},{label:"Tienda",href:"#"}],fixed:!1,transparent:!1,color:"dark"},render:t=>{const e=new r(t),n=document.createElement("div");return n.style.padding="20px",n.style.paddingTop="80px",e.mount(n),n}},x={args:{brand:"Pokémon World",brandLogo:"",items:[{label:"🏠 Inicio",href:"#",active:!0},{label:"📚 Pokédex",href:"#"},{label:"⚔️ Equipo",href:"#"},{label:"🎮 Batalla",href:"#"},{label:"🛒 Tienda",href:"#"},{label:"🎯 Eventos",href:"#"},{label:"👥 Comunidad",href:"#"}],fixed:!1,transparent:!1,color:"dark"},render:t=>{const e=new r(t),n=document.createElement("div");return n.style.padding="20px",n.style.paddingTop="80px",e.mount(n),n}},v={args:{brand:"Pokémon World",brandLogo:"",items:[{label:"Inicio",href:"#",active:!0},{label:"Pokédex",href:"#"},{label:"Equipo",href:"#"},{label:"Batalla",href:"#"},{label:"Tienda",href:"#"},{label:"Notificaciones",type:"button",onClick:'alert("Tienes 3 notificaciones nuevas")'},{label:"Perfil",type:"button",onClick:'alert("Abriendo perfil...")'}],fixed:!1,transparent:!1,color:"dark"},render:t=>{const e=new r(t),n=document.createElement("div");return n.style.padding="20px",n.style.paddingTop="80px",e.mount(n),n}},y={args:{brand:"Pokémon World",brandLogo:"",items:[{label:"Inicio",href:"#",active:!0},{label:"Pokédex",href:"#"},{label:"Equipo",href:"#"},{label:"Batalla",href:"#"},{label:"Tienda",href:"#"},{label:"Mi Cuenta",href:"#"},{label:"Cerrar Sesión",type:"button",onClick:'alert("Cerrando sesión...")'}],fixed:!1,transparent:!1,color:"dark"},render:t=>{const e=new r(t),n=document.createElement("div");return n.style.padding="20px",n.style.paddingTop="80px",e.mount(n),n}},k={args:{brand:"Pokémon World",brandLogo:"",items:[{label:"Inicio",href:"#",active:!0},{label:"Pokédex",href:"#"},{label:"Equipo",href:"#"},{label:"Batalla",href:"#"},{label:"Tienda",href:"#"}],fixed:!1,transparent:!1,color:"dark"},render:t=>{const e=new r(t),n=document.createElement("div");n.style.padding="20px",n.style.paddingTop="80px";const a=document.createElement("div");a.style.marginBottom="20px",a.style.display="flex",a.style.gap="10px",a.style.flexWrap="wrap";const o=document.createElement("input");o.type="text",o.placeholder="Nuevo nombre de marca...",o.className="px-3 py-1 border rounded",o.value=t.brand,o.onchange=c=>e.setBrand(c.target.value);const l=document.createElement("button");l.textContent="Toggle Fixed",l.className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600",l.onclick=()=>{t.fixed=!t.fixed,e.setFixed(t.fixed),l.textContent=t.fixed?"Disable Fixed":"Enable Fixed"};const s=document.createElement("button");s.textContent="Toggle Transparent",s.className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600",s.onclick=()=>{t.transparent=!t.transparent,e.setTransparent(t.transparent),s.textContent=t.transparent?"Disable Transparent":"Enable Transparent"};const i=document.createElement("button");i.textContent="Toggle Color",i.className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600",i.onclick=()=>{t.color=t.color==="white"?"dark":"white",e.setColor(t.color),i.textContent=`Color: ${t.color}`};const d=document.createElement("button");return d.textContent="Agregar Item",d.className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600",d.onclick=()=>{const c={label:`Item ${t.items.length+1}`,href:"#"};e.addItem(c),t.items.push(c)},a.appendChild(o),a.appendChild(l),a.appendChild(s),a.appendChild(i),a.appendChild(d),n.appendChild(a),e.mount(n),n}};var E,T,C;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    brand: 'Pokémon World',
    brandLogo: '',
    items: [{
      label: 'Inicio',
      href: '#',
      active: true
    }, {
      label: 'Pokédex',
      href: '#'
    }, {
      label: 'Equipo',
      href: '#'
    }, {
      label: 'Batalla',
      href: '#'
    }, {
      label: 'Tienda',
      href: '#'
    }],
    fixed: false,
    transparent: false,
    color: 'dark'
  },
  render: args => {
    const navbar = new Navbar(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.paddingTop = '80px';
    navbar.mount(container);
    return container;
  }
}`,...(C=(T=p.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var I,w,B;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    brand: 'Pokémon World',
    brandLogo: 'https://cdn-icons-png.flaticon.com/512/188/188987.png',
    items: [{
      label: 'Inicio',
      href: '#',
      active: true
    }, {
      label: 'Pokédex',
      href: '#'
    }, {
      label: 'Equipo',
      href: '#'
    }, {
      label: 'Batalla',
      href: '#'
    }, {
      label: 'Tienda',
      href: '#'
    }],
    fixed: false,
    transparent: false,
    color: 'dark'
  },
  render: args => {
    const navbar = new Navbar(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.paddingTop = '80px';
    navbar.mount(container);
    return container;
  }
}`,...(B=(w=b.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var P,M,L;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    brand: 'Pokémon World',
    brandLogo: '',
    items: [{
      label: 'Inicio',
      href: '#',
      active: true
    }, {
      label: 'Pokédex',
      href: '#'
    }, {
      label: 'Equipo',
      href: '#'
    }, {
      label: 'Batalla',
      href: '#'
    }, {
      label: 'Tienda',
      href: '#'
    }],
    fixed: true,
    transparent: false,
    color: 'dark'
  },
  render: args => {
    const navbar = new Navbar(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.paddingTop = '80px';

    // Agregar contenido para demostrar el scroll
    const content = document.createElement('div');
    content.style.height = '200vh';
    content.style.background = 'linear-gradient(45deg, #f0f9ff, #e0f2fe, #bae6fd)';
    content.innerHTML = '<div style="padding: 20px; text-align: center;"><h2>Contenido de la página</h2><p>Haz scroll para ver la navbar fija en acción</p></div>';
    navbar.mount(container);
    container.appendChild(content);
    return container;
  }
}`,...(L=(M=u.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var N,$,W;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    brand: 'Pokémon World',
    brandLogo: '',
    items: [{
      label: 'Inicio',
      href: '#',
      active: true
    }, {
      label: 'Pokédex',
      href: '#'
    }, {
      label: 'Equipo',
      href: '#'
    }, {
      label: 'Batalla',
      href: '#'
    }, {
      label: 'Tienda',
      href: '#'
    }],
    fixed: false,
    transparent: true,
    color: 'white'
  },
  render: args => {
    const navbar = new Navbar(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.paddingTop = '80px';

    // Agregar fondo para demostrar la transparencia
    const background = document.createElement('div');
    background.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    background.style.minHeight = '100vh';
    background.style.position = 'absolute';
    background.style.top = '0';
    background.style.left = '0';
    background.style.right = '0';
    background.style.zIndex = '-1';
    navbar.mount(container);
    container.appendChild(background);
    return container;
  }
}`,...(W=($=g.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};var D,q,S;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    brand: 'Pokémon World',
    brandLogo: '',
    items: [{
      label: 'Inicio',
      href: '#',
      active: true
    }, {
      label: 'Pokédex',
      href: '#'
    }, {
      label: 'Equipo',
      href: '#'
    }, {
      label: 'Batalla',
      href: '#'
    }, {
      label: 'Iniciar Sesión',
      type: 'button',
      onClick: 'alert("Iniciando sesión...")'
    }, {
      label: 'Registrarse',
      type: 'button',
      onClick: 'alert("Registrando...")'
    }],
    fixed: false,
    transparent: false,
    color: 'dark'
  },
  render: args => {
    const navbar = new Navbar(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.paddingTop = '80px';
    navbar.mount(container);
    return container;
  }
}`,...(S=(q=m.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};var F,A,j;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    brand: 'Pokémon World',
    brandLogo: '',
    items: [{
      label: 'Inicio',
      href: '#',
      active: true
    }, {
      label: 'Pokédex',
      href: '#'
    }, {
      label: 'Equipo',
      href: '#'
    }, {
      label: 'Batalla',
      href: '#'
    }, {
      label: 'Tienda',
      href: '#'
    }, {
      label: 'Eventos',
      href: '#'
    }, {
      label: 'Comunidad',
      href: '#'
    }, {
      label: 'Soporte',
      href: '#'
    }, {
      label: 'Blog',
      href: '#'
    }, {
      label: 'Contacto',
      href: '#'
    }],
    fixed: false,
    transparent: false,
    color: 'dark'
  },
  render: args => {
    const navbar = new Navbar(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.paddingTop = '80px';
    navbar.mount(container);
    return container;
  }
}`,...(j=(A=h.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var H,O,z;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    brand: 'Pokémon World',
    brandLogo: '',
    items: [{
      label: 'Inicio',
      href: '#'
    }, {
      label: 'Pokédex',
      href: '#',
      active: true
    }, {
      label: 'Equipo',
      href: '#'
    }, {
      label: 'Batalla',
      href: '#'
    }, {
      label: 'Tienda',
      href: '#'
    }],
    fixed: false,
    transparent: false,
    color: 'dark'
  },
  render: args => {
    const navbar = new Navbar(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.paddingTop = '80px';
    navbar.mount(container);
    return container;
  }
}`,...(z=(O=f.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var R,U,_;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    brand: 'Pokémon World',
    brandLogo: '',
    items: [{
      label: '🏠 Inicio',
      href: '#',
      active: true
    }, {
      label: '📚 Pokédex',
      href: '#'
    }, {
      label: '⚔️ Equipo',
      href: '#'
    }, {
      label: '🎮 Batalla',
      href: '#'
    }, {
      label: '🛒 Tienda',
      href: '#'
    }, {
      label: '🎯 Eventos',
      href: '#'
    }, {
      label: '👥 Comunidad',
      href: '#'
    }],
    fixed: false,
    transparent: false,
    color: 'dark'
  },
  render: args => {
    const navbar = new Navbar(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.paddingTop = '80px';
    navbar.mount(container);
    return container;
  }
}`,...(_=(U=x.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var G,J,K;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    brand: 'Pokémon World',
    brandLogo: '',
    items: [{
      label: 'Inicio',
      href: '#',
      active: true
    }, {
      label: 'Pokédex',
      href: '#'
    }, {
      label: 'Equipo',
      href: '#'
    }, {
      label: 'Batalla',
      href: '#'
    }, {
      label: 'Tienda',
      href: '#'
    }, {
      label: 'Notificaciones',
      type: 'button',
      onClick: 'alert("Tienes 3 notificaciones nuevas")'
    }, {
      label: 'Perfil',
      type: 'button',
      onClick: 'alert("Abriendo perfil...")'
    }],
    fixed: false,
    transparent: false,
    color: 'dark'
  },
  render: args => {
    const navbar = new Navbar(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.paddingTop = '80px';
    navbar.mount(container);
    return container;
  }
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,V,X;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    brand: 'Pokémon World',
    brandLogo: '',
    items: [{
      label: 'Inicio',
      href: '#',
      active: true
    }, {
      label: 'Pokédex',
      href: '#'
    }, {
      label: 'Equipo',
      href: '#'
    }, {
      label: 'Batalla',
      href: '#'
    }, {
      label: 'Tienda',
      href: '#'
    }, {
      label: 'Mi Cuenta',
      href: '#'
    }, {
      label: 'Cerrar Sesión',
      type: 'button',
      onClick: 'alert("Cerrando sesión...")'
    }],
    fixed: false,
    transparent: false,
    color: 'dark'
  },
  render: args => {
    const navbar = new Navbar(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.paddingTop = '80px';
    navbar.mount(container);
    return container;
  }
}`,...(X=(V=y.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,Z,ee;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    brand: 'Pokémon World',
    brandLogo: '',
    items: [{
      label: 'Inicio',
      href: '#',
      active: true
    }, {
      label: 'Pokédex',
      href: '#'
    }, {
      label: 'Equipo',
      href: '#'
    }, {
      label: 'Batalla',
      href: '#'
    }, {
      label: 'Tienda',
      href: '#'
    }],
    fixed: false,
    transparent: false,
    color: 'dark'
  },
  render: args => {
    const navbar = new Navbar(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.paddingTop = '80px';

    // Controles interactivos
    const controls = document.createElement('div');
    controls.style.marginBottom = '20px';
    controls.style.display = 'flex';
    controls.style.gap = '10px';
    controls.style.flexWrap = 'wrap';
    const brandInput = document.createElement('input');
    brandInput.type = 'text';
    brandInput.placeholder = 'Nuevo nombre de marca...';
    brandInput.className = 'px-3 py-1 border rounded';
    brandInput.value = args.brand;
    brandInput.onchange = e => navbar.setBrand(e.target.value);
    const fixedToggle = document.createElement('button');
    fixedToggle.textContent = 'Toggle Fixed';
    fixedToggle.className = 'px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600';
    fixedToggle.onclick = () => {
      args.fixed = !args.fixed;
      navbar.setFixed(args.fixed);
      fixedToggle.textContent = args.fixed ? 'Disable Fixed' : 'Enable Fixed';
    };
    const transparentToggle = document.createElement('button');
    transparentToggle.textContent = 'Toggle Transparent';
    transparentToggle.className = 'px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600';
    transparentToggle.onclick = () => {
      args.transparent = !args.transparent;
      navbar.setTransparent(args.transparent);
      transparentToggle.textContent = args.transparent ? 'Disable Transparent' : 'Enable Transparent';
    };
    const colorToggle = document.createElement('button');
    colorToggle.textContent = 'Toggle Color';
    colorToggle.className = 'px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600';
    colorToggle.onclick = () => {
      args.color = args.color === 'white' ? 'dark' : 'white';
      navbar.setColor(args.color);
      colorToggle.textContent = \`Color: \${args.color}\`;
    };
    const addItemBtn = document.createElement('button');
    addItemBtn.textContent = 'Agregar Item';
    addItemBtn.className = 'px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600';
    addItemBtn.onclick = () => {
      const newItem = {
        label: \`Item \${args.items.length + 1}\`,
        href: '#'
      };
      navbar.addItem(newItem);
      args.items.push(newItem);
    };
    controls.appendChild(brandInput);
    controls.appendChild(fixedToggle);
    controls.appendChild(transparentToggle);
    controls.appendChild(colorToggle);
    controls.appendChild(addItemBtn);
    container.appendChild(controls);
    navbar.mount(container);
    return container;
  }
}`,...(ee=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const te=["Basic","WithLogo","Fixed","Transparent","WithButtons","ManyItems","WithActiveItems","CustomItems","ActionItems","UserItems","Interactive"];export{v as ActionItems,p as Basic,x as CustomItems,u as Fixed,k as Interactive,h as ManyItems,g as Transparent,y as UserItems,f as WithActiveItems,m as WithButtons,b as WithLogo,te as __namedExportsOrder,ne as default};
