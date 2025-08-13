class o{constructor(n={}){this.options={min:0,max:100,value:50,step:1,disabled:!1,showValue:!0,size:"md",color:"blue",...n},this.currentValue=this.options.value,this.isDragging=!1}render(){const n={sm:"h-1",md:"h-2",lg:"h-3"},e={sm:"w-3 h-3",md:"w-4 h-4",lg:"w-5 h-5"},r={blue:"bg-blue-500",green:"bg-green-500",red:"bg-red-500",purple:"bg-purple-500",orange:"bg-orange-500"},i=(this.currentValue-this.options.min)/(this.options.max-this.options.min)*100;return`
      <div class="w-full max-w-xs">
        <div class="relative">
          <div class="flex items-center space-x-3">
            <div class="flex-1 relative">
              <div class="w-full ${n[this.options.size]} bg-gray-200 rounded-full overflow-hidden">
                <div 
                  class="h-full ${r[this.options.color]} transition-all duration-200 ease-out"
                  style="width: ${i}%"
                ></div>
              </div>
              
              <input
                type="range"
                min="${this.options.min}"
                max="${this.options.max}"
                value="${this.currentValue}"
                step="${this.options.step}"
                class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                ${this.options.disabled?"disabled":""}
                oninput="this.updateValue(this.value)"
                onchange="this.onChange(this.value)"
              />
              
              <div 
                class="absolute top-1/2 transform -translate-y-1/2 ${e[this.options.size]} ${r[this.options.color]} rounded-full shadow-lg border-2 border-white transition-all duration-200 ease-out"
                style="left: ${i}%"
              ></div>
            </div>
            
            ${this.options.showValue?`
              <div class="w-12 text-right">
                <span class="text-sm font-medium text-gray-700">${this.currentValue}</span>
              </div>
            `:""}
          </div>
          
          ${this.options.showValue?`
            <div class="flex justify-between text-xs text-gray-500 mt-1">
              <span>${this.options.min}</span>
              <span>${this.options.max}</span>
            </div>
          `:""}
        </div>
      </div>
    `}updateValue(n){this.currentValue=parseFloat(n),this.triggerEvent("input",{value:this.currentValue})}onChange(n){this.currentValue=parseFloat(n),this.triggerEvent("change",{value:this.currentValue})}setValue(n){this.currentValue=Math.max(this.options.min,Math.min(this.options.max,n)),this.triggerEvent("change",{value:this.currentValue})}getValue(){return this.currentValue}enable(){this.options.disabled=!1}disable(){this.options.disabled=!0}setRange(n,e){this.options.min=n,this.options.max=e,this.currentValue<n&&(this.currentValue=n),this.currentValue>e&&(this.currentValue=e)}setStep(n){this.options.step=n}setColor(n){this.options.color=n}setSize(n){this.options.size=n}triggerEvent(n,e){const r=new CustomEvent(`slider:${n}`,{detail:e,bubbles:!0});document.dispatchEvent(r)}mount(n){typeof n=="string"&&(n=document.querySelector(n)),n&&(n.innerHTML=this.render(),this.attachEventListeners(n))}attachEventListeners(n){const e=n.querySelector('input[type="range"]');e&&(e.addEventListener("input",r=>this.updateValue(r.target.value)),e.addEventListener("change",r=>this.onChange(r.target.value)))}}const Ee={title:"Components/Slider",component:o,parameters:{docs:{description:{component:"Un componente de control deslizante versátil con múltiples tamaños, colores y rangos personalizables."}}},argTypes:{min:{control:{type:"number",min:-100,max:0},description:"Valor mínimo del slider"},max:{control:{type:"number",min:1,max:200},description:"Valor máximo del slider"},value:{control:{type:"range",min:0,max:100,step:1},description:"Valor actual del slider"},step:{control:{type:"number",min:.1,max:10,step:.1},description:"Incremento del slider"},disabled:{control:"boolean",description:"Si el slider está deshabilitado"},showValue:{control:"boolean",description:"Si mostrar el valor numérico"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Tamaño del slider"},color:{control:{type:"select"},options:["blue","green","red","purple","orange"],description:"Color del slider"}}},u={args:{min:0,max:100,value:50,step:1,disabled:!1,showValue:!0,size:"md",color:"blue"},render:t=>{const n=new o(t),e=document.createElement("div");return e.style.padding="20px",n.mount(e),e}},p={args:{min:0,max:100,value:80,step:1,disabled:!1,showValue:!0,size:"md",color:"blue"},render:t=>{const n=new o(t),e=document.createElement("div");return e.style.padding="20px",n.mount(e),e}},m={args:{min:0,max:100,value:20,step:1,disabled:!1,showValue:!0,size:"md",color:"blue"},render:t=>{const n=new o(t),e=document.createElement("div");return e.style.padding="20px",n.mount(e),e}},g={args:{min:0,max:100,value:60,step:1,disabled:!1,showValue:!0,size:"sm",color:"green"},render:t=>{const n=new o(t),e=document.createElement("div");return e.style.padding="20px",n.mount(e),e}},h={args:{min:0,max:100,value:40,step:1,disabled:!1,showValue:!0,size:"lg",color:"purple"},render:t=>{const n=new o(t),e=document.createElement("div");return e.style.padding="20px",n.mount(e),e}},x={args:{min:0,max:100,value:50,step:1,disabled:!0,showValue:!0,size:"md",color:"blue"},render:t=>{const n=new o(t),e=document.createElement("div");return e.style.padding="20px",n.mount(e),e}},v={args:{min:0,max:100,value:70,step:1,disabled:!1,showValue:!1,size:"md",color:"red"},render:t=>{const n=new o(t),e=document.createElement("div");return e.style.padding="20px",n.mount(e),e}},b={args:{min:0,max:100,value:25,step:5,disabled:!1,showValue:!0,size:"md",color:"orange"},render:t=>{const n=new o(t),e=document.createElement("div");return e.style.padding="20px",n.mount(e),e}},w={args:{min:-50,max:50,value:0,step:1,disabled:!1,showValue:!0,size:"md",color:"blue"},render:t=>{const n=new o(t),e=document.createElement("div");return e.style.padding="20px",n.mount(e),e}},y={args:{min:0,max:100,value:65,step:1,disabled:!1,showValue:!0,size:"md",color:"green"},render:t=>{const n=new o(t),e=document.createElement("div");return e.style.padding="20px",n.mount(e),e}},E={args:{min:0,max:100,value:35,step:1,disabled:!1,showValue:!0,size:"md",color:"red"},render:t=>{const n=new o(t),e=document.createElement("div");return e.style.padding="20px",n.mount(e),e}},f={args:{min:0,max:100,value:85,step:1,disabled:!1,showValue:!0,size:"md",color:"purple"},render:t=>{const n=new o(t),e=document.createElement("div");return e.style.padding="20px",n.mount(e),e}},C={args:{min:0,max:100,value:15,step:1,disabled:!1,showValue:!0,size:"md",color:"orange"},render:t=>{const n=new o(t),e=document.createElement("div");return e.style.padding="20px",n.mount(e),e}},S={render:()=>{const t=document.createElement("div");t.style.padding="20px";const n=["sm","md","lg"],e=["Pequeño","Mediano","Grande"];return n.forEach((r,i)=>{const a=document.createElement("div");a.style.marginBottom="20px";const l=document.createElement("div");l.textContent=e[i],l.style.marginBottom="10px",l.style.fontWeight="bold",a.appendChild(l),new o({min:0,max:100,value:30+i*20,step:1,disabled:!1,showValue:!0,size:r,color:"blue"}).mount(a),t.appendChild(a)}),t}},V={render:()=>{const t=document.createElement("div");t.style.padding="20px";const n=["blue","green","red","purple","orange"],e=["Azul","Verde","Rojo","Púrpura","Naranja"];return n.forEach((r,i)=>{const a=document.createElement("div");a.style.marginBottom="20px";const l=document.createElement("div");l.textContent=e[i],l.style.marginBottom="10px",l.style.fontWeight="bold",a.appendChild(l),new o({min:0,max:100,value:20+i*15,step:1,disabled:!1,showValue:!0,size:"md",color:r}).mount(a),t.appendChild(a)}),t}},z={args:{min:0,max:100,value:50,step:1,disabled:!1,showValue:!0,size:"md",color:"blue"},render:t=>{const n=new o(t),e=document.createElement("div");e.style.padding="20px";const r=document.createElement("div");r.style.marginBottom="20px",r.style.display="flex",r.style.gap="10px",r.style.flexWrap="wrap";const i=document.createElement("select");i.className="px-3 py-1 border rounded",["blue","green","red","purple","orange"].forEach(s=>{const d=document.createElement("option");d.value=s,d.textContent=s.charAt(0).toUpperCase()+s.slice(1),i.appendChild(d)}),i.onchange=s=>n.setColor(s.target.value);const a=document.createElement("select");a.className="px-3 py-1 border rounded",["sm","md","lg"].forEach(s=>{const d=document.createElement("option");d.value=s,d.textContent=s.toUpperCase(),d.selected=s==="md",a.appendChild(d)}),a.onchange=s=>n.setSize(s.target.value);const l=document.createElement("select");l.className="px-3 py-1 border rounded",[.1,.5,1,2,5,10].forEach(s=>{const d=document.createElement("option");d.value=s,d.textContent=s,d.selected=s===1,l.appendChild(d)}),l.onchange=s=>n.setStep(parseFloat(s.target.value));const c=document.createElement("button");return c.textContent="Toggle Disabled",c.className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600",c.onclick=()=>{n.options.disabled?(n.enable(),c.textContent="Disable",c.className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"):(n.disable(),c.textContent="Enable",c.className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600")},r.appendChild(i),r.appendChild(a),r.appendChild(l),r.appendChild(c),e.appendChild(r),n.mount(e),e}};var B,N,$;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    value: 50,
    step: 1,
    disabled: false,
    showValue: true,
    size: 'md',
    color: 'blue'
  },
  render: args => {
    const slider = new Slider(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    slider.mount(container);
    return container;
  }
}`,...($=(N=u.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var L,G,D;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    value: 80,
    step: 1,
    disabled: false,
    showValue: true,
    size: 'md',
    color: 'blue'
  },
  render: args => {
    const slider = new Slider(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    slider.mount(container);
    return container;
  }
}`,...(D=(G=p.parameters)==null?void 0:G.docs)==null?void 0:D.source}}};var R,F,P;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    value: 20,
    step: 1,
    disabled: false,
    showValue: true,
    size: 'md',
    color: 'blue'
  },
  render: args => {
    const slider = new Slider(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    slider.mount(container);
    return container;
  }
}`,...(P=(F=m.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var W,j,A;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    value: 60,
    step: 1,
    disabled: false,
    showValue: true,
    size: 'sm',
    color: 'green'
  },
  render: args => {
    const slider = new Slider(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    slider.mount(container);
    return container;
  }
}`,...(A=(j=g.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var M,T,U;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    value: 40,
    step: 1,
    disabled: false,
    showValue: true,
    size: 'lg',
    color: 'purple'
  },
  render: args => {
    const slider = new Slider(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    slider.mount(container);
    return container;
  }
}`,...(U=(T=h.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};var q,I,H;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    value: 50,
    step: 1,
    disabled: true,
    showValue: true,
    size: 'md',
    color: 'blue'
  },
  render: args => {
    const slider = new Slider(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    slider.mount(container);
    return container;
  }
}`,...(H=(I=x.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var O,_,k;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    value: 70,
    step: 1,
    disabled: false,
    showValue: false,
    size: 'md',
    color: 'red'
  },
  render: args => {
    const slider = new Slider(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    slider.mount(container);
    return container;
  }
}`,...(k=(_=v.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    value: 25,
    step: 5,
    disabled: false,
    showValue: true,
    size: 'md',
    color: 'orange'
  },
  render: args => {
    const slider = new Slider(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    slider.mount(container);
    return container;
  }
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    min: -50,
    max: 50,
    value: 0,
    step: 1,
    disabled: false,
    showValue: true,
    size: 'md',
    color: 'blue'
  },
  render: args => {
    const slider = new Slider(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    slider.mount(container);
    return container;
  }
}`,...(Z=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,te;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    value: 65,
    step: 1,
    disabled: false,
    showValue: true,
    size: 'md',
    color: 'green'
  },
  render: args => {
    const slider = new Slider(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    slider.mount(container);
    return container;
  }
}`,...(te=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var re,se,oe;E.parameters={...E.parameters,docs:{...(re=E.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    value: 35,
    step: 1,
    disabled: false,
    showValue: true,
    size: 'md',
    color: 'red'
  },
  render: args => {
    const slider = new Slider(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    slider.mount(container);
    return container;
  }
}`,...(oe=(se=E.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ae,le,ie;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    value: 85,
    step: 1,
    disabled: false,
    showValue: true,
    size: 'md',
    color: 'purple'
  },
  render: args => {
    const slider = new Slider(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    slider.mount(container);
    return container;
  }
}`,...(ie=(le=f.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var de,ce,ue;C.parameters={...C.parameters,docs:{...(de=C.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    value: 15,
    step: 1,
    disabled: false,
    showValue: true,
    size: 'md',
    color: 'orange'
  },
  render: args => {
    const slider = new Slider(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    slider.mount(container);
    return container;
  }
}`,...(ue=(ce=C.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var pe,me,ge;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    const sizes = ['sm', 'md', 'lg'];
    const sizeNames = ['Pequeño', 'Mediano', 'Grande'];
    sizes.forEach((size, index) => {
      const sliderContainer = document.createElement('div');
      sliderContainer.style.marginBottom = '20px';
      const title = document.createElement('div');
      title.textContent = sizeNames[index];
      title.style.marginBottom = '10px';
      title.style.fontWeight = 'bold';
      sliderContainer.appendChild(title);
      const slider = new Slider({
        min: 0,
        max: 100,
        value: 30 + index * 20,
        step: 1,
        disabled: false,
        showValue: true,
        size: size,
        color: 'blue'
      });
      slider.mount(sliderContainer);
      container.appendChild(sliderContainer);
    });
    return container;
  }
}`,...(ge=(me=S.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var he,xe,ve;V.parameters={...V.parameters,docs:{...(he=V.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    const colors = ['blue', 'green', 'red', 'purple', 'orange'];
    const colorNames = ['Azul', 'Verde', 'Rojo', 'Púrpura', 'Naranja'];
    colors.forEach((color, index) => {
      const sliderContainer = document.createElement('div');
      sliderContainer.style.marginBottom = '20px';
      const title = document.createElement('div');
      title.textContent = colorNames[index];
      title.style.marginBottom = '10px';
      title.style.fontWeight = 'bold';
      sliderContainer.appendChild(title);
      const slider = new Slider({
        min: 0,
        max: 100,
        value: 20 + index * 15,
        step: 1,
        disabled: false,
        showValue: true,
        size: 'md',
        color: color
      });
      slider.mount(sliderContainer);
      container.appendChild(sliderContainer);
    });
    return container;
  }
}`,...(ve=(xe=V.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var be,we,ye;z.parameters={...z.parameters,docs:{...(be=z.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    value: 50,
    step: 1,
    disabled: false,
    showValue: true,
    size: 'md',
    color: 'blue'
  },
  render: args => {
    const slider = new Slider(args);
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
    colorSelect.onchange = e => slider.setColor(e.target.value);
    const sizeSelect = document.createElement('select');
    sizeSelect.className = 'px-3 py-1 border rounded';
    ['sm', 'md', 'lg'].forEach(size => {
      const option = document.createElement('option');
      option.value = size;
      option.textContent = size.toUpperCase();
      option.selected = size === 'md';
      sizeSelect.appendChild(option);
    });
    sizeSelect.onchange = e => slider.setSize(e.target.value);
    const stepSelect = document.createElement('select');
    stepSelect.className = 'px-3 py-1 border rounded';
    [0.1, 0.5, 1, 2, 5, 10].forEach(step => {
      const option = document.createElement('option');
      option.value = step;
      option.textContent = step;
      option.selected = step === 1;
      stepSelect.appendChild(option);
    });
    stepSelect.onchange = e => slider.setStep(parseFloat(e.target.value));
    const disableBtn = document.createElement('button');
    disableBtn.textContent = 'Toggle Disabled';
    disableBtn.className = 'px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600';
    disableBtn.onclick = () => {
      if (slider.options.disabled) {
        slider.enable();
        disableBtn.textContent = 'Disable';
        disableBtn.className = 'px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600';
      } else {
        slider.disable();
        disableBtn.textContent = 'Enable';
        disableBtn.className = 'px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600';
      }
    };
    controls.appendChild(colorSelect);
    controls.appendChild(sizeSelect);
    controls.appendChild(stepSelect);
    controls.appendChild(disableBtn);
    container.appendChild(controls);
    slider.mount(container);
    return container;
  }
}`,...(ye=(we=z.parameters)==null?void 0:we.docs)==null?void 0:ye.source}}};const fe=["Basic","HighValue","LowValue","Small","Large","Disabled","NoValue","CustomStep","CustomRange","Green","Red","Purple","Orange","SizeGallery","ColorGallery","Interactive"];export{u as Basic,V as ColorGallery,w as CustomRange,b as CustomStep,x as Disabled,y as Green,p as HighValue,z as Interactive,h as Large,m as LowValue,v as NoValue,C as Orange,f as Purple,E as Red,S as SizeGallery,g as Small,fe as __namedExportsOrder,Ee as default};
