import { NgModule } from '@angular/core';
import { SharedModule } from 'src/modules/shared/shared.module';
import { SharedAuthModule } from '../shared/shared-auth.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './pages/login-page.component';

const PAGES = [LoginPageComponent];

@NgModule({
  declarations: [...PAGES],
  imports: [
    // Routing
    LoginRoutingModule,

    // Dependencies
    SharedModule,
    SharedAuthModule,
  ],
})
export class LoginModule {}
