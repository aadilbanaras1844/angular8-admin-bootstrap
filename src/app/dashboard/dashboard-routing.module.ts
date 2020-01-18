import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: 'default', loadChildren: () => import(`./default/default.module`).then(m => m.DefaultModule) },
    { path: 'tables', loadChildren: () => import(`./tables/tables.module`).then(m => m.TablesModule) },
    { path: 'charts', loadChildren: () => import(`./charts/charts.module`).then(m => m.ChartsModule) },
    { path: 'components', loadChildren: () => import(`./page-components/page-components.module`).then(m => m.PageComponentsModule) },
    { path: 'utilities', loadChildren: () => import(`./page-utilities/page-utilities.module`).then(m => m.PageUtilitiesModule) },
  ] },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
