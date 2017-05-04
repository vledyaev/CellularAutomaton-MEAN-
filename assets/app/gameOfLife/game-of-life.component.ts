
import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, ViewChild} from "@angular/core";
import {ListLife} from "./listLife";
import {GOLConfigurationService} from "./gol-configuration.service";
import {BSModalContext, Modal} from "angular2-modal/plugins/bootstrap";
import { SaveConfigurationComponent } from './save-configuration.component';
import {overlayConfigFactory} from "angular2-modal";
import {OVERLAY_PROVIDERS} from "@angular/material";
import {ActivatedRoute} from "@angular/router";
import {ConfigurationListItemModel} from "./congifuration-list-item.model";
import {CoolLoadingIndicator} from "angular2-cool-loading-indicator";

@Component({
    selector: 'app-configuration',
    templateUrl: './game-of-life.component.html',
    providers: [Modal,OVERLAY_PROVIDERS],
    styles: [`
        .my-loading {
            position: fixed;
            top: 0;
            left: 0;

            width: 100%;
            height: 100%;

            text-align: center;
        }

        .my-loading .dimmer {
            position: absolute;

            top: 0;
            left: 0;

            background-color: #000;
            opacity: 0.5;

            width: 100%;
            height: 100%;
        }

        .my-loading .loading-bg {
            position: absolute;
            display: inline-block;

            top: 50%;
            transform: translateY(-50%);

            padding: 20px;

            background-color: #fff;
            border-radius: 15px;
            height: 50px;
            width: 50px;
            text-align: center;
        }
        
        .disabled {
            pointer-events: none;
            cursor: not-allowed;
        }
    `]
})
export class GameOfLifeComponent implements  OnInit, OnChanges{



    //<editor-fold desc="Properties">

    name: string;
    description: string;
    authorId: string;
    @Input() id: string;
    @Output() onConfigurationCreated = new EventEmitter<ConfigurationListItemModel>();
    @Output() onConfigurationDeleted= new EventEmitter();

    isLoaded: boolean = false;
    isEditMode: boolean = false;

    context : CanvasRenderingContext2D;
    width : number = null;
    height : number = null;
    age : number[][] = null;
    cellSize : number = null;
    cellSpace : number = null;

    columnsCount:number = 0;
    rowsCount:number = 0;

    waitTime:number = 0;
    generation:number = 0;

    liveCells:number = 0;
    stepTime: string = '';
    autoplay: boolean = false;


    // Clear state
    clear : ClearState = {
        schedule : false
    };


    // Average execution times
    times : ExecutionTimes = {
        algorithm : 0,
        gui : 0
    };


    // Initial state
    initialState : number[][] = [[39,110],[40,112],[41,109,110,113,114,115]];

    // Trail state
    trail : TrailState = {
        current: true,
        schedule : false
    };


    // Grid style
    grid :  GridStyles ={
        current : 0,

        schemes : [
            {
                color : '#F3F3F3'
            },

            {
                color : '#FFFFFF'
            },

            {
                color : '#666666'
            },

            {
                color : '' // Special case: 0px grid
            }
        ],

        schedule: false
    };

    // Zoom level
    zoom : Zoom  = {
        current : 0,
        schedule : false,

        schemes : [
            // { columns : 100, rows : 48, cellSize : 8 },
            {
                columns : 180,
                rows : 86,
                cellSize : 4
            },

            {
                columns : 300,
                rows : 144,
                cellSize : 2
            },

            {
                columns : 450,
                rows : 216,
                cellSize : 1
            }
        ]
    };

