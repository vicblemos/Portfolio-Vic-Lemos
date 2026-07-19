# Ideas — Vitória Lemos Portfolio

## Abordagem Escolhida: Editorial Minimalismo com Tensão Tipográfica

<response>
<text>
**Design Movement:** Editorial Minimalismo Europeu — inspirado em revistas de design escandinavo e publicações de moda italiana dos anos 90.

**Core Principles:**
1. Tipografia como elemento visual dominante — letras grandes, bold, com tracking ajustado criam estrutura e hierarquia sem precisar de ornamentos
2. Contraste de escala radical — elementos muito grandes ao lado de elementos muito pequenos geram tensão visual e interesse
3. Espaço negativo generoso — o branco (e o preto) são tão importantes quanto o conteúdo
4. Grid assimétrico — colunas de larguras diferentes, alinhamentos alternados entre esquerda e direita

**Color Philosophy:**
Paleta quase monocromática com um único acento quente. Preto profundo (#0D0D0D) para hero e footer, branco puro (#FAFAFA) para corpo, e um tom de areia/terracota suave (#C4A882) como acento. A austeridade da paleta comunica sofisticação e faz os projetos coloridos se destacarem ainda mais.

**Layout Paradigm:**
- Hero: texto enorme à esquerda, foto da designer à direita em formato retrato, com sobreposição sutil
- Skills: lista vertical em coluna lateral, texto rotacionado 90° como marcador de seção
- Projetos: grid alternado (imagem esquerda/texto direita, depois texto esquerda/imagem direita), numeração em fonte display grande
- Experiência: timeline horizontal com anos em destaque tipográfico

**Signature Elements:**
1. Números de seção/projeto em fonte display enorme (80-120px), quase transparentes, servindo como textura de fundo
2. Linha fina horizontal como separador de seções, com pequeno texto de label rotacionado
3. Hover nos projetos: overlay escuro com título em branco e seta diagonal

**Interaction Philosophy:**
Interações sutis e elegantes — sem exageros. Hover effects com transições lentas (400ms ease-out). Scroll reveal com fade-in suave. O cursor padrão é mantido, exceto em links onde vira um ponto.

**Animation:**
- Entrada da hero: título desliza de baixo para cima com stagger de 80ms por linha
- Projetos: fade-in com translateY(20px) ao entrar na viewport
- Hover em projetos: overlay aparece com opacity transition de 300ms
- Números decorativos: parallax sutil ao scroll (translateY proporcional)

**Typography System:**
- Display/Títulos: "Playfair Display" — serifado elegante, peso 700/900, para nome e títulos de seção
- Body: "DM Sans" — sans-serif humanista, peso 300/400, para texto corrido
- Acento/Labels: "DM Mono" — monospace para numeração e labels técnicos
- Hierarquia: 96px (nome hero) → 48px (títulos de seção) → 24px (títulos de projeto) → 16px (body) → 12px (labels)
</text>
<probability>0.07</probability>
</response>

<response>
<text>
**Design Movement:** Brutalismo Suave — inspirado em portfólios de designers independentes contemporâneos que subvertem o minimalismo com elementos gráficos assertivos.

**Core Principles:**
1. Estrutura visível — grids e linhas de construção expostos como elemento decorativo
2. Tipografia pesada e direta — sem sutileza, sem decoração, só peso e presença
3. Contraste alto — preto e branco com toques de cor saturada
4. Composição desconfortavelmente interessante — elementos que parecem "errados" mas funcionam

**Color Philosophy:** Preto puro, branco, e um amarelo mostarda (#D4A017) como único acento. Agressivo mas sofisticado.

**Layout Paradigm:** Colunas de largura fixa com gutters visíveis, elementos que "quebram" o grid intencionalmente.

**Signature Elements:**
1. Bordas grossas pretas como moldura de elementos
2. Texto em uppercase com letter-spacing extremo para labels

**Interaction Philosophy:** Hover states dramáticos — inversão de cor (preto vira branco, branco vira preto) em 150ms.

**Animation:** Transições de cor instantâneas, sem easing. Tudo ou nada.

**Typography System:** "Space Grotesk" bold para tudo, com variações de tamanho extremas.
</text>
<probability>0.04</probability>
</response>

<response>
<text>
**Design Movement:** Organic Luxury — inspirado em marcas de moda de alto padrão como Bottega Veneta e Loewe, com sensibilidade artesanal.

**Core Principles:**
1. Textura e materialidade — fundos com grain sutil, elementos que parecem ter peso físico
2. Movimento orgânico — curvas, formas irregulares, nada é perfeitamente reto
3. Paleta terrosa e sensorial — tons de argila, creme, musgo
4. Fotografia como protagonista — imagens grandes, sangradas, sem moldura

**Color Philosophy:** Creme (#F5F0E8), terracota (#B85C38), musgo (#4A5240), e preto suave (#1A1A18). Quente, íntimo, artesanal.

**Layout Paradigm:** Seções com formas recortadas (clip-path), imagens que sangram para fora do container, texto sobreposto às imagens.

**Signature Elements:**
1. Divisores de seção com formas orgânicas (SVG wave/blob)
2. Imagens com aspect-ratio irregular e rotação leve (±2°)

**Interaction Philosophy:** Cursor customizado (círculo pequeno que segue o mouse), hover em imagens com zoom suave.

**Animation:** Tudo em ease-out lento (600ms), sensação de fluidez e peso.

**Typography System:** "Cormorant Garamond" para títulos, "Jost" para body. Contraste entre serifado delicado e sans-serif limpo.
</text>
<probability>0.06</probability>
</response>

---

## Decisão Final

**Escolhida: Abordagem 1 — Editorial Minimalismo com Tensão Tipográfica**

Fontes: Playfair Display (display) + DM Sans (body) + DM Mono (labels)
Paleta: #0D0D0D (preto), #FAFAFA (branco), #C4A882 (areia/acento), #1A1A1A (preto suave)
Layout: Assimétrico, grid editorial, numeração decorativa grande
Animações: Scroll reveal suave, hover com overlay, entrada com stagger
