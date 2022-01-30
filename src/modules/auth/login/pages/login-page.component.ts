import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  template: `
    <app-auth-form (submitted)="loginUser($event)">
      <h1>Login</h1>
      <a routerLink="/auth/register">Not registered?</a>
      <button type="submit">Sign In</button>
    </app-auth-form>
  `,
})
export class LoginPageComponent {
  loginUser(event: FormGroup) {
    console.log('login', event.value);
  }
}
