'use strict';
// Defina os contatos reais para ativar os links externos.
const CONFIG = { whatsapp: '5574999504255', instagram: 'galeriafks', maps: '' };
const paths = {
 heart:'<path d="M12 21S2 15 2 8a5 5 0 0 1 10-2 5 5 0 0 1 10 2c0 7-10 13-10 13Z"/>',
 bowl:'<path d="M3 11h18l-2 9H5l-2-9Z"/><path d="M3 11c0-4 18-4 18 0M7 5l1-2m4 3V2m5 3-1-2"/>',
 spark:'<path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7ZM3 3l2 2m14 14 2 2"/>',
 collar:'<path d="M3 9c0-6 18-6 18 0v7c0 6-18 6-18 0V9Z"/><path d="M3 9c0 6 18 6 18 0M8 13h8v6H8zM12 16h2"/>',
 ball:'<circle cx="12" cy="12" r="10"/><path d="M7 3c8 5 8 13 0 18M17 3c-8 5-8 13 0 18"/>',
 paw:'<ellipse cx="12" cy="16" rx="6" ry="5"/><ellipse cx="5" cy="9" rx="2" ry="3"/><ellipse cx="10" cy="5" rx="2" ry="3"/><ellipse cx="16" cy="5" rx="2" ry="3"/><ellipse cx="21" cy="10" rx="2" ry="3"/>',
 bag:'<path d="M4 7h16l1 14H3L4 7Z"/><path d="M8 8V5a4 4 0 0 1 8 0v3"/>'
};
const icon = name => `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${paths[name]}</svg>`;
document.querySelectorAll('[data-icon]').forEach(el => el.innerHTML=icon(el.dataset.icon));
const products=[
 {name:'Ração premium',category:'alimentacao',label:'Alimentação',text:'Sabor e cuidado em cada refeição.',image:"images/produto-racao.webp",alt:"Embalagens fictícias de ração MIAU para cães e gatos em um mostrador laranja e verde.",detail:'Uma opção ilustrativa para compor uma alimentação completa. A escolha da ração deve considerar a espécie, a idade e as necessidades individuais do seu pet.'},
 {name:'Petiscos especiais',category:'alimentacao',label:'Alimentação',text:'Um carinho entre uma brincadeira e outra.',image:"images/produto-petiscos.webp",alt:"Pacotes fictícios de petiscos MIAU em tons creme, verde e laranja sobre um mostrador.",detail:'Petiscos para transformar pequenos momentos em recompensas. Consulte a composição e as porções indicadas na embalagem antes de oferecer ao seu pet.'},
 {name:'Bola de brincar',category:'brinquedos',label:'Brinquedos',text:'Diversão para gastar energia junto.',image:"images/produto-bolas.webp",alt:"Bolas de brinquedo laranja, verdes e de corda em um mostrador nas cores da MIAU.",detail:'Brinquedo ilustrativo para momentos de interação. Escolha o tamanho adequado ao seu pet e acompanhe as brincadeiras.'},
 {name:'Coleira com estilo',category:'acessorios',label:'Acessórios',text:'Personalidade para cada passeio.',image:"images/produto-coleiras.webp",alt:"Coleiras e guias verdes, laranja e creme para cães e gatos em um mostrador MIAU.",detail:'Uma coleira para compor passeios cheios de personalidade. Confira as medidas do pescoço e mantenha um ajuste confortável.'},
 {name:'Caminha aconchego',category:'acessorios',label:'Acessórios',text:'Um cantinho para sonhar e descansar.',image:"images/produto-caminhas.webp",alt:"Caminhas marrom e verde com almofadas macias sobre bases laranja e verde.",detail:'Conforto para as pausas do dia. Escolha uma cama com espaço para seu pet se esticar e materiais adequados à rotina de limpeza.'},
 {name:'Shampoo para pets',category:'higiene',label:'Higiene',text:'Carinho que faz parte da rotina.',image:"images/produto-higiene.webp",alt:"Frascos fictícios de shampoo e produtos de higiene MIAU com uma escova sobre bases laranja e verde.",detail:'Produto ilustrativo de higiene. Use apenas produtos apropriados para a espécie e siga as orientações do fabricante. Em caso de problemas de pele, procure orientação veterinária.'}
];
const grid=document.getElementById('product-grid');
products.forEach((p,i)=>{const card=document.createElement('article');card.className='product';card.dataset.category=p.category;card.innerHTML=`<button type="button" class="product-art" data-product="${i}" aria-label="Ver produto: ${p.name}"><img src="${p.image}" alt="${p.alt}" width="1000" height="800" loading="lazy"><span class="tag">Seleção MIAU</span></button><div class="product-body"><p class="eyebrow">${p.label}</p><h3>${p.name}</h3><p>${p.text}</p><button type="button" class="text-link" data-product="${i}" aria-label="Ver produto: ${p.name}">Ver produto <span aria-hidden="true">↗</span></button></div>`;grid.append(card);});
const dialog=document.getElementById('detail-dialog');const content=document.getElementById('dialog-content');let lastFocus;
function show(html){if(!dialog.open)lastFocus=document.activeElement;content.innerHTML=html;if(!dialog.open)dialog.showModal();document.body.style.overflow='hidden';}
function close(){dialog.close();}
dialog.querySelector('.dialog-close').addEventListener('click',close);
dialog.addEventListener('close',()=>{document.body.style.overflow='';lastFocus?.focus();});
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close();}});
function contact(channel){let url='';if(channel==='WhatsApp'&&/^\d{10,15}$/.test(CONFIG.whatsapp))url=`https://wa.me/${CONFIG.whatsapp}`;if(channel==='Visita'&&CONFIG.maps)url=CONFIG.maps;if(channel==='Instagram'&&CONFIG.instagram)url=`https://www.instagram.com/${encodeURIComponent(CONFIG.instagram)}/`;if(url){window.open(url,'_blank','noopener,noreferrer');return;}show(`<p class="eyebrow">Projeto de portfólio</p><h2 id="dialog-title">${channel==='Visita'?'Um lugar de carinho.':channel==='Instagram'?'Nosso carinho nas redes.':'Vamos conversar?'}</h2><p>A MIAU é uma marca fictícia criada para apresentar um projeto de branding e landing page. ${channel==='Visita'?'O endereço e os horários apresentados são ilustrativos.':channel==='Instagram'?'As artes do feed são demonstrativas; o perfil oficial ainda não foi definido.':'O número de atendimento pelo WhatsApp ainda não foi definido.'}</p><div class="dialog-note">Quando os dados oficiais forem definidos, este botão poderá abrir o contato diretamente.</div>`);}
document.addEventListener('click',e=>{const p=e.target.closest('[data-product]');if(p){const product=products[Number(p.dataset.product)];show(`<p class="eyebrow">${product.label} · Catálogo ilustrativo</p><h2 id="dialog-title">${product.name}</h2><img class="dialog-product" src="${product.image}" alt="${product.alt}" width="1000" height="800"><p>${product.detail}</p><div class="dialog-note">Imagem conceitual. Marcas, tamanhos, disponibilidade e valores serão definidos no catálogo final.</div><p><button class="button" data-contact="WhatsApp">Consultar pelo WhatsApp ↗</button></p>`);}const c=e.target.closest('[data-contact]');if(c){contact(c.dataset.contact);}});
function filter(value){document.querySelectorAll('[data-filter]').forEach(b=>{const active=b.dataset.filter===value;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});let n=0;document.querySelectorAll('.product').forEach(p=>{p.hidden=value!=='todos'&&p.dataset.category!==value;if(!p.hidden)n++;});document.getElementById('filter-status').textContent=`${n} produtos exibidos.`;window.ScrollTrigger?.refresh();}
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>filter(b.dataset.filter)));
document.querySelectorAll('#categorias a.category[data-category]').forEach(a=>a.addEventListener('click',()=>filter(a.dataset.category)));
const toggle=document.querySelector('.menu-toggle');const nav=document.getElementById('navigation');function closeMenu(){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Abrir menu');toggle.textContent='☰';}toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');toggle.textContent=open?'×':'☰';});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});document.addEventListener('click',e=>{if(!e.target.closest('.nav'))closeMenu();});
document.getElementById('year').textContent=new Date().getFullYear();window.addEventListener('scroll',()=>document.querySelector('.header').classList.toggle('scrolled',window.scrollY>20),{passive:true});
if(window.gsap&&window.ScrollTrigger){gsap.registerPlugin(ScrollTrigger);gsap.matchMedia().add('(prefers-reduced-motion: no-preference)',()=>{const tl=gsap.timeline({defaults:{duration:.8,ease:'power2.out'}});tl.from('.hero h1 span',{y:35,opacity:0,stagger:.1}).from('.hero .lead',{y:15,opacity:0},'-.5').from('.hero .actions>*',{y:12,opacity:0,stagger:.1},'-.5').from('.hero-art',{x:25,opacity:0,scale:.97},'-.8');gsap.utils.toArray('.reveal').forEach(el=>gsap.from(el,{y:22,opacity:0,duration:.65,scrollTrigger:{trigger:el,start:'top 92%',once:true}}));gsap.from('.gallery-carousel',{y:16,opacity:0,duration:.5,scrollTrigger:{trigger:'#galeria',start:'top 85%',once:true}});gsap.from('#instagram .social-photo',{y:18,scale:.98,opacity:0,duration:.75,ease:'power2.out',scrollTrigger:{trigger:'#instagram',start:'top 85%',once:true}});gsap.from('#instagram .social-copy',{y:12,opacity:0,duration:.65,delay:.12,ease:'power2.out',scrollTrigger:{trigger:'#instagram',start:'top 85%',once:true}});return()=>{};});}

