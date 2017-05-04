/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from './error.component';
import * as import3 from './error.service';
const styles_ErrorComponent:any[] = ['.backdrop[_ngcontent-%COMP%] {\n            background-color: rgba(0,0,0,0.6);\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100vh;\n        }'];
export const RenderType_ErrorComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 0,
  styles: styles_ErrorComponent,
  data: {}
}
);
export function View_ErrorComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'div',[[
        'class',
        'backdrop'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import1.NgStyle,[
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngStyle: [
        0,
        'ngStyle'
      ]
    },(null as any)),
    import0.ɵpod(['display']),
    (l()(),import0.ɵted((null as any),['\n'])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),31,'div',[
      [
        'class',
        'modal'
      ]
      ,
      [
        'role',
        'dialog'
      ]
      ,
      [
        'tabindex',
        '-1'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(139264,(null as any),0,import1.NgStyle,[
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngStyle: [
        0,
        'ngStyle'
      ]
    },(null as any)),
    import0.ɵpod(['display']),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),26,'div',[
      [
        'class',
        'modal-dialog'
      ]
      ,
      [
        'role',
        'document'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),23,'div',[[
        'class',
        'modal-content'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),8,'div',[[
        'class',
        'modal-header'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),2,'button',[
      [
        'aria-label',
        'Close'
      ]
      ,
      [
        'class',
        'close'
      ]
      ,
      [
        'type',
        'button'
      ]

    ]
      ,(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import2.ErrorComponent = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.onErrorHandled()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'span',[[
        'aria-hidden',
        'true'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['×'])),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h4',[[
        'class',
        'modal-title'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'modal-body'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'p',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'modal-footer'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'button',[
      [
        'class',
        'btn btn-default'
      ]
      ,
      [
        'type',
        'button'
      ]

    ]
      ,(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import2.ErrorComponent = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.onErrorHandled()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Close'])),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import2.ErrorComponent = v.component;
    const currVal_0:any = ck(v,2,0,co.display);
    ck(v,1,0,currVal_0);
    const currVal_1:any = ck(v,6,0,co.display);
    ck(v,5,0,currVal_1);
  },(ck,v) => {
    var co:import2.ErrorComponent = v.component;
    const currVal_2:any = ((co.error == null)? (null as any): co.error.title);
    ck(v,19,0,currVal_2);
    const currVal_3:any = ((co.error == null)? (null as any): co.error.message);
    ck(v,25,0,currVal_3);
  });
}
function View_ErrorComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'app-error',([] as any[]),(null as any),(null as any),(null as any),View_ErrorComponent_0,RenderType_ErrorComponent)),
    import0.ɵdid(57344,(null as any),0,import2.ErrorComponent,[import3.ErrorService],(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const ErrorComponentNgFactory:import0.ComponentFactory<import2.ErrorComponent> = import0.ɵccf('app-error',import2.ErrorComponent,View_ErrorComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvdi5sZWR5YWV2L0RvY3VtZW50cy9Qcm9qZWN0cy9DZWxsdWxhckF1dG9tYXRvbi1NRUFOLS9hc3NldHMvYXBwL2Vycm9ycy9lcnJvci5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovVXNlcnMvdi5sZWR5YWV2L0RvY3VtZW50cy9Qcm9qZWN0cy9DZWxsdWxhckF1dG9tYXRvbi1NRUFOLS9hc3NldHMvYXBwL2Vycm9ycy9lcnJvci5jb21wb25lbnQudHMiLCJuZzovLy9DOi9Vc2Vycy92LmxlZHlhZXYvRG9jdW1lbnRzL1Byb2plY3RzL0NlbGx1bGFyQXV0b21hdG9uLU1FQU4tL2Fzc2V0cy9hcHAvZXJyb3JzL2Vycm9yLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvdi5sZWR5YWV2L0RvY3VtZW50cy9Qcm9qZWN0cy9DZWxsdWxhckF1dG9tYXRvbi1NRUFOLS9hc3NldHMvYXBwL2Vycm9ycy9lcnJvci5jb21wb25lbnQudHMuRXJyb3JDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8ZGl2IGNsYXNzPVwiYmFja2Ryb3BcIiBbbmdTdHlsZV09XCJ7J2Rpc3BsYXknOiBkaXNwbGF5fVwiPjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1vZGFsXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBbbmdTdHlsZV09XCJ7J2Rpc3BsYXknOiBkaXNwbGF5fVwiPlxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgKGNsaWNrKT1cIm9uRXJyb3JIYW5kbGVkKClcIj48c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+e3sgZXJyb3I/LnRpdGxlIH19PC9oND5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8cD57eyBlcnJvcj8ubWVzc2FnZSB9fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cIm9uRXJyb3JIYW5kbGVkKClcIj5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PjwhLS0gLy5tb2RhbC1jb250ZW50IC0tPlxuICAgIDwvZGl2PjwhLS0gLy5tb2RhbC1kaWFsb2cgLS0+XG48L2Rpdj48IS0tIC8ubW9kYWwgLS0+IiwiPGFwcC1lcnJvcj48L2FwcC1lcnJvcj4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFzQjtJQUF1QztJQUM3RDtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7Z0JBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQStDO0lBQWlDO0lBQzVFO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtJQUEwQztNQUN0QztRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQTJCO01BQ3ZCO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBMEI7SUFDdEI7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQXVEO1FBQUE7UUFBQTtNQUFBO01BQXZEO0lBQUE7TUFBa0Y7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF5QjtJQUF1QjtNQUNsSTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXdCO01BQUE7TUFBQTtJQUFBO0lBQUE7SUFBdUI7SUFDN0M7TUFDTjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXdCO0lBQ3BCO0lBQUc7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUF3QjtJQUN6QjtNQUNOO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBMEI7SUFDdEI7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQThDO1FBQUE7UUFBQTtNQUFBO01BQTlDO0lBQUE7SUFBeUU7SUFBYztJQUNyRjtJQUNvQjtJQUNMOzs7O0lBZlg7SUFBdEIsU0FBc0IsU0FBdEI7SUFDK0M7SUFBL0MsU0FBK0MsU0FBL0M7OztJQUt3QztJQUFBO0lBR3JCO0lBQUE7Ozs7O0lDVG5CO2dCQUFBOzs7SUFBQTs7OyJ9
