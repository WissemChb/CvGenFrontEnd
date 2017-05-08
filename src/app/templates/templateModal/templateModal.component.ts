/**
 * Created by wissem on 4/22/17.
 */

import {Component, Input, ViewChild, OnInit} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {ImageTemplates} from "../TemplateImages";



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
        <!--<div class="pull-left">
          <input type="button" value="Cancel" name="cancel">
        </div>-->
        <div class="pull-rigth">
           <input type="button" (click)="onclickTemp()" value="Choose" name="choose">
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
  @Input() title:string;
  images : ImageTemplates = new ImageTemplates();

  constructor(private  router : Router, private flashmessage : FlashMessagesService){}


  show(){
    this.childModal.show();
  }
  hide(){
    this.childModal.hide();
  }

  onclickTemp() {
      this.router.navigate(['/dashboard', {outlets: {routertemp: ['template1']}}]);

  }
}
