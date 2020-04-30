import { Injectable } from '@angular/core';
import { ILogin } from '../login/login.model';
import { IAuthToken } from '../login/auth-token.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Create subject and public observable of user profile data
  private userProfileSubject = new BehaviorSubject<IUser>(null);
  userProfile = this.userProfileSubject.asObservable();

  constructor(private $window: Window) { }
  /**
   * Log in user
   */
  login(loginInfo: ILogin) {
    //TODO:: Call API with user credentials to get access token
    console.log('login()', loginInfo);
    let response: IAuthToken = {
      accessToken: 'tGlSbrxoXZ',
      tokenType: 'Bearer',
      expiresIn: 123456
    };
    //TODO:: Should not store sensitive session data in browser storage due to lack of security.
    this.$window.sessionStorage.setItem('token', JSON.stringify(response))

    // TODO:: Call API to get user???
    let currentUser: IUser = {
      firstName: 'Pingo',
      lastName: 'Mingo'
    }
    this.userProfileSubject.next(currentUser);
  }

  /**
   * Log out user
   */
  logout() {
    console.log('logout()');
    // TODO:: Call API to log out user
    this.$window.sessionStorage.removeItem('token');
    this.userProfileSubject.next(null);
  }

  // /**
  //  * Checking if user is login in easy way
  //  */
  get isAuthenticated(): boolean{
    // TODO:: Should not check from storage
    return !this.userProfileSubject.value;
  }
}
