import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {GOLConfigurationService} from "./gol-configuration.service";
import {ConfigurationListItemModel} from "./congifuration-list-item.model";
import {PaginationInstance} from "ngx-pagination";
import {Modal} from "angular2-modal/plugins/bootstrap";


@Component({
    selector: 'modal-content',
    templateUrl: './configuration-page.component.html',
    styles: [`
        .list-group-item.selected {
            background-color: lightsteelblue;
        }
        .close{
            color: #d71802;
            position: absolute;
            top:0;
            right: 0;
         }
        .row{
            margin-top: 5px;
            margin-bottom: 5px;
        }
        pagination-controls /deep/ .ngx-pagination{
            display: inline-block;
            text-align: center;
            width: 100%;
            padding:0;
        }
    `],
    changeDetection: ChangeDetectionStrategy.Default
})
export class ConfigurationPageComponent implements OnInit{
    configurations: ConfigurationListItemModel[];
    selectedConfiguration: ConfigurationListItemModel;

    labels: any = {
        previousLabel: 'Previous',
        nextLabel: 'Next',
        screenReaderPaginationLabel: 'Pagination',
        screenReaderPageLabel: 'page',
        screenReaderCurrentLabel: `You're on page`
    };

    config: PaginationInstance = {
        id: 'advanced',
        itemsPerPage: 10,
        currentPage: 1
    };

    ngOnInit(): void {
        this.configurationService.getConfigurations().then(result => {
           this.configurations = result.obj;
        });
    }

    onConfigurationCreated(configurationListItem: ConfigurationListItemModel){
        this.configurations.push(configurationListItem);
        this.config.currentPage = Math.floor(this.configurations.length/this.config.itemsPerPage) + 1;
        this.selectedConfiguration = configurationListItem;
    }

    onConfigurationDeleted(){
        let index: number = this.configurations.indexOf(this.selectedConfiguration);
        if (index !== -1) {
            this.configurations.splice(index, 1);
            this.selectedConfiguration = null;
        }
    }

    newConfiguration(){
        this.selectedConfiguration = <ConfigurationListItemModel>{id: ''};
    }

    constructor(public configurationService: GOLConfigurationService, public modal: Modal) {}

    onSelect(configuration: ConfigurationListItemModel){
        this.selectedConfiguration = this.selectedConfiguration === configuration ? null : configuration;
    }

    onPageChange(number: number) {
        this.config.currentPage = number;
    }
}