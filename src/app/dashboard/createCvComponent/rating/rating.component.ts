import {Component, Output, EventEmitter, Input} from '@angular/core';
import {FormControl} from "@angular/forms";


@Component({
  selector: 'app-rating',
  templateUrl: 'rating.component.html',
  styleUrls: ['rating.component.css']
})
export class RatingComponent{
  @Output() rating : EventEmitter<number> = new EventEmitter<number>();
  @Input('rateForm') starRate : FormControl;
  public max:number = 5;
  //public rate:number = 7;
  public isReadonly:boolean = false;

  public overStar:number;
  //public percent:number;

  public hoveringOver(value:number):void {
    this.rating.emit(value);
    //this.percent = 100 * (value / this.max);
    this.overStar = value;
  };

  public resetStar():void {
    this.overStar = void 0;
  }
}