    colors : CellColors ={
        current : 0,
        schedule :  false,

        schemes :[
            {
                dead : '#FFFFFF',
                trail : ['#B5ECA2'],
                alive : ['#9898FF', '#8585FF', '#7272FF', '#5F5FFF', '#4C4CFF', '#3939FF', '#2626FF', '#1313FF', '#0000FF', '#1313FF', '#2626FF', '#3939FF', '#4C4CFF', '#5F5FFF', '#7272FF', '#8585FF']
            },
            {
                dead : '#FFFFFF',
                trail : ['#EE82EE', '#FF0000', '#FF7F00', '#FFFF00', '#008000 ', '#0000FF', '#4B0082'],
                alive : ['#FF0000', '#FF7F00', '#FFFF00', '#008000 ', '#0000FF', '#4B0082', '#EE82EE']
            },

            {
                dead : '#FFFFFF',
                trail : ['#9898FF', '#8585FF', '#7272FF', '#5F5FFF', '#4C4CFF', '#3939FF', '#2626FF', '#1313FF', '#0000FF', '#1313FF', '#2626FF', '#3939FF', '#4C4CFF', '#5F5FFF', '#7272FF', '#8585FF'],
                alive : ['#000000']
            }

        ]

    };


    @ViewChild("canvas") htmlCanvas;

    canvas: any;

    listLife: ListLife;
    //</editor-fold>



    //<editor-fold desc="Saving">

    saveConfiguration(){
        let name: string = '';
        let description: string = '';
        let showNotOwnerPopup: boolean = false;
        if(this.isEditMode){
            if(this.isOwner()){
                name = this.name;
                description = this.description;
            }else{
                showNotOwnerPopup = true;
            }
        }
        if(showNotOwnerPopup){
            this.modal.confirm()
                .title("Info")
                .message("You are not an owner of current configuration. Do you want to create your own?")
                .open()
                .then(dialog => dialog.result)
                .then(result => {
                    this.openSaveConfigurationDialog(name, description)
                })
        }else{
            return this.openSaveConfigurationDialog(name, description, this.id)
        }
    }

    canDelete(){
        return localStorage.getItem('userId') == this.authorId
    }

    delete(){
        this.modal.confirm()
            .title("Confirmation")
            .message("Are you sure you want to delete this configuration?")
            .open()
            .then((dialog) => dialog.result)
            .then((result) =>{
                if(result){
                    this.golConfigurationService.deleteMessage(this.id).then(() => {
                        this.onConfigurationDeleted.emit();
                        this.modal.alert().size('sm')
                            .title("Info")
                            .message("Configuration has been deleted.")
                            .open();
                    });
                }
            })


    }

    openSaveConfigurationDialog(name: string, description: string, id?: string){
        let isEditMode = this.isEditMode && this.isOwner();
        this.modal.open(SaveConfigurationComponent, overlayConfigFactory({ state: this.listLife.actualState, name: name, description: description, isEditMode: isEditMode, id: id}, BSModalContext))
            .then((dialog: any) => dialog.result)
            .then(result => {
                if(result){
                    this.name = result.name;
                    this.description = result.description;
                    if(!this.isOwner() && this.isEditMode || !this.isOwner() && !this.id){
                        this.onConfigurationCreated.emit(<ConfigurationListItemModel>{
                            id: result.id,
                            name: this.name,
                            description: this.description,
                            author: result.authorName,
                            authorId: result.authorId
                        });
                    }else{
                        this.isEditMode=true;
                    }
                }
            });
    }


    //</editor-fold>

    constructor(public golConfigurationService: GOLConfigurationService,public modal: Modal, private route: ActivatedRoute){}

    ngOnInit(){
        try {
            this.initialize();
            if(!this.id){
                this.route.params.subscribe(params => {
                    this.id = params['id'];
                    if(this.id){
                        this.loadInitialState();
                    }else{
                        this.clearWorld();
                        console.log("prepared");
                        this.prepare();
                    }
                });
            }

            //this.loadConfig();      // Load config from URL (autoplay, colors, zoom, ...)
            //this.loadState();       // Load state from URL
        } catch (e) {
            alert("Error: "+e);
        }
    }

    initialize(){
        if(!this.canvas){
            this.canvas = this.htmlCanvas.nativeElement;
            this.canvas.onselectstart = function(e){e.preventDefault();return false;};
            this.context = this.canvas.getContext("2d");
            this.cellSize = this.zoom.schemes[this.zoom.current].cellSize;
            this.rowsCount = this.zoom.schemes[this.zoom.current].rows;
            this.columnsCount = this.zoom.schemes[this.zoom.current].columns;
            this.cellSpace = 1;
        }
    }

