import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
//import {FileUploadService} from '../shared/fileupload.service'
import { Router } from "@angular/router";
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  userDetails;
  ItemsArray:any =[];
  constructor(private userService: UserService, private router: Router,) { }
  ngOnInit(): void {


    this.userService.getall().subscribe((res: any[])=>{
      this.ItemsArray= res;
      console.log("hiiiiii");
      console.log(this.ItemsArray);
    },

      err => { console.log(err); }
      );
  }

}
