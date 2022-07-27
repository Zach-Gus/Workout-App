import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ToDoComponent } from './todo/todo.component';


import {
  RouterModule,
  Routes
} from '@angular/router';

import {
  routes as childRoutes,
  ProductsModule
} from './products/products.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SportsComponent } from './sports/sports.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';
import { ProductsComponent } from './products/products.component';

import { AUTH_PROVIDERS } from './auth.service';
import { LoggedInGuard } from './logged-in.guard';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HockeyOffComponent } from './hockey-off/hockey-off.component';
import { HockeyInComponent } from './hockey-in/hockey-in.component';
import { LaxInComponent } from './lax-in/lax-in.component';
import { LaxOffComponent } from './lax-off/lax-off.component';
import { SoccerInComponent } from './soccer-in/soccer-in.component';
import { SoccerOffComponent } from './soccer-off/soccer-off.component';
import { CommentsComponent } from './comments.component';
//import { CommentComponent } from './comment/comment.component';




const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about/:id', component: AboutComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'hockey-off', component: HockeyOffComponent},
  { path: 'hockey-in', component: HockeyInComponent},
  { path: 'lax-off', component: LaxOffComponent},
  { path: 'lax-in', component: LaxInComponent},
  { path: 'soccer-off', component: SoccerOffComponent},
  { path: 'soccer-in', component: SoccerInComponent},
  { path: 'comments', component: CommentsComponent},
  


  // authentication demo
  { path: 'login', component: LoginComponent },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [ LoggedInGuard ]
  },

  // nested
  {
    path: 'products',
    component: ProductsComponent,
    children: childRoutes
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SportsComponent,
    AboutComponent,
    LoginComponent,
    ProtectedComponent,
    HockeyOffComponent,
    HockeyInComponent,
    LaxInComponent,
    LaxOffComponent,
    SoccerInComponent,
    SoccerOffComponent,
    CommentsComponent,

    ToDoComponent
   
    
    
  ],
  imports: [
    
    RouterModule.forRoot(routes), // <-- routes
    BrowserModule,
    FormsModule,
    // added this for our child module
    ProductsModule
  ],
  providers: [
    // uncomment this for "hash-bang" routing
    //{ provide: LocationStrategy, useClass: HashLocationStrategy },
    AUTH_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }