class s{constructor(e={}){this.options={type:"info",title:"",message:"",dismissible:!0,autoDismiss:!1,autoDismissDelay:5e3,icon:!0,...e},this.id=this.generateId(),this.isVisible=!0,this.autoDismissTimer=null}generateId(){return"alert-"+Math.random().toString(36).substr(2,9)}render(){const e=this.getTypeClasses(),t=this.options.icon?this.getIcon():"";return`
      <div 
        class="rounded-md p-4 ${e.background} ${e.border} transition-all duration-300 ${this.isVisible?"opacity-100":"opacity-0"}"
        id="${this.id}"
        role="alert"
        aria-live="assertive"
      >
        <div class="flex">
          ${t?`
            <div class="flex-shrink-0">
              ${t}
            </div>
          `:""}
          
          <div class="ml-3 flex-1">
            ${this.options.title?`
              <h3 class="text-sm font-medium ${e.titleColor}">
                ${this.options.title}
              </h3>
            `:""}
            
            ${this.options.message?`
              <div class="mt-2 text-sm ${e.messageColor}">
                ${this.options.message}
              </div>
            `:""}
          </div>
          
          ${this.options.dismissible?`
            <div class="ml-auto pl-3">
              <div class="-mx-1.5 -my-1.5">
                <button
                  type="button"
                  class="inline-flex rounded-md p-1.5 ${e.buttonBackground} ${e.buttonColor} hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-50 focus:ring-blue-600 transition-colors duration-200"
                  onclick="this.dismiss()"
                  aria-label="Dismiss alert"
                >
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>
          `:""}
        </div>
      </div>
    `}getTypeClasses(){const e={info:{background:"bg-blue-50",border:"border border-blue-200",titleColor:"text-blue-800",messageColor:"text-blue-700",buttonBackground:"bg-blue-50",buttonColor:"text-blue-500"},success:{background:"bg-green-50",border:"border border-green-200",titleColor:"text-green-800",messageColor:"text-green-700",buttonBackground:"bg-green-50",buttonColor:"text-green-500"},warning:{background:"bg-yellow-50",border:"border border-yellow-200",titleColor:"text-yellow-800",messageColor:"text-yellow-700",buttonBackground:"bg-yellow-50",buttonColor:"text-yellow-500"},error:{background:"bg-red-50",border:"border border-red-200",titleColor:"text-red-800",messageColor:"text-red-700",buttonBackground:"bg-red-50",buttonColor:"text-red-500"}};return e[this.options.type]||e.info}getIcon(){const e={info:`
        <svg class="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
        </svg>
      `,success:`
        <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
        </svg>
      `,warning:`
        <svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
        </svg>
      `,error:`
        <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
        </svg>
      `};return e[this.options.type]||e.info}show(){this.isVisible=!0,this.updateDisplay(),this.options.autoDismiss&&this.startAutoDismiss(),this.triggerEvent("show")}hide(){this.isVisible=!1,this.updateDisplay(),this.autoDismissTimer&&(clearTimeout(this.autoDismissTimer),this.autoDismissTimer=null),this.triggerEvent("hide")}dismiss(){this.hide(),setTimeout(()=>{const e=document.getElementById(this.id);e&&e.remove()},300),this.triggerEvent("dismiss")}startAutoDismiss(){this.autoDismissTimer&&clearTimeout(this.autoDismissTimer),this.autoDismissTimer=setTimeout(()=>{this.dismiss()},this.options.autoDismissDelay)}setType(e){this.options.type=e,this.updateDisplay()}setTitle(e){this.options.title=e,this.updateDisplay()}setMessage(e){this.options.message=e,this.updateDisplay()}setDismissible(e){this.options.dismissible=e,this.updateDisplay()}setAutoDismiss(e,t=null){this.options.autoDismiss=e,t!==null&&(this.options.autoDismissDelay=t),e&&this.isVisible?this.startAutoDismiss():this.autoDismissTimer&&(clearTimeout(this.autoDismissTimer),this.autoDismissTimer=null)}setIcon(e){this.options.icon=e,this.updateDisplay()}updateDisplay(){const e=document.getElementById(this.id);e&&(e.outerHTML=this.render())}triggerEvent(e,t={}){const r=new CustomEvent(`alert:${e}`,{detail:{alert:this,...t},bubbles:!0});document.dispatchEvent(r)}mount(e){typeof e=="string"&&(e=document.querySelector(e)),e&&(e.innerHTML=this.render(),this.attachEventListeners(),this.options.autoDismiss&&this.startAutoDismiss())}attachEventListeners(){const e=document.querySelector(`#${this.id} button[onclick*="dismiss"]`);e&&e.addEventListener("click",()=>this.dismiss())}static info(e,t="Información"){return new s({type:"info",message:e,title:t})}static success(e,t="Éxito"){return new s({type:"success",message:e,title:t})}static warning(e,t="Advertencia"){return new s({type:"warning",message:e,title:t})}static error(e,t="Error"){return new s({type:"error",message:e,title:t})}static showTemporary(e,t,r="",i=5e3){const o=new s({type:e,message:t,title:r,autoDismiss:!0,autoDismissDelay:i});return document.body.insertAdjacentHTML("beforeend",o.render()),o.show(),o}}const ee={title:"Components/Feedback/Alert",component:s,parameters:{docs:{description:{component:"Un componente de alerta versátil con múltiples tipos, estados y funcionalidades de auto-dismiss."}}},argTypes:{type:{control:{type:"select"},options:["info","success","warning","error"],description:"Tipo de alerta"},title:{control:"text",description:"Título de la alerta"},message:{control:"text",description:"Mensaje de la alerta"},dismissible:{control:"boolean",description:"Si la alerta se puede cerrar"},autoDismiss:{control:"boolean",description:"Si la alerta se cierra automáticamente"},autoDismissDelay:{control:{type:"number",min:1e3,max:1e4,step:500},description:"Tiempo antes de auto-cerrar (ms)"},icon:{control:"boolean",description:"Mostrar icono"}}},l={args:{type:"info",title:"Información",message:"Esta es una alerta informativa que te proporciona detalles importantes sobre el sistema.",dismissible:!0,autoDismiss:!1,icon:!0},render:n=>{const e=new s(n),t=document.createElement("div");return t.style.padding="20px",e.mount(t),t}},d={args:{type:"success",title:"Éxito",message:"¡Operación completada exitosamente! Los datos se han guardado correctamente.",dismissible:!0,autoDismiss:!1,icon:!0},render:n=>{const e=new s(n),t=document.createElement("div");return t.style.padding="20px",e.mount(t),t}},u={args:{type:"warning",title:"Advertencia",message:"Ten cuidado con esta acción. Podría tener consecuencias inesperadas.",dismissible:!0,autoDismiss:!1,icon:!0},render:n=>{const e=new s(n),t=document.createElement("div");return t.style.padding="20px",e.mount(t),t}},m={args:{type:"error",title:"Error",message:"Ha ocurrido un error inesperado. Por favor, intenta nuevamente o contacta al soporte.",dismissible:!0,autoDismiss:!1,icon:!0},render:n=>{const e=new s(n),t=document.createElement("div");return t.style.padding="20px",e.mount(t),t}},p={args:{type:"info",title:"",message:"Esta es una alerta simple sin título, solo con un mensaje informativo.",dismissible:!0,autoDismiss:!1,icon:!0},render:n=>{const e=new s(n),t=document.createElement("div");return t.style.padding="20px",e.mount(t),t}},g={args:{type:"success",title:"Sin Icono",message:"Esta alerta no tiene icono, solo texto.",dismissible:!0,autoDismiss:!1,icon:!1},render:n=>{const e=new s(n),t=document.createElement("div");return t.style.padding="20px",e.mount(t),t}},y={args:{type:"warning",title:"No Descartable",message:"Esta alerta no se puede cerrar. Es importante que la leas completamente.",dismissible:!1,autoDismiss:!1,icon:!0},render:n=>{const e=new s(n),t=document.createElement("div");return t.style.padding="20px",e.mount(t),t}},b={args:{type:"info",title:"Auto-Dismiss",message:"Esta alerta se cerrará automáticamente en 5 segundos.",dismissible:!0,autoDismiss:!0,autoDismissDelay:5e3,icon:!0},render:n=>{const e=new s(n),t=document.createElement("div");return t.style.padding="20px",e.mount(t),t}},h={args:{type:"info",title:"Mensaje Largo",message:"Esta es una alerta con un mensaje muy largo que puede extenderse por múltiples líneas. Es útil para mostrar información detallada o instrucciones paso a paso que requieren más espacio para ser explicadas claramente.",dismissible:!0,autoDismiss:!1,icon:!0},render:n=>{const e=new s(n),t=document.createElement("div");return t.style.padding="20px",t.style.maxWidth="600px",e.mount(t),t}},x={render:()=>{const n=document.createElement("div");return n.style.padding="20px",[{type:"info",title:"Información",message:"Mensaje informativo"},{type:"success",title:"Éxito",message:"Operación exitosa"},{type:"warning",title:"Advertencia",message:"Mensaje de advertencia"},{type:"error",title:"Error",message:"Mensaje de error"}].forEach((t,r)=>{const i=new s({...t,dismissible:!0,autoDismiss:!1,icon:!0}),o=document.createElement("div");o.style.marginBottom="16px",i.mount(o),n.appendChild(o)}),n}},f={args:{type:"info",title:"Alerta Interactiva",message:"Esta alerta tiene controles interactivos para cambiar sus propiedades.",dismissible:!0,autoDismiss:!1,icon:!0},render:n=>{const e=new s(n),t=document.createElement("div");t.style.padding="20px";const r=document.createElement("div");r.style.marginBottom="20px",r.style.display="flex",r.style.gap="10px",r.style.flexWrap="wrap";const i=document.createElement("select");i.className="px-3 py-1 border rounded",["info","success","warning","error"].forEach(a=>{const v=document.createElement("option");v.value=a,v.textContent=a.charAt(0).toUpperCase()+a.slice(1),i.appendChild(v)}),i.onchange=a=>e.setType(a.target.value);const o=document.createElement("button");o.textContent="Toggle Icon",o.className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600",o.onclick=()=>e.setIcon(!e.options.icon);const c=document.createElement("button");return c.textContent="Toggle Dismissible",c.className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600",c.onclick=()=>e.setDismissible(!e.options.dismissible),r.appendChild(i),r.appendChild(o),r.appendChild(c),t.appendChild(r),e.mount(t),t}};var D,E,w;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    type: 'info',
    title: 'Información',
    message: 'Esta es una alerta informativa que te proporciona detalles importantes sobre el sistema.',
    dismissible: true,
    autoDismiss: false,
    icon: true
  },
  render: args => {
    const alert = new Alert(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    alert.mount(container);
    return container;
  }
}`,...(w=(E=l.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var C,T,A;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: 'success',
    title: 'Éxito',
    message: '¡Operación completada exitosamente! Los datos se han guardado correctamente.',
    dismissible: true,
    autoDismiss: false,
    icon: true
  },
  render: args => {
    const alert = new Alert(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    alert.mount(container);
    return container;
  }
}`,...(A=(T=d.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var I,S,M;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    title: 'Advertencia',
    message: 'Ten cuidado con esta acción. Podría tener consecuencias inesperadas.',
    dismissible: true,
    autoDismiss: false,
    icon: true
  },
  render: args => {
    const alert = new Alert(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    alert.mount(container);
    return container;
  }
}`,...(M=(S=u.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var L,k,B;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    type: 'error',
    title: 'Error',
    message: 'Ha ocurrido un error inesperado. Por favor, intenta nuevamente o contacta al soporte.',
    dismissible: true,
    autoDismiss: false,
    icon: true
  },
  render: args => {
    const alert = new Alert(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    alert.mount(container);
    return container;
  }
}`,...(B=(k=m.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var $,j,N;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    type: 'info',
    title: '',
    message: 'Esta es una alerta simple sin título, solo con un mensaje informativo.',
    dismissible: true,
    autoDismiss: false,
    icon: true
  },
  render: args => {
    const alert = new Alert(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    alert.mount(container);
    return container;
  }
}`,...(N=(j=p.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var q,z,F;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    type: 'success',
    title: 'Sin Icono',
    message: 'Esta alerta no tiene icono, solo texto.',
    dismissible: true,
    autoDismiss: false,
    icon: false
  },
  render: args => {
    const alert = new Alert(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    alert.mount(container);
    return container;
  }
}`,...(F=(z=g.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var H,V,W;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    title: 'No Descartable',
    message: 'Esta alerta no se puede cerrar. Es importante que la leas completamente.',
    dismissible: false,
    autoDismiss: false,
    icon: true
  },
  render: args => {
    const alert = new Alert(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    alert.mount(container);
    return container;
  }
}`,...(W=(V=y.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var O,P,U;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    type: 'info',
    title: 'Auto-Dismiss',
    message: 'Esta alerta se cerrará automáticamente en 5 segundos.',
    dismissible: true,
    autoDismiss: true,
    autoDismissDelay: 5000,
    icon: true
  },
  render: args => {
    const alert = new Alert(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    alert.mount(container);
    return container;
  }
}`,...(U=(P=b.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var G,J,K;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    type: 'info',
    title: 'Mensaje Largo',
    message: 'Esta es una alerta con un mensaje muy largo que puede extenderse por múltiples líneas. Es útil para mostrar información detallada o instrucciones paso a paso que requieren más espacio para ser explicadas claramente.',
    dismissible: true,
    autoDismiss: false,
    icon: true
  },
  render: args => {
    const alert = new Alert(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '600px';
    alert.mount(container);
    return container;
  }
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,R,X;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    const types = [{
      type: 'info',
      title: 'Información',
      message: 'Mensaje informativo'
    }, {
      type: 'success',
      title: 'Éxito',
      message: 'Operación exitosa'
    }, {
      type: 'warning',
      title: 'Advertencia',
      message: 'Mensaje de advertencia'
    }, {
      type: 'error',
      title: 'Error',
      message: 'Mensaje de error'
    }];
    types.forEach((alertConfig, index) => {
      const alert = new Alert({
        ...alertConfig,
        dismissible: true,
        autoDismiss: false,
        icon: true
      });
      const alertContainer = document.createElement('div');
      alertContainer.style.marginBottom = '16px';
      alert.mount(alertContainer);
      container.appendChild(alertContainer);
    });
    return container;
  }
}`,...(X=(R=x.parameters)==null?void 0:R.docs)==null?void 0:X.source}}};var Y,Z,_;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    type: 'info',
    title: 'Alerta Interactiva',
    message: 'Esta alerta tiene controles interactivos para cambiar sus propiedades.',
    dismissible: true,
    autoDismiss: false,
    icon: true
  },
  render: args => {
    const alert = new Alert(args);
    const container = document.createElement('div');
    container.style.padding = '20px';

    // Controles interactivos
    const controls = document.createElement('div');
    controls.style.marginBottom = '20px';
    controls.style.display = 'flex';
    controls.style.gap = '10px';
    controls.style.flexWrap = 'wrap';
    const typeSelect = document.createElement('select');
    typeSelect.className = 'px-3 py-1 border rounded';
    ['info', 'success', 'warning', 'error'].forEach(type => {
      const option = document.createElement('option');
      option.value = type;
      option.textContent = type.charAt(0).toUpperCase() + type.slice(1);
      typeSelect.appendChild(option);
    });
    typeSelect.onchange = e => alert.setType(e.target.value);
    const iconToggle = document.createElement('button');
    iconToggle.textContent = 'Toggle Icon';
    iconToggle.className = 'px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600';
    iconToggle.onclick = () => alert.setIcon(!alert.options.icon);
    const dismissibleToggle = document.createElement('button');
    dismissibleToggle.textContent = 'Toggle Dismissible';
    dismissibleToggle.className = 'px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600';
    dismissibleToggle.onclick = () => alert.setDismissible(!alert.options.dismissible);
    controls.appendChild(typeSelect);
    controls.appendChild(iconToggle);
    controls.appendChild(dismissibleToggle);
    container.appendChild(controls);
    alert.mount(container);
    return container;
  }
}`,...(_=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};const te=["Info","Success","Warning","Error","NoTitle","NoIcon","NonDismissible","AutoDismiss","LongMessage","AllTypes","Interactive"];export{x as AllTypes,b as AutoDismiss,m as Error,l as Info,f as Interactive,h as LongMessage,g as NoIcon,p as NoTitle,y as NonDismissible,d as Success,u as Warning,te as __namedExportsOrder,ee as default};
