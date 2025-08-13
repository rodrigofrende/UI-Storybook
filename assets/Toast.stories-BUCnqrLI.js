class s{constructor(e={}){this.options={title:"",message:"",type:"info",duration:5e3,position:"top-right",dismissible:!0,showIcon:!0,onClose:null,...e},this.id=this.generateId(),this.isVisible=!1,this.timeout=null}generateId(){return"toast-"+Math.random().toString(36).substr(2,9)}render(){const e=this.getTypeClasses(),n=this.getPositionClasses(),t=this.options.showIcon?this.getIcon():"";return`
      <div 
        class="fixed z-50 ${n} ${this.isVisible?"opacity-100 translate-y-0":"opacity-0 translate-y-2"} transition-all duration-300 ease-in-out"
        id="${this.id}"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div class="p-4">
            <div class="flex items-start">
              ${t?`
                <div class="flex-shrink-0">
                  ${t}
                </div>
              `:""}
              
              <div class="ml-3 w-0 flex-1">
                ${this.options.title?`
                  <p class="text-sm font-medium text-gray-900">
                    ${this.options.title}
                  </p>
                `:""}
                
                ${this.options.message?`
                  <p class="mt-1 text-sm text-gray-500">
                    ${this.options.message}
                  </p>
                `:""}
              </div>
              
              ${this.options.dismissible?`
                <div class="ml-4 flex-shrink-0 flex">
                  <button
                    type="button"
                    class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                    onclick="this.close()"
                    aria-label="Close toast"
                  >
                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                  </button>
                </div>
              `:""}
            </div>
          </div>
          
          ${this.options.duration>0?`
            <div class="w-full bg-gray-200 h-1">
              <div class="h-full ${e.progress} transition-all duration-300 ease-linear" style="width: 100%"></div>
            </div>
          `:""}
        </div>
      </div>
    `}getTypeClasses(){const e={info:{icon:"text-blue-400",progress:"bg-blue-500"},success:{icon:"text-green-400",progress:"bg-green-500"},warning:{icon:"text-yellow-400",progress:"bg-yellow-500"},error:{icon:"text-red-400",progress:"bg-red-500"}};return e[this.options.type]||e.info}getPositionClasses(){const e={"top-right":"top-4 right-4","top-left":"top-4 left-4","bottom-right":"bottom-4 right-4","bottom-left":"bottom-4 left-4","top-center":"top-4 left-1/2 transform -translate-x-1/2","bottom-center":"bottom-4 left-1/2 transform -translate-x-1/2"};return e[this.options.position]||e["top-right"]}getIcon(){const e={info:`
        <svg class="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      `,success:`
        <svg class="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      `,warning:`
        <svg class="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
        </svg>
      `,error:`
        <svg class="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      `};return e[this.options.type]||e.info}show(){this.isVisible||(this.isVisible=!0,this.updateDisplay(),this.options.duration>0&&this.startProgress(),this.options.duration>0&&(this.timeout=setTimeout(()=>{this.close()},this.options.duration)),this.triggerEvent("show"))}hide(){this.isVisible&&(this.isVisible=!1,this.updateDisplay(),this.timeout&&(clearTimeout(this.timeout),this.timeout=null),this.triggerEvent("hide"))}close(){this.hide(),setTimeout(()=>{const e=document.getElementById(this.id);e&&e.remove()},300),typeof this.options.onClose=="function"&&this.options.onClose(this),this.triggerEvent("close")}startProgress(){const e=document.querySelector(`#${this.id} .bg-gray-200 div`);e&&setTimeout(()=>{e.style.width="0%"},100)}setTitle(e){this.options.title=e,this.updateDisplay()}setMessage(e){this.options.message=e,this.updateDisplay()}setType(e){this.options.type=e,this.updateDisplay()}setDuration(e){this.options.duration=e}setPosition(e){this.options.position=e,this.updateDisplay()}setDismissible(e){this.options.dismissible=e,this.updateDisplay()}setShowIcon(e){this.options.showIcon=e,this.updateDisplay()}updateDisplay(){const e=document.getElementById(this.id);e&&(e.outerHTML=this.render())}triggerEvent(e,n={}){const t=new CustomEvent(`toast:${e}`,{detail:{toast:this,...n},bubbles:!0});document.dispatchEvent(t)}mount(e){typeof e=="string"&&(e=document.querySelector(e)),e&&(e.innerHTML=this.render(),this.attachEventListeners())}attachEventListeners(){const e=document.querySelector(`#${this.id} button[onclick*="close"]`);e&&e.addEventListener("click",()=>this.close())}static info(e,n="",t={}){return new s({title:e,message:n,type:"info",...t})}static success(e,n="",t={}){return new s({title:e,message:n,type:"success",...t})}static warning(e,n="",t={}){return new s({title:e,message:n,type:"warning",...t})}static error(e,n="",t={}){return new s({title:e,message:n,type:"error",...t})}static show(e,n,t="",a={}){const i=new s({type:e,title:n,message:t,...a});return document.body.insertAdjacentHTML("beforeend",i.render()),i.show(),i}getHTML(){return this.render()}clone(){return new s({...this.options})}isToastVisible(){return this.isVisible}destroy(){this.close();const e=document.getElementById(this.id);e&&e.remove()}}const Te={title:"Components/Feedback/Toast",component:s,parameters:{docs:{description:{component:"Un componente de notificación toast versátil con múltiples tipos, posiciones y opciones de personalización."}}},argTypes:{title:{control:"text",description:"Título del toast"},message:{control:"text",description:"Mensaje del toast"},type:{control:{type:"select"},options:["info","success","warning","error"],description:"Tipo de toast"},duration:{control:{type:"range",min:0,max:1e4,step:500},description:"Duración en milisegundos (0 = sin auto-cierre)"},position:{control:{type:"select"},options:["top-right","top-left","bottom-right","bottom-left","top-center","bottom-center"],description:"Posición del toast"},dismissible:{control:"boolean",description:"Si el toast se puede cerrar manualmente"},showIcon:{control:"boolean",description:"Si mostrar el icono del tipo"},onClose:{control:"function",description:"Callback cuando se cierra el toast"}}},m={args:{title:"Notificación",message:"Este es un toast básico",type:"info",duration:5e3,position:"top-right",dismissible:!0,showIcon:!0,onClose:null},render:o=>{const e=new s(o),n=document.createElement("div");n.style.padding="20px",n.style.backgroundColor="#f9fafb",n.style.position="relative",n.style.minHeight="200px";const t=document.createElement("button");t.textContent="Mostrar Toast",t.className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",t.onclick=()=>{e.show()};const a=document.createElement("button");return a.textContent="Ocultar Toast",a.className="px-4 py-2 ml-2 bg-gray-500 text-white rounded hover:bg-gray-600",a.onclick=()=>{e.hide()},n.appendChild(t),n.appendChild(a),document.body.insertAdjacentHTML("beforeend",e.render()),n}},g={args:{title:"Información",message:"Este es un toast informativo",type:"info",duration:5e3,position:"top-right",dismissible:!0,showIcon:!0},render:o=>{const e=s.info(o.title,o.message,o),n=document.createElement("div");n.style.padding="20px",n.style.backgroundColor="#f9fafb";const t=document.createElement("button");return t.textContent="Toast de Información",t.className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",t.onclick=()=>{document.body.insertAdjacentHTML("beforeend",e.render()),e.show()},n.appendChild(t),n}},h={args:{title:"Éxito",message:"Operación completada exitosamente",type:"success",duration:5e3,position:"top-right",dismissible:!0,showIcon:!0},render:o=>{const e=s.success(o.title,o.message,o),n=document.createElement("div");n.style.padding="20px",n.style.backgroundColor="#f9fafb";const t=document.createElement("button");return t.textContent="Toast de Éxito",t.className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",t.onclick=()=>{document.body.insertAdjacentHTML("beforeend",e.render()),e.show()},n.appendChild(t),n}},b={args:{title:"Advertencia",message:"Ten cuidado con esta acción",type:"warning",duration:5e3,position:"top-right",dismissible:!0,showIcon:!0},render:o=>{const e=s.warning(o.title,o.message,o),n=document.createElement("div");n.style.padding="20px",n.style.backgroundColor="#f9fafb";const t=document.createElement("button");return t.textContent="Toast de Advertencia",t.className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600",t.onclick=()=>{document.body.insertAdjacentHTML("beforeend",e.render()),e.show()},n.appendChild(t),n}},y={args:{title:"Error",message:"Algo salió mal",type:"error",duration:5e3,position:"top-right",dismissible:!0,showIcon:!0},render:o=>{const e=s.error(o.title,o.message,o),n=document.createElement("div");n.style.padding="20px",n.style.backgroundColor="#f9fafb";const t=document.createElement("button");return t.textContent="Toast de Error",t.className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",t.onclick=()=>{document.body.insertAdjacentHTML("beforeend",e.render()),e.show()},n.appendChild(t),n}},w={args:{title:"Persistente",message:"Este toast no se cierra automáticamente",type:"info",duration:0,position:"top-right",dismissible:!0,showIcon:!0},render:o=>{const e=new s(o),n=document.createElement("div");n.style.padding="20px",n.style.backgroundColor="#f9fafb";const t=document.createElement("button");return t.textContent="Toast Persistente",t.className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600",t.onclick=()=>{document.body.insertAdjacentHTML("beforeend",e.render()),e.show()},n.appendChild(t),n}},f={args:{title:"No Descartable",message:"Este toast no se puede cerrar manualmente",type:"warning",duration:8e3,position:"top-right",dismissible:!1,showIcon:!0},render:o=>{const e=new s(o),n=document.createElement("div");n.style.padding="20px",n.style.backgroundColor="#f9fafb";const t=document.createElement("button");return t.textContent="Toast No Descartable",t.className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600",t.onclick=()=>{document.body.insertAdjacentHTML("beforeend",e.render()),e.show()},n.appendChild(t),n}},x={args:{title:"Sin Icono",message:"Este toast no muestra icono",type:"info",duration:5e3,position:"top-right",dismissible:!0,showIcon:!1},render:o=>{const e=new s(o),n=document.createElement("div");n.style.padding="20px",n.style.backgroundColor="#f9fafb";const t=document.createElement("button");return t.textContent="Toast Sin Icono",t.className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600",t.onclick=()=>{document.body.insertAdjacentHTML("beforeend",e.render()),e.show()},n.appendChild(t),n}},C={args:{title:"Posiciones",message:"Toast en diferentes posiciones",type:"info",duration:5e3,dismissible:!0,showIcon:!0},render:o=>{const e=document.createElement("div");return e.style.padding="20px",e.style.backgroundColor="#f9fafb",["top-right","top-left","bottom-right","bottom-left","top-center","bottom-center"].forEach((t,a)=>{const i=document.createElement("button");i.textContent=t.replace("-"," ").replace(/\b\w/g,c=>c.toUpperCase()),i.className="px-4 py-2 mr-2 mb-2 bg-blue-500 text-white rounded hover:bg-blue-600",i.onclick=()=>{const c=new s({...o,position:t});document.body.insertAdjacentHTML("beforeend",c.render()),c.show()},e.appendChild(i)}),e}},v={args:{title:"Con Callback",message:"Este toast ejecuta una función al cerrarse",type:"success",duration:5e3,position:"top-right",dismissible:!0,showIcon:!0,onClose:o=>{console.log("Toast cerrado:",o),alert("Toast cerrado exitosamente")}},render:o=>{const e=new s(o),n=document.createElement("div");n.style.padding="20px",n.style.backgroundColor="#f9fafb";const t=document.createElement("button");return t.textContent="Toast Con Callback",t.className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600",t.onclick=()=>{document.body.insertAdjacentHTML("beforeend",e.render()),e.show()},n.appendChild(t),n}},E={args:{title:"Mensaje Largo",message:"Este es un mensaje muy largo que demuestra cómo se comporta el toast cuando el contenido excede el ancho estándar. El toast se adapta automáticamente al contenido.",type:"info",duration:8e3,position:"top-right",dismissible:!0,showIcon:!0},render:o=>{const e=new s(o),n=document.createElement("div");n.style.padding="20px",n.style.backgroundColor="#f9fafb";const t=document.createElement("button");return t.textContent="Toast Con Mensaje Largo",t.className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600",t.onclick=()=>{document.body.insertAdjacentHTML("beforeend",e.render()),e.show()},n.appendChild(t),n}},T={args:{title:"Solo Título",message:"",type:"success",duration:5e3,position:"top-right",dismissible:!0,showIcon:!0},render:o=>{const e=new s(o),n=document.createElement("div");n.style.padding="20px",n.style.backgroundColor="#f9fafb";const t=document.createElement("button");return t.textContent="Toast Solo Título",t.className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",t.onclick=()=>{document.body.insertAdjacentHTML("beforeend",e.render()),e.show()},n.appendChild(t),n}},k={args:{title:"",message:"Solo mensaje sin título",type:"info",duration:5e3,position:"top-right",dismissible:!0,showIcon:!0},render:o=>{const e=new s(o),n=document.createElement("div");n.style.padding="20px",n.style.backgroundColor="#f9fafb";const t=document.createElement("button");return t.textContent="Toast Solo Mensaje",t.className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",t.onclick=()=>{document.body.insertAdjacentHTML("beforeend",e.render()),e.show()},n.appendChild(t),n}},B={args:{title:"Duración Personalizada",message:"Este toast dura 2 segundos",type:"warning",duration:2e3,position:"top-right",dismissible:!0,showIcon:!0},render:o=>{const e=new s(o),n=document.createElement("div");n.style.padding="20px",n.style.backgroundColor="#f9fafb";const t=document.createElement("button");return t.textContent="Toast 2 Segundos",t.className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600",t.onclick=()=>{document.body.insertAdjacentHTML("beforeend",e.render()),e.show()},n.appendChild(t),n}},I={args:{title:"Galería",message:"Muestra todos los tipos de toast",type:"info",duration:5e3,position:"top-right",dismissible:!0,showIcon:!0},render:o=>{const e=document.createElement("div");return e.style.padding="20px",e.style.backgroundColor="#f9fafb",[{type:"info",label:"Info",color:"blue"},{type:"success",label:"Success",color:"green"},{type:"warning",label:"Warning",color:"yellow"},{type:"error",label:"Error",color:"red"}].forEach(({type:t,label:a,color:i})=>{const c=document.createElement("button");c.textContent=`Toast ${a}`,c.className=`px-4 py-2 mr-2 mb-2 bg-${i}-500 text-white rounded hover:bg-${i}-600`,c.onclick=()=>{const l=s[t](`Toast ${a}`,`Este es un toast de tipo ${a.toLowerCase()}`,o);document.body.insertAdjacentHTML("beforeend",l.render()),l.show()},e.appendChild(c)}),e}},M={args:{title:"Toast Interactivo",message:"Puedes cambiar las propiedades en tiempo real",type:"info",duration:5e3,position:"top-right",dismissible:!0,showIcon:!0},render:o=>{const e=new s(o),n=document.createElement("div");n.style.padding="20px",n.style.backgroundColor="#f9fafb";const t=document.createElement("div");t.style.marginBottom="20px",t.style.display="flex",t.style.gap="10px",t.style.flexWrap="wrap",t.style.alignItems="center";const a=document.createElement("select");a.className="px-3 py-1 border rounded",["info","success","warning","error"].forEach(r=>{const d=document.createElement("option");d.value=r,d.textContent=r.charAt(0).toUpperCase()+r.slice(1),d.selected=r===o.type,a.appendChild(d)}),a.onchange=r=>{o.type=r.target.value,e.setType(r.target.value)};const i=document.createElement("select");i.className="px-3 py-1 border rounded",["top-right","top-left","bottom-right","bottom-left","top-center","bottom-center"].forEach(r=>{const d=document.createElement("option");d.value=r,d.textContent=r.replace("-"," ").replace(/\b\w/g,Ee=>Ee.toUpperCase()),d.selected=r===o.position,i.appendChild(d)}),i.onchange=r=>{o.position=r.target.value,e.setPosition(r.target.value)};const c=document.createElement("input");c.type="number",c.value=o.duration,c.className="px-3 py-1 border rounded w-20",c.placeholder="Duración",c.onchange=r=>{o.duration=parseInt(r.target.value),e.setDuration(parseInt(r.target.value))};const l=document.createElement("input");l.type="checkbox",l.checked=o.dismissible,l.onchange=r=>{o.dismissible=r.target.checked,e.setDismissible(r.target.checked)};const u=document.createElement("input");u.type="checkbox",u.checked=o.showIcon,u.onchange=r=>{o.showIcon=r.target.checked,e.setShowIcon(r.target.checked)},t.appendChild(document.createElement("label")).textContent="Tipo:",t.appendChild(a),t.appendChild(document.createElement("label")).textContent="Posición:",t.appendChild(i),t.appendChild(document.createElement("label")).textContent="Duración (ms):",t.appendChild(c),t.appendChild(document.createElement("label")).textContent="Descartable:",t.appendChild(l),t.appendChild(document.createElement("label")).textContent="Icono:",t.appendChild(u),n.appendChild(t);const p=document.createElement("button");return p.textContent="Mostrar Toast Interactivo",p.className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600",p.onclick=()=>{document.body.insertAdjacentHTML("beforeend",e.render()),e.show()},n.appendChild(p),n}};var S,L,j;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: 'Notificación',
    message: 'Este es un toast básico',
    type: 'info',
    duration: 5000,
    position: 'top-right',
    dismissible: true,
    showIcon: true,
    onClose: null
  },
  render: args => {
    const toast = new Toast(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    container.style.position = 'relative';
    container.style.minHeight = '200px';
    const showButton = document.createElement('button');
    showButton.textContent = 'Mostrar Toast';
    showButton.className = 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600';
    showButton.onclick = () => {
      toast.show();
    };
    const hideButton = document.createElement('button');
    hideButton.textContent = 'Ocultar Toast';
    hideButton.className = 'px-4 py-2 ml-2 bg-gray-500 text-white rounded hover:bg-gray-600';
    hideButton.onclick = () => {
      toast.hide();
    };
    container.appendChild(showButton);
    container.appendChild(hideButton);

    // Montar el toast en el body para que se posicione correctamente
    document.body.insertAdjacentHTML('beforeend', toast.render());
    return container;
  }
}`,...(j=(L=m.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var N,A,H;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    title: 'Información',
    message: 'Este es un toast informativo',
    type: 'info',
    duration: 5000,
    position: 'top-right',
    dismissible: true,
    showIcon: true
  },
  render: args => {
    const toast = Toast.info(args.title, args.message, args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    const showButton = document.createElement('button');
    showButton.textContent = 'Toast de Información';
    showButton.className = 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600';
    showButton.onclick = () => {
      document.body.insertAdjacentHTML('beforeend', toast.render());
      toast.show();
    };
    container.appendChild(showButton);
    return container;
  }
}`,...(H=(A=g.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var D,$,P;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: 'Éxito',
    message: 'Operación completada exitosamente',
    type: 'success',
    duration: 5000,
    position: 'top-right',
    dismissible: true,
    showIcon: true
  },
  render: args => {
    const toast = Toast.success(args.title, args.message, args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    const showButton = document.createElement('button');
    showButton.textContent = 'Toast de Éxito';
    showButton.className = 'px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600';
    showButton.onclick = () => {
      document.body.insertAdjacentHTML('beforeend', toast.render());
      toast.show();
    };
    container.appendChild(showButton);
    return container;
  }
}`,...(P=($=h.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var F,z,O;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    title: 'Advertencia',
    message: 'Ten cuidado con esta acción',
    type: 'warning',
    duration: 5000,
    position: 'top-right',
    dismissible: true,
    showIcon: true
  },
  render: args => {
    const toast = Toast.warning(args.title, args.message, args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    const showButton = document.createElement('button');
    showButton.textContent = 'Toast de Advertencia';
    showButton.className = 'px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600';
    showButton.onclick = () => {
      document.body.insertAdjacentHTML('beforeend', toast.render());
      toast.show();
    };
    container.appendChild(showButton);
    return container;
  }
}`,...(O=(z=b.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var V,W,U;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: 'Error',
    message: 'Algo salió mal',
    type: 'error',
    duration: 5000,
    position: 'top-right',
    dismissible: true,
    showIcon: true
  },
  render: args => {
    const toast = Toast.error(args.title, args.message, args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    const showButton = document.createElement('button');
    showButton.textContent = 'Toast de Error';
    showButton.className = 'px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600';
    showButton.onclick = () => {
      document.body.insertAdjacentHTML('beforeend', toast.render());
      toast.show();
    };
    container.appendChild(showButton);
    return container;
  }
}`,...(U=(W=y.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var q,G,J;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    title: 'Persistente',
    message: 'Este toast no se cierra automáticamente',
    type: 'info',
    duration: 0,
    position: 'top-right',
    dismissible: true,
    showIcon: true
  },
  render: args => {
    const toast = new Toast(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    const showButton = document.createElement('button');
    showButton.textContent = 'Toast Persistente';
    showButton.className = 'px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600';
    showButton.onclick = () => {
      document.body.insertAdjacentHTML('beforeend', toast.render());
      toast.show();
    };
    container.appendChild(showButton);
    return container;
  }
}`,...(J=(G=w.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,R;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    title: 'No Descartable',
    message: 'Este toast no se puede cerrar manualmente',
    type: 'warning',
    duration: 8000,
    position: 'top-right',
    dismissible: false,
    showIcon: true
  },
  render: args => {
    const toast = new Toast(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    const showButton = document.createElement('button');
    showButton.textContent = 'Toast No Descartable';
    showButton.className = 'px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600';
    showButton.onclick = () => {
      document.body.insertAdjacentHTML('beforeend', toast.render());
      toast.show();
    };
    container.appendChild(showButton);
    return container;
  }
}`,...(R=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var X,Y,Z;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    title: 'Sin Icono',
    message: 'Este toast no muestra icono',
    type: 'info',
    duration: 5000,
    position: 'top-right',
    dismissible: true,
    showIcon: false
  },
  render: args => {
    const toast = new Toast(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    const showButton = document.createElement('button');
    showButton.textContent = 'Toast Sin Icono';
    showButton.className = 'px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600';
    showButton.onclick = () => {
      document.body.insertAdjacentHTML('beforeend', toast.render());
      toast.show();
    };
    container.appendChild(showButton);
    return container;
  }
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var _,ee,te;C.parameters={...C.parameters,docs:{...(_=C.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: 'Posiciones',
    message: 'Toast en diferentes posiciones',
    type: 'info',
    duration: 5000,
    dismissible: true,
    showIcon: true
  },
  render: args => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    const positions = ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'];
    positions.forEach((position, index) => {
      const button = document.createElement('button');
      button.textContent = position.replace('-', ' ').replace(/\\b\\w/g, l => l.toUpperCase());
      button.className = 'px-4 py-2 mr-2 mb-2 bg-blue-500 text-white rounded hover:bg-blue-600';
      button.onclick = () => {
        const toast = new Toast({
          ...args,
          position
        });
        document.body.insertAdjacentHTML('beforeend', toast.render());
        toast.show();
      };
      container.appendChild(button);
    });
    return container;
  }
}`,...(te=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,oe,se;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    title: 'Con Callback',
    message: 'Este toast ejecuta una función al cerrarse',
    type: 'success',
    duration: 5000,
    position: 'top-right',
    dismissible: true,
    showIcon: true,
    onClose: toast => {
      console.log('Toast cerrado:', toast);
      alert('Toast cerrado exitosamente');
    }
  },
  render: args => {
    const toast = new Toast(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    const showButton = document.createElement('button');
    showButton.textContent = 'Toast Con Callback';
    showButton.className = 'px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600';
    showButton.onclick = () => {
      document.body.insertAdjacentHTML('beforeend', toast.render());
      toast.show();
    };
    container.appendChild(showButton);
    return container;
  }
}`,...(se=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var re,ae,ie;E.parameters={...E.parameters,docs:{...(re=E.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    title: 'Mensaje Largo',
    message: 'Este es un mensaje muy largo que demuestra cómo se comporta el toast cuando el contenido excede el ancho estándar. El toast se adapta automáticamente al contenido.',
    type: 'info',
    duration: 8000,
    position: 'top-right',
    dismissible: true,
    showIcon: true
  },
  render: args => {
    const toast = new Toast(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    const showButton = document.createElement('button');
    showButton.textContent = 'Toast Con Mensaje Largo';
    showButton.className = 'px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600';
    showButton.onclick = () => {
      document.body.insertAdjacentHTML('beforeend', toast.render());
      toast.show();
    };
    container.appendChild(showButton);
    return container;
  }
}`,...(ie=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var ce,de,le;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    title: 'Solo Título',
    message: '',
    type: 'success',
    duration: 5000,
    position: 'top-right',
    dismissible: true,
    showIcon: true
  },
  render: args => {
    const toast = new Toast(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    const showButton = document.createElement('button');
    showButton.textContent = 'Toast Solo Título';
    showButton.className = 'px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600';
    showButton.onclick = () => {
      document.body.insertAdjacentHTML('beforeend', toast.render());
      toast.show();
    };
    container.appendChild(showButton);
    return container;
  }
}`,...(le=(de=T.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var ue,pe,me;k.parameters={...k.parameters,docs:{...(ue=k.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    title: '',
    message: 'Solo mensaje sin título',
    type: 'info',
    duration: 5000,
    position: 'top-right',
    dismissible: true,
    showIcon: true
  },
  render: args => {
    const toast = new Toast(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    const showButton = document.createElement('button');
    showButton.textContent = 'Toast Solo Mensaje';
    showButton.className = 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600';
    showButton.onclick = () => {
      document.body.insertAdjacentHTML('beforeend', toast.render());
      toast.show();
    };
    container.appendChild(showButton);
    return container;
  }
}`,...(me=(pe=k.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ge,he,be;B.parameters={...B.parameters,docs:{...(ge=B.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    title: 'Duración Personalizada',
    message: 'Este toast dura 2 segundos',
    type: 'warning',
    duration: 2000,
    position: 'top-right',
    dismissible: true,
    showIcon: true
  },
  render: args => {
    const toast = new Toast(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    const showButton = document.createElement('button');
    showButton.textContent = 'Toast 2 Segundos';
    showButton.className = 'px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600';
    showButton.onclick = () => {
      document.body.insertAdjacentHTML('beforeend', toast.render());
      toast.show();
    };
    container.appendChild(showButton);
    return container;
  }
}`,...(be=(he=B.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var ye,we,fe;I.parameters={...I.parameters,docs:{...(ye=I.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    title: 'Galería',
    message: 'Muestra todos los tipos de toast',
    type: 'info',
    duration: 5000,
    position: 'top-right',
    dismissible: true,
    showIcon: true
  },
  render: args => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    const types = [{
      type: 'info',
      label: 'Info',
      color: 'blue'
    }, {
      type: 'success',
      label: 'Success',
      color: 'green'
    }, {
      type: 'warning',
      label: 'Warning',
      color: 'yellow'
    }, {
      type: 'error',
      label: 'Error',
      color: 'red'
    }];
    types.forEach(({
      type,
      label,
      color
    }) => {
      const button = document.createElement('button');
      button.textContent = \`Toast \${label}\`;
      button.className = \`px-4 py-2 mr-2 mb-2 bg-\${color}-500 text-white rounded hover:bg-\${color}-600\`;
      button.onclick = () => {
        const toast = Toast[type](\`Toast \${label}\`, \`Este es un toast de tipo \${label.toLowerCase()}\`, args);
        document.body.insertAdjacentHTML('beforeend', toast.render());
        toast.show();
      };
      container.appendChild(button);
    });
    return container;
  }
}`,...(fe=(we=I.parameters)==null?void 0:we.docs)==null?void 0:fe.source}}};var xe,Ce,ve;M.parameters={...M.parameters,docs:{...(xe=M.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    title: 'Toast Interactivo',
    message: 'Puedes cambiar las propiedades en tiempo real',
    type: 'info',
    duration: 5000,
    position: 'top-right',
    dismissible: true,
    showIcon: true
  },
  render: args => {
    const toast = new Toast(args);
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
    const typeSelect = document.createElement('select');
    typeSelect.className = 'px-3 py-1 border rounded';
    ['info', 'success', 'warning', 'error'].forEach(type => {
      const option = document.createElement('option');
      option.value = type;
      option.textContent = type.charAt(0).toUpperCase() + type.slice(1);
      option.selected = type === args.type;
      typeSelect.appendChild(option);
    });
    typeSelect.onchange = e => {
      args.type = e.target.value;
      toast.setType(e.target.value);
    };
    const positionSelect = document.createElement('select');
    positionSelect.className = 'px-3 py-1 border rounded';
    ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'].forEach(pos => {
      const option = document.createElement('option');
      option.value = pos;
      option.textContent = pos.replace('-', ' ').replace(/\\b\\w/g, l => l.toUpperCase());
      option.selected = pos === args.position;
      positionSelect.appendChild(option);
    });
    positionSelect.onchange = e => {
      args.position = e.target.value;
      toast.setPosition(e.target.value);
    };
    const durationInput = document.createElement('input');
    durationInput.type = 'number';
    durationInput.value = args.duration;
    durationInput.className = 'px-3 py-1 border rounded w-20';
    durationInput.placeholder = 'Duración';
    durationInput.onchange = e => {
      args.duration = parseInt(e.target.value);
      toast.setDuration(parseInt(e.target.value));
    };
    const dismissibleToggle = document.createElement('input');
    dismissibleToggle.type = 'checkbox';
    dismissibleToggle.checked = args.dismissible;
    dismissibleToggle.onchange = e => {
      args.dismissible = e.target.checked;
      toast.setDismissible(e.target.checked);
    };
    const iconToggle = document.createElement('input');
    iconToggle.type = 'checkbox';
    iconToggle.checked = args.showIcon;
    iconToggle.onchange = e => {
      args.showIcon = e.target.checked;
      toast.setShowIcon(e.target.checked);
    };
    controls.appendChild(document.createElement('label')).textContent = 'Tipo:';
    controls.appendChild(typeSelect);
    controls.appendChild(document.createElement('label')).textContent = 'Posición:';
    controls.appendChild(positionSelect);
    controls.appendChild(document.createElement('label')).textContent = 'Duración (ms):';
    controls.appendChild(durationInput);
    controls.appendChild(document.createElement('label')).textContent = 'Descartable:';
    controls.appendChild(dismissibleToggle);
    controls.appendChild(document.createElement('label')).textContent = 'Icono:';
    controls.appendChild(iconToggle);
    container.appendChild(controls);

    // Botón para mostrar toast
    const showButton = document.createElement('button');
    showButton.textContent = 'Mostrar Toast Interactivo';
    showButton.className = 'px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600';
    showButton.onclick = () => {
      document.body.insertAdjacentHTML('beforeend', toast.render());
      toast.show();
    };
    container.appendChild(showButton);
    return container;
  }
}`,...(ve=(Ce=M.parameters)==null?void 0:Ce.docs)==null?void 0:ve.source}}};const ke=["Basic","Info","Success","Warning","Error","Persistent","NonDismissible","NoIcon","Positions","WithCallback","LongMessage","TitleOnly","MessageOnly","CustomDuration","Gallery","Interactive"];export{m as Basic,B as CustomDuration,y as Error,I as Gallery,g as Info,M as Interactive,E as LongMessage,k as MessageOnly,x as NoIcon,f as NonDismissible,w as Persistent,C as Positions,h as Success,T as TitleOnly,b as Warning,v as WithCallback,ke as __namedExportsOrder,Te as default};
