import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  submitted= false;
  addUsersForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl('', [Validators.min(0), Validators.max(100)]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.minLength(5)]),
    costomer: new FormControl('', [Validators.required])


  });

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  addUsers(){
    this.submitted = true;
    if(this.addUsersForm.invalid){
      return;
    }
    var user5 = JSON.parse(localStorage.getItem('user5') || '[]');
    user5.push(this.addUsersForm.value);
    localStorage.setItem('user5', JSON.stringify(user5));
  }

}

