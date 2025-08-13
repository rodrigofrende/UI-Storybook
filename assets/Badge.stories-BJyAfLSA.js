class n{constructor(e={}){this.options={text:"",variant:"default",size:"md",rounded:!0,removable:!1,onRemove:null,icon:"",...e},this.id=this.generateId()}generateId(){return"badge-"+Math.random().toString(36).substr(2,9)}render(){const e=this.getVariantClasses(),t=this.getSizeClasses(),a=this.options.rounded?"rounded-full":"rounded-md";return`
      <span 
        class="inline-flex items-center font-medium ${e.background} ${e.text} ${e.border} ${t} ${a} transition-colors duration-200"
        id="${this.id}"
      >
        ${this.options.icon?`
          <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            ${this.options.icon}
          </svg>
        `:""}
        
        ${this.options.text}
        
        ${this.options.removable?`
          <button
            type="button"
            class="ml-1.5 -mr-1 h-4 w-4 rounded-full inline-flex items-center justify-center text-current hover:bg-black hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-current transition-colors duration-200"
            onclick="this.remove()"
            aria-label="Remove badge"
          >
            <svg class="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </button>
        `:""}
      </span>
    `}getVariantClasses(){const e={default:{background:"bg-gray-100",text:"text-gray-800",border:"border border-gray-200"},primary:{background:"bg-blue-100",text:"text-blue-800",border:"border border-blue-200"},success:{background:"bg-green-100",text:"text-green-800",border:"border border-green-200"},warning:{background:"bg-yellow-100",text:"text-yellow-800",border:"border border-yellow-200"},danger:{background:"bg-red-100",text:"text-red-800",border:"border border-red-200"},info:{background:"bg-indigo-100",text:"text-indigo-800",border:"border border-indigo-200"},outline:{background:"bg-transparent",text:"text-gray-600",border:"border border-gray-300"},dot:{background:"bg-gray-100",text:"text-gray-800",border:"border border-gray-200"}};return e[this.options.variant]||e.default}getSizeClasses(){const e={sm:"px-2 py-0.5 text-xs",md:"px-2.5 py-1 text-sm",lg:"px-3 py-1.5 text-base"};return e[this.options.size]||e.md}setText(e){this.options.text=e,this.updateDisplay()}setVariant(e){this.options.variant=e,this.updateDisplay()}setSize(e){this.options.size=e,this.updateDisplay()}setRounded(e){this.options.rounded=e,this.updateDisplay()}setRemovable(e,t=null){this.options.removable=e,t&&(this.options.onRemove=t),this.updateDisplay()}setIcon(e){this.options.icon=e,this.updateDisplay()}remove(){typeof this.options.onRemove=="function"&&this.options.onRemove(this),this.triggerEvent("remove",{badge:this});const e=document.getElementById(this.id);e&&e.remove()}updateDisplay(){const e=document.getElementById(this.id);e&&(e.outerHTML=this.render())}triggerEvent(e,t={}){const a=new CustomEvent(`badge:${e}`,{detail:{badge:this,...t},bubbles:!0});document.dispatchEvent(a)}mount(e){typeof e=="string"&&(e=document.querySelector(e)),e&&(e.innerHTML=this.render(),this.attachEventListeners())}attachEventListeners(){const e=document.querySelector(`#${this.id} button[onclick*="remove"]`);e&&e.addEventListener("click",()=>this.remove())}static default(e,t={}){return new n({text:e,variant:"default",...t})}static primary(e,t={}){return new n({text:e,variant:"primary",...t})}static success(e,t={}){return new n({text:e,variant:"success",...t})}static warning(e,t={}){return new n({text:e,variant:"warning",...t})}static danger(e,t={}){return new n({text:e,variant:"danger",...t})}static info(e,t={}){return new n({text:e,variant:"info",...t})}static outline(e,t={}){return new n({text:e,variant:"outline",...t})}static dot(e,t={}){return new n({text:e,variant:"dot",...t})}static counter(e,t={}){const a=e>99?"99+":e.toString();return new n({text:a,variant:"primary",size:"sm",...t})}static status(e,t={}){const a={online:{variant:"success",text:"Online"},offline:{variant:"danger",text:"Offline"},away:{variant:"warning",text:"Away"},busy:{variant:"danger",text:"Busy"}},s=a[e.toLowerCase()]||a.offline;return new n({...s,...t})}static notification(e,t={}){return new n({text:e>0?e.toString():"",variant:"danger",size:"sm",rounded:!0,...t})}getHTML(){return this.render()}clone(){return new n({...this.options})}}const Ie={title:"Data Display/Badge",component:n,parameters:{docs:{description:{component:"El componente Badge muestra etiquetas pequeñas para categorizar, etiquetar o mostrar información de estado. Soporta diferentes variantes, tamaños, iconos y opciones de eliminación."}}},argTypes:{text:{control:"text",description:"Texto del badge"},variant:{control:{type:"select"},options:["default","primary","success","warning","danger","info","outline","dot"],description:"Estilo visual del badge"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Tamaño del badge"},rounded:{control:"boolean",description:"Si el badge debe ser completamente redondeado"},removable:{control:"boolean",description:"Si el badge se puede eliminar"},icon:{control:"text",description:"SVG path para el icono"}}},i={args:{text:"Badge",variant:"default",size:"md",rounded:!0},render:r=>new n(r).render()},c={args:{text:"Primary",variant:"primary",size:"md",rounded:!0},render:r=>new n(r).render()},l={args:{text:"Success",variant:"success",size:"md",rounded:!0},render:r=>new n(r).render()},g={args:{text:"Warning",variant:"warning",size:"md",rounded:!0},render:r=>new n(r).render()},u={args:{text:"Danger",variant:"danger",size:"md",rounded:!0},render:r=>new n(r).render()},p={args:{text:"Info",variant:"info",size:"md",rounded:!0},render:r=>new n(r).render()},b={args:{text:"Outline",variant:"outline",size:"md",rounded:!1},render:r=>new n(r).render()},m={args:{text:"Dot",variant:"dot",size:"md",rounded:!0},render:r=>new n(r).render()},v={render:()=>`
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Todos los tamaños disponibles</h3>
        ${["sm","md","lg"].map(t=>`
        <div class="mb-2">
          ${new n({text:`Size ${t}`,variant:"primary",size:t,rounded:!0}).render()}
        </div>
      `).join("")}
      </div>
    `},x={render:()=>`
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Todas las variantes disponibles</h3>
        ${[{variant:"default",label:"Default"},{variant:"primary",label:"Primary"},{variant:"success",label:"Success"},{variant:"warning",label:"Warning"},{variant:"danger",label:"Danger"},{variant:"info",label:"Info"},{variant:"outline",label:"Outline"},{variant:"dot",label:"Dot"}].map(({variant:t,label:a})=>`
        <div class="mb-2">
          ${new n({text:a,variant:t,size:"md",rounded:!0}).render()}
        </div>
      `).join("")}
      </div>
    `},f={render:()=>`
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Badges con iconos</h3>
        ${[{text:"Check",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>',variant:"success"},{text:"Info",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>',variant:"info"},{text:"Warning",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"></path>',variant:"warning"},{text:"Error",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>',variant:"danger"}].map(({text:t,icon:a,variant:s})=>`
        <div class="mb-2">
          ${new n({text:t,icon:a,variant:s,size:"md",rounded:!0}).render()}
        </div>
      `).join("")}
      </div>
    `},h={render:()=>`
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Badges removibles</h3>
        <p class="text-sm text-gray-600 mb-4">Haz clic en la X para eliminar el badge</p>
        ${[{text:"Removable",variant:"primary"},{text:"Eliminable",variant:"success"},{text:"Borrable",variant:"warning"}].map(({text:t,variant:a})=>`
        <div class="mb-2">
          ${new n({text:t,variant:a,size:"md",rounded:!0,removable:!0}).render()}
        </div>
      `).join("")}
      </div>
    `},y={render:()=>{const r=n.default("Default"),e=n.primary("Primary"),t=n.success("Success"),a=n.warning("Warning"),s=n.danger("Danger"),d=n.info("Info"),o=n.outline("Outline"),ke=n.dot("Dot");return`
      <div class="p-4 space-y-4">
        <h3 class="text-lg font-semibold">Métodos estáticos</h3>
        <div class="space-y-2">
          ${r.render()}
          ${e.render()}
          ${t.render()}
          ${a.render()}
          ${s.render()}
          ${d.render()}
          ${o.render()}
          ${ke.render()}
        </div>
      </div>
    `}},B={render:()=>`
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Badges de contador</h3>
        ${[n.counter(5),n.counter(25),n.counter(150),n.counter(0)].map(t=>`
      <div class="mb-2">
        ${t.render()}
      </div>
    `).join("")}
      </div>
    `},w={render:()=>`
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Badges de estado</h3>
        ${[n.status("online"),n.status("offline"),n.status("away"),n.status("busy")].map(t=>`
      <div class="mb-2">
        ${t.render()}
      </div>
    `).join("")}
      </div>
    `},S={render:()=>`
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Badges de notificación</h3>
        ${[n.notification(3),n.notification(12),n.notification(99),n.notification(0)].map(t=>`
      <div class="mb-2">
        ${t.render()}
      </div>
    `).join("")}
      </div>
    `},$={render:()=>{const r=document.createElement("div");r.innerHTML=`
      <div class="p-4 space-y-4">
        <div class="flex flex-wrap gap-2">
          <button id="changeVariant" class="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
            Cambiar Variante
          </button>
          <button id="changeSize" class="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600">
            Cambiar Tamaño
          </button>
          <button id="toggleRounded" class="px-3 py-1 bg-purple-500 text-white rounded text-sm hover:bg-purple-600">
            Toggle Redondeado
          </button>
          <button id="toggleRemovable" class="px-3 py-1 bg-orange-500 text-white rounded text-sm hover:bg-orange-600">
            Toggle Removible
          </button>
          <button id="toggleIcon" class="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600">
            Toggle Icono
          </button>
        </div>
        
        <div class="bg-gray-50 p-4 rounded">
          <div id="badgeContainer"></div>
        </div>
        
        <div class="text-sm text-gray-600">
          <p><strong>Variante:</strong> <span id="currentVariant">primary</span></p>
          <p><strong>Tamaño:</strong> <span id="currentSize">md</span></p>
          <p><strong>Redondeado:</strong> <span id="currentRounded">true</span></p>
          <p><strong>Removible:</strong> <span id="currentRemovable">false</span></p>
          <p><strong>Icono:</strong> <span id="currentIcon">ninguno</span></p>
        </div>
      </div>
    `;const e=new n({text:"Badge Interactivo",variant:"primary",size:"md",rounded:!0,removable:!1}),t=r.querySelector("#badgeContainer");return e.mount(t),r.querySelector("#changeVariant").addEventListener("click",()=>{const a=["default","primary","success","warning","danger","info","outline","dot"],s=e.options.variant,o=(a.indexOf(s)+1)%a.length;e.setVariant(a[o]),r.querySelector("#currentVariant").textContent=a[o]}),r.querySelector("#changeSize").addEventListener("click",()=>{const a=["sm","md","lg"],s=e.options.size,o=(a.indexOf(s)+1)%a.length;e.setSize(a[o]),r.querySelector("#currentSize").textContent=a[o]}),r.querySelector("#toggleRounded").addEventListener("click",()=>{const a=!e.options.rounded;e.setRounded(a),r.querySelector("#currentRounded").textContent=a.toString()}),r.querySelector("#toggleRemovable").addEventListener("click",()=>{const a=!e.options.removable;e.setRemovable(a),r.querySelector("#currentRemovable").textContent=a.toString()}),r.querySelector("#toggleIcon").addEventListener("click",()=>{e.options.icon?(e.setIcon(""),r.querySelector("#currentIcon").textContent="ninguno"):(e.setIcon('<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>'),r.querySelector("#currentIcon").textContent="check")}),r}},z={render:()=>{const r=n.status("online"),e=n.danger("Alta"),t=n.info("Desarrollo"),a=n.notification(5);return`
      <div class="p-4 max-w-2xl">
        <h2 class="text-2xl font-bold mb-6">Ejemplos de uso real</h2>
        
        <div class="space-y-6">
          <div class="border border-gray-200 rounded-lg p-4">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-lg font-semibold">Tarea #1234</h3>
              ${r.render()}
            </div>
            <p class="text-gray-700 mb-3">Implementar nueva funcionalidad de autenticación</p>
            <div class="flex items-center space-x-2">
              ${e.render()}
              ${t.render()}
              <span class="text-sm text-gray-500">Asignado a: Juan Pérez</span>
            </div>
          </div>
          
          <div class="border border-gray-200 rounded-lg p-4">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-lg font-semibold">Notificaciones</h3>
              ${a.render()}
            </div>
            <div class="space-y-2">
              <div class="flex items-center space-x-2">
                ${n.success("Nuevo").render()}
                <span class="text-sm">Usuario registrado exitosamente</span>
              </div>
              <div class="flex items-center space-x-2">
                ${n.warning("Pendiente").render()}
                <span class="text-sm">Revisión de código requerida</span>
              </div>
              <div class="flex items-center space-x-2">
                ${n.danger("Error").render()}
                <span class="text-sm">Falló la conexión a la base de datos</span>
              </div>
            </div>
          </div>
          
          <div class="border border-gray-200 rounded-lg p-4">
            <h3 class="text-lg font-semibold mb-3">Etiquetas de producto</h3>
            <div class="flex flex-wrap gap-2">
              ${n.outline("Electrónica").render()}
              ${n.outline("Gaming").render()}
              ${n.outline("Inalámbrico").render()}
              ${n.primary("Oferta").render()}
              ${n.success("En stock").render()}
            </div>
          </div>
        </div>
      </div>
    `}};var k,I,R;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    text: 'Badge',
    variant: 'default',
    size: 'md',
    rounded: true
  },
  render: args => {
    const badge = new Badge(args);
    return badge.render();
  }
}`,...(R=(I=i.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var E,C,q;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    text: 'Primary',
    variant: 'primary',
    size: 'md',
    rounded: true
  },
  render: args => {
    const badge = new Badge(args);
    return badge.render();
  }
}`,...(q=(C=c.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};var D,L,j;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    text: 'Success',
    variant: 'success',
    size: 'md',
    rounded: true
  },
  render: args => {
    const badge = new Badge(args);
    return badge.render();
  }
}`,...(j=(L=l.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var M,T,V;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    text: 'Warning',
    variant: 'warning',
    size: 'md',
    rounded: true
  },
  render: args => {
    const badge = new Badge(args);
    return badge.render();
  }
}`,...(V=(T=g.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var O,W,F;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    text: 'Danger',
    variant: 'danger',
    size: 'md',
    rounded: true
  },
  render: args => {
    const badge = new Badge(args);
    return badge.render();
  }
}`,...(F=(W=u.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var P,A,H;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    text: 'Info',
    variant: 'info',
    size: 'md',
    rounded: true
  },
  render: args => {
    const badge = new Badge(args);
    return badge.render();
  }
}`,...(H=(A=p.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var N,G,J;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    text: 'Outline',
    variant: 'outline',
    size: 'md',
    rounded: false
  },
  render: args => {
    const badge = new Badge(args);
    return badge.render();
  }
}`,...(J=(G=b.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var U,X,K;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    text: 'Dot',
    variant: 'dot',
    size: 'md',
    rounded: true
  },
  render: args => {
    const badge = new Badge(args);
    return badge.render();
  }
}`,...(K=(X=m.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var Q,Y,Z;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const sizes = ['sm', 'md', 'lg'];
    const badges = sizes.map(size => {
      const badge = new Badge({
        text: \`Size \${size}\`,
        variant: 'primary',
        size: size,
        rounded: true
      });
      return \`
        <div class="mb-2">
          \${badge.render()}
        </div>
      \`;
    });
    return \`
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Todos los tamaños disponibles</h3>
        \${badges.join('')}
      </div>
    \`;
  }
}`,...(Z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var _,ee,ne;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const variants = [{
      variant: 'default',
      label: 'Default'
    }, {
      variant: 'primary',
      label: 'Primary'
    }, {
      variant: 'success',
      label: 'Success'
    }, {
      variant: 'warning',
      label: 'Warning'
    }, {
      variant: 'danger',
      label: 'Danger'
    }, {
      variant: 'info',
      label: 'Info'
    }, {
      variant: 'outline',
      label: 'Outline'
    }, {
      variant: 'dot',
      label: 'Dot'
    }];
    const badges = variants.map(({
      variant,
      label
    }) => {
      const badge = new Badge({
        text: label,
        variant: variant,
        size: 'md',
        rounded: true
      });
      return \`
        <div class="mb-2">
          \${badge.render()}
        </div>
      \`;
    });
    return \`
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Todas las variantes disponibles</h3>
        \${badges.join('')}
      </div>
    \`;
  }
}`,...(ne=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,re,ae;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const iconBadges = [{
      text: 'Check',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>',
      variant: 'success'
    }, {
      text: 'Info',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>',
      variant: 'info'
    }, {
      text: 'Warning',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"></path>',
      variant: 'warning'
    }, {
      text: 'Error',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>',
      variant: 'danger'
    }];
    const badges = iconBadges.map(({
      text,
      icon,
      variant
    }) => {
      const badge = new Badge({
        text: text,
        icon: icon,
        variant: variant,
        size: 'md',
        rounded: true
      });
      return \`
        <div class="mb-2">
          \${badge.render()}
        </div>
      \`;
    });
    return \`
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Badges con iconos</h3>
        \${badges.join('')}
      </div>
    \`;
  }
}`,...(ae=(re=f.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,oe,de;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const removableBadges = [{
      text: 'Removable',
      variant: 'primary'
    }, {
      text: 'Eliminable',
      variant: 'success'
    }, {
      text: 'Borrable',
      variant: 'warning'
    }];
    const badges = removableBadges.map(({
      text,
      variant
    }) => {
      const badge = new Badge({
        text: text,
        variant: variant,
        size: 'md',
        rounded: true,
        removable: true
      });
      return \`
        <div class="mb-2">
          \${badge.render()}
        </div>
      \`;
    });
    return \`
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Badges removibles</h3>
        <p class="text-sm text-gray-600 mb-4">Haz clic en la X para eliminar el badge</p>
        \${badges.join('')}
      </div>
    \`;
  }
}`,...(de=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var ie,ce,le;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    const defaultBadge = Badge.default('Default');
    const primaryBadge = Badge.primary('Primary');
    const successBadge = Badge.success('Success');
    const warningBadge = Badge.warning('Warning');
    const dangerBadge = Badge.danger('Danger');
    const infoBadge = Badge.info('Info');
    const outlineBadge = Badge.outline('Outline');
    const dotBadge = Badge.dot('Dot');
    return \`
      <div class="p-4 space-y-4">
        <h3 class="text-lg font-semibold">Métodos estáticos</h3>
        <div class="space-y-2">
          \${defaultBadge.render()}
          \${primaryBadge.render()}
          \${successBadge.render()}
          \${warningBadge.render()}
          \${dangerBadge.render()}
          \${infoBadge.render()}
          \${outlineBadge.render()}
          \${dotBadge.render()}
        </div>
      </div>
    \`;
  }
}`,...(le=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var ge,ue,pe;B.parameters={...B.parameters,docs:{...(ge=B.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => {
    const counterBadges = [Badge.counter(5), Badge.counter(25), Badge.counter(150), Badge.counter(0)];
    const badges = counterBadges.map(badge => \`
      <div class="mb-2">
        \${badge.render()}
      </div>
    \`);
    return \`
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Badges de contador</h3>
        \${badges.join('')}
      </div>
    \`;
  }
}`,...(pe=(ue=B.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var be,me,ve;w.parameters={...w.parameters,docs:{...(be=w.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => {
    const statusBadges = [Badge.status('online'), Badge.status('offline'), Badge.status('away'), Badge.status('busy')];
    const badges = statusBadges.map(badge => \`
      <div class="mb-2">
        \${badge.render()}
      </div>
    \`);
    return \`
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Badges de estado</h3>
        \${badges.join('')}
      </div>
    \`;
  }
}`,...(ve=(me=w.parameters)==null?void 0:me.docs)==null?void 0:ve.source}}};var xe,fe,he;S.parameters={...S.parameters,docs:{...(xe=S.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => {
    const notificationBadges = [Badge.notification(3), Badge.notification(12), Badge.notification(99), Badge.notification(0)];
    const badges = notificationBadges.map(badge => \`
      <div class="mb-2">
        \${badge.render()}
      </div>
    \`);
    return \`
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Badges de notificación</h3>
        \${badges.join('')}
      </div>
    \`;
  }
}`,...(he=(fe=S.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var ye,Be,we;$.parameters={...$.parameters,docs:{...(ye=$.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
          <button id="toggleRounded" class="px-3 py-1 bg-purple-500 text-white rounded text-sm hover:bg-purple-600">
            Toggle Redondeado
          </button>
          <button id="toggleRemovable" class="px-3 py-1 bg-orange-500 text-white rounded text-sm hover:bg-orange-600">
            Toggle Removible
          </button>
          <button id="toggleIcon" class="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600">
            Toggle Icono
          </button>
        </div>
        
        <div class="bg-gray-50 p-4 rounded">
          <div id="badgeContainer"></div>
        </div>
        
        <div class="text-sm text-gray-600">
          <p><strong>Variante:</strong> <span id="currentVariant">primary</span></p>
          <p><strong>Tamaño:</strong> <span id="currentSize">md</span></p>
          <p><strong>Redondeado:</strong> <span id="currentRounded">true</span></p>
          <p><strong>Removible:</strong> <span id="currentRemovable">false</span></p>
          <p><strong>Icono:</strong> <span id="currentIcon">ninguno</span></p>
        </div>
      </div>
    \`;
    const badge = new Badge({
      text: 'Badge Interactivo',
      variant: 'primary',
      size: 'md',
      rounded: true,
      removable: false
    });
    const badgeContainer = container.querySelector('#badgeContainer');
    badge.mount(badgeContainer);

    // Event listeners
    container.querySelector('#changeVariant').addEventListener('click', () => {
      const variants = ['default', 'primary', 'success', 'warning', 'danger', 'info', 'outline', 'dot'];
      const currentVariant = badge.options.variant;
      const currentIndex = variants.indexOf(currentVariant);
      const nextIndex = (currentIndex + 1) % variants.length;
      badge.setVariant(variants[nextIndex]);
      container.querySelector('#currentVariant').textContent = variants[nextIndex];
    });
    container.querySelector('#changeSize').addEventListener('click', () => {
      const sizes = ['sm', 'md', 'lg'];
      const currentSize = badge.options.size;
      const currentIndex = sizes.indexOf(currentSize);
      const nextIndex = (currentIndex + 1) % sizes.length;
      badge.setSize(sizes[nextIndex]);
      container.querySelector('#currentSize').textContent = sizes[nextIndex];
    });
    container.querySelector('#toggleRounded').addEventListener('click', () => {
      const newRounded = !badge.options.rounded;
      badge.setRounded(newRounded);
      container.querySelector('#currentRounded').textContent = newRounded.toString();
    });
    container.querySelector('#toggleRemovable').addEventListener('click', () => {
      const newRemovable = !badge.options.removable;
      badge.setRemovable(newRemovable);
      container.querySelector('#currentRemovable').textContent = newRemovable.toString();
    });
    container.querySelector('#toggleIcon').addEventListener('click', () => {
      if (badge.options.icon) {
        badge.setIcon('');
        container.querySelector('#currentIcon').textContent = 'ninguno';
      } else {
        badge.setIcon('<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>');
        container.querySelector('#currentIcon').textContent = 'check';
      }
    });
    return container;
  }
}`,...(we=(Be=$.parameters)==null?void 0:Be.docs)==null?void 0:we.source}}};var Se,$e,ze;z.parameters={...z.parameters,docs:{...(Se=z.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => {
    const statusBadge = Badge.status('online');
    const priorityBadge = Badge.danger('Alta');
    const categoryBadge = Badge.info('Desarrollo');
    const notificationBadge = Badge.notification(5);
    return \`
      <div class="p-4 max-w-2xl">
        <h2 class="text-2xl font-bold mb-6">Ejemplos de uso real</h2>
        
        <div class="space-y-6">
          <div class="border border-gray-200 rounded-lg p-4">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-lg font-semibold">Tarea #1234</h3>
              \${statusBadge.render()}
            </div>
            <p class="text-gray-700 mb-3">Implementar nueva funcionalidad de autenticación</p>
            <div class="flex items-center space-x-2">
              \${priorityBadge.render()}
              \${categoryBadge.render()}
              <span class="text-sm text-gray-500">Asignado a: Juan Pérez</span>
            </div>
          </div>
          
          <div class="border border-gray-200 rounded-lg p-4">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-lg font-semibold">Notificaciones</h3>
              \${notificationBadge.render()}
            </div>
            <div class="space-y-2">
              <div class="flex items-center space-x-2">
                \${Badge.success('Nuevo').render()}
                <span class="text-sm">Usuario registrado exitosamente</span>
              </div>
              <div class="flex items-center space-x-2">
                \${Badge.warning('Pendiente').render()}
                <span class="text-sm">Revisión de código requerida</span>
              </div>
              <div class="flex items-center space-x-2">
                \${Badge.danger('Error').render()}
                <span class="text-sm">Falló la conexión a la base de datos</span>
              </div>
            </div>
          </div>
          
          <div class="border border-gray-200 rounded-lg p-4">
            <h3 class="text-lg font-semibold mb-3">Etiquetas de producto</h3>
            <div class="flex flex-wrap gap-2">
              \${Badge.outline('Electrónica').render()}
              \${Badge.outline('Gaming').render()}
              \${Badge.outline('Inalámbrico').render()}
              \${Badge.primary('Oferta').render()}
              \${Badge.success('En stock').render()}
            </div>
          </div>
        </div>
      </div>
    \`;
  }
}`,...(ze=($e=z.parameters)==null?void 0:$e.docs)==null?void 0:ze.source}}};const Re=["Default","Primary","Success","Warning","Danger","Info","Outline","Dot","AllSizes","AllVariants","WithIcons","Removable","StaticMethods","Counters","Status","Notifications","Interactive","RealWorldExamples"];export{v as AllSizes,x as AllVariants,B as Counters,u as Danger,i as Default,m as Dot,p as Info,$ as Interactive,S as Notifications,b as Outline,c as Primary,z as RealWorldExamples,h as Removable,y as StaticMethods,w as Status,l as Success,g as Warning,f as WithIcons,Re as __namedExportsOrder,Ie as default};
