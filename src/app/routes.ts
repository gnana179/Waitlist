import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import {SignInComponent} from './user/sign-in/sign-in.component'
import {UserProfileComponent} from './user-profile/user-profile.component';
import {AdminComponent} from './admin/admin.component';
import {ViewComponent} from './admin/view/view.component';
import {DeleteComponent} from './admin/delete/delete.component';
import {UpdateComponent} from './admin/update/update.component';
import {CreateComponent} from './admin/create/create.component';
import { AuthGuard } from './auth/auth.guard';
import {PublicCardsComponent} from './user-profile/public-cards/public-cards.component';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: '', redirectTo: '/signup', pathMatch: 'full'
    },
    {
        path: 'user', redirectTo: '/signup', pathMatch: 'full'
    },{
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    
   
    { path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard],
    children: [
      { path: '', redirectTo: 'public-cards', pathMatch: 'full' },
      { path: 'public-cards', component: PublicCardsComponent }
     ]
  },
  { path: 'admin', component: AdminComponent,canActivate:[AuthGuard],
  children: [
    { path: '', redirectTo: 'view', pathMatch: 'full' },
            { path: 'view', component: ViewComponent }
   ]
},
{ path: 'admin', component: AdminComponent,canActivate:[AuthGuard],
  children: [
    { path: '', redirectTo: 'update', pathMatch: 'full' },
            { path: 'update', component: UpdateComponent }
   ]
},

  
   
];