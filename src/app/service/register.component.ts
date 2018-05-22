import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({

  selector: "RegisterComponent",
  templateUrl: 'app/service/register.component.html'
})


export class RegisterComponent{

  http: Http;
  router: Router;
  postResponse: String;
  registerForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl()
  });

  constructor(http: Http, router: Router) {
    this.http = http;
    this.router = router;
    if (localStorage.getItem('token') != null) {
        this.router.navigate(['./']);
    }
  }

  onRegister(): void{


    var data = "firstname=" + this.registerForm.value.firstName +
    "&&lastname=" + this.registerForm.value.lastName +
    "&&username=" + this.registerForm.value.username +
    "&&password=" + this.registerForm.value.password;

    console.log(data);



    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('http://localhost/hotel_exercise/register.php', data, {
               headers: headers })
               .subscribe(
               data => {
               if (data["_body"] == "ok") {
                  this.router.navigate(['./']);
               }else {

                 console.log("Wrong" + data["_body"]);
               }
              });

  }


}
