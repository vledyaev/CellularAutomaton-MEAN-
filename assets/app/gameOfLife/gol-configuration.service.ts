import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { ErrorService } from "../errors/error.service";
import {GOLConfiguration} from "./gol-configuration.model";

@Injectable()
export class GOLConfigurationService {

    constructor(private http: Http, private errorService: ErrorService) {
    }

    saveConfiguration(configuration: GOLConfiguration) {
        const body = JSON.stringify(configuration);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post('https://localhost:3000/configuration' + token, body, {headers: headers})
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    getConfiguration(id: string) {
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';

        return this.http.get('https://localhost:3000/configuration/'+ id + token, {headers: headers})
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }
}