// Sistema de navegación y enrutamiento para Ocioso

class OciosoApp {
    constructor() {
        this.currentPage = 'home';
        this.colors = [
            '#34a853', // Verde Google
            '#4285f4', // Azul Google
            '#ea4335', // Rojo Google
            '#fbbc04', // Amarillo Google
            '#9c27b0', // Púrpura
            '#00bcd4', // Cian
            '#ff5722', // Naranja
            '#795548'  // Marrón
        ];
        this.init();
    }

    init() {
        // Aplicar color aleatorio al logo
        this.setRandomLogoColor();

        // Elementos del DOM
        this.pages = {
            home: document.getElementById('home-page'),
            articles: document.getElementById('articles-page'),
            article: document.getElementById('article-page')
        };

        this.discoverBtn = document.getElementById('discover-btn');
        this.backHomeBtn = document.getElementById('back-home');
        this.backArticlesBtn = document.getElementById('back-articles');
        this.articlesList = document.getElementById('articles-list');
        this.articleContent = document.getElementById('article-content');

        // Event listeners
        this.discoverBtn.addEventListener('click', () => this.showArticlesList());
        this.backHomeBtn.addEventListener('click', () => this.showHome());
        this.backArticlesBtn.addEventListener('click', () => this.showArticlesList());

        // Manejar navegación del navegador
        window.addEventListener('popstate', (e) => this.handlePopState(e));

        // Cargar página inicial basada en URL
        this.loadFromURL();
    }

    setRandomLogoColor() {
        const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
        const logos = document.querySelectorAll('.logo');
        logos.forEach(logo => {
            logo.style.color = randomColor;
        });

        // Cambiar también el color del botón
        const button = document.querySelector('.discover-button');
        if (button) {
            // Crear un gradiente con el color aleatorio
            const darkerColor = this.darkenColor(randomColor, 20);
            button.style.background = `linear-gradient(135deg, ${randomColor} 0%, ${darkerColor} 100%)`;
            button.style.boxShadow = `0 4px 15px ${randomColor}66`;
        }
    }

    darkenColor(color, percent) {
        // Convertir hex a RGB
        const num = parseInt(color.replace('#', ''), 16);
        const r = Math.max(0, (num >> 16) - percent);
        const g = Math.max(0, ((num >> 8) & 0x00FF) - percent);
        const b = Math.max(0, (num & 0x0000FF) - percent);
        return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
    }

    loadFromURL() {
        const params = new URLSearchParams(window.location.search);
        const articleId = params.get('article');

        if (articleId) {
            this.showArticle(articleId, false);
        } else if (window.location.pathname.includes('articles')) {
            this.showArticlesList(false);
        } else {
            this.showHome(false);
        }
    }

    handlePopState(event) {
        if (event.state) {
            this.showPage(event.state.page);
            if (event.state.articleId) {
                this.loadArticle(event.state.articleId);
            } else if (event.state.page === 'articles') {
                this.renderArticlesList();
            }
        } else {
            this.showHome(false);
        }
    }

    showPage(pageName) {
        Object.values(this.pages).forEach(page => page.classList.remove('active'));
        this.pages[pageName].classList.add('active');
        this.currentPage = pageName;
    }

    showHome(pushState = true) {
        this.showPage('home');
        if (pushState) {
            history.pushState({ page: 'home' }, 'Ocioso', '/');
        }
    }

    showArticlesList(pushState = true) {
        this.showPage('articles');
        this.renderArticlesList();
        if (pushState) {
            history.pushState({ page: 'articles' }, 'Artículos - Ocioso', '/?page=articles');
        }
    }

    showArticle(articleId, pushState = true) {
        this.showPage('article');
        this.loadArticle(articleId);
        if (pushState) {
            const article = window.articlesData.find(a => a.id === articleId);
            const title = article ? `${article.title} - Ocioso` : 'Artículo - Ocioso';
            history.pushState(
                { page: 'article', articleId },
                title,
                `/?article=${articleId}`
            );
        }
    }

    renderArticlesList() {
        this.articlesList.innerHTML = '';

        window.articlesData.forEach(article => {
            const card = document.createElement('div');
            card.className = 'article-card';
            card.innerHTML = `
                <div class="article-card-title">${article.title}</div>
                <div class="article-card-description">${article.description}</div>
            `;
            card.addEventListener('click', () => this.showArticle(article.id));
            this.articlesList.appendChild(card);
        });
    }

    loadArticle(articleId) {
        const article = window.articlesData.find(a => a.id === articleId);

        if (article) {
            this.articleContent.innerHTML = article.content;
        } else {
            this.articleContent.innerHTML = `
                <h1>Artículo no encontrado</h1>
                <p>Lo sentimos, el artículo que buscas no existe.</p>
            `;
        }
    }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new OciosoApp();
});
