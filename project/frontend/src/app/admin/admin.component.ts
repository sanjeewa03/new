import { Component, OnInit,Renderer2, Inject } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor( ){ }

  ngOnInit() {
    /*const s = this.renderer2.createElement('script');
   s.type = 'text/javascript';
   s.src = '/assets/js/settings.js';
   s.text = ``;
   this.renderer2.appendChild(this._document.body, s);
   const t = this.renderer2.createElement('script');
   t.type = 'text/javascript';
   t.src = '/assets/js/plugins.js';
   t.text = ``;
   this.renderer2.appendChild(this._document.body, t);
   const u = this.renderer2.createElement('script');
   u.type = 'text/javascript';
   u.src = '/assets/js/actions.js';
   u.text = ``;
   this.renderer2.appendChild(this._document.body, u);
   const v = this.renderer2.createElement('script');
   v.type = 'text/javascript';
   v.src = '/assets/js/demo_dashboard.js';
   v.text = ``;
   this.renderer2.appendChild(this._document.body, v);*/
  }

}
