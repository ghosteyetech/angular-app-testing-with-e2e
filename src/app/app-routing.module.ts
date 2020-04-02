import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AlbumpageComponent } from './pages/albumpage/albumpage.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent,
  },

  {
      path: 'album',
      component: AlbumpageComponent
  },

  {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
  },

  {
      path: '*',
      redirectTo: 'home',
      pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
