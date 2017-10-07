import {Injectable} from '@angular/core';

@Injectable()
export class AuthGuard {
    constructor(){}
    canActivate() {
        return false;
    }
}