// Os serviços abrem na página e funcionam mesmo sem JavaScript.
document.querySelectorAll('.service-item').forEach(item=>item.addEventListener('toggle',()=>{
 if(item.open)document.querySelectorAll('.service-item').forEach(other=>{if(other!==item)other.open=false;});
 window.ScrollTrigger?.refresh();
}));
const galleryPhotos = Array.from(document.querySelectorAll('[data-gallery]')).map(button=>({src:button.querySelector('img').getAttribute('src'),alt:button.querySelector('img').alt,title:button.getAttribute('aria-label').split(': ').slice(1).join(': ')}));
let galleryIndex=0;
function galleryMarkup(){
 const photo=galleryPhotos[galleryIndex];
 return `<div class="lightbox-meta"><p class="eyebrow">Galeria MIAU · ${String(galleryIndex+1).padStart(2,'0')} / ${galleryPhotos.length}</p><h2 id="dialog-title">${photo.title}</h2></div><div class="lightbox-stage"><button type="button" class="lightbox-arrow" data-gallery-step="-1" aria-label="Foto anterior">←</button><img class="dialog-image" src="${photo.src}" alt="${photo.alt}" width="1000" height="1000"><button type="button" class="lightbox-arrow" data-gallery-step="1" aria-label="Próxima foto">→</button></div><p class="lightbox-count" aria-live="polite">Foto ${galleryIndex+1} de ${galleryPhotos.length}</p>`;
}
document.querySelectorAll('[data-gallery]').forEach(button=>button.addEventListener('click',()=>{
 galleryIndex=Number(button.dataset.gallery);dialog.classList.add('gallery-dialog');show(galleryMarkup());
}));
function advanceGallery(step){
 galleryIndex=(galleryIndex+step+galleryPhotos.length)%galleryPhotos.length;
 const oldImage=content.querySelector('.dialog-image');const photo=galleryPhotos[galleryIndex];
 oldImage.src=photo.src;oldImage.alt=photo.alt;
 content.querySelector('#dialog-title').textContent=photo.title;
 content.querySelector('.eyebrow').textContent=`Galeria MIAU · ${String(galleryIndex+1).padStart(2,'0')} / ${galleryPhotos.length}`;
 content.querySelector('[aria-live]').textContent=`Foto ${galleryIndex+1} de ${galleryPhotos.length}`;
}
dialog.addEventListener('click',event=>{const control=event.target.closest('[data-gallery-step]');if(control)advanceGallery(Number(control.dataset.galleryStep));});
dialog.addEventListener('keydown',event=>{if(!dialog.classList.contains('gallery-dialog'))return;if(event.key==='ArrowRight'){event.preventDefault();advanceGallery(1);}if(event.key==='ArrowLeft'){event.preventDefault();advanceGallery(-1);}});
dialog.addEventListener('close',()=>dialog.classList.remove('gallery-dialog'));

