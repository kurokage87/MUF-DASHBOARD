import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ReportCabangComponent } from './components/dashboard/report-cabang/report-cabang.component';
import { CollectionComponent } from './components/dashboard/collection/collection.component';
import { ProyeksiComponent } from './components/dashboard/proyeksi/proyeksi.component';
import { InventoryComponent } from './components/dashboard/inventory/inventory.component';
import { RecoveryComponent } from './components/dashboard/recovery/recovery.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  // {path:'dashboard', redirectTo:'dashboard/collection'},
  {path:'dashboard', redirectTo:'dashboard/marketing'},
  {path:'dashboard', component:LandingComponent, children:[
    {path:'collection', component:CollectionComponent},
    {path:'marketing', component:ReportCabangComponent},
    {path:'proyeksi', component:ProyeksiComponent},
    {path:'inventory', component:InventoryComponent},
    {path:'recovery', component:RecoveryComponent}
  ]},
  // { path: '**',  redirectTo:'dashboard/collection', pathMatch:'full'},
  { path: '**',  redirectTo:'dashboard/marketing', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
