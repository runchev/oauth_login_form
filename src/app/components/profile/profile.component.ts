import {Component} from '@angular/core';
import { Auth } from '../../services/auth.service';

@Component({
    moduleId:module.id,
    selector:'profile',
    templateUrl:'profile.component.html',
    providers:[Auth]
})
export class ProfileComponent{
    constructor(private _auth:Auth) {
    }
}