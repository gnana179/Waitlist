import { Component, OnInit,Inject, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { UserService } from 'src/app/shared/user.service';
import {Location, Appearance, GermanAddress} from '@angular-material-extensions/google-maps-autocomplete'
import PlaceResult = google.maps.places.PlaceResult;
@Component({
  selector: 'app-userdialog',
  templateUrl: './userdialog.component.html',
  styleUrls: ['./userdialog.component.css'],
 
})
export class UserdialogComponent implements OnInit {

  preview: string;
  form: FormGroup;
  userDetails;
  showSucessMessage:boolean;
  serverErrorMessages

  ngOnInit() {
    this.usersevice.getUserProfile().subscribe(
      res => { this.userDetails = res['user'];
     
      // this.mail=this.userDetails.email;
      
  },
      err => { console.log(err); }
      );
     
  }
  

  constructor(
    private fb: FormBuilder,public usersevice:UserService,
    public router: Router,
    // public fileUploadService: FileUploadService,
    private dialogRef: MatDialogRef<UserdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) 
    {
      
                 // Reactive Form
    this.form = this.fb.group({
      name:[null],
      avatar: [null]
    })


    }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      avatar: file
    });
    this.form.get('avatar').updateValueAndValidity()

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  submitForm() {
    this.usersevice.update(this.form.value.avatar).subscribe(res => { 
                    
                    this.showSucessMessage = true;
                    setTimeout(() => this.showSucessMessage = false, 5000);
                   
                        },

   err => { 
  this.serverErrorMessages = 'Something went wrong.Please contact admin.';
          }
   );
   
        }
  
  
      onNoClick(): void {
        this.dialogRef.close();
      }

      onLogout(){
        this.dialogRef.close();
      this.usersevice.deleteToken();
     
        this.router.navigate(['/login']);
      }
    //map
    onAutocompleteSelected(result: PlaceResult) {
      console.log('onAutocompleteSelected: ', result);
    }
   
    onLocationSelected(location: Location) {
      console.log('onLocationSelected: ', location);
     
    }
    }