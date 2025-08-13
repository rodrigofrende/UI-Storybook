class c{constructor(e={}){this.options={columns:[],data:[],variant:"default",size:"md",showHeader:!0,showFooter:!1,sortable:!1,selectable:!1,multiSelect:!1,searchable:!1,pagination:!1,itemsPerPage:10,onSort:null,onSelect:null,onRowClick:null,...e},this.sortColumn=null,this.sortDirection="asc",this.selectedRows=[],this.currentPage=1,this.searchTerm="",this.id=this.generateId()}generateId(){return"table-"+Math.random().toString(36).substr(2,9)}render(){const e=this.getVariantClasses();return this.getSizeClasses(),`
      <div class="w-full" id="${this.id}">
        ${this.options.searchable?this.renderSearch():""}
        
        <div class="overflow-x-auto">
          <table class="min-w-full ${e.table}">
            ${this.options.showHeader?this.renderHeader():""}
            ${this.renderBody()}
            ${this.options.showFooter?this.renderFooter():""}
          </table>
        </div>
        
        ${this.options.pagination?this.renderPagination():""}
      </div>
    `}renderSearch(){return`
      <div class="mb-4">
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input
            type="text"
            class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Buscar en la tabla..."
            value="${this.searchTerm}"
            oninput="this.setSearchTerm(this.value)"
          >
        </div>
      </div>
    `}renderHeader(){const e=this.getVariantClasses(),t=this.getSizeClasses();return`
      <thead class="${e.header}">
        <tr>
          ${this.options.selectable?`
            <th class="${t} ${e.headerCell} w-12">
              ${this.options.multiSelect?`
                <input
                  type="checkbox"
                  class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  onchange="this.toggleSelectAll(this.checked)"
                >
              `:""}
            </th>
          `:""}
          
          ${this.options.columns.map(a=>`
            <th class="${t} ${e.headerCell} ${a.sortable&&this.options.sortable?"cursor-pointer hover:bg-gray-50":""}" ${a.sortable&&this.options.sortable?`onclick="this.sortByColumn('${a.key}')"`:""}>
              <div class="flex items-center justify-between">
                <span>${a.label}</span>
                ${a.sortable&&this.options.sortable?`
                  <div class="ml-2">
                    ${this.sortColumn===a.key?`
                      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        ${this.sortDirection==="asc"?`
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
                        `:`
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        `}
                      </svg>
                    `:`
                      <svg class="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
                      </svg>
                    `}
                  </div>
                `:""}
              </div>
            </th>
          `).join("")}
        </tr>
      </thead>
    `}renderBody(){const e=this.getVariantClasses(),t=this.getSizeClasses(),a=this.getFilteredData(),i=this.options.pagination?this.getPaginatedData(a):a;return`
      <tbody class="${e.body}">
        ${i.map((l,r)=>`
          <tr class="${e.row} ${this.selectedRows.includes(r)?e.selectedRow:""} ${this.options.hoverable?e.hoverRow:""} ${this.options.onRowClick?"cursor-pointer":""}" ${this.options.onRowClick?`onclick="this.handleRowClick(${r})"`:""}>
            ${this.options.selectable?`
              <td class="${t} ${e.cell} w-12">
                <input
                  type="${this.options.multiSelect?"checkbox":"radio"}"
                  name="table-selection"
                  value="${r}"
                  ${this.selectedRows.includes(r)?"checked":""}
                  class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  onchange="this.toggleRowSelection(${r})"
                >
              </td>
            `:""}
            
            ${this.options.columns.map(u=>`
              <td class="${t} ${e.cell}">
                ${this.renderCellValue(l,u)}
              </td>
            `).join("")}
          </tr>
        `).join("")}
        
        ${i.length===0?`
          <tr>
            <td colspan="${this.options.columns.length+(this.options.selectable?1:0)}" class="px-6 py-4 text-center text-gray-500">
              No se encontraron resultados
            </td>
          </tr>
        `:""}
      </tbody>
    `}renderFooter(){const e=this.getVariantClasses(),t=this.getSizeClasses();return`
      <tfoot class="${e.footer}">
        <tr>
          ${this.options.selectable?`
            <td class="${t} ${e.footerCell}"></td>
          `:""}
          
          ${this.options.columns.map(a=>`
            <td class="${t} ${e.footerCell}">
              ${a.footer?a.footer:""}
            </td>
          `).join("")}
        </tr>
      </tfoot>
    `}renderPagination(){const e=Math.ceil(this.getFilteredData().length/this.options.itemsPerPage);return e<=1?"":`
      <div class="mt-4 flex items-center justify-between">
        <div class="text-sm text-gray-700">
          Mostrando 
          <span class="font-medium">${(this.currentPage-1)*this.options.itemsPerPage+1}</span>
          a 
          <span class="font-medium">${Math.min(this.currentPage*this.options.itemsPerPage,this.getFilteredData().length)}</span>
          de 
          <span class="font-medium">${this.getFilteredData().length}</span>
          resultados
        </div>
        
        <div class="flex space-x-2">
          <button
            type="button"
            class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            ${this.currentPage===1?"disabled":""}
            onclick="this.previousPage()"
          >
            Anterior
          </button>
          
          <span class="px-3 py-2 text-sm text-gray-700">
            Página ${this.currentPage} de ${e}
          </span>
          
          <button
            type="button"
            class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            ${this.currentPage===e?"disabled":""}
            onclick="this.nextPage()"
          >
            Siguiente
          </button>
        </div>
      </div>
    `}renderCellValue(e,t){return t.render?t.render(e[t.key],e):t.format?t.format(e[t.key],e):e[t.key]||""}getVariantClasses(){const e={default:{table:"divide-y divide-gray-200",header:"bg-gray-50",headerCell:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",body:"bg-white divide-y divide-gray-200",row:"bg-white",selectedRow:"bg-blue-50",hoverRow:"hover:bg-gray-50",cell:"px-6 py-4 whitespace-nowrap text-sm text-gray-900",footer:"bg-gray-50",footerCell:"px-6 py-3 text-left text-xs font-medium text-gray-500"},striped:{table:"divide-y divide-gray-200",header:"bg-gray-50",headerCell:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",body:"bg-white divide-y divide-gray-200",row:"bg-white even:bg-gray-50",selectedRow:"bg-blue-50",hoverRow:"hover:bg-gray-100",cell:"px-6 py-4 whitespace-nowrap text-sm text-gray-900",footer:"bg-gray-50",footerCell:"px-6 py-3 text-left text-xs font-medium text-gray-500"},bordered:{table:"border border-gray-200",header:"bg-gray-50",headerCell:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-200",body:"bg-white",row:"bg-white",selectedRow:"bg-blue-50",hoverRow:"hover:bg-gray-50",cell:"px-6 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-200",footer:"bg-gray-50",footerCell:"px-6 py-3 text-left text-xs font-medium text-gray-500 border border-gray-200"},hoverable:{table:"divide-y divide-gray-200",header:"bg-gray-50",headerCell:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",body:"bg-white divide-y divide-gray-200",row:"bg-white",selectedRow:"bg-blue-50",hoverRow:"hover:bg-gray-50",cell:"px-6 py-4 whitespace-nowrap text-sm text-gray-900",footer:"bg-gray-50",footerCell:"px-6 py-3 text-left text-xs font-medium text-gray-500"}};return e[this.options.variant]||e.default}getSizeClasses(){const e={sm:"text-xs",md:"text-sm",lg:"text-base"};return e[this.options.size]||e.md}sortByColumn(e){this.options.sortable&&(this.sortColumn===e?this.sortDirection=this.sortDirection==="asc"?"desc":"asc":(this.sortColumn=e,this.sortDirection="asc"),this.updateDisplay(),typeof this.options.onSort=="function"&&this.options.onSort(e,this.sortDirection),this.triggerEvent("sort",{column:e,direction:this.sortDirection}))}toggleRowSelection(e){if(this.options.multiSelect){const t=this.selectedRows.indexOf(e);t>-1?this.selectedRows.splice(t,1):this.selectedRows.push(e)}else this.selectedRows=[e];this.updateDisplay(),typeof this.options.onSelect=="function"&&this.options.onSelect(this.selectedRows,this.getSelectedRows()),this.triggerEvent("select",{selectedIndices:this.selectedRows,selectedRows:this.getSelectedRows()})}toggleSelectAll(e){if(this.options.multiSelect){if(e){const t=this.getFilteredData();this.selectedRows=Array.from({length:t.length},(a,i)=>i)}else this.selectedRows=[];this.updateDisplay(),typeof this.options.onSelect=="function"&&this.options.onSelect(this.selectedRows,this.getSelectedRows())}}handleRowClick(e){typeof this.options.onRowClick=="function"&&this.options.onRowClick(e,this.options.data[e]),this.triggerEvent("rowClick",{index:e,row:this.options.data[e]})}setSearchTerm(e){this.searchTerm=e,this.currentPage=1,this.updateDisplay()}previousPage(){this.currentPage>1&&(this.currentPage--,this.updateDisplay())}nextPage(){const e=Math.ceil(this.getFilteredData().length/this.options.itemsPerPage);this.currentPage<e&&(this.currentPage++,this.updateDisplay())}getFilteredData(){return this.searchTerm?this.options.data.filter(e=>this.options.columns.some(t=>{const a=e[t.key];return a==null?!1:a.toString().toLowerCase().includes(this.searchTerm.toLowerCase())})):this.options.data}getPaginatedData(e){if(!this.options.pagination)return e;const t=(this.currentPage-1)*this.options.itemsPerPage,a=t+this.options.itemsPerPage;return e.slice(t,a)}getSortedData(e){if(!this.sortColumn)return e;const t=this.options.columns.find(a=>a.key===this.sortColumn);return!t||!t.sortable?e:[...e].sort((a,i)=>{let l=a[this.sortColumn],r=i[this.sortColumn];return t.sortType==="number"?(l=parseFloat(l)||0,r=parseFloat(r)||0):t.sortType==="date"?(l=new Date(l).getTime(),r=new Date(r).getTime()):(l=String(l).toLowerCase(),r=String(r).toLowerCase()),l<r?this.sortDirection==="asc"?-1:1:l>r?this.sortDirection==="asc"?1:-1:0})}setColumns(e){this.options.columns=e,this.updateDisplay()}setData(e){this.options.data=e,this.selectedRows=[],this.currentPage=1,this.updateDisplay()}addRow(e){this.options.data.push(e),this.updateDisplay()}removeRow(e){e>=0&&e<this.options.data.length&&(this.options.data.splice(e,1),this.selectedRows=this.selectedRows.map(t=>t>e?t-1:t).filter(t=>t>=0),this.updateDisplay())}updateRow(e,t){e>=0&&e<this.options.data.length&&(this.options.data[e]={...this.options.data[e],...t},this.updateDisplay())}setVariant(e){this.options.variant=e,this.updateDisplay()}setSize(e){this.options.size=e,this.updateDisplay()}setShowHeader(e){this.options.showHeader=e,this.updateDisplay()}setShowFooter(e){this.options.showFooter=e,this.updateDisplay()}setSortable(e){this.options.sortable=e,this.updateDisplay()}setSelectable(e,t=!1){this.options.selectable=e,this.options.multiSelect=t,this.selectedRows=[],this.updateDisplay()}setSearchable(e){this.options.searchable=e,this.updateDisplay()}setPagination(e,t=10){this.options.pagination=e,this.options.itemsPerPage=t,this.currentPage=1,this.updateDisplay()}getSelectedRows(){return this.selectedRows.map(e=>this.options.data[e])}getSelectedIndices(){return[...this.selectedRows]}updateDisplay(){const e=document.getElementById(this.id);e&&(e.outerHTML=this.render())}triggerEvent(e,t={}){const a=new CustomEvent(`table:${e}`,{detail:{table:this,...t},bubbles:!0});document.dispatchEvent(a)}mount(e){typeof e=="string"&&(e=document.querySelector(e)),e&&(e.innerHTML=this.render(),this.attachEventListeners())}attachEventListeners(){this.options.sortable&&document.querySelectorAll(`#${this.id} th[onclick*="sortByColumn"]`).forEach(t=>{t.addEventListener("click",a=>{const i=a.target.closest("th").getAttribute("onclick").match(/'([^']+)'/)[1];this.sortByColumn(i)})}),this.options.selectable&&document.querySelectorAll(`#${this.id} input[type="checkbox"], #${this.id} input[type="radio"]`).forEach((t,a)=>{t.addEventListener("change",()=>{const i=parseInt(t.value);this.toggleRowSelection(i)})}),this.options.onRowClick&&document.querySelectorAll(`#${this.id} tbody tr`).forEach((t,a)=>{t.addEventListener("click",()=>{this.handleRowClick(a)})})}static data(e,t,a={}){return new c({columns:e,data:t,variant:"default",...a})}static sortable(e,t,a={}){return new c({columns:e,data:t,variant:"default",sortable:!0,...a})}static selectable(e,t,a={}){return new c({columns:e,data:t,variant:"default",selectable:!0,multiSelect:!0,...a})}static bordered(e,t,a={}){return new c({columns:e,data:t,variant:"bordered",...a})}static striped(e,t,a={}){return new c({columns:e,data:t,variant:"striped",...a})}getHTML(){return this.render()}clone(){return new c({...this.options})}hasData(){return this.options.data.length>0}getRowCount(){return this.options.data.length}getRow(e){return e>=0&&e<this.options.data.length?this.options.data[e]:null}clear(){this.options.data=[],this.selectedRows=[],this.currentPage=1,this.updateDisplay()}filter(e){const t=this.options.data.filter(e);return new c({...this.options,data:t})}sort(e){const t=[...this.options.data].sort(e);return new c({...this.options,data:t})}}const me={title:"Components/Layout/Table",component:c,parameters:{docs:{description:{component:"Un componente de tabla versátil con múltiples variantes, ordenamiento, selección, búsqueda y paginación integrada."}}},argTypes:{columns:{control:"object",description:"Array de columnas con key, label, sortable, render y format opcionales"},data:{control:"object",description:"Array de datos para las filas de la tabla"},variant:{control:{type:"select"},options:["default","striped","bordered","hoverable"],description:"Variante de diseño de la tabla"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Tamaño de la tabla"},showHeader:{control:"boolean",description:"Si mostrar el encabezado de la tabla"},showFooter:{control:"boolean",description:"Si mostrar el pie de la tabla"},sortable:{control:"boolean",description:"Si la tabla es ordenable"},selectable:{control:"boolean",description:"Si la tabla es seleccionable"},multiSelect:{control:"boolean",description:"Si permite selección múltiple"},searchable:{control:"boolean",description:"Si la tabla tiene búsqueda"},pagination:{control:"boolean",description:"Si la tabla tiene paginación"},itemsPerPage:{control:{type:"range",min:5,max:50,step:5},description:"Elementos por página"},onSort:{control:"function",description:"Callback cuando se ordena una columna"},onSelect:{control:"function",description:"Callback cuando se selecciona una fila"},onRowClick:{control:"function",description:"Callback cuando se hace clic en una fila"}}},n={args:{columns:[{key:"name",label:"Nombre",sortable:!0},{key:"email",label:"Email",sortable:!0},{key:"role",label:"Rol",sortable:!0},{key:"status",label:"Estado",sortable:!0}],data:[{name:"Juan Pérez",email:"juan@ejemplo.com",role:"Administrador",status:"Activo"},{name:"María García",email:"maria@ejemplo.com",role:"Usuario",status:"Activo"},{name:"Carlos López",email:"carlos@ejemplo.com",role:"Editor",status:"Inactivo"},{name:"Ana Martínez",email:"ana@ejemplo.com",role:"Usuario",status:"Activo"}],variant:"default",size:"md",showHeader:!0,showFooter:!1,sortable:!1,selectable:!1,multiSelect:!1,searchable:!1,pagination:!1,itemsPerPage:10,onSort:null,onSelect:null,onRowClick:null},render:o=>{const e=new c(o),t=document.createElement("div");return t.style.padding="20px",t.style.backgroundColor="#f9fafb",e.mount(t),t}},p={args:{...n.args,sortable:!0,onSort:(o,e)=>{console.log("Ordenando por:",o,"dirección:",e)}},render:n.render},m={args:{...n.args,selectable:!0,multiSelect:!0,onSelect:(o,e)=>{console.log("Filas seleccionadas:",o,e)}},render:n.render},h={args:{...n.args,searchable:!0,data:[{name:"Juan Pérez",email:"juan@ejemplo.com",role:"Administrador",status:"Activo"},{name:"María García",email:"maria@ejemplo.com",role:"Usuario",status:"Activo"},{name:"Carlos López",email:"carlos@ejemplo.com",role:"Editor",status:"Inactivo"},{name:"Ana Martínez",email:"ana@ejemplo.com",role:"Usuario",status:"Activo"},{name:"Pedro Sánchez",email:"pedro@ejemplo.com",role:"Editor",status:"Activo"},{name:"Laura Torres",email:"laura@ejemplo.com",role:"Usuario",status:"Inactivo"}]},render:n.render},g={args:{...n.args,pagination:!0,itemsPerPage:3,data:[{name:"Juan Pérez",email:"juan@ejemplo.com",role:"Administrador",status:"Activo"},{name:"María García",email:"maria@ejemplo.com",role:"Usuario",status:"Activo"},{name:"Carlos López",email:"carlos@ejemplo.com",role:"Editor",status:"Inactivo"},{name:"Ana Martínez",email:"ana@ejemplo.com",role:"Usuario",status:"Activo"},{name:"Pedro Sánchez",email:"pedro@ejemplo.com",role:"Editor",status:"Activo"},{name:"Laura Torres",email:"laura@ejemplo.com",role:"Usuario",status:"Inactivo"},{name:"Roberto Vega",email:"roberto@ejemplo.com",role:"Administrador",status:"Activo"},{name:"Carmen Ruiz",email:"carmen@ejemplo.com",role:"Usuario",status:"Activo"}]},render:n.render},b={args:{...n.args,variant:"striped"},render:n.render},y={args:{...n.args,variant:"bordered"},render:n.render},v={args:{...n.args,variant:"hoverable",onRowClick:(o,e)=>{console.log("Fila clickeada:",o,e)}},render:n.render},f={args:{...n.args,size:"sm"},render:n.render},w={args:{...n.args,size:"lg"},render:n.render},x={args:{columns:[{key:"name",label:"Producto",sortable:!0},{key:"category",label:"Categoría",sortable:!0},{key:"price",label:"Precio",sortable:!0,sortType:"number"},{key:"stock",label:"Stock",sortable:!0,sortType:"number"},{key:"status",label:"Estado",sortable:!0}],data:[{name:"iPhone 13 Pro",category:"Electrónicos",price:999,stock:15,status:"Disponible"},{name:"MacBook Air M2",category:"Computadoras",price:1199,stock:8,status:"Disponible"},{name:"iPad Air",category:"Tablets",price:599,stock:0,status:"Agotado"},{name:"AirPods Pro",category:"Audio",price:249,stock:25,status:"Disponible"},{name:"Apple Watch",category:"Wearables",price:399,stock:12,status:"Disponible"}],variant:"bordered",sortable:!0,selectable:!0,multiSelect:!0},render:n.render},k={args:{columns:[{key:"avatar",label:"Avatar",render:o=>'<div class="w-8 h-8 bg-gray-300 rounded-full"></div>'},{key:"name",label:"Nombre",sortable:!0},{key:"email",label:"Email",sortable:!0},{key:"role",label:"Rol",sortable:!0},{key:"lastLogin",label:"Último acceso",sortable:!0,sortType:"date"},{key:"actions",label:"Acciones",render:(o,e)=>`
        <div class="flex space-x-2">
          <button class="p-1 text-blue-600 hover:bg-blue-100 rounded" onclick="console.log('Editar ${e.name}')">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
            </svg>
          </button>
          <button class="p-1 text-red-600 hover:bg-red-100 rounded" onclick="console.log('Eliminar ${e.name}')">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
            </svg>
          </button>
        </div>
      `}],data:[{name:"Juan Pérez",email:"juan@ejemplo.com",role:"Administrador",lastLogin:"2024-12-15T10:30:00Z"},{name:"María García",email:"maria@ejemplo.com",role:"Usuario",lastLogin:"2024-12-14T15:45:00Z"},{name:"Carlos López",email:"carlos@ejemplo.com",role:"Editor",lastLogin:"2024-12-13T09:15:00Z"},{name:"Ana Martínez",email:"ana@ejemplo.com",role:"Usuario",lastLogin:"2024-12-15T08:20:00Z"}],variant:"hoverable",sortable:!0,onRowClick:(o,e)=>{console.log("Usuario clickeado:",e.name)}},render:n.render},C={args:{columns:[{key:"date",label:"Fecha",sortable:!0,sortType:"date"},{key:"description",label:"Descripción",sortable:!0},{key:"category",label:"Categoría",sortable:!0},{key:"amount",label:"Monto",sortable:!0,sortType:"number",render:o=>`<span class="font-mono ${o>=0?"text-green-600":"text-red-600"}">${o>=0?"+":""}$${Math.abs(o).toFixed(2)}</span>`},{key:"balance",label:"Balance",sortable:!0,sortType:"number",render:o=>`<span class="font-mono font-semibold">$${o.toFixed(2)}</span>`}],data:[{date:"2024-12-15",description:"Salario",category:"Ingresos",amount:2500,balance:2500},{date:"2024-12-14",description:"Supermercado",category:"Alimentación",amount:-120.5,balance:2379.5},{date:"2024-12-13",description:"Gasolina",category:"Transporte",amount:-45,balance:2334.5},{date:"2024-12-12",description:"Freelance",category:"Ingresos",amount:300,balance:2634.5},{date:"2024-12-11",description:"Restaurante",category:"Entretenimiento",amount:-65,balance:2569.5}],variant:"striped",sortable:!0,showFooter:!0},render:n.render},S={args:{...n.args,sortable:!0,selectable:!0,multiSelect:!0,searchable:!0,pagination:!0,itemsPerPage:5,onSort:(o,e)=>{console.log("Ordenando por:",o,"dirección:",e)},onSelect:(o,e)=>{console.log("Filas seleccionadas:",o,e)},onRowClick:(o,e)=>{console.log("Fila clickeada:",o,e)}},render:o=>{const e=new c(o),t=document.createElement("div");t.style.padding="20px",t.style.backgroundColor="#f9fafb";const a=document.createElement("div");a.style.marginBottom="20px",a.style.display="flex",a.style.gap="10px",a.style.flexWrap="wrap",a.style.alignItems="center";const i=document.createElement("select");i.className="px-3 py-1 border rounded",["default","striped","bordered","hoverable"].forEach(s=>{const d=document.createElement("option");d.value=s,d.textContent=s.charAt(0).toUpperCase()+s.slice(1),d.selected=s===o.variant,i.appendChild(d)}),i.onchange=s=>{o.variant=s.target.value,e.setVariant(s.target.value)};const l=document.createElement("select");l.className="px-3 py-1 border rounded",["sm","md","lg"].forEach(s=>{const d=document.createElement("option");d.value=s,d.textContent=s.toUpperCase(),d.selected=s===o.size,l.appendChild(d)}),l.onchange=s=>{o.size=s.target.value,e.setSize(s.target.value)};const r=document.createElement("button");r.textContent="Agregar Fila",r.className="px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600",r.onclick=()=>{const s={name:`Usuario ${Math.floor(Math.random()*1e3)}`,email:`usuario${Math.floor(Math.random()*1e3)}@ejemplo.com`,role:["Usuario","Editor","Administrador"][Math.floor(Math.random()*3)],status:Math.random()>.5?"Activo":"Inactivo"};e.addRow(s)};const u=document.createElement("button");return u.textContent="Limpiar",u.className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600",u.onclick=()=>e.clear(),a.appendChild(document.createElement("label")).textContent="Variante:",a.appendChild(i),a.appendChild(document.createElement("label")).textContent="Tamaño:",a.appendChild(l),a.appendChild(r),a.appendChild(u),t.appendChild(a),e.mount(t),t}};var E,P,R;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: 'name',
      label: 'Nombre',
      sortable: true
    }, {
      key: 'email',
      label: 'Email',
      sortable: true
    }, {
      key: 'role',
      label: 'Rol',
      sortable: true
    }, {
      key: 'status',
      label: 'Estado',
      sortable: true
    }],
    data: [{
      name: 'Juan Pérez',
      email: 'juan@ejemplo.com',
      role: 'Administrador',
      status: 'Activo'
    }, {
      name: 'María García',
      email: 'maria@ejemplo.com',
      role: 'Usuario',
      status: 'Activo'
    }, {
      name: 'Carlos López',
      email: 'carlos@ejemplo.com',
      role: 'Editor',
      status: 'Inactivo'
    }, {
      name: 'Ana Martínez',
      email: 'ana@ejemplo.com',
      role: 'Usuario',
      status: 'Activo'
    }],
    variant: 'default',
    size: 'md',
    showHeader: true,
    showFooter: false,
    sortable: false,
    selectable: false,
    multiSelect: false,
    searchable: false,
    pagination: false,
    itemsPerPage: 10,
    onSort: null,
    onSelect: null,
    onRowClick: null
  },
  render: args => {
    const table = new Table(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    table.mount(container);
    return container;
  }
}`,...(R=(P=n.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var A,$,D;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    sortable: true,
    onSort: (column, direction) => {
      console.log('Ordenando por:', column, 'dirección:', direction);
    }
  },
  render: Basic.render
}`,...(D=($=p.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var j,z,B;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    selectable: true,
    multiSelect: true,
    onSelect: (selectedIndices, selectedRows) => {
      console.log('Filas seleccionadas:', selectedIndices, selectedRows);
    }
  },
  render: Basic.render
}`,...(B=(z=m.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var M,F,L;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    searchable: true,
    data: [{
      name: 'Juan Pérez',
      email: 'juan@ejemplo.com',
      role: 'Administrador',
      status: 'Activo'
    }, {
      name: 'María García',
      email: 'maria@ejemplo.com',
      role: 'Usuario',
      status: 'Activo'
    }, {
      name: 'Carlos López',
      email: 'carlos@ejemplo.com',
      role: 'Editor',
      status: 'Inactivo'
    }, {
      name: 'Ana Martínez',
      email: 'ana@ejemplo.com',
      role: 'Usuario',
      status: 'Activo'
    }, {
      name: 'Pedro Sánchez',
      email: 'pedro@ejemplo.com',
      role: 'Editor',
      status: 'Activo'
    }, {
      name: 'Laura Torres',
      email: 'laura@ejemplo.com',
      role: 'Usuario',
      status: 'Inactivo'
    }]
  },
  render: Basic.render
}`,...(L=(F=h.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var T,U,I;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    pagination: true,
    itemsPerPage: 3,
    data: [{
      name: 'Juan Pérez',
      email: 'juan@ejemplo.com',
      role: 'Administrador',
      status: 'Activo'
    }, {
      name: 'María García',
      email: 'maria@ejemplo.com',
      role: 'Usuario',
      status: 'Activo'
    }, {
      name: 'Carlos López',
      email: 'carlos@ejemplo.com',
      role: 'Editor',
      status: 'Inactivo'
    }, {
      name: 'Ana Martínez',
      email: 'ana@ejemplo.com',
      role: 'Usuario',
      status: 'Activo'
    }, {
      name: 'Pedro Sánchez',
      email: 'pedro@ejemplo.com',
      role: 'Editor',
      status: 'Activo'
    }, {
      name: 'Laura Torres',
      email: 'laura@ejemplo.com',
      role: 'Usuario',
      status: 'Inactivo'
    }, {
      name: 'Roberto Vega',
      email: 'roberto@ejemplo.com',
      role: 'Administrador',
      status: 'Activo'
    }, {
      name: 'Carmen Ruiz',
      email: 'carmen@ejemplo.com',
      role: 'Usuario',
      status: 'Activo'
    }]
  },
  render: Basic.render
}`,...(I=(U=g.parameters)==null?void 0:U.docs)==null?void 0:I.source}}};var H,V,N;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    variant: 'striped'
  },
  render: Basic.render
}`,...(N=(V=b.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var G,W,J;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    variant: 'bordered'
  },
  render: Basic.render
}`,...(J=(W=y.parameters)==null?void 0:W.docs)==null?void 0:J.source}}};var Z,q,O;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    variant: 'hoverable',
    onRowClick: (index, row) => {
      console.log('Fila clickeada:', index, row);
    }
  },
  render: Basic.render
}`,...(O=(q=v.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var Q,X,Y;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    size: 'sm'
  },
  render: Basic.render
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var K,_,ee;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    size: 'lg'
  },
  render: Basic.render
}`,...(ee=(_=w.parameters)==null?void 0:_.docs)==null?void 0:ee.source}}};var te,ae,oe;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: 'name',
      label: 'Producto',
      sortable: true
    }, {
      key: 'category',
      label: 'Categoría',
      sortable: true
    }, {
      key: 'price',
      label: 'Precio',
      sortable: true,
      sortType: 'number'
    }, {
      key: 'stock',
      label: 'Stock',
      sortable: true,
      sortType: 'number'
    }, {
      key: 'status',
      label: 'Estado',
      sortable: true
    }],
    data: [{
      name: 'iPhone 13 Pro',
      category: 'Electrónicos',
      price: 999,
      stock: 15,
      status: 'Disponible'
    }, {
      name: 'MacBook Air M2',
      category: 'Computadoras',
      price: 1199,
      stock: 8,
      status: 'Disponible'
    }, {
      name: 'iPad Air',
      category: 'Tablets',
      price: 599,
      stock: 0,
      status: 'Agotado'
    }, {
      name: 'AirPods Pro',
      category: 'Audio',
      price: 249,
      stock: 25,
      status: 'Disponible'
    }, {
      name: 'Apple Watch',
      category: 'Wearables',
      price: 399,
      stock: 12,
      status: 'Disponible'
    }],
    variant: 'bordered',
    sortable: true,
    selectable: true,
    multiSelect: true
  },
  render: Basic.render
}`,...(oe=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,re,se;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: 'avatar',
      label: 'Avatar',
      render: value => \`<div class="w-8 h-8 bg-gray-300 rounded-full"></div>\`
    }, {
      key: 'name',
      label: 'Nombre',
      sortable: true
    }, {
      key: 'email',
      label: 'Email',
      sortable: true
    }, {
      key: 'role',
      label: 'Rol',
      sortable: true
    }, {
      key: 'lastLogin',
      label: 'Último acceso',
      sortable: true,
      sortType: 'date'
    }, {
      key: 'actions',
      label: 'Acciones',
      render: (value, row) => \`
        <div class="flex space-x-2">
          <button class="p-1 text-blue-600 hover:bg-blue-100 rounded" onclick="console.log('Editar \${row.name}')">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
            </svg>
          </button>
          <button class="p-1 text-red-600 hover:bg-red-100 rounded" onclick="console.log('Eliminar \${row.name}')">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
            </svg>
          </button>
        </div>
      \`
    }],
    data: [{
      name: 'Juan Pérez',
      email: 'juan@ejemplo.com',
      role: 'Administrador',
      lastLogin: '2024-12-15T10:30:00Z'
    }, {
      name: 'María García',
      email: 'maria@ejemplo.com',
      role: 'Usuario',
      lastLogin: '2024-12-14T15:45:00Z'
    }, {
      name: 'Carlos López',
      email: 'carlos@ejemplo.com',
      role: 'Editor',
      lastLogin: '2024-12-13T09:15:00Z'
    }, {
      name: 'Ana Martínez',
      email: 'ana@ejemplo.com',
      role: 'Usuario',
      lastLogin: '2024-12-15T08:20:00Z'
    }],
    variant: 'hoverable',
    sortable: true,
    onRowClick: (index, row) => {
      console.log('Usuario clickeado:', row.name);
    }
  },
  render: Basic.render
}`,...(se=(re=k.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,le,ce;C.parameters={...C.parameters,docs:{...(ie=C.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: 'date',
      label: 'Fecha',
      sortable: true,
      sortType: 'date'
    }, {
      key: 'description',
      label: 'Descripción',
      sortable: true
    }, {
      key: 'category',
      label: 'Categoría',
      sortable: true
    }, {
      key: 'amount',
      label: 'Monto',
      sortable: true,
      sortType: 'number',
      render: value => \`<span class="font-mono \${value >= 0 ? 'text-green-600' : 'text-red-600'}">\${value >= 0 ? '+' : ''}$\${Math.abs(value).toFixed(2)}</span>\`
    }, {
      key: 'balance',
      label: 'Balance',
      sortable: true,
      sortType: 'number',
      render: value => \`<span class="font-mono font-semibold">$\${value.toFixed(2)}</span>\`
    }],
    data: [{
      date: '2024-12-15',
      description: 'Salario',
      category: 'Ingresos',
      amount: 2500,
      balance: 2500
    }, {
      date: '2024-12-14',
      description: 'Supermercado',
      category: 'Alimentación',
      amount: -120.50,
      balance: 2379.50
    }, {
      date: '2024-12-13',
      description: 'Gasolina',
      category: 'Transporte',
      amount: -45.00,
      balance: 2334.50
    }, {
      date: '2024-12-12',
      description: 'Freelance',
      category: 'Ingresos',
      amount: 300,
      balance: 2634.50
    }, {
      date: '2024-12-11',
      description: 'Restaurante',
      category: 'Entretenimiento',
      amount: -65.00,
      balance: 2569.50
    }],
    variant: 'striped',
    sortable: true,
    showFooter: true
  },
  render: Basic.render
}`,...(ce=(le=C.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,ue,pe;S.parameters={...S.parameters,docs:{...(de=S.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    sortable: true,
    selectable: true,
    multiSelect: true,
    searchable: true,
    pagination: true,
    itemsPerPage: 5,
    onSort: (column, direction) => {
      console.log('Ordenando por:', column, 'dirección:', direction);
    },
    onSelect: (selectedIndices, selectedRows) => {
      console.log('Filas seleccionadas:', selectedIndices, selectedRows);
    },
    onRowClick: (index, row) => {
      console.log('Fila clickeada:', index, row);
    }
  },
  render: args => {
    const table = new Table(args);
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
    ['default', 'striped', 'bordered', 'hoverable'].forEach(variant => {
      const option = document.createElement('option');
      option.value = variant;
      option.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
      option.selected = variant === args.variant;
      variantSelect.appendChild(option);
    });
    variantSelect.onchange = e => {
      args.variant = e.target.value;
      table.setVariant(e.target.value);
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
      table.setSize(e.target.value);
    };
    const addRowButton = document.createElement('button');
    addRowButton.textContent = 'Agregar Fila';
    addRowButton.className = 'px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600';
    addRowButton.onclick = () => {
      const newRow = {
        name: \`Usuario \${Math.floor(Math.random() * 1000)}\`,
        email: \`usuario\${Math.floor(Math.random() * 1000)}@ejemplo.com\`,
        role: ['Usuario', 'Editor', 'Administrador'][Math.floor(Math.random() * 3)],
        status: Math.random() > 0.5 ? 'Activo' : 'Inactivo'
      };
      table.addRow(newRow);
    };
    const clearButton = document.createElement('button');
    clearButton.textContent = 'Limpiar';
    clearButton.className = 'px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600';
    clearButton.onclick = () => table.clear();
    controls.appendChild(document.createElement('label')).textContent = 'Variante:';
    controls.appendChild(variantSelect);
    controls.appendChild(document.createElement('label')).textContent = 'Tamaño:';
    controls.appendChild(sizeSelect);
    controls.appendChild(addRowButton);
    controls.appendChild(clearButton);
    container.appendChild(controls);

    // Tabla
    table.mount(container);
    return container;
  }
}`,...(pe=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};const he=["Basic","Sortable","Selectable","Searchable","WithPagination","Striped","Bordered","Hoverable","Small","Large","Products","UsersWithActions","Financial","Interactive"];export{n as Basic,y as Bordered,C as Financial,v as Hoverable,S as Interactive,w as Large,x as Products,h as Searchable,m as Selectable,f as Small,p as Sortable,b as Striped,k as UsersWithActions,g as WithPagination,he as __namedExportsOrder,me as default};
