class a{constructor(n={}){this.options={size:"md",variant:"default",color:"blue",text:"",textPosition:"bottom",...n},this.id=this.generateId()}generateId(){return"spinner-"+Math.random().toString(36).substr(2,9)}render(){const n=this.getSizeClasses();return this.getColorClasses(),this.getTextPositionClasses(),`
      <div class="inline-flex flex-col items-center" id="${this.id}">
        ${this.options.text&&this.options.textPosition==="top"?`
          <div class="text-sm text-gray-600 mb-2">${this.options.text}</div>
        `:""}
        
        <div class="flex items-center ${this.options.text&&(this.options.textPosition==="left"||this.options.textPosition==="right")?"space-x-2":""}">
          ${this.options.text&&this.options.textPosition==="left"?`
            <div class="text-sm text-gray-600">${this.options.text}</div>
          `:""}
          
          <div class="${n}">
            ${this.renderSpinner()}
          </div>
          
          ${this.options.text&&this.options.textPosition==="right"?`
            <div class="text-sm text-gray-600">${this.options.text}</div>
          `:""}
        </div>
        
        ${this.options.text&&this.options.textPosition==="bottom"?`
          <div class="text-sm text-gray-600 mt-2">${this.options.text}</div>
        `:""}
      </div>
    `}renderSpinner(){switch(this.options.variant){case"dots":return this.renderDots();case"bars":return this.renderBars();case"pulse":return this.renderPulse();case"ring":return this.renderRing();default:return this.renderDefault()}}renderDefault(){return this.getColorClasses(),`
      <svg class="animate-spin" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    `}renderDots(){const n=this.getColorClasses();return`
      <div class="flex space-x-1">
        <div class="w-2 h-2 ${n} rounded-full animate-bounce" style="animation-delay: 0ms;"></div>
        <div class="w-2 h-2 ${n} rounded-full animate-bounce" style="animation-delay: 150ms;"></div>
        <div class="w-2 h-2 ${n} rounded-full animate-bounce" style="animation-delay: 300ms;"></div>
      </div>
    `}renderBars(){const n=this.getColorClasses();return`
      <div class="flex space-x-1">
        <div class="w-1 h-4 ${n} animate-pulse" style="animation-delay: 0ms;"></div>
        <div class="w-1 h-4 ${n} animate-pulse" style="animation-delay: 150ms;"></div>
        <div class="w-1 h-4 ${n} animate-pulse" style="animation-delay: 300ms;"></div>
      </div>
    `}renderPulse(){return`
      <div class="w-full h-full ${this.getColorClasses()} rounded-full animate-pulse"></div>
    `}renderRing(){return this.getColorClasses(),`
      <svg class="animate-spin" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    `}getSizeClasses(){const n={xs:"w-4 h-4",sm:"w-6 h-6",md:"w-8 h-8",lg:"w-12 h-12",xl:"w-16 h-16"};return n[this.options.size]||n.md}getColorClasses(){const n={blue:"text-blue-500",green:"text-green-500",red:"text-red-500",yellow:"text-yellow-500",purple:"text-purple-500",pink:"text-pink-500",indigo:"text-indigo-500",gray:"text-gray-500",white:"text-white"};return n[this.options.color]||n.blue}getTextPositionClasses(){const n={top:"flex-col",bottom:"flex-col",left:"flex-row",right:"flex-row"};return n[this.options.textPosition]||n.bottom}setSize(n){this.options.size=n,this.updateDisplay()}setVariant(n){this.options.variant=n,this.updateDisplay()}setColor(n){this.options.color=n,this.updateDisplay()}setText(n){this.options.text=n,this.updateDisplay()}setTextPosition(n){this.options.textPosition=n,this.updateDisplay()}updateDisplay(){const n=document.getElementById(this.id);n&&(n.outerHTML=this.render())}mount(n){typeof n=="string"&&(n=document.querySelector(n)),n&&(n.innerHTML=this.render())}static default(n={}){return new a({variant:"default",...n})}static dots(n={}){return new a({variant:"dots",...n})}static bars(n={}){return new a({variant:"bars",...n})}static pulse(n={}){return new a({variant:"pulse",...n})}static ring(n={}){return new a({variant:"ring",...n})}static loading(n="Cargando...",e={}){return new a({text:n,textPosition:"bottom",variant:"default",...e})}static processing(n="Procesando...",e={}){return new a({text:n,textPosition:"bottom",variant:"ring",...e})}static syncing(n="Sincronizando...",e={}){return new a({text:n,textPosition:"bottom",variant:"dots",...e})}getHTML(){return this.render()}clone(){return new a({...this.options})}isAnimating(){return!0}getDimensions(){const n={xs:16,sm:24,md:32,lg:48,xl:64},e=n[this.options.size]||n.md;return{width:e,height:e}}}const Ge={title:"Components/Feedback/Spinner",component:a,parameters:{docs:{description:{component:"Un componente de spinner de carga versátil con múltiples variantes, tamaños, colores y posiciones de texto."}}},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl"],description:"Tamaño del spinner"},variant:{control:{type:"select"},options:["default","dots","bars","pulse","ring"],description:"Variante de animación del spinner"},color:{control:{type:"select"},options:["blue","green","red","yellow","purple","pink","indigo","gray","white"],description:"Color del spinner"},text:{control:"text",description:"Texto descriptivo del spinner"},textPosition:{control:{type:"select"},options:["top","bottom","left","right"],description:"Posición del texto relativo al spinner"}}},u={args:{size:"md",variant:"default",color:"blue",text:"",textPosition:"bottom"},render:t=>{const n=new a(t),e=document.createElement("div");return e.style.padding="40px",e.style.backgroundColor="#f9fafb",e.style.display="flex",e.style.justifyContent="center",e.style.alignItems="center",e.style.minHeight="200px",n.mount(e),e}},y={args:{size:"md",variant:"default",color:"blue",text:"Cargando...",textPosition:"bottom"},render:t=>{const n=new a(t),e=document.createElement("div");return e.style.padding="40px",e.style.backgroundColor="#f9fafb",e.style.display="flex",e.style.justifyContent="center",e.style.alignItems="center",e.style.minHeight="200px",n.mount(e),e}},g={args:{size:"md",color:"blue",text:"Cargando...",textPosition:"bottom"},render:t=>{const n=document.createElement("div");return n.style.padding="40px",n.style.backgroundColor="#f9fafb",n.style.display="flex",n.style.flexWrap="wrap",n.style.gap="40px",n.style.justifyContent="center",n.style.alignItems="center",n.style.minHeight="200px",["default","dots","bars","pulse","ring"].forEach(r=>{const i=document.createElement("div");i.style.textAlign="center";const s=document.createElement("div");s.textContent=r.charAt(0).toUpperCase()+r.slice(1),s.style.marginBottom="10px",s.style.fontWeight="bold",s.style.color="#374151",i.appendChild(s),new a({...t,variant:r}).mount(i),n.appendChild(i)}),n}},x={args:{variant:"default",color:"blue",text:"Cargando...",textPosition:"bottom"},render:t=>{const n=document.createElement("div");return n.style.padding="40px",n.style.backgroundColor="#f9fafb",n.style.display="flex",n.style.flexWrap="wrap",n.style.gap="40px",n.style.justifyContent="center",n.style.alignItems="center",n.style.minHeight="200px",["xs","sm","md","lg","xl"].forEach(r=>{const i=document.createElement("div");i.style.textAlign="center";const s=document.createElement("div");s.textContent=r.toUpperCase(),s.style.marginBottom="10px",s.style.fontWeight="bold",s.style.color="#374151",i.appendChild(s),new a({...t,size:r}).mount(i),n.appendChild(i)}),n}},f={args:{size:"md",variant:"default",text:"Cargando...",textPosition:"bottom"},render:t=>{const n=document.createElement("div");return n.style.padding="40px",n.style.backgroundColor="#f9fafb",n.style.display="flex",n.style.flexWrap="wrap",n.style.gap="40px",n.style.justifyContent="center",n.style.alignItems="center",n.style.minHeight="200px",["blue","green","red","yellow","purple","pink","indigo","gray"].forEach(r=>{const i=document.createElement("div");i.style.textAlign="center";const s=document.createElement("div");s.textContent=r.charAt(0).toUpperCase()+r.slice(1),s.style.marginBottom="10px",s.style.fontWeight="bold",s.style.color="#374151",i.appendChild(s),new a({...t,color:r}).mount(i),n.appendChild(i)}),n}},C={args:{size:"md",variant:"default",color:"blue",text:"Cargando..."},render:t=>{const n=document.createElement("div");return n.style.padding="40px",n.style.backgroundColor="#f9fafb",n.style.display="flex",n.style.flexWrap="wrap",n.style.gap="40px",n.style.justifyContent="center",n.style.alignItems="center",n.style.minHeight="200px",["top","bottom","left","right"].forEach(r=>{const i=document.createElement("div");i.style.textAlign="center";const s=document.createElement("div");s.textContent=r.charAt(0).toUpperCase()+r.slice(1),s.style.marginBottom="10px",s.style.fontWeight="bold",s.style.color="#374151",i.appendChild(s),new a({...t,textPosition:r}).mount(i),n.appendChild(i)}),n}},b={args:{size:"md",variant:"dots",color:"blue",text:"Sincronizando...",textPosition:"bottom"},render:t=>{const n=a.dots(t),e=document.createElement("div");return e.style.padding="40px",e.style.backgroundColor="#f9fafb",e.style.display="flex",e.style.justifyContent="center",e.style.alignItems="center",e.style.minHeight="200px",n.mount(e),e}},h={args:{size:"md",variant:"bars",color:"green",text:"Procesando...",textPosition:"bottom"},render:t=>{const n=a.bars(t),e=document.createElement("div");return e.style.padding="40px",e.style.backgroundColor="#f9fafb",e.style.display="flex",e.style.justifyContent="center",e.style.alignItems="center",e.style.minHeight="200px",n.mount(e),e}},v={args:{size:"md",variant:"pulse",color:"purple",text:"Esperando...",textPosition:"bottom"},render:t=>{const n=a.pulse(t),e=document.createElement("div");return e.style.padding="40px",e.style.backgroundColor="#f9fafb",e.style.display="flex",e.style.justifyContent="center",e.style.alignItems="center",e.style.minHeight="200px",n.mount(e),e}},E={args:{size:"md",variant:"ring",color:"indigo",text:"Conectando...",textPosition:"bottom"},render:t=>{const n=a.ring(t),e=document.createElement("div");return e.style.padding="40px",e.style.backgroundColor="#f9fafb",e.style.display="flex",e.style.justifyContent="center",e.style.alignItems="center",e.style.minHeight="200px",n.mount(e),e}},z={args:{size:"md",color:"blue",text:"Cargando...",textPosition:"bottom"},render:t=>{const n=a.loading(t.text,t),e=document.createElement("div");return e.style.padding="40px",e.style.backgroundColor="#f9fafb",e.style.display="flex",e.style.justifyContent="center",e.style.alignItems="center",e.style.minHeight="200px",n.mount(e),e}},S={args:{size:"md",color:"green",text:"Procesando...",textPosition:"bottom"},render:t=>{const n=a.processing(t.text,t),e=document.createElement("div");return e.style.padding="40px",e.style.backgroundColor="#f9fafb",e.style.display="flex",e.style.justifyContent="center",e.style.alignItems="center",e.style.minHeight="200px",n.mount(e),e}},w={args:{size:"md",color:"blue",text:"Sincronizando...",textPosition:"bottom"},render:t=>{const n=a.syncing(t.text,t),e=document.createElement("div");return e.style.padding="40px",e.style.backgroundColor="#f9fafb",e.style.display="flex",e.style.justifyContent="center",e.style.alignItems="center",e.style.minHeight="200px",n.mount(e),e}},P={args:{size:"sm",variant:"default",color:"blue",text:"Cargando...",textPosition:"bottom"},render:t=>{const n=new a(t),e=document.createElement("div");return e.style.padding="40px",e.style.backgroundColor="#f9fafb",e.style.display="flex",e.style.justifyContent="center",e.style.alignItems="center",e.style.minHeight="200px",n.mount(e),e}},I={args:{size:"lg",variant:"default",color:"blue",text:"Cargando...",textPosition:"bottom"},render:t=>{const n=new a(t),e=document.createElement("div");return e.style.padding="40px",e.style.backgroundColor="#f9fafb",e.style.display="flex",e.style.justifyContent="center",e.style.alignItems="center",e.style.minHeight="200px",n.mount(e),e}},k={args:{size:"xl",variant:"default",color:"blue",text:"Cargando...",textPosition:"bottom"},render:t=>{const n=new a(t),e=document.createElement("div");return e.style.padding="40px",e.style.backgroundColor="#f9fafb",e.style.display="flex",e.style.justifyContent="center",e.style.alignItems="center",e.style.minHeight="200px",n.mount(e),e}},H={args:{size:"md",variant:"default",color:"blue",text:"Cargando datos...",textPosition:"left"},render:t=>{const n=new a(t),e=document.createElement("div");return e.style.padding="40px",e.style.backgroundColor="#f9fafb",e.style.display="flex",e.style.justifyContent="center",e.style.alignItems="center",e.style.minHeight="200px",n.mount(e),e}},j={args:{size:"md",variant:"default",color:"blue",text:"Cargando datos...",textPosition:"right"},render:t=>{const n=new a(t),e=document.createElement("div");return e.style.padding="40px",e.style.backgroundColor="#f9fafb",e.style.display="flex",e.style.justifyContent="center",e.style.alignItems="center",e.style.minHeight="200px",n.mount(e),e}},T={args:{size:"md",variant:"default",color:"blue",text:"Cargando datos...",textPosition:"top"},render:t=>{const n=new a(t),e=document.createElement("div");return e.style.padding="40px",e.style.backgroundColor="#f9fafb",e.style.display="flex",e.style.justifyContent="center",e.style.alignItems="center",e.style.minHeight="200px",n.mount(e),e}},A={args:{text:"Cargando...",textPosition:"bottom"},render:t=>{const n=document.createElement("div");n.style.padding="40px",n.style.backgroundColor="#f9fafb",n.style.display="flex",n.style.flexWrap="wrap",n.style.gap="40px",n.style.justifyContent="center",n.style.alignItems="center",n.style.minHeight="300px";const e=["default","dots","bars","pulse","ring"],r=["sm","md","lg"],i=["blue","green","red","purple"];return e.forEach(s=>{const c=document.createElement("div");c.style.textAlign="center",c.style.marginBottom="20px";const d=document.createElement("h3");d.textContent=s.charAt(0).toUpperCase()+s.slice(1),d.style.marginBottom="20px",d.style.color="#374151",d.style.fontSize="18px",d.style.fontWeight="bold",c.appendChild(d);const p=document.createElement("div");p.style.display="flex",p.style.gap="20px",p.style.justifyContent="center",p.style.flexWrap="wrap",r.forEach(m=>{const o=document.createElement("div");o.style.textAlign="center";const l=document.createElement("div");l.textContent=m.toUpperCase(),l.style.marginBottom="10px",l.style.fontWeight="bold",l.style.color="#6b7280",o.appendChild(l),new a({...t,variant:s,size:m,color:i[Math.floor(Math.random()*i.length)]}).mount(o),p.appendChild(o)}),c.appendChild(p),n.appendChild(c)}),n}},W={args:{size:"md",variant:"default",color:"blue",text:"Cargando...",textPosition:"bottom"},render:t=>{const n=new a(t),e=document.createElement("div");e.style.padding="40px",e.style.backgroundColor="#f9fafb",e.style.display="flex",e.style.flexDirection="column",e.style.alignItems="center",e.style.minHeight="300px";const r=document.createElement("div");r.style.marginBottom="30px",r.style.display="flex",r.style.gap="15px",r.style.flexWrap="wrap",r.style.justifyContent="center",r.style.alignItems="center";const i=document.createElement("select");i.className="px-3 py-1 border rounded",["default","dots","bars","pulse","ring"].forEach(o=>{const l=document.createElement("option");l.value=o,l.textContent=o.charAt(0).toUpperCase()+o.slice(1),l.selected=o===t.variant,i.appendChild(l)}),i.onchange=o=>{t.variant=o.target.value,n.setVariant(o.target.value)};const s=document.createElement("select");s.className="px-3 py-1 border rounded",["xs","sm","md","lg","xl"].forEach(o=>{const l=document.createElement("option");l.value=o,l.textContent=o.toUpperCase(),l.selected=o===t.size,s.appendChild(l)}),s.onchange=o=>{t.size=o.target.value,n.setSize(o.target.value)};const c=document.createElement("select");c.className="px-3 py-1 border rounded",["blue","green","red","yellow","purple","pink","indigo","gray"].forEach(o=>{const l=document.createElement("option");l.value=o,l.textContent=o.charAt(0).toUpperCase()+o.slice(1),l.selected=o===t.color,c.appendChild(l)}),c.onchange=o=>{t.color=o.target.value,n.setColor(o.target.value)};const d=document.createElement("input");d.type="text",d.value=t.text,d.className="px-3 py-1 border rounded",d.placeholder="Texto del spinner",d.onchange=o=>{t.text=o.target.value,n.setText(o.target.value)};const p=document.createElement("select");p.className="px-3 py-1 border rounded",["top","bottom","left","right"].forEach(o=>{const l=document.createElement("option");l.value=o,l.textContent=o.charAt(0).toUpperCase()+o.slice(1),l.selected=o===t.textPosition,p.appendChild(l)}),p.onchange=o=>{t.textPosition=o.target.value,n.setTextPosition(o.target.value)},r.appendChild(document.createElement("label")).textContent="Variante:",r.appendChild(i),r.appendChild(document.createElement("label")).textContent="Tamaño:",r.appendChild(s),r.appendChild(document.createElement("label")).textContent="Color:",r.appendChild(c),r.appendChild(document.createElement("label")).textContent="Texto:",r.appendChild(d),r.appendChild(document.createElement("label")).textContent="Posición:",r.appendChild(p),e.appendChild(r);const m=document.createElement("div");return m.style.display="flex",m.style.justifyContent="center",m.style.alignItems="center",m.style.minHeight="200px",n.mount(m),e.appendChild(m),e}};var L,B,U;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'default',
    color: 'blue',
    text: '',
    textPosition: 'bottom'
  },
  render: args => {
    const spinner = new Spinner(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    spinner.mount(container);
    return container;
  }
}`,...(U=(B=u.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var $,D,M;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'default',
    color: 'blue',
    text: 'Cargando...',
    textPosition: 'bottom'
  },
  render: args => {
    const spinner = new Spinner(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    spinner.mount(container);
    return container;
  }
}`,...(M=(D=y.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var N,V,R;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: 'md',
    color: 'blue',
    text: 'Cargando...',
    textPosition: 'bottom'
  },
  render: args => {
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.gap = '40px';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    const variants = ['default', 'dots', 'bars', 'pulse', 'ring'];
    variants.forEach(variant => {
      const spinnerContainer = document.createElement('div');
      spinnerContainer.style.textAlign = 'center';
      const label = document.createElement('div');
      label.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
      label.style.marginBottom = '10px';
      label.style.fontWeight = 'bold';
      label.style.color = '#374151';
      spinnerContainer.appendChild(label);
      const spinner = new Spinner({
        ...args,
        variant
      });
      spinner.mount(spinnerContainer);
      container.appendChild(spinnerContainer);
    });
    return container;
  }
}`,...(R=(V=g.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var F,G,q;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    color: 'blue',
    text: 'Cargando...',
    textPosition: 'bottom'
  },
  render: args => {
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.gap = '40px';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
    sizes.forEach(size => {
      const spinnerContainer = document.createElement('div');
      spinnerContainer.style.textAlign = 'center';
      const label = document.createElement('div');
      label.textContent = size.toUpperCase();
      label.style.marginBottom = '10px';
      label.style.fontWeight = 'bold';
      label.style.color = '#374151';
      spinnerContainer.appendChild(label);
      const spinner = new Spinner({
        ...args,
        size
      });
      spinner.mount(spinnerContainer);
      container.appendChild(spinnerContainer);
    });
    return container;
  }
}`,...(q=(G=x.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var O,J,K;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'default',
    text: 'Cargando...',
    textPosition: 'bottom'
  },
  render: args => {
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.gap = '40px';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    const colors = ['blue', 'green', 'red', 'yellow', 'purple', 'pink', 'indigo', 'gray'];
    colors.forEach(color => {
      const spinnerContainer = document.createElement('div');
      spinnerContainer.style.textAlign = 'center';
      const label = document.createElement('div');
      label.textContent = color.charAt(0).toUpperCase() + color.slice(1);
      label.style.marginBottom = '10px';
      label.style.fontWeight = 'bold';
      label.style.color = '#374151';
      spinnerContainer.appendChild(label);
      const spinner = new Spinner({
        ...args,
        color
      });
      spinner.mount(spinnerContainer);
      container.appendChild(spinnerContainer);
    });
    return container;
  }
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'default',
    color: 'blue',
    text: 'Cargando...'
  },
  render: args => {
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.gap = '40px';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    const positions = ['top', 'bottom', 'left', 'right'];
    positions.forEach(position => {
      const spinnerContainer = document.createElement('div');
      spinnerContainer.style.textAlign = 'center';
      const label = document.createElement('div');
      label.textContent = position.charAt(0).toUpperCase() + position.slice(1);
      label.style.marginBottom = '10px';
      label.style.fontWeight = 'bold';
      label.style.color = '#374151';
      spinnerContainer.appendChild(label);
      const spinner = new Spinner({
        ...args,
        textPosition: position
      });
      spinner.mount(spinnerContainer);
      container.appendChild(spinnerContainer);
    });
    return container;
  }
}`,...(Y=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,_,ee;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'dots',
    color: 'blue',
    text: 'Sincronizando...',
    textPosition: 'bottom'
  },
  render: args => {
    const spinner = Spinner.dots(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    spinner.mount(container);
    return container;
  }
}`,...(ee=(_=b.parameters)==null?void 0:_.docs)==null?void 0:ee.source}}};var ne,te,oe;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'bars',
    color: 'green',
    text: 'Procesando...',
    textPosition: 'bottom'
  },
  render: args => {
    const spinner = Spinner.bars(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    spinner.mount(container);
    return container;
  }
}`,...(oe=(te=h.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var re,se,ae;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'pulse',
    color: 'purple',
    text: 'Esperando...',
    textPosition: 'bottom'
  },
  render: args => {
    const spinner = Spinner.pulse(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    spinner.mount(container);
    return container;
  }
}`,...(ae=(se=v.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ie,le,ce;E.parameters={...E.parameters,docs:{...(ie=E.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'ring',
    color: 'indigo',
    text: 'Conectando...',
    textPosition: 'bottom'
  },
  render: args => {
    const spinner = Spinner.ring(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    spinner.mount(container);
    return container;
  }
}`,...(ce=(le=E.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,pe,me;z.parameters={...z.parameters,docs:{...(de=z.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    size: 'md',
    color: 'blue',
    text: 'Cargando...',
    textPosition: 'bottom'
  },
  render: args => {
    const spinner = Spinner.loading(args.text, args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    spinner.mount(container);
    return container;
  }
}`,...(me=(pe=z.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ue,ye,ge;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    size: 'md',
    color: 'green',
    text: 'Procesando...',
    textPosition: 'bottom'
  },
  render: args => {
    const spinner = Spinner.processing(args.text, args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    spinner.mount(container);
    return container;
  }
}`,...(ge=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:ge.source}}};var xe,fe,Ce;w.parameters={...w.parameters,docs:{...(xe=w.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    size: 'md',
    color: 'blue',
    text: 'Sincronizando...',
    textPosition: 'bottom'
  },
  render: args => {
    const spinner = Spinner.syncing(args.text, args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    spinner.mount(container);
    return container;
  }
}`,...(Ce=(fe=w.parameters)==null?void 0:fe.docs)==null?void 0:Ce.source}}};var be,he,ve;P.parameters={...P.parameters,docs:{...(be=P.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    variant: 'default',
    color: 'blue',
    text: 'Cargando...',
    textPosition: 'bottom'
  },
  render: args => {
    const spinner = new Spinner(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    spinner.mount(container);
    return container;
  }
}`,...(ve=(he=P.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var Ee,ze,Se;I.parameters={...I.parameters,docs:{...(Ee=I.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    variant: 'default',
    color: 'blue',
    text: 'Cargando...',
    textPosition: 'bottom'
  },
  render: args => {
    const spinner = new Spinner(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    spinner.mount(container);
    return container;
  }
}`,...(Se=(ze=I.parameters)==null?void 0:ze.docs)==null?void 0:Se.source}}};var we,Pe,Ie;k.parameters={...k.parameters,docs:{...(we=k.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    size: 'xl',
    variant: 'default',
    color: 'blue',
    text: 'Cargando...',
    textPosition: 'bottom'
  },
  render: args => {
    const spinner = new Spinner(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    spinner.mount(container);
    return container;
  }
}`,...(Ie=(Pe=k.parameters)==null?void 0:Pe.docs)==null?void 0:Ie.source}}};var ke,He,je;H.parameters={...H.parameters,docs:{...(ke=H.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'default',
    color: 'blue',
    text: 'Cargando datos...',
    textPosition: 'left'
  },
  render: args => {
    const spinner = new Spinner(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    spinner.mount(container);
    return container;
  }
}`,...(je=(He=H.parameters)==null?void 0:He.docs)==null?void 0:je.source}}};var Te,Ae,We;j.parameters={...j.parameters,docs:{...(Te=j.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'default',
    color: 'blue',
    text: 'Cargando datos...',
    textPosition: 'right'
  },
  render: args => {
    const spinner = new Spinner(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    spinner.mount(container);
    return container;
  }
}`,...(We=(Ae=j.parameters)==null?void 0:Ae.docs)==null?void 0:We.source}}};var Le,Be,Ue;T.parameters={...T.parameters,docs:{...(Le=T.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'default',
    color: 'blue',
    text: 'Cargando datos...',
    textPosition: 'top'
  },
  render: args => {
    const spinner = new Spinner(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '200px';
    spinner.mount(container);
    return container;
  }
}`,...(Ue=(Be=T.parameters)==null?void 0:Be.docs)==null?void 0:Ue.source}}};var $e,De,Me;A.parameters={...A.parameters,docs:{...($e=A.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    text: 'Cargando...',
    textPosition: 'bottom'
  },
  render: args => {
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.gap = '40px';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.minHeight = '300px';
    const variants = ['default', 'dots', 'bars', 'pulse', 'ring'];
    const sizes = ['sm', 'md', 'lg'];
    const colors = ['blue', 'green', 'red', 'purple'];
    variants.forEach(variant => {
      const variantContainer = document.createElement('div');
      variantContainer.style.textAlign = 'center';
      variantContainer.style.marginBottom = '20px';
      const variantLabel = document.createElement('h3');
      variantLabel.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
      variantLabel.style.marginBottom = '20px';
      variantLabel.style.color = '#374151';
      variantLabel.style.fontSize = '18px';
      variantLabel.style.fontWeight = 'bold';
      variantContainer.appendChild(variantLabel);
      const sizesContainer = document.createElement('div');
      sizesContainer.style.display = 'flex';
      sizesContainer.style.gap = '20px';
      sizesContainer.style.justifyContent = 'center';
      sizesContainer.style.flexWrap = 'wrap';
      sizes.forEach(size => {
        const sizeContainer = document.createElement('div');
        sizeContainer.style.textAlign = 'center';
        const sizeLabel = document.createElement('div');
        sizeLabel.textContent = size.toUpperCase();
        sizeLabel.style.marginBottom = '10px';
        sizeLabel.style.fontWeight = 'bold';
        sizeLabel.style.color = '#6b7280';
        sizeContainer.appendChild(sizeLabel);
        const spinner = new Spinner({
          ...args,
          variant,
          size,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
        spinner.mount(sizeContainer);
        sizesContainer.appendChild(sizeContainer);
      });
      variantContainer.appendChild(sizesContainer);
      container.appendChild(variantContainer);
    });
    return container;
  }
}`,...(Me=(De=A.parameters)==null?void 0:De.docs)==null?void 0:Me.source}}};var Ne,Ve,Re;W.parameters={...W.parameters,docs:{...(Ne=W.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'default',
    color: 'blue',
    text: 'Cargando...',
    textPosition: 'bottom'
  },
  render: args => {
    const spinner = new Spinner(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style.minHeight = '300px';

    // Controles interactivos
    const controls = document.createElement('div');
    controls.style.marginBottom = '30px';
    controls.style.display = 'flex';
    controls.style.gap = '15px';
    controls.style.flexWrap = 'wrap';
    controls.style.justifyContent = 'center';
    controls.style.alignItems = 'center';
    const variantSelect = document.createElement('select');
    variantSelect.className = 'px-3 py-1 border rounded';
    ['default', 'dots', 'bars', 'pulse', 'ring'].forEach(variant => {
      const option = document.createElement('option');
      option.value = variant;
      option.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
      option.selected = variant === args.variant;
      variantSelect.appendChild(option);
    });
    variantSelect.onchange = e => {
      args.variant = e.target.value;
      spinner.setVariant(e.target.value);
    };
    const sizeSelect = document.createElement('select');
    sizeSelect.className = 'px-3 py-1 border rounded';
    ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
      const option = document.createElement('option');
      option.value = size;
      option.textContent = size.toUpperCase();
      option.selected = size === args.size;
      sizeSelect.appendChild(option);
    });
    sizeSelect.onchange = e => {
      args.size = e.target.value;
      spinner.setSize(e.target.value);
    };
    const colorSelect = document.createElement('select');
    colorSelect.className = 'px-3 py-1 border rounded';
    ['blue', 'green', 'red', 'yellow', 'purple', 'pink', 'indigo', 'gray'].forEach(color => {
      const option = document.createElement('option');
      option.value = color;
      option.textContent = color.charAt(0).toUpperCase() + color.slice(1);
      option.selected = color === args.color;
      colorSelect.appendChild(option);
    });
    colorSelect.onchange = e => {
      args.color = e.target.value;
      spinner.setColor(e.target.value);
    };
    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.value = args.text;
    textInput.className = 'px-3 py-1 border rounded';
    textInput.placeholder = 'Texto del spinner';
    textInput.onchange = e => {
      args.text = e.target.value;
      spinner.setText(e.target.value);
    };
    const positionSelect = document.createElement('select');
    positionSelect.className = 'px-3 py-1 border rounded';
    ['top', 'bottom', 'left', 'right'].forEach(position => {
      const option = document.createElement('option');
      option.value = position;
      option.textContent = position.charAt(0).toUpperCase() + position.slice(1);
      option.selected = position === args.textPosition;
      positionSelect.appendChild(option);
    });
    positionSelect.onchange = e => {
      args.textPosition = e.target.value;
      spinner.setTextPosition(e.target.value);
    };
    controls.appendChild(document.createElement('label')).textContent = 'Variante:';
    controls.appendChild(variantSelect);
    controls.appendChild(document.createElement('label')).textContent = 'Tamaño:';
    controls.appendChild(sizeSelect);
    controls.appendChild(document.createElement('label')).textContent = 'Color:';
    controls.appendChild(colorSelect);
    controls.appendChild(document.createElement('label')).textContent = 'Texto:';
    controls.appendChild(textInput);
    controls.appendChild(document.createElement('label')).textContent = 'Posición:';
    controls.appendChild(positionSelect);
    container.appendChild(controls);

    // Spinner
    const spinnerContainer = document.createElement('div');
    spinnerContainer.style.display = 'flex';
    spinnerContainer.style.justifyContent = 'center';
    spinnerContainer.style.alignItems = 'center';
    spinnerContainer.style.minHeight = '200px';
    spinner.mount(spinnerContainer);
    container.appendChild(spinnerContainer);
    return container;
  }
}`,...(Re=(Ve=W.parameters)==null?void 0:Ve.docs)==null?void 0:Re.source}}};const qe=["Basic","WithText","Variants","Sizes","Colors","TextPositions","Dots","Bars","Pulse","Ring","Loading","Processing","Syncing","Small","Large","ExtraLarge","TextLeft","TextRight","TextTop","Gallery","Interactive"];export{h as Bars,u as Basic,f as Colors,b as Dots,k as ExtraLarge,A as Gallery,W as Interactive,I as Large,z as Loading,S as Processing,v as Pulse,E as Ring,x as Sizes,P as Small,w as Syncing,H as TextLeft,C as TextPositions,j as TextRight,T as TextTop,g as Variants,y as WithText,qe as __namedExportsOrder,Ge as default};
