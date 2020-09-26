import { Component, OnInit, Input } from '@angular/core';
import referralCodeGenerator from 'referral-code-generator';
import { UserService } from '../../shared/user.service'
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [UserService]
})
export class SignUpComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
hide=true;
  constructor(public userService: UserService) { }

  ngOnInit() {
  }
  showSucessMessage: boolean;
  serverErrorMessages: string;
  
  onSubmit(form: NgForm) {
    
      this.userService.postUser(form.value).subscribe(
        res => {
          this.showSucessMessage = true;
          setTimeout(() => this.showSucessMessage = false, 5000);
          this.resetForm(form);
        },
        err => {
          if (err.status === 422) {
            this.serverErrorMessages = err.error.join('<br/>');
          }
          else
            this.serverErrorMessages = 'Something went wrong.Please contact admin.';
        }
      );
      }
  
   resetForm(form: NgForm) {
      this.userService.selectedUser = {
        fullName: '',
        email: '',
        password: '',
      avatar:'',
      ref:'',
      frndref:''
      };
      form.resetForm();
      this.serverErrorMessages = '';
    }
}