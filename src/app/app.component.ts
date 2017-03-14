import { Auth } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
  providers:[Auth]
})
export class AppComponent  { 
    constructor(private _auth:Auth) {
    }
}
