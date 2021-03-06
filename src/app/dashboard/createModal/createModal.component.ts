/**
 * Created by Dhouha on 4/23/2017.
 */

import {Component, Input, ViewChild} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';

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
        
      </div>
    </div>
  </div>
</div>
  `,

  styleUrls : ['createModal.component.css']
})
export class CreateModalComponent {
  @ViewChild('childModal') public childModal:ModalDirective;
  @Input() title:string;
  show(){
    this.childModal.show();
    this.childModal.isAnimated
  }
  hide(){
    this.childModal.hide();
  }

}

