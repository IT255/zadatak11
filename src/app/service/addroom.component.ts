import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({

  selector: "AddRoomComponent",
  templateUrl: 'app/service/addroom.component.html'

})

export class AddRoomComponent{

  http: Http;
  router: Router;
  postResponse: String;

  addRoomForm = new FormGroup({
    tipSobe: new FormControl(),
    brojKvadrata: new FormControl(),
    brojKreveta: new FormControl(),
    cena: new FormControl(),
    sprat: new FormControl()
  });
  constructor(http: Http, router: Router) {
  this.http = http;
  this.router = router;

  if (localStorage.getItem('token') != null) {
  this.router.navigate(['./']);
  }

  }

  onAddRoom():void{
    var data = "tip_sobe=" + this.addRoomForm.value.tipSobe +
               "&&broj_kvadrata=" + this.addRoomForm.value.brojKvadrata +
               "&&broj_kreveta=" + this.addRoomForm.value.brojKreveta +
               "&&cena=" + this.addRoomForm.value.cena +
               "&&sprat=" + this.addRoomForm.value.sprat;

              // console.log(data);
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('http://localhost/hotel_exercise/addRoom.php', data, {
               headers: headers })
               .subscribe(
               data => {
               if (data["_body"] == "ok") {
                  this.router.navigate(['./']);
               }else{
                 console.log("Wrong " + data["_body"] );
               }
              });

  }


}
