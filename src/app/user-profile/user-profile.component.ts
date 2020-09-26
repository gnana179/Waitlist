import { Component, OnInit, OnDestroy, Input,ChangeDetectorRef,Output,EventEmitter,Inject,NgModule, ModuleWithComponentFactories} from '@angular/core';
import { UserService } from '../shared/user.service';
//import {FileUploadService} from '../shared/fileupload.service'
import { Router } from "@angular/router";
import {MediaObserver,MediaChange} from '@angular/flex-layout'
import {Subscription}from 'rxjs';
import {MediaMatcher} from '@angular/cdk/layout';
import {MatDialog,MAT_DIALOG_DATA,MatDialogConfig,MatDialogRef} from '@angular/material/dialog';
import { UserdialogComponent } from './userdialog/userdialog.component';
import { MatListIconCssMatStyler } from '@angular/material/list';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
  mediaSub:Subscription;
  deviceXs:boolean;
  userDetails;
  public userimage;
   image;
 public mail:string
  value:string
 //constructor parts------------------------------------------------------------------------------>
  constructor(private userService: UserService, private router: Router,
    // public fileupservice: FileUploadService,
    public mediaobserver:MediaObserver,changeDetectorRef: ChangeDetectorRef,
    public dialog: MatDialog, media: MediaMatcher) {

      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
     }

    
//searchbar<------------------------------------------------------------------------------------->
  ngOnInit() {
                this.userService.getUserProfile().subscribe(
                  res => { this.userDetails = res['user'];
                  
                console.log(this.userDetails)
                  },
 
                  err => { console.log(err); }
                  );
                  
                if(this.userService.isLoggedIn())
                  this.router.navigateByUrl('/userprofile');

                 
                
                        
                        
                 //media
                 this.mediaSub = this.mediaobserver.media$.subscribe((result:MediaChange)=>
  {
    //console.log(result.mqAlias);
    //for all devices
    this.deviceXs = result.mqAlias ==='xs' ? true : false;
  });


  //searchbar
  
}
//media Matcher
mobileQuery: MediaQueryList;
 private _mobileQueryListener: () => void;
 onLogout(){
  this.userService.deleteToken();
  this.router.navigate(['/login']);
}
 ngOnDestroy(){
  this.mediaSub.unsubscribe();
  this.mobileQuery.removeListener(this._mobileQueryListener);
    }
   
            //dialog content
          
          openDialog(): void {
            const dialogRef = this.dialog.open(UserdialogComponent, {
              width: '350px',
              height: '500px',
             hasBackdrop:false,
             closeOnNavigation:true,
             disableClose:true,
            autoFocus:false,
            panelClass: 'myapp-no-padding-dialog'
            });
        
            dialogRef.afterClosed().subscribe(result => {
              console.log('The dialog was closed');
              
            });
          }
        
   }
            
           
        

    
