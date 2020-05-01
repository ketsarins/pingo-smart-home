import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
    private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let url: string = state.url;
      console.log("Called route guard");
    return this.checkLogin();
  }

  checkLogin(): boolean {
    if (this.authService.currentUser) { 
      // User is logged in
      return true; 
    }

    // Go to login page
    this.router.navigate(['/login']);
    return false;
  }
  
}
