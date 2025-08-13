class o{constructor(n={}){this.options={type:"text",placeholder:"Input",value:"",label:"",required:!1,disabled:!1,error:"",icon:null,onChange:null,onFocus:null,onBlur:null,className:"",...n},this.element=this.createInput(),this.bindEvents()}createInput(){const n=document.createElement("div");if(n.className="relative",this.options.label){const a=document.createElement("label");a.className="block text-sm font-medium text-gray-700 mb-1",a.textContent=this.options.label,n.appendChild(a)}const e=document.createElement("div");e.className="relative";const r=document.createElement("input");r.type=this.options.type,r.placeholder=this.options.placeholder,r.value=this.options.value,r.required=this.options.required,r.disabled=this.options.disabled;const s=["w-full px-4 py-2 border border-gray-300 rounded-lg","focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent","transition-all duration-200","disabled:opacity-50 disabled:cursor-not-allowed","placeholder-gray-400"];if(this.options.error&&s.push("border-red-500 focus:ring-red-500"),r.className=[...s,this.options.className].join(" "),this.options.icon){const a=document.createElement("span");a.className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",a.innerHTML=this.options.icon,e.appendChild(a),r.className+=" pl-10"}if(e.appendChild(r),this.options.error){const a=document.createElement("p");a.className="mt-1 text-sm text-red-600",a.textContent=this.options.error,n.appendChild(a)}return n.appendChild(e),this.inputElement=r,n}bindEvents(){this.options.onChange&&this.inputElement.addEventListener("input",this.options.onChange),this.options.onFocus&&this.inputElement.addEventListener("focus",this.options.onFocus),this.options.onBlur&&this.inputElement.addEventListener("blur",this.options.onBlur)}getValue(){return this.inputElement.value}setValue(n){this.inputElement.value=n}setError(n){this.options.error=n,this.updateErrorDisplay()}clearError(){this.options.error="",this.updateErrorDisplay()}setDisabled(n){this.options.disabled=n,this.inputElement.disabled=n}updateErrorDisplay(){const n=this.element.querySelector(".text-red-600");if(n&&n.remove(),this.options.error){const e=document.createElement("p");e.className="mt-1 text-sm text-red-600",e.textContent=this.options.error,this.element.appendChild(e),this.inputElement.className=this.inputElement.className.replace(/border-\w+-\d+/g,"border-red-500")}else this.inputElement.className=this.inputElement.className.replace(/border-red-500/g,"border-gray-300")}validate(){return this.options.required&&!this.inputElement.value.trim()?(this.setError("This field is required"),!1):(this.clearError(),!0)}render(n){return typeof n=="string"&&(n=document.querySelector(n)),n&&n.appendChild(this.element),this.element}destroy(){this.element.parentNode&&this.element.parentNode.removeChild(this.element)}}const le={title:"Components/Input/Input",component:o,parameters:{docs:{description:{component:"Un componente de entrada de texto versátil con soporte para etiquetas, iconos, validación y múltiples tipos."}}},argTypes:{type:{control:{type:"select"},options:["text","email","password","number","tel","url","search"],description:"Tipo de input"},placeholder:{control:"text",description:"Texto de placeholder"},value:{control:"text",description:"Valor inicial del input"},label:{control:"text",description:"Etiqueta del input"},required:{control:"boolean",description:"Si el campo es requerido"},disabled:{control:"boolean",description:"Si el input está deshabilitado"},error:{control:"text",description:"Mensaje de error"},icon:{control:"text",description:"Icono SVG para el input"},className:{control:"text",description:"Clases CSS adicionales"}}},p={args:{type:"text",placeholder:"Escribe algo aquí...",value:"",label:"Nombre",required:!1,disabled:!1,error:"",icon:"",className:""},render:t=>{const n=new o(t),e=document.createElement("div");return e.style.padding="20px",e.style.maxWidth="400px",n.render(e),e}},u={args:{type:"text",placeholder:"Ingresa tu nombre completo",value:"",label:"Nombre Completo",required:!0,disabled:!1,error:"",icon:"",className:""},render:t=>{const n=new o(t),e=document.createElement("div");return e.style.padding="20px",e.style.maxWidth="400px",n.render(e),e}},m={args:{type:"text",placeholder:"Buscar...",value:"",label:"Búsqueda",required:!1,disabled:!1,error:"",icon:"🔍",className:""},render:t=>{const n=new o(t),e=document.createElement("div");return e.style.padding="20px",e.style.maxWidth="400px",n.render(e),e}},h={args:{type:"email",placeholder:"ejemplo@email.com",value:"email-invalido",label:"Correo Electrónico",required:!0,disabled:!1,error:"Por favor ingresa un email válido",icon:"📧",className:""},render:t=>{const n=new o(t),e=document.createElement("div");return e.style.padding="20px",e.style.maxWidth="400px",n.render(e),e}},b={args:{type:"text",placeholder:"Campo deshabilitado",value:"No se puede editar",label:"Campo Deshabilitado",required:!1,disabled:!0,error:"",icon:"🔒",className:""},render:t=>{const n=new o(t),e=document.createElement("div");return e.style.padding="20px",e.style.maxWidth="400px",n.render(e),e}},y={args:{type:"password",placeholder:"Ingresa tu contraseña",value:"",label:"Contraseña",required:!0,disabled:!1,error:"",icon:"🔐",className:""},render:t=>{const n=new o(t),e=document.createElement("div");return e.style.padding="20px",e.style.maxWidth="400px",n.render(e),e}},x={args:{type:"email",placeholder:"usuario@ejemplo.com",value:"",label:"Email",required:!0,disabled:!1,error:"",icon:"📧",className:""},render:t=>{const n=new o(t),e=document.createElement("div");return e.style.padding="20px",e.style.maxWidth="400px",n.render(e),e}},g={args:{type:"number",placeholder:"0",value:"",label:"Edad",required:!1,disabled:!1,error:"",icon:"🔢",className:""},render:t=>{const n=new o(t),e=document.createElement("div");return e.style.padding="20px",e.style.maxWidth="400px",n.render(e),e}},E={args:{type:"tel",placeholder:"+1 (555) 123-4567",value:"",label:"Teléfono",required:!1,disabled:!1,error:"",icon:"📞",className:""},render:t=>{const n=new o(t),e=document.createElement("div");return e.style.padding="20px",e.style.maxWidth="400px",n.render(e),e}},v={args:{type:"url",placeholder:"https://ejemplo.com",value:"",label:"Sitio Web",required:!1,disabled:!1,error:"",icon:"🌐",className:""},render:t=>{const n=new o(t),e=document.createElement("div");return e.style.padding="20px",e.style.maxWidth="400px",n.render(e),e}},f={render:()=>{const t=document.createElement("div");t.style.padding="20px";const n=document.createElement("h3");return n.textContent="Galería de Tipos de Input",n.style.marginBottom="20px",n.style.color="#333",t.appendChild(n),[{type:"text",label:"Texto",placeholder:"Texto libre",icon:"📝"},{type:"email",label:"Email",placeholder:"email@ejemplo.com",icon:"📧"},{type:"password",label:"Contraseña",placeholder:"••••••••",icon:"🔐"},{type:"number",label:"Número",placeholder:"0",icon:"🔢"},{type:"tel",label:"Teléfono",placeholder:"+1 (555) 123-4567",icon:"📞"},{type:"url",label:"URL",placeholder:"https://ejemplo.com",icon:"🌐"},{type:"search",label:"Búsqueda",placeholder:"Buscar...",icon:"🔍"}].forEach(r=>{const s=new o({type:r.type,placeholder:r.placeholder,label:r.label,icon:r.icon,required:!1}),a=document.createElement("div");a.style.marginBottom="20px",a.style.maxWidth="400px",s.render(a),t.appendChild(a)}),t}},C={args:{type:"text",placeholder:"Escribe algo...",value:"",label:"Input Interactivo",required:!1,disabled:!1,error:"",icon:"✨",className:""},render:t=>{const n=new o(t),e=document.createElement("div");e.style.padding="20px",e.style.maxWidth="500px";const r=document.createElement("div");r.style.marginBottom="20px",r.style.display="flex",r.style.gap="10px",r.style.flexWrap="wrap";const s=document.createElement("select");s.className="px-3 py-1 border rounded",["text","email","password","number","tel","url","search"].forEach(l=>{const i=document.createElement("option");i.value=l,i.textContent=l.charAt(0).toUpperCase()+l.slice(1),i.selected=l===t.type,s.appendChild(i)}),s.onchange=l=>{t.type=l.target.value,n.destroy(),new o(t).render(e)};const a=document.createElement("input");a.type="text",a.placeholder="Etiqueta...",a.className="px-3 py-1 border rounded",a.value=t.label,a.onchange=l=>{t.label=l.target.value,n.destroy(),new o(t).render(e)};const c=document.createElement("input");c.type="text",c.placeholder="Error...",c.className="px-3 py-1 border rounded",c.value=t.error,c.onchange=l=>{t.error=l.target.value,n.destroy(),new o(t).render(e)};const d=document.createElement("input");d.type="checkbox",d.checked=t.disabled,d.onchange=l=>{t.disabled=l.target.checked,n.destroy(),new o(t).render(e)};const I=document.createElement("label");return I.textContent="Deshabilitado",I.style.marginLeft="5px",r.appendChild(s),r.appendChild(a),r.appendChild(c),r.appendChild(d),r.appendChild(I),e.appendChild(r),n.render(e),e}};var D,w,N;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    type: 'text',
    placeholder: 'Escribe algo aquí...',
    value: '',
    label: 'Nombre',
    required: false,
    disabled: false,
    error: '',
    icon: '',
    className: ''
  },
  render: args => {
    const input = new Input(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    input.render(container);
    return container;
  }
}`,...(N=(w=p.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var q,W,S;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    type: 'text',
    placeholder: 'Ingresa tu nombre completo',
    value: '',
    label: 'Nombre Completo',
    required: true,
    disabled: false,
    error: '',
    icon: '',
    className: ''
  },
  render: args => {
    const input = new Input(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    input.render(container);
    return container;
  }
}`,...(S=(W=u.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};var B,T,L;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    type: 'text',
    placeholder: 'Buscar...',
    value: '',
    label: 'Búsqueda',
    required: false,
    disabled: false,
    error: '',
    icon: '🔍',
    className: ''
  },
  render: args => {
    const input = new Input(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    input.render(container);
    return container;
  }
}`,...(L=(T=m.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var k,j,F;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    type: 'email',
    placeholder: 'ejemplo@email.com',
    value: 'email-invalido',
    label: 'Correo Electrónico',
    required: true,
    disabled: false,
    error: 'Por favor ingresa un email válido',
    icon: '📧',
    className: ''
  },
  render: args => {
    const input = new Input(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    input.render(container);
    return container;
  }
}`,...(F=(j=h.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var U,P,A;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    type: 'text',
    placeholder: 'Campo deshabilitado',
    value: 'No se puede editar',
    label: 'Campo Deshabilitado',
    required: false,
    disabled: true,
    error: '',
    icon: '🔒',
    className: ''
  },
  render: args => {
    const input = new Input(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    input.render(container);
    return container;
  }
}`,...(A=(P=b.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var G,R,V;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Ingresa tu contraseña',
    value: '',
    label: 'Contraseña',
    required: true,
    disabled: false,
    error: '',
    icon: '🔐',
    className: ''
  },
  render: args => {
    const input = new Input(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    input.render(container);
    return container;
  }
}`,...(V=(R=y.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var _,M,H;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    type: 'email',
    placeholder: 'usuario@ejemplo.com',
    value: '',
    label: 'Email',
    required: true,
    disabled: false,
    error: '',
    icon: '📧',
    className: ''
  },
  render: args => {
    const input = new Input(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    input.render(container);
    return container;
  }
}`,...(H=(M=x.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var O,z,J;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    type: 'number',
    placeholder: '0',
    value: '',
    label: 'Edad',
    required: false,
    disabled: false,
    error: '',
    icon: '🔢',
    className: ''
  },
  render: args => {
    const input = new Input(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    input.render(container);
    return container;
  }
}`,...(J=(z=g.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var K,Q,X;E.parameters={...E.parameters,docs:{...(K=E.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    type: 'tel',
    placeholder: '+1 (555) 123-4567',
    value: '',
    label: 'Teléfono',
    required: false,
    disabled: false,
    error: '',
    icon: '📞',
    className: ''
  },
  render: args => {
    const input = new Input(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    input.render(container);
    return container;
  }
}`,...(X=(Q=E.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    type: 'url',
    placeholder: 'https://ejemplo.com',
    value: '',
    label: 'Sitio Web',
    required: false,
    disabled: false,
    error: '',
    icon: '🌐',
    className: ''
  },
  render: args => {
    const input = new Input(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '400px';
    input.render(container);
    return container;
  }
}`,...($=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ne,te;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    const title = document.createElement('h3');
    title.textContent = 'Galería de Tipos de Input';
    title.style.marginBottom = '20px';
    title.style.color = '#333';
    container.appendChild(title);
    const types = [{
      type: 'text',
      label: 'Texto',
      placeholder: 'Texto libre',
      icon: '📝'
    }, {
      type: 'email',
      label: 'Email',
      placeholder: 'email@ejemplo.com',
      icon: '📧'
    }, {
      type: 'password',
      label: 'Contraseña',
      placeholder: '••••••••',
      icon: '🔐'
    }, {
      type: 'number',
      label: 'Número',
      placeholder: '0',
      icon: '🔢'
    }, {
      type: 'tel',
      label: 'Teléfono',
      placeholder: '+1 (555) 123-4567',
      icon: '📞'
    }, {
      type: 'url',
      label: 'URL',
      placeholder: 'https://ejemplo.com',
      icon: '🌐'
    }, {
      type: 'search',
      label: 'Búsqueda',
      placeholder: 'Buscar...',
      icon: '🔍'
    }];
    types.forEach(inputType => {
      const input = new Input({
        type: inputType.type,
        placeholder: inputType.placeholder,
        label: inputType.label,
        icon: inputType.icon,
        required: false
      });
      const inputContainer = document.createElement('div');
      inputContainer.style.marginBottom = '20px';
      inputContainer.style.maxWidth = '400px';
      input.render(inputContainer);
      container.appendChild(inputContainer);
    });
    return container;
  }
}`,...(te=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var re,ae,oe;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    type: 'text',
    placeholder: 'Escribe algo...',
    value: '',
    label: 'Input Interactivo',
    required: false,
    disabled: false,
    error: '',
    icon: '✨',
    className: ''
  },
  render: args => {
    const input = new Input(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '500px';

    // Controles interactivos
    const controls = document.createElement('div');
    controls.style.marginBottom = '20px';
    controls.style.display = 'flex';
    controls.style.gap = '10px';
    controls.style.flexWrap = 'wrap';
    const typeSelect = document.createElement('select');
    typeSelect.className = 'px-3 py-1 border rounded';
    ['text', 'email', 'password', 'number', 'tel', 'url', 'search'].forEach(type => {
      const option = document.createElement('option');
      option.value = type;
      option.textContent = type.charAt(0).toUpperCase() + type.slice(1);
      option.selected = type === args.type;
      typeSelect.appendChild(option);
    });
    typeSelect.onchange = e => {
      args.type = e.target.value;
      input.destroy();
      const newInput = new Input(args);
      newInput.render(container);
    };
    const labelInput = document.createElement('input');
    labelInput.type = 'text';
    labelInput.placeholder = 'Etiqueta...';
    labelInput.className = 'px-3 py-1 border rounded';
    labelInput.value = args.label;
    labelInput.onchange = e => {
      args.label = e.target.value;
      input.destroy();
      const newInput = new Input(args);
      newInput.render(container);
    };
    const errorInput = document.createElement('input');
    errorInput.type = 'text';
    errorInput.placeholder = 'Error...';
    errorInput.className = 'px-3 py-1 border rounded';
    errorInput.value = args.error;
    errorInput.onchange = e => {
      args.error = e.target.value;
      input.destroy();
      const newInput = new Input(args);
      newInput.render(container);
    };
    const disabledCheckbox = document.createElement('input');
    disabledCheckbox.type = 'checkbox';
    disabledCheckbox.checked = args.disabled;
    disabledCheckbox.onchange = e => {
      args.disabled = e.target.checked;
      input.destroy();
      const newInput = new Input(args);
      newInput.render(container);
    };
    const disabledLabel = document.createElement('label');
    disabledLabel.textContent = 'Deshabilitado';
    disabledLabel.style.marginLeft = '5px';
    controls.appendChild(typeSelect);
    controls.appendChild(labelInput);
    controls.appendChild(errorInput);
    controls.appendChild(disabledCheckbox);
    controls.appendChild(disabledLabel);
    container.appendChild(controls);
    input.render(container);
    return container;
  }
}`,...(oe=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};const se=["Basic","WithLabel","WithIcon","WithError","Disabled","Password","Email","Number","Phone","URL","TypeGallery","Interactive"];export{p as Basic,b as Disabled,x as Email,C as Interactive,g as Number,y as Password,E as Phone,f as TypeGallery,v as URL,h as WithError,m as WithIcon,u as WithLabel,se as __namedExportsOrder,le as default};
