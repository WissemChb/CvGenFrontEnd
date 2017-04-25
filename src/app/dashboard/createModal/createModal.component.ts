/**
 * Created by Dhouha on 4/23/2017.
 */

import {Component, Input, ViewChild, ElementRef, Inject} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import {PageScrollService, PageScrollInstance} from "ng2-page-scroll";
import {DOCUMENT} from "@angular/platform-browser";

@Component({
  selector: 'common-modal',
  template: `
   <div bsModal #childModal="bs-modal" class="modal fade" [config]="{backdrop: 'static'}" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
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
           <input type="button" value="Choose" name="choose">
        </div>
      </div>
    </div>
  </div>
</div>
  `,

  styleUrls : ['createModal.component.css']
})
export class CreateModalComponent {
  @ViewChild('childModal') public childModal:ModalDirective;
  @ViewChild('container')  private container : ElementRef;
  @Input() title:string;

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {}

  public scrollSomewhereHorizontally(): void {
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({document: this.document, scrollTarget: '#skillPage', verticalScrolling: false});
    this.pageScrollService.start(pageScrollInstance);
  };
  show(){
    this.childModal.show();
  }
  hide(){
    this.childModal.hide();
  }
}

