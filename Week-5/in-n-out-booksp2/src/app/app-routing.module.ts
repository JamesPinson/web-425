/**
 * Title: app-routing.module.ts
 * Author: James Pinson
 * Date: June 27th 2021
 * Description: This is the app-routing module ts file which contains the routing for our application.
 */

//Here we add our imports including our newly created Components.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

//Here we create the paths to route our components.
const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'book-list',
    component: BookListComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

//We export our AppRoutingModule to the rest of the application.
export class AppRoutingModule { }
