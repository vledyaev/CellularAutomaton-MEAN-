
import {Component, OnInit, ViewChild} from "@angular/core";
import {ListLife} from "./listLife";

@Component({
    selector: 'app-automaton',
    templateUrl: './game-of-life.component.html'
})
export class GameOfLifeComponent implements  OnInit{
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

    // DOM elements
    element : {
        generation : null,
        steptime : null,
        livecells : null,
        hint : null,
        messages : {
            layout : null
        }
    };

    // Initial state
    initialState : '[{"39":[110]},{"40":[112]},{"41":[109,110,113,114,115]}]';

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

    ngOnInit(){
        try {
            this.canvas = this.htmlCanvas.nativeElement;
            this.canvas.onselectstart = function(e){e.preventDefault();return false;};
            this.context = this.canvas.getContext("2d");
            this.cellSize = this.zoom.schemes[this.zoom.current].cellSize;
            this.rowsCount = this.zoom.schemes[this.zoom.current].rows;
            this.columnsCount = this.zoom.schemes[this.zoom.current].columns;
            this.cellSpace = 1;
            this.listLife = new ListLife();   // Reset/init algorithm
            //this.loadConfig();      // Load config from URL (autoplay, colors, zoom, ...)
            //this.loadState();       // Load state from URL
            this.clearWorld();
            //this.canvas.init();     // Init canvas GUI
            //this.registerEvents();  // Register event handlers

            this.prepare();
        } catch (e) {
            alert("Error: "+e);
        }
    }

    private lastX: number;
    private lastY: number;
    private mouseDown: boolean;

