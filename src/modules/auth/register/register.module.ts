import { NgModule } from '@angular/core';
import { SharedModule } from 'src/modules/shared/shared.module';
import { SharedAuthModule } from './../shared/shared-auth.module';
import { RegisterPageComponent } from './pages/register-page.component';
import { RegisterRoutingModule } from './register-routing.module';

const PAGES = [RegisterPageComponent];

@NgModule({
  declarations: [...PAGES],
  imports: [
    // Routing
    RegisterRoutingModule,

    // Dependencies
    SharedModule,
    SharedAuthModule,
  ],
})
export class RegisterModule {}
