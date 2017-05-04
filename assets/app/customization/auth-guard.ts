import {CanActivate, Router}    from '@angular/router';
import {AuthService} from "../auth/auth.service";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService) {}

    canActivate() {
        if (this.authService.isLoggedIn()) { return true; }
        this.authService.logout();
        return false;
    }
}