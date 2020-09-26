import { Component, OnInit, OnDestroy } from '@angular/core';
import {MediaObserver,MediaChange} from '@angular/flex-layout'
import {Subscription}from 'rxjs'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'myapp';
  mediaSub:Subscription;
  deviceXs:boolean;
  constructor(public mediaobserver:MediaObserver){}
  ngOnInit() {
  this.mediaSub = this.mediaobserver.media$.subscribe((result:MediaChange)=>
  {
    console.log(result.mqAlias);
    //for all devices
    this.deviceXs = result.mqAlias ==='xs' ? true : false;
  });
}
ngOnDestroy(){
  this.mediaSub.unsubscribe();
    }
}
