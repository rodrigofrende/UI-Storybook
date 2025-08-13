class a{constructor(t={}){this.options={content:"",position:"top",variant:"default",size:"md",showArrow:!0,delay:200,maxWidth:200,trigger:"hover",...t},this.isVisible=!1,this.timeout=null,this.id=this.generateId(),this.tooltipId=`tooltip-${this.id}`}generateId(){return"tooltip-"+Math.random().toString(36).substr(2,9)}render(){const t=this.getVariantClasses(),e=this.getSizeClasses(),n=this.getPositionClasses();return`
      <div 
        class="absolute z-50 ${n.container} ${this.isVisible?"opacity-100 visible":"opacity-0 invisible"} transition-all duration-200 ease-in-out"
        id="${this.tooltipId}"
        role="tooltip"
        aria-hidden="${!this.isVisible}"
      >
        ${this.options.showArrow?`
          <div class="absolute ${n.arrow} ${t.arrow}"></div>
        `:""}
        
        <div class="relative ${t.background} ${t.text} ${t.border} ${e} ${t.shadow} rounded-lg px-3 py-2 max-w-xs">
          <div class="text-center">
            ${this.options.content}
          </div>
        </div>
      </div>
    `}getVariantClasses(){const t={default:{background:"bg-gray-900",text:"text-white",border:"border border-gray-700",shadow:"shadow-lg",arrow:"border-gray-900"},dark:{background:"bg-black",text:"text-white",border:"border border-gray-800",shadow:"shadow-xl",arrow:"border-black"},light:{background:"bg-white",text:"text-gray-900",border:"border border-gray-200",shadow:"shadow-lg",arrow:"border-white"},info:{background:"bg-blue-600",text:"text-white",border:"border border-blue-700",shadow:"shadow-lg",arrow:"border-blue-600"},success:{background:"bg-green-600",text:"text-white",border:"border border-green-700",shadow:"shadow-lg",arrow:"border-green-600"},warning:{background:"bg-yellow-600",text:"text-white",border:"border border-yellow-700",shadow:"shadow-lg",arrow:"border-yellow-600"},error:{background:"bg-red-600",text:"text-white",border:"border border-red-700",shadow:"shadow-lg",arrow:"border-red-600"}};return t[this.options.variant]||t.default}getSizeClasses(){const t={sm:"text-xs",md:"text-sm",lg:"text-base"};return t[this.options.size]||t.md}getPositionClasses(){const t={top:{container:"bottom-full left-1/2 transform -translate-x-1/2 mb-2",arrow:"top-full left-1/2 transform -translate-x-1/2 border-t-4 border-l-4 border-r-4 border-transparent"},bottom:{container:"top-full left-1/2 transform -translate-x-1/2 mt-2",arrow:"bottom-full left-1/2 transform -translate-x-1/2 border-b-4 border-l-4 border-r-4 border-transparent"},left:{container:"right-full top-1/2 transform -translate-y-1/2 mr-2",arrow:"left-full top-1/2 transform -translate-y-1/2 border-l-4 border-t-4 border-b-4 border-transparent"},right:{container:"left-full top-1/2 transform -translate-y-1/2 ml-2",arrow:"right-full top-1/2 transform -translate-y-1/2 border-r-4 border-t-4 border-b-4 border-transparent"}};return t[this.options.position]||t.top}show(){this.isVisible||(this.isVisible=!0,this.updateDisplay(),this.triggerEvent("show"))}hide(){this.isVisible&&(this.isVisible=!1,this.updateDisplay(),this.triggerEvent("hide"))}toggle(){this.isVisible?this.hide():this.show()}setContent(t){this.options.content=t,this.updateDisplay()}setPosition(t){this.options.position=t,this.updateDisplay()}setVariant(t){this.options.variant=t,this.updateDisplay()}setSize(t){this.options.size=t,this.updateDisplay()}setShowArrow(t){this.options.showArrow=t,this.updateDisplay()}setDelay(t){this.options.delay=t}setMaxWidth(t){this.options.maxWidth=t,this.updateDisplay()}setTrigger(t){this.options.trigger=t}updateDisplay(){const t=document.getElementById(this.tooltipId);t&&(t.outerHTML=this.render())}triggerEvent(t,e={}){const n=new CustomEvent(`tooltip:${t}`,{detail:{tooltip:this,...e},bubbles:!0});document.dispatchEvent(n)}mount(t){typeof t=="string"&&(t=document.querySelector(t)),t&&(t.innerHTML=this.render(),this.attachEventListeners(t))}attachEventListeners(t){const e=t.querySelector("[data-tooltip-trigger]");if(e)switch(this.options.trigger){case"hover":e.addEventListener("mouseenter",()=>{this.timeout=setTimeout(()=>this.show(),this.options.delay)}),e.addEventListener("mouseleave",()=>{this.timeout&&(clearTimeout(this.timeout),this.timeout=null),this.hide()});break;case"click":e.addEventListener("click",n=>{n.preventDefault(),this.toggle()}),document.addEventListener("click",n=>{t.contains(n.target)||this.hide()});break;case"focus":e.addEventListener("focus",()=>{this.timeout=setTimeout(()=>this.show(),this.options.delay)}),e.addEventListener("blur",()=>{this.timeout&&(clearTimeout(this.timeout),this.timeout=null),this.hide()});break}}static info(t,e={}){return new a({content:t,variant:"info",...e})}static success(t,e={}){return new a({content:t,variant:"success",...e})}static warning(t,e={}){return new a({content:t,variant:"warning",...e})}static error(t,e={}){return new a({content:t,variant:"error",...e})}static light(t,e={}){return new a({content:t,variant:"light",...e})}static dark(t,e={}){return new a({content:t,variant:"dark",...e})}static help(t,e={}){return new a({content:t,variant:"info",size:"sm",position:"top",...e})}static error(t,e={}){return new a({content:t,variant:"error",size:"md",position:"top",...e})}getHTML(){return this.render()}clone(){return new a({...this.options})}isTooltipVisible(){return this.isVisible}destroy(){this.hide();const t=document.getElementById(this.tooltipId);t&&t.remove()}}const vt={title:"Components/Feedback/Tooltip",component:a,parameters:{docs:{description:{component:"Un componente de tooltip versátil con múltiples posiciones, variantes, tamaños y triggers personalizables."}}},argTypes:{content:{control:"text",description:"Contenido del tooltip"},position:{control:{type:"select"},options:["top","bottom","left","right"],description:"Posición del tooltip"},variant:{control:{type:"select"},options:["default","dark","light","info","success","warning","error"],description:"Variante de diseño del tooltip"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Tamaño del tooltip"},showArrow:{control:"boolean",description:"Si mostrar la flecha del tooltip"},delay:{control:{type:"range",min:0,max:1e3,step:50},description:"Retraso antes de mostrar el tooltip (ms)"},maxWidth:{control:{type:"range",min:100,max:500,step:25},description:"Ancho máximo del tooltip"},trigger:{control:{type:"select"},options:["hover","click","focus"],description:"Tipo de trigger para mostrar el tooltip"}}},u={args:{content:"Este es un tooltip básico",position:"top",variant:"default",size:"md",showArrow:!0,delay:200,maxWidth:200,trigger:"hover"},render:o=>{const t=new a(o),e=document.createElement("div");e.style.padding="40px",e.style.backgroundColor="#f9fafb",e.style.position="relative";const n=document.createElement("button");return n.textContent="Hover sobre mí",n.className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",n.setAttribute("data-tooltip-trigger","true"),e.appendChild(n),t.mount(e),e}},m={args:{content:"Tooltip en diferentes posiciones",variant:"default",size:"md",showArrow:!0,delay:200,maxWidth:200,trigger:"hover"},render:o=>{const t=document.createElement("div");return t.style.padding="60px",t.style.backgroundColor="#f9fafb",t.style.position="relative",t.style.minHeight="300px",["top","right","bottom","left"].forEach((n,c)=>{const r=document.createElement("button");r.textContent=`${n.charAt(0).toUpperCase()+n.slice(1)}`,r.className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",r.setAttribute("data-tooltip-trigger","true"),r.style.position="absolute",n==="top"?(r.style.top="20px",r.style.left="50%",r.style.transform="translateX(-50%)"):n==="right"?(r.style.top="50%",r.style.right="20px",r.style.transform="translateY(-50%)"):n==="bottom"?(r.style.bottom="20px",r.style.left="50%",r.style.transform="translateX(-50%)"):n==="left"&&(r.style.top="50%",r.style.left="20px",r.style.transform="translateY(-50%)"),t.appendChild(r),new a({...o,position:n}).mount(t)}),t}},h={args:{content:"Diferentes variantes de tooltip",position:"top",size:"md",showArrow:!0,delay:200,maxWidth:200,trigger:"hover"},render:o=>{const t=document.createElement("div");return t.style.padding="40px",t.style.backgroundColor="#f9fafb",t.style.position="relative",["default","dark","light","info","success","warning","error"].forEach((n,c)=>{const r=document.createElement("button");r.textContent=n.charAt(0).toUpperCase()+n.slice(1),r.className="px-4 py-2 mr-2 mb-2 bg-gray-500 text-white rounded hover:bg-gray-600",r.setAttribute("data-tooltip-trigger","true"),t.appendChild(r),new a({...o,variant:n}).mount(t)}),t}},b={args:{content:"Tooltips de diferentes tamaños",position:"top",variant:"default",showArrow:!0,delay:200,maxWidth:200,trigger:"hover"},render:o=>{const t=document.createElement("div");return t.style.padding="40px",t.style.backgroundColor="#f9fafb",t.style.position="relative",["sm","md","lg"].forEach((n,c)=>{const r=document.createElement("button");r.textContent=n.toUpperCase(),r.className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600",r.setAttribute("data-tooltip-trigger","true"),t.appendChild(r),new a({...o,size:n}).mount(t)}),t}},y={args:{content:"Tooltip sin flecha",position:"top",variant:"default",size:"md",showArrow:!1,delay:200,maxWidth:200,trigger:"hover"},render:o=>{const t=new a(o),e=document.createElement("div");e.style.padding="40px",e.style.backgroundColor="#f9fafb",e.style.position="relative";const n=document.createElement("button");return n.textContent="Sin flecha",n.className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600",n.setAttribute("data-tooltip-trigger","true"),e.appendChild(n),t.mount(e),e}},x={args:{content:"Tooltip con retraso personalizado",position:"top",variant:"info",size:"md",showArrow:!0,delay:500,maxWidth:200,trigger:"hover"},render:o=>{const t=new a(o),e=document.createElement("div");e.style.padding="40px",e.style.backgroundColor="#f9fafb",e.style.position="relative";const n=document.createElement("button");return n.textContent="Retraso 500ms",n.className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600",n.setAttribute("data-tooltip-trigger","true"),e.appendChild(n),t.mount(e),e}},v={args:{content:"Tooltip activado por clic",position:"top",variant:"success",size:"md",showArrow:!0,delay:0,maxWidth:200,trigger:"click"},render:o=>{const t=new a(o),e=document.createElement("div");e.style.padding="40px",e.style.backgroundColor="#f9fafb",e.style.position="relative";const n=document.createElement("button");return n.textContent="Clic para mostrar",n.className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",n.setAttribute("data-tooltip-trigger","true"),e.appendChild(n),t.mount(e),e}},f={args:{content:"Tooltip activado por foco",position:"top",variant:"warning",size:"md",showArrow:!0,delay:100,maxWidth:200,trigger:"focus"},render:o=>{const t=new a(o),e=document.createElement("div");e.style.padding="40px",e.style.backgroundColor="#f9fafb",e.style.position="relative";const n=document.createElement("input");return n.type="text",n.placeholder="Haz foco aquí",n.className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500",n.setAttribute("data-tooltip-trigger","true"),e.appendChild(n),t.mount(e),e}},w={args:{content:"Este es un tooltip con un ancho máximo personalizado muy largo para demostrar cómo se comporta cuando el contenido excede el ancho máximo establecido.",position:"top",variant:"light",size:"md",showArrow:!0,delay:200,maxWidth:150,trigger:"hover"},render:o=>{const t=new a(o),e=document.createElement("div");e.style.padding="40px",e.style.backgroundColor="#f9fafb",e.style.position="relative";const n=document.createElement("button");return n.textContent="Ancho personalizado",n.className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",n.setAttribute("data-tooltip-trigger","true"),e.appendChild(n),t.mount(e),e}},C={args:{content:"Información útil para el usuario",position:"top",variant:"info",size:"md",showArrow:!0,delay:200,maxWidth:200,trigger:"hover"},render:o=>{const t=a.info(o.content,o),e=document.createElement("div");e.style.padding="40px",e.style.backgroundColor="#f9fafb",e.style.position="relative";const n=document.createElement("button");return n.textContent="ℹ️ Información",n.className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",n.setAttribute("data-tooltip-trigger","true"),e.appendChild(n),t.mount(e),e}},E={args:{content:"Operación completada exitosamente",position:"top",variant:"success",size:"md",showArrow:!0,delay:200,maxWidth:200,trigger:"hover"},render:o=>{const t=a.success(o.content,o),e=document.createElement("div");e.style.padding="40px",e.style.backgroundColor="#f9fafb",e.style.position="relative";const n=document.createElement("button");return n.textContent="✅ Éxito",n.className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",n.setAttribute("data-tooltip-trigger","true"),e.appendChild(n),t.mount(e),e}},A={args:{content:"Advertencia: Esta acción no se puede deshacer",position:"top",variant:"warning",size:"md",showArrow:!0,delay:200,maxWidth:200,trigger:"hover"},render:o=>{const t=a.warning(o.content,o),e=document.createElement("div");e.style.padding="40px",e.style.backgroundColor="#f9fafb",e.style.position="relative";const n=document.createElement("button");return n.textContent="⚠️ Advertencia",n.className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600",n.setAttribute("data-tooltip-trigger","true"),e.appendChild(n),t.mount(e),e}},z={args:{content:"Error: No se pudo completar la operación",position:"top",variant:"error",size:"md",showArrow:!0,delay:200,maxWidth:200,trigger:"hover"},render:o=>{const t=a.error(o.content,o),e=document.createElement("div");e.style.padding="40px",e.style.backgroundColor="#f9fafb",e.style.position="relative";const n=document.createElement("button");return n.textContent="❌ Error",n.className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",n.setAttribute("data-tooltip-trigger","true"),e.appendChild(n),t.mount(e),e}},k={args:{content:"¿Necesitas ayuda? Este tooltip te proporciona información útil.",position:"top",variant:"info",size:"sm",showArrow:!0,delay:200,maxWidth:200,trigger:"hover"},render:o=>{const t=a.help(o.content,o),e=document.createElement("div");e.style.padding="40px",e.style.backgroundColor="#f9fafb",e.style.position="relative";const n=document.createElement("button");return n.textContent="❓ Ayuda",n.className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",n.setAttribute("data-tooltip-trigger","true"),e.appendChild(n),t.mount(e),e}},S={args:{content:"Tooltip interactivo - puedes cambiar las propiedades",position:"top",variant:"default",size:"md",showArrow:!0,delay:200,maxWidth:200,trigger:"hover"},render:o=>{const t=new a(o),e=document.createElement("div");e.style.padding="40px",e.style.backgroundColor="#f9fafb",e.style.position="relative";const n=document.createElement("div");n.style.marginBottom="20px",n.style.display="flex",n.style.gap="10px",n.style.flexWrap="wrap",n.style.alignItems="center";const c=document.createElement("select");c.className="px-3 py-1 border rounded",["top","right","bottom","left"].forEach(i=>{const s=document.createElement("option");s.value=i,s.textContent=i.charAt(0).toUpperCase()+i.slice(1),s.selected=i===o.position,c.appendChild(s)}),c.onchange=i=>{o.position=i.target.value,t.setPosition(i.target.value)};const r=document.createElement("select");r.className="px-3 py-1 border rounded",["default","dark","light","info","success","warning","error"].forEach(i=>{const s=document.createElement("option");s.value=i,s.textContent=i.charAt(0).toUpperCase()+i.slice(1),s.selected=i===o.variant,r.appendChild(s)}),r.onchange=i=>{o.variant=i.target.value,t.setVariant(i.target.value)};const l=document.createElement("select");l.className="px-3 py-1 border rounded",["sm","md","lg"].forEach(i=>{const s=document.createElement("option");s.value=i,s.textContent=i.toUpperCase(),s.selected=i===o.size,l.appendChild(s)}),l.onchange=i=>{o.size=i.target.value,t.setSize(i.target.value)};const d=document.createElement("input");d.type="text",d.value=o.content,d.className="px-3 py-1 border rounded",d.placeholder="Contenido del tooltip",d.onchange=i=>{o.content=i.target.value,t.setContent(i.target.value)};const p=document.createElement("input");p.type="checkbox",p.checked=o.showArrow,p.onchange=i=>{o.showArrow=i.target.checked,t.setShowArrow(i.target.checked)},n.appendChild(document.createElement("label")).textContent="Posición:",n.appendChild(c),n.appendChild(document.createElement("label")).textContent="Variante:",n.appendChild(r),n.appendChild(document.createElement("label")).textContent="Tamaño:",n.appendChild(l),n.appendChild(document.createElement("label")).textContent="Contenido:",n.appendChild(d),n.appendChild(document.createElement("label")).textContent="Flecha:",n.appendChild(p),e.appendChild(n);const g=document.createElement("button");return g.textContent="Tooltip interactivo",g.className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600",g.setAttribute("data-tooltip-trigger","true"),e.appendChild(g),t.mount(e),e}};var T,N,W;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    content: 'Este es un tooltip básico',
    position: 'top',
    variant: 'default',
    size: 'md',
    showArrow: true,
    delay: 200,
    maxWidth: 200,
    trigger: 'hover'
  },
  render: args => {
    const tooltip = new Tooltip(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.position = 'relative';
    const trigger = document.createElement('button');
    trigger.textContent = 'Hover sobre mí';
    trigger.className = 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600';
    trigger.setAttribute('data-tooltip-trigger', 'true');
    container.appendChild(trigger);
    tooltip.mount(container);
    return container;
  }
}`,...(W=(N=u.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var I,F,V;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip en diferentes posiciones',
    variant: 'default',
    size: 'md',
    showArrow: true,
    delay: 200,
    maxWidth: 200,
    trigger: 'hover'
  },
  render: args => {
    const container = document.createElement('div');
    container.style.padding = '60px';
    container.style.backgroundColor = '#f9fafb';
    container.style.position = 'relative';
    container.style.minHeight = '300px';
    const positions = ['top', 'right', 'bottom', 'left'];
    const buttons = [];
    positions.forEach((position, index) => {
      const button = document.createElement('button');
      button.textContent = \`\${position.charAt(0).toUpperCase() + position.slice(1)}\`;
      button.className = 'px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600';
      button.setAttribute('data-tooltip-trigger', 'true');

      // Posicionar botones en diferentes lugares
      button.style.position = 'absolute';
      if (position === 'top') {
        button.style.top = '20px';
        button.style.left = '50%';
        button.style.transform = 'translateX(-50%)';
      } else if (position === 'right') {
        button.style.top = '50%';
        button.style.right = '20px';
        button.style.transform = 'translateY(-50%)';
      } else if (position === 'bottom') {
        button.style.bottom = '20px';
        button.style.left = '50%';
        button.style.transform = 'translateX(-50%)';
      } else if (position === 'left') {
        button.style.top = '50%';
        button.style.left = '20px';
        button.style.transform = 'translateY(-50%)';
      }
      container.appendChild(button);
      buttons.push(button);

      // Crear tooltip para cada posición
      const tooltip = new Tooltip({
        ...args,
        position
      });
      tooltip.mount(container);
    });
    return container;
  }
}`,...(V=(F=m.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var D,$,U;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    content: 'Diferentes variantes de tooltip',
    position: 'top',
    size: 'md',
    showArrow: true,
    delay: 200,
    maxWidth: 200,
    trigger: 'hover'
  },
  render: args => {
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.position = 'relative';
    const variants = ['default', 'dark', 'light', 'info', 'success', 'warning', 'error'];
    const buttons = [];
    variants.forEach((variant, index) => {
      const button = document.createElement('button');
      button.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
      button.className = 'px-4 py-2 mr-2 mb-2 bg-gray-500 text-white rounded hover:bg-gray-600';
      button.setAttribute('data-tooltip-trigger', 'true');
      container.appendChild(button);
      buttons.push(button);

      // Crear tooltip para cada variante
      const tooltip = new Tooltip({
        ...args,
        variant
      });
      tooltip.mount(container);
    });
    return container;
  }
}`,...(U=($=h.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var H,L,P;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    content: 'Tooltips de diferentes tamaños',
    position: 'top',
    variant: 'default',
    showArrow: true,
    delay: 200,
    maxWidth: 200,
    trigger: 'hover'
  },
  render: args => {
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.position = 'relative';
    const sizes = ['sm', 'md', 'lg'];
    const buttons = [];
    sizes.forEach((size, index) => {
      const button = document.createElement('button');
      button.textContent = size.toUpperCase();
      button.className = 'px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600';
      button.setAttribute('data-tooltip-trigger', 'true');
      container.appendChild(button);
      buttons.push(button);

      // Crear tooltip para cada tamaño
      const tooltip = new Tooltip({
        ...args,
        size
      });
      tooltip.mount(container);
    });
    return container;
  }
}`,...(P=(L=b.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var B,M,q;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip sin flecha',
    position: 'top',
    variant: 'default',
    size: 'md',
    showArrow: false,
    delay: 200,
    maxWidth: 200,
    trigger: 'hover'
  },
  render: args => {
    const tooltip = new Tooltip(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.position = 'relative';
    const trigger = document.createElement('button');
    trigger.textContent = 'Sin flecha';
    trigger.className = 'px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600';
    trigger.setAttribute('data-tooltip-trigger', 'true');
    container.appendChild(trigger);
    tooltip.mount(container);
    return container;
  }
}`,...(q=(M=y.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var X,Y,O;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip con retraso personalizado',
    position: 'top',
    variant: 'info',
    size: 'md',
    showArrow: true,
    delay: 500,
    maxWidth: 200,
    trigger: 'hover'
  },
  render: args => {
    const tooltip = new Tooltip(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.position = 'relative';
    const trigger = document.createElement('button');
    trigger.textContent = 'Retraso 500ms';
    trigger.className = 'px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600';
    trigger.setAttribute('data-tooltip-trigger', 'true');
    container.appendChild(trigger);
    tooltip.mount(container);
    return container;
  }
}`,...(O=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:O.source}}};var R,j,G;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip activado por clic',
    position: 'top',
    variant: 'success',
    size: 'md',
    showArrow: true,
    delay: 0,
    maxWidth: 200,
    trigger: 'click'
  },
  render: args => {
    const tooltip = new Tooltip(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.position = 'relative';
    const trigger = document.createElement('button');
    trigger.textContent = 'Clic para mostrar';
    trigger.className = 'px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600';
    trigger.setAttribute('data-tooltip-trigger', 'true');
    container.appendChild(trigger);
    tooltip.mount(container);
    return container;
  }
}`,...(G=(j=v.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var J,K,Q;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip activado por foco',
    position: 'top',
    variant: 'warning',
    size: 'md',
    showArrow: true,
    delay: 100,
    maxWidth: 200,
    trigger: 'focus'
  },
  render: args => {
    const tooltip = new Tooltip(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.position = 'relative';
    const trigger = document.createElement('input');
    trigger.type = 'text';
    trigger.placeholder = 'Haz foco aquí';
    trigger.className = 'px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500';
    trigger.setAttribute('data-tooltip-trigger', 'true');
    container.appendChild(trigger);
    tooltip.mount(container);
    return container;
  }
}`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Z,_,tt;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    content: 'Este es un tooltip con un ancho máximo personalizado muy largo para demostrar cómo se comporta cuando el contenido excede el ancho máximo establecido.',
    position: 'top',
    variant: 'light',
    size: 'md',
    showArrow: true,
    delay: 200,
    maxWidth: 150,
    trigger: 'hover'
  },
  render: args => {
    const tooltip = new Tooltip(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.position = 'relative';
    const trigger = document.createElement('button');
    trigger.textContent = 'Ancho personalizado';
    trigger.className = 'px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600';
    trigger.setAttribute('data-tooltip-trigger', 'true');
    container.appendChild(trigger);
    tooltip.mount(container);
    return container;
  }
}`,...(tt=(_=w.parameters)==null?void 0:_.docs)==null?void 0:tt.source}}};var et,nt,ot;C.parameters={...C.parameters,docs:{...(et=C.parameters)==null?void 0:et.docs,source:{originalSource:`{
  args: {
    content: 'Información útil para el usuario',
    position: 'top',
    variant: 'info',
    size: 'md',
    showArrow: true,
    delay: 200,
    maxWidth: 200,
    trigger: 'hover'
  },
  render: args => {
    const tooltip = Tooltip.info(args.content, args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.position = 'relative';
    const trigger = document.createElement('button');
    trigger.textContent = 'ℹ️ Información';
    trigger.className = 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600';
    trigger.setAttribute('data-tooltip-trigger', 'true');
    container.appendChild(trigger);
    tooltip.mount(container);
    return container;
  }
}`,...(ot=(nt=C.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var rt,it,at;E.parameters={...E.parameters,docs:{...(rt=E.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  args: {
    content: 'Operación completada exitosamente',
    position: 'top',
    variant: 'success',
    size: 'md',
    showArrow: true,
    delay: 200,
    maxWidth: 200,
    trigger: 'hover'
  },
  render: args => {
    const tooltip = Tooltip.success(args.content, args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.position = 'relative';
    const trigger = document.createElement('button');
    trigger.textContent = '✅ Éxito';
    trigger.className = 'px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600';
    trigger.setAttribute('data-tooltip-trigger', 'true');
    container.appendChild(trigger);
    tooltip.mount(container);
    return container;
  }
}`,...(at=(it=E.parameters)==null?void 0:it.docs)==null?void 0:at.source}}};var st,ct,lt;A.parameters={...A.parameters,docs:{...(st=A.parameters)==null?void 0:st.docs,source:{originalSource:`{
  args: {
    content: 'Advertencia: Esta acción no se puede deshacer',
    position: 'top',
    variant: 'warning',
    size: 'md',
    showArrow: true,
    delay: 200,
    maxWidth: 200,
    trigger: 'hover'
  },
  render: args => {
    const tooltip = Tooltip.warning(args.content, args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.position = 'relative';
    const trigger = document.createElement('button');
    trigger.textContent = '⚠️ Advertencia';
    trigger.className = 'px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600';
    trigger.setAttribute('data-tooltip-trigger', 'true');
    container.appendChild(trigger);
    tooltip.mount(container);
    return container;
  }
}`,...(lt=(ct=A.parameters)==null?void 0:ct.docs)==null?void 0:lt.source}}};var dt,pt,gt;z.parameters={...z.parameters,docs:{...(dt=z.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  args: {
    content: 'Error: No se pudo completar la operación',
    position: 'top',
    variant: 'error',
    size: 'md',
    showArrow: true,
    delay: 200,
    maxWidth: 200,
    trigger: 'hover'
  },
  render: args => {
    const tooltip = Tooltip.error(args.content, args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.position = 'relative';
    const trigger = document.createElement('button');
    trigger.textContent = '❌ Error';
    trigger.className = 'px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600';
    trigger.setAttribute('data-tooltip-trigger', 'true');
    container.appendChild(trigger);
    tooltip.mount(container);
    return container;
  }
}`,...(gt=(pt=z.parameters)==null?void 0:pt.docs)==null?void 0:gt.source}}};var ut,mt,ht;k.parameters={...k.parameters,docs:{...(ut=k.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  args: {
    content: '¿Necesitas ayuda? Este tooltip te proporciona información útil.',
    position: 'top',
    variant: 'info',
    size: 'sm',
    showArrow: true,
    delay: 200,
    maxWidth: 200,
    trigger: 'hover'
  },
  render: args => {
    const tooltip = Tooltip.help(args.content, args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.position = 'relative';
    const trigger = document.createElement('button');
    trigger.textContent = '❓ Ayuda';
    trigger.className = 'px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600';
    trigger.setAttribute('data-tooltip-trigger', 'true');
    container.appendChild(trigger);
    tooltip.mount(container);
    return container;
  }
}`,...(ht=(mt=k.parameters)==null?void 0:mt.docs)==null?void 0:ht.source}}};var bt,yt,xt;S.parameters={...S.parameters,docs:{...(bt=S.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip interactivo - puedes cambiar las propiedades',
    position: 'top',
    variant: 'default',
    size: 'md',
    showArrow: true,
    delay: 200,
    maxWidth: 200,
    trigger: 'hover'
  },
  render: args => {
    const tooltip = new Tooltip(args);
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.backgroundColor = '#f9fafb';
    container.style.position = 'relative';

    // Controles interactivos
    const controls = document.createElement('div');
    controls.style.marginBottom = '20px';
    controls.style.display = 'flex';
    controls.style.gap = '10px';
    controls.style.flexWrap = 'wrap';
    controls.style.alignItems = 'center';
    const positionSelect = document.createElement('select');
    positionSelect.className = 'px-3 py-1 border rounded';
    ['top', 'right', 'bottom', 'left'].forEach(pos => {
      const option = document.createElement('option');
      option.value = pos;
      option.textContent = pos.charAt(0).toUpperCase() + pos.slice(1);
      option.selected = pos === args.position;
      positionSelect.appendChild(option);
    });
    positionSelect.onchange = e => {
      args.position = e.target.value;
      tooltip.setPosition(e.target.value);
    };
    const variantSelect = document.createElement('select');
    variantSelect.className = 'px-3 py-1 border rounded';
    ['default', 'dark', 'light', 'info', 'success', 'warning', 'error'].forEach(variant => {
      const option = document.createElement('option');
      option.value = variant;
      option.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
      option.selected = variant === args.variant;
      variantSelect.appendChild(option);
    });
    variantSelect.onchange = e => {
      args.variant = e.target.value;
      tooltip.setVariant(e.target.value);
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
      tooltip.setSize(e.target.value);
    };
    const contentInput = document.createElement('input');
    contentInput.type = 'text';
    contentInput.value = args.content;
    contentInput.className = 'px-3 py-1 border rounded';
    contentInput.placeholder = 'Contenido del tooltip';
    contentInput.onchange = e => {
      args.content = e.target.value;
      tooltip.setContent(e.target.value);
    };
    const arrowToggle = document.createElement('input');
    arrowToggle.type = 'checkbox';
    arrowToggle.checked = args.showArrow;
    arrowToggle.onchange = e => {
      args.showArrow = e.target.checked;
      tooltip.setShowArrow(e.target.checked);
    };
    controls.appendChild(document.createElement('label')).textContent = 'Posición:';
    controls.appendChild(positionSelect);
    controls.appendChild(document.createElement('label')).textContent = 'Variante:';
    controls.appendChild(variantSelect);
    controls.appendChild(document.createElement('label')).textContent = 'Tamaño:';
    controls.appendChild(sizeSelect);
    controls.appendChild(document.createElement('label')).textContent = 'Contenido:';
    controls.appendChild(contentInput);
    controls.appendChild(document.createElement('label')).textContent = 'Flecha:';
    controls.appendChild(arrowToggle);
    container.appendChild(controls);

    // Botón trigger
    const trigger = document.createElement('button');
    trigger.textContent = 'Tooltip interactivo';
    trigger.className = 'px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600';
    trigger.setAttribute('data-tooltip-trigger', 'true');
    container.appendChild(trigger);
    tooltip.mount(container);
    return container;
  }
}`,...(xt=(yt=S.parameters)==null?void 0:yt.docs)==null?void 0:xt.source}}};const ft=["Basic","Positions","Variants","Sizes","NoArrow","CustomDelay","ClickTrigger","FocusTrigger","CustomMaxWidth","Info","Success","Warning","Error","Help","Interactive"];export{u as Basic,v as ClickTrigger,x as CustomDelay,w as CustomMaxWidth,z as Error,f as FocusTrigger,k as Help,C as Info,S as Interactive,y as NoArrow,m as Positions,b as Sizes,E as Success,h as Variants,A as Warning,ft as __namedExportsOrder,vt as default};
