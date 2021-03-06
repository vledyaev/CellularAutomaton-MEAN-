import { Routes, RouterModule } from "@angular/router";

import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import {SignupComponent} from "./auth/signup.component";
import {SigninComponent} from "./auth/signin.component";
import {LogoutComponent} from "./auth/logout.component";
import {HomeComponent} from "./home/home.component";
import {GameOfLifeComponent} from "./gameOfLife/game-of-life.component";
import {ConfigurationPageComponent} from "./gameOfLife/configuration-page.component";
import {AuthGuard} from "./customization/auth-guard";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard] },
    // { path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule' },
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'home', component: HomeComponent},
    { path: 'automaton/:id', component: GameOfLifeComponent, canActivate: [AuthGuard] },
    { path: 'configurations', component: ConfigurationPageComponent, canActivate: [AuthGuard]}

];

export const routing = RouterModule.forRoot(APP_ROUTES);