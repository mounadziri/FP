import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted= false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.minLength(5)])
  });

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  login() {
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    var user3 = JSON.parse(localStorage.getItem('user3') || '[]');

    // ******* filtrage *******

    const found = user3.find((user: { email: string; password: string; }) => user.email == this.loginForm.value.email && user.password == this.loginForm.value.password);

    if (found == undefined) {
      alert('Vérifier votre email ou mot de passe !');
    }
    else {

      // JSON.stringify permet de convertir un objet ou un tableau en chaine de caractére (string) 
      // le contraoire de JSON.parse
      localStorage.setItem('authentificated_user', JSON.stringify(found));
      this.router.navigate(['/add-product']);
      // this.router.navigateByUrl('/add-product')
    }
  }

}
