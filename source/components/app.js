import './lib/jquery.inputmask';

export default class App {
    constructor() {
        this._loadComponents();
        this._initInput();
    }

    _loadComponents() {
        const appName = 'App';
        
        document.getElementById('global').innerText = `All ${appName} components loaded.`;
    }

    _initInput() {
        $('#masked-input').inputmask("9-999-999-99-99");
    }
};