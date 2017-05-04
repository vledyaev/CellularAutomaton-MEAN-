import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";
import { AuthService } from "./auth/auth.service";
import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";
import { MessageModule } from "./messages/message.module";
import {AuthModule} from "./auth/auth.module";
import {HomeComponent} from "./home/home.component";
import {GameOfLifeComponent} from "./gameOfLife/game-of-life.component";
import {GOLConfigurationService} from "./gameOfLife/gol-configuration.service";
import {BootstrapModalModule} from "angular2-modal/plugins/bootstrap";
import {ModalModule} from "angular2-modal";
import {SaveConfigurationComponent} from "./gameOfLife/save-configuration.component";
import {FormsModule} from "@angular/forms";
import {ConfigurationPageComponent} from "./gameOfLife/configuration-page.component";
import {NgxPaginationModule} from "ngx-pagination";
import {CoolLoadingIndicatorModule} from "angular2-cool-loading-indicator";
import {HttpClient} from "./customization/httpClient";
import {AuthGuard} from "./customization/auth-guard";

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        ErrorComponent,
        HomeComponent,
        GameOfLifeComponent,
        SaveConfigurationComponent,
        ConfigurationPageComponent
    ],
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        MessageModule,
        AuthModule,
        ModalModule.forRoot(),
        BootstrapModalModule,
        FormsModule,
        NgxPaginationModule,
        CoolLoadingIndicatorModule
    ],
    providers: [AuthService, ErrorService,GOLConfigurationService,HttpClient, AuthGuard],
    bootstrap: [AppComponent],
    entryComponents: [ SaveConfigurationComponent ]
})
export class AppModule {

}