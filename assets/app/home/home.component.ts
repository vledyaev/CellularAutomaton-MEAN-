import { Component } from "@angular/core";
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'

})
export class HomeComponent {
    constructor(private authService: AuthService, private router: Router) {}

    newConfiguration(){
        if(!this.authService.isLoggedIn()){
            this.router.navigate(['/signin']);
        }else{
            this.router.navigate(['/configurations']);
        }
    }
}