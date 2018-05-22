import { Component } from '@angular/core';
import {HeaderComponent} from './components/header.component';
import {FooterComponent} from './components/footer.component';
import {BodyComponent} from './components/body.component';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
  styleUrls: ['app.component.css']
})
export class AppComponent  {
  name = 'Angular';


 }
