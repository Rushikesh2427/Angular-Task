import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  user = {
    name: '',
    phone: '',
    idNumber: '',
    picture: null
  };

  constructor(private dataService: DataService, private router: Router) {}

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.user.picture = file;
  }

  onSubmit() {
    this.dataService.addUser(this.user);
    this.router.navigate(['/table']);
  }
}