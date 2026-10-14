# MIAU — A sua pet shop do coração

Projeto fictício de portfólio de Flávio Alves / Galeria FK’s. Landing page estática em HTML, CSS e JavaScript, sem etapa de build. GSAP e ScrollTrigger são servidos localmente.

## Conteúdo
- Apresentação da marca, categorias e seção sobre.
- Vitrine com seis fotografias conceituais de produtos, filtros e detalhes em modal. Clicar na imagem ou em “Ver produto” mantém o filtro selecionado.
- Quatro serviços em acordeões com descrição e contato pelo WhatsApp.
- Galeria com 12 imagens ilustrativas, alt individual, carrossel de uma foto por vez e troca automática a cada quatro segundos.
- Galeria ampliada em modal que ocupa a tela, com setas laterais, fechamento por botão ou Escape e navegação pelas setas do teclado.
- Pausa do carrossel ao passar o cursor, focar controles, abrir um modal, sair da seção ou ocultar a aba. Respeito à preferência por movimento reduzido.
- Instagram, contato e menus atualizados no header e footer.

## Editar no VS Code
Abra esta pasta. Edite `index.html`, `css/style.css` e `js/script.js`. Para visualizar, use Live Server ou `python3 -m http.server 8000` e abra `http://localhost:8000`.

As imagens ficam em `images/`; o logo e favicon em `assets/`. As fontes Mosk e MoonBlossom ainda não foram fornecidas como arquivos web; o CSS mantém fontes alternativas.

## Contatos
WhatsApp: https://wa.me/5574999504255
Instagram e crédito Galeria FK’s: https://www.instagram.com/galeriafks
Ambos abrem em nova aba. A chamada do Instagram é um link direto, sem API de feed.

`CONFIG` no início de `js/script.js` define contatos auxiliares. O mapa, endereço, horários, serviços e catálogo são demonstrativos e devem ser adaptados para um cliente real. Os links principais de WhatsApp e Instagram estão também no HTML.

## Imagens
As seis fotografias de produtos são geradas e conceituais; não representam produtos reais à venda. A galeria usa as 12 imagens fornecidas para o projeto, otimizadas em WebP. As imagens antigas permanecem como referência. Não há checkout, agendamento ou entrega operacional.

## Publicação no GitHub Pages
Branch `main`, pasta `/` (raiz), com `.nojekyll`. Não precisa instalar dependências ou executar build.

## Validação
Sintaxe JavaScript, caminhos de assets e links internos verificados. Verificados por testes de lógica: filtros sem ativação indevida nos cartões e controle do carrossel (temporizador, navegação, pausa, foco, visibilidade e movimento reduzido). Teste visual automatizado em navegador não realizado nesta sessão; a versão de revisão foi disponibilizada para avaliação visual.
