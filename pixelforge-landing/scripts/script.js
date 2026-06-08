document.addEventListener('DOMContentLoaded', () => {

    // JavaScript Simples
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
            desc: "O PES 2016 (Pro Evolution Soccer 2016) é um jogo de simulação de futebol lançado pela Konami em 2015, marcando o 20º aniversário da franquia. Estrelado por Neymar Jr. na capa, o game foi aclamado por sua jogabilidade fluida, gráficos com a Fox Engine e foco no controle total do jogador.",
            foto2: "assets/img/pes2.jpg",
            link: "https://www.konami.com"
        },
        "gta": {
            titulo: "GTA V",
            genero: "Ação",
            desc: "Grand Theft Auto V (GTA V) é um jogo de ação e mundo aberto desenvolvido pela Rockstar Games. Ambientado no estado fictício de San Andreas, o jogo acompanha a trajetória de três protagonistas — Michael, Trevor e Franklin — que se unem para realizar assaltos arriscados sob a pressão de agências governamentais corruptas e do submundo do crime.",
            foto2: "assets/img/gta2.png",
            link: "https://www.rockstargames.com"
        },
        "mk9": {
            titulo: "Mortal Kombat 9",
            genero: "Luta",
            desc: "Mortal Kombat 9 (oficialmente lançado como Mortal Kombat em 2011) é um jogo eletrônico de luta desenvolvido pela NetherRealm Studios. Servindo como um reboot da franquia, o título volta às origens da jogabilidade em 2D com gráficos em 3D e reconta a história dos três primeiros jogos da série.",
            foto2: "assets/img/mk92.png",
            link: "https://www.mortalkombat.com"
        },
        "minecraft": {
            titulo: "Minecraft",
            genero: "Sandbox",
            desc: "O Minecraft é um jogo de aventura e construção em sandbox (mundo aberto). Nele, os jogadores exploram um mundo tridimensional infinito gerado proceduralmente, onde podem coletar recursos e criar estruturas a partir de blocos. Detalhes essenciais incluem:",
            foto2: "assets/img/minecraft2.jpg",
            link: "https://www.minecraft.net"
        },
        "cod": {
            titulo: "COD MW3",
            genero: "FPS",
            desc: "A franquia Call of Duty: Modern Warfare 3 possui duas versões principais: o clássico lançado em 2011 e o reboot lançado em 2023. Ambas são jogos de tiro em primeira pessoa (FPS) focados em combates militares modernos.",
            foto2: "assets/img/cod2.jpg",
            link: "https://www.callofduty.com"
        }
    };

    const modal = document.getElementById('game-modal');
    
    // Abrir Modal
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

    // Fechar Modal
    document.querySelector('.close-btn').onclick = () => modal.style.display = 'none';
    window.onclick = (e) => { if(e.target == modal) modal.style.display = 'none'; };

    // Tema Dark/Light
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.onclick = () => {
        document.body.classList.toggle('light-mode');
        localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
    };
    if(localStorage.getItem('theme') === 'light') document.body.classList.add('light-mode');

    // Validação Form
    document.getElementById('contact-form').onsubmit = (e) => {
        e.preventDefault();
        alert('Mensagem enviada com sucesso!');
        e.target.reset();
    };
});