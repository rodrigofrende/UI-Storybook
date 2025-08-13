class s{constructor(e={}){this.options={title:"",content:"",footer:"",size:"md",closeOnOverlay:!0,closeOnEscape:!0,showCloseButton:!0,persistent:!1,onOpen:null,onClose:null,...e},this.isOpen=!1,this.id=this.generateId(),this.overlayId=`modal-overlay-${this.id}`,this.modalId=`modal-${this.id}`}generateId(){return"modal-"+Math.random().toString(36).substr(2,9)}render(){const e=this.getSizeClasses();return`
      <div 
        class="fixed inset-0 z-50 overflow-y-auto hidden" 
        id="${this.overlayId}"
        aria-labelledby="modal-title-${this.id}"
        aria-modal="true"
        role="dialog"
      >
        <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <!-- Background overlay -->
          <div 
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            ${this.options.closeOnOverlay?'onclick="this.close()"':""}
          ></div>

          <!-- Modal panel -->
          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle ${e} sm:w-full">
            <!-- Header -->
            ${this.options.title||this.options.showCloseButton?`
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 border-b border-gray-200">
                <div class="flex items-center justify-between">
                  ${this.options.title?`
                    <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title-${this.id}">
                      ${this.options.title}
                    </h3>
                  `:""}
                  
                  ${this.options.showCloseButton?`
                    <button
                      type="button"
                      class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                      onclick="this.close()"
                      aria-label="Close modal"
                    >
                      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </button>
                  `:""}
                </div>
              </div>
            `:""}

            <!-- Content -->
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="text-gray-700">
                ${this.options.content}
              </div>
            </div>

            <!-- Footer -->
            ${this.options.footer?`
              <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse border-t border-gray-200">
                ${this.options.footer}
              </div>
            `:""}
          </div>
        </div>
      </div>
    `}getSizeClasses(){const e={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl","3xl":"sm:max-w-3xl","4xl":"sm:max-w-4xl","5xl":"sm:max-w-5xl","6xl":"sm:max-w-6xl","7xl":"sm:max-w-7xl",full:"sm:max-w-full sm:m-4"};return e[this.options.size]||e.md}open(){this.isOpen||(this.isOpen=!0,this.updateDisplay(),this.attachEventListeners(),document.body.style.overflow="hidden",this.focus(),typeof this.options.onOpen=="function"&&this.options.onOpen(),this.triggerEvent("open"))}close(){this.isOpen&&(this.isOpen=!1,this.updateDisplay(),document.body.style.overflow="",typeof this.options.onClose=="function"&&this.options.onClose(),this.triggerEvent("close"))}toggle(){this.isOpen?this.close():this.open()}setTitle(e){this.options.title=e,this.updateDisplay()}setContent(e){this.options.content=e,this.updateDisplay()}setFooter(e){this.options.footer=e,this.updateDisplay()}setSize(e){this.options.size=e,this.updateDisplay()}setCloseOnOverlay(e){this.options.closeOnOverlay=e}setCloseOnEscape(e){this.options.closeOnEscape=e}setShowCloseButton(e){this.options.showCloseButton=e,this.updateDisplay()}setPersistent(e){this.options.persistent=e}updateDisplay(){const e=document.getElementById(this.overlayId);e&&(this.isOpen?(e.classList.remove("hidden"),e.classList.add("block")):(e.classList.remove("block"),e.classList.add("hidden")))}attachEventListeners(){if(this.options.closeOnEscape){const e=n=>{n.key==="Escape"&&this.isOpen&&this.close()};document.addEventListener("keydown",e),this.escapeHandler=e}}removeEventListeners(){this.escapeHandler&&(document.removeEventListener("keydown",this.escapeHandler),this.escapeHandler=null)}focus(){const e=document.getElementById(this.modalId);if(e){const n=e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');n.length>0&&n[0].focus()}}triggerEvent(e,n={}){const t=new CustomEvent(`modal:${e}`,{detail:{modal:this,...n},bubbles:!0});document.dispatchEvent(t)}mount(e){typeof e=="string"&&(e=document.querySelector(e)),e&&(e.innerHTML=this.render())}isModalOpen(){return this.isOpen}destroy(){this.removeEventListeners();const e=document.getElementById(this.overlayId);e&&e.remove()}static confirm(e={}){const n={title:"Confirmar",content:"¿Estás seguro de que quieres continuar?",size:"sm",footer:`
        <button
          type="button"
          class="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
          onclick="this.close()"
        >
          Cancelar
        </button>
        <button
          type="button"
          class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
          onclick="this.confirm()"
        >
          Confirmar
        </button>
      `};return new s({...n,...e})}static alert(e={}){const n={title:"Alerta",size:"sm",footer:`
        <button
          type="button"
          class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto sm:text-sm"
          onclick="this.close()"
        >
          Aceptar
        </button>
      `};return new s({...n,...e})}}const ae={title:"Components/Layout/Modal",component:s,parameters:{docs:{description:{component:"Un componente de ventana modal versátil con múltiples tamaños, opciones de cierre y funcionalidades avanzadas."}}},argTypes:{title:{control:"text",description:"Título del modal"},content:{control:"text",description:"Contenido del modal"},footer:{control:"text",description:"Contenido del pie del modal"},size:{control:{type:"select"},options:["sm","md","lg","xl","2xl","3xl","4xl","5xl","6xl","7xl","full"],description:"Tamaño del modal"},closeOnOverlay:{control:"boolean",description:"Si se cierra al hacer clic en el overlay"},closeOnEscape:{control:"boolean",description:"Si se cierra con la tecla Escape"},showCloseButton:{control:"boolean",description:"Si mostrar el botón de cerrar"},persistent:{control:"boolean",description:"Si el modal es persistente (no se puede cerrar)"}}},p={args:{title:"Modal Básico",content:"Este es un modal básico con título y contenido. Puedes cerrarlo haciendo clic en el botón X o en el overlay.",footer:"",size:"md",closeOnOverlay:!0,closeOnEscape:!0,showCloseButton:!0,persistent:!1},render:o=>{const e=new s(o),n=document.createElement("div");n.style.padding="20px";const t=document.createElement("button");return t.textContent="Abrir Modal",t.className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",t.onclick=()=>e.open(),n.appendChild(t),e.mount(n),n}},m={args:{title:"Modal con Título",content:"Este modal tiene un título prominente que describe su propósito. Es útil para identificar claramente el contenido del modal.",footer:"",size:"md",closeOnOverlay:!0,closeOnEscape:!0,showCloseButton:!0,persistent:!1},render:o=>{const e=new s(o),n=document.createElement("div");n.style.padding="20px";const t=document.createElement("button");return t.textContent="Abrir Modal con Título",t.className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",t.onclick=()=>e.open(),n.appendChild(t),e.mount(n),n}},g={args:{title:"Modal con Pie de Página",content:"Este modal incluye un pie de página con botones de acción. Es ideal para modales que requieren confirmación o acciones del usuario.",footer:`
      <div class="flex justify-end space-x-3">
        <button
          type="button"
          class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onclick="this.close()"
        >
          Cancelar
        </button>
        <button
          type="button"
          class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onclick="alert('Acción confirmada!'); this.close()"
        >
          Confirmar
        </button>
      </div>
    `,size:"md",closeOnOverlay:!0,closeOnEscape:!0,showCloseButton:!0,persistent:!1},render:o=>{const e=new s(o),n=document.createElement("div");n.style.padding="20px";const t=document.createElement("button");return t.textContent="Abrir Modal con Footer",t.className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600",t.onclick=()=>e.open(),n.appendChild(t),e.mount(n),n}},x={args:{title:"Modal Pequeño",content:"Este es un modal de tamaño pequeño, ideal para confirmaciones rápidas o mensajes cortos.",footer:"",size:"sm",closeOnOverlay:!0,closeOnEscape:!0,showCloseButton:!0,persistent:!1},render:o=>{const e=new s(o),n=document.createElement("div");n.style.padding="20px";const t=document.createElement("button");return t.textContent="Abrir Modal Pequeño",t.className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600",t.onclick=()=>e.open(),n.appendChild(t),e.mount(n),n}},b={args:{title:"Modal Grande",content:"Este es un modal de tamaño grande que proporciona mucho espacio para contenido extenso, formularios complejos o galerías de imágenes.",footer:"",size:"lg",closeOnOverlay:!0,closeOnEscape:!0,showCloseButton:!0,persistent:!1},render:o=>{const e=new s(o),n=document.createElement("div");n.style.padding="20px";const t=document.createElement("button");return t.textContent="Abrir Modal Grande",t.className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",t.onclick=()=>e.open(),n.appendChild(t),e.mount(n),n}},f={args:{title:"Modal Extra Grande",content:"Este modal extra grande es perfecto para mostrar contenido muy extenso, tablas de datos, o cuando necesitas maximizar el espacio disponible.",footer:"",size:"xl",closeOnOverlay:!0,closeOnEscape:!0,showCloseButton:!0,persistent:!1},render:o=>{const e=new s(o),n=document.createElement("div");n.style.padding="20px";const t=document.createElement("button");return t.textContent="Abrir Modal Extra Grande",t.className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600",t.onclick=()=>e.open(),n.appendChild(t),e.mount(n),n}},h={args:{title:"Modal de Pantalla Completa",content:"Este modal ocupa toda la pantalla, proporcionando el máximo espacio posible para contenido extenso o experiencias inmersivas.",footer:"",size:"full",closeOnOverlay:!0,closeOnEscape:!0,showCloseButton:!0,persistent:!1},render:o=>{const e=new s(o),n=document.createElement("div");n.style.padding="20px";const t=document.createElement("button");return t.textContent="Abrir Modal Pantalla Completa",t.className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900",t.onclick=()=>e.open(),n.appendChild(t),e.mount(n),n}},y={args:{title:"Modal sin Botón de Cerrar",content:"Este modal no tiene botón de cerrar visible. Solo se puede cerrar haciendo clic en el overlay o presionando Escape.",footer:"",size:"md",closeOnOverlay:!0,closeOnEscape:!0,showCloseButton:!1,persistent:!1},render:o=>{const e=new s(o),n=document.createElement("div");n.style.padding="20px";const t=document.createElement("button");return t.textContent="Abrir Modal sin Botón de Cerrar",t.className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600",t.onclick=()=>e.open(),n.appendChild(t),e.mount(n),n}},v={args:{title:"Modal Persistente",content:"Este modal es persistente y no se puede cerrar fácilmente. Es útil para información crítica que el usuario debe leer completamente.",footer:`
      <div class="flex justify-center">
        <button
          type="button"
          class="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          onclick="this.close()"
        >
          Entendido
        </button>
      </div>
    `,size:"md",closeOnOverlay:!1,closeOnEscape:!1,showCloseButton:!1,persistent:!0},render:o=>{const e=new s(o),n=document.createElement("div");n.style.padding="20px";const t=document.createElement("button");return t.textContent="Abrir Modal Persistente",t.className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700",t.onclick=()=>e.open(),n.appendChild(t),e.mount(n),n}},E={args:{title:"Modal con Contenido HTML",content:`
      <div class="space-y-4">
        <h4 class="text-lg font-semibold text-gray-900">Información del Pokémon</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <div class="flex items-center space-x-3">
            <div class="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
              <span class="text-2xl">⚡</span>
            </div>
            <div>
              <h5 class="font-medium text-gray-900">Pikachu</h5>
              <p class="text-sm text-gray-600">Tipo: Eléctrico</p>
              <p class="text-sm text-gray-600">Altura: 0.4m</p>
            </div>
          </div>
        </div>
        <p class="text-gray-700">Pikachu es un Pokémon de tipo Eléctrico conocido por su cola en forma de rayo y su personalidad amigable.</p>
      </div>
    `,footer:`
      <div class="flex justify-end space-x-3">
        <button
          type="button"
          class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onclick="this.close()"
        >
          Cerrar
        </button>
        <button
          type="button"
          class="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          onclick="alert('¡Pikachu seleccionado!')"
        >
          Seleccionar
        </button>
      </div>
    `,size:"lg",closeOnOverlay:!0,closeOnEscape:!0,showCloseButton:!0,persistent:!1},render:o=>{const e=new s(o),n=document.createElement("div");n.style.padding="20px";const t=document.createElement("button");return t.textContent="Abrir Modal con HTML",t.className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600",t.onclick=()=>e.open(),n.appendChild(t),e.mount(n),n}},w={render:()=>{const o=document.createElement("div");o.style.padding="20px";const e=document.createElement("button");e.textContent="Mostrar Confirmación",e.className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mr-3",e.onclick=()=>{const t=s.confirm({title:"Confirmar Eliminación",content:"¿Estás seguro de que quieres eliminar este Pokémon? Esta acción no se puede deshacer.",footer:`
          <button
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            onclick="this.close()"
          >
            Cancelar
          </button>
          <button
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            onclick="alert('Pokémon eliminado!'); this.close()"
          >
            Eliminar
          </button>
        `});t.mount(o),t.open()};const n=document.createElement("button");return n.textContent="Mostrar Alerta",n.className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",n.onclick=()=>{const t=s.alert({title:"Información Importante",content:"Has alcanzado el nivel máximo de tu Pokémon. ¡Felicidades!",footer:`
          <button
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto sm:text-sm"
            onclick="this.close()"
          >
            ¡Entendido!
          </button>
        `});t.mount(o),t.open()},o.appendChild(e),o.appendChild(n),o}},C={args:{title:"Modal Interactivo",content:"Este modal tiene controles interactivos que te permiten cambiar sus propiedades en tiempo real.",footer:"",size:"lg",closeOnOverlay:!0,closeOnEscape:!0,showCloseButton:!0,persistent:!1},render:o=>{const e=new s(o),n=document.createElement("div");n.style.padding="20px";const t=document.createElement("div");t.style.marginBottom="20px",t.style.display="flex",t.style.gap="10px",t.style.flexWrap="wrap";const i=document.createElement("select");i.className="px-3 py-1 border rounded",["sm","md","lg","xl","2xl","3xl","4xl","5xl","6xl","7xl","full"].forEach(r=>{const u=document.createElement("option");u.value=r,u.textContent=r.toUpperCase(),u.selected=r==="lg",i.appendChild(u)}),i.onchange=r=>e.setSize(r.target.value);const a=document.createElement("input");a.type="text",a.placeholder="Nuevo título...",a.className="px-3 py-1 border rounded",a.value=o.title,a.onchange=r=>e.setTitle(r.target.value);const l=document.createElement("input");l.type="text",l.placeholder="Nuevo contenido...",l.className="px-3 py-1 border rounded",l.value=o.content,l.onchange=r=>e.setContent(r.target.value);const c=document.createElement("button");c.textContent="Toggle Overlay Close",c.className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600",c.onclick=()=>{o.closeOnOverlay=!o.closeOnOverlay,e.setCloseOnOverlay(o.closeOnOverlay),c.textContent=o.closeOnOverlay?"Disable Overlay Close":"Enable Overlay Close"},t.appendChild(i),t.appendChild(a),t.appendChild(l),t.appendChild(c);const d=document.createElement("button");return d.textContent="Abrir Modal Interactivo",d.className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600",d.onclick=()=>e.open(),n.appendChild(t),n.appendChild(d),e.mount(n),n}};var O,B,M;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    title: 'Modal Básico',
    content: 'Este es un modal básico con título y contenido. Puedes cerrarlo haciendo clic en el botón X o en el overlay.',
    footer: '',
    size: 'md',
    closeOnOverlay: true,
    closeOnEscape: true,
    showCloseButton: true,
    persistent: false
  },
  render: args => {
    const modal = new Modal(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    const openButton = document.createElement('button');
    openButton.textContent = 'Abrir Modal';
    openButton.className = 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600';
    openButton.onclick = () => modal.open();
    container.appendChild(openButton);
    modal.mount(container);
    return container;
  }
}`,...(M=(B=p.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var k,z,N;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: 'Modal con Título',
    content: 'Este modal tiene un título prominente que describe su propósito. Es útil para identificar claramente el contenido del modal.',
    footer: '',
    size: 'md',
    closeOnOverlay: true,
    closeOnEscape: true,
    showCloseButton: true,
    persistent: false
  },
  render: args => {
    const modal = new Modal(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    const openButton = document.createElement('button');
    openButton.textContent = 'Abrir Modal con Título';
    openButton.className = 'px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600';
    openButton.onclick = () => modal.open();
    container.appendChild(openButton);
    modal.mount(container);
    return container;
  }
}`,...(N=(z=m.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var I,S,A;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: 'Modal con Pie de Página',
    content: 'Este modal incluye un pie de página con botones de acción. Es ideal para modales que requieren confirmación o acciones del usuario.',
    footer: \`
      <div class="flex justify-end space-x-3">
        <button
          type="button"
          class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onclick="this.close()"
        >
          Cancelar
        </button>
        <button
          type="button"
          class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onclick="alert('Acción confirmada!'); this.close()"
        >
          Confirmar
        </button>
      </div>
    \`,
    size: 'md',
    closeOnOverlay: true,
    closeOnEscape: true,
    showCloseButton: true,
    persistent: false
  },
  render: args => {
    const modal = new Modal(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    const openButton = document.createElement('button');
    openButton.textContent = 'Abrir Modal con Footer';
    openButton.className = 'px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600';
    openButton.onclick = () => modal.open();
    container.appendChild(openButton);
    modal.mount(container);
    return container;
  }
}`,...(A=(S=g.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var P,F,T;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    title: 'Modal Pequeño',
    content: 'Este es un modal de tamaño pequeño, ideal para confirmaciones rápidas o mensajes cortos.',
    footer: '',
    size: 'sm',
    closeOnOverlay: true,
    closeOnEscape: true,
    showCloseButton: true,
    persistent: false
  },
  render: args => {
    const modal = new Modal(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    const openButton = document.createElement('button');
    openButton.textContent = 'Abrir Modal Pequeño';
    openButton.className = 'px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600';
    openButton.onclick = () => modal.open();
    container.appendChild(openButton);
    modal.mount(container);
    return container;
  }
}`,...(T=(F=x.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var q,j,L;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    title: 'Modal Grande',
    content: 'Este es un modal de tamaño grande que proporciona mucho espacio para contenido extenso, formularios complejos o galerías de imágenes.',
    footer: '',
    size: 'lg',
    closeOnOverlay: true,
    closeOnEscape: true,
    showCloseButton: true,
    persistent: false
  },
  render: args => {
    const modal = new Modal(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    const openButton = document.createElement('button');
    openButton.textContent = 'Abrir Modal Grande';
    openButton.className = 'px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600';
    openButton.onclick = () => modal.open();
    container.appendChild(openButton);
    modal.mount(container);
    return container;
  }
}`,...(L=(j=b.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var D,$,H;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: 'Modal Extra Grande',
    content: 'Este modal extra grande es perfecto para mostrar contenido muy extenso, tablas de datos, o cuando necesitas maximizar el espacio disponible.',
    footer: '',
    size: 'xl',
    closeOnOverlay: true,
    closeOnEscape: true,
    showCloseButton: true,
    persistent: false
  },
  render: args => {
    const modal = new Modal(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    const openButton = document.createElement('button');
    openButton.textContent = 'Abrir Modal Extra Grande';
    openButton.className = 'px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600';
    openButton.onclick = () => modal.open();
    container.appendChild(openButton);
    modal.mount(container);
    return container;
  }
}`,...(H=($=f.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var G,W,U;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    title: 'Modal de Pantalla Completa',
    content: 'Este modal ocupa toda la pantalla, proporcionando el máximo espacio posible para contenido extenso o experiencias inmersivas.',
    footer: '',
    size: 'full',
    closeOnOverlay: true,
    closeOnEscape: true,
    showCloseButton: true,
    persistent: false
  },
  render: args => {
    const modal = new Modal(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    const openButton = document.createElement('button');
    openButton.textContent = 'Abrir Modal Pantalla Completa';
    openButton.className = 'px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900';
    openButton.onclick = () => modal.open();
    container.appendChild(openButton);
    modal.mount(container);
    return container;
  }
}`,...(U=(W=h.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var X,_,J;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    title: 'Modal sin Botón de Cerrar',
    content: 'Este modal no tiene botón de cerrar visible. Solo se puede cerrar haciendo clic en el overlay o presionando Escape.',
    footer: '',
    size: 'md',
    closeOnOverlay: true,
    closeOnEscape: true,
    showCloseButton: false,
    persistent: false
  },
  render: args => {
    const modal = new Modal(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    const openButton = document.createElement('button');
    openButton.textContent = 'Abrir Modal sin Botón de Cerrar';
    openButton.className = 'px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600';
    openButton.onclick = () => modal.open();
    container.appendChild(openButton);
    modal.mount(container);
    return container;
  }
}`,...(J=(_=y.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var K,Q,R;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    title: 'Modal Persistente',
    content: 'Este modal es persistente y no se puede cerrar fácilmente. Es útil para información crítica que el usuario debe leer completamente.',
    footer: \`
      <div class="flex justify-center">
        <button
          type="button"
          class="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          onclick="this.close()"
        >
          Entendido
        </button>
      </div>
    \`,
    size: 'md',
    closeOnOverlay: false,
    closeOnEscape: false,
    showCloseButton: false,
    persistent: true
  },
  render: args => {
    const modal = new Modal(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    const openButton = document.createElement('button');
    openButton.textContent = 'Abrir Modal Persistente';
    openButton.className = 'px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700';
    openButton.onclick = () => modal.open();
    container.appendChild(openButton);
    modal.mount(container);
    return container;
  }
}`,...(R=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var V,Y,Z;E.parameters={...E.parameters,docs:{...(V=E.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: 'Modal con Contenido HTML',
    content: \`
      <div class="space-y-4">
        <h4 class="text-lg font-semibold text-gray-900">Información del Pokémon</h4>
        <div class="bg-gray-50 p-4 rounded-lg">
          <div class="flex items-center space-x-3">
            <div class="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
              <span class="text-2xl">⚡</span>
            </div>
            <div>
              <h5 class="font-medium text-gray-900">Pikachu</h5>
              <p class="text-sm text-gray-600">Tipo: Eléctrico</p>
              <p class="text-sm text-gray-600">Altura: 0.4m</p>
            </div>
          </div>
        </div>
        <p class="text-gray-700">Pikachu es un Pokémon de tipo Eléctrico conocido por su cola en forma de rayo y su personalidad amigable.</p>
      </div>
    \`,
    footer: \`
      <div class="flex justify-end space-x-3">
        <button
          type="button"
          class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onclick="this.close()"
        >
          Cerrar
        </button>
        <button
          type="button"
          class="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          onclick="alert('¡Pikachu seleccionado!')"
        >
          Seleccionar
        </button>
      </div>
    \`,
    size: 'lg',
    closeOnOverlay: true,
    closeOnEscape: true,
    showCloseButton: true,
    persistent: false
  },
  render: args => {
    const modal = new Modal(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    const openButton = document.createElement('button');
    openButton.textContent = 'Abrir Modal con HTML';
    openButton.className = 'px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600';
    openButton.onclick = () => modal.open();
    container.appendChild(openButton);
    modal.mount(container);
    return container;
  }
}`,...(Z=(Y=E.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,te;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    const confirmButton = document.createElement('button');
    confirmButton.textContent = 'Mostrar Confirmación';
    confirmButton.className = 'px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mr-3';
    confirmButton.onclick = () => {
      const confirmModal = Modal.confirm({
        title: 'Confirmar Eliminación',
        content: '¿Estás seguro de que quieres eliminar este Pokémon? Esta acción no se puede deshacer.',
        footer: \`
          <button
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            onclick="this.close()"
          >
            Cancelar
          </button>
          <button
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            onclick="alert('Pokémon eliminado!'); this.close()"
          >
            Eliminar
          </button>
        \`
      });
      confirmModal.mount(container);
      confirmModal.open();
    };
    const alertButton = document.createElement('button');
    alertButton.textContent = 'Mostrar Alerta';
    alertButton.className = 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600';
    alertButton.onclick = () => {
      const alertModal = Modal.alert({
        title: 'Información Importante',
        content: 'Has alcanzado el nivel máximo de tu Pokémon. ¡Felicidades!',
        footer: \`
          <button
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto sm:text-sm"
            onclick="this.close()"
          >
            ¡Entendido!
          </button>
        \`
      });
      alertModal.mount(container);
      alertModal.open();
    };
    container.appendChild(confirmButton);
    container.appendChild(alertButton);
    return container;
  }
}`,...(te=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var oe,se,re;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    title: 'Modal Interactivo',
    content: 'Este modal tiene controles interactivos que te permiten cambiar sus propiedades en tiempo real.',
    footer: '',
    size: 'lg',
    closeOnOverlay: true,
    closeOnEscape: true,
    showCloseButton: true,
    persistent: false
  },
  render: args => {
    const modal = new Modal(args);
    const container = document.createElement('div');
    container.style.padding = '20px';

    // Controles interactivos
    const controls = document.createElement('div');
    controls.style.marginBottom = '20px';
    controls.style.display = 'flex';
    controls.style.gap = '10px';
    controls.style.flexWrap = 'wrap';
    const sizeSelect = document.createElement('select');
    sizeSelect.className = 'px-3 py-1 border rounded';
    ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', 'full'].forEach(size => {
      const option = document.createElement('option');
      option.value = size;
      option.textContent = size.toUpperCase();
      option.selected = size === 'lg';
      sizeSelect.appendChild(option);
    });
    sizeSelect.onchange = e => modal.setSize(e.target.value);
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.placeholder = 'Nuevo título...';
    titleInput.className = 'px-3 py-1 border rounded';
    titleInput.value = args.title;
    titleInput.onchange = e => modal.setTitle(e.target.value);
    const contentInput = document.createElement('input');
    contentInput.type = 'text';
    contentInput.placeholder = 'Nuevo contenido...';
    contentInput.className = 'px-3 py-1 border rounded';
    contentInput.value = args.content;
    contentInput.onchange = e => modal.setContent(e.target.value);
    const closeOverlayToggle = document.createElement('button');
    closeOverlayToggle.textContent = 'Toggle Overlay Close';
    closeOverlayToggle.className = 'px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600';
    closeOverlayToggle.onclick = () => {
      args.closeOnOverlay = !args.closeOnOverlay;
      modal.setCloseOnOverlay(args.closeOnOverlay);
      closeOverlayToggle.textContent = args.closeOnOverlay ? 'Disable Overlay Close' : 'Enable Overlay Close';
    };
    controls.appendChild(sizeSelect);
    controls.appendChild(titleInput);
    controls.appendChild(contentInput);
    controls.appendChild(closeOverlayToggle);
    const openButton = document.createElement('button');
    openButton.textContent = 'Abrir Modal Interactivo';
    openButton.className = 'px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600';
    openButton.onclick = () => modal.open();
    container.appendChild(controls);
    container.appendChild(openButton);
    modal.mount(container);
    return container;
  }
}`,...(re=(se=C.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};const le=["Basic","WithTitle","WithFooter","Small","Large","ExtraLarge","FullScreen","NoCloseButton","Persistent","WithHTMLContent","Confirmation","Interactive"];export{p as Basic,w as Confirmation,f as ExtraLarge,h as FullScreen,C as Interactive,b as Large,y as NoCloseButton,v as Persistent,x as Small,g as WithFooter,E as WithHTMLContent,m as WithTitle,le as __namedExportsOrder,ae as default};
