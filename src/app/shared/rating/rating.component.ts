import { Component } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent{

  public max:number = 10;
  public rate:number = 7;
  public isReadonly:boolean = false;

  public overStar:number;
  public percent:number;

  public hoveringOver(value:number):void {
    this.overStar = value;
    this.percent = 100 * (value / this.max);
  };

  public resetStar():void {
    this.overStar = void 0;
  }
}
