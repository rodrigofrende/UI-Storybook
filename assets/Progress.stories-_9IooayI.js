class r{constructor(e={}){this.options={value:0,max:100,size:"md",variant:"default",color:"blue",showValue:!0,showLabel:!1,label:"",thickness:"md",...e},this.currentValue=this.options.value,this.id=this.generateId()}generateId(){return"progress-"+Math.random().toString(36).substr(2,9)}render(){return this.options.variant==="circular"?this.renderCircular():this.renderLinear()}renderLinear(){this.getSizeClasses();const e=this.getColorClasses(),t=this.getThicknessClasses(),n=this.currentValue/this.options.max*100;return`
      <div class="w-full" id="${this.id}">
        ${this.options.showLabel&&this.options.label?`
          <div class="flex justify-between items-center mb-2">
            <span class="text-sm font-medium text-gray-700">${this.options.label}</span>
            ${this.options.showValue?`
              <span class="text-sm text-gray-500">${this.currentValue}%</span>
            `:""}
          </div>
        `:""}
        
        <div class="w-full bg-gray-200 rounded-full ${t} overflow-hidden">
          <div 
            class="h-full ${e} transition-all duration-500 ease-out ${this.getStripedClasses()}"
            style="width: ${n}%"
          ></div>
        </div>
        
        ${!this.options.showLabel&&this.options.showValue?`
          <div class="text-right mt-1">
            <span class="text-xs text-gray-500">${n.toFixed(1)}%</span>
          </div>
        `:""}
      </div>
    `}renderCircular(){const e=this.options.size==="lg"?120:this.options.size==="sm"?80:100,t=this.options.thickness==="thin"?4:this.options.thickness==="thick"?8:6,n=(e-t)/2,i=n*2*Math.PI,a=this.currentValue/this.options.max*100,o=i,c=i-a/100*i,w=this.getColorClasses();return`
      <div class="inline-flex flex-col items-center" id="${this.id}">
        <div class="relative" style="width: ${e}px; height: ${e}px;">
          <svg class="w-full h-full transform -rotate-90" viewBox="0 0 ${e} ${e}">
            <!-- Background circle -->
            <circle
              cx="${e/2}"
              cy="${e/2}"
              r="${n}"
              stroke="currentColor"
              stroke-width="${t}"
              fill="transparent"
              class="text-gray-200"
            />
            
            <!-- Progress circle -->
            <circle
              cx="${e/2}"
              cy="${e/2}"
              r="${n}"
              stroke="currentColor"
              stroke-width="${t}"
              fill="transparent"
              stroke-linecap="round"
              class="${w.replace("bg-","text-")}"
              style="
                stroke-dasharray: ${o};
                stroke-dashoffset: ${c};
                transition: stroke-dashoffset 0.5s ease-in-out;
              "
            />
          </svg>
          
          <!-- Center content -->
          <div class="absolute inset-0 flex items-center justify-center">
            ${this.options.showValue?`
              <div class="text-center">
                <div class="text-2xl font-bold text-gray-900">${a.toFixed(0)}%</div>
                ${this.options.label?`
                  <div class="text-sm text-gray-500">${this.options.label}</div>
                `:""}
              </div>
            `:this.options.label?`
              <div class="text-center">
                <div class="text-lg font-medium text-gray-900">${this.options.label}</div>
              </div>
            `:""}
          </div>
        </div>
      </div>
    `}getSizeClasses(){const e={sm:"text-sm",md:"text-base",lg:"text-lg"};return e[this.options.size]||e.md}getThicknessClasses(){const e={thin:"h-1",md:"h-2",thick:"h-3"};return e[this.options.thickness]||e.md}getColorClasses(){const e={blue:"bg-blue-500",green:"bg-green-500",red:"bg-red-500",yellow:"bg-yellow-500",purple:"bg-purple-500",pink:"bg-pink-500",indigo:"bg-indigo-500",gray:"bg-gray-500"};return e[this.options.color]||e.blue}getStripedClasses(){return this.options.variant==="striped"?"bg-stripes bg-stripes-white bg-stripes-opacity-15":this.options.variant==="animated"?"bg-stripes bg-stripes-white bg-stripes-opacity-15 animate-pulse":""}setValue(e){this.currentValue=Math.max(0,Math.min(this.options.max,e)),this.updateDisplay(),this.triggerEvent("change",{value:this.currentValue,percentage:this.currentValue/this.options.max*100})}getValue(){return this.currentValue}setMax(e){this.options.max=e,this.currentValue>e&&(this.currentValue=e),this.updateDisplay()}setSize(e){this.options.size=e,this.updateDisplay()}setVariant(e){this.options.variant=e,this.updateDisplay()}setColor(e){this.options.color=e,this.updateDisplay()}setThickness(e){this.options.thickness=e,this.updateDisplay()}setShowValue(e){this.options.showValue=e,this.updateDisplay()}setShowLabel(e){this.options.showLabel=e,this.updateDisplay()}setLabel(e){this.options.label=e,this.updateDisplay()}increment(e=1){this.setValue(this.currentValue+e)}decrement(e=1){this.setValue(this.currentValue-e)}animateTo(e,t=1e3,n="easeOutCubic"){const i=this.currentValue,a=performance.now(),o=c=>{const w=c-a,l=Math.min(w/t,1);let d;switch(n){case"easeOutCubic":d=1-Math.pow(1-l,3);break;case"easeInOutCubic":d=l<.5?4*l*l*l:1-Math.pow(-2*l+2,3)/2;break;default:d=l}const Q=i+(e-i)*d;this.setValue(Q),l<1&&requestAnimationFrame(o)};requestAnimationFrame(o)}updateDisplay(){const e=document.getElementById(this.id);e&&(e.outerHTML=this.render())}triggerEvent(e,t={}){const n=new CustomEvent(`progress:${e}`,{detail:{progress:this,...t},bubbles:!0});document.dispatchEvent(n)}mount(e){typeof e=="string"&&(e=document.querySelector(e)),e&&(e.innerHTML=this.render())}static linear(e={}){return new r({variant:"default",...e})}static striped(e={}){return new r({variant:"striped",...e})}static animated(e={}){return new r({variant:"animated",...e})}static circular(e={}){return new r({variant:"circular",...e})}static indeterminate(e={}){const t=new r({...e,value:0});return t.startIndeterminate(),t}startIndeterminate(){if(this.options.variant!=="circular"){this.setValue(0),this.animateTo(100,2e3,"easeInOutCubic");const e=setInterval(()=>{this.setValue(0),this.animateTo(100,2e3,"easeInOutCubic")},2e3);this.indeterminateInterval=e}}stopIndeterminate(){this.indeterminateInterval&&(clearInterval(this.indeterminateInterval),this.indeterminateInterval=null)}}const R={title:"Components/DataDisplay/Progress",component:r,parameters:{docs:{description:{component:"Un componente de barra de progreso versátil con variantes lineales y circulares, múltiples colores y estados animados."}}},argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Valor actual del progreso (0-100)"},max:{control:{type:"number",min:1,max:1e3},description:"Valor máximo del progreso"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Tamaño del componente"},variant:{control:{type:"select"},options:["default","striped","animated","circular"],description:"Variante visual del progreso"},color:{control:{type:"select"},options:["blue","green","red","yellow","purple","pink","indigo","gray"],description:"Color del progreso"},showValue:{control:"boolean",description:"Mostrar el valor numérico"},showLabel:{control:"boolean",description:"Mostrar etiqueta personalizada"},label:{control:"text",description:"Texto de la etiqueta"},thickness:{control:{type:"select"},options:["thin","md","thick"],description:"Grosor de la barra de progreso"}}},u={args:{value:75,max:100,size:"md",variant:"default",color:"blue",showValue:!0,showLabel:!1,thickness:"md"},render:s=>{const e=new r(s),t=document.createElement("div");return t.style.padding="20px",t.style.maxWidth="400px",e.mount(t),t}},p={args:{value:60,max:100,size:"md",variant:"default",color:"green",showValue:!0,showLabel:!0,label:"Completado",thickness:"md"},render:s=>{const e=new r(s),t=document.createElement("div");return t.style.padding="20px",t.style.maxWidth="400px",e.mount(t),t}},m={args:{value:45,max:100,size:"md",variant:"striped",color:"purple",showValue:!0,showLabel:!1,thickness:"thick"},render:s=>{const e=new r(s),t=document.createElement("div");return t.style.padding="20px",t.style.maxWidth="400px",e.mount(t),t}},h={args:{value:80,max:100,size:"md",variant:"animated",color:"indigo",showValue:!0,showLabel:!1,thickness:"md"},render:s=>{const e=new r(s),t=document.createElement("div");return t.style.padding="20px",t.style.maxWidth="400px",e.mount(t),t}},g={args:{value:65,max:100,size:"lg",variant:"circular",color:"red",showValue:!0,showLabel:!0,label:"Progreso",thickness:"md"},render:s=>{const e=new r(s),t=document.createElement("div");return t.style.padding="20px",t.style.textAlign="center",e.mount(t),t}},x={args:{value:30,max:100,size:"sm",variant:"default",color:"yellow",showValue:!0,showLabel:!1,thickness:"thin"},render:s=>{const e=new r(s),t=document.createElement("div");return t.style.padding="20px",t.style.maxWidth="400px",e.mount(t),t}},v={args:{value:90,max:100,size:"lg",variant:"default",color:"pink",showValue:!0,showLabel:!0,label:"Casi completo",thickness:"thick"},render:s=>{const e=new r(s),t=document.createElement("div");return t.style.padding="20px",t.style.maxWidth="400px",e.mount(t),t}},b={render:()=>{const s=document.createElement("div");s.style.padding="20px";const e=["blue","green","red","yellow","purple","pink","indigo","gray"],t=[25,40,55,70,85,95,60,35];return e.forEach((n,i)=>{const a=document.createElement("div");a.style.marginBottom="20px";const o=document.createElement("div");o.textContent=n.charAt(0).toUpperCase()+n.slice(1),o.style.marginBottom="8px",o.style.fontWeight="bold",a.appendChild(o),new r({value:t[i],max:100,size:"md",variant:"default",color:n,showValue:!0,showLabel:!1,thickness:"md"}).mount(a),s.appendChild(a)}),s}},y={args:{value:50,max:100,size:"md",variant:"default",color:"blue",showValue:!0,showLabel:!0,label:"Progreso Interactivo",thickness:"md"},render:s=>{const e=new r(s),t=document.createElement("div");t.style.padding="20px",t.style.maxWidth="400px";const n=document.createElement("div");n.style.marginBottom="20px",n.style.display="flex",n.style.gap="10px",n.style.flexWrap="wrap";const i=document.createElement("button");i.textContent="+10",i.className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600",i.onclick=()=>e.increment(10);const a=document.createElement("button");a.textContent="-10",a.className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600",a.onclick=()=>e.decrement(10);const o=document.createElement("button");return o.textContent="Animar a 100%",o.className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600",o.onclick=()=>e.animateTo(100,2e3),n.appendChild(i),n.appendChild(a),n.appendChild(o),t.appendChild(n),e.mount(t),t}};var f,C,k;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    value: 75,
    max: 100,
    size: 'md',
    variant: 'default',
    color: 'blue',
    showValue: true,
    showLabel: false,
    thickness: 'md'
  },
  render: args => {
    const progress = new Progress(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    progress.mount(container);
    return container;
  }
}`,...(k=(C=u.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var V,E,L;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    value: 60,
    max: 100,
    size: 'md',
    variant: 'default',
    color: 'green',
    showValue: true,
    showLabel: true,
    label: 'Completado',
    thickness: 'md'
  },
  render: args => {
    const progress = new Progress(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    progress.mount(container);
    return container;
  }
}`,...(L=(E=p.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var $,z,B;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    value: 45,
    max: 100,
    size: 'md',
    variant: 'striped',
    color: 'purple',
    showValue: true,
    showLabel: false,
    thickness: 'thick'
  },
  render: args => {
    const progress = new Progress(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    progress.mount(container);
    return container;
  }
}`,...(B=(z=m.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var S,W,I;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: 80,
    max: 100,
    size: 'md',
    variant: 'animated',
    color: 'indigo',
    showValue: true,
    showLabel: false,
    thickness: 'md'
  },
  render: args => {
    const progress = new Progress(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    progress.mount(container);
    return container;
  }
}`,...(I=(W=h.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var D,P,T;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    value: 65,
    max: 100,
    size: 'lg',
    variant: 'circular',
    color: 'red',
    showValue: true,
    showLabel: true,
    label: 'Progreso',
    thickness: 'md'
  },
  render: args => {
    const progress = new Progress(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.textAlign = 'center';
    progress.mount(container);
    return container;
  }
}`,...(T=(P=g.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var M,A,N;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    value: 30,
    max: 100,
    size: 'sm',
    variant: 'default',
    color: 'yellow',
    showValue: true,
    showLabel: false,
    thickness: 'thin'
  },
  render: args => {
    const progress = new Progress(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    progress.mount(container);
    return container;
  }
}`,...(N=(A=x.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var O,q,F;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    value: 90,
    max: 100,
    size: 'lg',
    variant: 'default',
    color: 'pink',
    showValue: true,
    showLabel: true,
    label: 'Casi completo',
    thickness: 'thick'
  },
  render: args => {
    const progress = new Progress(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    progress.mount(container);
    return container;
  }
}`,...(F=(q=v.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var U,j,H;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    const colors = ['blue', 'green', 'red', 'yellow', 'purple', 'pink', 'indigo', 'gray'];
    const values = [25, 40, 55, 70, 85, 95, 60, 35];
    colors.forEach((color, index) => {
      const progressContainer = document.createElement('div');
      progressContainer.style.marginBottom = '20px';
      const label = document.createElement('div');
      label.textContent = color.charAt(0).toUpperCase() + color.slice(1);
      label.style.marginBottom = '8px';
      label.style.fontWeight = 'bold';
      progressContainer.appendChild(label);
      const progress = new Progress({
        value: values[index],
        max: 100,
        size: 'md',
        variant: 'default',
        color: color,
        showValue: true,
        showLabel: false,
        thickness: 'md'
      });
      progress.mount(progressContainer);
      container.appendChild(progressContainer);
    });
    return container;
  }
}`,...(H=(j=b.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var G,J,K;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    value: 50,
    max: 100,
    size: 'md',
    variant: 'default',
    color: 'blue',
    showValue: true,
    showLabel: true,
    label: 'Progreso Interactivo',
    thickness: 'md'
  },
  render: args => {
    const progress = new Progress(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';

    // Controles interactivos
    const controls = document.createElement('div');
    controls.style.marginBottom = '20px';
    controls.style.display = 'flex';
    controls.style.gap = '10px';
    controls.style.flexWrap = 'wrap';
    const incrementBtn = document.createElement('button');
    incrementBtn.textContent = '+10';
    incrementBtn.className = 'px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600';
    incrementBtn.onclick = () => progress.increment(10);
    const decrementBtn = document.createElement('button');
    decrementBtn.textContent = '-10';
    decrementBtn.className = 'px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600';
    decrementBtn.onclick = () => progress.decrement(10);
    const animateBtn = document.createElement('button');
    animateBtn.textContent = 'Animar a 100%';
    animateBtn.className = 'px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600';
    animateBtn.onclick = () => progress.animateTo(100, 2000);
    controls.appendChild(incrementBtn);
    controls.appendChild(decrementBtn);
    controls.appendChild(animateBtn);
    container.appendChild(controls);
    progress.mount(container);
    return container;
  }
}`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const X=["Linear","WithLabel","Striped","Animated","Circular","Small","Large","ColorVariants","Interactive"];export{h as Animated,g as Circular,b as ColorVariants,y as Interactive,v as Large,u as Linear,x as Small,m as Striped,p as WithLabel,X as __namedExportsOrder,R as default};
