class m{constructor(e={}){this.options={items:[],separator:"/",size:"md",variant:"default",showHome:!0,homeIcon:"",homeText:"Inicio",homeHref:"/",maxItems:0,...e},this.id=this.generateId()}generateId(){return"breadcrumbs-"+Math.random().toString(36).substr(2,9)}render(){return this.getSizeClasses(),this.getVariantClasses(),this.getSeparatorClasses(),`
      <nav class="flex" aria-label="Breadcrumb" id="${this.id}">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          ${this.renderHomeItem()}
          ${this.renderBreadcrumbItems()}
        </ol>
      </nav>
    `}renderHomeItem(){if(!this.options.showHome)return"";const e=this.getSizeClasses(),r=this.getVariantClasses(),t=this.options.items.length===0;return`
      <li class="inline-flex items-center">
        <a
          href="${this.options.homeHref}"
          class="inline-flex items-center ${e} ${r.link} ${t?r.active:""} hover:text-blue-600 transition-colors duration-200"
          ${t?'aria-current="page"':""}
        >
          ${this.options.homeIcon?`
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              ${this.options.homeIcon}
            </svg>
          `:""}
          ${this.options.homeText}
        </a>
        ${this.options.items.length>0?this.renderSeparator():""}
      </li>
    `}renderBreadcrumbItems(){const e=this.getVisibleItems(),r=this.getSizeClasses(),t=this.getVariantClasses();return e.map((o,s)=>{const l=s===e.length-1;return`
        <li class="inline-flex items-center">
          ${l?`
            <span class="${r} ${t.active}" aria-current="page">
              ${o.label}
            </span>
          `:`
            <a
              href="${o.href||"#"}"
              class="${r} ${t.link} hover:text-blue-600 transition-colors duration-200"
            >
              ${o.label}
            </a>
          `}
          ${l?"":this.renderSeparator()}
        </li>
      `}).join("")}renderSeparator(){return this.getSizeClasses(),this.getSeparatorClasses(),`
      <svg class="w-4 h-4 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
      </svg>
    `}getVisibleItems(){let e=[...this.options.items];if(this.options.maxItems>0&&e.length>this.options.maxItems){const r=e.slice(0,Math.ceil(this.options.maxItems/2)),t=e.slice(-Math.floor(this.options.maxItems/2));e=[...r,{label:"...",href:null,isEllipsis:!0},...t]}return e}getSizeClasses(){const e={sm:"text-sm",md:"text-base",lg:"text-lg"};return e[this.options.size]||e.md}getVariantClasses(){const e={default:{link:"text-gray-500",active:"text-gray-900 font-medium"},outlined:{link:"text-gray-500 border border-gray-200 rounded px-2 py-1",active:"text-blue-600 border-blue-200 bg-blue-50 font-medium"},minimal:{link:"text-gray-500 hover:text-gray-700",active:"text-gray-900 font-semibold"}};return e[this.options.variant]||e.default}getSeparatorClasses(){const e={"/":"text-gray-400",">":"text-gray-400","|":"text-gray-400","→":"text-gray-400","•":"text-gray-400"};return e[this.options.separator]||e["/"]}setItems(e){this.options.items=e,this.updateDisplay()}addItem(e){this.options.items.push(e),this.updateDisplay()}removeItem(e){e>=0&&e<this.options.items.length&&(this.options.items.splice(e,1),this.updateDisplay())}updateItem(e,r){e>=0&&e<this.options.items.length&&(this.options.items[e]={...this.options.items[e],...r},this.updateDisplay())}setSeparator(e){this.options.separator=e,this.updateDisplay()}setSize(e){this.options.size=e,this.updateDisplay()}setVariant(e){this.options.variant=e,this.updateDisplay()}setShowHome(e){this.options.showHome=e,this.updateDisplay()}setHomeIcon(e){this.options.homeIcon=e,this.updateDisplay()}setHomeText(e){this.options.homeText=e,this.updateDisplay()}setHomeHref(e){this.options.homeHref=e,this.updateDisplay()}setMaxItems(e){this.options.maxItems=e,this.updateDisplay()}getCurrentPath(){return this.options.items.map(e=>e.label).join(" / ")}getBreadcrumbData(){return{items:this.options.items,currentPath:this.getCurrentPath(),hasItems:this.options.items.length>0,totalItems:this.options.items.length}}updateDisplay(){const e=document.getElementById(this.id);e&&(e.outerHTML=this.render())}mount(e){typeof e=="string"&&(e=document.querySelector(e)),e&&(e.innerHTML=this.render(),this.attachEventListeners())}attachEventListeners(){document.querySelectorAll(`#${this.id} a`).forEach((r,t)=>{r.addEventListener("click",o=>{r.getAttribute("href")==="#"&&o.preventDefault(),this.triggerEvent("click",{index:t,href:r.getAttribute("href"),label:r.textContent.trim()})})})}static fromPath(e,r={}){const t=e.split("/").filter(s=>s.length>0),o=t.map((s,l)=>({label:s.charAt(0).toUpperCase()+s.slice(1).replace(/-/g," "),href:"/"+t.slice(0,l+1).join("/")}));return new m({items:o,...r})}static fromArray(e,r={}){return new m({items:e,...r})}static filePath(e,r={}){const t=e.split("/").filter(s=>s.length>0),o=t.map((s,l)=>({label:s,href:"/"+t.slice(0,l+1).join("/"),icon:l===t.length-1?"document":"folder"}));return new m({items:o,separator:">",...r})}static categories(e,r={}){const t=e.map((o,s)=>({label:o.name,href:o.href||"#",count:o.count}));return new m({items:t,variant:"minimal",...r})}getHTML(){return this.render()}clone(){return new m({...this.options})}hasItems(){return this.options.items.length>0}getItemCount(){return this.options.items.length}getItem(e){return e>=0&&e<this.options.items.length?this.options.items[e]:null}clear(){this.options.items=[],this.updateDisplay()}}const Be={title:"Components/Navigation/Breadcrumbs",component:m,parameters:{docs:{description:{component:"Un componente de navegación de migas de pan versátil con múltiples variantes, tamaños y separadores personalizables."}}},argTypes:{items:{control:"object",description:"Array de elementos de navegación"},separator:{control:{type:"select"},options:["/",">","|","→","•"],description:"Separador entre elementos"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Tamaño del breadcrumb"},variant:{control:{type:"select"},options:["default","outlined","minimal"],description:"Variante de diseño"},showHome:{control:"boolean",description:"Si mostrar el elemento de inicio"},homeIcon:{control:"text",description:"Icono SVG para el elemento de inicio"},homeText:{control:"text",description:"Texto del elemento de inicio"},homeHref:{control:"text",description:"Enlace del elemento de inicio"},maxItems:{control:{type:"range",min:0,max:10,step:1},description:"Máximo número de elementos a mostrar (0 = mostrar todos)"}}},n={args:{items:[{label:"Productos",href:"/productos"},{label:"Electrónicos",href:"/productos/electronicos"},{label:"Smartphones",href:"/productos/electronicos/smartphones"}],separator:"/",size:"md",variant:"default",showHome:!0,homeIcon:"",homeText:"Inicio",homeHref:"/",maxItems:0},render:i=>{const e=new m(i),r=document.createElement("div");return r.style.padding="20px",r.style.backgroundColor="#f9fafb",e.mount(r),r}},u={args:{...n.args,showHome:!1},render:n.render},g={args:{...n.args,homeIcon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>'},render:n.render},b={args:{...n.args,size:"sm"},render:n.render},x={args:{...n.args,size:"lg"},render:n.render},f={args:{...n.args,variant:"outlined"},render:n.render},I={args:{...n.args,variant:"minimal"},render:n.render},v={args:{...n.args,separator:"→"},render:n.render},C={args:{...n.args,separator:">"},render:n.render},S={args:{...n.args,separator:"|"},render:n.render},y={args:{...n.args,separator:"•"},render:n.render},H={args:{items:[{label:"Productos",href:"/productos"},{label:"Electrónicos",href:"/productos/electronicos"},{label:"Smartphones",href:"/productos/electronicos/smartphones"},{label:"Android",href:"/productos/electronicos/smartphones/android"},{label:"Samsung",href:"/productos/electronicos/smartphones/android/samsung"},{label:"Galaxy S23",href:"/productos/electronicos/smartphones/android/samsung/galaxy-s23"}],separator:"/",size:"md",variant:"default",showHome:!0,homeIcon:"",homeText:"Inicio",homeHref:"/",maxItems:4},render:n.render},w={args:{items:[{label:"Documents",href:"/documents"},{label:"Work",href:"/documents/work"},{label:"Projects",href:"/documents/work/projects"},{label:"report.pdf",href:"/documents/work/projects/report.pdf"}],separator:">",size:"md",variant:"default",showHome:!0,homeIcon:"",homeText:"Home",homeHref:"/",maxItems:0},render:n.render},E={args:{items:[{label:"Tecnología",href:"/tecnologia"},{label:"Computadoras",href:"/tecnologia/computadoras"},{label:"Laptops",href:"/tecnologia/computadoras/laptops"},{label:"Gaming",href:"/tecnologia/computadoras/laptops/gaming"}],separator:"/",size:"md",variant:"minimal",showHome:!0,homeIcon:"",homeText:"Inicio",homeHref:"/",maxItems:0},render:n.render},z={args:{items:[{label:"Tienda",href:"/tienda"},{label:"Ropa",href:"/tienda/ropa"},{label:"Hombre",href:"/tienda/ropa/hombre"},{label:"Camisetas",href:"/tienda/ropa/hombre/camisetas"},{label:"Básicas",href:"/tienda/ropa/hombre/camisetas/basicas"}],separator:"/",size:"md",variant:"default",showHome:!0,homeIcon:"",homeText:"Inicio",homeHref:"/",maxItems:0},render:n.render},B={args:{items:[{label:"Blog",href:"/blog"},{label:"Tecnología",href:"/blog/tecnologia"},{label:"Desarrollo Web",href:"/blog/tecnologia/desarrollo-web"},{label:"React vs Vue",href:"/blog/tecnologia/desarrollo-web/react-vs-vue"}],separator:"→",size:"md",variant:"minimal",showHome:!0,homeIcon:"",homeText:"Inicio",homeHref:"/",maxItems:0},render:n.render},k={args:{...n.args},render:i=>{const e=new m(i),r=document.createElement("div");r.style.padding="20px",r.style.backgroundColor="#f9fafb";const t=document.createElement("div");t.style.marginBottom="20px",t.style.display="flex",t.style.gap="10px",t.style.flexWrap="wrap",t.style.alignItems="center";const o=document.createElement("select");o.className="px-3 py-1 border rounded",["default","outlined","minimal"].forEach(a=>{const c=document.createElement("option");c.value=a,c.textContent=a.charAt(0).toUpperCase()+a.slice(1),c.selected=a===i.variant,o.appendChild(c)}),o.onchange=a=>{i.variant=a.target.value,e.setVariant(a.target.value)};const s=document.createElement("select");s.className="px-3 py-1 border rounded",["sm","md","lg"].forEach(a=>{const c=document.createElement("option");c.value=a,c.textContent=a.toUpperCase(),c.selected=a===i.size,s.appendChild(c)}),s.onchange=a=>{i.size=a.target.value,e.setSize(a.target.value)};const l=document.createElement("select");l.className="px-3 py-1 border rounded",["/",">","|","→","•"].forEach(a=>{const c=document.createElement("option");c.value=a,c.textContent=a,c.selected=a===i.separator,l.appendChild(c)}),l.onchange=a=>{i.separator=a.target.value,e.setSeparator(a.target.value)};const p=document.createElement("input");p.type="checkbox",p.checked=i.showHome,p.onchange=a=>{i.showHome=a.target.checked,e.setShowHome(a.target.checked)};const T=document.createElement("label");T.textContent="Mostrar Inicio",T.style.marginLeft="5px";const d=document.createElement("input");d.type="range",d.min="0",d.max="10",d.value=i.maxItems,d.className="w-32",d.onchange=a=>{i.maxItems=parseInt(a.target.value),e.setMaxItems(parseInt(a.target.value))};const h=document.createElement("label");return h.textContent=`Max Items: ${i.maxItems}`,h.style.minWidth="100px",d.oninput=a=>{h.textContent=`Max Items: ${a.target.value}`},t.appendChild(document.createElement("label")).textContent="Variante:",t.appendChild(o),t.appendChild(document.createElement("label")).textContent="Tamaño:",t.appendChild(s),t.appendChild(document.createElement("label")).textContent="Separador:",t.appendChild(l),t.appendChild(document.createElement("div")).appendChild(p),t.lastChild.appendChild(T),t.appendChild(h),t.appendChild(d),r.appendChild(t),e.mount(r),r}};var $,L,M;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Productos',
      href: '/productos'
    }, {
      label: 'Electrónicos',
      href: '/productos/electronicos'
    }, {
      label: 'Smartphones',
      href: '/productos/electronicos/smartphones'
    }],
    separator: '/',
    size: 'md',
    variant: 'default',
    showHome: true,
    homeIcon: '',
    homeText: 'Inicio',
    homeHref: '/',
    maxItems: 0
  },
  render: args => {
    const breadcrumbs = new Breadcrumbs(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    breadcrumbs.mount(container);
    return container;
  }
}`,...(M=(L=n.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var D,A,P;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    showHome: false
  },
  render: Basic.render
}`,...(P=(A=u.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var V,j,W;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    homeIcon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>'
  },
  render: Basic.render
}`,...(W=(j=g.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var N,U,F;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    size: 'sm'
  },
  render: Basic.render
}`,...(F=(U=b.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var G,R,O;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    size: 'lg'
  },
  render: Basic.render
}`,...(O=(R=x.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var q,J,K;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    variant: 'outlined'
  },
  render: Basic.render
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;I.parameters={...I.parameters,docs:{...(Q=I.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    variant: 'minimal'
  },
  render: Basic.render
}`,...(Y=(X=I.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,_,ee;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    separator: '→'
  },
  render: Basic.render
}`,...(ee=(_=v.parameters)==null?void 0:_.docs)==null?void 0:ee.source}}};var te,re,ne;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    separator: '>'
  },
  render: Basic.render
}`,...(ne=(re=C.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var ae,oe,se;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    separator: '|'
  },
  render: Basic.render
}`,...(se=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,ce,le;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    separator: '•'
  },
  render: Basic.render
}`,...(le=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var me,de,pe;H.parameters={...H.parameters,docs:{...(me=H.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Productos',
      href: '/productos'
    }, {
      label: 'Electrónicos',
      href: '/productos/electronicos'
    }, {
      label: 'Smartphones',
      href: '/productos/electronicos/smartphones'
    }, {
      label: 'Android',
      href: '/productos/electronicos/smartphones/android'
    }, {
      label: 'Samsung',
      href: '/productos/electronicos/smartphones/android/samsung'
    }, {
      label: 'Galaxy S23',
      href: '/productos/electronicos/smartphones/android/samsung/galaxy-s23'
    }],
    separator: '/',
    size: 'md',
    variant: 'default',
    showHome: true,
    homeIcon: '',
    homeText: 'Inicio',
    homeHref: '/',
    maxItems: 4
  },
  render: Basic.render
}`,...(pe=(de=H.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var he,ue,ge;w.parameters={...w.parameters,docs:{...(he=w.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Documents',
      href: '/documents'
    }, {
      label: 'Work',
      href: '/documents/work'
    }, {
      label: 'Projects',
      href: '/documents/work/projects'
    }, {
      label: 'report.pdf',
      href: '/documents/work/projects/report.pdf'
    }],
    separator: '>',
    size: 'md',
    variant: 'default',
    showHome: true,
    homeIcon: '',
    homeText: 'Home',
    homeHref: '/',
    maxItems: 0
  },
  render: Basic.render
}`,...(ge=(ue=w.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var be,xe,fe;E.parameters={...E.parameters,docs:{...(be=E.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Tecnología',
      href: '/tecnologia'
    }, {
      label: 'Computadoras',
      href: '/tecnologia/computadoras'
    }, {
      label: 'Laptops',
      href: '/tecnologia/computadoras/laptops'
    }, {
      label: 'Gaming',
      href: '/tecnologia/computadoras/laptops/gaming'
    }],
    separator: '/',
    size: 'md',
    variant: 'minimal',
    showHome: true,
    homeIcon: '',
    homeText: 'Inicio',
    homeHref: '/',
    maxItems: 0
  },
  render: Basic.render
}`,...(fe=(xe=E.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};var Ie,ve,Ce;z.parameters={...z.parameters,docs:{...(Ie=z.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Tienda',
      href: '/tienda'
    }, {
      label: 'Ropa',
      href: '/tienda/ropa'
    }, {
      label: 'Hombre',
      href: '/tienda/ropa/hombre'
    }, {
      label: 'Camisetas',
      href: '/tienda/ropa/hombre/camisetas'
    }, {
      label: 'Básicas',
      href: '/tienda/ropa/hombre/camisetas/basicas'
    }],
    separator: '/',
    size: 'md',
    variant: 'default',
    showHome: true,
    homeIcon: '',
    homeText: 'Inicio',
    homeHref: '/',
    maxItems: 0
  },
  render: Basic.render
}`,...(Ce=(ve=z.parameters)==null?void 0:ve.docs)==null?void 0:Ce.source}}};var Se,ye,He;B.parameters={...B.parameters,docs:{...(Se=B.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Blog',
      href: '/blog'
    }, {
      label: 'Tecnología',
      href: '/blog/tecnologia'
    }, {
      label: 'Desarrollo Web',
      href: '/blog/tecnologia/desarrollo-web'
    }, {
      label: 'React vs Vue',
      href: '/blog/tecnologia/desarrollo-web/react-vs-vue'
    }],
    separator: '→',
    size: 'md',
    variant: 'minimal',
    showHome: true,
    homeIcon: '',
    homeText: 'Inicio',
    homeHref: '/',
    maxItems: 0
  },
  render: Basic.render
}`,...(He=(ye=B.parameters)==null?void 0:ye.docs)==null?void 0:He.source}}};var we,Ee,ze;k.parameters={...k.parameters,docs:{...(we=k.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    ...Basic.args
  },
  render: args => {
    const breadcrumbs = new Breadcrumbs(args);
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
      breadcrumbs.setVariant(e.target.value);
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
      breadcrumbs.setSize(e.target.value);
    };
    const separatorSelect = document.createElement('select');
    separatorSelect.className = 'px-3 py-1 border rounded';
    ['/', '>', '|', '→', '•'].forEach(separator => {
      const option = document.createElement('option');
      option.value = separator;
      option.textContent = separator;
      option.selected = separator === args.separator;
      separatorSelect.appendChild(option);
    });
    separatorSelect.onchange = e => {
      args.separator = e.target.value;
      breadcrumbs.setSeparator(e.target.value);
    };
    const showHomeCheckbox = document.createElement('input');
    showHomeCheckbox.type = 'checkbox';
    showHomeCheckbox.checked = args.showHome;
    showHomeCheckbox.onchange = e => {
      args.showHome = e.target.checked;
      breadcrumbs.setShowHome(e.target.checked);
    };
    const showHomeLabel = document.createElement('label');
    showHomeLabel.textContent = 'Mostrar Inicio';
    showHomeLabel.style.marginLeft = '5px';
    const maxItemsInput = document.createElement('input');
    maxItemsInput.type = 'range';
    maxItemsInput.min = '0';
    maxItemsInput.max = '10';
    maxItemsInput.value = args.maxItems;
    maxItemsInput.className = 'w-32';
    maxItemsInput.onchange = e => {
      args.maxItems = parseInt(e.target.value);
      breadcrumbs.setMaxItems(parseInt(e.target.value));
    };
    const maxItemsLabel = document.createElement('label');
    maxItemsLabel.textContent = \`Max Items: \${args.maxItems}\`;
    maxItemsLabel.style.minWidth = '100px';
    maxItemsInput.oninput = e => {
      maxItemsLabel.textContent = \`Max Items: \${e.target.value}\`;
    };
    controls.appendChild(document.createElement('label')).textContent = 'Variante:';
    controls.appendChild(variantSelect);
    controls.appendChild(document.createElement('label')).textContent = 'Tamaño:';
    controls.appendChild(sizeSelect);
    controls.appendChild(document.createElement('label')).textContent = 'Separador:';
    controls.appendChild(separatorSelect);
    controls.appendChild(document.createElement('div')).appendChild(showHomeCheckbox);
    controls.lastChild.appendChild(showHomeLabel);
    controls.appendChild(maxItemsLabel);
    controls.appendChild(maxItemsInput);
    container.appendChild(controls);
    breadcrumbs.mount(container);
    return container;
  }
}`,...(ze=(Ee=k.parameters)==null?void 0:Ee.docs)==null?void 0:ze.source}}};const ke=["Basic","NoHome","WithHomeIcon","Small","Large","Outlined","Minimal","CustomSeparator","ArrowSeparator","BarSeparator","DotSeparator","WithMaxItems","FilePath","Categories","Ecommerce","Blog","Interactive"];export{C as ArrowSeparator,S as BarSeparator,n as Basic,B as Blog,E as Categories,v as CustomSeparator,y as DotSeparator,z as Ecommerce,w as FilePath,k as Interactive,x as Large,I as Minimal,u as NoHome,f as Outlined,b as Small,g as WithHomeIcon,H as WithMaxItems,ke as __namedExportsOrder,Be as default};
