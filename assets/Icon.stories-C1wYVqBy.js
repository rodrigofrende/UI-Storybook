class p{constructor(e={}){this.options={name:"star",size:"md",color:"currentColor",className:"",...e},this.iconLibrary=this.createIconLibrary()}createIconLibrary(){return{menu:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>',search:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>',close:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>',chevronDown:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>',chevronUp:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>',chevronLeft:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>',chevronRight:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>',arrowRight:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>',edit:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>',delete:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>',add:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>',save:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path>',check:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>',warning:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"></path>',error:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>',info:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>',star:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>',heart:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>',like:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>',mail:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>',phone:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>',chat:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>',home:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>',settings:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>',user:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>',bell:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.59 4.59A2 2 0 1111.83 6.83L9.59 9.06a2 2 0 01-2.83 0L5.17 6.83A2 2 0 111.41 4.59L3.64 2.36a2 2 0 012.83 0L9.59 4.59z"></path>',download:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>',upload:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>',share:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>',play:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>',pause:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>',volume:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>',custom:'<circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path>'}}render(){const e={xs:"w-3 h-3",sm:"w-4 h-4",md:"w-5 h-5",lg:"w-6 h-6",xl:"w-8 h-8"},l=this.iconLibrary[this.options.name]||this.iconLibrary.custom;return`
      <svg 
        class="${e[this.options.size]} ${this.options.className}"
        fill="none" 
        stroke="${this.options.color}" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        ${l}
      </svg>
    `}setIcon(e){return this.options.name=e,this}setSize(e){return this.options.size=e,this}setColor(e){return this.options.color=e,this}setClassName(e){return this.options.className=e,this}mount(e){typeof e=="string"&&(e=document.querySelector(e)),e&&(e.innerHTML=this.render())}getHTML(){return this.render()}getSVG(){const e=document.createElement("div");return e.innerHTML=this.render(),e.firstElementChild}addCustomIcon(e,l){return this.iconLibrary[e]=l,this}getAvailableIcons(){return Object.keys(this.iconLibrary)}}const oe={title:"Components/Icon",component:p,parameters:{docs:{description:{component:"Un componente de iconos versátil con una biblioteca integrada de iconos SVG y múltiples tamaños y colores."}}},argTypes:{name:{control:{type:"select"},options:["menu","search","close","chevronDown","chevronUp","chevronLeft","chevronRight","arrowRight","edit","delete","add","save","check","warning","error","info","star","heart","like","mail","phone","chat","home","settings","user","bell","download","upload","share","play","pause","volume","custom"],description:"Nombre del icono a mostrar"},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"],description:"Tamaño del icono"},color:{control:"color",description:"Color del icono"},className:{control:"text",description:"Clases CSS adicionales"}}},u={args:{name:"star",size:"md",color:"currentColor",className:""},render:o=>{const e=new p(o),l=document.createElement("div");l.style.padding="20px",l.style.display="flex",l.style.alignItems="center",l.style.gap="10px",e.mount(l);const i=document.createElement("span");return i.textContent=`Icono: ${o.name}`,i.style.fontSize="14px",i.style.color="#666",l.appendChild(i),l}},h={render:()=>{const o=document.createElement("div");o.style.padding="20px";const e=document.createElement("h3");e.textContent="Iconos de Navegación",e.style.marginBottom="20px",e.style.color="#333",o.appendChild(e);const l=["menu","search","close","chevronDown","chevronUp","chevronLeft","chevronRight","arrowRight"],i=["Menú","Búsqueda","Cerrar","Flecha Abajo","Flecha Arriba","Flecha Izquierda","Flecha Derecha","Flecha Derecha"],c=document.createElement("div");return c.style.display="grid",c.style.gridTemplateColumns="repeat(auto-fit, minmax(120px, 1fr))",c.style.gap="20px",l.forEach((a,d)=>{const r=document.createElement("div");r.style.textAlign="center",r.style.padding="15px",r.style.border="1px solid #e5e7eb",r.style.borderRadius="8px",r.style.backgroundColor="#f9fafb",new p({name:a,size:"lg",color:"#3b82f6"}).mount(r);const s=document.createElement("div");s.textContent=i[d],s.style.marginTop="10px",s.style.fontSize="12px",s.style.color="#6b7280",s.style.fontWeight="500",r.appendChild(s),c.appendChild(r)}),o.appendChild(c),o}},y={render:()=>{const o=document.createElement("div");o.style.padding="20px";const e=document.createElement("h3");e.textContent="Iconos de Acciones",e.style.marginBottom="20px",e.style.color="#333",o.appendChild(e);const l=["edit","delete","add","save"],i=["Editar","Eliminar","Agregar","Guardar"],c=["#10b981","#ef4444","#3b82f6","#8b5cf6"],a=document.createElement("div");return a.style.display="grid",a.style.gridTemplateColumns="repeat(auto-fit, minmax(120px, 1fr))",a.style.gap="20px",l.forEach((d,r)=>{const t=document.createElement("div");t.style.textAlign="center",t.style.padding="15px",t.style.border="1px solid #e5e7eb",t.style.borderRadius="8px",t.style.backgroundColor="#f9fafb",new p({name:d,size:"lg",color:c[r]}).mount(t);const n=document.createElement("div");n.textContent=i[r],n.style.marginTop="10px",n.style.fontSize="12px",n.style.color="#6b7280",n.style.fontWeight="500",t.appendChild(n),a.appendChild(t)}),o.appendChild(a),o}},g={render:()=>{const o=document.createElement("div");o.style.padding="20px";const e=document.createElement("h3");e.textContent="Iconos de Estado",e.style.marginBottom="20px",e.style.color="#333",o.appendChild(e);const l=["check","warning","error","info"],i=["Éxito","Advertencia","Error","Información"],c=["#10b981","#f59e0b","#ef4444","#3b82f6"],a=document.createElement("div");return a.style.display="grid",a.style.gridTemplateColumns="repeat(auto-fit, minmax(120px, 1fr))",a.style.gap="20px",l.forEach((d,r)=>{const t=document.createElement("div");t.style.textAlign="center",t.style.padding="15px",t.style.border="1px solid #e5e7eb",t.style.borderRadius="8px",t.style.backgroundColor="#f9fafb",new p({name:d,size:"lg",color:c[r]}).mount(t);const n=document.createElement("div");n.textContent=i[r],n.style.marginTop="10px",n.style.fontSize="12px",n.style.color="#6b7280",n.style.fontWeight="500",t.appendChild(n),a.appendChild(t)}),o.appendChild(a),o}},x={render:()=>{const o=document.createElement("div");o.style.padding="20px";const e=document.createElement("h3");e.textContent="Iconos Sociales",e.style.marginBottom="20px",e.style.color="#333",o.appendChild(e);const l=["star","heart","like"],i=["Favorito","Me Gusta","Like"],c=["#fbbf24","#ec4899","#3b82f6"],a=document.createElement("div");return a.style.display="grid",a.style.gridTemplateColumns="repeat(auto-fit, minmax(120px, 1fr))",a.style.gap="20px",l.forEach((d,r)=>{const t=document.createElement("div");t.style.textAlign="center",t.style.padding="15px",t.style.border="1px solid #e5e7eb",t.style.borderRadius="8px",t.style.backgroundColor="#f9fafb",new p({name:d,size:"lg",color:c[r]}).mount(t);const n=document.createElement("div");n.textContent=i[r],n.style.marginTop="10px",n.style.fontSize="12px",n.style.color="#6b7280",n.style.fontWeight="500",t.appendChild(n),a.appendChild(t)}),o.appendChild(a),o}},C={render:()=>{const o=document.createElement("div");o.style.padding="20px";const e=document.createElement("h3");e.textContent="Iconos de Comunicación",e.style.marginBottom="20px",e.style.color="#333",o.appendChild(e);const l=["mail","phone","chat"],i=["Correo","Teléfono","Chat"],c=["#3b82f6","#10b981","#8b5cf6"],a=document.createElement("div");return a.style.display="grid",a.style.gridTemplateColumns="repeat(auto-fit, minmax(120px, 1fr))",a.style.gap="20px",l.forEach((d,r)=>{const t=document.createElement("div");t.style.textAlign="center",t.style.padding="15px",t.style.border="1px solid #e5e7eb",t.style.borderRadius="8px",t.style.backgroundColor="#f9fafb",new p({name:d,size:"lg",color:c[r]}).mount(t);const n=document.createElement("div");n.textContent=i[r],n.style.marginTop="10px",n.style.fontSize="12px",n.style.color="#6b7280",n.style.fontWeight="500",t.appendChild(n),a.appendChild(t)}),o.appendChild(a),o}},b={render:()=>{const o=document.createElement("div");o.style.padding="20px";const e=document.createElement("h3");e.textContent="Iconos de UI",e.style.marginBottom="20px",e.style.color="#333",o.appendChild(e);const l=["home","settings","user","bell"],i=["Inicio","Configuración","Usuario","Notificaciones"],c=["#3b82f6","#6b7280","#8b5cf6","#f59e0b"],a=document.createElement("div");return a.style.display="grid",a.style.gridTemplateColumns="repeat(auto-fit, minmax(120px, 1fr))",a.style.gap="20px",l.forEach((d,r)=>{const t=document.createElement("div");t.style.textAlign="center",t.style.padding="15px",t.style.border="1px solid #e5e7eb",t.style.borderRadius="8px",t.style.backgroundColor="#f9fafb",new p({name:d,size:"lg",color:c[r]}).mount(t);const n=document.createElement("div");n.textContent=i[r],n.style.marginTop="10px",n.style.fontSize="12px",n.style.color="#6b7280",n.style.fontWeight="500",t.appendChild(n),a.appendChild(t)}),o.appendChild(a),o}},f={render:()=>{const o=document.createElement("div");o.style.padding="20px";const e=document.createElement("h3");e.textContent="Galería de Tamaños",e.style.marginBottom="20px",e.style.color="#333",o.appendChild(e);const l=["xs","sm","md","lg","xl"],i=["Extra Pequeño","Pequeño","Mediano","Grande","Extra Grande"],c=document.createElement("div");return c.style.display="grid",c.style.gridTemplateColumns="repeat(auto-fit, minmax(150px, 1fr))",c.style.gap="20px",l.forEach((a,d)=>{const r=document.createElement("div");r.style.textAlign="center",r.style.padding="20px",r.style.border="1px solid #e5e7eb",r.style.borderRadius="8px",r.style.backgroundColor="#f9fafb",new p({name:"star",size:a,color:"#fbbf24"}).mount(r);const s=document.createElement("div");s.textContent=i[d],s.style.marginTop="15px",s.style.fontSize="14px",s.style.color="#6b7280",s.style.fontWeight="500";const n=document.createElement("div");n.textContent=`(${a})`,n.style.fontSize="12px",n.style.color="#9ca3af",n.style.marginTop="5px",r.appendChild(s),r.appendChild(n),c.appendChild(r)}),o.appendChild(c),o}},v={render:()=>{const o=document.createElement("div");o.style.padding="20px";const e=document.createElement("h3");e.textContent="Galería de Colores",e.style.marginBottom="20px",e.style.color="#333",o.appendChild(e);const l=[{name:"Azul",value:"#3b82f6"},{name:"Verde",value:"#10b981"},{name:"Rojo",value:"#ef4444"},{name:"Amarillo",value:"#f59e0b"},{name:"Púrpura",value:"#8b5cf6"},{name:"Rosa",value:"#ec4899"},{name:"Naranja",value:"#f97316"},{name:"Gris",value:"#6b7280"}],i=document.createElement("div");return i.style.display="grid",i.style.gridTemplateColumns="repeat(auto-fit, minmax(120px, 1fr))",i.style.gap="20px",l.forEach(c=>{const a=document.createElement("div");a.style.textAlign="center",a.style.padding="15px",a.style.border="1px solid #e5e7eb",a.style.borderRadius="8px",a.style.backgroundColor="#f9fafb",new p({name:"heart",size:"lg",color:c.value}).mount(a);const r=document.createElement("div");r.textContent=c.name,r.style.marginTop="10px",r.style.fontSize="12px",r.style.color="#6b7280",r.style.fontWeight="500";const t=document.createElement("div");t.textContent=c.value,t.style.fontSize="10px",t.style.color="#9ca3af",t.style.marginTop="5px",t.style.fontFamily="monospace",a.appendChild(r),a.appendChild(t),i.appendChild(a)}),o.appendChild(i),o}},E={render:()=>{const o=document.createElement("div");o.style.padding="20px";const e=document.createElement("h3");e.textContent="Iconos con Clases Personalizadas",e.style.marginBottom="20px",e.style.color="#333",o.appendChild(e);const l=[{name:"star",className:"animate-pulse",description:"Con animación pulse"},{name:"heart",className:"rotate-12",description:"Rotado 12 grados"},{name:"settings",className:"animate-spin",description:"Con animación spin"},{name:"bell",className:"scale-110",description:"Escalado 110%"}],i=document.createElement("div");return i.style.display="grid",i.style.gridTemplateColumns="repeat(auto-fit, minmax(150px, 1fr))",i.style.gap="20px",l.forEach(c=>{const a=document.createElement("div");a.style.textAlign="center",a.style.padding="20px",a.style.border="1px solid #e5e7eb",a.style.borderRadius="8px",a.style.backgroundColor="#f9fafb",new p({name:c.name,size:"lg",color:"#3b82f6",className:c.className}).mount(a);const r=document.createElement("div");r.textContent=c.description,r.style.marginTop="15px",r.style.fontSize="12px",r.style.color="#6b7280",r.style.fontWeight="500",r.style.textAlign="center",a.appendChild(r),i.appendChild(a)}),o.appendChild(i),o}},k={args:{name:"star",size:"md",color:"#fbbf24",className:""},render:o=>{const e=new p(o),l=document.createElement("div");l.style.padding="20px";const i=document.createElement("div");i.style.marginBottom="20px",i.style.display="flex",i.style.gap="10px",i.style.flexWrap="wrap";const c=document.createElement("select");c.className="px-3 py-1 border rounded",e.getAvailableIcons().forEach(n=>{const m=document.createElement("option");m.value=n,m.textContent=n.charAt(0).toUpperCase()+n.slice(1),m.selected=n===o.name,c.appendChild(m)}),c.onchange=n=>{o.name=n.target.value,e.setIcon(n.target.value),e.mount(s)};const d=document.createElement("select");d.className="px-3 py-1 border rounded",["xs","sm","md","lg","xl"].forEach(n=>{const m=document.createElement("option");m.value=n,m.textContent=n.toUpperCase(),m.selected=n===o.size,d.appendChild(m)}),d.onchange=n=>{o.size=n.target.value,e.setSize(n.target.value),e.mount(s)};const r=document.createElement("input");r.type="color",r.value=o.color,r.className="w-12 h-8 border rounded",r.onchange=n=>{o.color=n.target.value,e.setColor(n.target.value),e.mount(s)};const t=document.createElement("input");t.type="text",t.placeholder="Clases CSS...",t.className="px-3 py-1 border rounded",t.value=o.className,t.onchange=n=>{o.className=n.target.value,e.setClassName(n.target.value),e.mount(s)},i.appendChild(c),i.appendChild(d),i.appendChild(r),i.appendChild(t);const s=document.createElement("div");return s.style.textAlign="center",s.style.padding="40px",s.style.border="2px dashed #d1d5db",s.style.borderRadius="12px",s.style.backgroundColor="#f9fafb",s.style.minHeight="120px",s.style.display="flex",s.style.alignItems="center",s.style.justifyContent="center",e.mount(s),l.appendChild(i),l.appendChild(s),l}};var z,N,I;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    name: 'star',
    size: 'md',
    color: 'currentColor',
    className: ''
  },
  render: args => {
    const icon = new Icon(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.gap = '10px';
    icon.mount(container);
    const label = document.createElement('span');
    label.textContent = \`Icono: \${args.name}\`;
    label.style.fontSize = '14px';
    label.style.color = '#666';
    container.appendChild(label);
    return container;
  }
}`,...(I=(N=u.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var w,S,M;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    const title = document.createElement('h3');
    title.textContent = 'Iconos de Navegación';
    title.style.marginBottom = '20px';
    title.style.color = '#333';
    container.appendChild(title);
    const icons = ['menu', 'search', 'close', 'chevronDown', 'chevronUp', 'chevronLeft', 'chevronRight', 'arrowRight'];
    const iconNames = ['Menú', 'Búsqueda', 'Cerrar', 'Flecha Abajo', 'Flecha Arriba', 'Flecha Izquierda', 'Flecha Derecha', 'Flecha Derecha'];
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(120px, 1fr))';
    grid.style.gap = '20px';
    icons.forEach((iconName, index) => {
      const iconContainer = document.createElement('div');
      iconContainer.style.textAlign = 'center';
      iconContainer.style.padding = '15px';
      iconContainer.style.border = '1px solid #e5e7eb';
      iconContainer.style.borderRadius = '8px';
      iconContainer.style.backgroundColor = '#f9fafb';
      const icon = new Icon({
        name: iconName,
        size: 'lg',
        color: '#3b82f6'
      });
      icon.mount(iconContainer);
      const label = document.createElement('div');
      label.textContent = iconNames[index];
      label.style.marginTop = '10px';
      label.style.fontSize = '12px';
      label.style.color = '#6b7280';
      label.style.fontWeight = '500';
      iconContainer.appendChild(label);
      grid.appendChild(iconContainer);
    });
    container.appendChild(grid);
    return container;
  }
}`,...(M=(S=h.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var A,L,T;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    const title = document.createElement('h3');
    title.textContent = 'Iconos de Acciones';
    title.style.marginBottom = '20px';
    title.style.color = '#333';
    container.appendChild(title);
    const icons = ['edit', 'delete', 'add', 'save'];
    const iconNames = ['Editar', 'Eliminar', 'Agregar', 'Guardar'];
    const colors = ['#10b981', '#ef4444', '#3b82f6', '#8b5cf6'];
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(120px, 1fr))';
    grid.style.gap = '20px';
    icons.forEach((iconName, index) => {
      const iconContainer = document.createElement('div');
      iconContainer.style.textAlign = 'center';
      iconContainer.style.padding = '15px';
      iconContainer.style.border = '1px solid #e5e7eb';
      iconContainer.style.borderRadius = '8px';
      iconContainer.style.backgroundColor = '#f9fafb';
      const icon = new Icon({
        name: iconName,
        size: 'lg',
        color: colors[index]
      });
      icon.mount(iconContainer);
      const label = document.createElement('div');
      label.textContent = iconNames[index];
      label.style.marginTop = '10px';
      label.style.fontSize = '12px';
      label.style.color = '#6b7280';
      label.style.fontWeight = '500';
      iconContainer.appendChild(label);
      grid.appendChild(iconContainer);
    });
    container.appendChild(grid);
    return container;
  }
}`,...(T=(L=y.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var j,R,F;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    const title = document.createElement('h3');
    title.textContent = 'Iconos de Estado';
    title.style.marginBottom = '20px';
    title.style.color = '#333';
    container.appendChild(title);
    const icons = ['check', 'warning', 'error', 'info'];
    const iconNames = ['Éxito', 'Advertencia', 'Error', 'Información'];
    const colors = ['#10b981', '#f59e0b', '#ef4444', '#3b82f6'];
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(120px, 1fr))';
    grid.style.gap = '20px';
    icons.forEach((iconName, index) => {
      const iconContainer = document.createElement('div');
      iconContainer.style.textAlign = 'center';
      iconContainer.style.padding = '15px';
      iconContainer.style.border = '1px solid #e5e7eb';
      iconContainer.style.borderRadius = '8px';
      iconContainer.style.backgroundColor = '#f9fafb';
      const icon = new Icon({
        name: iconName,
        size: 'lg',
        color: colors[index]
      });
      icon.mount(iconContainer);
      const label = document.createElement('div');
      label.textContent = iconNames[index];
      label.style.marginTop = '10px';
      label.style.fontSize = '12px';
      label.style.color = '#6b7280';
      label.style.fontWeight = '500';
      iconContainer.appendChild(label);
      grid.appendChild(iconContainer);
    });
    container.appendChild(grid);
    return container;
  }
}`,...(F=(R=g.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var B,G,W;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    const title = document.createElement('h3');
    title.textContent = 'Iconos Sociales';
    title.style.marginBottom = '20px';
    title.style.color = '#333';
    container.appendChild(title);
    const icons = ['star', 'heart', 'like'];
    const iconNames = ['Favorito', 'Me Gusta', 'Like'];
    const colors = ['#fbbf24', '#ec4899', '#3b82f6'];
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(120px, 1fr))';
    grid.style.gap = '20px';
    icons.forEach((iconName, index) => {
      const iconContainer = document.createElement('div');
      iconContainer.style.textAlign = 'center';
      iconContainer.style.padding = '15px';
      iconContainer.style.border = '1px solid #e5e7eb';
      iconContainer.style.borderRadius = '8px';
      iconContainer.style.backgroundColor = '#f9fafb';
      const icon = new Icon({
        name: iconName,
        size: 'lg',
        color: colors[index]
      });
      icon.mount(iconContainer);
      const label = document.createElement('div');
      label.textContent = iconNames[index];
      label.style.marginTop = '10px';
      label.style.fontSize = '12px';
      label.style.color = '#6b7280';
      label.style.fontWeight = '500';
      iconContainer.appendChild(label);
      grid.appendChild(iconContainer);
    });
    container.appendChild(grid);
    return container;
  }
}`,...(W=(G=x.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var U,H,V;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    const title = document.createElement('h3');
    title.textContent = 'Iconos de Comunicación';
    title.style.marginBottom = '20px';
    title.style.color = '#333';
    container.appendChild(title);
    const icons = ['mail', 'phone', 'chat'];
    const iconNames = ['Correo', 'Teléfono', 'Chat'];
    const colors = ['#3b82f6', '#10b981', '#8b5cf6'];
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(120px, 1fr))';
    grid.style.gap = '20px';
    icons.forEach((iconName, index) => {
      const iconContainer = document.createElement('div');
      iconContainer.style.textAlign = 'center';
      iconContainer.style.padding = '15px';
      iconContainer.style.border = '1px solid #e5e7eb';
      iconContainer.style.borderRadius = '8px';
      iconContainer.style.backgroundColor = '#f9fafb';
      const icon = new Icon({
        name: iconName,
        size: 'lg',
        color: colors[index]
      });
      icon.mount(iconContainer);
      const label = document.createElement('div');
      label.textContent = iconNames[index];
      label.style.marginTop = '10px';
      label.style.fontSize = '12px';
      label.style.color = '#6b7280';
      label.style.fontWeight = '500';
      iconContainer.appendChild(label);
      grid.appendChild(iconContainer);
    });
    container.appendChild(grid);
    return container;
  }
}`,...(V=(H=C.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var D,q,P;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    const title = document.createElement('h3');
    title.textContent = 'Iconos de UI';
    title.style.marginBottom = '20px';
    title.style.color = '#333';
    container.appendChild(title);
    const icons = ['home', 'settings', 'user', 'bell'];
    const iconNames = ['Inicio', 'Configuración', 'Usuario', 'Notificaciones'];
    const colors = ['#3b82f6', '#6b7280', '#8b5cf6', '#f59e0b'];
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(120px, 1fr))';
    grid.style.gap = '20px';
    icons.forEach((iconName, index) => {
      const iconContainer = document.createElement('div');
      iconContainer.style.textAlign = 'center';
      iconContainer.style.padding = '15px';
      iconContainer.style.border = '1px solid #e5e7eb';
      iconContainer.style.borderRadius = '8px';
      iconContainer.style.backgroundColor = '#f9fafb';
      const icon = new Icon({
        name: iconName,
        size: 'lg',
        color: colors[index]
      });
      icon.mount(iconContainer);
      const label = document.createElement('div');
      label.textContent = iconNames[index];
      label.style.marginTop = '10px';
      label.style.fontSize = '12px';
      label.style.color = '#6b7280';
      label.style.fontWeight = '500';
      iconContainer.appendChild(label);
      grid.appendChild(iconContainer);
    });
    container.appendChild(grid);
    return container;
  }
}`,...(P=(q=b.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var $,_,O;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    const title = document.createElement('h3');
    title.textContent = 'Galería de Tamaños';
    title.style.marginBottom = '20px';
    title.style.color = '#333';
    container.appendChild(title);
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
    const sizeNames = ['Extra Pequeño', 'Pequeño', 'Mediano', 'Grande', 'Extra Grande'];
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(150px, 1fr))';
    grid.style.gap = '20px';
    sizes.forEach((size, index) => {
      const iconContainer = document.createElement('div');
      iconContainer.style.textAlign = 'center';
      iconContainer.style.padding = '20px';
      iconContainer.style.border = '1px solid #e5e7eb';
      iconContainer.style.borderRadius = '8px';
      iconContainer.style.backgroundColor = '#f9fafb';
      const icon = new Icon({
        name: 'star',
        size: size,
        color: '#fbbf24'
      });
      icon.mount(iconContainer);
      const label = document.createElement('div');
      label.textContent = sizeNames[index];
      label.style.marginTop = '15px';
      label.style.fontSize = '14px';
      label.style.color = '#6b7280';
      label.style.fontWeight = '500';
      const sizeLabel = document.createElement('div');
      sizeLabel.textContent = \`(\${size})\`;
      sizeLabel.style.fontSize = '12px';
      sizeLabel.style.color = '#9ca3af';
      sizeLabel.style.marginTop = '5px';
      iconContainer.appendChild(label);
      iconContainer.appendChild(sizeLabel);
      grid.appendChild(iconContainer);
    });
    container.appendChild(grid);
    return container;
  }
}`,...(O=(_=f.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var J,K,Q;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    const title = document.createElement('h3');
    title.textContent = 'Galería de Colores';
    title.style.marginBottom = '20px';
    title.style.color = '#333';
    container.appendChild(title);
    const colors = [{
      name: 'Azul',
      value: '#3b82f6'
    }, {
      name: 'Verde',
      value: '#10b981'
    }, {
      name: 'Rojo',
      value: '#ef4444'
    }, {
      name: 'Amarillo',
      value: '#f59e0b'
    }, {
      name: 'Púrpura',
      value: '#8b5cf6'
    }, {
      name: 'Rosa',
      value: '#ec4899'
    }, {
      name: 'Naranja',
      value: '#f97316'
    }, {
      name: 'Gris',
      value: '#6b7280'
    }];
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(120px, 1fr))';
    grid.style.gap = '20px';
    colors.forEach(color => {
      const iconContainer = document.createElement('div');
      iconContainer.style.textAlign = 'center';
      iconContainer.style.padding = '15px';
      iconContainer.style.border = '1px solid #e5e7eb';
      iconContainer.style.borderRadius = '8px';
      iconContainer.style.backgroundColor = '#f9fafb';
      const icon = new Icon({
        name: 'heart',
        size: 'lg',
        color: color.value
      });
      icon.mount(iconContainer);
      const label = document.createElement('div');
      label.textContent = color.name;
      label.style.marginTop = '10px';
      label.style.fontSize = '12px';
      label.style.color = '#6b7280';
      label.style.fontWeight = '500';
      const colorLabel = document.createElement('div');
      colorLabel.textContent = color.value;
      colorLabel.style.fontSize = '10px';
      colorLabel.style.color = '#9ca3af';
      colorLabel.style.marginTop = '5px';
      colorLabel.style.fontFamily = 'monospace';
      iconContainer.appendChild(label);
      iconContainer.appendChild(colorLabel);
      grid.appendChild(iconContainer);
    });
    container.appendChild(grid);
    return container;
  }
}`,...(Q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;E.parameters={...E.parameters,docs:{...(X=E.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    const title = document.createElement('h3');
    title.textContent = 'Iconos con Clases Personalizadas';
    title.style.marginBottom = '20px';
    title.style.color = '#333';
    container.appendChild(title);
    const examples = [{
      name: 'star',
      className: 'animate-pulse',
      description: 'Con animación pulse'
    }, {
      name: 'heart',
      className: 'rotate-12',
      description: 'Rotado 12 grados'
    }, {
      name: 'settings',
      className: 'animate-spin',
      description: 'Con animación spin'
    }, {
      name: 'bell',
      className: 'scale-110',
      description: 'Escalado 110%'
    }];
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(150px, 1fr))';
    grid.style.gap = '20px';
    examples.forEach(example => {
      const iconContainer = document.createElement('div');
      iconContainer.style.textAlign = 'center';
      iconContainer.style.padding = '20px';
      iconContainer.style.border = '1px solid #e5e7eb';
      iconContainer.style.borderRadius = '8px';
      iconContainer.style.backgroundColor = '#f9fafb';
      const icon = new Icon({
        name: example.name,
        size: 'lg',
        color: '#3b82f6',
        className: example.className
      });
      icon.mount(iconContainer);
      const label = document.createElement('div');
      label.textContent = example.description;
      label.style.marginTop = '15px';
      label.style.fontSize = '12px';
      label.style.color = '#6b7280';
      label.style.fontWeight = '500';
      label.style.textAlign = 'center';
      iconContainer.appendChild(label);
      grid.appendChild(iconContainer);
    });
    container.appendChild(grid);
    return container;
  }
}`,...(Z=(Y=E.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,te;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    name: 'star',
    size: 'md',
    color: '#fbbf24',
    className: ''
  },
  render: args => {
    const icon = new Icon(args);
    const container = document.createElement('div');
    container.style.padding = '20px';

    // Controles interactivos
    const controls = document.createElement('div');
    controls.style.marginBottom = '20px';
    controls.style.display = 'flex';
    controls.style.gap = '10px';
    controls.style.flexWrap = 'wrap';
    const iconSelect = document.createElement('select');
    iconSelect.className = 'px-3 py-1 border rounded';
    const availableIcons = icon.getAvailableIcons();
    availableIcons.forEach(iconName => {
      const option = document.createElement('option');
      option.value = iconName;
      option.textContent = iconName.charAt(0).toUpperCase() + iconName.slice(1);
      option.selected = iconName === args.name;
      iconSelect.appendChild(option);
    });
    iconSelect.onchange = e => {
      args.name = e.target.value;
      icon.setIcon(e.target.value);
      icon.mount(iconContainer);
    };
    const sizeSelect = document.createElement('select');
    sizeSelect.className = 'px-3 py-1 border rounded';
    ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
      const option = document.createElement('option');
      option.value = size;
      option.textContent = size.toUpperCase();
      option.selected = size === args.size;
      sizeSelect.appendChild(option);
    });
    sizeSelect.onchange = e => {
      args.size = e.target.value;
      icon.setSize(e.target.value);
      icon.mount(iconContainer);
    };
    const colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.value = args.color;
    colorInput.className = 'w-12 h-8 border rounded';
    colorInput.onchange = e => {
      args.color = e.target.value;
      icon.setColor(e.target.value);
      icon.mount(iconContainer);
    };
    const classNameInput = document.createElement('input');
    classNameInput.type = 'text';
    classNameInput.placeholder = 'Clases CSS...';
    classNameInput.className = 'px-3 py-1 border rounded';
    classNameInput.value = args.className;
    classNameInput.onchange = e => {
      args.className = e.target.value;
      icon.setClassName(e.target.value);
      icon.mount(iconContainer);
    };
    controls.appendChild(iconSelect);
    controls.appendChild(sizeSelect);
    controls.appendChild(colorInput);
    controls.appendChild(classNameInput);
    const iconContainer = document.createElement('div');
    iconContainer.style.textAlign = 'center';
    iconContainer.style.padding = '40px';
    iconContainer.style.border = '2px dashed #d1d5db';
    iconContainer.style.borderRadius = '12px';
    iconContainer.style.backgroundColor = '#f9fafb';
    iconContainer.style.minHeight = '120px';
    iconContainer.style.display = 'flex';
    iconContainer.style.alignItems = 'center';
    iconContainer.style.justifyContent = 'center';
    icon.mount(iconContainer);
    container.appendChild(controls);
    container.appendChild(iconContainer);
    return container;
  }
}`,...(te=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const ae=["Basic","NavigationIcons","ActionIcons","StatusIcons","SocialIcons","CommunicationIcons","UIIcons","SizeGallery","ColorGallery","CustomClasses","Interactive"];export{y as ActionIcons,u as Basic,v as ColorGallery,C as CommunicationIcons,E as CustomClasses,k as Interactive,h as NavigationIcons,f as SizeGallery,x as SocialIcons,g as StatusIcons,b as UIIcons,ae as __namedExportsOrder,oe as default};
