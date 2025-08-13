class s{constructor(a={}){this.options={src:"",alt:"",fallback:"",size:"md",shape:"circle",status:"",statusPosition:"bottom-right",...a},this.id=this.generateId()}generateId(){return"avatar-"+Math.random().toString(36).substr(2,9)}render(){const a=this.getSizeClasses(),n=this.getShapeClasses(),e=this.getStatusClasses(),r=this.getStatusPositionClasses();return`
      <div class="relative inline-block" id="${this.id}">
        ${this.options.src?`
          <img
            class="${a} ${n} object-cover"
            src="${this.options.src}"
            alt="${this.options.alt||"Avatar"}"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          />
        `:""}
        
        <div class="${a} ${n} bg-gray-300 flex items-center justify-center text-gray-600 font-medium ${this.options.src?"hidden":""}">
          ${this.getFallbackText()}
        </div>
        
        ${this.options.status?`
          <span class="absolute ${r} block ${e} ring-2 ring-white rounded-full"></span>
        `:""}
      </div>
    `}getSizeClasses(){const a={xs:"w-6 h-6 text-xs",sm:"w-8 h-8 text-sm",md:"w-10 h-10 text-base",lg:"w-12 h-12 text-lg",xl:"w-16 h-16 text-xl","2xl":"w-20 h-20 text-2xl"};return a[this.options.size]||a.md}getShapeClasses(){const a={circle:"rounded-full",square:"rounded-none",rounded:"rounded-lg"};return a[this.options.shape]||a.circle}getStatusClasses(){return{online:"bg-green-400",offline:"bg-gray-400",away:"bg-yellow-400",busy:"bg-red-400"}[this.options.status]||""}getStatusPositionClasses(){const a={"top-left":"top-0 left-0","top-right":"top-0 right-0","bottom-left":"bottom-0 left-0","bottom-right":"bottom-0 right-0"};return a[this.options.statusPosition]||a["bottom-right"]}getFallbackText(){if(this.options.fallback)return this.options.fallback;if(this.options.alt){const a=this.options.alt.trim().split(/\s+/);if(a.length>=2)return(a[0][0]+a[a.length-1][0]).toUpperCase();if(a.length===1)return a[0][0].toUpperCase()}return"?"}setImage(a,n=""){this.options.src=a,this.options.alt=n,this.updateDisplay()}setFallback(a){this.options.fallback=a,this.updateDisplay()}setSize(a){this.options.size=a,this.updateDisplay()}setShape(a){this.options.shape=a,this.updateDisplay()}setStatus(a){this.options.status=a,this.updateDisplay()}setStatusPosition(a){this.options.statusPosition=a,this.updateDisplay()}removeImage(){this.options.src="",this.updateDisplay()}updateDisplay(){const a=document.getElementById(this.id);a&&(a.outerHTML=this.render())}mount(a){typeof a=="string"&&(a=document.querySelector(a)),a&&(a.innerHTML=this.render())}static user(a={}){return new s({fallback:"U",alt:"User",...a})}static group(a={}){return new s({fallback:"G",alt:"Group",...a})}static anonymous(a={}){return new s({fallback:"?",alt:"Anonymous",...a})}static initials(a,n={}){return new s({fallback:a.toUpperCase(),alt:a,...n})}static fromName(a,n={}){const e=a.trim().split(/\s+/);let r="";return e.length>=2?r=e[0][0]+e[e.length-1][0]:e.length===1&&(r=e[0][0]),new s({fallback:r.toUpperCase(),alt:a,...n})}static company(a,n={}){const e=a.split(/\s+/).map(r=>r[0]).join("").substring(0,2);return new s({fallback:e.toUpperCase(),alt:a,shape:"square",...n})}getHTML(){return this.render()}clone(){return new s({...this.options})}hasImage(){return!!this.options.src}getDimensions(){const a={xs:24,sm:32,md:40,lg:48,xl:64,"2xl":80},n=a[this.options.size]||a.md;return{width:n,height:n}}}const Ua={title:"Data Display/Avatar",component:s,parameters:{docs:{description:{component:"El componente Avatar muestra imágenes de perfil o iniciales con soporte para diferentes tamaños, formas y estados."}}},argTypes:{src:{control:"text",description:"URL de la imagen del avatar"},alt:{control:"text",description:"Texto alternativo para la imagen"},fallback:{control:"text",description:"Texto de respaldo cuando no hay imagen"},size:{control:{type:"select"},options:["xs","sm","md","lg","xl","2xl"],description:"Tamaño del avatar"},shape:{control:{type:"select"},options:["circle","square","rounded"],description:"Forma del avatar"},status:{control:{type:"select"},options:["","online","offline","away","busy"],description:"Estado del usuario"},statusPosition:{control:{type:"select"},options:["top-left","top-right","bottom-left","bottom-right"],description:"Posición del indicador de estado"}}},i={args:{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",alt:"John Doe",size:"md",shape:"circle"},render:t=>new s(t).render()},l={args:{src:"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",alt:"Jane Smith",size:"lg",shape:"circle"},render:t=>new s(t).render()},p={args:{alt:"María González",size:"lg",shape:"circle"},render:t=>new s(t).render()},d={args:{fallback:"MG",alt:"María González",size:"lg",shape:"rounded"},render:t=>new s(t).render()},u={args:{src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",alt:"Carlos López",size:"lg",shape:"circle",status:"online"},render:t=>new s(t).render()},h={args:{src:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",alt:"Ana Martínez",size:"lg",shape:"circle",status:"offline"},render:t=>new s(t).render()},m={args:{src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",alt:"Luis Rodríguez",size:"lg",shape:"circle",status:"away"},render:t=>new s(t).render()},g={args:{src:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",alt:"Sofia Pérez",size:"lg",shape:"circle",status:"busy"},render:t=>new s(t).render()},v={args:{src:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",alt:"Roberto Silva",size:"lg",shape:"circle",status:"online",statusPosition:"top-left"},render:t=>new s(t).render()},f={args:{src:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",alt:"Carmen Vega",size:"lg",shape:"square"},render:t=>new s(t).render()},x={args:{src:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",alt:"Diego Morales",size:"lg",shape:"rounded"},render:t=>new s(t).render()},b={render:()=>`
      <div class="flex items-end space-x-4 p-4">
        ${["xs","sm","md","lg","xl","2xl"].map(n=>new s({src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",alt:"Usuario",size:n}).render()).join("")}
      </div>
    `},w={render:()=>`
      <div class="flex space-x-6 p-4">
        ${[{status:"online",label:"Online"},{status:"offline",label:"Offline"},{status:"away",label:"Ausente"},{status:"busy",label:"Ocupado"}].map(({status:n,label:e})=>`
        <div class="text-center">
          ${new s({src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",alt:"Usuario",size:"lg",status:n}).render()}
          <p class="text-sm text-gray-600 mt-2">${e}</p>
        </div>
      `).join("")}
      </div>
    `},z={render:()=>`
      <div class="flex space-x-6 p-4">
        ${[{shape:"circle",label:"Círculo"},{shape:"square",label:"Cuadrado"},{shape:"rounded",label:"Redondeado"}].map(({shape:n,label:e})=>`
        <div class="text-center">
          ${new s({src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",alt:"Usuario",size:"lg",shape:n}).render()}
          <p class="text-sm text-gray-600 mt-2">${e}</p>
        </div>
      `).join("")}
      </div>
    `},S={render:()=>{const t=s.user({size:"lg",status:"online"}),a=s.group({size:"lg",shape:"square"}),n=s.anonymous({size:"lg"}),e=s.initials("JD",{size:"lg",shape:"rounded"}),r=s.fromName("María González",{size:"lg",status:"away"}),c=s.company("Tech Solutions Inc",{size:"lg"});return`
      <div class="grid grid-cols-3 gap-6 p-4">
        <div class="text-center">
          ${t.render()}
          <p class="text-sm text-gray-600 mt-2">Usuario</p>
        </div>
        <div class="text-center">
          ${a.render()}
          <p class="text-sm text-gray-600 mt-2">Grupo</p>
        </div>
        <div class="text-center">
          ${n.render()}
          <p class="text-sm text-gray-600 mt-2">Anónimo</p>
        </div>
        <div class="text-center">
          ${e.render()}
          <p class="text-sm text-gray-600 mt-2">Iniciales</p>
        </div>
        <div class="text-center">
          ${r.render()}
          <p class="text-sm text-gray-600 mt-2">Desde Nombre</p>
        </div>
        <div class="text-center">
          ${c.render()}
          <p class="text-sm text-gray-600 mt-2">Empresa</p>
        </div>
      </div>
    `}},y={render:()=>`
      <div class="flex -space-x-2 p-4">
        ${[{src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",alt:"Usuario 1"},{src:"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",alt:"Usuario 2"},{src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",alt:"Usuario 3"},{src:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",alt:"Usuario 4"}].map((n,e)=>new s({...n,size:"md",status:e===0?"online":e===1?"away":"offline"}).render()).join("")}
      </div>
    `},A={render:()=>{const t=document.createElement("div");t.innerHTML=`
      <div class="p-4 space-y-4">
        <div class="flex space-x-4">
          <button id="changeImage" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Cambiar Imagen
          </button>
          <button id="changeSize" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Cambiar Tamaño
          </button>
          <button id="changeShape" class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
            Cambiar Forma
          </button>
          <button id="toggleStatus" class="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
            Toggle Estado
          </button>
        </div>
        <div id="avatarContainer"></div>
      </div>
    `;const a=new s({src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",alt:"Usuario Interactivo",size:"lg",status:"online"}),n=t.querySelector("#avatarContainer");return a.mount(n),t.querySelector("#changeImage").addEventListener("click",()=>{const e=["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face","https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face","https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"],r=e[Math.floor(Math.random()*e.length)];a.setImage(r,"Usuario")}),t.querySelector("#changeSize").addEventListener("click",()=>{const e=["sm","md","lg","xl"],r=a.options.size,o=(e.indexOf(r)+1)%e.length;a.setSize(e[o])}),t.querySelector("#changeShape").addEventListener("click",()=>{const e=["circle","square","rounded"],r=a.options.shape,o=(e.indexOf(r)+1)%e.length;a.setShape(e[o])}),t.querySelector("#toggleStatus").addEventListener("click",()=>{const e=["online","away","busy","offline",""],r=a.options.status,o=(e.indexOf(r)+1)%e.length;a.setStatus(e[o])}),t}},I={render:()=>`
      <div class="p-4">
        <p class="text-sm text-gray-600 mb-2">Este avatar tiene una URL de imagen inválida, por lo que mostrará el fallback:</p>
        ${new s({src:"https://invalid-url-that-will-fail.com/image.jpg",alt:"Usuario con Fallback",size:"lg",fallback:"U"}).render()}
      </div>
    `},$={render:()=>`
      <div class="grid grid-cols-2 gap-6 p-4">
        ${[{position:"top-left",label:"Arriba Izquierda"},{position:"top-right",label:"Arriba Derecha"},{position:"bottom-left",label:"Abajo Izquierda"},{position:"bottom-right",label:"Abajo Derecha"}].map(({position:n,label:e})=>`
        <div class="text-center">
          ${new s({src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",alt:"Usuario",size:"lg",status:"online",statusPosition:n}).render()}
          <p class="text-sm text-gray-600 mt-2">${e}</p>
        </div>
      `).join("")}
      </div>
    `};var C,E,k;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    alt: 'John Doe',
    size: 'md',
    shape: 'circle'
  },
  render: args => {
    const avatar = new Avatar(args);
    return avatar.render();
  }
}`,...(k=(E=i.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var U,D,q;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    alt: 'Jane Smith',
    size: 'lg',
    shape: 'circle'
  },
  render: args => {
    const avatar = new Avatar(args);
    return avatar.render();
  }
}`,...(q=(D=l.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var M,L,j;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    alt: 'María González',
    size: 'lg',
    shape: 'circle'
  },
  render: args => {
    const avatar = new Avatar(args);
    return avatar.render();
  }
}`,...(j=(L=p.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var P,O,T;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    fallback: 'MG',
    alt: 'María González',
    size: 'lg',
    shape: 'rounded'
  },
  render: args => {
    const avatar = new Avatar(args);
    return avatar.render();
  }
}`,...(T=(O=d.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var F,G,R;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    alt: 'Carlos López',
    size: 'lg',
    shape: 'circle',
    status: 'online'
  },
  render: args => {
    const avatar = new Avatar(args);
    return avatar.render();
  }
}`,...(R=(G=u.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var J,W,H;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    alt: 'Ana Martínez',
    size: 'lg',
    shape: 'circle',
    status: 'offline'
  },
  render: args => {
    const avatar = new Avatar(args);
    return avatar.render();
  }
}`,...(H=(W=h.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var B,N,V;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    alt: 'Luis Rodríguez',
    size: 'lg',
    shape: 'circle',
    status: 'away'
  },
  render: args => {
    const avatar = new Avatar(args);
    return avatar.render();
  }
}`,...(V=(N=m.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var K,Q,X;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    alt: 'Sofia Pérez',
    size: 'lg',
    shape: 'circle',
    status: 'busy'
  },
  render: args => {
    const avatar = new Avatar(args);
    return avatar.render();
  }
}`,...(X=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,_;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
    alt: 'Roberto Silva',
    size: 'lg',
    shape: 'circle',
    status: 'online',
    statusPosition: 'top-left'
  },
  render: args => {
    const avatar = new Avatar(args);
    return avatar.render();
  }
}`,...(_=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};var aa,ta,ea;f.parameters={...f.parameters,docs:{...(aa=f.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    alt: 'Carmen Vega',
    size: 'lg',
    shape: 'square'
  },
  render: args => {
    const avatar = new Avatar(args);
    return avatar.render();
  }
}`,...(ea=(ta=f.parameters)==null?void 0:ta.docs)==null?void 0:ea.source}}};var sa,na,ra;x.parameters={...x.parameters,docs:{...(sa=x.parameters)==null?void 0:sa.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face',
    alt: 'Diego Morales',
    size: 'lg',
    shape: 'rounded'
  },
  render: args => {
    const avatar = new Avatar(args);
    return avatar.render();
  }
}`,...(ra=(na=x.parameters)==null?void 0:na.docs)==null?void 0:ra.source}}};var oa,ca,ia;b.parameters={...b.parameters,docs:{...(oa=b.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  render: () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
    const avatars = sizes.map(size => {
      const avatar = new Avatar({
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        alt: 'Usuario',
        size: size
      });
      return avatar.render();
    });
    return \`
      <div class="flex items-end space-x-4 p-4">
        \${avatars.join('')}
      </div>
    \`;
  }
}`,...(ia=(ca=b.parameters)==null?void 0:ca.docs)==null?void 0:ia.source}}};var la,pa,da;w.parameters={...w.parameters,docs:{...(la=w.parameters)==null?void 0:la.docs,source:{originalSource:`{
  render: () => {
    const statuses = [{
      status: 'online',
      label: 'Online'
    }, {
      status: 'offline',
      label: 'Offline'
    }, {
      status: 'away',
      label: 'Ausente'
    }, {
      status: 'busy',
      label: 'Ocupado'
    }];
    const avatars = statuses.map(({
      status,
      label
    }) => {
      const avatar = new Avatar({
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        alt: 'Usuario',
        size: 'lg',
        status: status
      });
      return \`
        <div class="text-center">
          \${avatar.render()}
          <p class="text-sm text-gray-600 mt-2">\${label}</p>
        </div>
      \`;
    });
    return \`
      <div class="flex space-x-6 p-4">
        \${avatars.join('')}
      </div>
    \`;
  }
}`,...(da=(pa=w.parameters)==null?void 0:pa.docs)==null?void 0:da.source}}};var ua,ha,ma;z.parameters={...z.parameters,docs:{...(ua=z.parameters)==null?void 0:ua.docs,source:{originalSource:`{
  render: () => {
    const shapes = [{
      shape: 'circle',
      label: 'Círculo'
    }, {
      shape: 'square',
      label: 'Cuadrado'
    }, {
      shape: 'rounded',
      label: 'Redondeado'
    }];
    const avatars = shapes.map(({
      shape,
      label
    }) => {
      const avatar = new Avatar({
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        alt: 'Usuario',
        size: 'lg',
        shape: shape
      });
      return \`
        <div class="text-center">
          \${avatar.render()}
          <p class="text-sm text-gray-600 mt-2">\${label}</p>
        </div>
      \`;
    });
    return \`
      <div class="flex space-x-6 p-4">
        \${avatars.join('')}
      </div>
    \`;
  }
}`,...(ma=(ha=z.parameters)==null?void 0:ha.docs)==null?void 0:ma.source}}};var ga,va,fa;S.parameters={...S.parameters,docs:{...(ga=S.parameters)==null?void 0:ga.docs,source:{originalSource:`{
  render: () => {
    const userAvatar = Avatar.user({
      size: 'lg',
      status: 'online'
    });
    const groupAvatar = Avatar.group({
      size: 'lg',
      shape: 'square'
    });
    const anonymousAvatar = Avatar.anonymous({
      size: 'lg'
    });
    const initialsAvatar = Avatar.initials('JD', {
      size: 'lg',
      shape: 'rounded'
    });
    const nameAvatar = Avatar.fromName('María González', {
      size: 'lg',
      status: 'away'
    });
    const companyAvatar = Avatar.company('Tech Solutions Inc', {
      size: 'lg'
    });
    return \`
      <div class="grid grid-cols-3 gap-6 p-4">
        <div class="text-center">
          \${userAvatar.render()}
          <p class="text-sm text-gray-600 mt-2">Usuario</p>
        </div>
        <div class="text-center">
          \${groupAvatar.render()}
          <p class="text-sm text-gray-600 mt-2">Grupo</p>
        </div>
        <div class="text-center">
          \${anonymousAvatar.render()}
          <p class="text-sm text-gray-600 mt-2">Anónimo</p>
        </div>
        <div class="text-center">
          \${initialsAvatar.render()}
          <p class="text-sm text-gray-600 mt-2">Iniciales</p>
        </div>
        <div class="text-center">
          \${nameAvatar.render()}
          <p class="text-sm text-gray-600 mt-2">Desde Nombre</p>
        </div>
        <div class="text-center">
          \${companyAvatar.render()}
          <p class="text-sm text-gray-600 mt-2">Empresa</p>
        </div>
      </div>
    \`;
  }
}`,...(fa=(va=S.parameters)==null?void 0:va.docs)==null?void 0:fa.source}}};var xa,ba,wa;y.parameters={...y.parameters,docs:{...(xa=y.parameters)==null?void 0:xa.docs,source:{originalSource:`{
  render: () => {
    const avatars = [{
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      alt: 'Usuario 1'
    }, {
      src: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      alt: 'Usuario 2'
    }, {
      src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      alt: 'Usuario 3'
    }, {
      src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      alt: 'Usuario 4'
    }];
    const avatarElements = avatars.map((avatarData, index) => {
      const avatar = new Avatar({
        ...avatarData,
        size: 'md',
        status: index === 0 ? 'online' : index === 1 ? 'away' : 'offline'
      });
      return avatar.render();
    });
    return \`
      <div class="flex -space-x-2 p-4">
        \${avatarElements.join('')}
      </div>
    \`;
  }
}`,...(wa=(ba=y.parameters)==null?void 0:ba.docs)==null?void 0:wa.source}}};var za,Sa,ya;A.parameters={...A.parameters,docs:{...(za=A.parameters)==null?void 0:za.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.innerHTML = \`
      <div class="p-4 space-y-4">
        <div class="flex space-x-4">
          <button id="changeImage" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Cambiar Imagen
          </button>
          <button id="changeSize" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Cambiar Tamaño
          </button>
          <button id="changeShape" class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
            Cambiar Forma
          </button>
          <button id="toggleStatus" class="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
            Toggle Estado
          </button>
        </div>
        <div id="avatarContainer"></div>
      </div>
    \`;
    const avatar = new Avatar({
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      alt: 'Usuario Interactivo',
      size: 'lg',
      status: 'online'
    });
    const avatarContainer = container.querySelector('#avatarContainer');
    avatar.mount(avatarContainer);

    // Event listeners
    container.querySelector('#changeImage').addEventListener('click', () => {
      const images = ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face', 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'];
      const randomImage = images[Math.floor(Math.random() * images.length)];
      avatar.setImage(randomImage, 'Usuario');
    });
    container.querySelector('#changeSize').addEventListener('click', () => {
      const sizes = ['sm', 'md', 'lg', 'xl'];
      const currentSize = avatar.options.size;
      const currentIndex = sizes.indexOf(currentSize);
      const nextIndex = (currentIndex + 1) % sizes.length;
      avatar.setSize(sizes[nextIndex]);
    });
    container.querySelector('#changeShape').addEventListener('click', () => {
      const shapes = ['circle', 'square', 'rounded'];
      const currentShape = avatar.options.shape;
      const currentIndex = shapes.indexOf(currentShape);
      const nextIndex = (currentIndex + 1) % shapes.length;
      avatar.setShape(shapes[nextIndex]);
    });
    container.querySelector('#toggleStatus').addEventListener('click', () => {
      const statuses = ['online', 'away', 'busy', 'offline', ''];
      const currentStatus = avatar.options.status;
      const currentIndex = statuses.indexOf(currentStatus);
      const nextIndex = (currentIndex + 1) % statuses.length;
      avatar.setStatus(statuses[nextIndex]);
    });
    return container;
  }
}`,...(ya=(Sa=A.parameters)==null?void 0:Sa.docs)==null?void 0:ya.source}}};var Aa,Ia,$a;I.parameters={...I.parameters,docs:{...(Aa=I.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
  render: () => {
    const avatar = new Avatar({
      src: 'https://invalid-url-that-will-fail.com/image.jpg',
      alt: 'Usuario con Fallback',
      size: 'lg',
      fallback: 'U'
    });
    return \`
      <div class="p-4">
        <p class="text-sm text-gray-600 mb-2">Este avatar tiene una URL de imagen inválida, por lo que mostrará el fallback:</p>
        \${avatar.render()}
      </div>
    \`;
  }
}`,...($a=(Ia=I.parameters)==null?void 0:Ia.docs)==null?void 0:$a.source}}};var Ca,Ea,ka;$.parameters={...$.parameters,docs:{...(Ca=$.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
  render: () => {
    const positions = [{
      position: 'top-left',
      label: 'Arriba Izquierda'
    }, {
      position: 'top-right',
      label: 'Arriba Derecha'
    }, {
      position: 'bottom-left',
      label: 'Abajo Izquierda'
    }, {
      position: 'bottom-right',
      label: 'Abajo Derecha'
    }];
    const avatars = positions.map(({
      position,
      label
    }) => {
      const avatar = new Avatar({
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        alt: 'Usuario',
        size: 'lg',
        status: 'online',
        statusPosition: position
      });
      return \`
        <div class="text-center">
          \${avatar.render()}
          <p class="text-sm text-gray-600 mt-2">\${label}</p>
        </div>
      \`;
    });
    return \`
      <div class="grid grid-cols-2 gap-6 p-4">
        \${avatars.join('')}
      </div>
    \`;
  }
}`,...(ka=(Ea=$.parameters)==null?void 0:Ea.docs)==null?void 0:ka.source}}};const Da=["Default","WithImage","WithInitials","WithCustomFallback","OnlineStatus","OfflineStatus","AwayStatus","BusyStatus","CustomStatusPosition","SquareShape","RoundedShape","AllSizes","AllStatuses","AllShapes","StaticMethods","GroupAvatars","Interactive","ImageFallback","StatusPositions"];export{z as AllShapes,b as AllSizes,w as AllStatuses,m as AwayStatus,g as BusyStatus,v as CustomStatusPosition,i as Default,y as GroupAvatars,I as ImageFallback,A as Interactive,h as OfflineStatus,u as OnlineStatus,x as RoundedShape,f as SquareShape,S as StaticMethods,$ as StatusPositions,d as WithCustomFallback,l as WithImage,p as WithInitials,Da as __namedExportsOrder,Ua as default};
