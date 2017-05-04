/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from './game-of-life.component';
import * as import3 from '../../../node_modules/angular2-cool-loading-indicator/index.ngfactory';
import * as import4 from 'angular2-cool-loading-indicator/index';
import * as import5 from 'angular2-cool-http/src/cool-http.service';
import * as import6 from 'angular2-modal/plugins/bootstrap/modal';
import * as import7 from 'angular2-modal/esm/overlay/overlay.service';
import * as import8 from './gol-configuration.service';
import * as import9 from '@angular/router';
import * as import10 from '@angular/material';
const styles_GameOfLifeComponent:any[] = ['.my-loading[_ngcontent-%COMP%] {\n            position: fixed;\n            top: 0;\n            left: 0;\n\n            width: 100%;\n            height: 100%;\n\n            text-align: center;\n        }\n\n        .my-loading[_ngcontent-%COMP%]   .dimmer[_ngcontent-%COMP%] {\n            position: absolute;\n\n            top: 0;\n            left: 0;\n\n            background-color: #000;\n            opacity: 0.5;\n\n            width: 100%;\n            height: 100%;\n        }\n\n        .my-loading[_ngcontent-%COMP%]   .loading-bg[_ngcontent-%COMP%] {\n            position: absolute;\n            display: inline-block;\n\n            top: 50%;\n            transform: translateY(-50%);\n\n            padding: 20px;\n\n            background-color: #fff;\n            border-radius: 15px;\n            height: 50px;\n            width: 50px;\n            text-align: center;\n        }\n        \n        .disabled[_ngcontent-%COMP%] {\n            pointer-events: none;\n            cursor: not-allowed;\n        }'];
export const RenderType_GameOfLifeComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 0,
  styles: styles_GameOfLifeComponent,
  data: {}
}
);
function View_GameOfLifeComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'p',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    ))
  ]
  ,(null as any),(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.description;
    ck(v,1,0,currVal_0);
  });
}
function View_GameOfLifeComponent_2(l:any):import0.ɵViewDefinition {
    return import0.ɵvid(0,[(l()(),import0.ɵeld(0,(null as any),(null as any),0,'input',[
      [
        'class',
        'btn btn-default'
      ]
      ,
      [
        'title',
        'Key: C'
      ]
      ,
      [
        'type',
        'button'
      ]
      ,
      [
        'value',
        'Clear'
      ]

    ]
      ,(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.clearAll()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
  },(null as any),(null as any)))],(null as any),(null as any));
}
function View_GameOfLifeComponent_3(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'div',[[
        'class',
        'btn btn-primary'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.delete()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[' Delete']))
  ]
  ,(null as any),(null as any));
}
export function View_GameOfLifeComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    import0.ɵqud(201326592,1,{htmlCanvas: 0}),
      (l()(),import0.ɵeld(0,(null as any),(null as any),121,'div',[[
        'id',
        'wrapper'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h4',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_GameOfLifeComponent_1)),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),98,'fieldset',([] as any[]),[[
        8,
        'disabled',
        0
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵeld(0,[
      [
        1,
        0
      ]
      ,
      [
        'canvas',
        1
      ]

    ]
    ,(null as any),2,'canvas',[
      [
        'height',
        '433'
      ]
      ,
      [
        'width',
        '901'
      ]

    ]
    ,(null as any),[
      [
        (null as any),
        'mousedown'
      ]
      ,
      [
        (null as any),
        'mouseup'
      ]
      ,
      [
        (null as any),
        'mouseleave'
      ]
      ,
      [
        (null as any),
        'mousemove'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      var co:import2.GameOfLifeComponent = v.component;
      if (('mousedown' === en)) {
        const pd_0:any = ((<any>co.onCanvasMouseDown($event)) !== false);
        ad = (pd_0 && ad);
      }
      if (('mouseup' === en)) {
        const pd_1:any = ((<any>co.onCanvasMouseUp()) !== false);
        ad = (pd_1 && ad);
      }
      if (('mouseleave' === en)) {
        const pd_2:any = ((<any>co.onCanvasMouseUp()) !== false);
        ad = (pd_2 && ad);
      }
      if (('mousemove' === en)) {
        const pd_3:any = ((<any>co.onCanvasMouseMove($event)) !== false);
        ad = (pd_3 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import1.NgClass,[
      import0.IterableDiffers,
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngClass: [
        0,
        'ngClass'
      ]
    },(null as any)),
    import0.ɵpod(['disabled']),
    (l()(),import0.ɵted((null as any),['\n\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),25,'div',[[
        'class',
        'box'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'div',[[
        'class',
        'subtitle'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Running Information'])),
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),19,'p',[[
        'class',
        'info'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'abbr',[[
        'title',
        'Current Generation'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Generation'])),
    (l()(),import0.ɵted((null as any),[': '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),[' |\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'abbr',[[
        'title',
        'Number of live cells'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Live cells'])),
    (l()(),import0.ɵted((null as any),[': '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),[' |\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'abbr',[[
        'title',
        'Execution times: Algorithm / Canvas (Algorithm / Canvas Averages)'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Step time'])),
    (l()(),import0.ɵted((null as any),[': '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),[' ms '])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),22,'div',[[
        'class',
        'panel panel-default'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'panel-heading'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h3',[[
        'class',
        'panel-title'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Controls'])),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),13,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),10,'div',[
      [
        'aria-label',
        '...'
      ]
      ,
      [
        'class',
        'btn-group'
      ]
      ,
      [
        'role',
        'group'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),0,'input',[
      [
        'class',
        'btn btn-default'
      ]
      ,
      [
        'title',
        'Key: R'
      ]
      ,
      [
        'type',
        'button'
      ]

    ]
      ,[[
        8,
        'value',
        0
      ]
      ],[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import2.GameOfLifeComponent = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.run()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),0,'input',[
      [
        'class',
        'btn btn-default'
      ]
      ,
      [
        'title',
        'Key: S'
      ]
      ,
      [
        'type',
        'button'
      ]
      ,
      [
        'value',
        'Step'
      ]

    ]
      ,(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import2.GameOfLifeComponent = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.step()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),0,'input',[
      [
        'class',
        'btn btn-default'
      ]
      ,
      [
        'title',
        'Key: S'
      ]
      ,
      [
        'type',
        'button'
      ]
      ,
      [
        'value',
        'To Initial State'
      ]

    ]
      ,(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import2.GameOfLifeComponent = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.loadInitialState()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                    '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_GameOfLifeComponent_2)),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),19,'div',[[
        'class',
        'panel panel-default'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'panel-heading'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h3',[[
        'class',
        'panel-title'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Layout'])),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),10,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),7,'div',[
      [
        'aria-label',
        '...'
      ]
      ,
      [
        'class',
        'btn-group'
      ]
      ,
      [
        'role',
        'group'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),0,'input',[
      [
        'class',
        'btn btn-default'
      ]
      ,
      [
        'type',
        'button'
      ]
      ,
      [
        'value',
        'Trail'
      ]

    ]
      ,(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import2.GameOfLifeComponent = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.switchTrail()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),0,'input',[
      [
        'class',
        'btn btn-default'
      ]
      ,
      [
        'id',
        'buttonGrid'
      ]
      ,
      [
        'type',
        'button'
      ]
      ,
      [
        'value',
        'Grid'
      ]

    ]
      ,(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import2.GameOfLifeComponent = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.switchGrid()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),0,'input',[
      [
        'class',
        'btn btn-default'
      ]
      ,
      [
        'id',
        'buttonColors'
      ]
      ,
      [
        'type',
        'button'
      ]
      ,
      [
        'value',
        'Colors'
      ]

    ]
      ,(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import2.GameOfLifeComponent = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.switchColors()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),19,'div',[[
        'class',
        'panel panel-default'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'panel-heading'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h3',[[
        'class',
        'panel-title'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Management'])),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),10,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),7,'div',[
      [
        'aria-label',
        '...'
      ]
      ,
      [
        'class',
        'btn-group'
      ]
      ,
      [
        'role',
        'group'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'div',[[
        'class',
        'btn btn-primary'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import2.GameOfLifeComponent = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.saveConfiguration()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n                    '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_GameOfLifeComponent_3)),
    import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n\n\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),12,'cool-loading-indicator',([] as any[]),(null as any),(null as any),(null as any),import3.View_CoolLoadingIndicator_0,import3.RenderType_CoolLoadingIndicator)),
      import0.ɵdid(122880,(null as any),0,import4.CoolLoadingIndicator,[import5.CoolHttp],{indicatorDelay: [
        0,
        'indicatorDelay'
      ]
    },(null as any)),
    (l()(),import0.ɵted(0,['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),0,8,'div',[[
        'class',
        'my-loading'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),0,'div',[[
        'class',
        'dimmer'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),3,'div',[[
        'class',
        'loading-bg'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),0,'img',[[
        'src',
        'https://i1.wp.com/cdnjs.cloudflare.com/ajax/libs/galleriffic/2.0.1/css/loader.gif'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted(0,['\n    '])),
    (l()(),import0.ɵted((null as any),['\n'])),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import2.GameOfLifeComponent = v.component;
    const currVal_1:any = co.isEditMode;
    ck(v,7,0,currVal_1);
    const currVal_3:any = ck(v,13,0,!co.isLoaded);
    ck(v,12,0,currVal_3);
    const currVal_8:any = co.isOwner();
    ck(v,61,0,currVal_8);
    const currVal_10:any = co.canDelete();
    ck(v,103,0,currVal_10);
    const currVal_11:any = 0;
    ck(v,110,0,currVal_11);
  },(ck,v) => {
    var co:import2.GameOfLifeComponent = v.component;
    const currVal_0:any = (co.isEditMode? co.name: 'New Configuration');
    ck(v,4,0,currVal_0);
    const currVal_2:boolean = !co.isLoaded;
    ck(v,9,0,currVal_2);
    const currVal_4:any = co.generation;
    ck(v,26,0,currVal_4);
    const currVal_5:any = co.liveCells;
    ck(v,32,0,currVal_5);
    const currVal_6:any = co.stepTime;
    ck(v,38,0,currVal_6);
    const currVal_7:any = (!co.isRunning? 'Run': 'Stop');
    ck(v,54,0,currVal_7);
    const currVal_9:any = ((co.isOwner() && co.isEditMode)? 'Edit': 'Save');
    ck(v,100,0,currVal_9);
  });
}
function View_GameOfLifeComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),7,'app-configuration',([] as any[]),(null as any),(null as any),(null as any),View_GameOfLifeComponent_0,RenderType_GameOfLifeComponent)),
    import0.ɵprd(256,(null as any),import6.Modal,import6.Modal,[import7.Overlay]),
    import0.ɵdid(319488,(null as any),0,import2.GameOfLifeComponent,[
      import8.GOLConfigurationService,
      import6.Modal,
      import9.ActivatedRoute
    ]
    ,(null as any),(null as any)),
      import0.ɵprd(2560,(null as any),import10.OverlayContainer,import10.ɵa,[[
        3,
        import10.OverlayContainer
      ]
    ]),
    import0.ɵprd(2560,(null as any),import10.ScrollDispatcher,import10.ɵc,[
      [
        3,
        import10.ScrollDispatcher
      ]
      ,
      import0.NgZone
    ]
    ),
    import0.ɵprd(2560,(null as any),import10.ɵh,import10.ɵi,[
      [
        3,
        import10.ɵh
      ]
      ,
      import10.ScrollDispatcher
    ]
    ),
    import0.ɵprd(2304,(null as any),import10.ɵk,import10.ɵk,[import10.ɵh]),
    import0.ɵprd(2304,(null as any),import10.Overlay,import10.Overlay,[
      import10.OverlayContainer,
      import0.ComponentFactoryResolver,
      import10.ɵk,
      import0.ApplicationRef,
      import0.Injector,
      import0.NgZone
    ]
    )
  ]
  ,(ck,v) => {
    ck(v,2,0);
  },(null as any));
}
export const GameOfLifeComponentNgFactory:import0.ComponentFactory<import2.GameOfLifeComponent> = import0.ɵccf('app-configuration',import2.GameOfLifeComponent,View_GameOfLifeComponent_Host_0,{id: 'id'},{
  onConfigurationCreated: 'onConfigurationCreated',
  onConfigurationDeleted: 'onConfigurationDeleted'
}
,([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvdi5sZWR5YWV2L0RvY3VtZW50cy9Qcm9qZWN0cy9DZWxsdWxhckF1dG9tYXRvbi1NRUFOLS9hc3NldHMvYXBwL2dhbWVPZkxpZmUvZ2FtZS1vZi1saWZlLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Vc2Vycy92LmxlZHlhZXYvRG9jdW1lbnRzL1Byb2plY3RzL0NlbGx1bGFyQXV0b21hdG9uLU1FQU4tL2Fzc2V0cy9hcHAvZ2FtZU9mTGlmZS9nYW1lLW9mLWxpZmUuY29tcG9uZW50LnRzIiwibmc6Ly8vQzovVXNlcnMvdi5sZWR5YWV2L0RvY3VtZW50cy9Qcm9qZWN0cy9DZWxsdWxhckF1dG9tYXRvbi1NRUFOLS9hc3NldHMvYXBwL2dhbWVPZkxpZmUvZ2FtZS1vZi1saWZlLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvdi5sZWR5YWV2L0RvY3VtZW50cy9Qcm9qZWN0cy9DZWxsdWxhckF1dG9tYXRvbi1NRUFOLS9hc3NldHMvYXBwL2dhbWVPZkxpZmUvZ2FtZS1vZi1saWZlLmNvbXBvbmVudC50cy5HYW1lT2ZMaWZlQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdiBpZD1cIndyYXBwZXJcIj5cclxuICAgIDxoND57e2lzRWRpdE1vZGU/IG5hbWU6IFwiTmV3IENvbmZpZ3VyYXRpb25cIn19PC9oND5cclxuICAgIDxwICpuZ0lmPVwiaXNFZGl0TW9kZVwiPnt7ZGVzY3JpcHRpb259fTwvcD5cclxuICAgIDxmaWVsZHNldCBbZGlzYWJsZWRdPVwiIWlzTG9hZGVkXCI+XHJcbiAgICAgICAgPGNhbnZhcyBbbmdDbGFzc109XCJ7ZGlzYWJsZWQ6ICFpc0xvYWRlZH1cIiAobW91c2Vkb3duKT1cIm9uQ2FudmFzTW91c2VEb3duKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgKG1vdXNldXApPVwib25DYW52YXNNb3VzZVVwKClcIlxyXG4gICAgICAgICAgICAgICAgKG1vdXNlbGVhdmUpPVwib25DYW52YXNNb3VzZVVwKClcIlxyXG4gICAgICAgICAgICAgICAgKG1vdXNlbW92ZSk9XCJvbkNhbnZhc01vdXNlTW92ZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICNjYW52YXMgd2lkdGg9XCI5MDFcIiBoZWlnaHQ9XCI0MzNcIj48L2NhbnZhcz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VidGl0bGVcIj5SdW5uaW5nIEluZm9ybWF0aW9uPC9kaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPGFiYnIgdGl0bGU9XCJDdXJyZW50IEdlbmVyYXRpb25cIj5HZW5lcmF0aW9uPC9hYmJyPjogPHNwYW4+e3tnZW5lcmF0aW9ufX08L3NwYW4+IHxcclxuICAgICAgICAgICAgICAgIDxhYmJyIHRpdGxlPVwiTnVtYmVyIG9mIGxpdmUgY2VsbHNcIj5MaXZlIGNlbGxzPC9hYmJyPjogPHNwYW4gPnt7bGl2ZUNlbGxzfX08L3NwYW4+IHxcclxuICAgICAgICAgICAgICAgIDxhYmJyIHRpdGxlPVwiRXhlY3V0aW9uIHRpbWVzOiBBbGdvcml0aG0gLyBDYW52YXMgKEFsZ29yaXRobSAvIENhbnZhcyBBdmVyYWdlcylcIj5TdGVwIHRpbWU8L2FiYnI+OiA8c3Bhbj57e3N0ZXBUaW1lfX08L3NwYW4+IG1zIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInBhbmVsLXRpdGxlXCI+Q29udHJvbHM8L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiLi4uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cInJ1bigpXCIgdHlwZT1cImJ1dHRvblwiIFt2YWx1ZV09XCIhaXNSdW5uaW5nPydSdW4nOidTdG9wJ1wiIHRpdGxlPVwiS2V5OiBSXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJzdGVwKClcIiB2YWx1ZT1cIlN0ZXBcIiB0aXRsZT1cIktleTogU1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwibG9hZEluaXRpYWxTdGF0ZSgpXCIgdmFsdWU9XCJUbyBJbml0aWFsIFN0YXRlXCIgdGl0bGU9XCJLZXk6IFNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiAqbmdJZj1cImlzT3duZXIoKVwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiY2xlYXJBbGwoKVwiICB2YWx1ZT1cIkNsZWFyXCIgdGl0bGU9XCJLZXk6IENcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInBhbmVsLXRpdGxlXCI+TGF5b3V0PC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIi4uLlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiICAoY2xpY2spPVwic3dpdGNoVHJhaWwoKVwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIlRyYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgIChjbGljayk9XCJzd2l0Y2hHcmlkKClcIiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJidXR0b25HcmlkXCIgdmFsdWU9XCJHcmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgIChjbGljayk9XCJzd2l0Y2hDb2xvcnMoKVwiIHR5cGU9XCJidXR0b25cIiBpZD1cImJ1dHRvbkNvbG9yc1wiIHZhbHVlPVwiQ29sb3JzXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJwYW5lbC10aXRsZVwiPk1hbmFnZW1lbnQ8L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiLi4uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAoY2xpY2spPVwic2F2ZUNvbmZpZ3VyYXRpb24oKVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+e3tpc093bmVyKCkmJmlzRWRpdE1vZGU/J0VkaXQnOidTYXZlJ319PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImNhbkRlbGV0ZSgpXCIgKGNsaWNrKT1cImRlbGV0ZSgpXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj4gRGVsZXRlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2ZpZWxkc2V0PlxyXG5cclxuXHJcbiAgICA8Y29vbC1sb2FkaW5nLWluZGljYXRvciBbaW5kaWNhdG9yRGVsYXldPVwiMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJteS1sb2FkaW5nXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaW1tZXJcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nLWJnXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaTEud3AuY29tL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9nYWxsZXJpZmZpYy8yLjAuMS9jc3MvbG9hZGVyLmdpZlwiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Nvb2wtbG9hZGluZy1pbmRpY2F0b3I+XHJcbjwvZGl2PlxyXG4iLCI8YXBwLWNvbmZpZ3VyYXRpb24+PC9hcHAtY29uZmlndXJhdGlvbj4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDRUk7SUFBc0I7TUFBQTtNQUFBO0lBQUE7SUFBQTs7OztJQUFBO0lBQUE7Ozs7MkJBeUJOO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtN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