# MIAU — A sua pet shop do coração
Landing page de marca fictícia para portfólio de Flávio Alves / Studio FK’s. HTML, CSS e JavaScript puro. GSAP 3.13.0 e ScrollTrigger locais, sem build nem dependências para servir.

## Editar no VS Code
Abra esta pasta no VS Code. O arquivo `index.html` é a página; `css/style.css` controla a aparência e `js/script.js` contém os produtos, as interações e os contatos. Pode abrir `index.html` diretamente ou usar Live Server. Para servir com Python, execute `python3 -m http.server 8000 `.

## Contatos finais
No início de `script.js`, altere `CONFIG.whatsapp` para um número internacional só com dígitos, `CONFIG.instagram` para o usuário sem @, e `CONFIG.maps` para a URL oficial da localização. WhatsApp configurado: 5574999504255, aberto em nova aba. Instagram da marca e mapa ainda vazios: esses botões explicam que o projeto é demonstrativo. O crédito Studio FK's aponta para instagram.com/flavioalvesfks. Atualize endereço e horários em `index.html`. Não há coleta de dados, checkout ou agendamento real.

## Imagens e marca
Imagens existentes da MIAU convertidas para WebP. Logo extraído em SVG do manual original, com sua geometria preservada. As ilustrações dos produtos são conceituais em SVG e não representam fotografias de produtos à venda. A seção Instagram apresenta uma única arte enviada pelo usuário, com título, parágrafo, botão e entrada suave ao rolar. Não é um feed conectado; o perfil oficial ainda precisa ser configurado em CONFIG.instagram.

Mosk e MoonBlossom ainda não foram fornecidas como arquivos web: a página usa Trebuchet MS/Arial e Georgia como fallbacks. Para ativar as fontes oficiais, adicione arquivos licenciados WOFF2 em `assets/fonts` e regras @font-face no CSS. As cores seguem o briefing.

## Recursos
Menu mobile, filtros por categoria, detalhes de produtos e serviços, ampliação de posts, navegação por âncoras, foco visível, diálogos com Escape e retorno de foco, textos alternativos e animações que respeitam prefers-reduced-motion. Animações não impedem a leitura se GSAP não carregar.

## Validação
Sintaxe JavaScript e integridade de arquivos, imagens, IDs e âncoras verificados. QA visual em navegador pendente: o ambiente não oferece a habilidade de controle de navegador exigida pelo fluxo de preview de Sites.

## GitHub Pages
Publicação estática a partir da branch `main`, pasta `/` (raiz). Nenhuma etapa de build é necessária.
