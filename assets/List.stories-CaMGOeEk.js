class a{constructor(e={}){this.options={items:[],variant:"default",size:"md",showDividers:!0,showIcons:!1,showActions:!1,selectable:!1,multiSelect:!1,onSelect:null,onItemClick:null,...e},this.selectedItems=[],this.id=this.generateId()}generateId(){return"list-"+Math.random().toString(36).substr(2,9)}render(){const e=this.getVariantClasses(),t=this.getSizeClasses();return`
      <div class="w-full" id="${this.id}">
        <ul class="divide-y ${e.divider} ${e.background} ${e.border} rounded-lg overflow-hidden">
          ${this.options.items.map((s,o)=>this.renderListItem(s,o,e,t)).join("")}
        </ul>
        
        ${this.options.items.length===0?`
          <div class="text-center py-8 text-gray-500">
            <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
            <h3 class="mt-2 text-sm font-medium text-gray-900">No hay elementos</h3>
            <p class="mt-1 text-sm text-gray-500">Comienza agregando algunos elementos a la lista.</p>
          </div>
        `:""}
      </div>
    `}renderListItem(e,t,s,o){const c=this.selectedItems.includes(t),d=this.options.showActions&&e.actions,p=this.options.showIcons&&e.icon,i=this.options.selectable;return`
      <li class="relative ${s.item} ${c?s.selected:""} ${this.options.hoverable?s.hover:""} transition-colors duration-200">
        ${i?`
          <div class="flex items-center px-4 py-3">
            <input
              type="${this.options.multiSelect?"checkbox":"radio"}"
              name="list-selection"
              value="${t}"
              ${c?"checked":""}
              class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              onchange="this.toggleSelection(${t})"
            >
            <div class="ml-3 flex-1">
              ${this.renderItemContent(e,s,o)}
            </div>
            ${d?this.renderItemActions(e.actions):""}
          </div>
        `:`
          <div class="flex items-center px-4 py-3 ${this.options.onItemClick?"cursor-pointer":""}" ${this.options.onItemClick?`onclick="this.handleItemClick(${t})"`:""}>
            ${p?`
              <div class="flex-shrink-0 mr-3">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  ${e.icon}
                </svg>
              </div>
            `:""}
            <div class="flex-1">
              ${this.renderItemContent(e,s,o)}
            </div>
            ${d?this.renderItemActions(e.actions):""}
          </div>
        `}
      </li>
    `}renderItemContent(e,t,s){return`
      <div class="flex items-center justify-between">
        <div class="flex-1 min-w-0">
          ${e.title?`
            <p class="text-sm font-medium ${t.title} truncate">
              ${e.title}
            </p>
          `:""}
          
          ${e.subtitle?`
            <p class="text-sm ${t.subtitle} truncate">
              ${e.subtitle}
            </p>
          `:""}
          
          ${e.description?`
            <p class="text-sm ${t.description} mt-1">
              ${e.description}
            </p>
          `:""}
          
          ${e.meta?`
            <div class="flex items-center space-x-2 mt-2">
              ${e.meta.map(o=>`
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${o.variant?this.getMetaVariantClasses(o.variant):"bg-gray-100 text-gray-800"}">
                  ${o.icon?`
                    <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      ${o.icon}
                    </svg>
                  `:""}
                  ${o.text}
                </span>
              `).join("")}
            </div>
          `:""}
        </div>
        
        ${e.rightContent?`
          <div class="ml-4 flex-shrink-0">
            ${e.rightContent}
          </div>
        `:""}
      </div>
    `}renderItemActions(e){return`
      <div class="ml-4 flex-shrink-0 flex items-center space-x-2">
        ${e.map(t=>`
          <button
            type="button"
            class="p-1 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors duration-200"
            onclick="${t.onClick||""}"
            title="${t.title||""}"
            aria-label="${t.title||""}"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              ${t.icon}
            </svg>
          </button>
        `).join("")}
      </div>
    `}getMetaVariantClasses(e){const t={primary:"bg-blue-100 text-blue-800",success:"bg-green-100 text-green-800",warning:"bg-yellow-100 text-yellow-800",danger:"bg-red-100 text-red-800",info:"bg-indigo-100 text-indigo-800"};return t[e]||t.primary}getVariantClasses(){const e={default:{background:"bg-white",border:"border border-gray-200",divider:"divide-gray-200",item:"bg-white",selected:"bg-blue-50 border-blue-200",hover:"hover:bg-gray-50",title:"text-gray-900",subtitle:"text-gray-500",description:"text-gray-600"},bordered:{background:"bg-white",border:"border border-gray-200",divider:"divide-gray-200",item:"bg-white",selected:"bg-blue-50 border-blue-200",hover:"hover:bg-gray-50",title:"text-gray-900",subtitle:"text-gray-500",description:"text-gray-600"},striped:{background:"bg-white",border:"border border-gray-200",divider:"divide-gray-200",item:"bg-white even:bg-gray-50",selected:"bg-blue-50 border-blue-200",hover:"hover:bg-gray-100",title:"text-gray-900",subtitle:"text-gray-500",description:"text-gray-600"},hoverable:{background:"bg-white",border:"border border-gray-200",divider:"divide-gray-200",item:"bg-white",selected:"bg-blue-50 border-blue-200",hover:"hover:bg-gray-50",title:"text-gray-900",subtitle:"text-gray-500",description:"text-gray-600"},selectable:{background:"bg-white",border:"border border-gray-200",divider:"divide-gray-200",item:"bg-white",selected:"bg-blue-50 border-blue-200",hover:"hover:bg-gray-50",title:"text-gray-900",subtitle:"text-gray-500",description:"text-gray-600"}};return e[this.options.variant]||e.default}getSizeClasses(){const e={sm:"text-sm",md:"text-base",lg:"text-lg"};return e[this.options.size]||e.md}toggleSelection(e){if(this.options.multiSelect){const t=this.selectedItems.indexOf(e);t>-1?this.selectedItems.splice(t,1):this.selectedItems.push(e)}else this.selectedItems=[e];this.updateDisplay(),typeof this.options.onSelect=="function"&&this.options.onSelect(this.selectedItems,this.getSelectedItems()),this.triggerEvent("select",{selectedIndices:this.selectedItems,selectedItems:this.getSelectedItems()})}handleItemClick(e){typeof this.options.onItemClick=="function"&&this.options.onItemClick(e,this.options.items[e]),this.triggerEvent("itemClick",{index:e,item:this.options.items[e]})}setItems(e){this.options.items=e,this.selectedItems=[],this.updateDisplay()}addItem(e){this.options.items.push(e),this.updateDisplay()}removeItem(e){e>=0&&e<this.options.items.length&&(this.options.items.splice(e,1),this.selectedItems=this.selectedItems.map(t=>t>e?t-1:t).filter(t=>t>=0),this.updateDisplay())}updateItem(e,t){e>=0&&e<this.options.items.length&&(this.options.items[e]={...this.options.items[e],...t},this.updateDisplay())}setVariant(e){this.options.variant=e,this.updateDisplay()}setSize(e){this.options.size=e,this.updateDisplay()}setShowDividers(e){this.options.showDividers=e,this.updateDisplay()}setShowIcons(e){this.options.showIcons=e,this.updateDisplay()}setShowActions(e){this.options.showActions=e,this.updateDisplay()}setSelectable(e,t=!1){this.options.selectable=e,this.options.multiSelect=t,this.selectedItems=[],this.updateDisplay()}selectItem(e){this.options.selectable&&(this.options.multiSelect?this.selectedItems.includes(e)||this.selectedItems.push(e):this.selectedItems=[e],this.updateDisplay())}deselectItem(e){if(!this.options.selectable||!this.options.multiSelect)return;const t=this.selectedItems.indexOf(e);t>-1&&(this.selectedItems.splice(t,1),this.updateDisplay())}selectAll(){!this.options.selectable||!this.options.multiSelect||(this.selectedItems=this.options.items.map((e,t)=>t),this.updateDisplay())}deselectAll(){this.options.selectable&&(this.selectedItems=[],this.updateDisplay())}getSelectedItems(){return this.selectedItems.map(e=>this.options.items[e])}getSelectedIndices(){return[...this.selectedItems]}updateDisplay(){const e=document.getElementById(this.id);e&&(e.outerHTML=this.render())}triggerEvent(e,t={}){const s=new CustomEvent(`list:${e}`,{detail:{list:this,...t},bubbles:!0});document.dispatchEvent(s)}mount(e){typeof e=="string"&&(e=document.querySelector(e)),e&&(e.innerHTML=this.render(),this.attachEventListeners())}attachEventListeners(){this.options.selectable&&document.querySelectorAll(`#${this.id} input[type="checkbox"], #${this.id} input[type="radio"]`).forEach((t,s)=>{t.addEventListener("change",()=>{const o=parseInt(t.value);this.toggleSelection(o)})}),this.options.onItemClick&&document.querySelectorAll(`#${this.id} li`).forEach((t,s)=>{t.addEventListener("click",()=>{this.handleItemClick(s)})})}static navigation(e,t={}){return new a({items:e,variant:"default",showIcons:!0,...t})}static selectable(e,t={}){return new a({items:e,variant:"selectable",selectable:!0,multiSelect:!0,...t})}static bordered(e,t={}){return new a({items:e,variant:"bordered",showDividers:!0,...t})}static striped(e,t={}){return new a({items:e,variant:"striped",showDividers:!1,...t})}getHTML(){return this.render()}clone(){return new a({...this.options})}hasItems(){return this.options.items.length>0}getItemCount(){return this.options.items.length}getItem(e){return e>=0&&e<this.options.items.length?this.options.items[e]:null}clear(){this.options.items=[],this.selectedItems=[],this.updateDisplay()}filter(e){const t=this.options.items.filter(e);return new a({...this.options,items:t})}sort(e){const t=[...this.options.items].sort(e);return new a({...this.options,items:t})}}const ce={title:"Components/Layout/List",component:a,parameters:{docs:{description:{component:"Un componente de lista versátil con múltiples variantes, soporte para selección, iconos, acciones y diferentes estilos de presentación."}}},argTypes:{items:{control:"object",description:"Array de elementos de la lista"},variant:{control:{type:"select"},options:["default","bordered","striped","hoverable","selectable"],description:"Variante de diseño de la lista"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Tamaño de la lista"},showDividers:{control:"boolean",description:"Si mostrar divisores entre elementos"},showIcons:{control:"boolean",description:"Si mostrar iconos en los elementos"},showActions:{control:"boolean",description:"Si mostrar acciones en los elementos"},selectable:{control:"boolean",description:"Si la lista es seleccionable"},multiSelect:{control:"boolean",description:"Si permite selección múltiple"},onSelect:{control:"function",description:"Callback cuando se selecciona un elemento"},onItemClick:{control:"function",description:"Callback cuando se hace clic en un elemento"}}},n={args:{items:[{title:"Elemento 1",subtitle:"Subtítulo del elemento 1",description:"Descripción detallada del primer elemento de la lista."},{title:"Elemento 2",subtitle:"Subtítulo del elemento 2",description:"Descripción detallada del segundo elemento de la lista."},{title:"Elemento 3",subtitle:"Subtítulo del elemento 3",description:"Descripción detallada del tercer elemento de la lista."}],variant:"default",size:"md",showDividers:!0,showIcons:!1,showActions:!1,selectable:!1,multiSelect:!1,onSelect:null,onItemClick:null},render:r=>{const e=new a(r),t=document.createElement("div");return t.style.padding="20px",t.style.backgroundColor="#f9fafb",e.mount(t),t}},u={args:{...n.args,showIcons:!0,items:[{title:"Dashboard",subtitle:"Vista general del sistema",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>'},{title:"Usuarios",subtitle:"Gestión de usuarios",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>'},{title:"Configuración",subtitle:"Ajustes del sistema",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>'}]},render:n.render},m={args:{...n.args,showActions:!0,items:[{title:"Documento 1",subtitle:"Documento de Word",description:"Documento importante del proyecto",actions:[{icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>',title:"Editar",onClick:'console.log("Editar documento 1")'},{icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>',title:"Eliminar",onClick:'console.log("Eliminar documento 1")'}]},{title:"Documento 2",subtitle:"Documento de Excel",description:"Hoja de cálculo con datos del proyecto",actions:[{icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>',title:"Editar",onClick:'console.log("Editar documento 2")'},{icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>',title:"Eliminar",onClick:'console.log("Eliminar documento 2")'}]}]},render:n.render},h={args:{...n.args,items:[{title:"Tarea 1",subtitle:"Desarrollo de frontend",description:"Implementar la interfaz de usuario para el dashboard",meta:[{text:"Alta",variant:"danger"},{text:"En progreso",variant:"warning"},{text:"Frontend",variant:"info"}]},{title:"Tarea 2",subtitle:"Testing de backend",description:"Realizar pruebas unitarias y de integración",meta:[{text:"Media",variant:"warning"},{text:"Completada",variant:"success"},{text:"Backend",variant:"primary"}]},{title:"Tarea 3",subtitle:"Documentación",description:"Actualizar la documentación del proyecto",meta:[{text:"Baja",variant:"info"},{text:"Pendiente",variant:"primary"},{text:"Docs",variant:"success"}]}]},render:n.render},g={args:{...n.args,selectable:!0,multiSelect:!0,onSelect:(r,e)=>{console.log("Elementos seleccionados:",r,e)}},render:n.render},b={args:{...n.args,variant:"bordered"},render:n.render},v={args:{...n.args,variant:"striped"},render:n.render},k={args:{...n.args,variant:"hoverable",onItemClick:(r,e)=>{console.log("Elemento clickeado:",r,e)}},render:n.render},x={args:{...n.args,size:"sm"},render:n.render},y={args:{...n.args,size:"lg"},render:n.render},f={args:{...n.args,showIcons:!0,variant:"default",items:[{title:"Inicio",subtitle:"Página principal",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>'},{title:"Perfil",subtitle:"Información del usuario",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>'},{title:"Configuración",subtitle:"Ajustes del sistema",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>'}]},render:n.render},w={args:{...n.args,showActions:!0,variant:"bordered",items:[{title:"iPhone 13 Pro",subtitle:"Apple",description:"Smartphone de última generación con cámara profesional",rightContent:'<span class="text-lg font-bold text-green-600">$999</span>',actions:[{icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path>',title:"Agregar al carrito",onClick:'console.log("Agregar iPhone al carrito")'}]},{title:"MacBook Air M2",subtitle:"Apple",description:"Laptop ultraligera con chip M2 y 18 horas de batería",rightContent:'<span class="text-lg font-bold text-green-600">$1,199</span>',actions:[{icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path>',title:"Agregar al carrito",onClick:'console.log("Agregar MacBook al carrito")'}]}]},render:n.render},I={args:{...n.args,selectable:!0,multiSelect:!0,showActions:!0,onSelect:(r,e)=>{console.log("Elementos seleccionados:",r,e)},onItemClick:(r,e)=>{console.log("Elemento clickeado:",r,e)}},render:r=>{const e=new a(r),t=document.createElement("div");t.style.padding="20px",t.style.backgroundColor="#f9fafb";const s=document.createElement("div");s.style.marginBottom="20px",s.style.display="flex",s.style.gap="10px",s.style.flexWrap="wrap",s.style.alignItems="center";const o=document.createElement("select");o.className="px-3 py-1 border rounded",["default","bordered","striped","hoverable","selectable"].forEach(i=>{const l=document.createElement("option");l.value=i,l.textContent=i.charAt(0).toUpperCase()+i.slice(1),l.selected=i===r.variant,o.appendChild(l)}),o.onchange=i=>{r.variant=i.target.value,e.setVariant(i.target.value)};const c=document.createElement("select");c.className="px-3 py-1 border rounded",["sm","md","lg"].forEach(i=>{const l=document.createElement("option");l.value=i,l.textContent=i.toUpperCase(),l.selected=i===r.size,c.appendChild(l)}),c.onchange=i=>{r.size=i.target.value,e.setSize(i.target.value)};const d=document.createElement("button");d.textContent="Seleccionar Todo",d.className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600",d.onclick=()=>e.selectAll();const p=document.createElement("button");return p.textContent="Deseleccionar Todo",p.className="px-4 py-1 bg-gray-500 text-white rounded hover:bg-gray-600",p.onclick=()=>e.deselectAll(),s.appendChild(document.createElement("label")).textContent="Variante:",s.appendChild(o),s.appendChild(document.createElement("label")).textContent="Tamaño:",s.appendChild(c),s.appendChild(d),s.appendChild(p),t.appendChild(s),e.mount(t),t}};var C,S,E;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    items: [{
      title: 'Elemento 1',
      subtitle: 'Subtítulo del elemento 1',
      description: 'Descripción detallada del primer elemento de la lista.'
    }, {
      title: 'Elemento 2',
      subtitle: 'Subtítulo del elemento 2',
      description: 'Descripción detallada del segundo elemento de la lista.'
    }, {
      title: 'Elemento 3',
      subtitle: 'Subtítulo del elemento 3',
      description: 'Descripción detallada del tercer elemento de la lista.'
    }],
    variant: 'default',
    size: 'md',
    showDividers: true,
    showIcons: false,
    showActions: false,
    selectable: false,
    multiSelect: false,
    onSelect: null,
    onItemClick: null
  },
  render: args => {
    const list = new List(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    list.mount(container);
    return container;
  }
}`,...(E=(S=n.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var A,M,z;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    showIcons: true,
    items: [{
      title: 'Dashboard',
      subtitle: 'Vista general del sistema',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>'
    }, {
      title: 'Usuarios',
      subtitle: 'Gestión de usuarios',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>'
    }, {
      title: 'Configuración',
      subtitle: 'Ajustes del sistema',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>'
    }]
  },
  render: Basic.render
}`,...(z=(M=u.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var D,B,$;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    showActions: true,
    items: [{
      title: 'Documento 1',
      subtitle: 'Documento de Word',
      description: 'Documento importante del proyecto',
      actions: [{
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>',
        title: 'Editar',
        onClick: 'console.log("Editar documento 1")'
      }, {
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>',
        title: 'Eliminar',
        onClick: 'console.log("Eliminar documento 1")'
      }]
    }, {
      title: 'Documento 2',
      subtitle: 'Documento de Excel',
      description: 'Hoja de cálculo con datos del proyecto',
      actions: [{
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>',
        title: 'Editar',
        onClick: 'console.log("Editar documento 2")'
      }, {
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>',
        title: 'Eliminar',
        onClick: 'console.log("Eliminar documento 2")'
      }]
    }]
  },
  render: Basic.render
}`,...($=(B=m.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var j,H,L;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    items: [{
      title: 'Tarea 1',
      subtitle: 'Desarrollo de frontend',
      description: 'Implementar la interfaz de usuario para el dashboard',
      meta: [{
        text: 'Alta',
        variant: 'danger'
      }, {
        text: 'En progreso',
        variant: 'warning'
      }, {
        text: 'Frontend',
        variant: 'info'
      }]
    }, {
      title: 'Tarea 2',
      subtitle: 'Testing de backend',
      description: 'Realizar pruebas unitarias y de integración',
      meta: [{
        text: 'Media',
        variant: 'warning'
      }, {
        text: 'Completada',
        variant: 'success'
      }, {
        text: 'Backend',
        variant: 'primary'
      }]
    }, {
      title: 'Tarea 3',
      subtitle: 'Documentación',
      description: 'Actualizar la documentación del proyecto',
      meta: [{
        text: 'Baja',
        variant: 'info'
      }, {
        text: 'Pendiente',
        variant: 'primary'
      }, {
        text: 'Docs',
        variant: 'success'
      }]
    }]
  },
  render: Basic.render
}`,...(L=(H=h.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var V,T,F;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    selectable: true,
    multiSelect: true,
    onSelect: (selectedIndices, selectedItems) => {
      console.log('Elementos seleccionados:', selectedIndices, selectedItems);
    }
  },
  render: Basic.render
}`,...(F=(T=g.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var P,N,W;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    variant: 'bordered'
  },
  render: Basic.render
}`,...(W=(N=b.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var U,q,O;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    variant: 'striped'
  },
  render: Basic.render
}`,...(O=(q=v.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var G,R,J;k.parameters={...k.parameters,docs:{...(G=k.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    variant: 'hoverable',
    onItemClick: (index, item) => {
      console.log('Elemento clickeado:', index, item);
    }
  },
  render: Basic.render
}`,...(J=(R=k.parameters)==null?void 0:R.docs)==null?void 0:J.source}}};var K,Q,X;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    size: 'sm'
  },
  render: Basic.render
}`,...(X=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,_;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    size: 'lg'
  },
  render: Basic.render
}`,...(_=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};var ee,te,ne;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    showIcons: true,
    variant: 'default',
    items: [{
      title: 'Inicio',
      subtitle: 'Página principal',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>'
    }, {
      title: 'Perfil',
      subtitle: 'Información del usuario',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>'
    }, {
      title: 'Configuración',
      subtitle: 'Ajustes del sistema',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>'
    }]
  },
  render: Basic.render
}`,...(ne=(te=f.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var se,oe,ie;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    showActions: true,
    variant: 'bordered',
    items: [{
      title: 'iPhone 13 Pro',
      subtitle: 'Apple',
      description: 'Smartphone de última generación con cámara profesional',
      rightContent: '<span class="text-lg font-bold text-green-600">$999</span>',
      actions: [{
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path>',
        title: 'Agregar al carrito',
        onClick: 'console.log("Agregar iPhone al carrito")'
      }]
    }, {
      title: 'MacBook Air M2',
      subtitle: 'Apple',
      description: 'Laptop ultraligera con chip M2 y 18 horas de batería',
      rightContent: '<span class="text-lg font-bold text-green-600">$1,199</span>',
      actions: [{
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path>',
        title: 'Agregar al carrito',
        onClick: 'console.log("Agregar MacBook al carrito")'
      }]
    }]
  },
  render: Basic.render
}`,...(ie=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var re,ae,le;I.parameters={...I.parameters,docs:{...(re=I.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    selectable: true,
    multiSelect: true,
    showActions: true,
    onSelect: (selectedIndices, selectedItems) => {
      console.log('Elementos seleccionados:', selectedIndices, selectedItems);
    },
    onItemClick: (index, item) => {
      console.log('Elemento clickeado:', index, item);
    }
  },
  render: args => {
    const list = new List(args);
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
    const variantSelect = document.createElement('select');
    variantSelect.className = 'px-3 py-1 border rounded';
    ['default', 'bordered', 'striped', 'hoverable', 'selectable'].forEach(variant => {
      const option = document.createElement('option');
      option.value = variant;
      option.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
      option.selected = variant === args.variant;
      variantSelect.appendChild(option);
    });
    variantSelect.onchange = e => {
      args.variant = e.target.value;
      list.setVariant(e.target.value);
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
      list.setSize(e.target.value);
    };
    const selectAllButton = document.createElement('button');
    selectAllButton.textContent = 'Seleccionar Todo';
    selectAllButton.className = 'px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600';
    selectAllButton.onclick = () => list.selectAll();
    const deselectAllButton = document.createElement('button');
    deselectAllButton.textContent = 'Deseleccionar Todo';
    deselectAllButton.className = 'px-4 py-1 bg-gray-500 text-white rounded hover:bg-gray-600';
    deselectAllButton.onclick = () => list.deselectAll();
    controls.appendChild(document.createElement('label')).textContent = 'Variante:';
    controls.appendChild(variantSelect);
    controls.appendChild(document.createElement('label')).textContent = 'Tamaño:';
    controls.appendChild(sizeSelect);
    controls.appendChild(selectAllButton);
    controls.appendChild(deselectAllButton);
    container.appendChild(controls);

    // Lista
    list.mount(container);
    return container;
  }
}`,...(le=(ae=I.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};const de=["Basic","WithIcons","WithActions","WithMetadata","Selectable","Bordered","Striped","Hoverable","Small","Large","Navigation","Ecommerce","Interactive"];export{n as Basic,b as Bordered,w as Ecommerce,k as Hoverable,I as Interactive,y as Large,f as Navigation,g as Selectable,x as Small,v as Striped,m as WithActions,u as WithIcons,h as WithMetadata,de as __namedExportsOrder,ce as default};
