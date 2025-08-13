class a{constructor(e={}){this.options={title:"",subtitle:"",content:"",image:"",imageAlt:"",footer:"",variant:"default",size:"md",hover:!0,clickable:!1,onClick:null,...e},this.id=this.generateId()}generateId(){return"card-"+Math.random().toString(36).substr(2,9)}render(){const e=this.getVariantClasses(),t=this.getSizeClasses(),r=this.options.hover?"hover:shadow-lg transition-shadow duration-300":"",o=this.options.clickable?"cursor-pointer":"";return`
      <div 
        class="bg-white rounded-lg ${e} ${t} ${r} ${o}"
        id="${this.id}"
        ${this.options.onClick?`onclick="${this.options.onClick}"`:""}
      >
        ${this.options.image?`
          <div class="relative">
            <img 
              class="w-full h-48 object-cover rounded-t-lg" 
              src="${this.options.image}" 
              alt="${this.options.imageAlt||this.options.title}"
            >
            ${this.options.badge?`
              <div class="absolute top-3 right-3">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  ${this.options.badge}
                </span>
              </div>
            `:""}
          </div>
        `:""}
        
        <div class="p-6">
          ${this.options.title?`
            <h3 class="text-lg font-semibold text-gray-900 mb-2">
              ${this.options.title}
            </h3>
          `:""}
          
          ${this.options.subtitle?`
            <p class="text-sm text-gray-600 mb-3">
              ${this.options.subtitle}
            </p>
          `:""}
          
          ${this.options.content?`
            <div class="text-gray-700 mb-4">
              ${this.options.content}
            </div>
          `:""}
          
          ${this.options.actions?`
            <div class="flex space-x-2">
              ${this.renderActions()}
            </div>
          `:""}
        </div>
        
        ${this.options.footer?`
          <div class="px-6 py-4 bg-gray-50 rounded-b-lg border-t border-gray-200">
            ${this.options.footer}
          </div>
        `:""}
      </div>
    `}renderActions(){return this.options.actions.map(e=>{const t=e.variant||"secondary",r=e.size||"sm",o={primary:"bg-blue-600 text-white hover:bg-blue-700",secondary:"bg-gray-200 text-gray-700 hover:bg-gray-300",danger:"bg-red-600 text-white hover:bg-red-700",success:"bg-green-600 text-white hover:bg-green-700"},i={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-sm",lg:"px-6 py-3 text-base"};return`
        <button
          class="inline-flex items-center justify-center rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${o[t]} ${i[r]}"
          onclick="${e.onClick||""}"
        >
          ${e.icon?`
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              ${e.icon}
            </svg>
          `:""}
          ${e.label}
        </button>
      `}).join("")}getVariantClasses(){const e={default:"shadow-sm border border-gray-200",elevated:"shadow-lg border-0",outlined:"border-2 border-gray-200 shadow-none",flat:"shadow-none border-0"};return e[this.options.variant]||e.default}getSizeClasses(){const e={sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg"};return e[this.options.size]||e.md}setTitle(e){this.options.title=e,this.updateDisplay()}setSubtitle(e){this.options.subtitle=e,this.updateDisplay()}setContent(e){this.options.content=e,this.updateDisplay()}setImage(e,t=""){this.options.image=e,this.options.imageAlt=t,this.updateDisplay()}setFooter(e){this.options.footer=e,this.updateDisplay()}setVariant(e){this.options.variant=e,this.updateDisplay()}setSize(e){this.options.size=e,this.updateDisplay()}setHover(e){this.options.hover=e,this.updateDisplay()}setClickable(e,t=null){this.options.clickable=e,this.options.onClick=t,this.updateDisplay()}setActions(e){this.options.actions=e,this.updateDisplay()}addAction(e){this.options.actions||(this.options.actions=[]),this.options.actions.push(e),this.updateDisplay()}removeAction(e){this.options.actions&&this.options.actions[e]&&(this.options.actions.splice(e,1),this.updateDisplay())}updateDisplay(){const e=document.getElementById(this.id);e&&(e.outerHTML=this.render())}mount(e){typeof e=="string"&&(e=document.querySelector(e)),e&&(e.innerHTML=this.render(),this.attachEventListeners())}attachEventListeners(){const e=document.getElementById(this.id);e&&this.options.onClick&&e.addEventListener("click",t=>{typeof this.options.onClick=="function"&&this.options.onClick(t)})}focus(){const e=document.getElementById(this.id);e&&e.focus()}getContent(){return{title:this.options.title,subtitle:this.options.subtitle,content:this.options.content,image:this.options.image,footer:this.options.footer}}clone(){return new a({...this.options})}}const ae={title:"Components/Layout/Card",component:a,parameters:{docs:{description:{component:"Un componente de tarjeta versátil para mostrar contenido organizado con múltiples variantes, tamaños y funcionalidades."}}},argTypes:{title:{control:"text",description:"Título principal de la tarjeta"},subtitle:{control:"text",description:"Subtítulo de la tarjeta"},content:{control:"text",description:"Contenido principal de la tarjeta"},image:{control:"text",description:"URL de la imagen de la tarjeta"},imageAlt:{control:"text",description:"Texto alternativo de la imagen"},footer:{control:"text",description:"Contenido del pie de la tarjeta"},variant:{control:{type:"select"},options:["default","elevated","outlined","flat"],description:"Variante visual de la tarjeta"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Tamaño de la tarjeta"},hover:{control:"boolean",description:"Si la tarjeta tiene efecto hover"},clickable:{control:"boolean",description:"Si la tarjeta es clickeable"}}},c={args:{title:"Título de la Tarjeta",subtitle:"Subtítulo descriptivo",content:"Esta es una tarjeta básica con título, subtítulo y contenido. Es perfecta para mostrar información organizada de manera clara.",variant:"default",size:"md",hover:!0,clickable:!1},render:n=>{const e=new a(n),t=document.createElement("div");return t.style.padding="20px",e.mount(t),t}},l={args:{title:"Tarjeta con Imagen",subtitle:"Una imagen vale más que mil palabras",content:"Esta tarjeta incluye una imagen que complementa el contenido textual y hace la presentación más atractiva visualmente.",image:"https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",imageAlt:"Paisaje natural",variant:"default",size:"md",hover:!0,clickable:!1},render:n=>{const e=new a(n),t=document.createElement("div");return t.style.padding="20px",e.mount(t),t}},d={args:{title:"Tarjeta Elevada",subtitle:"Con sombra prominente",content:"Esta variante de tarjeta tiene una sombra más pronunciada que la hace destacar del fondo, creando un efecto de elevación.",variant:"elevated",size:"md",hover:!0,clickable:!1},render:n=>{const e=new a(n),t=document.createElement("div");return t.style.padding="20px",e.mount(t),t}},u={args:{title:"Tarjeta con Borde",subtitle:"Estilo minimalista",content:"Esta variante usa solo un borde sin sombra, creando un diseño más limpio y minimalista.",variant:"outlined",size:"md",hover:!0,clickable:!1},render:n=>{const e=new a(n),t=document.createElement("div");return t.style.padding="20px",e.mount(t),t}},m={args:{title:"Tarjeta Plana",subtitle:"Sin sombras ni bordes",content:"Esta variante no tiene sombras ni bordes, creando un diseño completamente plano y moderno.",variant:"flat",size:"md",hover:!1,clickable:!1},render:n=>{const e=new a(n),t=document.createElement("div");return t.style.padding="20px",e.mount(t),t}},p={args:{title:"Tarjeta Pequeña",subtitle:"Tamaño compacto",content:"Esta tarjeta tiene un tamaño reducido, ideal para mostrar información concisa en espacios limitados.",variant:"default",size:"sm",hover:!0,clickable:!1},render:n=>{const e=new a(n),t=document.createElement("div");return t.style.padding="20px",e.mount(t),t}},g={args:{title:"Tarjeta Grande",subtitle:"Tamaño amplio",content:"Esta tarjeta tiene un tamaño mayor, perfecta para mostrar contenido extenso o cuando se necesita más espacio visual.",variant:"default",size:"lg",hover:!0,clickable:!1},render:n=>{const e=new a(n),t=document.createElement("div");return t.style.padding="20px",e.mount(t),t}},v={args:{title:"Tarjeta con Pie de Página",subtitle:"Información adicional",content:"Esta tarjeta incluye un pie de página que puede contener metadatos, enlaces o acciones adicionales.",footer:"Última actualización: hace 2 horas • 3 comentarios",variant:"default",size:"md",hover:!0,clickable:!1},render:n=>{const e=new a(n),t=document.createElement("div");return t.style.padding="20px",e.mount(t),t}},h={args:{title:"Tarjeta Clickeable",subtitle:"Haz clic para interactuar",content:"Esta tarjeta responde a los clics del usuario, ideal para navegación o acciones interactivas.",variant:"default",size:"md",hover:!0,clickable:!0,onClick:()=>alert("¡Tarjeta clickeada!")},render:n=>{const e=new a(n),t=document.createElement("div");return t.style.padding="20px",e.mount(t),t}},b={args:{title:"Tarjeta con Acciones",subtitle:"Botones interactivos",content:"Esta tarjeta incluye botones de acción que permiten al usuario realizar diferentes operaciones.",variant:"default",size:"md",hover:!0,clickable:!1,actions:[{label:"Ver Detalles",variant:"primary",size:"sm",onClick:()=>alert("Ver detalles clickeado")},{label:"Editar",variant:"secondary",size:"sm",onClick:()=>alert("Editar clickeado")},{label:"Eliminar",variant:"danger",size:"sm",onClick:()=>alert("Eliminar clickeado")}]},render:n=>{const e=new a(n),t=document.createElement("div");return t.style.padding="20px",e.mount(t),t}},f={render:()=>{const n=document.createElement("div");n.style.padding="20px";const e=["default","elevated","outlined","flat"],t=["Default","Elevated","Outlined","Flat"];return e.forEach((r,o)=>{const i=document.createElement("div");i.style.marginBottom="20px";const s=document.createElement("h3");s.textContent=t[o],s.style.marginBottom="10px",s.style.fontWeight="bold",i.appendChild(s),new a({title:`Tarjeta ${t[o]}`,subtitle:`Variante ${r}`,content:`Esta es una tarjeta de tipo ${r} que muestra las diferentes opciones de estilo disponibles.`,variant:r,size:"md",hover:r!=="flat",clickable:!1}).mount(i),n.appendChild(i)}),n}},x={render:()=>{const n=document.createElement("div");n.style.padding="20px";const e=["sm","md","lg"],t=["Pequeña","Mediana","Grande"];return e.forEach((r,o)=>{const i=document.createElement("div");i.style.marginBottom="20px";const s=document.createElement("h3");s.textContent=t[o],s.style.marginBottom="10px",s.style.fontWeight="bold",i.appendChild(s),new a({title:`Tarjeta ${t[o]}`,subtitle:`Tamaño ${r}`,content:`Esta tarjeta tiene un tamaño ${r} que se adapta a diferentes necesidades de contenido.`,variant:"default",size:r,hover:!0,clickable:!1}).mount(i),n.appendChild(i)}),n}};var y,E,C;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Título de la Tarjeta',
    subtitle: 'Subtítulo descriptivo',
    content: 'Esta es una tarjeta básica con título, subtítulo y contenido. Es perfecta para mostrar información organizada de manera clara.',
    variant: 'default',
    size: 'md',
    hover: true,
    clickable: false
  },
  render: args => {
    const card = new Card(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    card.mount(container);
    return container;
  }
}`,...(C=(E=c.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var k,z,j;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
  render: args => {
    const card = new Card(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    card.mount(container);
    return container;
  }
}`,...(j=(z=l.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var w,T,$;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: 'Tarjeta Elevada',
    subtitle: 'Con sombra prominente',
    content: 'Esta variante de tarjeta tiene una sombra más pronunciada que la hace destacar del fondo, creando un efecto de elevación.',
    variant: 'elevated',
    size: 'md',
    hover: true,
    clickable: false
  },
  render: args => {
    const card = new Card(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    card.mount(container);
    return container;
  }
}`,...($=(T=d.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var S,F,D;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: 'Tarjeta con Borde',
    subtitle: 'Estilo minimalista',
    content: 'Esta variante usa solo un borde sin sombra, creando un diseño más limpio y minimalista.',
    variant: 'outlined',
    size: 'md',
    hover: true,
    clickable: false
  },
  render: args => {
    const card = new Card(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    card.mount(container);
    return container;
  }
}`,...(D=(F=u.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var q,B,A;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    title: 'Tarjeta Plana',
    subtitle: 'Sin sombras ni bordes',
    content: 'Esta variante no tiene sombras ni bordes, creando un diseño completamente plano y moderno.',
    variant: 'flat',
    size: 'md',
    hover: false,
    clickable: false
  },
  render: args => {
    const card = new Card(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    card.mount(container);
    return container;
  }
}`,...(A=(B=m.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var I,P,V;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: 'Tarjeta Pequeña',
    subtitle: 'Tamaño compacto',
    content: 'Esta tarjeta tiene un tamaño reducido, ideal para mostrar información concisa en espacios limitados.',
    variant: 'default',
    size: 'sm',
    hover: true,
    clickable: false
  },
  render: args => {
    const card = new Card(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    card.mount(container);
    return container;
  }
}`,...(V=(P=p.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var W,L,G;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    title: 'Tarjeta Grande',
    subtitle: 'Tamaño amplio',
    content: 'Esta tarjeta tiene un tamaño mayor, perfecta para mostrar contenido extenso o cuando se necesita más espacio visual.',
    variant: 'default',
    size: 'lg',
    hover: true,
    clickable: false
  },
  render: args => {
    const card = new Card(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    card.mount(container);
    return container;
  }
}`,...(G=(L=g.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var N,H,M;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
  render: args => {
    const card = new Card(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    card.mount(container);
    return container;
  }
}`,...(M=(H=v.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var O,U,_;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
  render: args => {
    const card = new Card(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    card.mount(container);
    return container;
  }
}`,...(_=(U=h.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var R,J,K;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: 'Tarjeta con Acciones',
    subtitle: 'Botones interactivos',
    content: 'Esta tarjeta incluye botones de acción que permiten al usuario realizar diferentes operaciones.',
    variant: 'default',
    size: 'md',
    hover: true,
    clickable: false,
    actions: [{
      label: 'Ver Detalles',
      variant: 'primary',
      size: 'sm',
      onClick: () => alert('Ver detalles clickeado')
    }, {
      label: 'Editar',
      variant: 'secondary',
      size: 'sm',
      onClick: () => alert('Editar clickeado')
    }, {
      label: 'Eliminar',
      variant: 'danger',
      size: 'sm',
      onClick: () => alert('Eliminar clickeado')
    }]
  },
  render: args => {
    const card = new Card(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    card.mount(container);
    return container;
  }
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
        title: \`Tarjeta \${variantNames[index]}\`,
        subtitle: \`Variante \${variant}\`,
        content: \`Esta es una tarjeta de tipo \${variant} que muestra las diferentes opciones de estilo disponibles.\`,
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
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
        title: \`Tarjeta \${sizeNames[index]}\`,
        subtitle: \`Tamaño \${size}\`,
        content: \`Esta tarjeta tiene un tamaño \${size} que se adapta a diferentes necesidades de contenido.\`,
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
}`,...(te=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const re=["Basic","WithImage","Elevated","Outlined","Flat","Small","Large","WithFooter","Clickable","WithActions","VariantGallery","SizeGallery"];export{c as Basic,h as Clickable,d as Elevated,m as Flat,g as Large,u as Outlined,x as SizeGallery,p as Small,f as VariantGallery,b as WithActions,v as WithFooter,l as WithImage,re as __namedExportsOrder,ae as default};
