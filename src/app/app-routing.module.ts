import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AllCourseComponent } from './all-course/all-course.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
   {path:'home',component:HomeComponent},
   {path:'blog',component:BlogComponent},
   {path:'all-course',component:AllCourseComponent},
   {path:'contact',component:ContactComponent},
   {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }