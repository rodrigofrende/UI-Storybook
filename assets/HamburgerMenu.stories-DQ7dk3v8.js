class j{constructor(n={}){this.options={items:[],isOpen:!1,onToggle:null,onItemClick:null,className:"",...n},this.element=this.createHamburgerMenu(),this.bindEvents()}createHamburgerMenu(){const n=document.createElement("div");n.className="relative";const e=document.createElement("button");e.className="flex flex-col justify-center items-center w-10 h-10 p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500",e.setAttribute("aria-label","Toggle menu"),e.setAttribute("aria-expanded","false");const o=document.createElement("span"),c=document.createElement("span"),t=document.createElement("span"),M="w-6 h-0.5 bg-gray-600 transition-all duration-300 transform";o.className=M,c.className=`${M} mt-1.5`,t.className=`${M} mt-1.5`,e.appendChild(o),e.appendChild(c),e.appendChild(t);const h=document.createElement("div");h.className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 opacity-0 pointer-events-none",h.style.display="none";const d=document.createElement("div");d.className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform translate-x-full transition-transform duration-300 ease-in-out";const u=document.createElement("div");u.className="flex items-center justify-between p-6 border-b border-gray-200";const C=document.createElement("h3");C.className="text-lg font-semibold text-gray-800",C.textContent="Menu";const p=document.createElement("button");p.className="p-2 rounded-lg hover:bg-gray-100 transition-colors",p.innerHTML=`
      <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    `,u.appendChild(C),u.appendChild(p);const b=document.createElement("div");b.className="p-6";const B=document.createElement("nav");return B.className="space-y-2",this.options.items.forEach(i=>{const l=document.createElement("a");if(l.className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors cursor-pointer",l.href=i.href||"#",i.icon){const a=document.createElement("span");a.className="mr-3 text-gray-400",a.innerHTML=i.icon,l.appendChild(a)}const y=document.createElement("span");if(y.textContent=i.text,l.appendChild(y),i.badge){const a=document.createElement("span");a.className="ml-auto px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full",a.textContent=i.badge,l.appendChild(a)}l.addEventListener("click",a=>{a.preventDefault(),this.options.onItemClick&&this.options.onItemClick(i),this.close()}),B.appendChild(l)}),b.appendChild(B),d.appendChild(u),d.appendChild(b),this.button=e,this.overlay=h,this.menuPanel=d,this.line1=o,this.line2=c,this.line3=t,this.closeButton=p,n.appendChild(e),n.appendChild(h),n.appendChild(d),n}bindEvents(){this.button.addEventListener("click",()=>{this.toggle()}),this.closeButton.addEventListener("click",()=>{this.close()}),this.overlay.addEventListener("click",()=>{this.close()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&this.options.isOpen&&this.close()})}toggle(){this.options.isOpen?this.close():this.open()}open(){this.options.isOpen=!0,this.button.setAttribute("aria-expanded","true"),this.overlay.style.display="block",setTimeout(()=>{this.overlay.classList.remove("opacity-0","pointer-events-none")},10),this.menuPanel.classList.remove("translate-x-full"),this.line1.classList.add("rotate-45","translate-y-2"),this.line2.classList.add("opacity-0"),this.line3.classList.add("-rotate-45","-translate-y-2"),this.options.onToggle&&this.options.onToggle(!0)}close(){this.options.isOpen=!1,this.button.setAttribute("aria-expanded","false"),this.overlay.classList.add("opacity-0","pointer-events-none"),setTimeout(()=>{this.overlay.style.display="none"},300),this.menuPanel.classList.add("translate-x-full"),this.line1.classList.remove("rotate-45","translate-y-2"),this.line2.classList.remove("opacity-0"),this.line3.classList.remove("-rotate-45","-translate-y-2"),this.options.onToggle&&this.options.onToggle(!1)}setItems(n){this.options.items=n,this.updateMenuItems()}updateMenuItems(){const n=this.menuPanel.querySelector("nav");n.innerHTML="",this.options.items.forEach(e=>{const o=document.createElement("a");if(o.className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors cursor-pointer",o.href=e.href||"#",e.icon){const t=document.createElement("span");t.className="mr-3 text-gray-400",t.innerHTML=e.icon,o.appendChild(t)}const c=document.createElement("span");if(c.textContent=e.text,o.appendChild(c),e.badge){const t=document.createElement("span");t.className="ml-auto px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full",t.textContent=e.badge,o.appendChild(t)}o.addEventListener("click",t=>{t.preventDefault(),this.options.onItemClick&&this.options.onItemClick(e),this.close()}),n.appendChild(o)})}isMenuOpen(){return this.options.isOpen}render(n){return typeof n=="string"&&(n=document.querySelector(n)),n&&n.appendChild(this.element),this.element}destroy(){this.element.remove()}}const X={title:"Components/Navigation/HamburgerMenu",component:j,parameters:{docs:{description:{component:"Un componente de menú hamburguesa móvil con animaciones suaves y múltiples opciones de personalización."}}},argTypes:{items:{control:"object",description:"Array de elementos del menú"},isOpen:{control:"boolean",description:"Estado inicial del menú"},onToggle:{control:"function",description:"Callback cuando se abre/cierra el menú"},onItemClick:{control:"function",description:"Callback cuando se hace clic en un elemento"},className:{control:"text",description:"Clases CSS adicionales"}}},r={args:{items:[{text:"Inicio",href:"/",icon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>'},{text:"Productos",href:"/productos",icon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>'},{text:"Servicios",href:"/servicios",icon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>'},{text:"Contacto",href:"/contacto",icon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>'}],isOpen:!1,onToggle:null,onItemClick:null,className:""},render:s=>{const n=new j(s),e=document.createElement("div");return e.style.padding="20px",e.style.backgroundColor="#f9fafb",e.style.minHeight="100vh",n.render(e),e}},m={args:{items:[{text:"Dashboard",href:"/dashboard",icon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path></svg>'},{text:"Notificaciones",href:"/notificaciones",icon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12c-1 0-2-.4-2-1V5c0-1.1.9-2 2-2s2 .9 2 2v6c0 .6-1 1-2 1z"></path></svg>',badge:"12"},{text:"Mensajes",href:"/mensajes",icon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>',badge:"3"},{text:"Configuración",href:"/configuracion",icon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>'}],isOpen:!1,onToggle:null,onItemClick:null,className:""},render:r.render},v={args:{items:[{text:"Inicio",href:"/"},{text:"Acerca de",href:"/acerca-de"},{text:"Servicios",href:"/servicios"},{text:"Portafolio",href:"/portafolio"},{text:"Blog",href:"/blog"},{text:"Contacto",href:"/contacto"}],isOpen:!1,onToggle:null,onItemClick:null,className:""},render:r.render},g={args:{items:[{text:"Inicio",href:"/",icon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>'},{text:"Productos",href:"/productos",icon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>'},{text:"Categorías",href:"/categorias",icon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>'},{text:"Ofertas",href:"/ofertas",icon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12z"></path></svg>',badge:"HOT"},{text:"Mi Cuenta",href:"/mi-cuenta",icon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>'}],isOpen:!1,onToggle:null,onItemClick:null,className:""},render:r.render},k={args:{items:[{text:"Dashboard",href:"/admin",icon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path></svg>'},{text:"Usuarios",href:"/admin/usuarios",icon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path></svg>'},{text:"Productos",href:"/admin/productos",icon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>'},{text:"Órdenes",href:"/admin/ordenes",icon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>',badge:"5"},{text:"Reportes",href:"/admin/reportes",icon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>'},{text:"Configuración",href:"/admin/configuracion",icon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>'}],isOpen:!1,onToggle:null,onItemClick:null,className:""},render:r.render},f={args:{items:[{text:"Inicio",href:"/",icon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>'},{text:"Artículos",href:"/articulos",icon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>'},{text:"Categorías",href:"/categorias",icon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>'},{text:"Autores",href:"/autores",icon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>'},{text:"Newsletter",href:"/newsletter",icon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>',badge:"NUEVO"}],isOpen:!1,onToggle:null,onItemClick:null,className:""},render:r.render},w={args:{items:[{text:"Inicio",href:"/",icon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>'},{text:"Productos",href:"/productos",icon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>'},{text:"Ofertas",href:"/ofertas",icon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12z"></path></svg>',badge:"50%"},{text:"Carrito",href:"/carrito",icon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path></svg>',badge:"3"},{text:"Mi Cuenta",href:"/mi-cuenta",icon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>'},{text:"Soporte",href:"/soporte",icon:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"></path></svg>'}],isOpen:!1,onToggle:null,onItemClick:null,className:""},render:r.render},x={args:{...r.args,onToggle:s=>{console.log("Menú:",s?"abierto":"cerrado")},onItemClick:s=>{console.log("Elemento clickeado:",s.text),alert(`Hiciste clic en: ${s.text}`)}},render:s=>{const n=new j(s),e=document.createElement("div");e.style.padding="20px",e.style.backgroundColor="#f9fafb",e.style.minHeight="100vh";const o=document.createElement("div");return o.style.marginBottom="20px",o.style.padding="15px",o.style.backgroundColor="white",o.style.borderRadius="8px",o.style.border="1px solid #e5e7eb",o.style.fontSize="14px",o.style.color="#6b7280",o.innerHTML=`
      <strong>Menú Interactivo</strong><br>
      • Haz clic en el botón hamburguesa para abrir/cerrar<br>
      • Haz clic en los elementos del menú para ver la acción<br>
      • Revisa la consola para ver los logs
    `,e.appendChild(o),n.render(e),e}};var z,H,I;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'Inicio',
      href: '/',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>'
    }, {
      text: 'Productos',
      href: '/productos',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>'
    }, {
      text: 'Servicios',
      href: '/servicios',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>'
    }, {
      text: 'Contacto',
      href: '/contacto',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>'
    }],
    isOpen: false,
    onToggle: null,
    onItemClick: null,
    className: ''
  },
  render: args => {
    const hamburgerMenu = new HamburgerMenu(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    container.style.minHeight = '100vh';
    hamburgerMenu.render(container);
    return container;
  }
}`,...(I=(H=r.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var V,E,L;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'Dashboard',
      href: '/dashboard',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path></svg>'
    }, {
      text: 'Notificaciones',
      href: '/notificaciones',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12c-1 0-2-.4-2-1V5c0-1.1.9-2 2-2s2 .9 2 2v6c0 .6-1 1-2 1z"></path></svg>',
      badge: '12'
    }, {
      text: 'Mensajes',
      href: '/mensajes',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>',
      badge: '3'
    }, {
      text: 'Configuración',
      href: '/configuracion',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>'
    }],
    isOpen: false,
    onToggle: null,
    onItemClick: null,
    className: ''
  },
  render: Basic.render
}`,...(L=(E=m.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var N,T,O;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'Inicio',
      href: '/'
    }, {
      text: 'Acerca de',
      href: '/acerca-de'
    }, {
      text: 'Servicios',
      href: '/servicios'
    }, {
      text: 'Portafolio',
      href: '/portafolio'
    }, {
      text: 'Blog',
      href: '/blog'
    }, {
      text: 'Contacto',
      href: '/contacto'
    }],
    isOpen: false,
    onToggle: null,
    onItemClick: null,
    className: ''
  },
  render: Basic.render
}`,...(O=(T=v.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var A,S,P;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'Inicio',
      href: '/',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>'
    }, {
      text: 'Productos',
      href: '/productos',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>'
    }, {
      text: 'Categorías',
      href: '/categorias',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>'
    }, {
      text: 'Ofertas',
      href: '/ofertas',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12z"></path></svg>',
      badge: 'HOT'
    }, {
      text: 'Mi Cuenta',
      href: '/mi-cuenta',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>'
    }],
    isOpen: false,
    onToggle: null,
    onItemClick: null,
    className: ''
  },
  render: Basic.render
}`,...(P=(S=g.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var D,F,R;k.parameters={...k.parameters,docs:{...(D=k.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'Dashboard',
      href: '/admin',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path></svg>'
    }, {
      text: 'Usuarios',
      href: '/admin/usuarios',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path></svg>'
    }, {
      text: 'Productos',
      href: '/admin/productos',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>'
    }, {
      text: 'Órdenes',
      href: '/admin/ordenes',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>',
      badge: '5'
    }, {
      text: 'Reportes',
      href: '/admin/reportes',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>'
    }, {
      text: 'Configuración',
      href: '/admin/configuracion',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>'
    }],
    isOpen: false,
    onToggle: null,
    onItemClick: null,
    className: ''
  },
  render: Basic.render
}`,...(R=(F=k.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var U,$,_;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'Inicio',
      href: '/',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>'
    }, {
      text: 'Artículos',
      href: '/articulos',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>'
    }, {
      text: 'Categorías',
      href: '/categorias',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>'
    }, {
      text: 'Autores',
      href: '/autores',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>'
    }, {
      text: 'Newsletter',
      href: '/newsletter',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>',
      badge: 'NUEVO'
    }],
    isOpen: false,
    onToggle: null,
    onItemClick: null,
    className: ''
  },
  render: Basic.render
}`,...(_=($=f.parameters)==null?void 0:$.docs)==null?void 0:_.source}}};var q,W,G;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'Inicio',
      href: '/',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>'
    }, {
      text: 'Productos',
      href: '/productos',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>'
    }, {
      text: 'Ofertas',
      href: '/ofertas',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12z"></path></svg>',
      badge: '50%'
    }, {
      text: 'Carrito',
      href: '/carrito',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path></svg>',
      badge: '3'
    }, {
      text: 'Mi Cuenta',
      href: '/mi-cuenta',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>'
    }, {
      text: 'Soporte',
      href: '/soporte',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"></path></svg>'
    }],
    isOpen: false,
    onToggle: null,
    onItemClick: null,
    className: ''
  },
  render: Basic.render
}`,...(G=(W=w.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var J,K,Q;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    onToggle: isOpen => {
      console.log('Menú:', isOpen ? 'abierto' : 'cerrado');
    },
    onItemClick: item => {
      console.log('Elemento clickeado:', item.text);
      alert(\`Hiciste clic en: \${item.text}\`);
    }
  },
  render: args => {
    const hamburgerMenu = new HamburgerMenu(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    container.style.minHeight = '100vh';

    // Información del estado
    const info = document.createElement('div');
    info.style.marginBottom = '20px';
    info.style.padding = '15px';
    info.style.backgroundColor = 'white';
    info.style.borderRadius = '8px';
    info.style.border = '1px solid #e5e7eb';
    info.style.fontSize = '14px';
    info.style.color = '#6b7280';
    info.innerHTML = \`
      <strong>Menú Interactivo</strong><br>
      • Haz clic en el botón hamburguesa para abrir/cerrar<br>
      • Haz clic en los elementos del menú para ver la acción<br>
      • Revisa la consola para ver los logs
    \`;
    container.appendChild(info);
    hamburgerMenu.render(container);
    return container;
  }
}`,...(Q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const Y=["Basic","WithBadges","NoIcons","NavigationItems","AdminItems","BlogItems","EcommerceItems","Interactive"];export{k as AdminItems,r as Basic,f as BlogItems,w as EcommerceItems,x as Interactive,g as NavigationItems,v as NoIcons,m as WithBadges,Y as __namedExportsOrder,X as default};
