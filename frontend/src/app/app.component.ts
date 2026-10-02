import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UserService } from './services/user.service';
import { JobApplicationService } from './services/job-application.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  // =========================
  // ADMIN LOGIN
  // =========================

  isAdminLoggedIn: boolean = false;

  adminEmail: string = '';
  adminPassword: string = '';


  // =========================
  // THEME
  // =========================

  isDarkMode: boolean = false;

  selectedTheme: string = 'blue';

  activeSection: string = 'dashboard';


  // =========================
  // USERS
  // =========================

  users: any[] = [];

  totalUsers: number = 0;

  usersLoading: boolean = false;

  editingUser: any = null;


  // =========================
  // APPLICATIONS
  // =========================

  applications: any[] = [];

  totalApplications: number = 0;

  appliedCount: number = 0;

  interviewCount: number = 0;

  selectedCount: number = 0;

  rejectedCount: number = 0;

  applicationsLoading: boolean = false;

  editingApplication: any = null;


  // =========================
  // USER FORM
  // =========================

  newUser: any = {
    name: '',
    email: '',
    phone: ''
  };


  // =========================
  // APPLICATION FORM
  // =========================

  newApplication: any = {
    companyName: '',
    jobRole: '',
    location: '',
    status: '',
    appliedDate: '',
    user: {
      userId: null
    }
  };


  // =========================
  // CONSTRUCTOR
  // =========================

  constructor(
    private userService: UserService,
    private jobApplicationService: JobApplicationService
  ) {}


  // =========================
  // ON INIT
  // =========================

  ngOnInit(): void {

    this.isAdminLoggedIn = false;

    this.activeSection = 'dashboard';

  }


  // =========================
  // ADMIN LOGIN
  // =========================

  adminLogin(): void {

    if (
      this.adminEmail === 'admin@gmail.com' &&
      this.adminPassword === 'admin123'
    ) {

      this.isAdminLoggedIn = true;

      this.activeSection = 'dashboard';

      alert('Admin Login Successful');

      this.getUsers();

      this.getApplications();

    } else {

      alert('Invalid Admin Email or Password');

    }

  }


  // =========================
  // ADMIN LOGOUT
  // =========================

  adminLogout(): void {

    this.isAdminLoggedIn = false;

    this.adminEmail = '';

    this.adminPassword = '';

    this.activeSection = 'dashboard';

    alert('Admin Logged Out');

  }


  // =========================
  // SECTION NAVIGATION
  // =========================

  showSection(section: string): void {

    this.activeSection = section;

  }


  // =========================
  // GET USERS
  // =========================

  getUsers(): void {

    this.usersLoading = true;

    this.userService.getUsers().subscribe({

      next: (data: any[]) => {

        console.log('Users received:', data);

        this.users = data;

        this.totalUsers = data.length;

        this.usersLoading = false;

      },

      error: (error) => {

        console.error(
          'Error fetching users:',
          error
        );

        this.usersLoading = false;

      }

    });

  }


  // =========================
  // GET APPLICATIONS
  // =========================

  getApplications(): void {

    this.applicationsLoading = true;

    this.jobApplicationService
      .getApplications()
      .subscribe({

        next: (data: any[]) => {

          console.log(
            'Applications received:',
            data
          );

          this.applications = data;

          this.totalApplications =
            this.applications.length;


          // APPLIED COUNT

          this.appliedCount =
            this.applications.filter(
              application =>
                application.status === 'APPLIED'
            ).length;


          // INTERVIEW COUNT

          this.interviewCount =
            this.applications.filter(
              application =>
                application.status === 'INTERVIEW'
            ).length;


          // SELECTED COUNT

          this.selectedCount =
            this.applications.filter(
              application =>
                application.status === 'SELECTED'
            ).length;


          // REJECTED COUNT

          this.rejectedCount =
            this.applications.filter(
              application =>
                application.status === 'REJECTED'
            ).length;


          this.applicationsLoading = false;

        },

        error: (error) => {

          console.error(
            'Error fetching applications:',
            error
          );

          this.applicationsLoading = false;

        }

      });

  }


  // =========================
  // DARK MODE
  // =========================

  toggleDarkMode(): void {

    this.isDarkMode = !this.isDarkMode;

  }


  // =========================
  // CHANGE THEME
  // =========================

  changeTheme(): void {

    console.log(
      'Selected theme:',
      this.selectedTheme
    );

  }


  // =========================
  // STATUS PERCENTAGE
  // =========================

  getStatusPercentage(count: number): number {

    if (this.totalApplications === 0) {

      return 0;

    }

    return Math.round(
      (count / this.totalApplications) * 100
    );

  }


  // =========================
  // CREATE USER
  // =========================

  createUser(): void {

    this.userService
      .createUser(this.newUser)
      .subscribe({

        next: () => {

          alert(
            'User created successfully'
          );

          this.newUser = {
            name: '',
            email: '',
            phone: ''
          };

          this.getUsers();

        },

        error: (error) => {

          console.error(error);

          alert(
            'Error creating user'
          );

        }

      });

  }


  // =========================
  // EDIT USER
  // =========================

  editUser(user: any): void {

    this.editingUser = {
      ...user
    };

  }


  // =========================
  // UPDATE USER
  // =========================

  updateUser(): void {

    if (!this.editingUser) {

      return;

    }

    this.userService
      .updateUser(
        this.editingUser.userId,
        this.editingUser
      )
      .subscribe({

        next: () => {

          alert(
            'User updated successfully'
          );

          this.editingUser = null;

          this.getUsers();

        },

        error: (error) => {

          console.error(error);

          alert(
            'Error updating user'
          );

        }

      });

  }


  // =========================
  // DELETE USER
  // =========================

  deleteUser(id: number): void {

    if (
      !confirm(
        'Are you sure you want to delete this user?'
      )
    ) {

      return;

    }

    this.userService
      .deleteUser(id)
      .subscribe({

        next: () => {

          alert(
            'User deleted successfully'
          );

          this.getUsers();

        },

        error: (error) => {

          console.error(error);

          alert(
            'Unable to delete user'
          );

        }

      });

  }


  // =========================
  // CREATE APPLICATION
  // =========================

  createApplication(): void {

    this.jobApplicationService
      .createApplication(this.newApplication)
      .subscribe({

        next: () => {

          alert(
            'Job application created successfully'
          );

          this.newApplication = {
            companyName: '',
            jobRole: '',
            location: '',
            status: '',
            appliedDate: '',
            user: {
              userId: null
            }
          };

          this.getApplications();

        },

        error: (error) => {

          console.error(error);

          alert(
            'Error creating application'
          );

        }

      });

  }


  // =========================
  // EDIT APPLICATION
  // =========================

  editApplication(application: any): void {

    this.editingApplication = {
      ...application
    };

  }


  // =========================
  // UPDATE APPLICATION
  // =========================

  updateApplication(): void {

    if (!this.editingApplication) {

      return;

    }

    this.jobApplicationService
      .updateApplication(
        this.editingApplication.applicationId,
        this.editingApplication
      )
      .subscribe({

        next: () => {

          alert(
            'Application updated successfully'
          );

          this.editingApplication = null;

          this.getApplications();

        },

        error: (error) => {

          console.error(error);

          alert(
            'Error updating application'
          );

        }

      });

  }


  // =========================
  // DELETE APPLICATION
  // =========================

  deleteApplication(id: number): void {

    if (
      !confirm(
        'Are you sure you want to delete this application?'
      )
    ) {

      return;

    }

    this.jobApplicationService
      .deleteApplication(id)
      .subscribe({

        next: () => {

          alert(
            'Application deleted successfully'
          );

          this.getApplications();

        },

        error: (error) => {

          console.error(error);

          alert(
            'Unable to delete application'
          );

        }

      });

  }

}