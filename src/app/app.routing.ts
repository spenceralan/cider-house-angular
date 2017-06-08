import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AdminComponent } from './admin/admin.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';

const appRoutes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'keg/:id',
    component: EditKegComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
