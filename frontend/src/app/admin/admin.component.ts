import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  constructor(private router: Router) {
  }

  logout(): void {

    alert('Admin logged out successfully');

    this.router.navigate(['/login']);
  }

}