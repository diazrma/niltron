const reloadBtn = document.getElementById('reloadBtn');
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const backBtn = document.getElementById('backBtn');
const forwardBtn = document.getElementById('forwardBtn');

const intro = document.getElementById('intro');

const webview = document.querySelector('webview')
webview.addEventListener('dom-ready', () => {

    // webview.openDevTools()
    const searchBtnAct = () => {
        search();

    }
    const searchInputAct = (e) => {
        if (e.keyCode === 13) {
            searchInput
            console.log('input')
            search();
        }

    }
    const search = () => {
        intro.style.display = "none";
        let val = searchInput.value;
        let https = 'https://';

        if (!val.includes('.com')) {

            webview.loadURL(`https://www.google.com/search?q=${val}`);
        } else {
            webview.loadURL(`${https}${val}`);
        }
    }
    searchBtn.addEventListener('click', searchBtnAct);
    searchInput.addEventListener('keydow', searchInputAct);


    const reload = () => {
        webview.reload();
    }
    reloadBtn.addEventListener('click', reload);

    const backHistory = () => {
        webview.goBack();
    }

    const forwardHistory = () => {
        webview.goForward();
    }

    backBtn.addEventListener('click', backHistory);
    forwardBtn.addEventListener('click', forwardHistory);

});