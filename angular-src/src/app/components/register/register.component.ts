import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(private validateService: ValidateService, private flashMessages: FlashMessagesService) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    // Required Fields
    if(!this.validateService.validateRegister(user)){
      this.flashMessages.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // Validate emails
    if(!this.validateService.validateEmail(user.email)){
      this.flashMessages.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
  }

}
