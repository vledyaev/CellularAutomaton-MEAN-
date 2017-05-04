/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from './game-of-life.component.ngfactory';
import * as import2 from 'angular2-modal/plugins/bootstrap/modal';
import * as import3 from 'angular2-modal/esm/overlay/overlay.service';
import * as import4 from './game-of-life.component';
import * as import5 from './gol-configuration.service';
import * as import6 from '@angular/router';
import * as import7 from '@angular/material';
import * as import8 from '@angular/common';
import * as import9 from './configuration-page.component';
import * as import10 from 'ngx-pagination';
import * as import11 from '../../../node_modules/ngx-pagination/dist/ngx-pagination.ngfactory';
const styles_ConfigurationPageComponent:any[] = ['.list-group-item.selected[_ngcontent-%COMP%] {\n            background-color: lightsteelblue;\n        }\n        .close[_ngcontent-%COMP%]{\n            color: #d71802;\n            position: absolute;\n            top:0;\n            right: 0;\n         }\n        .row[_ngcontent-%COMP%]{\n            margin-top: 5px;\n            margin-bottom: 5px;\n        }\n        pagination-controls[_ngcontent-%COMP%]     .ngx-pagination{\n            display: inline-block;\n            text-align: center;\n            width: 100%;\n            padding:0;\n        }'];
export const RenderType_ConfigurationPageComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 0,
  styles: styles_ConfigurationPageComponent,
  data: {}
}
);
function View_ConfigurationPageComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),47,'a',[[
        'class',
        'list-group-item'
      ]
      ],[[
        2,
        'selected',
        (null as any)
      ]
      ],[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.onSelect(v.context.$implicit)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),44,'div',[[
        'class',
        'media'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),41,'div',[[
        'class',
        'media-body media-middle'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),38,'div',[[
        'class',
        'row'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),13,'div',[[
        'class',
        'col-md-9'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'row'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'div',[[
        'class',
        'col-md-12'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '\n                                    ',
      '\n                                '
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n                            '])),
    (l()(),import0.ɵted((null as any),['\n                            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'row'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'div',[[
        'class',
        'col-md-12'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '\n                                    ',
      '\n                                '
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n                            '])),
    (l()(),import0.ɵted((null as any),['\n                        '])),
    (l()(),import0.ɵted((null as any),['\n                        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),20,'div',[[
        'class',
        'col-md-3'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),8,'div',[[
        'class',
        'row'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),5,'div',[[
        'class',
        'col-md-12'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                                    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'div',[[
        'class',
        'pull-right'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '\n                                        ',
      '\n                                    '
    ]
    )),
    import0.ɵppd(2),
    (l()(),import0.ɵted((null as any),['\n                                '])),
    (l()(),import0.ɵted((null as any),['\n                            '])),
    (l()(),import0.ɵted((null as any),['\n                            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),7,'div',[[
        'class',
        'row'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'col-md-12'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                                        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'div',[[
        'class',
        'pull-right'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '\n                                        ',
      '\n                                        '
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n                                '])),
    (l()(),import0.ɵted((null as any),['\n                            '])),
    (l()(),import0.ɵted((null as any),['\n                        '])),
    (l()(),import0.ɵted((null as any),['\n                    '])),
    (l()(),import0.ɵted((null as any),['\n\n                '])),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n        ']))
  ]
  ,(null as any),(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = (v.context.$implicit === co.selectedConfiguration);
    ck(v,0,0,currVal_0);
    const currVal_1:any = v.context.$implicit.name;
    ck(v,13,0,currVal_1);
    const currVal_2:any = v.context.$implicit.description;
    ck(v,19,0,currVal_2);
    const currVal_3:any = import0.ɵunv(v,30,0,ck(v,31,0,import0.ɵnov((<any>v.parent),0),v.context.$implicit.creationDate,'mediumDate'));
    ck(v,30,0,currVal_3);
    const currVal_4:any = v.context.$implicit.author;
    ck(v,40,0,currVal_4);
  });
}
function View_ConfigurationPageComponent_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),7,'app-configuration',[[
        'class',
        'col-md-9'
      ]
    ],(null as any),[
      [
        (null as any),
        'onConfigurationDeleted'
      ]
      ,
      [
        (null as any),
        'onConfigurationCreated'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('onConfigurationDeleted' === en)) {
        const pd_0:any = ((<any>co.onConfigurationDeleted()) !== false);
        ad = (pd_0 && ad);
      }
      if (('onConfigurationCreated' === en)) {
        const pd_1:any = ((<any>co.onConfigurationCreated($event)) !== false);
        ad = (pd_1 && ad);
      }
      return ad;
    },import1.View_GameOfLifeComponent_0,import1.RenderType_GameOfLifeComponent)),
    import0.ɵprd(256,(null as any),import2.Modal,import2.Modal,[import3.Overlay]),
    import0.ɵdid(319488,(null as any),0,import4.GameOfLifeComponent,[
      import5.GOLConfigurationService,
      import2.Modal,
      import6.ActivatedRoute
    ]
      ,{id: [
        0,
        'id'
      ]
    },{
      onConfigurationCreated: 'onConfigurationCreated',
      onConfigurationDeleted: 'onConfigurationDeleted'
    }
    ),
      import0.ɵprd(2560,(null as any),import7.OverlayContainer,import7.ɵa,[[
        3,
        import7.OverlayContainer
      ]
    ]),
    import0.ɵprd(2560,(null as any),import7.ScrollDispatcher,import7.ɵc,[
      [
        3,
        import7.ScrollDispatcher
      ]
      ,
      import0.NgZone
    ]
    ),
    import0.ɵprd(2560,(null as any),import7.ɵh,import7.ɵi,[
      [
        3,
        import7.ɵh
      ]
      ,
      import7.ScrollDispatcher
    ]
    ),
    import0.ɵprd(2304,(null as any),import7.ɵk,import7.ɵk,[import7.ɵh]),
    import0.ɵprd(2304,(null as any),import7.Overlay,import7.Overlay,[
      import7.OverlayContainer,
      import0.ComponentFactoryResolver,
      import7.ɵk,
      import0.ApplicationRef,
      import0.Injector,
      import0.NgZone
    ]
    )
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.selectedConfiguration.id;
    ck(v,2,0,currVal_0);
  },(null as any));
}
export function View_ConfigurationPageComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    import0.ɵpid(0,import8.DatePipe,[import0.LOCALE_ID]),
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'row'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
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
      var co:import9.ConfigurationPageComponent = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.newConfiguration()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['New Configuration'])),
    (l()(),import0.ɵted((null as any),['\n'])),
    (l()(),import0.ɵted((null as any),['\n\n'])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),16,'div',[[
        'class',
        'row'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),10,'div',[[
        'class',
        'col-md-8 col-md-offset-2'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import8.NgClass,[
      import0.IterableDiffers,
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
    ,{
      klass: [
        0,
        'klass'
      ]
      ,
      ngClass: [
        1,
        'ngClass'
      ]

    }
    ,(null as any)),
    import0.ɵpod([
      'col-md-8 col-md-offset-2',
      'col-md-3'
    ]
    ),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),2,(null as any),View_ConfigurationPageComponent_1)),
    import0.ɵdid(401408,(null as any),0,import8.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    import0.ɵpid(0,import10.PaginatePipe,[import10.PaginationService]),
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'pagination-controls',([] as any[]),(null as any),[[
        (null as any),
        'pageChange'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import9.ConfigurationPageComponent = v.component;
      if (('pageChange' === en)) {
        const pd_0:any = ((<any>co.onPageChange($event)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },import11.View_PaginationControlsComponent_0,import11.RenderType_PaginationControlsComponent)),
    import0.ɵdid(24576,(null as any),0,import10.PaginationControlsComponent,([] as any[]),{
      id: [
        0,
        'id'
      ]
      ,
      previousLabel: [
        1,
        'previousLabel'
      ]
      ,
      nextLabel: [
        2,
        'nextLabel'
      ]
      ,
      screenReaderPaginationLabel: [
        3,
        'screenReaderPaginationLabel'
      ]
      ,
      screenReaderPageLabel: [
        4,
        'screenReaderPageLabel'
      ]
      ,
      screenReaderCurrentLabel: [
        5,
        'screenReaderCurrentLabel'
      ]

    }
    ,{pageChange: 'pageChange'}),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_ConfigurationPageComponent_2)),
    import0.ɵdid(8192,(null as any),0,import8.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n'])),
    (l()(),import0.ɵted((null as any),['\n\n']))
  ]
  ,(ck,v) => {
    var co:import9.ConfigurationPageComponent = v.component;
    const currVal_0:any = 'col-md-8 col-md-offset-2';
    const currVal_1:any = ck(v,11,0,!co.selectedConfiguration,co.selectedConfiguration);
    ck(v,10,0,currVal_0,currVal_1);
    const currVal_2:any = import0.ɵunv(v,14,0,import0.ɵnov(v,15).transform(co.configurations,co.config));
    ck(v,14,0,currVal_2);
    const currVal_3:any = co.config.id;
    const currVal_4:any = co.labels.previousLabel;
    const currVal_5:any = co.labels.nextLabel;
    const currVal_6:any = co.labels.screenReaderPaginationLabel;
    const currVal_7:any = co.labels.screenReaderPageLabel;
    const currVal_8:any = co.labels.screenReaderCurrentLabel;
    ck(v,18,0,currVal_3,currVal_4,currVal_5,currVal_6,currVal_7,currVal_8);
    const currVal_9:any = co.selectedConfiguration;
    ck(v,22,0,currVal_9);
  },(null as any));
}
function View_ConfigurationPageComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'modal-content',([] as any[]),(null as any),(null as any),(null as any),View_ConfigurationPageComponent_0,RenderType_ConfigurationPageComponent)),
    import0.ɵdid(57344,(null as any),0,import9.ConfigurationPageComponent,[
      import5.GOLConfigurationService,
      import2.Modal
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const ConfigurationPageComponentNgFactory:import0.ComponentFactory<import9.ConfigurationPageComponent> = import0.ɵccf('modal-content',import9.ConfigurationPageComponent,View_ConfigurationPageComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvdi5sZWR5YWV2L0RvY3VtZW50cy9Qcm9qZWN0cy9DZWxsdWxhckF1dG9tYXRvbi1NRUFOLS9hc3NldHMvYXBwL2dhbWVPZkxpZmUvY29uZmlndXJhdGlvbi1wYWdlLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Vc2Vycy92LmxlZHlhZXYvRG9jdW1lbnRzL1Byb2plY3RzL0NlbGx1bGFyQXV0b21hdG9uLU1FQU4tL2Fzc2V0cy9hcHAvZ2FtZU9mTGlmZS9jb25maWd1cmF0aW9uLXBhZ2UuY29tcG9uZW50LnRzIiwibmc6Ly8vQzovVXNlcnMvdi5sZWR5YWV2L0RvY3VtZW50cy9Qcm9qZWN0cy9DZWxsdWxhckF1dG9tYXRvbi1NRUFOLS9hc3NldHMvYXBwL2dhbWVPZkxpZmUvY29uZmlndXJhdGlvbi1wYWdlLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvdi5sZWR5YWV2L0RvY3VtZW50cy9Qcm9qZWN0cy9DZWxsdWxhckF1dG9tYXRvbi1NRUFOLS9hc3NldHMvYXBwL2dhbWVPZkxpZmUvY29uZmlndXJhdGlvbi1wYWdlLmNvbXBvbmVudC50cy5Db25maWd1cmF0aW9uUGFnZUNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgIDxkaXYgKGNsaWNrKT1cIm5ld0NvbmZpZ3VyYXRpb24oKVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+TmV3IENvbmZpZ3VyYXRpb248L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICA8ZGl2IFtuZ0NsYXNzXT1cInsnY29sLW1kLTggY29sLW1kLW9mZnNldC0yJzogIXNlbGVjdGVkQ29uZmlndXJhdGlvbiwgJ2NvbC1tZC0zJzogc2VsZWN0ZWRDb25maWd1cmF0aW9ufVwiIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XHJcbiAgICAgICAgPGEgKm5nRm9yPVwibGV0IGNvbmZpZ3VyYXRpb24gb2YgY29uZmlndXJhdGlvbnMgfCBwYWdpbmF0ZTogY29uZmlnXCJcclxuICAgICAgICAgICAoY2xpY2spPVwib25TZWxlY3QoY29uZmlndXJhdGlvbilcIlxyXG4gICAgICAgICAgIFtjbGFzcy5zZWxlY3RlZF09XCJjb25maWd1cmF0aW9uID09PSBzZWxlY3RlZENvbmZpZ3VyYXRpb25cIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5IG1lZGlhLW1pZGRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC05XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2NvbmZpZ3VyYXRpb24ubmFtZX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7Y29uZmlndXJhdGlvbi5kZXNjcmlwdGlvbn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7Y29uZmlndXJhdGlvbi5jcmVhdGlvbkRhdGUgfCBkYXRlOiAnbWVkaXVtRGF0ZSd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2NvbmZpZ3VyYXRpb24uYXV0aG9yfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPHBhZ2luYXRpb24tY29udHJvbHMgW2lkXT1cImNvbmZpZy5pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ByZXZpb3VzTGFiZWxdPVwibGFiZWxzLnByZXZpb3VzTGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZXh0TGFiZWxdPVwibGFiZWxzLm5leHRMYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NjcmVlblJlYWRlclBhZ2luYXRpb25MYWJlbF09XCJsYWJlbHMuc2NyZWVuUmVhZGVyUGFnaW5hdGlvbkxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc2NyZWVuUmVhZGVyUGFnZUxhYmVsXT1cImxhYmVscy5zY3JlZW5SZWFkZXJQYWdlTGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzY3JlZW5SZWFkZXJDdXJyZW50TGFiZWxdPVwibGFiZWxzLnNjcmVlblJlYWRlckN1cnJlbnRMYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBhZ2VDaGFuZ2UpPVwib25QYWdlQ2hhbmdlKCRldmVudClcIj48L3BhZ2luYXRpb24tY29udHJvbHM+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxhcHAtY29uZmlndXJhdGlvbiAob25Db25maWd1cmF0aW9uRGVsZXRlZCk9XCJvbkNvbmZpZ3VyYXRpb25EZWxldGVkKClcIiAob25Db25maWd1cmF0aW9uQ3JlYXRlZCk9XCJvbkNvbmZpZ3VyYXRpb25DcmVhdGVkKCRldmVudClcIiBjbGFzcz1cImNvbC1tZC05XCIgKm5nSWY9XCJzZWxlY3RlZENvbmZpZ3VyYXRpb25cIiBbaWRdPVwic2VsZWN0ZWRDb25maWd1cmF0aW9uLmlkXCI+PC9hcHAtY29uZmlndXJhdGlvbj5cclxuPC9kaXY+XHJcblxyXG4iLCI8bW9kYWwtY29udGVudD48L21vZGFsLWNvbnRlbnQ+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNNUTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUNHO1FBQUE7UUFBQTtNQUFBO01BREg7SUFBQTtJQUVzRjtNQUNsRjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQW1CO01BQ2Y7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFxQztNQUNqQztRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQWlCO01BQ2I7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFzQjtNQUNsQjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQWlCO01BQ2I7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF1QjtNQUFBO01BQUE7SUFBQTtJQUFBO0lBRWpCO0lBQ0o7TUFDTjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQWlCO01BQ2I7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF1QjtNQUFBO01BQUE7SUFBQTtJQUFBO0lBRWpCO0lBQ0o7SUFDSjtNQUNOO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBc0I7TUFDbEI7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFpQjtNQUNiO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBdUI7TUFDbkI7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF3QjtNQUFBO01BQUE7SUFBQTtJQUFBO2dCQUFBO0lBRWxCO0lBQ0o7SUFDSjtNQUNOO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBaUI7TUFDYjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXVCO01BQ2Y7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF3QjtNQUFBO01BQUE7SUFBQTtJQUFBO0lBRWxCO0lBQ1I7SUFDSjtJQUNKO0lBQ0o7SUFFSjtJQUNKOzs7O0lBbkNQO0lBRkgsU0FFRyxTQUZIO0lBUStDO0lBQUE7SUFLQTtJQUFBO0lBUUs7SUFBQTtJQU9JO0lBQUE7Ozs7O01BbUI1RDtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO01BQUE7TUFBbUI7UUFBQTtRQUFBO01BQUE7TUFBb0Q7UUFBQTtRQUFBO01BQUE7TUFBdkU7SUFBQTtnQkFBQTtnQkFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7SUFBQTtJQUFBO2tCQUFBO1FBQUE7O01BQUE7SUFBQTtnQkFBQTtNQUFBO1FBQUE7O01BQUE7OztJQUFBO0lBQUE7Z0JBQUE7TUFBQTtRQUFBOztNQUFBOzs7SUFBQTtJQUFBO2dCQUFBO2dCQUFBOzs7Ozs7O0lBQUE7SUFBQTs7OztJQUFnTDtJQUFoTCxTQUFnTCxTQUFoTDs7Ozs7O01BckRKO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBaUI7TUFDYjtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUs7UUFBQTtRQUFBO01BQUE7TUFBTDtJQUFBO0lBQTBEO0lBQXVCO0lBQy9FO01BRU47UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFpQjtNQUNiO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7Z0JBQUs7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUFxSTtJQUN0STtnQkFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBRztJQXNDQztNQUNKO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BTXFCO1FBQUE7UUFBQTtNQUFBO01BTnJCO0lBQUE7Z0JBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO0lBTStFO0lBQzdFO0lBQ047Z0JBQUE7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFvTztJQUNsTzs7OztJQWpEdUc7SUFBcEc7SUFBTCxVQUF5RyxVQUFwRyxTQUFMO0lBQ087SUFBSCxVQUFHLFNBQUg7SUF1Q3FCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUxyQixVQUFxQixVQUNBLFVBQ0EsVUFDQSxVQUNBLFVBQ0EsU0FMckI7SUFROEk7SUFBbEosVUFBa0osU0FBbEo7Ozs7O0lDckRKO2dCQUFBOzs7SUFBQTtLQUFBOzs7SUFBQTs7OyJ9