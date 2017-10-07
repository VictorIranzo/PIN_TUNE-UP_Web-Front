import {Injectable} from '@angular/core';

@Injectable()
export class AuthGuard {
    constructor(){}
    canActivate() {
        return true;
    }
    canLoad(){
        return true;
    }
    canActivateChild(){
        return true;
    }
}