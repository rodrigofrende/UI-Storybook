class r{constructor(e={}){this.options={text:"Button",variant:"primary",size:"medium",disabled:!1,loading:!1,icon:null,onClick:null,className:"",...e},this.element=this.createButton(),this.bindEvents()}createButton(){const e=document.createElement("button"),n=["font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50","disabled:opacity-50 disabled:cursor-not-allowed"],a={primary:"bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",secondary:"bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",outline:"border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",ghost:"text-blue-600 hover:bg-blue-50 focus:ring-blue-500"},s={small:"px-3 py-1.5 text-sm rounded-md",medium:"px-6 py-3 text-base rounded-lg",large:"px-8 py-4 text-lg rounded-xl"},i=[...n,a[this.options.variant]||a.primary,s[this.options.size]||s.medium,this.options.className];if(e.className=i.join(" "),e.textContent=this.options.text,e.disabled=this.options.disabled,this.options.icon){const o=document.createElement("span");o.innerHTML=this.options.icon,o.className="mr-2",e.insertBefore(o,e.firstChild)}return this.options.loading&&this.addLoadingState(e),e}addLoadingState(e){const n=document.createElement("div");n.className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2",e.insertBefore(n,e.firstChild),e.disabled=!0}bindEvents(){this.options.onClick&&this.element.addEventListener("click",e=>{!this.options.disabled&&!this.options.loading&&this.options.onClick(e)})}setText(e){this.options.text=e,this.element.textContent=e}setVariant(e){this.options.variant=e,this.element.className=this.element.className.replace(/bg-\w+-\d+|text-\w+-\d+|border-\w+-\d+/g,"");const n={primary:"bg-blue-600 text-white",secondary:"bg-gray-600 text-white",outline:"border-2 border-blue-600 text-blue-600",ghost:"text-blue-600"};this.element.className+=" "+(n[e]||n.primary)}setSize(e){this.options.size=e,this.element.className=this.element.className.replace(/px-\d+|py-\d+|text-\w+|rounded-\w+/g,"");const n={small:"px-3 py-1.5 text-sm rounded-md",medium:"px-6 py-3 text-base rounded-lg",large:"px-8 py-4 text-lg rounded-xl"};this.element.className+=" "+(n[e]||n.medium)}setDisabled(e){this.options.disabled=e,this.element.disabled=e}setLoading(e){if(this.options.loading=e,e)this.addLoadingState(this.element);else{const n=this.element.querySelector(".animate-spin");n&&n.remove(),this.element.disabled=!1}}render(e){return typeof e=="string"&&(e=document.querySelector(e)),e&&e.appendChild(this.element),this.element}destroy(){this.element.remove()}}const R={title:"Components/Button",component:r,parameters:{docs:{description:{component:"Un componente de botón versátil con múltiples variantes, tamaños y estados."}}},argTypes:{text:{control:"text",description:"Texto del botón"},variant:{control:{type:"select"},options:["primary","secondary","outline","ghost"],description:"Variante visual del botón"},size:{control:{type:"select"},options:["small","medium","large"],description:"Tamaño del botón"},disabled:{control:"boolean",description:"Estado deshabilitado"},loading:{control:"boolean",description:"Estado de carga"},icon:{control:"text",description:"Icono SVG del botón"},onClick:{action:"clicked",description:"Función llamada al hacer clic"}}},c={args:{text:"Botón Primario",variant:"primary",size:"medium",disabled:!1,loading:!1},render:t=>{const e=new r(t),n=document.createElement("div");return n.style.padding="20px",e.render(n),n}},l={args:{text:"Botón Secundario",variant:"secondary",size:"medium",disabled:!1},render:t=>{const e=new r(t),n=document.createElement("div");return n.style.padding="20px",e.render(n),n}},m={args:{text:"Botón Outline",variant:"outline",size:"medium",disabled:!1},render:t=>{const e=new r(t),n=document.createElement("div");return n.style.padding="20px",e.render(n),n}},u={args:{text:"Botón Ghost",variant:"ghost",size:"medium",disabled:!1},render:t=>{const e=new r(t),n=document.createElement("div");return n.style.padding="20px",e.render(n),n}},p={args:{text:"Botón Pequeño",variant:"primary",size:"small",disabled:!1},render:t=>{const e=new r(t),n=document.createElement("div");return n.style.padding="20px",e.render(n),n}},g={args:{text:"Botón Grande",variant:"primary",size:"large",disabled:!1},render:t=>{const e=new r(t),n=document.createElement("div");return n.style.padding="20px",e.render(n),n}},b={args:{text:"Botón Deshabilitado",variant:"primary",size:"medium",disabled:!0},render:t=>{const e=new r(t),n=document.createElement("div");return n.style.padding="20px",e.render(n),n}},x={args:{text:"Cargando...",variant:"primary",size:"medium",loading:!0},render:t=>{const e=new r(t),n=document.createElement("div");return n.style.padding="20px",e.render(n),n}},h={args:{text:"Botón con Icono",variant:"primary",size:"medium",icon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>'},render:t=>{const e=new r(t),n=document.createElement("div");return n.style.padding="20px",e.render(n),n}},y={render:()=>{const t=document.createElement("div");t.style.padding="20px";const e=["primary","secondary","outline","ghost"],n=["small","medium","large"];return e.forEach(a=>{const s=document.createElement("div");s.style.marginBottom="20px";const i=document.createElement("h3");i.textContent=a.charAt(0).toUpperCase()+a.slice(1),i.style.marginBottom="10px",i.style.fontWeight="bold",s.appendChild(i);const o=document.createElement("div");o.style.display="flex",o.style.gap="10px",o.style.alignItems="center",n.forEach(d=>{new r({text:d.charAt(0).toUpperCase()+d.slice(1),variant:a,size:d,onClick:()=>console.log(`${a} ${d} clicked`)}).render(o)}),s.appendChild(o),t.appendChild(s)}),t}};var v,f,C;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    text: 'Botón Primario',
    variant: 'primary',
    size: 'medium',
    disabled: false,
    loading: false
  },
  render: args => {
    const button = new Button(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    button.render(container);
    return container;
  }
}`,...(C=(f=c.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var B,E,w;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    text: 'Botón Secundario',
    variant: 'secondary',
    size: 'medium',
    disabled: false
  },
  render: args => {
    const button = new Button(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    button.render(container);
    return container;
  }
}`,...(w=(E=l.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var z,S,k;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    text: 'Botón Outline',
    variant: 'outline',
    size: 'medium',
    disabled: false
  },
  render: args => {
    const button = new Button(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    button.render(container);
    return container;
  }
}`,...(k=(S=m.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var N,F,L;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    text: 'Botón Ghost',
    variant: 'ghost',
    size: 'medium',
    disabled: false
  },
  render: args => {
    const button = new Button(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    button.render(container);
    return container;
  }
}`,...(L=(F=u.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var G,I,A;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    text: 'Botón Pequeño',
    variant: 'primary',
    size: 'small',
    disabled: false
  },
  render: args => {
    const button = new Button(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    button.render(container);
    return container;
  }
}`,...(A=(I=p.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var P,D,O;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    text: 'Botón Grande',
    variant: 'primary',
    size: 'large',
    disabled: false
  },
  render: args => {
    const button = new Button(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    button.render(container);
    return container;
  }
}`,...(O=(D=g.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var T,U,V;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    text: 'Botón Deshabilitado',
    variant: 'primary',
    size: 'medium',
    disabled: true
  },
  render: args => {
    const button = new Button(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    button.render(container);
    return container;
  }
}`,...(V=(U=b.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var q,W,$;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    text: 'Cargando...',
    variant: 'primary',
    size: 'medium',
    loading: true
  },
  render: args => {
    const button = new Button(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    button.render(container);
    return container;
  }
}`,...($=(W=x.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var j,H,M;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    text: 'Botón con Icono',
    variant: 'primary',
    size: 'medium',
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>'
  },
  render: args => {
    const button = new Button(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    button.render(container);
    return container;
  }
}`,...(M=(H=h.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var _,J,K;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    const variants = ['primary', 'secondary', 'outline', 'ghost'];
    const sizes = ['small', 'medium', 'large'];
    variants.forEach(variant => {
      const variantContainer = document.createElement('div');
      variantContainer.style.marginBottom = '20px';
      const title = document.createElement('h3');
      title.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
      title.style.marginBottom = '10px';
      title.style.fontWeight = 'bold';
      variantContainer.appendChild(title);
      const buttonContainer = document.createElement('div');
      buttonContainer.style.display = 'flex';
      buttonContainer.style.gap = '10px';
      buttonContainer.style.alignItems = 'center';
      sizes.forEach(size => {
        const button = new Button({
          text: size.charAt(0).toUpperCase() + size.slice(1),
          variant,
          size,
          onClick: () => console.log(\`\${variant} \${size} clicked\`)
        });
        button.render(buttonContainer);
      });
      variantContainer.appendChild(buttonContainer);
      container.appendChild(variantContainer);
    });
    return container;
  }
}`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const X=["Primary","Secondary","Outline","Ghost","Small","Large","Disabled","Loading","WithIcon","AllVariants"];export{y as AllVariants,b as Disabled,u as Ghost,g as Large,x as Loading,m as Outline,c as Primary,l as Secondary,p as Small,h as WithIcon,X as __namedExportsOrder,R as default};
