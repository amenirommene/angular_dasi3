import { Component } from '@angular/core';
import { Conference } from '../../models/conference';
import { DatePipe, UpperCasePipe, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conference-list',
  imports: [UpperCasePipe, DatePipe, NgClass, FormsModule],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
///////////prosit 1 ////////////////////////////
now! : Date;
searchTerm!:string="";
list:Conference[] = [];
ngOnInit() {
  //initilaisation de la liste
  this.list= [
  {
    id: 1,
    title: 'Angular 21 Conference',
    description: 'Découvrir les nouveautés d’Angular 21.',
    date: new Date(2026,11,15),
    location: 'Tunis',
    maxParticipants: 50,
    nbParticipants: 25
  },
  {
    id: 2,
    title: 'Signals Workshop',
    description: 'Atelier pratique sur les Signals Angular.',
    date: new Date(2026,11,30),
    location: 'Ariana',
    maxParticipants: 20,
    nbParticipants: 0
  },
  {
    id: 3,
    title: 'Web Conference',
    description: 'Conférence sur le développement web moderne.',
    date: new Date(2026,11,20)  ,
    location: 'Sousse',
    maxParticipants: 30,
    nbParticipants: 28
  },
  {
    id: 4,
    title: 'Ancienne Conference',
    description: 'Cette conférence est ancienne et ne doit pas être affichée.',
    date: new Date(2026,7,15),
    location: 'Tunis',
    maxParticipants: 40,
    nbParticipants: 35
  }
];
  this.list = this.list.filter(conference => conference.date > this.now);

}


inscription(conference: Conference) {
  if (conference.nbParticipants < conference.maxParticipants) {
    conference.nbParticipants++;
  } 
}
couleurBouton(conference: Conference) {
    if (conference.maxParticipants - conference.nbParticipants > 20) {
      return 'btn-green';
    } else if (conference.maxParticipants - conference.nbParticipants < 5) {
      return 'btn-red';
    } else {    
      return 'btn-orange';
    }
  }
}
