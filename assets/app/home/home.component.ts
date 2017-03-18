import { Component } from "@angular/core";
import {AuthService} from "../auth/auth.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'

})
export class HomeComponent {
    constructor(private authService: AuthService) {}

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}