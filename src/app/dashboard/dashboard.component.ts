import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import {DashboardService} from "./dashboard.service";
import {Router} from "@angular/router";
import {CreateModalComponent} from "./createModal/createModal.component";
import {Customer} from "../shared/classes/customer";
import {FlashMessagesService} from "angular2-flash-messages";
import {Subscription} from "rxjs";
import {CV} from "../shared/classes/CV";
import {TemplateService} from "./template.service";
import * as jsPDF  from "jspdf";





@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy {
  @ViewChild('childModal') childModal : CreateModalComponent;
  pdfDoc :jsPDF;
  error : any;
  user :Customer = new Customer();
  cv : CV = new CV();
  education: Object[] = [];
  experience: Object[] = [];
  skills : Object[] = [];
  leisure : Object[] = [];
  language : Object[] = [];
  subscription : Subscription;
  idAttr : string;


  constructor(private dashService : DashboardService, private router : Router,private flashMessage : FlashMessagesService,
              private  templateService : TemplateService){
    this.subscription = this.templateService.getData().subscribe(data => {if(data){debugger;this.user = data}});
  }
  ngOnInit(){
      this.pdfDoc = new jsPDF('p','pt','a4');
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
  Onclick(event) {
    let target = event.target || event.srcElement || event.currentTarget;
    this.idAttr = target.attributes.id.value;
    if(this.idAttr === 'infos'){
      this.router.navigate(['/dashboard', {outlets: {routerCV: ['infos']}}]);
    }
    if(this.idAttr === 'education'){
      this.router.navigate(['/dashboard', {outlets: {routerCV: ['education']}}]);
    }
    if(this.idAttr === 'experience'){
      this.router.navigate(['/dashboard', {outlets: {routerCV: ['experience']}}]);
    }
    if(this.idAttr === 'skill'){
      this.router.navigate(['/dashboard', {outlets: {routerCV: ['skill']}}]);
    }
    if(this.idAttr === 'leisure'){
      this.router.navigate(['/dashboard', {outlets: {routerCV: ['leisure']}}]);
    }
    if(this.idAttr === 'language'){
      this.router.navigate(['/dashboard', {outlets: {routerCV: ['language']}}]);
    }
    if(this.idAttr === 'project'){
      this.router.navigate(['/dashboard', {outlets: {routerCV: ['project']}}]);
    }
    this.childModal.show();
  }

  save(){
    this.addCV(this.user)
  }
  addCV(user : Customer)
  {
    debugger;
    this.dashService.saveCV(user).subscribe(data =>{
      if(data.success){
        this.flashMessage.show(data.msg,{cssClass : 'alert-success', timeout : 5000});
      }
    });
  }

  downloadPdf(){

    var source = document.getElementById("cv");
   // html2canvas(source)
    this.pdfDoc.addHTML(source,()=>{
      this.pdfDoc.output("dataurlnewwindow");
    })
    /*this.pdfDoc.fromHTML(source, 15, 15);
    this.pdfDoc.output("dataurlnewwindow");*/

    //this.pdfDoc.save(this.user.firstName+this.user.secondName+'_CV.pdf');
  }


}
