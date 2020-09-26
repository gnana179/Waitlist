import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';


@Component({
  selector: 'app-public-cards',
  templateUrl: './public-cards.component.html',
  styleUrls: ['./public-cards.component.css']
})
export class PublicCardsComponent implements OnInit {
userDetails;
ItemsArray:any =[];
  constructor(private userService:UserService) { }

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
