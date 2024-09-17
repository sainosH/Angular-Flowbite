import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { ProductComponent } from './page/product/product.component';
import { ProductIdComponent } from './page/product-id/product-id.component';
import { ContactComponent } from './page/contact/contact.component';
import { MantenimientoComponent } from './page/mantenimiento/mantenimiento.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'product', component: ProductComponent},
  {path: 'product/:id', component: ProductIdComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'error-page', component: MantenimientoComponent},
  {path: '**', redirectTo: '/error-page', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
