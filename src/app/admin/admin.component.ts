import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
//import {FileUploadService} from '../shared/fileupload.service'
import { Router } from "@angular/router";
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  userDetails;
  ItemsArray:any =[];
  constructor(private userService: UserService, private router: Router,) { }
  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {

    this.userService.getUserProfile().subscribe(
      res => { this.userDetails = res['user'];
      
    console.log(this.userDetails)
      },

      err => { console.log(err); }
      );
      
    if(this.userService.isLoggedIn())
      this.router.navigateByUrl('/admin');

     
    }
  
  }


