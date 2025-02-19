import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private users: any[] = [];

  addUser(user: any) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
  }
}