# PixelForge Studios - Landing Page 🎮

## 📝 Descrição do Projeto
Este projeto consiste no desenvolvimento de uma landing page moderna, responsiva e minimalista para a **PixelForge Studios**, uma plataforma de distribuição e estúdio de jogos. O design foi inspirado na interface da Steam, focando em usabilidade, performance e uma identidade visual marcante utilizando cores neon sobre um fundo dark sólido.

O projeto foi desenvolvido como parte de uma atividade acadêmica para consolidar conhecimentos em Front-end (HTML, CSS e JavaScript).



## 🚀 Tecnologias Utilizadas
- **HTML5:** Estrutura semântica (header, main, section, footer).
- **CSS3:** 
  - Layouts com **Flexbox** e **CSS Grid**.
  - **Responsividade** via Media Queries.
  - Variáveis CSS para gerenciamento de cores.
  - Efeitos de transição e hover.
- **JavaScript (Vanilla):**
  - Manipulação de DOM para o Modal de jogos.
  - Lógica de troca de temas (Dark/Light Mode).
  - Persistência de dados com **LocalStorage**.
  - Validação de formulário de contato.
  - Rolagem suave (Smooth Scroll).



## 🛠️ Funcionalidades e Seções
1. **Home (Hero):** Destaque para o logotipo principal do estúdio e botão de chamada para ação (CTA).
2. **Catálogo de Jogos:** Grid organizado exibindo títulos como GTA V, FIFA 2026, Minecraft, entre outros.
3. **Modal de Detalhes (Bônus):** Ao clicar em um jogo, um pop-up é exibido com:
   - Uma segunda imagem exclusiva do jogo (`foto2.jpg`).
   - Descrição detalhada e gênero.
   - Link direto para a loja oficial do game.
4. **Trailer Destaque:** Incorporação de vídeo do YouTube com design responsivo.
5. **Comunidade:** Seção com depoimentos fictícios de jogadores.
6. **Contato:** Formulário com validação de campos via JavaScript.
7. **Dark/Light Mode:** Sistema de alternância de cores que salva a preferência do usuário.



## 📂 Estrutura de Pastas
```text
/pixelforge-landing
│
├── index.html          # Arquivo principal
├── styles/
│   └── style.css       # Estilização completa e responsividade
├── scripts/
│   └── script.js       # Lógica do Modal, Tema e Validação
├── assets/
│   ├── img/            # Logotipo e capas dos jogos (foto.jpg e foto2.jpg)
└── README.md           # Documentação do projeto