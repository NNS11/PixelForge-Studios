document.addEventListener('DOMContentLoaded', () => {

    // ── Dados dos jogos ──────────────────────────────────────
    const games = {
        "fifa": {
            titulo: "FIFA 2026",
            genero: "Esporte",
            desc: "O EA SPORTS FC 26 é o principal simulador de futebol da Electronic Arts, focado em alta autenticidade e personalização. Ele traz mais de 20.000 jogadores reais de 750+ clubes, além das principais competições licenciadas, como a UEFA Champions League, CONMEBOL Libertadores e LALIGA.",
            foto2: "assets/img/fifa2.png",
            link: "https://www.ea.com"
        },
        "pes": {
            titulo: "PES 2016",
            genero: "Esporte",
            desc: "O PES 2016 é um jogo de simulação de futebol lançado pela Konami em 2015, marcando o 20º aniversário da franquia. Estrelado por Neymar Jr. na capa, o game foi aclamado por sua jogabilidade fluida, gráficos com a Fox Engine e foco no controle total do jogador.",
            foto2: "assets/img/pes2.jpg",
            link: "https://www.konami.com"
        },
        "gta": {
            titulo: "GTA V",
            genero: "Ação",
            desc: "Grand Theft Auto V é um jogo de ação e mundo aberto desenvolvido pela Rockstar Games. Ambientado no estado fictício de San Andreas, acompanha três protagonistas — Michael, Trevor e Franklin — que se unem para realizar assaltos arriscados.",
            foto2: "assets/img/gta2.png",
            link: "https://www.rockstargames.com"
        },
        "mk9": {
            titulo: "Mortal Kombat 9",
            genero: "Luta",
            desc: "Mortal Kombat 9 (lançado como Mortal Kombat em 2011) é um jogo de luta desenvolvido pela NetherRealm Studios. Servindo como reboot da franquia, volta às origens da jogabilidade em 2D com gráficos em 3D.",
            foto2: "assets/img/mk92.png",
            link: "https://www.mortalkombat.com"
        },
        "minecraft": {
            titulo: "Minecraft",
            genero: "Sandbox",
            desc: "Minecraft é um jogo de aventura e construção em sandbox. Os jogadores exploram um mundo tridimensional infinito gerado proceduralmente, onde podem coletar recursos e criar estruturas a partir de blocos.",
            foto2: "assets/img/minecraft2.jpg",
            link: "https://www.minecraft.net"
        },
        "cod": {
            titulo: "COD MW3",
            genero: "FPS",
            desc: "A franquia Call of Duty: Modern Warfare 3 possui duas versões principais: o clássico de 2011 e o reboot de 2023. Ambas são jogos de tiro em primeira pessoa focados em combates militares modernos.",
            foto2: "assets/img/cod2.jpg",
            link: "https://www.callofduty.com"
        }
    };

    // ── Modal de jogo ────────────────────────────────────────
    const modal = document.getElementById('game-modal');

    document.querySelectorAll('.game-card').forEach(card => {
        card.onclick = () => {
            const data = games[card.dataset.game];
            document.getElementById('modal-title').innerText = data.titulo;
            document.getElementById('modal-genre').innerText = `Gênero: ${data.genero}`;
            document.getElementById('modal-desc').innerText = data.desc;
            document.getElementById('modal-img').src = data.foto2;
            document.getElementById('modal-link').href = data.link;
            modal.style.display = 'block';
        };
    });

    document.querySelector('.close-btn').onclick = () => modal.style.display = 'none';
    window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };

    // ── Tema Dark/Light ──────────────────────────────────────
    const themeBtn = document.getElementById('theme-toggle');
    const drawerThemeBtn = document.getElementById('drawer-theme-toggle');

    function toggleTheme() {
        document.body.classList.toggle('light-mode');
        localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
    }

    themeBtn.onclick = toggleTheme;
    if (drawerThemeBtn) drawerThemeBtn.onclick = toggleTheme;
    if (localStorage.getItem('theme') === 'light') document.body.classList.add('light-mode');

    // ── Formulário ───────────────────────────────────────────
    document.getElementById('contact-form').onsubmit = (e) => {
        e.preventDefault();
        alert('Mensagem enviada com sucesso!');
        e.target.reset();
    };

    // ── Drawer (menu lateral) ────────────────────────────────
    const hamburger   = document.getElementById('hamburger');
    const drawer      = document.getElementById('drawer');
    const overlay     = document.getElementById('drawer-overlay');
    const drawerClose = document.getElementById('drawer-close');

    function openDrawer() {
        drawer.classList.add('active');
        overlay.classList.add('active');
        hamburger.classList.add('active');
        document.body.style.overflow = 'hidden'; // trava scroll do fundo
    }

    function closeDrawer() {
        drawer.classList.remove('active');
        overlay.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', () => {
        drawer.classList.contains('active') ? closeDrawer() : openDrawer();
    });

    drawerClose.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);

    // Fecha ao clicar em qualquer link do drawer
    document.querySelectorAll('#drawer .drawer-links a').forEach(link => {
        link.addEventListener('click', closeDrawer);
    });
});
