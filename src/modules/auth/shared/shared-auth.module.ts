import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/modules/shared/shared.module';
import { AuthFormComponent } from './components/auth-form/auth-form.component';

const COMPONENTS = [AuthFormComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    // Dependencies
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [...COMPONENTS],
  providers: [],
})
export class SharedAuthModule {}
