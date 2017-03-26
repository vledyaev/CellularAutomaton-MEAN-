import {Component, EventEmitter, Output} from '@angular/core';

import {DialogRef, ModalComponent, CloseGuard} from 'angular2-modal';
import { BSModalContext,  Modal } from 'angular2-modal/plugins/bootstrap';
import {GOLConfigurationService} from "./gol-configuration.service";
import {GOLConfiguration} from "./gol-configuration.model";
import { NgForm } from "@angular/forms";

export class SaveConfigurationModalContext extends BSModalContext {
    constructor(public state: number[][], public name: string,public description: string) {
        super();
    }
}

@Component({
    selector: 'modal-content',
    template: `
        <div class="modal-header">
            <button type="button" class="close" (click)="onClose()" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Save configuration</h4>
        </div>
        <div class="modal-body">
            <form #f="ngForm">
                <div class="form-group">
                    <label for="configurationName">Name</label>
                    <input name="name" [(ngModel)]="context.name" class="form-control" id="configurationName" placeholder="Name">
                </div>
                <div class="form-group">
                    <label for="configurationName">Description</label>
                    <textarea name="description" [(ngModel)]="context.description" class="form-control" id="configurationDescription" placeholder="Description">
                            </textarea>
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-default" (click)="onClose()">Close</button>
            <button type="button" class="btn btn-primary" (click)="onSave()">Save</button>
        </div>
    `
})
export class SaveConfigurationComponent implements CloseGuard, ModalComponent<SaveConfigurationModalContext> {
    context: SaveConfigurationModalContext;

    constructor(public dialog: DialogRef<SaveConfigurationModalContext>,public golConfigurationService: GOLConfigurationService, public modal: Modal) {
        this.context = dialog.context;
        dialog.setCloseGuard(this);
    }

    onClose(){
        this.dialog.close();
    }

    onSave(){
         let configuration = new GOLConfiguration(this.context.name,this.context.description, this.context.state);
         this.golConfigurationService.saveConfiguration(configuration).subscribe(
             ()=>
                 this.modal.alert()
                     .size('sm')
                     .title("Info")
                     .message("Configuration has been saved.")
                     .open()
                     .then((dialog) => dialog.result)
                     .then(() => this.dialog.close({name: this.context.name, description: this.context.description}))
         );
    }

    // beforeDismiss(): boolean {
    //     return true;
    // }
    //
    //  beforeClose(): boolean {
    //      return true;
    //  }
}