    ngOnChanges(){
        this.initialize();
        this.isRunning = false;
        if(this.id){
            this.isLoaded = false;
            this.loadInitialState();
        }else{
            this.isLoaded = true;
            this.listLife = new ListLife();   // Reset/init algorithm
            this.prepare();
        }
    }

    isOwner() {
        return localStorage.getItem('userId') == this.authorId;
    }

    loadInitialState(){
        this.listLife = new ListLife();
        this.isEditMode = true;
        this.golConfigurationService.getConfiguration(this.id).then(
            result =>{
                this.loadState(JSON.parse(result.obj.state));
                this.name = result.obj.name;
                this.description = result.obj.description;
                this.authorId = result.obj.user;
                console.log(result);
                this.prepare();
                this.isLoaded = true;
            });
    }

    loadState(state: number[][]){
        let i, j, y;
        for (i = 0; i < state.length; i++) {
            for (j = 1; j < state[i].length; j++) {
                this.listLife.addCell(state[i][j], state[i][0],this.listLife.actualState);
            }
        }
    }

    private lastX: number;
    private lastY: number;
    private mouseDown: boolean;

    onCanvasMouseDown(event: any) {
        let position = this.mousePosition(event);
        this.switchCell(position[0], position[1]);
        this.lastX = position[0];
        this.lastY = position[1];
        this.mouseDown = true;
    }

    onCanvasMouseUp() {
        this.mouseDown = false;
    }

    onCanvasMouseMove(event: any) {
        if (this.mouseDown) {
            var position = this.mousePosition(event);
            if ((position[0] !== this.lastX) || (position[1] !== this.lastY)) {
                this.switchCell(position[0], position[1]);
                this.lastX = position[0];
                this.lastY = position[1];
            }
        }
    }

    isRunning: boolean = false;

    run() {
        this.isRunning = !this.isRunning;
        if (this.isRunning) {
            this.nextStep();
        }
    }

    step() {
        if (!this.isRunning) {
            this.nextStep();
        }
    }

    clearAll() {
        if (this.isRunning) {
            this.clear.schedule = true;
            this.isRunning = false;
        } else {
            this.cleanUp();
        }
    }

    switchTrail(){
        this.trail.current = !this.trail.current;
        if (this.isRunning) {
            this.trail.schedule = true;
        } else {
            this.drawWorld();
        }
    }

    switchGrid() {
        this.grid.current = (this.grid.current + 1) % this.grid.schemes.length;
        if (this.isRunning) {
            this.grid.schedule = true; // Delay redraw
        } else {
            this.drawWorld(); // Force complete redraw
        }
    }

    switchColors() {
        this.colors.current = (this.colors.current + 1) % this.colors.schemes.length;
        if (this.isRunning) {
            this.colors.schedule = true; // Delay redraw
        } else {
            this.drawWorld(); // Force complete redraw
        }
    }




    loadConfig() {
        // var colors, grid, zoom;
        //
        // this.autoplay = this.helpers.getUrlParameter('autoplay') === '1' ? true : this.autoplay;
        // this.trail.current = this.helpers.getUrlParameter('trail') === '1' ? true : this.trail.current;
        //
        // // Initial color config
        // colors = parseInt(this.helpers.getUrlParameter('colors'), 10);
        // if (isNaN(colors) || colors < 1 || colors > GOL.colors.schemes.length) {
        //     colors = 1;
        // }
        //
        // // Initial grid config
        // grid = parseInt(this.helpers.getUrlParameter('grid'), 10);
        // if (isNaN(grid) || grid < 1 || grid > GOL.grid.schemes.length) {
        //     grid = 1;
        // }
        //
        // // Initial zoom config
        // zoom = parseInt(this.helpers.getUrlParameter('zoom'), 10);
        // if (isNaN(zoom) || zoom < 1 || zoom > GOL.zoom.schemes.length) {
        //     zoom = 1;
        // }
        //
        // this.colors.current = colors - 1;
        // this.grid.current = grid - 1;
        // this.zoom.current = zoom - 1;
        //
        // this.rows = this.zoom.schemes[this.zoom.current].rows;
        // this.columns = this.zoom.schemes[this.zoom.current].columns;
    }

