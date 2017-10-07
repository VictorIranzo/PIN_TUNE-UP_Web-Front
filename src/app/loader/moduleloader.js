import {Injectable, Compiler} from '@angular/core';

const NAMESPACE = 'tuneUp';
const SEPARATOR = '#';

@Injectable()
export class TnModuleLoader {
    constructor(compiler: Compiler) {
        this.compiler = compiler;
    }
    load(path) {
        let {modulePath, moduleName} = this.splitPath(path);
        return new Promise((resolve, reject) => {
            let loadedModule = window[NAMESPACE] && window[NAMESPACE][moduleName];
            if (loadedModule) {
                resolve(loadedModule);
            }
            let script = document.createElement('script');
            script.src = modulePath;
            script.onload = () => {
                this.compiler.compileModuleAsync(window[NAMESPACE][moduleName]).then((ngModule) => {
                    script.remove();
                    resolve(ngModule);
                }).catch((error) => {
                    reject(error);
                });
            };
            script.onerror = (error) => {
                reject(`Could not load ${path}`);
            };
            document.head.appendChild(script);
        });
    }
    splitPath(path) {
        let [modulePath, moduleName] = path.split(SEPARATOR);
        return {modulePath, moduleName};
    }
}