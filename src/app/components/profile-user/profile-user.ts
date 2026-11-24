import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-profile-user',
  imports: [],
  templateUrl: './profile-user.html',
  styleUrl: './profile-user.css',
})
export class ProfileUser {
  //name : variable classique
  name : string = "Ahmed"
  //email : signal
  email = signal("ahmed@esprit.tn")
  //
  f(){

  }
}