    clearWorld() {
        var i, j;

        // Init ages (Canvas reference)
        this.age = [];
        for (i = 0; i < this.columnsCount; i++) {
            this.age[i] = [];
            for (j = 0; j < this.rowsCount; j++) {
                this.age[i][j] = 0; // Dead
            }
        }
    }

    drawWorld() {
        var i, j;

        // Special no grid case
        if (this.grid.schemes[this.grid.current].color === '') {
            this.setNoGridOn();
            this.width = this.height = 0;
        } else {
            this.setNoGridOff();
            this.width = this.height = 1;
        }

        // Dynamic canvas size
        this.width = this.width + (this.cellSpace * this.columnsCount) + (this.cellSize * this.columnsCount);
        this.canvas.setAttribute('width', this.width);

        this.height = this.height + (this.cellSpace * this.rowsCount) + (this.cellSize * this.rowsCount);
        this.canvas.getAttribute('height', this.height);

        // Fill background
        this.context.fillStyle = this.grid.schemes[this.grid.current].color;
        this.context.fillRect(0, 0, this.width, this.height);

        for (i = 0 ; i < this.columnsCount; i++) {
            for (j = 0 ; j < this.rowsCount; j++) {
                if (this.listLife.isAlive(i, j)) {
                    this.drawCell(i, j, true);
                } else {
                    this.drawCell(i, j, false);
                }
            }
        }
    }

    setNoGridOn() {
        this.cellSize = this.zoom.schemes[this.zoom.current].cellSize + 1;
        this.cellSpace = 0;
    }

    setNoGridOff() {
        this.cellSize = this.zoom.schemes[this.zoom.current].cellSize;
        this.cellSpace = 1;
    }

    drawCell (i, j, alive) {

        if (alive) {

            if (this.age[i][j] > -1)
                this.context.fillStyle = this.colors.schemes[this.colors.current].alive[this.age[i][j] % this.colors.schemes[this.colors.current].alive.length];

        } else {
            if (this.trail.current && this.age[i][j] < 0) {
                this.context.fillStyle = this.colors.schemes[this.colors.current].trail[(this.age[i][j] * -1) % this.colors.schemes[this.colors.current].trail.length];
            } else {
                this.context.fillStyle = this.colors.schemes[this.colors.current].dead;
            }
        }

        this.context.fillRect(this.cellSpace + (this.cellSpace * i) + (this.cellSize * i), this.cellSpace + (this.cellSpace * j) + (this.cellSize * j), this.cellSize, this.cellSize);

    };

    switchCell(i, j) {
        if(this.listLife.isAlive(i, j)) {
            this.changeCelltoDead(i, j);
            this.listLife.removeCell(i, j, this.listLife.actualState);
        }else {
            this.changeCelltoAlive(i, j);
            this.listLife.addCell(i, j, this.listLife.actualState);
        }
    };

    keepCellAlive(i, j) {
        if (i >= 0 && i < this.columnsCount && j >=0 && j < this.rowsCount) {
            this.age[i][j]++;
            this.drawCell(i, j, true);
        }
    }

    changeCelltoAlive(i, j) {
        if (i >= 0 && i < this.columnsCount && j >=0 && j < this.rowsCount) {
            this.age[i][j] = 1;
            this.drawCell(i, j, true);
        }
    }

    changeCelltoDead(i, j) {
        if (i >= 0 && i < this.columnsCount && j >=0 && j < this.rowsCount) {
            this.age[i][j] = -this.age[i][j]; // Keep trail
            this.drawCell(i, j, false);
        }
    }

