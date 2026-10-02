import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(private router: Router) {
  }

  login(): void {

    if (!this.email || !this.password) {
      alert('Please enter email and password');
      return;
    }

    // Temporary Admin login
    if (
      this.email === 'admin@gmail.com' &&
      this.password === 'admin123'
    ) {
      alert('Admin login successful');

      this.router.navigate(['/admin']);
    } else {
      alert('Invalid Admin email or password');
    }
  }
}