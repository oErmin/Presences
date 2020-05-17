const presence = new Presence({
    clientId: "703965572186243152"
});

const projetosTipo: any = document.querySelector('ol.breadcrumb li.active');
const mangaTitulo: any = document.querySelector('div.col-md-8 h1.media-heading');
const mangaStatus: any = document.querySelector("#blog > div > div > div > div.col-md-8 > ul > li:nth-child(1) > span");
const mangaAno: any = document.querySelector("#blog > div > div > div > div.col-md-8 > ul > li:nth-child(2)");
const tituloNoticia: any = document.querySelector("#blog > div > div > div > div.blog-item > div > div.col-xs-12.col-sm-10.blog-content > h2 > a");

presence.on("UpdateData", async () => {
    const presenceData: presenceData = {
        largeImageKey: "logo"
    };

    const path = document.location.pathname;
    presenceData.startTimestamp = Math.floor(Date.now() / 1000);
    if (path == '/') {
        presenceData.details = 'Página inicial';
    } else if (path.includes('/mangas')) {
        presenceData.details = 'Lista de Projetos: ';
        presenceData.state = projetosTipo.innerText;
    } else if (path.includes('/equipe')) {
        presenceData.details = 'Vendo a página da equipe';
    } else if (path.includes('/contato')) {
        presenceData.details = 'Vendo a página de contato';
    } else if (path.includes('/login')) {
        presenceData.details = 'Vendo a página de login';
    } else if (path.includes('/manga')) {
        presenceData.details = mangaTitulo.innerText; 
        presenceData.state = mangaStatus.innerText + ' | ' + mangaAno.innerText;
    } else if (path.includes('noticia')) {
        presenceData.details = tituloNoticia.innerText;
    } else {
        presenceData.details = 'Navegando... ';
    }
    presence.setActivity(presenceData);
});
