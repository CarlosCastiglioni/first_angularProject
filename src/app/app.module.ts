import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { StarComponent } from './star/star.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { Error404Component } from './error404/error-404.component';
import { ProductInfoComponent } from './products/product-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    NavBarComponent,
    Error404Component,
    ProductInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'products', component: ProductListComponent
      },
      {
        path: 'products/info/:id', component: ProductInfoComponent
      },
      {
        path: '', redirectTo: 'products', pathMatch: 'full'
      },
      {
        path: '**', component: Error404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
