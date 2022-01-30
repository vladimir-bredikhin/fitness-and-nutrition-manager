import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page.component';

const ROUTES: Routes = [
  {
    path: '',
    component: RegisterPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
})
export class RegisterRoutingModule {}
