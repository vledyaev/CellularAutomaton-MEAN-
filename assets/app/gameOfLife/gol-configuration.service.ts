import { Response} from "@angular/http";
import { Injectable} from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { ErrorService } from "../errors/error.service";
import {GOLConfiguration} from "./gol-configuration.model";
import {HttpClient} from "../customization/httpClient";
import {HttpHeader} from "angular2-cool-http";

@Injectable()
export class GOLConfigurationService {

    constructor(private httpClient:HttpClient, private errorService: ErrorService) {
        const token = localStorage.getItem('token')
            ? localStorage.getItem('token')
            : '';
        if(token){
            this.httpClient.registerGlobalHeader(new HttpHeader('Authentication', token));
        }
    }

    saveConfiguration(configuration: GOLConfiguration) {
        const body = JSON.stringify(configuration);
        return this.httpClient.postAsync('configuration', body)
            .then((response: any) => {
                return response;
            })
            .catch((error: Response) => {
                if(error){
                    this.errorService.handleError(error);
                    return Observable.throw(error);
                }
                throw new Error();
            });
    }

    editConfiguration(configuration: GOLConfiguration) {
        const body = JSON.stringify(configuration);
        return this.httpClient.patchAsync('configuration/' + configuration.id, body)
            .then((response: any) => {
                return response;
            })
            .catch((error: Response) => {
                if(error){
                    this.errorService.handleError(error);
                    return Observable.throw(error);
                }
                throw new Error();
            });
    }

    getConfiguration(id: string) {
        return this.httpClient.getAsync('configuration/'+ id,)
            .then((response: any) => {
                return response;
            })
            .catch((error: Response) => {
                if(error){
                    this.errorService.handleError(error);
                    return Observable.throw(error);
                }
                throw new Error();
            });
    }

    getConfigurations() {
        return this.httpClient.getAsync('configuration/')
            .then((response: any) => {
                return response;
            })
            .catch((error: Response) => {
                if(error){
                    this.errorService.handleError(error);
                    return Observable.throw(error);
                }
                throw new Error();
            });
    }

    deleteMessage(id: string) {
        return this.httpClient.deleteAsync('configuration/' + id)
            .then((response: any) => response)
            .catch((error: Response) => {
                if(error){
                    this.errorService.handleError(error.json());
                    return Observable.throw(error.json());
                }
                throw new Error();
            })
    };
}