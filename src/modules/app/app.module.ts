import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '../auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Core
    BrowserModule,

    // Routing
    AppRoutingModule,

    // Feature modules
    AuthModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
