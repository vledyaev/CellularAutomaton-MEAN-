/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from './home.component';
import * as import2 from '../auth/auth.service';
import * as import3 from '@angular/router';
const styles_HomeComponent:any[] = ([] as any[]);
export const RenderType_HomeComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_HomeComponent,
  data: {}
}
);
export function View_HomeComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h1',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Hello!'])),
    (l()(),import0.ɵted((null as any),['\n'])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'p',[[
        'class',
        'lead'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.\n'])),
    (l()(),import0.ɵted((null as any),['\n'])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'p',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    The "game" is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input.\n    One interacts with the Game of Life by creating an initial configuration and observing how it evolves, or, for advanced "players", by creating patterns with particular properties.\n'])),
    (l()(),import0.ɵted((null as any),['\n'])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),2,'p',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'a',([] as any[]),(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import1.HomeComponent = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.newConfiguration()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Create your own game']))
  ]
  ,(null as any),(null as any));
}
function View_HomeComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'app-home',([] as any[]),(null as any),(null as any),(null as any),View_HomeComponent_0,RenderType_HomeComponent)),
    import0.ɵdid(24576,(null as any),0,import1.HomeComponent,[
      import2.AuthService,
      import3.Router
    ]
    ,(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const HomeComponentNgFactory:import0.ComponentFactory<import1.HomeComponent> = import0.ɵccf('app-home',import1.HomeComponent,View_HomeComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvdi5sZWR5YWV2L0RvY3VtZW50cy9Qcm9qZWN0cy9DZWxsdWxhckF1dG9tYXRvbi1NRUFOLS9hc3NldHMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovVXNlcnMvdi5sZWR5YWV2L0RvY3VtZW50cy9Qcm9qZWN0cy9DZWxsdWxhckF1dG9tYXRvbi1NRUFOLS9hc3NldHMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJuZzovLy9DOi9Vc2Vycy92LmxlZHlhZXYvRG9jdW1lbnRzL1Byb2plY3RzL0NlbGx1bGFyQXV0b21hdG9uLU1FQU4tL2Fzc2V0cy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvdi5sZWR5YWV2L0RvY3VtZW50cy9Qcm9qZWN0cy9DZWxsdWxhckF1dG9tYXRvbi1NRUFOLS9hc3NldHMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMuSG9tZUNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxoMT5IZWxsbyE8L2gxPlxyXG48cCBjbGFzcz1cImxlYWRcIj5cclxuICAgIFRoZSBHYW1lIG9mIExpZmUsIGFsc28ga25vd24gc2ltcGx5IGFzIExpZmUsIGlzIGEgY2VsbHVsYXIgYXV0b21hdG9uIGRldmlzZWQgYnkgdGhlIEJyaXRpc2ggbWF0aGVtYXRpY2lhbiBKb2huIEhvcnRvbiBDb253YXkgaW4gMTk3MC5cclxuPC9wPlxyXG48cD5cclxuICAgIFRoZSBcImdhbWVcIiBpcyBhIHplcm8tcGxheWVyIGdhbWUsIG1lYW5pbmcgdGhhdCBpdHMgZXZvbHV0aW9uIGlzIGRldGVybWluZWQgYnkgaXRzIGluaXRpYWwgc3RhdGUsIHJlcXVpcmluZyBubyBmdXJ0aGVyIGlucHV0LlxyXG4gICAgT25lIGludGVyYWN0cyB3aXRoIHRoZSBHYW1lIG9mIExpZmUgYnkgY3JlYXRpbmcgYW4gaW5pdGlhbCBjb25maWd1cmF0aW9uIGFuZCBvYnNlcnZpbmcgaG93IGl0IGV2b2x2ZXMsIG9yLCBmb3IgYWR2YW5jZWQgXCJwbGF5ZXJzXCIsIGJ5IGNyZWF0aW5nIHBhdHRlcm5zIHdpdGggcGFydGljdWxhciBwcm9wZXJ0aWVzLlxyXG48L3A+XHJcbjxwPjxhIChjbGljayk9XCJuZXdDb25maWd1cmF0aW9uKClcIj5DcmVhdGUgeW91ciBvd24gZ2FtZTwvYT48L3A+IiwiPGFwcC1ob21lPjwvYXBwLWhvbWU+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUE7SUFBSTtJQUFXO01BQ2Y7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFnQjtJQUVaO0lBQ0o7SUFBRztJQUdDO0lBQ0o7TUFBRztRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFHO1FBQUE7UUFBQTtNQUFBO01BQUg7SUFBQTtJQUFnQzs7Ozs7O0lDUm5DO2dCQUFBOzs7SUFBQTtLQUFBOzs7OyJ9