    prepare() {
        this.generation = this.times.algorithm = this.times.gui = 0;
        this.clear.schedule = false;
        this.mouseDown = this.clear.schedule = false;

        this.generation = 0;
        this.liveCells = 0;
        this.stepTime = '';

        this.clearWorld(); // Reset GUI
        this.drawWorld(); // Draw State

        if (this.autoplay) { // Next Flow
            this.autoplay = false;
            this.run();
        }


    }

    cleanUp() {
        this.listLife.reset(); // Reset/init algorithm
        this.prepare();
    }

    nextStep() {
        let i, x, y, r, liveCellNumber, guiTime;
        var algorithmTime;

        // Algorithm run

        algorithmTime = +(new Date());

        this.liveCells = this.listLife.nextGeneration();

        algorithmTime = +new Date() - algorithmTime;


        // Canvas run

        guiTime = +new Date();

        for (i = 0; i < this.listLife.redrawList.length; i++) {
            x = this.listLife.redrawList[i][0];
            y = this.listLife.redrawList[i][1];

            if (this.listLife.redrawList[i][2] === 1) {
                this.changeCelltoAlive(x, y);
            } else if (this.listLife.redrawList[i][2] === 2) {
                this.keepCellAlive(x, y);
            } else {
                this.changeCelltoDead(x, y);
            }
        }

        guiTime = +new Date() - guiTime;

        // Pos-run updates

        // Clear Trail
        if (this.trail.schedule) {
            this.trail.schedule = false;
            this.drawWorld();
        }

        // Change Grid
        if (this.grid.schedule) {
            this.grid.schedule = false;
            this.drawWorld();
        }

        // Change Colors
        if (this.colors.schedule) {
            this.colors.schedule = false;
            this.drawWorld();
        }

        // Running Information
        this.generation++;

        r = 1.0/this.generation;
        this.times.algorithm = (this.times.algorithm * (1 - r)) + (algorithmTime * r);
        this.times.gui = (this.times.gui * (1 - r)) + (guiTime * r);
        this.stepTime = algorithmTime + ' / '+guiTime+' ('+Math.round(this.times.algorithm) + ' / '+Math.round(this.times.gui)+')';

        // Flow Control
        if (this.isRunning) {
            var that = this;
            setTimeout(() => that.nextStep(), this.waitTime);
        } else {
            if (this.clear.schedule) {
                this.cleanUp();
            }
        }
    }



    mousePosition(e) {
        // http://www.malleus.de/FAQ/getImgMousePos.html
        // http://www.quirksmode.org/js/events_properties.html#position
        var event, x, y, domObject, posx = 0, posy = 0, top = 0, left = 0, cellSize = this.zoom.schemes[this.zoom.current].cellSize + 1;

        event = e;
        if (!event) {
            event = window.event;
        }

        if (event.pageX || event.pageY) 	{
            posx = event.pageX;
            posy = event.pageY;
        } else if (event.clientX || event.clientY) 	{
            posx = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }

        domObject = event.target || event.srcElement;

        while ( domObject.offsetParent ) {
            left += domObject.offsetLeft;
            top += domObject.offsetTop;
            domObject = domObject.offsetParent;
        }

        domObject.pageTop = top;
        domObject.pageLeft = left;

        x = Math.ceil(((posx - domObject.pageLeft)/cellSize) - 1);
        y = Math.ceil(((posy - domObject.pageTop)/cellSize) - 1);

        return [x, y];
    }
}

interface Zoom{
    current : number,
    schedule : boolean,

    schemes : ZoomSchema[]
}

interface ZoomSchema{
    columns: number;
    rows: number;
    cellSize: number;
}

interface ClearState{
    schedule: boolean
}

interface ExecutionTimes{
    algorithm : number,
    gui : number
}

interface TrailState {
    current: boolean,
    schedule : boolean
};

interface GridStyles  {
    current : number,
    schemes : GridStyleScheme[],
    schedule: boolean;
};

interface GridStyleScheme{
    color: string;
}

interface CellColors  {
    current : number;
    schedule :  boolean;

    schemes :CellColorsScheme[]

};

interface CellColorsScheme{
    dead: string,
    trail: string[],
    alive: string[]
}