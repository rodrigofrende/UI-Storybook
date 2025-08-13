class c{constructor(e={}){this.options={checked:!1,disabled:!1,size:"md",color:"blue",label:"",showLabel:!0,...e},this.checked=this.options.checked,this.id=this.generateId()}generateId(){return"toggle-"+Math.random().toString(36).substr(2,9)}render(){const e={sm:"w-8 h-4",md:"w-11 h-6",lg:"w-14 h-7"},n={sm:"w-3 h-3",md:"w-5 h-5",lg:"w-6 h-6"},o={blue:"bg-blue-500",green:"bg-green-500",red:"bg-red-500",purple:"bg-purple-500",orange:"bg-orange-500"},l=this.options.disabled?"opacity-50 cursor-not-allowed":"cursor-pointer";return`
      <div class="flex items-center space-x-3">
        <button
          type="button"
          id="${this.id}"
          class="relative inline-flex items-center ${e[this.options.size]} rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${l}"
          ${this.options.disabled?"disabled":""}
          onclick="this.toggle()"
          role="switch"
          aria-checked="${this.checked}"
          aria-labelledby="${this.id}-label"
        >
          <span class="sr-only">Toggle ${this.options.label}</span>
          
          <div class="w-full h-full bg-gray-200 rounded-full transition-colors duration-200 ease-in-out ${this.checked?o[this.options.color]:""}"></div>
          
          <div 
            class="absolute ${n[this.options.size]} bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${this.checked?"translate-x-full":"translate-x-0"}"
            style="left: 2px;"
          ></div>
        </button>
        
        ${this.options.showLabel&&this.options.label?`
          <label 
            for="${this.id}" 
            id="${this.id}-label"
            class="text-sm font-medium text-gray-700 cursor-pointer select-none"
          >
            ${this.options.label}
          </label>
        `:""}
      </div>
    `}toggle(){this.options.disabled||(this.checked=!this.checked,this.updateDisplay(),this.triggerEvent("change",{checked:this.checked}))}setChecked(e){this.checked=!!e,this.updateDisplay(),this.triggerEvent("change",{checked:this.checked})}isChecked(){return this.checked}enable(){this.options.disabled=!1,this.updateDisplay()}disable(){this.options.disabled=!0,this.updateDisplay()}setColor(e){this.options.color=e,this.updateDisplay()}setSize(e){this.options.size=e,this.updateDisplay()}setLabel(e){this.options.label=e,this.updateDisplay()}updateDisplay(){const e=document.getElementById(this.id);if(e){const n=e.querySelector("div:first-child"),o=e.querySelector("div:last-child");this.checked?(n.classList.remove("bg-gray-200"),n.classList.add(this.getColorClass()),o.classList.add("translate-x-full"),o.classList.remove("translate-x-0")):(n.classList.add("bg-gray-200"),n.classList.remove(this.getColorClass()),o.classList.remove("translate-x-full"),o.classList.add("translate-x-0")),e.setAttribute("aria-checked",this.checked)}}getColorClass(){const e={blue:"bg-blue-500",green:"bg-green-500",red:"bg-red-500",purple:"bg-purple-500",orange:"bg-orange-500"};return e[this.options.color]||e.blue}triggerEvent(e,n){const o=new CustomEvent(`toggle:${e}`,{detail:n,bubbles:!0});document.dispatchEvent(o)}mount(e){typeof e=="string"&&(e=document.querySelector(e)),e&&(e.innerHTML=this.render(),this.attachEventListeners(e))}attachEventListeners(e){const n=e.querySelector(`#${this.id}`);n&&n.addEventListener("click",()=>this.toggle())}focus(){const e=document.getElementById(this.id);e&&e.focus()}blur(){const e=document.getElementById(this.id);e&&e.blur()}}const ce={title:"Components/Toggle",component:c,parameters:{docs:{description:{component:"Un componente de alternancia (toggle/switch) versátil con múltiples tamaños, colores y estados."}}},argTypes:{checked:{control:"boolean",description:"Estado inicial del toggle"},disabled:{control:"boolean",description:"Si el toggle está deshabilitado"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Tamaño del toggle"},color:{control:{type:"select"},options:["blue","green","red","purple","orange"],description:"Color del toggle cuando está activo"},label:{control:"text",description:"Etiqueta del toggle"},showLabel:{control:"boolean",description:"Si mostrar la etiqueta"}}},d={args:{checked:!1,disabled:!1,size:"md",color:"blue",label:"Notificaciones",showLabel:!0},render:t=>{const e=new c(t),n=document.createElement("div");return n.style.padding="20px",e.mount(n),n}},g={args:{checked:!0,disabled:!1,size:"md",color:"blue",label:"Modo oscuro",showLabel:!0},render:t=>{const e=new c(t),n=document.createElement("div");return n.style.padding="20px",e.mount(n),n}},p={args:{checked:!1,disabled:!0,size:"md",color:"blue",label:"Función no disponible",showLabel:!0},render:t=>{const e=new c(t),n=document.createElement("div");return n.style.padding="20px",e.mount(n),n}},u={args:{checked:!1,disabled:!1,size:"sm",color:"green",label:"Auto-save",showLabel:!0},render:t=>{const e=new c(t),n=document.createElement("div");return n.style.padding="20px",e.mount(n),n}},m={args:{checked:!0,disabled:!1,size:"lg",color:"purple",label:"Modo de alto contraste",showLabel:!0},render:t=>{const e=new c(t),n=document.createElement("div");return n.style.padding="20px",e.mount(n),n}},b={args:{checked:!1,disabled:!1,size:"md",color:"red",label:"",showLabel:!1},render:t=>{const e=new c(t),n=document.createElement("div");return n.style.padding="20px",e.mount(n),n}},h={args:{checked:!0,disabled:!1,size:"md",color:"green",label:"Estado activo",showLabel:!0},render:t=>{const e=new c(t),n=document.createElement("div");return n.style.padding="20px",e.mount(n),n}},y={args:{checked:!1,disabled:!1,size:"md",color:"red",label:"Modo de emergencia",showLabel:!0},render:t=>{const e=new c(t),n=document.createElement("div");return n.style.padding="20px",e.mount(n),n}},x={args:{checked:!0,disabled:!1,size:"md",color:"purple",label:"Modo premium",showLabel:!0},render:t=>{const e=new c(t),n=document.createElement("div");return n.style.padding="20px",e.mount(n),n}},f={args:{checked:!1,disabled:!1,size:"md",color:"orange",label:"Modo de desarrollo",showLabel:!0},render:t=>{const e=new c(t),n=document.createElement("div");return n.style.padding="20px",e.mount(n),n}},v={render:()=>{const t=document.createElement("div");t.style.padding="20px";const e=["sm","md","lg"],n=["Pequeño","Mediano","Grande"];return e.forEach((o,l)=>{const s=document.createElement("div");s.style.marginBottom="20px",s.style.display="flex",s.style.alignItems="center",s.style.gap="20px";const r=document.createElement("div");r.textContent=n[l],r.style.minWidth="80px",r.style.fontWeight="bold";const a=new c({checked:l===1,disabled:!1,size:o,color:"blue",label:`Toggle ${n[l]}`,showLabel:!0});s.appendChild(r),a.mount(s),t.appendChild(s)}),t}},w={render:()=>{const t=document.createElement("div");t.style.padding="20px";const e=["blue","green","red","purple","orange"],n=["Azul","Verde","Rojo","Púrpura","Naranja"];return e.forEach((o,l)=>{const s=document.createElement("div");s.style.marginBottom="20px",s.style.display="flex",s.style.alignItems="center",s.style.gap="20px";const r=document.createElement("div");r.textContent=n[l],r.style.minWidth="80px",r.style.fontWeight="bold";const a=new c({checked:l%2===0,disabled:!1,size:"md",color:o,label:`Toggle ${n[l]}`,showLabel:!0});s.appendChild(r),a.mount(s),t.appendChild(s)}),t}},C={args:{checked:!1,disabled:!1,size:"md",color:"blue",label:"Toggle Interactivo",showLabel:!0},render:t=>{const e=new c(t),n=document.createElement("div");n.style.padding="20px";const o=document.createElement("div");o.style.marginBottom="20px",o.style.display="flex",o.style.gap="10px",o.style.flexWrap="wrap";const l=document.createElement("select");l.className="px-3 py-1 border rounded",["blue","green","red","purple","orange"].forEach(a=>{const i=document.createElement("option");i.value=a,i.textContent=a.charAt(0).toUpperCase()+a.slice(1),l.appendChild(i)}),l.onchange=a=>e.setColor(a.target.value);const s=document.createElement("select");s.className="px-3 py-1 border rounded",["sm","md","lg"].forEach(a=>{const i=document.createElement("option");i.value=a,i.textContent=a.toUpperCase(),s.appendChild(i)}),s.value="md",s.onchange=a=>e.setSize(a.target.value);const r=document.createElement("button");return r.textContent="Toggle Disabled",r.className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600",r.onclick=()=>{e.options.disabled?(e.enable(),r.textContent="Disable",r.className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"):(e.disable(),r.textContent="Enable",r.className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600")},o.appendChild(l),o.appendChild(s),o.appendChild(r),n.appendChild(o),e.mount(n),n}};var E,z,k;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    size: 'md',
    color: 'blue',
    label: 'Notificaciones',
    showLabel: true
  },
  render: args => {
    const toggle = new Toggle(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    toggle.mount(container);
    return container;
  }
}`,...(k=(z=d.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var L,S,T;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    size: 'md',
    color: 'blue',
    label: 'Modo oscuro',
    showLabel: true
  },
  render: args => {
    const toggle = new Toggle(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    toggle.mount(container);
    return container;
  }
}`,...(T=(S=g.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var N,B,$;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true,
    size: 'md',
    color: 'blue',
    label: 'Función no disponible',
    showLabel: true
  },
  render: args => {
    const toggle = new Toggle(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    toggle.mount(container);
    return container;
  }
}`,...($=(B=p.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var D,M,I;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    size: 'sm',
    color: 'green',
    label: 'Auto-save',
    showLabel: true
  },
  render: args => {
    const toggle = new Toggle(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    toggle.mount(container);
    return container;
  }
}`,...(I=(M=u.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var W,A,q;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    size: 'lg',
    color: 'purple',
    label: 'Modo de alto contraste',
    showLabel: true
  },
  render: args => {
    const toggle = new Toggle(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    toggle.mount(container);
    return container;
  }
}`,...(q=(A=m.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var G,P,F;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    size: 'md',
    color: 'red',
    label: '',
    showLabel: false
  },
  render: args => {
    const toggle = new Toggle(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    toggle.mount(container);
    return container;
  }
}`,...(F=(P=b.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var U,j,R;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    size: 'md',
    color: 'green',
    label: 'Estado activo',
    showLabel: true
  },
  render: args => {
    const toggle = new Toggle(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    toggle.mount(container);
    return container;
  }
}`,...(R=(j=h.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var O,_,V;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    size: 'md',
    color: 'red',
    label: 'Modo de emergencia',
    showLabel: true
  },
  render: args => {
    const toggle = new Toggle(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    toggle.mount(container);
    return container;
  }
}`,...(V=(_=y.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var H,J,K;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    size: 'md',
    color: 'purple',
    label: 'Modo premium',
    showLabel: true
  },
  render: args => {
    const toggle = new Toggle(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    toggle.mount(container);
    return container;
  }
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    size: 'md',
    color: 'orange',
    label: 'Modo de desarrollo',
    showLabel: true
  },
  render: args => {
    const toggle = new Toggle(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    toggle.mount(container);
    return container;
  }
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    const sizes = ['sm', 'md', 'lg'];
    const sizeNames = ['Pequeño', 'Mediano', 'Grande'];
    sizes.forEach((size, index) => {
      const toggleContainer = document.createElement('div');
      toggleContainer.style.marginBottom = '20px';
      toggleContainer.style.display = 'flex';
      toggleContainer.style.alignItems = 'center';
      toggleContainer.style.gap = '20px';
      const label = document.createElement('div');
      label.textContent = sizeNames[index];
      label.style.minWidth = '80px';
      label.style.fontWeight = 'bold';
      const toggle = new Toggle({
        checked: index === 1,
        // El mediano estará activado
        disabled: false,
        size: size,
        color: 'blue',
        label: \`Toggle \${sizeNames[index]}\`,
        showLabel: true
      });
      toggleContainer.appendChild(label);
      toggle.mount(toggleContainer);
      container.appendChild(toggleContainer);
    });
    return container;
  }
}`,...(ne=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,oe,se;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    const colors = ['blue', 'green', 'red', 'purple', 'orange'];
    const colorNames = ['Azul', 'Verde', 'Rojo', 'Púrpura', 'Naranja'];
    colors.forEach((color, index) => {
      const toggleContainer = document.createElement('div');
      toggleContainer.style.marginBottom = '20px';
      toggleContainer.style.display = 'flex';
      toggleContainer.style.alignItems = 'center';
      toggleContainer.style.gap = '20px';
      const label = document.createElement('div');
      label.textContent = colorNames[index];
      label.style.minWidth = '80px';
      label.style.fontWeight = 'bold';
      const toggle = new Toggle({
        checked: index % 2 === 0,
        // Alternar estados
        disabled: false,
        size: 'md',
        color: color,
        label: \`Toggle \${colorNames[index]}\`,
        showLabel: true
      });
      toggleContainer.appendChild(label);
      toggle.mount(toggleContainer);
      container.appendChild(toggleContainer);
    });
    return container;
  }
}`,...(se=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var re,le,ae;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    size: 'md',
    color: 'blue',
    label: 'Toggle Interactivo',
    showLabel: true
  },
  render: args => {
    const toggle = new Toggle(args);
    const container = document.createElement('div');
    container.style.padding = '20px';

    // Controles interactivos
    const controls = document.createElement('div');
    controls.style.marginBottom = '20px';
    controls.style.display = 'flex';
    controls.style.gap = '10px';
    controls.style.flexWrap = 'wrap';
    const colorSelect = document.createElement('select');
    colorSelect.className = 'px-3 py-1 border rounded';
    ['blue', 'green', 'red', 'purple', 'orange'].forEach(color => {
      const option = document.createElement('option');
      option.value = color;
      option.textContent = color.charAt(0).toUpperCase() + color.slice(1);
      colorSelect.appendChild(option);
    });
    colorSelect.onchange = e => toggle.setColor(e.target.value);
    const sizeSelect = document.createElement('select');
    sizeSelect.className = 'px-3 py-1 border rounded';
    ['sm', 'md', 'lg'].forEach(size => {
      const option = document.createElement('option');
      option.value = size;
      option.textContent = size.toUpperCase();
      sizeSelect.appendChild(option);
    });
    sizeSelect.value = 'md';
    sizeSelect.onchange = e => toggle.setSize(e.target.value);
    const disableBtn = document.createElement('button');
    disableBtn.textContent = 'Toggle Disabled';
    disableBtn.className = 'px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600';
    disableBtn.onclick = () => {
      if (toggle.options.disabled) {
        toggle.enable();
        disableBtn.textContent = 'Disable';
        disableBtn.className = 'px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600';
      } else {
        toggle.disable();
        disableBtn.textContent = 'Enable';
        disableBtn.className = 'px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600';
      }
    };
    controls.appendChild(colorSelect);
    controls.appendChild(sizeSelect);
    controls.appendChild(disableBtn);
    container.appendChild(controls);
    toggle.mount(container);
    return container;
  }
}`,...(ae=(le=C.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};const ie=["Basic","Checked","Disabled","Small","Large","NoLabel","Green","Red","Purple","Orange","SizeGallery","ColorGallery","Interactive"];export{d as Basic,g as Checked,w as ColorGallery,p as Disabled,h as Green,C as Interactive,m as Large,b as NoLabel,f as Orange,x as Purple,y as Red,v as SizeGallery,u as Small,ie as __namedExportsOrder,ce as default};
