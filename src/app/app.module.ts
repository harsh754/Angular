import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { MeanComponent } from './mean/mean.component';
import { MernComponent } from './mern/mern.component';
import { MevnComponent } from './mevn/mevn.component';


const routes:Routes=[
  { path:'', component:HomeComponent},
  { path:'about', component:AboutComponent,
  children:[
    { path:'', redirectTo:'mean', pathMatch:'full'},
    { path:'mean', component:MeanComponent}, 
    { path:'mern', component:MernComponent}, 
    { path:'mevn', component:MevnComponent}
  ]},
  { path:'blog', component:BlogComponent}, 
  { path:'contact', component:ContactComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    MeanComponent,
    MernComponent,
    MevnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
