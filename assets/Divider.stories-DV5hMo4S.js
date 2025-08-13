class t{constructor(e={}){this.options={orientation:"horizontal",variant:"solid",size:"md",color:"gray",spacing:"md",label:"",labelPosition:"center",...e},this.id=this.generateId()}generateId(){return"divider-"+Math.random().toString(36).substr(2,9)}render(){return this.getOrientationClasses(),this.getVariantClasses(),this.getSizeClasses(),this.getColorClasses(),this.getSpacingClasses(),this.options.orientation==="vertical"?this.renderVertical():this.renderHorizontal()}renderHorizontal(){const e=this.getVariantClasses(),i=this.getSizeClasses(),r=this.getColorClasses(),s=this.getSpacingClasses();return this.options.label?this.renderHorizontalWithLabel():`
      <div class="flex items-center ${s}" id="${this.id}">
        <div class="flex-1 ${e} ${i} ${r}"></div>
      </div>
    `}renderHorizontalWithLabel(){const e=this.getVariantClasses(),i=this.getSizeClasses(),r=this.getColorClasses(),s=this.getSpacingClasses(),o=this.getLabelPositionClasses();return`
      <div class="flex items-center ${s}" id="${this.id}">
        <div class="flex-1 ${e} ${i} ${r}"></div>
        <div class="px-3 text-sm font-medium text-gray-500 ${o}">
          ${this.options.label}
        </div>
        <div class="flex-1 ${e} ${i} ${r}"></div>
      </div>
    `}renderVertical(){const e=this.getVariantClasses(),i=this.getSizeClasses(),r=this.getColorClasses();return`
      <div class="inline-flex items-center ${this.getSpacingClasses()}" id="${this.id}">
        <div class="h-full ${e} ${i} ${r}"></div>
      </div>
    `}getOrientationClasses(){return this.options.orientation==="vertical"?"inline-flex flex-col":"flex w-full"}getVariantClasses(){const e={solid:"border-t",dashed:"border-t border-dashed",dotted:"border-t border-dotted",double:"border-t-2"};return e[this.options.variant]||e.solid}getSizeClasses(){const e={xs:"border-t",sm:"border-t-2",md:"border-t-4",lg:"border-t-6",xl:"border-t-8"};return e[this.options.size]||e.md}getColorClasses(){const e={gray:"border-gray-200",blue:"border-blue-200",green:"border-green-200",red:"border-red-200",yellow:"border-yellow-200",purple:"border-purple-200",pink:"border-pink-200",indigo:"border-indigo-200"};return e[this.options.color]||e.gray}getSpacingClasses(){const e={xs:"my-1",sm:"my-2",md:"my-4",lg:"my-6",xl:"my-8"};return e[this.options.spacing]||e.md}getLabelPositionClasses(){const e={left:"text-left",center:"text-center",right:"text-right"};return e[this.options.labelPosition]||e.center}setOrientation(e){this.options.orientation=e,this.updateDisplay()}setVariant(e){this.options.variant=e,this.updateDisplay()}setSize(e){this.options.size=e,this.updateDisplay()}setColor(e){this.options.color=e,this.updateDisplay()}setSpacing(e){this.options.spacing=e,this.updateDisplay()}setLabel(e){this.options.label=e,this.updateDisplay()}setLabelPosition(e){this.options.labelPosition=e,this.updateDisplay()}removeLabel(){this.options.label="",this.updateDisplay()}updateDisplay(){const e=document.getElementById(this.id);e&&(e.outerHTML=this.render())}mount(e){typeof e=="string"&&(e=document.querySelector(e)),e&&(e.innerHTML=this.render())}static horizontal(e={}){return new t({orientation:"horizontal",...e})}static vertical(e={}){return new t({orientation:"vertical",...e})}static section(e,i={}){return new t({orientation:"horizontal",label:e,variant:"solid",size:"md",...i})}static subtle(e={}){return new t({orientation:"horizontal",variant:"solid",size:"xs",color:"gray",spacing:"sm",...e})}static bold(e={}){return new t({orientation:"horizontal",variant:"solid",size:"lg",color:"gray",spacing:"lg",...e})}static colored(e,i={}){return new t({orientation:"horizontal",color:e,...i})}getHTML(){return this.render()}clone(){return new t({...this.options})}hasLabel(){return!!this.options.label}getDimensions(){if(this.options.orientation==="vertical"){const e={xs:1,sm:2,md:4,lg:6,xl:8};return{width:e[this.options.size]||e.md,height:"100%"}}else{const e={xs:1,sm:2,md:4,lg:6,xl:8};return{width:"100%",height:e[this.options.size]||e.md}}}}const we={title:"Utility/Divider",component:t,parameters:{docs:{description:{component:"El componente Divider crea líneas divisorias para separar contenido visualmente. Soporta orientación horizontal y vertical, diferentes variantes, tamaños, colores y etiquetas opcionales."}}},argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Orientación del divider"},variant:{control:{type:"select"},options:["solid","dashed","dotted","double"],description:"Estilo visual del divider"},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"],description:"Grosor del divider"},color:{control:{type:"select"},options:["gray","blue","green","red","yellow","purple","pink","indigo"],description:"Color del divider"},spacing:{control:{type:"select"},options:["xs","sm","md","lg","xl"],description:"Espaciado vertical del divider"},label:{control:"text",description:"Texto opcional para etiquetar el divider"},labelPosition:{control:{type:"select"},options:["left","center","right"],description:"Posición del texto de la etiqueta"}}},d={args:{orientation:"horizontal",variant:"solid",size:"md",color:"gray",spacing:"md"},render:n=>`
      <div class="p-4">
        <p class="text-gray-700 mb-4">Contenido arriba del divider</p>
        ${new t(n).render()}
        <p class="text-gray-700 mt-4">Contenido abajo del divider</p>
      </div>
    `},l={args:{orientation:"horizontal",variant:"solid",size:"md",color:"gray",spacing:"md"},render:n=>`
      <div class="p-4">
        <p class="text-gray-700 mb-4">Sección superior</p>
        ${new t(n).render()}
        <p class="text-gray-700 mt-4">Sección inferior</p>
      </div>
    `},c={args:{orientation:"vertical",variant:"solid",size:"md",color:"gray",spacing:"md"},render:n=>`
      <div class="p-4">
        <div class="flex items-center space-x-4 h-20">
          <span class="text-gray-700">Izquierda</span>
          ${new t(n).render()}
          <span class="text-gray-700">Derecha</span>
        </div>
      </div>
    `},p={args:{orientation:"horizontal",variant:"solid",size:"md",color:"gray",spacing:"md",label:"Sección",labelPosition:"center"},render:n=>`
      <div class="p-4">
        <p class="text-gray-700 mb-4">Contenido de la primera sección</p>
        ${new t(n).render()}
        <p class="text-gray-700 mt-4">Contenido de la segunda sección</p>
      </div>
    `},v={args:{orientation:"horizontal",variant:"solid",size:"md",color:"gray",spacing:"md",label:"Inicio",labelPosition:"left"},render:n=>`
      <div class="p-4">
        <p class="text-gray-700 mb-4">Contenido anterior</p>
        ${new t(n).render()}
        <p class="text-gray-700 mt-4">Contenido posterior</p>
      </div>
    `},g={args:{orientation:"horizontal",variant:"solid",size:"md",color:"gray",spacing:"md",label:"Fin",labelPosition:"right"},render:n=>`
      <div class="p-4">
        <p class="text-gray-700 mb-4">Contenido anterior</p>
        ${new t(n).render()}
        <p class="text-gray-700 mt-4">Contenido posterior</p>
      </div>
    `},m={args:{orientation:"horizontal",variant:"solid",size:"md",color:"gray",spacing:"md"},render:n=>`
      <div class="p-4">
        <p class="text-gray-700 mb-4">Línea sólida</p>
        ${new t(n).render()}
        <p class="text-gray-700 mt-4">Contenido separado</p>
      </div>
    `},u={args:{orientation:"horizontal",variant:"dashed",size:"md",color:"gray",spacing:"md"},render:n=>`
      <div class="p-4">
        <p class="text-gray-700 mb-4">Línea punteada</p>
        ${new t(n).render()}
        <p class="text-gray-700 mt-4">Contenido separado</p>
      </div>
    `},b={args:{orientation:"horizontal",variant:"dotted",size:"md",color:"gray",spacing:"md"},render:n=>`
      <div class="p-4">
        <p class="text-gray-700 mb-4">Línea de puntos</p>
        ${new t(n).render()}
        <p class="text-gray-700 mt-4">Contenido separado</p>
      </div>
    `},x={args:{orientation:"horizontal",variant:"double",size:"md",color:"gray",spacing:"md"},render:n=>`
      <div class="p-4">
        <p class="text-gray-700 mb-4">Línea doble</p>
        ${new t(n).render()}
        <p class="text-gray-700 mt-4">Contenido separado</p>
      </div>
    `},y={render:()=>`
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Todos los tamaños disponibles</h3>
        ${["xs","sm","md","lg","xl"].map(i=>{const r=new t({orientation:"horizontal",variant:"solid",size:i,color:"gray",spacing:"md"});return`
        <div class="mb-4">
          <p class="text-sm text-gray-600 mb-2">Tamaño: ${i}</p>
          ${r.render()}
        </div>
      `}).join("")}
      </div>
    `},h={render:()=>`
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Todos los colores disponibles</h3>
        ${[{color:"gray",label:"Gris"},{color:"blue",label:"Azul"},{color:"green",label:"Verde"},{color:"red",label:"Rojo"},{color:"yellow",label:"Amarillo"},{color:"purple",label:"Púrpura"},{color:"pink",label:"Rosa"},{color:"indigo",label:"Índigo"}].map(({color:i,label:r})=>{const s=new t({orientation:"horizontal",variant:"solid",size:"md",color:i,spacing:"md"});return`
        <div class="mb-4">
          <p class="text-sm text-gray-600 mb-2">Color: ${r}</p>
          ${s.render()}
        </div>
      `}).join("")}
      </div>
    `},z={render:()=>`
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Todos los espaciados disponibles</h3>
        ${["xs","sm","md","lg","xl"].map(i=>{const r=new t({orientation:"horizontal",variant:"solid",size:"md",color:"gray",spacing:i});return`
        <div class="mb-4">
          <p class="text-sm text-gray-600 mb-2">Espaciado: ${i}</p>
          <div class="bg-gray-50 p-2">
            ${r.render()}
          </div>
        </div>
      `}).join("")}
      </div>
    `},C={render:()=>`
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Todas las variantes disponibles</h3>
        ${[{variant:"solid",label:"Sólida"},{variant:"dashed",label:"Punteada"},{variant:"dotted",label:"De puntos"},{variant:"double",label:"Doble"}].map(({variant:i,label:r})=>{const s=new t({orientation:"horizontal",variant:i,size:"md",color:"gray",spacing:"md"});return`
        <div class="mb-4">
          <p class="text-sm text-gray-600 mb-2">Variante: ${r}</p>
          ${s.render()}
        </div>
      `}).join("")}
      </div>
    `},f={render:()=>{const n=t.horizontal({size:"lg",color:"blue"}),e=t.vertical({size:"md",color:"green"}),i=t.section("Nueva Sección",{color:"purple"}),r=t.subtle(),s=t.bold(),o=t.colored("red",{size:"lg"});return`
      <div class="p-4 space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-2">Divider Horizontal</h3>
          <p class="text-gray-700 mb-2">Contenido superior</p>
          ${n.render()}
          <p class="text-gray-700 mt-2">Contenido inferior</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-2">Divider Vertical</h3>
          <div class="flex items-center space-x-4 h-20">
            <span class="text-gray-700">Izquierda</span>
            ${e.render()}
            <span class="text-gray-700">Derecha</span>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-2">Divider de Sección</h3>
          <p class="text-gray-700 mb-2">Contenido de la sección anterior</p>
          ${i.render()}
          <p class="text-gray-700 mt-2">Contenido de la nueva sección</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-2">Divider Sutil</h3>
          <p class="text-gray-700 mb-2">Contenido</p>
          ${r.render()}
          <p class="text-gray-700 mt-2">Más contenido</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-2">Divider Bold</h3>
          <p class="text-gray-700 mb-2">Contenido importante</p>
          ${s.render()}
          <p class="text-gray-700 mt-2">Contenido posterior</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-2">Divider Coloreado</h3>
          <p class="text-gray-700 mb-2">Contenido destacado</p>
          ${o.render()}
          <p class="text-gray-700 mt-2">Contenido siguiente</p>
        </div>
      </div>
    `}},D={render:()=>{const n=new t({variant:"solid",size:"md",color:"gray"}),e=new t({variant:"dashed",size:"sm",color:"blue"}),i=new t({variant:"dotted",size:"lg",color:"green"}),r=new t({variant:"double",size:"md",color:"purple"});return`
      <div class="p-4 space-y-4">
        <h3 class="text-lg font-semibold">Múltiples Dividers</h3>
        
        <div>
          <p class="text-gray-700 mb-2">Primera sección</p>
          ${n.render()}
          <p class="text-gray-700 mt-2">Segunda sección</p>
        </div>
        
        <div>
          <p class="text-gray-700 mb-2">Tercera sección</p>
          ${e.render()}
          <p class="text-gray-700 mt-2">Cuarta sección</p>
        </div>
        
        <div>
          <p class="text-gray-700 mb-2">Quinta sección</p>
          ${i.render()}
          <p class="text-gray-700 mt-2">Sexta sección</p>
        </div>
        
        <div>
          <p class="text-gray-700 mb-2">Séptima sección</p>
          ${r.render()}
          <p class="text-gray-700 mt-2">Octava sección</p>
        </div>
      </div>
    `}},S={render:()=>{const n=document.createElement("div");n.innerHTML=`
      <div class="p-4 space-y-4">
        <div class="flex flex-wrap gap-2">
          <button id="changeVariant" class="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
            Cambiar Variante
          </button>
          <button id="changeSize" class="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600">
            Cambiar Tamaño
          </button>
          <button id="changeColor" class="px-3 py-1 bg-purple-500 text-white rounded text-sm hover:bg-purple-600">
            Cambiar Color
          </button>
          <button id="toggleLabel" class="px-3 py-1 bg-orange-500 text-white rounded text-sm hover:bg-orange-600">
            Toggle Etiqueta
          </button>
          <button id="changeOrientation" class="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600">
            Cambiar Orientación
          </button>
        </div>
        
        <div class="bg-gray-50 p-4 rounded">
          <p class="text-gray-700 mb-4">Contenido superior</p>
          <div id="dividerContainer"></div>
          <p class="text-gray-700 mt-4">Contenido inferior</p>
        </div>
        
        <div class="text-sm text-gray-600">
          <p><strong>Variante:</strong> <span id="currentVariant">solid</span></p>
          <p><strong>Tamaño:</strong> <span id="currentSize">md</span></p>
          <p><strong>Color:</strong> <span id="currentColor">gray</span></p>
          <p><strong>Orientación:</strong> <span id="currentOrientation">horizontal</span></p>
          <p><strong>Etiqueta:</strong> <span id="currentLabel">ninguna</span></p>
        </div>
      </div>
    `;const e=new t({orientation:"horizontal",variant:"solid",size:"md",color:"gray",spacing:"md"}),i=n.querySelector("#dividerContainer");return e.mount(i),n.querySelector("#changeVariant").addEventListener("click",()=>{const r=["solid","dashed","dotted","double"],s=e.options.variant,a=(r.indexOf(s)+1)%r.length;e.setVariant(r[a]),n.querySelector("#currentVariant").textContent=r[a]}),n.querySelector("#changeSize").addEventListener("click",()=>{const r=["xs","sm","md","lg","xl"],s=e.options.size,a=(r.indexOf(s)+1)%r.length;e.setSize(r[a]),n.querySelector("#currentSize").textContent=r[a]}),n.querySelector("#changeColor").addEventListener("click",()=>{const r=["gray","blue","green","red","yellow","purple","pink","indigo"],s=e.options.color,a=(r.indexOf(s)+1)%r.length;e.setColor(r[a]),n.querySelector("#currentColor").textContent=r[a]}),n.querySelector("#toggleLabel").addEventListener("click",()=>{e.hasLabel()?(e.removeLabel(),n.querySelector("#currentLabel").textContent="ninguna"):(e.setLabel("Sección"),n.querySelector("#currentLabel").textContent="Sección")}),n.querySelector("#changeOrientation").addEventListener("click",()=>{const r=["horizontal","vertical"],s=e.options.orientation,a=(r.indexOf(s)+1)%r.length;e.setOrientation(r[a]),n.querySelector("#currentOrientation").textContent=r[a],r[a]==="vertical"?(i.className="flex items-center space-x-4 h-20",i.innerHTML=`
          <span class="text-gray-700">Izquierda</span>
          ${e.render()}
          <span class="text-gray-700">Derecha</span>
        `):(i.className="",e.mount(i))}),n}},$={render:()=>{const n=t.section("Información Personal",{color:"blue"}),e=t.section("Información de Contacto",{color:"green"}),i=t.section("Preferencias",{color:"purple"}),r=t.subtle();return`
      <div class="p-4 max-w-2xl">
        <h2 class="text-2xl font-bold mb-6">Formulario de Usuario</h2>
        
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold mb-3">Datos Básicos</h3>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Tu nombre">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Apellido</label>
                <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Tu apellido">
              </div>
            </div>
          </div>
          
          ${n.render()}
          
          <div>
            <h3 class="text-lg font-semibold mb-3">Detalles Personales</h3>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Fecha de Nacimiento</label>
                <input type="date" class="w-full px-3 py-2 border border-gray-300 rounded-md">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Género</label>
                <select class="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>Seleccionar...</option>
                  <option>Masculino</option>
                  <option>Femenino</option>
                  <option>Otro</option>
                </select>
              </div>
            </div>
          </div>
          
          ${e.render()}
          
          <div>
            <h3 class="text-lg font-semibold mb-3">Información de Contacto</h3>
            <div class="space-y-3">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="tu@email.com">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                <input type="tel" class="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="+1 234 567 890">
              </div>
            </div>
          </div>
          
          ${i.render()}
          
          <div>
            <h3 class="text-lg font-semibold mb-3">Preferencias</h3>
            <div class="space-y-3">
              <div class="flex items-center">
                <input type="checkbox" id="newsletter" class="mr-2">
                <label for="newsletter" class="text-sm text-gray-700">Recibir newsletter</label>
              </div>
              <div class="flex items-center">
                <input type="checkbox" id="notifications" class="mr-2">
                <label for="notifications" class="text-sm text-gray-700">Notificaciones push</label>
              </div>
            </div>
          </div>
          
          ${r.render()}
          
          <div class="flex justify-end space-x-3">
            <button class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
              Cancelar
            </button>
            <button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Guardar
            </button>
          </div>
        </div>
      </div>
    `}};var w,L,I;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    variant: 'solid',
    size: 'md',
    color: 'gray',
    spacing: 'md'
  },
  render: args => {
    const divider = new Divider(args);
    return \`
      <div class="p-4">
        <p class="text-gray-700 mb-4">Contenido arriba del divider</p>
        \${divider.render()}
        <p class="text-gray-700 mt-4">Contenido abajo del divider</p>
      </div>
    \`;
  }
}`,...(I=(L=d.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var V,F,q;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    variant: 'solid',
    size: 'md',
    color: 'gray',
    spacing: 'md'
  },
  render: args => {
    const divider = new Divider(args);
    return \`
      <div class="p-4">
        <p class="text-gray-700 mb-4">Sección superior</p>
        \${divider.render()}
        <p class="text-gray-700 mt-4">Sección inferior</p>
      </div>
    \`;
  }
}`,...(q=(F=l.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var E,O,k;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    variant: 'solid',
    size: 'md',
    color: 'gray',
    spacing: 'md'
  },
  render: args => {
    const divider = new Divider(args);
    return \`
      <div class="p-4">
        <div class="flex items-center space-x-4 h-20">
          <span class="text-gray-700">Izquierda</span>
          \${divider.render()}
          <span class="text-gray-700">Derecha</span>
        </div>
      </div>
    \`;
  }
}`,...(k=(O=c.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var T,P,M;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    variant: 'solid',
    size: 'md',
    color: 'gray',
    spacing: 'md',
    label: 'Sección',
    labelPosition: 'center'
  },
  render: args => {
    const divider = new Divider(args);
    return \`
      <div class="p-4">
        <p class="text-gray-700 mb-4">Contenido de la primera sección</p>
        \${divider.render()}
        <p class="text-gray-700 mt-4">Contenido de la segunda sección</p>
      </div>
    \`;
  }
}`,...(M=(P=p.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var A,j,H;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    variant: 'solid',
    size: 'md',
    color: 'gray',
    spacing: 'md',
    label: 'Inicio',
    labelPosition: 'left'
  },
  render: args => {
    const divider = new Divider(args);
    return \`
      <div class="p-4">
        <p class="text-gray-700 mb-4">Contenido anterior</p>
        \${divider.render()}
        <p class="text-gray-700 mt-4">Contenido posterior</p>
      </div>
    \`;
  }
}`,...(H=(j=v.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var N,R,G;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    variant: 'solid',
    size: 'md',
    color: 'gray',
    spacing: 'md',
    label: 'Fin',
    labelPosition: 'right'
  },
  render: args => {
    const divider = new Divider(args);
    return \`
      <div class="p-4">
        <p class="text-gray-700 mb-4">Contenido anterior</p>
        \${divider.render()}
        <p class="text-gray-700 mt-4">Contenido posterior</p>
      </div>
    \`;
  }
}`,...(G=(R=g.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var W,B,U;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    variant: 'solid',
    size: 'md',
    color: 'gray',
    spacing: 'md'
  },
  render: args => {
    const divider = new Divider(args);
    return \`
      <div class="p-4">
        <p class="text-gray-700 mb-4">Línea sólida</p>
        \${divider.render()}
        <p class="text-gray-700 mt-4">Contenido separado</p>
      </div>
    \`;
  }
}`,...(U=(B=m.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var Q,J,K;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    variant: 'dashed',
    size: 'md',
    color: 'gray',
    spacing: 'md'
  },
  render: args => {
    const divider = new Divider(args);
    return \`
      <div class="p-4">
        <p class="text-gray-700 mb-4">Línea punteada</p>
        \${divider.render()}
        <p class="text-gray-700 mt-4">Contenido separado</p>
      </div>
    \`;
  }
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,Y,Z;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    variant: 'dotted',
    size: 'md',
    color: 'gray',
    spacing: 'md'
  },
  render: args => {
    const divider = new Divider(args);
    return \`
      <div class="p-4">
        <p class="text-gray-700 mb-4">Línea de puntos</p>
        \${divider.render()}
        <p class="text-gray-700 mt-4">Contenido separado</p>
      </div>
    \`;
  }
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var _,ee,ne;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    variant: 'double',
    size: 'md',
    color: 'gray',
    spacing: 'md'
  },
  render: args => {
    const divider = new Divider(args);
    return \`
      <div class="p-4">
        <p class="text-gray-700 mb-4">Línea doble</p>
        \${divider.render()}
        <p class="text-gray-700 mt-4">Contenido separado</p>
      </div>
    \`;
  }
}`,...(ne=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var re,te,ie;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
    const dividers = sizes.map(size => {
      const divider = new Divider({
        orientation: 'horizontal',
        variant: 'solid',
        size: size,
        color: 'gray',
        spacing: 'md'
      });
      return \`
        <div class="mb-4">
          <p class="text-sm text-gray-600 mb-2">Tamaño: \${size}</p>
          \${divider.render()}
        </div>
      \`;
    });
    return \`
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Todos los tamaños disponibles</h3>
        \${dividers.join('')}
      </div>
    \`;
  }
}`,...(ie=(te=y.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var se,ae,oe;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const colors = [{
      color: 'gray',
      label: 'Gris'
    }, {
      color: 'blue',
      label: 'Azul'
    }, {
      color: 'green',
      label: 'Verde'
    }, {
      color: 'red',
      label: 'Rojo'
    }, {
      color: 'yellow',
      label: 'Amarillo'
    }, {
      color: 'purple',
      label: 'Púrpura'
    }, {
      color: 'pink',
      label: 'Rosa'
    }, {
      color: 'indigo',
      label: 'Índigo'
    }];
    const dividers = colors.map(({
      color,
      label
    }) => {
      const divider = new Divider({
        orientation: 'horizontal',
        variant: 'solid',
        size: 'md',
        color: color,
        spacing: 'md'
      });
      return \`
        <div class="mb-4">
          <p class="text-sm text-gray-600 mb-2">Color: \${label}</p>
          \${divider.render()}
        </div>
      \`;
    });
    return \`
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Todos los colores disponibles</h3>
        \${dividers.join('')}
      </div>
    \`;
  }
}`,...(oe=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var de,le,ce;z.parameters={...z.parameters,docs:{...(de=z.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    const spacings = ['xs', 'sm', 'md', 'lg', 'xl'];
    const dividers = spacings.map(spacing => {
      const divider = new Divider({
        orientation: 'horizontal',
        variant: 'solid',
        size: 'md',
        color: 'gray',
        spacing: spacing
      });
      return \`
        <div class="mb-4">
          <p class="text-sm text-gray-600 mb-2">Espaciado: \${spacing}</p>
          <div class="bg-gray-50 p-2">
            \${divider.render()}
          </div>
        </div>
      \`;
    });
    return \`
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Todos los espaciados disponibles</h3>
        \${dividers.join('')}
      </div>
    \`;
  }
}`,...(ce=(le=z.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var pe,ve,ge;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => {
    const variants = [{
      variant: 'solid',
      label: 'Sólida'
    }, {
      variant: 'dashed',
      label: 'Punteada'
    }, {
      variant: 'dotted',
      label: 'De puntos'
    }, {
      variant: 'double',
      label: 'Doble'
    }];
    const dividers = variants.map(({
      variant,
      label
    }) => {
      const divider = new Divider({
        orientation: 'horizontal',
        variant: variant,
        size: 'md',
        color: 'gray',
        spacing: 'md'
      });
      return \`
        <div class="mb-4">
          <p class="text-sm text-gray-600 mb-2">Variante: \${label}</p>
          \${divider.render()}
        </div>
      \`;
    });
    return \`
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Todas las variantes disponibles</h3>
        \${dividers.join('')}
      </div>
    \`;
  }
}`,...(ge=(ve=C.parameters)==null?void 0:ve.docs)==null?void 0:ge.source}}};var me,ue,be;f.parameters={...f.parameters,docs:{...(me=f.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const horizontalDivider = Divider.horizontal({
      size: 'lg',
      color: 'blue'
    });
    const verticalDivider = Divider.vertical({
      size: 'md',
      color: 'green'
    });
    const sectionDivider = Divider.section('Nueva Sección', {
      color: 'purple'
    });
    const subtleDivider = Divider.subtle();
    const boldDivider = Divider.bold();
    const coloredDivider = Divider.colored('red', {
      size: 'lg'
    });
    return \`
      <div class="p-4 space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-2">Divider Horizontal</h3>
          <p class="text-gray-700 mb-2">Contenido superior</p>
          \${horizontalDivider.render()}
          <p class="text-gray-700 mt-2">Contenido inferior</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-2">Divider Vertical</h3>
          <div class="flex items-center space-x-4 h-20">
            <span class="text-gray-700">Izquierda</span>
            \${verticalDivider.render()}
            <span class="text-gray-700">Derecha</span>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-2">Divider de Sección</h3>
          <p class="text-gray-700 mb-2">Contenido de la sección anterior</p>
          \${sectionDivider.render()}
          <p class="text-gray-700 mt-2">Contenido de la nueva sección</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-2">Divider Sutil</h3>
          <p class="text-gray-700 mb-2">Contenido</p>
          \${subtleDivider.render()}
          <p class="text-gray-700 mt-2">Más contenido</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-2">Divider Bold</h3>
          <p class="text-gray-700 mb-2">Contenido importante</p>
          \${boldDivider.render()}
          <p class="text-gray-700 mt-2">Contenido posterior</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-2">Divider Coloreado</h3>
          <p class="text-gray-700 mb-2">Contenido destacado</p>
          \${coloredDivider.render()}
          <p class="text-gray-700 mt-2">Contenido siguiente</p>
        </div>
      </div>
    \`;
  }
}`,...(be=(ue=f.parameters)==null?void 0:ue.docs)==null?void 0:be.source}}};var xe,ye,he;D.parameters={...D.parameters,docs:{...(xe=D.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => {
    const divider1 = new Divider({
      variant: 'solid',
      size: 'md',
      color: 'gray'
    });
    const divider2 = new Divider({
      variant: 'dashed',
      size: 'sm',
      color: 'blue'
    });
    const divider3 = new Divider({
      variant: 'dotted',
      size: 'lg',
      color: 'green'
    });
    const divider4 = new Divider({
      variant: 'double',
      size: 'md',
      color: 'purple'
    });
    return \`
      <div class="p-4 space-y-4">
        <h3 class="text-lg font-semibold">Múltiples Dividers</h3>
        
        <div>
          <p class="text-gray-700 mb-2">Primera sección</p>
          \${divider1.render()}
          <p class="text-gray-700 mt-2">Segunda sección</p>
        </div>
        
        <div>
          <p class="text-gray-700 mb-2">Tercera sección</p>
          \${divider2.render()}
          <p class="text-gray-700 mt-2">Cuarta sección</p>
        </div>
        
        <div>
          <p class="text-gray-700 mb-2">Quinta sección</p>
          \${divider3.render()}
          <p class="text-gray-700 mt-2">Sexta sección</p>
        </div>
        
        <div>
          <p class="text-gray-700 mb-2">Séptima sección</p>
          \${divider4.render()}
          <p class="text-gray-700 mt-2">Octava sección</p>
        </div>
      </div>
    \`;
  }
}`,...(he=(ye=D.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var ze,Ce,fe;S.parameters={...S.parameters,docs:{...(ze=S.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.innerHTML = \`
      <div class="p-4 space-y-4">
        <div class="flex flex-wrap gap-2">
          <button id="changeVariant" class="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
            Cambiar Variante
          </button>
          <button id="changeSize" class="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600">
            Cambiar Tamaño
          </button>
          <button id="changeColor" class="px-3 py-1 bg-purple-500 text-white rounded text-sm hover:bg-purple-600">
            Cambiar Color
          </button>
          <button id="toggleLabel" class="px-3 py-1 bg-orange-500 text-white rounded text-sm hover:bg-orange-600">
            Toggle Etiqueta
          </button>
          <button id="changeOrientation" class="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600">
            Cambiar Orientación
          </button>
        </div>
        
        <div class="bg-gray-50 p-4 rounded">
          <p class="text-gray-700 mb-4">Contenido superior</p>
          <div id="dividerContainer"></div>
          <p class="text-gray-700 mt-4">Contenido inferior</p>
        </div>
        
        <div class="text-sm text-gray-600">
          <p><strong>Variante:</strong> <span id="currentVariant">solid</span></p>
          <p><strong>Tamaño:</strong> <span id="currentSize">md</span></p>
          <p><strong>Color:</strong> <span id="currentColor">gray</span></p>
          <p><strong>Orientación:</strong> <span id="currentOrientation">horizontal</span></p>
          <p><strong>Etiqueta:</strong> <span id="currentLabel">ninguna</span></p>
        </div>
      </div>
    \`;
    const divider = new Divider({
      orientation: 'horizontal',
      variant: 'solid',
      size: 'md',
      color: 'gray',
      spacing: 'md'
    });
    const dividerContainer = container.querySelector('#dividerContainer');
    divider.mount(dividerContainer);

    // Event listeners
    container.querySelector('#changeVariant').addEventListener('click', () => {
      const variants = ['solid', 'dashed', 'dotted', 'double'];
      const currentVariant = divider.options.variant;
      const currentIndex = variants.indexOf(currentVariant);
      const nextIndex = (currentIndex + 1) % variants.length;
      divider.setVariant(variants[nextIndex]);
      container.querySelector('#currentVariant').textContent = variants[nextIndex];
    });
    container.querySelector('#changeSize').addEventListener('click', () => {
      const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
      const currentSize = divider.options.size;
      const currentIndex = sizes.indexOf(currentSize);
      const nextIndex = (currentIndex + 1) % sizes.length;
      divider.setSize(sizes[nextIndex]);
      container.querySelector('#currentSize').textContent = sizes[nextIndex];
    });
    container.querySelector('#changeColor').addEventListener('click', () => {
      const colors = ['gray', 'blue', 'green', 'red', 'yellow', 'purple', 'pink', 'indigo'];
      const currentColor = divider.options.color;
      const currentIndex = colors.indexOf(currentColor);
      const nextIndex = (currentIndex + 1) % colors.length;
      divider.setColor(colors[nextIndex]);
      container.querySelector('#currentColor').textContent = colors[nextIndex];
    });
    container.querySelector('#toggleLabel').addEventListener('click', () => {
      if (divider.hasLabel()) {
        divider.removeLabel();
        container.querySelector('#currentLabel').textContent = 'ninguna';
      } else {
        divider.setLabel('Sección');
        container.querySelector('#currentLabel').textContent = 'Sección';
      }
    });
    container.querySelector('#changeOrientation').addEventListener('click', () => {
      const orientations = ['horizontal', 'vertical'];
      const currentOrientation = divider.options.orientation;
      const currentIndex = orientations.indexOf(currentOrientation);
      const nextIndex = (currentIndex + 1) % orientations.length;
      divider.setOrientation(orientations[nextIndex]);
      container.querySelector('#currentOrientation').textContent = orientations[nextIndex];

      // Ajustar el contenedor para orientación vertical
      if (orientations[nextIndex] === 'vertical') {
        dividerContainer.className = 'flex items-center space-x-4 h-20';
        dividerContainer.innerHTML = \`
          <span class="text-gray-700">Izquierda</span>
          \${divider.render()}
          <span class="text-gray-700">Derecha</span>
        \`;
      } else {
        dividerContainer.className = '';
        divider.mount(dividerContainer);
      }
    });
    return container;
  }
}`,...(fe=(Ce=S.parameters)==null?void 0:Ce.docs)==null?void 0:fe.source}}};var De,Se,$e;$.parameters={...$.parameters,docs:{...(De=$.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => {
    const sectionDivider = Divider.section('Información Personal', {
      color: 'blue'
    });
    const contactDivider = Divider.section('Información de Contacto', {
      color: 'green'
    });
    const preferencesDivider = Divider.section('Preferencias', {
      color: 'purple'
    });
    const subtleDivider = Divider.subtle();
    return \`
      <div class="p-4 max-w-2xl">
        <h2 class="text-2xl font-bold mb-6">Formulario de Usuario</h2>
        
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold mb-3">Datos Básicos</h3>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Tu nombre">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Apellido</label>
                <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Tu apellido">
              </div>
            </div>
          </div>
          
          \${sectionDivider.render()}
          
          <div>
            <h3 class="text-lg font-semibold mb-3">Detalles Personales</h3>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Fecha de Nacimiento</label>
                <input type="date" class="w-full px-3 py-2 border border-gray-300 rounded-md">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Género</label>
                <select class="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>Seleccionar...</option>
                  <option>Masculino</option>
                  <option>Femenino</option>
                  <option>Otro</option>
                </select>
              </div>
            </div>
          </div>
          
          \${contactDivider.render()}
          
          <div>
            <h3 class="text-lg font-semibold mb-3">Información de Contacto</h3>
            <div class="space-y-3">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="tu@email.com">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                <input type="tel" class="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="+1 234 567 890">
              </div>
            </div>
          </div>
          
          \${preferencesDivider.render()}
          
          <div>
            <h3 class="text-lg font-semibold mb-3">Preferencias</h3>
            <div class="space-y-3">
              <div class="flex items-center">
                <input type="checkbox" id="newsletter" class="mr-2">
                <label for="newsletter" class="text-sm text-gray-700">Recibir newsletter</label>
              </div>
              <div class="flex items-center">
                <input type="checkbox" id="notifications" class="mr-2">
                <label for="notifications" class="text-sm text-gray-700">Notificaciones push</label>
              </div>
            </div>
          </div>
          
          \${subtleDivider.render()}
          
          <div class="flex justify-end space-x-3">
            <button class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
              Cancelar
            </button>
            <button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Guardar
            </button>
          </div>
        </div>
      </div>
    \`;
  }
}`,...($e=(Se=$.parameters)==null?void 0:Se.docs)==null?void 0:$e.source}}};const Le=["Default","Horizontal","Vertical","WithLabel","LabelLeft","LabelRight","SolidVariant","DashedVariant","DottedVariant","DoubleVariant","AllSizes","AllColors","AllSpacings","AllVariants","StaticMethods","MultipleDividers","Interactive","RealWorldExamples"];export{h as AllColors,y as AllSizes,z as AllSpacings,C as AllVariants,u as DashedVariant,d as Default,b as DottedVariant,x as DoubleVariant,l as Horizontal,S as Interactive,v as LabelLeft,g as LabelRight,D as MultipleDividers,$ as RealWorldExamples,m as SolidVariant,f as StaticMethods,c as Vertical,p as WithLabel,Le as __namedExportsOrder,we as default};
