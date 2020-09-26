import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import {SignInComponent}from './user/sign-in/sign-in.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {UserdialogComponent  } from '././user-profile/userdialog/userdialog.component'
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import{AgmCoreModule} from '@agm/core';
//template driven forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import {UserService} from './shared/user.service'
//router
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';


//Auth Guard
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';

//materialmodules
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
//cdkModules
import {CdkScrollableModule} from '@angular/cdk/scrolling';

//font awesome
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

//flexLayout
import { FlexLayoutModule } from '@angular/flex-layout';
import { PublicCardsComponent } from './user-profile/public-cards/public-cards.component';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { AdminComponent } from './admin/admin.component';
import { ViewComponent } from './admin/view/view.component';
import { UpdateComponent } from './admin/update/update.component';
import { DeleteComponent } from './admin/delete/delete.component';
import { CreateComponent } from './admin/create/create.component'; 



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,SignInComponent,UserdialogComponent, PublicCardsComponent, AdminComponent, ViewComponent, UpdateComponent, DeleteComponent, CreateComponent
   
  ],
  imports: [
    BrowserModule,MatInputModule,MatIconModule,MatButtonModule,MatCardModule,FlexLayoutModule,MatAutocompleteModule,
    AppRoutingModule,FontAwesomeModule,MatToolbarModule,MatTooltipModule,MatSidenavModule,MatListModule,ReactiveFormsModule,
    BrowserAnimationsModule, FormsModule,HttpClientModule,RouterModule.forRoot(appRoutes),CdkScrollableModule,
    MatDialogModule,MatDividerModule,ClipboardModule, MDBBootstrapModule,MatButtonToggleModule,AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCTwFSnwe3zIcOFpYLV-fUNtIFNJVYlv40',
      libraries: ['places']
    }),MatGoogleMapsAutocompleteModule
  ],
  providers: [UserService,AuthGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  entryComponents:[UserdialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
