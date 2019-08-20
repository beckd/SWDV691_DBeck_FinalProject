// User services page. Only service that interacts with the DB directly and handles all HTTP requests
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import {environment} from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  dataChanged$: Observable<boolean>;

  private dataChangeSubject: Subject<boolean>;

  private _user;

  constructor(public http: HttpClient, public alertController: AlertController) {
    console.log('Hello User Services!');
    this.dataChangeSubject = new Subject<boolean>();
    this.dataChanged$ = this.dataChangeSubject.asObservable();
  }
  // add a new user
  addUser(User) {
    return this.http.post(environment.baseURL + "/api/users", User)
  }

  // methods to Get/Put/Delete users by ID
  getUser = (userId) => {
    return this.http.get(environment.baseURL + "/api/users/" + userId);
  }

  updateUser = (userId, newValues) => {
    return this.http.put(environment.baseURL + "/api/users/" + userId, newValues);
  }

  deleteUser = (userId) => {
    return this.http.delete(environment.baseURL + "/api/users/" + userId);
  }

  statCheck = (userId) => {
    return this.http.get(environment.baseURL + "/api/users/" + userId).pipe(map(user => {
      console.log('user health and currency ', user['health'] , user['currency'])
      return [user['health'], user['currency']].every(x => x > 0);
    }));
  }

  set user(userData) {
    this._user = userData;
  }

  get user() {
    return this._user;
  }

}

