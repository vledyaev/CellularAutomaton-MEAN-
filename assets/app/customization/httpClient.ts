import {Injectable} from "@angular/core";
import {CoolHttp, HttpHeader} from "angular2-cool-http";
import { Http} from "@angular/http";
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";


@Injectable()
export class HttpClient extends CoolHttp {
    constructor(http: Http, private authService: AuthService) {
        super(http);
        this.registerGlobalHeader(new HttpHeader('Content-Type', 'application/json'));

        this.registerBaseUrl(this.getOrigin());

        this.registerResponseInterceptor({
            afterResponseAsync: function(response, url, method, data, headers){
                return new Promise((resolve, reject) => {
                    if(response.status == 401){
                        authService.logout();
                        reject();
                    }else{
                        resolve(false);
                    }
                })
            }
        });
    }

    getOrigin(){
        let origin = location.origin;
        if (!origin) {
            origin = location.protocol + "//" + location.hostname + (location.port && ":" + location.port);
        }
        return origin;
    }
}