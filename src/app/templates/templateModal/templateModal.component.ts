/**
 * Created by wissem on 4/22/17.
 */

import {Component, Input, ViewChild} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import {Router} from "@angular/router";



@Component({
  selector: 'common-modal',
  template: `
   <div bsModal #childModal="bs-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
     <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title pull-left">{{title}}</h4>
        <button type="button" class="close pull-right" aria-label="Close" (click)="hide()">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <ng-content select=".modal-body"> </ng-content>
      </div>
      <div class="modal-footer">
        <div class="pull-left">
          <a type="button" class="read" (click)="hide()">Cancel</a>
        </div>
        <div class="pull-right">
           <button type="button" class="read"  (click)="onclickTemp()">Choose</button>
        </div>
      </div>
      </div>
  </div>
</div>
  `,

  styleUrls : ['modal.component.css']
})
export class TemplateModalComponent{
  @ViewChild('childModal') public childModal:ModalDirective;
  @Input('idTemp') idTemplate :string;

  constructor(private  router : Router){}


  show(){
    this.childModal.show();
  }
  hide(){
    this.childModal.hide();
  }

  onclickTemp() {
    debugger
      this.router.navigate(['/dashboard', {outlets: {routertemp: [`template${this.idTemplate}`]}}]);

  }
}
