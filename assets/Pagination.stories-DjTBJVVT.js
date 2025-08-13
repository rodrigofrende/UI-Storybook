class g{constructor(e={}){this.options={currentPage:1,totalPages:1,totalItems:0,itemsPerPage:10,showFirstLast:!0,showPrevNext:!0,showPageNumbers:!0,maxVisiblePages:5,size:"md",variant:"default",onChange:null,...e},this.currentPage=this.options.currentPage,this.id=this.generateId()}generateId(){return"pagination-"+Math.random().toString(36).substr(2,9)}render(){return this.getSizeClasses(),this.getVariantClasses(),`
      <nav class="flex items-center justify-between" aria-label="Pagination" id="${this.id}">
        <!-- Info section -->
        <div class="flex items-center text-sm text-gray-700">
          <span>
            Mostrando 
            <span class="font-medium">${this.getStartItem()}</span>
            a 
            <span class="font-medium">${this.getEndItem()}</span>
            de 
            <span class="font-medium">${this.options.totalItems}</span>
            resultados
          </span>
        </div>

        <!-- Pagination controls -->
        <div class="flex items-center space-x-1">
          ${this.renderFirstButton()}
          ${this.renderPrevButton()}
          ${this.renderPageNumbers()}
          ${this.renderNextButton()}
          ${this.renderLastButton()}
        </div>
      </nav>
    `}renderFirstButton(){if(!this.options.showFirstLast)return"";const e=this.currentPage===1,n=this.getSizeClasses(),t=this.getVariantClasses();return`
      <button
        type="button"
        class="${n} ${t.button} ${e?t.disabled:t.enabled} ${t.firstLast}"
        ${e?"disabled":'onclick="this.goToPage(1)"'}
        aria-label="Ir a la primera página"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path>
        </svg>
      </button>
    `}renderPrevButton(){if(!this.options.showPrevNext)return"";const e=this.currentPage===1,n=this.getSizeClasses(),t=this.getVariantClasses();return`
      <button
        type="button"
        class="${n} ${t.button} ${e?t.disabled:t.enabled}"
        ${e?"disabled":`onclick="this.goToPage(${this.currentPage-1})"`}
        aria-label="Ir a la página anterior"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
    `}renderPageNumbers(){if(!this.options.showPageNumbers)return"";const e=this.getVisiblePages(),n=this.getSizeClasses(),t=this.getVariantClasses();return e.map(a=>{const l=a===this.currentPage;return a==="..."?`
          <span class="${n} ${t.ellipsis}">
            ...
          </span>
        `:`
        <button
          type="button"
          class="${n} ${t.button} ${l?t.active:t.enabled}"
          onclick="this.goToPage(${a})"
          aria-label="Ir a la página ${a}"
          aria-current="${l?"page":"false"}"
        >
          ${a}
        </button>
      `}).join("")}renderNextButton(){if(!this.options.showPrevNext)return"";const e=this.currentPage===this.options.totalPages,n=this.getSizeClasses(),t=this.getVariantClasses();return`
      <button
        type="button"
        class="${n} ${t.button} ${e?t.disabled:t.enabled}"
        ${e?"disabled":`onclick="this.goToPage(${this.currentPage+1})"`}
        aria-label="Ir a la página siguiente"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    `}renderLastButton(){if(!this.options.showFirstLast)return"";const e=this.currentPage===this.options.totalPages,n=this.getSizeClasses(),t=this.getVariantClasses();return`
      <button
        type="button"
        class="${n} ${t.button} ${e?t.disabled:t.enabled} ${t.firstLast}"
        ${e?"disabled":`onclick="this.goToPage(${this.options.totalPages})"`}
        aria-label="Ir a la última página"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
        </svg>
      </button>
    `}getVisiblePages(){const e=this.options.totalPages,n=this.currentPage,t=this.options.maxVisiblePages;if(e<=t)return Array.from({length:e},(o,c)=>c+1);const a=[],l=Math.floor(t/2);let r=Math.max(1,n-l),d=Math.min(e,r+t-1);d-r+1<t&&(r=Math.max(1,d-t+1)),r>1&&(a.push(1),r>2&&a.push("..."));for(let o=r;o<=d;o++)a.push(o);return d<e&&(d<e-1&&a.push("..."),a.push(e)),a}getStartItem(){return(this.currentPage-1)*this.options.itemsPerPage+1}getEndItem(){return Math.min(this.currentPage*this.options.itemsPerPage,this.options.totalItems)}getSizeClasses(){const e={sm:"px-2 py-1 text-xs",md:"px-3 py-2 text-sm",lg:"px-4 py-2 text-base"};return e[this.options.size]||e.md}getVariantClasses(){const e={default:{button:"inline-flex items-center justify-center font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",enabled:"bg-white text-gray-700 hover:bg-gray-50 border border-gray-300",active:"bg-blue-600 text-white border border-blue-600",disabled:"bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed",ellipsis:"inline-flex items-center justify-center text-gray-500",firstLast:""},outlined:{button:"inline-flex items-center justify-center font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",enabled:"bg-transparent text-gray-700 hover:bg-gray-50 border border-gray-300",active:"bg-blue-50 text-blue-600 border border-blue-300",disabled:"bg-transparent text-gray-400 border border-gray-200 cursor-not-allowed",ellipsis:"inline-flex items-center justify-center text-gray-500",firstLast:""},minimal:{button:"inline-flex items-center justify-center font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",enabled:"bg-transparent text-gray-700 hover:bg-gray-100",active:"bg-blue-100 text-blue-700",disabled:"bg-transparent text-gray-400 cursor-not-allowed",ellipsis:"inline-flex items-center justify-center text-gray-500",firstLast:""}};return e[this.options.variant]||e.default}goToPage(e){e<1||e>this.options.totalPages||e===this.currentPage||(this.currentPage=e,this.updateDisplay(),typeof this.options.onChange=="function"&&this.options.onChange(e,this.getPageInfo()),this.triggerEvent("change",{currentPage:e,pageInfo:this.getPageInfo()}))}getPageInfo(){return{currentPage:this.currentPage,totalPages:this.options.totalPages,totalItems:this.options.totalItems,itemsPerPage:this.options.itemsPerPage,startItem:this.getStartItem(),endItem:this.getEndItem()}}setCurrentPage(e){e<1||e>this.options.totalPages||(this.currentPage=e,this.updateDisplay())}setTotalPages(e){this.options.totalPages=e,this.currentPage>e&&(this.currentPage=e),this.updateDisplay()}setTotalItems(e){this.options.totalItems=e,this.options.totalPages=Math.ceil(e/this.options.itemsPerPage),this.currentPage>this.options.totalPages&&(this.currentPage=this.options.totalPages),this.updateDisplay()}setItemsPerPage(e){this.options.itemsPerPage=e,this.options.totalPages=Math.ceil(this.options.totalItems/e),this.currentPage>this.options.totalPages&&(this.currentPage=this.options.totalPages),this.updateDisplay()}setShowFirstLast(e){this.options.showFirstLast=e,this.updateDisplay()}setShowPrevNext(e){this.options.showPrevNext=e,this.updateDisplay()}setShowPageNumbers(e){this.options.showPageNumbers=e,this.updateDisplay()}setMaxVisiblePages(e){this.options.maxVisiblePages=e,this.updateDisplay()}setSize(e){this.options.size=e,this.updateDisplay()}setVariant(e){this.options.variant=e,this.updateDisplay()}nextPage(){this.goToPage(this.currentPage+1)}previousPage(){this.goToPage(this.currentPage-1)}firstPage(){this.goToPage(1)}lastPage(){this.goToPage(this.options.totalPages)}updateDisplay(){const e=document.getElementById(this.id);e&&(e.outerHTML=this.render())}triggerEvent(e,n={}){const t=new CustomEvent(`pagination:${e}`,{detail:{pagination:this,...n},bubbles:!0});document.dispatchEvent(t)}mount(e){typeof e=="string"&&(e=document.querySelector(e)),e&&(e.innerHTML=this.render(),this.attachEventListeners())}attachEventListeners(){document.querySelectorAll(`#${this.id} button`).forEach(n=>{n.addEventListener("keydown",t=>{switch(t.key){case"ArrowLeft":t.preventDefault(),this.previousPage();break;case"ArrowRight":t.preventDefault(),this.nextPage();break;case"Home":t.preventDefault(),this.firstPage();break;case"End":t.preventDefault(),this.lastPage();break}})})}focus(){const e=document.querySelector(`#${this.id} button[aria-current="page"]`);e&&e.focus()}getPaginationInfo(){return{currentPage:this.currentPage,totalPages:this.options.totalPages,totalItems:this.options.totalItems,itemsPerPage:this.options.itemsPerPage,hasNextPage:this.currentPage<this.options.totalPages,hasPreviousPage:this.currentPage>1,isFirstPage:this.currentPage===1,isLastPage:this.currentPage===this.options.totalPages}}isValidPage(e){return e>=1&&e<=this.options.totalPages}getPageRange(e){if(!this.isValidPage(e))return null;const n=(e-1)*this.options.itemsPerPage+1,t=Math.min(e*this.options.itemsPerPage,this.options.totalItems);return{startItem:n,endItem:t}}}const ce={title:"Components/Navigation/Pagination",component:g,parameters:{docs:{description:{component:"Un componente de paginación versátil con múltiples variantes, navegación por teclado y soporte para diferentes tamaños y estilos."}}},argTypes:{currentPage:{control:{type:"range",min:1,max:100,step:1},description:"Página actual"},totalPages:{control:{type:"range",min:1,max:100,step:1},description:"Número total de páginas"},totalItems:{control:{type:"range",min:0,max:1e3,step:10},description:"Número total de elementos"},itemsPerPage:{control:{type:"range",min:5,max:100,step:5},description:"Elementos por página"},showFirstLast:{control:"boolean",description:"Si mostrar botones de primera/última página"},showPrevNext:{control:"boolean",description:"Si mostrar botones de anterior/siguiente"},showPageNumbers:{control:"boolean",description:"Si mostrar números de página"},maxVisiblePages:{control:{type:"range",min:3,max:10,step:1},description:"Máximo número de páginas visibles"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Tamaño de la paginación"},variant:{control:{type:"select"},options:["default","outlined","minimal"],description:"Variante de diseño"},onChange:{control:"function",description:"Callback cuando se cambia de página"}}},i={args:{currentPage:1,totalPages:10,totalItems:100,itemsPerPage:10,showFirstLast:!0,showPrevNext:!0,showPageNumbers:!0,maxVisiblePages:5,size:"md",variant:"default",onChange:null},render:s=>{const e=new g(s),n=document.createElement("div");return n.style.padding="20px",n.style.backgroundColor="#f9fafb",e.mount(n),n}},p={args:{...i.args,currentPage:25,totalPages:50,totalItems:500,maxVisiblePages:7},render:i.render},u={args:{...i.args,size:"sm",totalPages:8,totalItems:80},render:i.render},m={args:{...i.args,size:"lg",totalPages:15,totalItems:150},render:i.render},h={args:{...i.args,variant:"outlined"},render:i.render},P={args:{...i.args,variant:"minimal"},render:i.render},b={args:{...i.args,showFirstLast:!1},render:i.render},x={args:{...i.args,showPrevNext:!1},render:i.render},f={args:{...i.args,showFirstLast:!1,showPrevNext:!1},render:i.render},y={args:{...i.args,maxVisiblePages:3,totalPages:20},render:i.render},v={args:{currentPage:3,totalPages:25,totalItems:250,itemsPerPage:10,maxVisiblePages:5,variant:"outlined",size:"md"},render:s=>{const e=new g(s),n=document.createElement("div");n.style.padding="20px",n.style.backgroundColor="#ffffff",n.style.border="1px solid #e5e7eb",n.style.borderRadius="8px";const t=document.createElement("div");t.style.marginBottom="20px",t.innerHTML=`
      <h3 class="text-lg font-semibold text-gray-900 mb-2">Productos</h3>
      <p class="text-sm text-gray-600">Mostrando ${s.currentPage*s.itemsPerPage-s.itemsPerPage+1} a ${Math.min(s.currentPage*s.itemsPerPage,s.totalItems)} de ${s.totalItems} productos</p>
    `,n.appendChild(t);const a=document.createElement("div");a.style.display="grid",a.style.gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))",a.style.gap="16px",a.style.marginBottom="20px";for(let l=0;l<6;l++){const r=document.createElement("div");r.style.border="1px solid #e5e7eb",r.style.borderRadius="8px",r.style.padding="16px",r.style.textAlign="center",r.innerHTML=`
        <div style="width: 100px; height: 100px; background: #f3f4f6; border-radius: 8px; margin: 0 auto 12px;"></div>
        <h4 class="font-medium text-gray-900 mb-2">Producto ${l+1}</h4>
        <p class="text-sm text-gray-600 mb-2">Descripción del producto</p>
        <span class="text-lg font-bold text-blue-600">$29.99</span>
      `,a.appendChild(r)}return n.appendChild(a),e.mount(n),n}},C={args:{currentPage:2,totalPages:12,totalItems:120,itemsPerPage:10,maxVisiblePages:5,variant:"minimal",size:"md"},render:s=>{const e=new g(s),n=document.createElement("div");n.style.padding="20px",n.style.backgroundColor="#ffffff";const t=document.createElement("div");t.style.marginBottom="20px",t.innerHTML=`
      <h3 class="text-xl font-bold text-gray-900 mb-2">Blog</h3>
      <p class="text-gray-600">Página ${s.currentPage} de ${s.totalPages}</p>
    `,n.appendChild(t);const a=document.createElement("div");a.style.marginBottom="20px";for(let l=0;l<3;l++){const r=document.createElement("article");r.style.borderBottom="1px solid #e5e7eb",r.style.paddingBottom="20px",r.style.marginBottom="20px",r.innerHTML=`
        <h4 class="text-lg font-semibold text-gray-900 mb-2">Artículo ${l+1} - Título del Post</h4>
        <p class="text-gray-600 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
        <div class="flex items-center text-sm text-gray-500">
          <span>15 de Diciembre, 2024</span>
          <span class="mx-2">•</span>
          <span>5 min de lectura</span>
        </div>
      `,a.appendChild(r)}return n.appendChild(a),e.mount(n),n}},I={args:{...i.args,onChange:(s,e)=>{console.log("Página cambiada:",s,e)}},render:s=>{const e=new g(s),n=document.createElement("div");n.style.padding="20px",n.style.backgroundColor="#f9fafb";const t=document.createElement("div");t.style.marginBottom="20px",t.style.display="flex",t.style.gap="10px",t.style.flexWrap="wrap",t.style.alignItems="center";const a=document.createElement("input");a.type="number",a.min="1",a.max=s.totalPages,a.value=s.currentPage,a.className="px-3 py-1 border rounded w-20",a.placeholder="Página";const l=document.createElement("button");l.textContent="Ir a página",l.className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600",l.onclick=()=>{const o=parseInt(a.value);o>=1&&o<=s.totalPages&&(e.setCurrentPage(o),s.currentPage=o)};const r=document.createElement("select");r.className="px-3 py-1 border rounded",["sm","md","lg"].forEach(o=>{const c=document.createElement("option");c.value=o,c.textContent=o.toUpperCase(),c.selected=o===s.size,r.appendChild(c)}),r.onchange=o=>{s.size=o.target.value,e.setSize(o.target.value)};const d=document.createElement("select");return d.className="px-3 py-1 border rounded",["default","outlined","minimal"].forEach(o=>{const c=document.createElement("option");c.value=o,c.textContent=o.charAt(0).toUpperCase()+o.slice(1),c.selected=o===s.variant,d.appendChild(c)}),d.onchange=o=>{s.variant=o.target.value,e.setVariant(o.target.value)},t.appendChild(document.createElement("label")).textContent="Ir a página:",t.appendChild(a),t.appendChild(l),t.appendChild(document.createElement("label")).textContent="Tamaño:",t.appendChild(r),t.appendChild(document.createElement("label")).textContent="Variante:",t.appendChild(d),n.appendChild(t),e.mount(n),n}};var w,E,B;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    totalPages: 10,
    totalItems: 100,
    itemsPerPage: 10,
    showFirstLast: true,
    showPrevNext: true,
    showPageNumbers: true,
    maxVisiblePages: 5,
    size: 'md',
    variant: 'default',
    onChange: null
  },
  render: args => {
    const pagination = new Pagination(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    pagination.mount(container);
    return container;
  }
}`,...(B=(E=i.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var $,S,N;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    currentPage: 25,
    totalPages: 50,
    totalItems: 500,
    maxVisiblePages: 7
  },
  render: Basic.render
}`,...(N=(S=p.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var z,L,k;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    size: 'sm',
    totalPages: 8,
    totalItems: 80
  },
  render: Basic.render
}`,...(k=(L=u.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var V,M,T;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    size: 'lg',
    totalPages: 15,
    totalItems: 150
  },
  render: Basic.render
}`,...(T=(M=m.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var D,F,H;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    variant: 'outlined'
  },
  render: Basic.render
}`,...(H=(F=h.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var j,A,R;P.parameters={...P.parameters,docs:{...(j=P.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    variant: 'minimal'
  },
  render: Basic.render
}`,...(R=(A=P.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var q,O,U;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    showFirstLast: false
  },
  render: Basic.render
}`,...(U=(O=b.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var _,W,G;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    showPrevNext: false
  },
  render: Basic.render
}`,...(G=(W=x.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var J,K,Q;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    showFirstLast: false,
    showPrevNext: false
  },
  render: Basic.render
}`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    maxVisiblePages: 3,
    totalPages: 20
  },
  render: Basic.render
}`,...(Z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ne;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    currentPage: 3,
    totalPages: 25,
    totalItems: 250,
    itemsPerPage: 10,
    maxVisiblePages: 5,
    variant: 'outlined',
    size: 'md'
  },
  render: args => {
    const pagination = new Pagination(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#ffffff';
    container.style.border = '1px solid #e5e7eb';
    container.style.borderRadius = '8px';

    // Header del e-commerce
    const header = document.createElement('div');
    header.style.marginBottom = '20px';
    header.innerHTML = \`
      <h3 class="text-lg font-semibold text-gray-900 mb-2">Productos</h3>
      <p class="text-sm text-gray-600">Mostrando \${args.currentPage * args.itemsPerPage - args.itemsPerPage + 1} a \${Math.min(args.currentPage * args.itemsPerPage, args.totalItems)} de \${args.totalItems} productos</p>
    \`;
    container.appendChild(header);

    // Grid de productos simulados
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))';
    grid.style.gap = '16px';
    grid.style.marginBottom = '20px';
    for (let i = 0; i < 6; i++) {
      const product = document.createElement('div');
      product.style.border = '1px solid #e5e7eb';
      product.style.borderRadius = '8px';
      product.style.padding = '16px';
      product.style.textAlign = 'center';
      product.innerHTML = \`
        <div style="width: 100px; height: 100px; background: #f3f4f6; border-radius: 8px; margin: 0 auto 12px;"></div>
        <h4 class="font-medium text-gray-900 mb-2">Producto \${i + 1}</h4>
        <p class="text-sm text-gray-600 mb-2">Descripción del producto</p>
        <span class="text-lg font-bold text-blue-600">$29.99</span>
      \`;
      grid.appendChild(product);
    }
    container.appendChild(grid);

    // Paginación
    pagination.mount(container);
    return container;
  }
}`,...(ne=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,se,re;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    currentPage: 2,
    totalPages: 12,
    totalItems: 120,
    itemsPerPage: 10,
    maxVisiblePages: 5,
    variant: 'minimal',
    size: 'md'
  },
  render: args => {
    const pagination = new Pagination(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#ffffff';

    // Header del blog
    const header = document.createElement('div');
    header.style.marginBottom = '20px';
    header.innerHTML = \`
      <h3 class="text-xl font-bold text-gray-900 mb-2">Blog</h3>
      <p class="text-gray-600">Página \${args.currentPage} de \${args.totalPages}</p>
    \`;
    container.appendChild(header);

    // Lista de artículos simulados
    const articles = document.createElement('div');
    articles.style.marginBottom = '20px';
    for (let i = 0; i < 3; i++) {
      const article = document.createElement('article');
      article.style.borderBottom = '1px solid #e5e7eb';
      article.style.paddingBottom = '20px';
      article.style.marginBottom = '20px';
      article.innerHTML = \`
        <h4 class="text-lg font-semibold text-gray-900 mb-2">Artículo \${i + 1} - Título del Post</h4>
        <p class="text-gray-600 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
        <div class="flex items-center text-sm text-gray-500">
          <span>15 de Diciembre, 2024</span>
          <span class="mx-2">•</span>
          <span>5 min de lectura</span>
        </div>
      \`;
      articles.appendChild(article);
    }
    container.appendChild(articles);

    // Paginación
    pagination.mount(container);
    return container;
  }
}`,...(re=(se=C.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var oe,ie,le;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    onChange: (page, pageInfo) => {
      console.log('Página cambiada:', page, pageInfo);
    }
  },
  render: args => {
    const pagination = new Pagination(args);
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
    const pageInput = document.createElement('input');
    pageInput.type = 'number';
    pageInput.min = '1';
    pageInput.max = args.totalPages;
    pageInput.value = args.currentPage;
    pageInput.className = 'px-3 py-1 border rounded w-20';
    pageInput.placeholder = 'Página';
    const goButton = document.createElement('button');
    goButton.textContent = 'Ir a página';
    goButton.className = 'px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600';
    goButton.onclick = () => {
      const page = parseInt(pageInput.value);
      if (page >= 1 && page <= args.totalPages) {
        pagination.setCurrentPage(page);
        args.currentPage = page;
      }
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
    sizeSelect.onchange = e => {
      args.size = e.target.value;
      pagination.setSize(e.target.value);
    };
    const variantSelect = document.createElement('select');
    variantSelect.className = 'px-3 py-1 border rounded';
    ['default', 'outlined', 'minimal'].forEach(variant => {
      const option = document.createElement('option');
      option.value = variant;
      option.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
      option.selected = variant === args.variant;
      variantSelect.appendChild(option);
    });
    variantSelect.onchange = e => {
      args.variant = e.target.value;
      pagination.setVariant(e.target.value);
    };
    controls.appendChild(document.createElement('label')).textContent = 'Ir a página:';
    controls.appendChild(pageInput);
    controls.appendChild(goButton);
    controls.appendChild(document.createElement('label')).textContent = 'Tamaño:';
    controls.appendChild(sizeSelect);
    controls.appendChild(document.createElement('label')).textContent = 'Variante:';
    controls.appendChild(variantSelect);
    container.appendChild(controls);

    // Paginación
    pagination.mount(container);
    return container;
  }
}`,...(le=(ie=I.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};const de=["Basic","ManyPages","Small","Large","Outlined","Minimal","NoFirstLast","NoPrevNext","NumbersOnly","FewVisiblePages","Ecommerce","Blog","Interactive"];export{i as Basic,C as Blog,v as Ecommerce,y as FewVisiblePages,I as Interactive,m as Large,p as ManyPages,P as Minimal,b as NoFirstLast,x as NoPrevNext,f as NumbersOnly,h as Outlined,u as Small,de as __namedExportsOrder,ce as default};
