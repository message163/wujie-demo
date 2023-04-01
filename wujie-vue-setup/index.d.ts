// import { bus, preloadApp, destroyApp, setupApp } from "wujie";
import type { App } from 'vue';

declare const WujieVue: {
    // bus: typeof bus;
    // setupApp: typeof setupApp;
    // preloadApp: typeof preloadApp;
    // destroyApp: typeof destroyApp;
    install: (app: App) => void
};

export default WujieVue;

