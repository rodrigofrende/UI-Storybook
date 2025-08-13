class o{constructor(e={}){this.options={placeholder:"Search...",value:"",suggestions:[],onSearch:null,onSuggestionSelect:null,className:"",...e},this.element=this.createSearchInput(),this.suggestionsContainer=null,this.bindEvents()}createSearchInput(){const e=document.createElement("div");e.className="relative";const n=document.createElement("div");n.className="relative";const s=document.createElement("input");s.type="text",s.placeholder=this.options.placeholder,s.value=this.options.value;const r=["w-full px-12 py-3 border border-gray-300 rounded-full","focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent","transition-all duration-300 shadow-sm","placeholder-gray-400 text-gray-700","hover:shadow-md focus:shadow-lg"];s.className=[...r,this.options.className].join(" ");const h=document.createElement("span");h.className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400",h.innerHTML=`
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    `;const a=document.createElement("button");return a.className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors",a.innerHTML=`
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    `,a.style.display="none",this.suggestionsContainer=document.createElement("div"),this.suggestionsContainer.className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto",n.appendChild(h),n.appendChild(s),n.appendChild(a),n.appendChild(this.suggestionsContainer),e.appendChild(n),this.inputElement=s,this.clearButton=a,e}bindEvents(){this.inputElement.addEventListener("input",e=>{this.handleInput(e),this.toggleClearButton()}),this.inputElement.addEventListener("focus",()=>{this.showSuggestions()}),this.inputElement.addEventListener("keydown",e=>{this.handleKeydown(e)}),this.clearButton.addEventListener("click",()=>{this.clearInput()}),document.addEventListener("click",e=>{this.element.contains(e.target)||this.hideSuggestions()})}handleInput(e){const n=e.target.value;this.filterSuggestions(n),this.options.onSearch&&this.options.onSearch(n)}handleKeydown(e){e.key==="Enter"?this.performSearch():e.key==="Escape"&&(this.hideSuggestions(),this.inputElement.blur())}filterSuggestions(e){if(!e.trim()){this.hideSuggestions();return}const n=this.options.suggestions.filter(s=>s.toLowerCase().includes(e.toLowerCase()));this.showSuggestions(n)}showSuggestions(e=this.options.suggestions){if(e.length===0){this.hideSuggestions();return}this.suggestionsContainer.innerHTML="",e.forEach((n,s)=>{const r=document.createElement("div");r.className="px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors",r.textContent=n,r.addEventListener("click",()=>{this.selectSuggestion(n)}),r.addEventListener("mouseenter",()=>{this.highlightSuggestion(s)}),this.suggestionsContainer.appendChild(r)}),this.suggestionsContainer.style.display="block"}hideSuggestions(){this.suggestionsContainer.style.display="none"}selectSuggestion(e){this.inputElement.value=e,this.hideSuggestions(),this.options.onSuggestionSelect&&this.options.onSuggestionSelect(e)}highlightSuggestion(e){this.suggestionsContainer.querySelectorAll("div").forEach((s,r)=>{s.className=r===e?"px-4 py-2 bg-blue-100 cursor-pointer transition-colors":"px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors"})}performSearch(){const e=this.inputElement.value;this.options.onSearch&&this.options.onSearch(e)}clearInput(){this.inputElement.value="",this.hideSuggestions(),this.toggleClearButton(),this.inputElement.focus()}toggleClearButton(){this.clearButton.style.display=this.inputElement.value?"block":"none"}setValue(e){this.inputElement.value=e,this.toggleClearButton()}setSuggestions(e){this.options.suggestions=e}focus(){this.inputElement.focus()}render(e){return typeof e=="string"&&(e=document.querySelector(e)),e&&e.appendChild(this.element),this.element}destroy(){this.element.remove()}}const P={title:"Components/Input/SearchInput",component:o,parameters:{docs:{description:{component:"Un componente de búsqueda avanzado con sugerencias, autocompletado y funcionalidades de filtrado."}}},argTypes:{placeholder:{control:"text",description:"Texto de placeholder del input"},value:{control:"text",description:"Valor inicial del input"},suggestions:{control:"object",description:"Lista de sugerencias para autocompletado"},className:{control:"text",description:"Clases CSS adicionales"}}},i={args:{placeholder:"Buscar Pokémon...",value:"",suggestions:["Pikachu","Charizard","Bulbasaur","Squirtle","Mewtwo"]},render:t=>{const e=new o(t),n=document.createElement("div");return n.style.padding="20px",e.render(n),n}},c={args:{placeholder:"Buscar Pokémon...",value:"Pikachu",suggestions:["Pikachu","Charizard","Bulbasaur","Squirtle","Mewtwo"]},render:t=>{const e=new o(t),n=document.createElement("div");return n.style.padding="20px",e.render(n),n}},l={args:{placeholder:"Buscar Pokémon...",value:"",suggestions:["Pikachu","Charizard","Bulbasaur","Squirtle","Mewtwo","Gengar","Alakazam","Machamp","Golem","Ninetales","Raichu","Arcanine","Poliwrath","Victreebel","Tentacruel"]},render:t=>{const e=new o(t),n=document.createElement("div");return n.style.padding="20px",e.render(n),n}},u={args:{placeholder:"¿Qué Pokémon buscas hoy?",value:"",suggestions:["Pikachu","Charizard","Bulbasaur"]},render:t=>{const e=new o(t),n=document.createElement("div");return n.style.padding="20px",e.render(n),n}},d={args:{placeholder:"Buscar Pokémon...",value:"",suggestions:["Pikachu","Charizard","Bulbasaur","Squirtle","Mewtwo"],onSearch:t=>{console.log("Buscando:",t),alert(`Buscando: ${t}`)},onSuggestionSelect:t=>{console.log("Sugerencia seleccionada:",t),alert(`Pokémon seleccionado: ${t}`)}},render:t=>{const e=new o(t),n=document.createElement("div");n.style.padding="20px";const s=document.createElement("div");return s.innerHTML='<p style="margin-bottom: 10px; color: #666;">Escribe para buscar o selecciona una sugerencia. Revisa la consola para ver los logs.</p>',n.appendChild(s),e.render(n),n}};var p,g,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placeholder: 'Buscar Pokémon...',
    value: '',
    suggestions: ['Pikachu', 'Charizard', 'Bulbasaur', 'Squirtle', 'Mewtwo']
  },
  render: args => {
    const searchInput = new SearchInput(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    searchInput.render(container);
    return container;
  }
}`,...(m=(g=i.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var S,v,E;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: 'Buscar Pokémon...',
    value: 'Pikachu',
    suggestions: ['Pikachu', 'Charizard', 'Bulbasaur', 'Squirtle', 'Mewtwo']
  },
  render: args => {
    const searchInput = new SearchInput(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    searchInput.render(container);
    return container;
  }
}`,...(E=(v=c.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var y,f,w;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    placeholder: 'Buscar Pokémon...',
    value: '',
    suggestions: ['Pikachu', 'Charizard', 'Bulbasaur', 'Squirtle', 'Mewtwo', 'Gengar', 'Alakazam', 'Machamp', 'Golem', 'Ninetales', 'Raichu', 'Arcanine', 'Poliwrath', 'Victreebel', 'Tentacruel']
  },
  render: args => {
    const searchInput = new SearchInput(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    searchInput.render(container);
    return container;
  }
}`,...(w=(f=l.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var b,C,k;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    placeholder: '¿Qué Pokémon buscas hoy?',
    value: '',
    suggestions: ['Pikachu', 'Charizard', 'Bulbasaur']
  },
  render: args => {
    const searchInput = new SearchInput(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    searchInput.render(container);
    return container;
  }
}`,...(k=(C=u.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var x,B,I;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    placeholder: 'Buscar Pokémon...',
    value: '',
    suggestions: ['Pikachu', 'Charizard', 'Bulbasaur', 'Squirtle', 'Mewtwo'],
    onSearch: query => {
      console.log('Buscando:', query);
      alert(\`Buscando: \${query}\`);
    },
    onSuggestionSelect: suggestion => {
      console.log('Sugerencia seleccionada:', suggestion);
      alert(\`Pokémon seleccionado: \${suggestion}\`);
    }
  },
  render: args => {
    const searchInput = new SearchInput(args);
    const container = document.createElement('div');
    container.style.padding = '20px';

    // Agregar información sobre la funcionalidad
    const info = document.createElement('div');
    info.innerHTML = '<p style="margin-bottom: 10px; color: #666;">Escribe para buscar o selecciona una sugerencia. Revisa la consola para ver los logs.</p>';
    container.appendChild(info);
    searchInput.render(container);
    return container;
  }
}`,...(I=(B=d.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};const M=["Default","WithInitialValue","WithManySuggestions","CustomPlaceholder","WithSearchFunctionality"];export{u as CustomPlaceholder,i as Default,c as WithInitialValue,l as WithManySuggestions,d as WithSearchFunctionality,M as __namedExportsOrder,P as default};
