import { EventEmitter } from "@angular/core";

import { Error } from "./error.model";

export class ErrorService {
    errorOccurred = new EventEmitter<Error>();

    handleError(error: any) {
        let title = "Error";
        let message = "Something went wrong";
        if(error.error && error.error.title && error.error.message){
            title = error.error.title;
            message = error.error.message;
        }
        if(error && error.status == 0){
            message = error.message;
        }
        const errorData = new Error(title, message);
        this.errorOccurred.emit(errorData);
    }
}