    onCanvasMouseDown(event: any) {
        console.log(event);
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

    loadState() {

        // var state, i, j, y, s = this.helpers.getUrlParameter('s');
        //
        // if ( s === 'random') {
        //     this.randomState();
        // } else {
        //     if (s == undefined) {
        //         s = this.initialState;
        //     }
        //
        //     state = jsonParse(decodeURI(s));
        //
        //     for (i = 0; i < state.length; i++) {
        //         for (y in state[i]) {
        //             for (j = 0 ; j < state[i][y].length ; j++) {
        //                 this.listLife.addCell(state[i][y][j], parseInt(y, 10), this.listLife.actualState);
        //             }
        //         }
        //     }
        // }
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

    context : CanvasRenderingContext2D;
    width : number = null;
    height : number = null;
    age : number[][] = null;
    cellSize : number = null;
    cellSpace : number = null;

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

// (function () {
//
//     var GOL = {
//
//
//
//         /**
//          * Load config from URL
//          */
//
//
//
//         /**
//          * Load world state from URL parameter
//          */
//
//
//
//         /**
//          * Create a random pattern
//          */
//         // randomState : function() {
//         //     var i, liveCells = (this.rows * this.columns) * 0.12;
//         //
//         //     for (i = 0; i < liveCells; i++) {
//         //         this.listLife.addCell(this.helpers.random(0, this.columns - 1), this.helpers.random(0, this.rows - 1), this.listLife.actualState);
//         //     }
//         //
//         //     this.listLife.nextGeneration();
//         // },
//
//         /**
//          * keepDOMElements
//          * Save DOM references for this session (one time execution)
//          */
//         keepDOMElements : function() {
//             this.element.generation = document.getElementById('generation');
//             this.element.steptime = document.getElementById('steptime');
//             this.element.livecells = document.getElementById('livecells');
//             this.element.messages.layout = document.getElementById('layoutMessages');
//             this.element.hint = document.getElementById('hint');
//         },
//
//
//         /**
//          * registerEvents
//          * Register event handlers for this session (one time execution)
//          */
//         registerEvents : function() {
//
//             // Keyboard Events
//             this.helpers.registerEvent(document.body, 'keyup', this.handlers.keyboard, false);
//
//             // Controls
//             this.helpers.registerEvent(document.getElementById('buttonRun'), 'click', this.handlers.buttons.run, false);
//             this.helpers.registerEvent(document.getElementById('buttonStep'), 'click', this.handlers.buttons.step, false);
//             this.helpers.registerEvent(document.getElementById('buttonClear'), 'click', this.handlers.buttons.clear, false);
//             this.helpers.registerEvent(document.getElementById('buttonExport'), 'click', this.handlers.buttons.export_, false);
//
//             // Layout
//             this.helpers.registerEvent(document.getElementById('buttonTrail'), 'click', this.handlers.buttons.trail, false);
//             this.helpers.registerEvent(document.getElementById('buttonGrid'), 'click', this.handlers.buttons.grid, false);
//             this.helpers.registerEvent(document.getElementById('buttonColors'), 'click', this.handlers.buttons.colors, false);
//         },
//
//
//
//         /** ****************************************************************************************************************************
//          * Event Handerls
//          */
//         handlers : {
//
//             mouseDown : false,
//             lastX : 0,
//             lastY : 0,
//
//
//             /**
//              *
//              */
//             canvasMouseDown : function(event) {
//                 var position = GOL.helpers.mousePosition(event);
//                 GOL.canvas.switchCell(position[0], position[1]);
//                 GOL.handlers.lastX = position[0];
//                 GOL.handlers.lastY = position[1];
//                 GOL.handlers.mouseDown = true;
//             },
//
//
//             /**
//              *
//              */
//             canvasMouseUp : function() {
//                 GOL.handlers.mouseDown = false;
//             },
//
//
//             /**
//              *
//              */
//             canvasMouseMove : function(event) {
//                 if (GOL.handlers.mouseDown) {
//                     var position = GOL.helpers.mousePosition(event);
//                     if ((position[0] !== GOL.handlers.lastX) || (position[1] !== GOL.handlers.lastY)) {
//                         GOL.canvas.switchCell(position[0], position[1]);
//                         GOL.handlers.lastX = position[0];
//                         GOL.handlers.lastY = position[1];
//                     }
//                 }
//             },
//
//
//             /**
//              *
//              */
//             keyboard : function(e) {
//                 var event = e;
//                 if (!event) {
//                     event = window.event;
//                 }
//
//                 if (event.keyCode === 67) { // Key: C
//                     GOL.handlers.buttons.clear();
//                 } else if (event.keyCode === 82 ) { // Key: R
//                     GOL.handlers.buttons.run();
//                 } else if (event.keyCode === 83 ) { // Key: S
//                     GOL.handlers.buttons.step();
//                 }
//             },
//
//
//             buttons : {
//
//                 /**
//                  * Button Handler - Run
//                  */
//                 run : function() {
//                     GOL.element.hint.style.display = 'none';
//
//                     GOL.running = !GOL.running;
//                     if (GOL.running) {
//                         GOL.nextStep();
//                         document.getElementById('buttonRun').value = 'Stop';
//                     } else {
//                         document.getElementById('buttonRun').value = 'Run';
//                     }
//                 },
//
//
//                 /**
//                  * Button Handler - Next Step - One Step only
//                  */
//                 step : function() {
//                     if (!GOL.running) {
//                         GOL.nextStep();
//                     }
//                 },
//
//
//                 /**
//                  * Button Handler - Clear World
//                  */
//                 clear : function() {
//                     if (GOL.running) {
//                         GOL.clear.schedule = true;
//                         GOL.running = false;
//                         document.getElementById('buttonRun').value = 'Run';
//                     } else {
//                         GOL.cleanUp();
//                     }
//                 },
//
//
//                 /**
//                  * Button Handler - Remove/Add Trail
//                  */
//                 trail : function() {
//                     GOL.element.messages.layout.innerHTML = GOL.trail.current ? 'Trail is Off' : 'Trail is On';
//                     GOL.trail.current = !GOL.trail.current;
//                     if (GOL.running) {
//                         GOL.trail.schedule = true;
//                     } else {
//                         GOL.canvas.drawWorld();
//                     }
//                 },
//
//
//                 /**
//                  *
//                  */
//                 colors : function() {
//                     GOL.colors.current = (GOL.colors.current + 1) % GOL.colors.schemes.length;
//                     GOL.element.messages.layout.innerHTML = 'Color Scheme #' + (GOL.colors.current + 1);
//                     if (GOL.running) {
//                         GOL.colors.schedule = true; // Delay redraw
//                     } else {
//                         GOL.canvas.drawWorld(); // Force complete redraw
//                     }
//                 },
//
//
//                 /**
//                  *
//                  */
//                 grid : function() {
//                     GOL.grid.current = (GOL.grid.current + 1) % GOL.grid.schemes.length;
//                     GOL.element.messages.layout.innerHTML = 'Grid Scheme #' + (GOL.grid.current + 1);
//                     if (GOL.running) {
//                         GOL.grid.schedule = true; // Delay redraw
//                     } else {
//                         GOL.canvas.drawWorld(); // Force complete redraw
//                     }
//                 },
//
//
//                 /**
//                  * Button Handler - Export State
//                  */
//                 export_ : function() {
//                     var i, j, url = '', cellState = '', params = '';
//
//                     for (i = 0; i < GOL.listLife.actualState.length; i++) {
//                         cellState += '{"'+GOL.listLife.actualState[i][0]+'":[';
//                         //cellState += '{"one":[';
//                         for (j = 1; j < GOL.listLife.actualState[i].length; j++) {
//                             cellState += GOL.listLife.actualState[i][j]+',';
//                         }
//                         cellState = cellState.substring(0, cellState.length - 1) + ']},';
//                     }
//
//                     cellState = cellState.substring(0, cellState.length - 1) + '';
//
//                     if (cellState.length !== 0) {
//                         url = (window.location.href.indexOf('?') === -1) ? window.location.href : window.location.href.slice(0, window.location.href.indexOf('?'));
//
//                         params = '?autoplay=0' +
//                             '&trail=' + (GOL.trail.current ? '1' : '0') +
//                             '&grid=' + (GOL.grid.current + 1) +
//                             '&colors=' + (GOL.colors.current + 1) +
//                             '&zoom=' + (GOL.zoom.current + 1) +
//                             '&s=['+ cellState +']';
//
//                         document.getElementById('exportUrlLink').href = params;
//                         document.getElementById('exportTinyUrlLink').href = 'http://tinyurl.com/api-create.php?url='+ url + params;
//                         document.getElementById('exportUrl').style.display = 'inline';
//                     }
//                 }
//
//             }
//
//         },
//
//
//         /** ****************************************************************************************************************************
//          *
//          */
//
//
//
//         /** ****************************************************************************************************************************
//          *
//          */
//
//
//
//         /** ****************************************************************************************************************************
//          *
//          */
//         helpers : {
//             urlParameters : null, // Cache
//
//
//             /**
//              * Return a random integer from [min, max]
//              */
//             random : function(min, max) {
//                 return min <= max ? min + Math.round(Math.random() * (max - min)) : null;
//             },
//
//
//             /**
//              * Get URL Parameters
//              */
//             getUrlParameter : function(name) {
//                 if (this.urlParameters === null) { // Cache miss
//                     var hash, hashes, i;
//
//                     this.urlParameters = [];
//                     hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
//
//                     for (i = 0; i < hashes.length; i++) {
//                         hash = hashes[i].split('=');
//                         this.urlParameters.push(hash[0]);
//                         this.urlParameters[hash[0]] = hash[1];
//                     }
//                 }
//
//                 return this.urlParameters[name];
//             },
//
//
//             /**
//              * Register Event
//              */
//             registerEvent : function (element, event, handler, capture) {
//                 if (/msie/i.test(navigator.userAgent)) {
//                     element.attachEvent('on' + event, handler);
//                 } else {
//                     element.addEventListener(event, handler, capture);
//                 }
//             },
//
//
//             /**
//              *
//              */
//             mousePosition : function (e) {
//                 // http://www.malleus.de/FAQ/getImgMousePos.html
//                 // http://www.quirksmode.org/js/events_properties.html#position
//                 var event, x, y, domObject, posx = 0, posy = 0, top = 0, left = 0, cellSize = GOL.zoom.schemes[GOL.zoom.current].cellSize + 1;
//
//                 event = e;
//                 if (!event) {
//                     event = window.event;
//                 }
//
//                 if (event.pageX || event.pageY) 	{
//                     posx = event.pageX;
//                     posy = event.pageY;
//                 } else if (event.clientX || event.clientY) 	{
//                     posx = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
//                     posy = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
//                 }
//
//                 domObject = event.target || event.srcElement;
//
//                 while ( domObject.offsetParent ) {
//                     left += domObject.offsetLeft;
//                     top += domObject.offsetTop;
//                     domObject = domObject.offsetParent;
//                 }
//
//                 domObject.pageTop = top;
//                 domObject.pageLeft = left;
//
//                 x = Math.ceil(((posx - domObject.pageLeft)/cellSize) - 1);
//                 y = Math.ceil(((posy - domObject.pageTop)/cellSize) - 1);
//
//                 return [x, y];
//             }
//         }
//
//     };
//
//
//     /**
//      * Init on 'load' event
//      */
//     GOL.helpers.registerEvent(window, 'load', function () {
//         GOL.init();
//     }, false);
//
// }());