// Pausa automática fora da tela, ao passar o cursor, ao focar e ao abrir o modal.
const carousel=document.querySelector('.gallery-carousel');
const slides=Array.from(carousel.querySelectorAll('.gallery-item'));
const pauseControl=carousel.querySelector('.carousel-pause');
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
let slideIndex=0,carouselTimer=null,carouselPaused=reducedMotion.matches,carouselVisible=false,carouselHovered=false;
function stopCarousel(){if(carouselTimer!==null){clearInterval(carouselTimer);carouselTimer=null;}}
function updateCarouselTimer(){
 stopCarousel();
 if(!carouselPaused&&carouselVisible&&!carouselHovered&&!document.hidden&&!dialog.open&&!carousel.contains(document.activeElement))carouselTimer=setInterval(()=>changeSlide(1,false),4000);
}
function setSlide(index,announce=false){
 slideIndex=(index+slides.length)%slides.length;
 slides.forEach((slide,i)=>{slide.hidden=i!==slideIndex;});
 carousel.querySelector('.carousel-count').textContent=`${String(slideIndex+1).padStart(2,'0')} / ${slides.length}`;
 carousel.classList.remove('is-changing');void carousel.offsetWidth;carousel.classList.add('is-changing');
 if(announce)document.getElementById('carousel-status').textContent=`Foto ${slideIndex+1} de ${slides.length}: ${galleryPhotos[slideIndex].title}`;
}
function changeSlide(step,manual=true){setSlide(slideIndex+step,manual);if(manual)updateCarouselTimer();}
function updatePauseControl(){pauseControl.setAttribute('aria-pressed',String(carouselPaused));pauseControl.setAttribute('aria-label',carouselPaused?'Continuar troca automática de fotos':'Pausar troca automática de fotos');pauseControl.innerHTML=carouselPaused?'Continuar <span aria-hidden="true">▷</span>':'Pausar <span aria-hidden="true">Ⅱ</span>';}
carousel.querySelectorAll('[data-carousel-step]').forEach(control=>control.addEventListener('click',()=>changeSlide(Number(control.dataset.carouselStep))));
pauseControl.addEventListener('click',()=>{carouselPaused=!carouselPaused;updatePauseControl();updateCarouselTimer();});
carousel.addEventListener('mouseenter',()=>{carouselHovered=true;stopCarousel();});
carousel.addEventListener('mouseleave',()=>{carouselHovered=false;updateCarouselTimer();});
carousel.addEventListener('focusin',stopCarousel);
carousel.addEventListener('focusout',()=>setTimeout(updateCarouselTimer,0));
carousel.addEventListener('keydown',event=>{if(dialog.open)return;if(event.key==='ArrowRight'){event.preventDefault();changeSlide(1);}if(event.key==='ArrowLeft'){event.preventDefault();changeSlide(-1);}});
carousel.querySelectorAll('[data-gallery]').forEach(button=>button.addEventListener('click',stopCarousel));
dialog.addEventListener('close',updateCarouselTimer);
document.addEventListener('visibilitychange',updateCarouselTimer);
reducedMotion.addEventListener('change',()=>{if(reducedMotion.matches){carouselPaused=true;updatePauseControl();stopCarousel();}});
if('IntersectionObserver'in window){new IntersectionObserver(entries=>{carouselVisible=entries[0].isIntersecting;updateCarouselTimer();},{threshold:.25}).observe(carousel);}else{carouselVisible=true;}
updatePauseControl();updateCarouselTimer();
